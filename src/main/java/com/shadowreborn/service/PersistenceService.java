package com.shadowreborn.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.shadowreborn.model.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import java.io.File;
import java.io.IOException;
import java.util.*;
import java.util.concurrent.locks.ReentrantReadWriteLock;

/**
 * Thread-Safe Local File Persistence Service for Shadow Reborn.
 * Saves player profiles, weapon upgrades, currency balances, and match history
 * to a local JSON file (data/shadow_reborn_save.json).
 */
@Service
public class PersistenceService {

    @Value("${game.save.path:data/shadow_reborn_save.json}")
    private String saveFilePath;

    private final ObjectMapper mapper;
    private final ReentrantReadWriteLock rwLock = new ReentrantReadWriteLock();
    private SaveData currentData;

    public PersistenceService() {
        this.mapper = new ObjectMapper();
        this.mapper.enable(SerializationFeature.INDENT_OUTPUT);
    }

    public static class SaveData {
        private PlayerProfile profile;
        private List<MatchRecord> matchHistory;

        public SaveData() {
            this.profile = new PlayerProfile();
            this.matchHistory = new ArrayList<>();
        }

        public PlayerProfile getProfile() {
            if (profile == null) profile = new PlayerProfile();
            return profile;
        }
        public void setProfile(PlayerProfile profile) { this.profile = profile; }

        public List<MatchRecord> getMatchHistory() {
            if (matchHistory == null) matchHistory = new ArrayList<>();
            return matchHistory;
        }
        public void setMatchHistory(List<MatchRecord> matchHistory) { this.matchHistory = matchHistory; }
    }

    @PostConstruct
    public void init() {
        rwLock.writeLock().lock();
        try {
            File file = new File(saveFilePath);
            if (file.exists() && file.length() > 0) {
                try {
                    this.currentData = mapper.readValue(file, SaveData.class);
                    // Ensure weapon levels has all 5 weapons
                    Map<String, Integer> lvls = currentData.getProfile().getWeaponLevels();
                    for (String w : List.of("katana", "sai", "naginata", "odachi", "fists")) {
                        lvls.putIfAbsent(w, 1);
                    }
                    System.out.println("[Shadow Reborn] Loaded save file successfully: " + file.getAbsolutePath());
                    return;
                } catch (IOException e) {
                    System.err.println("[Shadow Reborn] Warning: Failed to parse save file. Initializing defaults: " + e.getMessage());
                }
            }

            // Create initial data & file
            this.currentData = new SaveData();
            persistToDisk();
            System.out.println("[Shadow Reborn] Created fresh game save file at: " + file.getAbsolutePath());
        } finally {
            rwLock.writeLock().unlock();
        }
    }

    private void persistToDisk() {
        try {
            File file = new File(saveFilePath);
            File parent = file.getParentFile();
            if (parent != null && !parent.exists()) {
                parent.mkdirs();
            }
            mapper.writeValue(file, currentData);
        } catch (IOException e) {
            System.err.println("[Shadow Reborn] Error persisting save data: " + e.getMessage());
        }
    }

    public PlayerProfile getProfile() {
        rwLock.readLock().lock();
        try {
            return currentData.getProfile();
        } finally {
            rwLock.readLock().unlock();
        }
    }

    public PlayerProfile equip(String weaponKey, String arena, Integer aiDifficulty) {
        rwLock.writeLock().lock();
        try {
            PlayerProfile profile = currentData.getProfile();
            if (weaponKey != null && !weaponKey.isBlank()) {
                profile.setEquippedWeapon(weaponKey.toLowerCase().trim());
            }
            if (arena != null && !arena.isBlank()) {
                profile.setPreferredArena(arena.toLowerCase().trim());
            }
            if (aiDifficulty != null && aiDifficulty >= 0 && aiDifficulty <= 2) {
                profile.setAiDifficulty(aiDifficulty);
            }
            persistToDisk();
            return profile;
        } finally {
            rwLock.writeLock().unlock();
        }
    }

    public PlayerProfile upgradeWeapon(String weaponKey) {
        if (weaponKey == null || weaponKey.isBlank()) {
            throw new IllegalArgumentException("Weapon key cannot be empty.");
        }
        weaponKey = weaponKey.toLowerCase().trim();

        rwLock.writeLock().lock();
        try {
            PlayerProfile profile = currentData.getProfile();
            Map<String, Integer> levels = profile.getWeaponLevels();
            int currentLevel = levels.getOrDefault(weaponKey, 1);

            if (currentLevel >= 5) {
                throw new IllegalStateException("Weapon '" + weaponKey + "' has already reached MAX level (Level 5).");
            }

            int coinCost = PlayerProfile.getCoinCostForLevel(currentLevel);
            int orbCost = PlayerProfile.getOrbCostForLevel(currentLevel);

            if (profile.getCoins() < coinCost) {
                throw new IllegalStateException("Insufficient coins. Required: " + coinCost + " 🪙, Current: " + profile.getCoins() + " 🪙");
            }
            if (profile.getShadowOrbs() < orbCost) {
                throw new IllegalStateException("Insufficient shadow orbs. Required: " + orbCost + " 🔮, Current: " + profile.getShadowOrbs() + " 🔮");
            }

            // Deduct currencies & apply upgrade
            profile.setCoins(profile.getCoins() - coinCost);
            profile.setShadowOrbs(profile.getShadowOrbs() - orbCost);
            levels.put(weaponKey, currentLevel + 1);

            persistToDisk();
            return profile;
        } finally {
            rwLock.writeLock().unlock();
        }
    }

