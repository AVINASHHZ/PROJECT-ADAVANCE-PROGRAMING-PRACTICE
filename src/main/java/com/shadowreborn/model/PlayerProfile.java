package com.shadowreborn.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

/**
 * PlayerProfile represents persistent player progression, loadout, currency balances,
 * weapon levels, and career combat statistics for Shadow Reborn.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class PlayerProfile implements Serializable {
    private static final long serialVersionUID = 1L;

    private String playerId;
    private String playerName;
    private int level;
    private int xp;
    private int coins;
    private int shadowOrbs;
    private String equippedWeapon;
    private String preferredArena;
    private int aiDifficulty;
    private Map<String, Integer> weaponLevels;
    private PlayerStats stats;

    public PlayerProfile() {
        this.playerId = "shadow_master_001";
        this.playerName = "SHADOW";
        this.level = 1;
        this.xp = 0;
        this.coins = 1250;       // Starting bonus coins for testing upgrades
        this.shadowOrbs = 75;    // Starting shadow orbs
        this.equippedWeapon = "katana";
        this.preferredArena = "temple";
        this.aiDifficulty = 1;
        this.weaponLevels = new HashMap<>();
        this.weaponLevels.put("katana", 1);
        this.weaponLevels.put("sai", 1);
        this.weaponLevels.put("naginata", 1);
        this.weaponLevels.put("odachi", 1);
        this.weaponLevels.put("fists", 1);
        this.stats = new PlayerStats();
    }

    public static class PlayerStats implements Serializable {
        private static final long serialVersionUID = 1L;
        private int totalMatches;
        private int wins;
        private int losses;
        private int perfectRounds;
        private int maxCombo;
        private int totalParries;
        private int shadowArtsLanded;

        public PlayerStats() {}

        public int getTotalMatches() { return totalMatches; }
        public void setTotalMatches(int totalMatches) { this.totalMatches = totalMatches; }

        public int getWins() { return wins; }
        public void setWins(int wins) { this.wins = wins; }

        public int getLosses() { return losses; }
        public void setLosses(int losses) { this.losses = losses; }

        public int getPerfectRounds() { return perfectRounds; }
        public void setPerfectRounds(int perfectRounds) { this.perfectRounds = perfectRounds; }

        public int getMaxCombo() { return maxCombo; }
        public void setMaxCombo(int maxCombo) { this.maxCombo = maxCombo; }

        public int getTotalParries() { return totalParries; }
        public void setTotalParries(int totalParries) { this.totalParries = totalParries; }

        public int getShadowArtsLanded() { return shadowArtsLanded; }
        public void setShadowArtsLanded(int shadowArtsLanded) { this.shadowArtsLanded = shadowArtsLanded; }

        public double getWinRate() {
            if (totalMatches <= 0) return 0.0;
            return Math.round(((double) wins / totalMatches) * 1000.0) / 10.0;
        }
    }

    /**
     * Calculates the XP threshold required to reach the next character level.
     */
    public int getXpRequiredForNextLevel() {
        return this.level * 300;
    }

    /**
     * Adds XP and handles progressive level-ups.
     * @return true if player leveled up at least once.
     */
    public boolean addXp(int amount) {
        if (amount <= 0) return false;
        this.xp += amount;
        boolean leveledUp = false;
        while (this.xp >= getXpRequiredForNextLevel()) {
            this.xp -= getXpRequiredForNextLevel();
            this.level++;
            // Grant level-up milestone rewards
            this.coins += 250 * this.level;
            this.shadowOrbs += 15 * this.level;
            leveledUp = true;
        }
        return leveledUp;
    }

    /**
     * Upgrade cost calculations for weapons.
     */
    public static int getCoinCostForLevel(int currentLevel) {
        switch (currentLevel) {
            case 1: return 250;
            case 2: return 500;
            case 3: return 1000;
            case 4: return 2000;
            default: return 999999;
        }
    }

    public static int getOrbCostForLevel(int currentLevel) {
        switch (currentLevel) {
            case 1: return 0;
            case 2: return 10;
            case 3: return 25;
            case 4: return 50;
            default: return 999999;
        }
    }

    public static double getDamageMultiplierForLevel(int level) {
        return 1.0 + (level - 1) * 0.10; // +10% per level
    }

    public static double getSpeedMultiplierForLevel(int level) {
        return 1.0 + (level - 1) * 0.05; // +5% per level
    }

    // Getters and Setters
    public String getPlayerId() { return playerId; }
    public void setPlayerId(String playerId) { this.playerId = playerId; }

    public String getPlayerName() { return playerName; }
    public void setPlayerName(String playerName) { this.playerName = playerName; }

    public int getLevel() { return level; }
    public void setLevel(int level) { this.level = level; }

    public int getXp() { return xp; }
    public void setXp(int xp) { this.xp = xp; }

    public int getCoins() { return coins; }
    public void setCoins(int coins) { this.coins = coins; }

    public int getShadowOrbs() { return shadowOrbs; }
    public void setShadowOrbs(int shadowOrbs) { this.shadowOrbs = shadowOrbs; }

    public String getEquippedWeapon() { return equippedWeapon; }
    public void setEquippedWeapon(String equippedWeapon) { this.equippedWeapon = equippedWeapon; }

    public String getPreferredArena() { return preferredArena; }
    public void setPreferredArena(String preferredArena) { this.preferredArena = preferredArena; }

    public int getAiDifficulty() { return aiDifficulty; }
    public void setAiDifficulty(int aiDifficulty) { this.aiDifficulty = aiDifficulty; }

    public Map<String, Integer> getWeaponLevels() {
        if (weaponLevels == null) weaponLevels = new HashMap<>();
        return weaponLevels;
    }
    public void setWeaponLevels(Map<String, Integer> weaponLevels) { this.weaponLevels = weaponLevels; }

    public PlayerStats getStats() {
        if (stats == null) stats = new PlayerStats();
        return stats;
    }
    public void setStats(PlayerStats stats) { this.stats = stats; }
}
