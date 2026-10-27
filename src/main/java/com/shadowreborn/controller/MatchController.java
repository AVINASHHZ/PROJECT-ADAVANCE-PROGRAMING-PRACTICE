package com.shadowreborn.controller;

import com.shadowreborn.model.*;
import com.shadowreborn.service.PersistenceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

/**
 * MatchController manages match sessions, victory telemetry resolution,
 * and leaderboard queries.
 */
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class MatchController {

    private final PersistenceService persistenceService;
    private final Map<String, MatchSession> activeSessions = new ConcurrentHashMap<>();

    public MatchController(PersistenceService persistenceService) {
        this.persistenceService = persistenceService;
    }

    @PostMapping("/match/start")
    public ResponseEntity<Map<String, Object>> startMatch(@RequestBody MatchStartRequest req) {
        String matchId = UUID.randomUUID().toString();
        long now = System.currentTimeMillis();

        MatchSession session = new MatchSession(
            matchId,
            now,
            req.getPlayerWeapon() != null ? req.getPlayerWeapon() : "katana",
            req.getAiDifficulty(),
            req.getArena() != null ? req.getArena() : "temple"
        );
        activeSessions.put(matchId, session);

        Map<String, Object> resp = new HashMap<>();
        resp.put("matchId", matchId);
        resp.put("startedAt", now);
        resp.put("status", "ACTIVE");
        return ResponseEntity.ok(resp);
    }

    @PostMapping("/match/complete")
    public ResponseEntity<MatchCompleteResponse> completeMatch(@RequestBody MatchCompleteRequest req) {
        if (req.getMatchId() != null) {
            activeSessions.remove(req.getMatchId());
        }

        MatchCompleteResponse response = persistenceService.processMatchCompletion(req);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/leaderboard")
    public ResponseEntity<Map<String, Object>> getLeaderboard(@RequestParam(defaultValue = "10") int limit) {
        List<MatchRecord> topMatches = persistenceService.getLeaderboard(limit);
        PlayerProfile profile = persistenceService.getProfile();

        Map<String, Object> resp = new HashMap<>();
        resp.put("leaderboard", topMatches);
        resp.put("careerStats", profile.getStats());
        resp.put("playerLevel", profile.getLevel());
        return ResponseEntity.ok(resp);
    }
}
