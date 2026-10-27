package com.shadowreborn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main Entry Point for Shadow Reborn: Shadow Fight 2 Edition Backend Server.
 * Serves static game files, REST APIs, and WebSocket real-time multiplayer.
 */
@SpringBootApplication
public class ShadowRebornServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(ShadowRebornServerApplication.class, args);
        System.out.println("==================================================================");
        System.out.println("  SHADOW REBORN — PRODUCTION GAME SERVER ONLINE");
        System.out.println("  Web Game Client: http://localhost:8080/");
        System.out.println("  REST Profile API: http://localhost:8080/api/profile");
        System.out.println("  REST Match API:   http://localhost:8080/api/match/start");
        System.out.println("  Leaderboard:      http://localhost:8080/api/leaderboard");
        System.out.println("  WebSocket Combat: ws://localhost:8080/ws/combat");
        System.out.println("==================================================================");
    }
}
