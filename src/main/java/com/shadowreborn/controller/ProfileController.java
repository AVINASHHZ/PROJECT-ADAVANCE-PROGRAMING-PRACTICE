package com.shadowreborn.controller;

import com.shadowreborn.model.EquipRequest;
import com.shadowreborn.model.PlayerProfile;
import com.shadowreborn.model.UpgradeRequest;
import com.shadowreborn.service.PersistenceService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * ProfileController exposes REST endpoints for retrieving player profile,
 * equipping loadouts, and upgrading weapons.
 */
@RestController
@RequestMapping("/api/profile")
@CrossOrigin(origins = "*")
public class ProfileController {

    private final PersistenceService persistenceService;

    public ProfileController(PersistenceService persistenceService) {
        this.persistenceService = persistenceService;
    }

    @GetMapping
    public ResponseEntity<PlayerProfile> getProfile() {
        PlayerProfile profile = persistenceService.getProfile();
        return ResponseEntity.ok(profile);
    }

    @PostMapping("/equip")
    public ResponseEntity<PlayerProfile> equip(@RequestBody EquipRequest req) {
        PlayerProfile updated = persistenceService.equip(
            req.getWeaponKey(),
            req.getArena(),
            req.getAiDifficulty()
        );
        return ResponseEntity.ok(updated);
    }

    @PostMapping("/upgrade-weapon")
    public ResponseEntity<?> upgradeWeapon(@RequestBody UpgradeRequest req) {
        try {
            PlayerProfile updated = persistenceService.upgradeWeapon(req.getWeaponKey());
            return ResponseEntity.ok(updated);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        } catch (IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(Map.of("error", e.getMessage()));
        }
    }
}
