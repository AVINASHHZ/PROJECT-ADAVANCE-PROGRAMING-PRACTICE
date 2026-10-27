package com.shadowreborn.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;

/**
 * MatchRecord captures historical battle metrics, score, rewards, and performance data
 * for persistence and leaderboard aggregation.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class MatchRecord implements Serializable {
    private static final long serialVersionUID = 1L;

    private String matchId;
    private long timestamp;
    private String winner;
    private int playerRoundsWon;
    private int opponentRoundsWon;
    private String weaponUsed;
    private int aiDifficulty;
    private String arena;
    private int maxCombo;
    private int parriesLanded;
    private int shadowArtsUsed;
    private int remainingHp;
    private int durationSeconds;
    private int xpEarned;
    private int coinsEarned;
    private int shadowOrbsEarned;
    private int score;

    public MatchRecord() {}

    public static int calculateScore(String winner, int remainingHp, int maxCombo, int parriesLanded, int shadowArtsUsed, int durationSeconds, int aiDifficulty) {
        int base = "SHADOW".equalsIgnoreCase(winner) ? 1200 : 250;
        int diffMultiplier = (aiDifficulty == 2) ? 3 : (aiDifficulty == 1 ? 2 : 1);
        int score = (base + remainingHp + (maxCombo * 65) + (parriesLanded * 45) + (shadowArtsUsed * 35) - (durationSeconds * 2)) * diffMultiplier;
        return Math.max(100, score);
    }

    public String getMatchId() { return matchId; }
    public void setMatchId(String matchId) { this.matchId = matchId; }

    public long getTimestamp() { return timestamp; }
    public void setTimestamp(long timestamp) { this.timestamp = timestamp; }

    public String getWinner() { return winner; }
    public void setWinner(String winner) { this.winner = winner; }

    public int getPlayerRoundsWon() { return playerRoundsWon; }
    public void setPlayerRoundsWon(int playerRoundsWon) { this.playerRoundsWon = playerRoundsWon; }

    public int getOpponentRoundsWon() { return opponentRoundsWon; }
    public void setOpponentRoundsWon(int opponentRoundsWon) { this.opponentRoundsWon = opponentRoundsWon; }

    public String getWeaponUsed() { return weaponUsed; }
    public void setWeaponUsed(String weaponUsed) { this.weaponUsed = weaponUsed; }

    public int getAiDifficulty() { return aiDifficulty; }
    public void setAiDifficulty(int aiDifficulty) { this.aiDifficulty = aiDifficulty; }

    public String getArena() { return arena; }
    public void setArena(String arena) { this.arena = arena; }

    public int getMaxCombo() { return maxCombo; }
    public void setMaxCombo(int maxCombo) { this.maxCombo = maxCombo; }

    public int getParriesLanded() { return parriesLanded; }
    public void setParriesLanded(int parriesLanded) { this.parriesLanded = parriesLanded; }

    public int getShadowArtsUsed() { return shadowArtsUsed; }
    public void setShadowArtsUsed(int shadowArtsUsed) { this.shadowArtsUsed = shadowArtsUsed; }

    public int getRemainingHp() { return remainingHp; }
    public void setRemainingHp(int remainingHp) { this.remainingHp = remainingHp; }

    public int getDurationSeconds() { return durationSeconds; }
    public void setDurationSeconds(int durationSeconds) { this.durationSeconds = durationSeconds; }

    public int getXpEarned() { return xpEarned; }
    public void setXpEarned(int xpEarned) { this.xpEarned = xpEarned; }

    public int getCoinsEarned() { return coinsEarned; }
    public void setCoinsEarned(int coinsEarned) { this.coinsEarned = coinsEarned; }

    public int getShadowOrbsEarned() { return shadowOrbsEarned; }
    public void setShadowOrbsEarned(int shadowOrbsEarned) { this.shadowOrbsEarned = shadowOrbsEarned; }

    public int getScore() { return score; }
    public void setScore(int score) { this.score = score; }
}