    public MatchCompleteResponse processMatchCompletion(MatchCompleteRequest req) {
        rwLock.writeLock().lock();
        try {
            PlayerProfile profile = currentData.getProfile();
            PlayerProfile.PlayerStats stats = profile.getStats();

            boolean isShadowWinner = "SHADOW".equalsIgnoreCase(req.getWinner());

            // 1. Base Rewards calculation
            double diffMultiplier = switch (req.getAiDifficulty()) {
                case 2 -> 2.5; // Eclipse Grandmaster
                case 1 -> 1.5; // Shadow Master
                default -> 1.0; // Initiate
            };

            int baseCoins = isShadowWinner ? 300 : 80;
            int baseExp = isShadowWinner ? 220 : 60;
            int baseOrbs = isShadowWinner ? 18 : 3;

            // Combat performance bonuses
            int comboBonusCoins = req.getMaxCombo() * 20;
            int comboBonusXp = req.getMaxCombo() * 12;

            int parryBonusCoins = req.getParriesLanded() * 35;
            int parryBonusXp = req.getParriesLanded() * 18;

            int shadowBonusCoins = req.getShadowArtsUsed() * 25;
            int shadowBonusOrbs = req.getShadowArtsUsed() * 4;

            int hpBonusCoins = Math.max(0, req.getRemainingHp() / 5);

            int earnedCoins = (int) Math.round((baseCoins + comboBonusCoins + parryBonusCoins + shadowBonusCoins + hpBonusCoins) * diffMultiplier);
            int earnedXp = (int) Math.round((baseExp + comboBonusXp + parryBonusXp) * diffMultiplier);
            int earnedOrbs = (int) Math.round((baseOrbs + shadowBonusOrbs) * (diffMultiplier >= 2.0 ? 1.5 : 1.0));

            // Flawless match bonus (won 2-0 with full HP)
            if (isShadowWinner && req.getPlayerRoundsWon() >= 2 && req.getOpponentRoundsWon() == 0 && req.getRemainingHp() >= 950) {
                earnedCoins += 250;
                earnedXp += 150;
                earnedOrbs += 10;
                stats.setPerfectRounds(stats.getPerfectRounds() + 1);
            }

            // 2. Apply XP and Currency
            boolean leveledUp = profile.addXp(earnedXp);
            profile.setCoins(profile.getCoins() + earnedCoins);
            profile.setShadowOrbs(profile.getShadowOrbs() + earnedOrbs);

            // 3. Update Career Stats
            stats.setTotalMatches(stats.getTotalMatches() + 1);
            if (isShadowWinner) {
                stats.setWins(stats.getWins() + 1);
            } else {
                stats.setLosses(stats.getLosses() + 1);
            }
            stats.setMaxCombo(Math.max(stats.getMaxCombo(), req.getMaxCombo()));
            stats.setTotalParries(stats.getTotalParries() + req.getParriesLanded());
            stats.setShadowArtsLanded(stats.getShadowArtsLanded() + req.getShadowArtsUsed());

            // 4. Save Match Record
            MatchRecord record = new MatchRecord();
            record.setMatchId(req.getMatchId() != null ? req.getMatchId() : UUID.randomUUID().toString());
            record.setTimestamp(System.currentTimeMillis());
            record.setWinner(req.getWinner());
            record.setPlayerRoundsWon(req.getPlayerRoundsWon());
            record.setOpponentRoundsWon(req.getOpponentRoundsWon());
            record.setWeaponUsed(req.getWeaponUsed());
            record.setAiDifficulty(req.getAiDifficulty());
            record.setArena(req.getArena());
            record.setMaxCombo(req.getMaxCombo());
            record.setParriesLanded(req.getParriesLanded());
            record.setShadowArtsUsed(req.getShadowArtsUsed());
            record.setRemainingHp(req.getRemainingHp());
            record.setDurationSeconds(req.getDurationSeconds());
            record.setXpEarned(earnedXp);
            record.setCoinsEarned(earnedCoins);
            record.setShadowOrbsEarned(earnedOrbs);

            int matchScore = MatchRecord.calculateScore(
                req.getWinner(),
                req.getRemainingHp(),
                req.getMaxCombo(),
                req.getParriesLanded(),
                req.getShadowArtsUsed(),
                req.getDurationSeconds(),
                req.getAiDifficulty()
            );
            record.setScore(matchScore);

            currentData.getMatchHistory().add(0, record); // Most recent first
            if (currentData.getMatchHistory().size() > 50) {
                currentData.setMatchHistory(new ArrayList<>(currentData.getMatchHistory().subList(0, 50)));
            }

            persistToDisk();

            // 5. Construct Response
            MatchCompleteResponse resp = new MatchCompleteResponse();
            resp.setMatchId(record.getMatchId());
            resp.setWinner(record.getWinner());
            resp.setXpEarned(earnedXp);
            resp.setCoinsEarned(earnedCoins);
            resp.setShadowOrbsEarned(earnedOrbs);
            resp.setLeveledUp(leveledUp);
            resp.setNewLevel(profile.getLevel());
            resp.setCurrentXp(profile.getXp());
            resp.setXpForNextLevel(profile.getXpRequiredForNextLevel());
            resp.setTotalCoins(profile.getCoins());
            resp.setTotalShadowOrbs(profile.getShadowOrbs());
            resp.setScore(matchScore);
            resp.setStats(stats);

            return resp;
        } finally {
            rwLock.writeLock().unlock();
        }
    }

    public List<MatchRecord> getLeaderboard(int limit) {
        rwLock.readLock().lock();
        try {
            List<MatchRecord> list = new ArrayList<>(currentData.getMatchHistory());
            list.sort((a, b) -> Integer.compare(b.getScore(), a.getScore()));
            if (list.size() > limit) {
                return list.subList(0, limit);
            }
            return list;
        } finally {
            rwLock.readLock().unlock();
        }
    }
}
