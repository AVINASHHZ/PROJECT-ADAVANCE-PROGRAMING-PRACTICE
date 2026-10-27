package com.shadowreborn.model;

import java.io.Serializable;

/**
 * In-memory representation of an active match session.
 */
public class MatchSession implements Serializable {
    private static final long serialVersionUID = 1L;

    private String matchId;
    private long startedAt;
    private String playerWeapon;
    private int aiDifficulty;
    private String arena;

    public MatchSession() {}

    public MatchSession(String matchId, long startedAt, String playerWeapon, int aiDifficulty, String arena) {
        this.matchId = matchId;
        this.startedAt = startedAt;
        this.playerWeapon = playerWeapon;
        this.aiDifficulty = aiDifficulty;
        this.arena = arena;
    }

    public String getMatchId() { return matchId; }
    public void setMatchId(String matchId) { this.matchId = matchId; }

    public long getStartedAt() { return startedAt; }
    public void setStartedAt(long startedAt) { this.startedAt = startedAt; }

    public String getPlayerWeapon() { return playerWeapon; }
    public void setPlayerWeapon(String playerWeapon) { this.playerWeapon = playerWeapon; }

    public int getAiDifficulty() { return aiDifficulty; }
    public void setAiDifficulty(int aiDifficulty) { this.aiDifficulty = aiDifficulty; }

    public String getArena() { return arena; }
    public void setArena(String arena) { this.arena = arena; }
}
