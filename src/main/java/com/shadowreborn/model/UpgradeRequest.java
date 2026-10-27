package com.shadowreborn.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;

@JsonIgnoreProperties(ignoreUnknown = true)
public class UpgradeRequest implements Serializable {
    private static final long serialVersionUID = 1L;

    private String weaponKey;

    public UpgradeRequest() {}

    public UpgradeRequest(String weaponKey) {
        this.weaponKey = weaponKey;
    }

    public String getWeaponKey() { return weaponKey; }
    public void setWeaponKey(String weaponKey) { this.weaponKey = weaponKey; }
}
