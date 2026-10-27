package com.shadowreborn.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;

@JsonIgnoreProperties(ignoreUnknown = true)
public class EquipRequest implements Serializable {
    private static final long serialVersionUID = 1L;

    private String weaponKey;
    private String arena;
    private Integer aiDifficulty;

    public EquipRequest() {}

    public String getWeaponKey() { return weaponKey; }
    public void setWeaponKey(String weaponKey) { this.weaponKey = weaponKey; }

    public String getArena() { return arena; }
    public void setArena(String arena) { this.arena = arena; }

    public Integer getAiDifficulty() { return aiDifficulty; }
    public void setAiDifficulty(Integer aiDifficulty) { this.aiDifficulty = aiDifficulty; }
}
