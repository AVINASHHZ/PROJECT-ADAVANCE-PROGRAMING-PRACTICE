package com.shadowreborn.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;

@JsonIgnoreProperties(ignoreUnknown = true)
public class MatchStartRequest implements Serializable {
    private static final long serialVersionUID = 1L;

    private String playerWeapon;
    private int aiDifficulty;
    private String arena;

    public MatchStartRequest() {}

    public String getPlayerWeapon() { return playerWeapon; }
    public void setPlayerWeapon(String playerWeapon) { this.playerWeapon = playerWeapon; }

    public int getAiDifficulty() { return aiDifficulty; }
    public void setAiDifficulty(int aiDifficulty) { this.aiDifficulty = aiDifficulty; }

    public String getArena() { return arena; }
    public void setArena(String arena) { this.arena = arena; }
}
