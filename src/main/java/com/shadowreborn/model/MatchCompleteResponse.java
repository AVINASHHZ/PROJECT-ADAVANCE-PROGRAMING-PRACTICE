package com.shadowreborn.model;

import java.io.Serializable;

/**
 * MatchCompleteResponse delivers earned XP, currency breakdowns, level-up milestones,
 * and updated player statistics back to the frontend.
 */
public class MatchCompleteResponse implements Serializable {
    private static final long serialVersionUID = 1L;

    private String matchId;
    private String winner;
    private int xpEarned;
    private int coinsEarned;
    private int shadowOrbsEarned;
    private boolean leveledUp;
    private int newLevel;
    private int currentXp;
    private int xpForNextLevel;
    private int totalCoins;
    private int totalShadowOrbs;
    private int score;
    private PlayerProfile.PlayerStats stats;

    public MatchCompleteResponse() {}

    public String getMatchId() { return matchId; }
    public void setMatchId(String matchId) { this.matchId = matchId; }

    public String getWinner() { return winner; }
    public void setWinner(String winner) { this.winner = winner; }

    public int getXpEarned() { return xpEarned; }
    public void setXpEarned(int xpEarned) { this.xpEarned = xpEarned; }

    public int getCoinsEarned() { return coinsEarned; }
    public void setCoinsEarned(int coinsEarned) { this.coinsEarned = coinsEarned; }

    public int getShadowOrbsEarned() { return shadowOrbsEarned; }
    public void setShadowOrbsEarned(int shadowOrbsEarned) { this.shadowOrbsEarned = shadowOrbsEarned; }

    public boolean isLeveledUp() { return leveledUp; }
    public void setLeveledUp(boolean leveledUp) { this.leveledUp = leveledUp; }

    public int getNewLevel() { return newLevel; }
    public void setNewLevel(int newLevel) { this.newLevel = newLevel; }

    public int getCurrentXp() { return currentXp; }
    public void setCurrentXp(int currentXp) { this.currentXp = currentXp; }

    public int getXpForNextLevel() { return xpForNextLevel; }
    public void setXpForNextLevel(int xpForNextLevel) { this.xpForNextLevel = xpForNextLevel; }

    public int getTotalCoins() { return totalCoins; }
    public void setTotalCoins(int totalCoins) { this.totalCoins = totalCoins; }

    public int getTotalShadowOrbs() { return totalShadowOrbs; }
    public void setTotalShadowOrbs(int totalShadowOrbs) { this.totalShadowOrbs = totalShadowOrbs; }

    public int getScore() { return score; }
    public void setScore(int score) { this.score = score; }

    public PlayerProfile.PlayerStats getStats() { return stats; }
    public void setStats(PlayerProfile.PlayerStats stats) { this.stats = stats; }
}
