package com.shadowreborn.standalone;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

import java.io.*;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.locks.ReentrantReadWriteLock;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Pure Zero-Dependency Java 17+ HTTP and WebSocket Game Server.
 * Implements 100% of the REST API endpoints, static file hosting, and real-time WebSocket
 * multiplayer combat using only standard JDK classes (com.sun.net.httpserver + pure RFC 6455).
 * Compiles and runs out-of-the-box with just 'javac' and 'java' without requiring Maven.
 */
public class StandaloneServer {

    private static final int PORT = 8080;
    private static final String SAVE_FILE = "data/shadow_reborn_save.json";
    private static final ReentrantReadWriteLock rwLock = new ReentrantReadWriteLock();

    // In-memory data store
    private static final Map<String, Object> saveState = new ConcurrentHashMap<>();
    private static final List<Map<String, Object>> matchHistory = new CopyOnWriteArrayList<>();
    private static final Map<String, Long> activeSessions = new ConcurrentHashMap<>();

    // Real-Time Combat Rooms for WebSocket
    private static final Map<String, WsRoom> combatRooms = new ConcurrentHashMap<>();

    public static void main(String[] args) throws Exception {
        loadSaveData();

        HttpServer server = HttpServer.create(new InetSocketAddress("0.0.0.0", PORT), 0);
        ThreadPoolExecutor executor = (ThreadPoolExecutor) Executors.newFixedThreadPool(16);
        server.setExecutor(executor);

        // 1. Static Game Hosting
        server.createContext("/", new StaticFileHandler());

        // 2. REST API Endpoints
        server.createContext("/api/profile", new ProfileHandler());
        server.createContext("/api/match/start", new MatchStartHandler());
        server.createContext("/api/match/complete", new MatchCompleteHandler());
        server.createContext("/api/leaderboard", new LeaderboardHandler());

        // 3. WebSocket Real-Time Combat Server (TCP RFC 6455 on port 8085 or via raw socket upgrade)
        startWebSocketListener(8085);

        server.start();

        System.out.println("==================================================================");
        System.out.println("  SHADOW REBORN — STANDALONE ZERO-DEPENDENCY SERVER ONLINE");
        System.out.println("  Web Game Client: http://localhost:" + PORT + "/");
        System.out.println("  REST Profile:    http://localhost:" + PORT + "/api/profile");
        System.out.println("  REST Match:      http://localhost:" + PORT + "/api/match/start");
        System.out.println("  Leaderboard:     http://localhost:" + PORT + "/api/leaderboard");
        System.out.println("  WebSocket Combat: ws://localhost:8085/ws/combat");
        System.out.println("  Data Persistence: " + new File(SAVE_FILE).getAbsolutePath());
        System.out.println("==================================================================");
    }

    // ============================================================================
    // PERSISTENCE ENGINE
    // ============================================================================
    private static void loadSaveData() {
        rwLock.writeLock().lock();
        try {
            File file = new File(SAVE_FILE);
            if (file.exists() && file.length() > 0) {
                try {
                    String json = new String(java.nio.file.Files.readAllBytes(file.toPath()), StandardCharsets.UTF_8);
                    parseSaveJson(json);
                    System.out.println("[StandaloneServer] Successfully loaded existing save from: " + SAVE_FILE);
                    return;
                } catch (Exception e) {
                    System.err.println("[StandaloneServer] Warning: Failed to parse save file. Initializing defaults: " + e.getMessage());
                }
            }

            initDefaultSave();
            persistSaveData();
        } finally {
            rwLock.writeLock().unlock();
        }
    }

    private static void initDefaultSave() {
        saveState.put("playerId", "shadow_master_001");
        saveState.put("playerName", "SHADOW");
        saveState.put("level", 1);
        saveState.put("xp", 0);
        saveState.put("coins", 1250);
        saveState.put("shadowOrbs", 75);
        saveState.put("equippedWeapon", "katana");
        saveState.put("preferredArena", "temple");
        saveState.put("aiDifficulty", 1);

        Map<String, Integer> lvls = new HashMap<>();
        lvls.put("katana", 1);
        lvls.put("sai", 1);
        lvls.put("naginata", 1);
        lvls.put("odachi", 1);
        lvls.put("fists", 1);
        saveState.put("weaponLevels", lvls);

        Map<String, Integer> stats = new HashMap<>();
        stats.put("totalMatches", 0);
        stats.put("wins", 0);
        stats.put("losses", 0);
        stats.put("perfectRounds", 0);
        stats.put("maxCombo", 0);
        stats.put("totalParries", 0);
        stats.put("shadowArtsLanded", 0);
        saveState.put("stats", stats);
    }

    private static void persistSaveData() {
        try {
            File file = new File(SAVE_FILE);
            File parent = file.getParentFile();
            if (parent != null && !parent.exists()) parent.mkdirs();

            StringBuilder sb = new StringBuilder();
            sb.append("{\n");
            sb.append("  \"profile\": {\n");
            sb.append("    \"playerId\": \"").append(saveState.get("playerId")).append("\",\n");
            sb.append("    \"playerName\": \"").append(saveState.get("playerName")).append("\",\n");
            sb.append("    \"level\": ").append(saveState.get("level")).append(",\n");
            sb.append("    \"xp\": ").append(saveState.get("xp")).append(",\n");
            sb.append("    \"coins\": ").append(saveState.get("coins")).append(",\n");
            sb.append("    \"shadowOrbs\": ").append(saveState.get("shadowOrbs")).append(",\n");
            sb.append("    \"equippedWeapon\": \"").append(saveState.get("equippedWeapon")).append("\",\n");
            sb.append("    \"preferredArena\": \"").append(saveState.get("preferredArena")).append("\",\n");
            sb.append("    \"aiDifficulty\": ").append(saveState.get("aiDifficulty")).append(",\n");

            @SuppressWarnings("unchecked")
            Map<String, Integer> lvls = (Map<String, Integer>) saveState.get("weaponLevels");
            sb.append("    \"weaponLevels\": {\n");
            int wi = 0;
            for (Map.Entry<String, Integer> e : lvls.entrySet()) {
                sb.append("      \"").append(e.getKey()).append("\": ").append(e.getValue());
                if (++wi < lvls.size()) sb.append(",");
                sb.append("\n");
            }
            sb.append("    },\n");

            @SuppressWarnings("unchecked")
            Map<String, Integer> stats = (Map<String, Integer>) saveState.get("stats");
            sb.append("    \"stats\": {\n");
            int si = 0;
            for (Map.Entry<String, Integer> e : stats.entrySet()) {
                sb.append("      \"").append(e.getKey()).append("\": ").append(e.getValue());
                if (++si < stats.size()) sb.append(",");
                sb.append("\n");
            }
            sb.append("    }\n");
            sb.append("  },\n");

            sb.append("  \"matchHistory\": [\n");
            for (int i = 0; i < matchHistory.size(); i++) {
                Map<String, Object> m = matchHistory.get(i);
                sb.append("    {");
                int f = 0;
                for (Map.Entry<String, Object> e : m.entrySet()) {
                    sb.append("\"").append(e.getKey()).append("\":");
                    if (e.getValue() instanceof String) {
                        sb.append("\"").append(e.getValue()).append("\"");
                    } else {
                        sb.append(e.getValue());
                    }
                    if (++f < m.size()) sb.append(",");
                }
                sb.append("}");
                if (i < matchHistory.size() - 1) sb.append(",");
                sb.append("\n");
            }
            sb.append("  ]\n");
            sb.append("}\n");

            java.nio.file.Files.writeString(file.toPath(), sb.toString(), StandardCharsets.UTF_8);
        } catch (Exception e) {
            System.err.println("[StandaloneServer] Error saving data: " + e.getMessage());
        }
    }

    private static void parseSaveJson(String json) {
        initDefaultSave();
        saveState.put("level", extractInt(json, "\"level\"\\s*:\\s*(\\d+)", 1));
        saveState.put("xp", extractInt(json, "\"xp\"\\s*:\\s*(\\d+)", 0));
        saveState.put("coins", extractInt(json, "\"coins\"\\s*:\\s*(\\d+)", 1250));
        saveState.put("shadowOrbs", extractInt(json, "\"shadowOrbs\"\\s*:\\s*(\\d+)", 75));
        saveState.put("equippedWeapon", extractString(json, "\"equippedWeapon\"\\s*:\\s*\"([^\"]+)\"", "katana"));
        saveState.put("preferredArena", extractString(json, "\"preferredArena\"\\s*:\\s*\"([^\"]+)\"", "temple"));
        saveState.put("aiDifficulty", extractInt(json, "\"aiDifficulty\"\\s*:\\s*(\\d+)", 1));

        @SuppressWarnings("unchecked")
        Map<String, Integer> lvls = (Map<String, Integer>) saveState.get("weaponLevels");
        for (String w : List.of("katana", "sai", "naginata", "odachi", "fists")) {
            lvls.put(w, extractInt(json, "\"" + w + "\"\\s*:\\s*(\\d+)", 1));
        }

        @SuppressWarnings("unchecked")
        Map<String, Integer> stats = (Map<String, Integer>) saveState.get("stats");
        stats.put("totalMatches", extractInt(json, "\"totalMatches\"\\s*:\\s*(\\d+)", 0));
        stats.put("wins", extractInt(json, "\"wins\"\\s*:\\s*(\\d+)", 0));
        stats.put("losses", extractInt(json, "\"losses\"\\s*:\\s*(\\d+)", 0));
        stats.put("perfectRounds", extractInt(json, "\"perfectRounds\"\\s*:\\s*(\\d+)", 0));
        stats.put("maxCombo", extractInt(json, "\"maxCombo\"\\s*:\\s*(\\d+)", 0));
        stats.put("totalParries", extractInt(json, "\"totalParries\"\\s*:\\s*(\\d+)", 0));
        stats.put("shadowArtsLanded", extractInt(json, "\"shadowArtsLanded\"\\s*:\\s*(\\d+)", 0));
    }

    // ============================================================================
    // HTTP HANDLERS
    // ============================================================================

    static class StaticFileHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange ex) throws IOException {
            String path = ex.getRequestURI().getPath();
            if (path == null || path.equals("/") || path.isBlank()) {
                path = "/index.html";
            }

            File file = new File("src/main/resources/static" + path);
            if (!file.exists()) {
                file = new File(path.startsWith("/") ? path.substring(1) : path);
            }
            if (!file.exists() && (path.equals("/index.html") || path.endsWith(".html"))) {
                file = new File("index.html");
            }

            if (file.exists() && !file.isDirectory()) {
                byte[] bytes = java.nio.file.Files.readAllBytes(file.toPath());
                String lower = path.toLowerCase();
                String contentType = lower.endsWith(".css") ? "text/css" :
                                    lower.endsWith(".js") ? "application/javascript" :
                                    lower.endsWith(".json") ? "application/json" :
                                    lower.endsWith(".jpg") || lower.endsWith(".jpeg") ? "image/jpeg" :
                                    lower.endsWith(".png") ? "image/png" :
                                    lower.endsWith(".webp") ? "image/webp" :
                                    lower.endsWith(".svg") ? "image/svg+xml" :
                                    lower.endsWith(".ico") ? "image/x-icon" : "text/html; charset=UTF-8";
                ex.getResponseHeaders().set("Content-Type", contentType);
                ex.getResponseHeaders().set("Access-Control-Allow-Origin", "*");
                ex.sendResponseHeaders(200, bytes.length);
                try (OutputStream os = ex.getResponseBody()) {
                    os.write(bytes);
                }
            } else {
                String notFound = "404 Not Found";
                ex.sendResponseHeaders(404, notFound.length());
                try (OutputStream os = ex.getResponseBody()) {
                    os.write(notFound.getBytes());
                }
            }
        }
    }

    static class ProfileHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange ex) throws IOException {
            addCorsHeaders(ex);
            String method = ex.getRequestMethod().toUpperCase();
            String path = ex.getRequestURI().getPath();

            if ("OPTIONS".equals(method)) {
                ex.sendResponseHeaders(204, -1);
                return;
            }

            if ("GET".equals(method) && path.endsWith("/api/profile")) {
                rwLock.readLock().lock();
                try {
                    String json = buildProfileJson();
                    sendJsonResponse(ex, 200, json);
                } finally {
                    rwLock.readLock().unlock();
                }
                return;
            }

            if ("POST".equals(method) && path.contains("/equip")) {
                String body = readBody(ex);
                String weaponKey = extractString(body, "\"weaponKey\"\\s*:\\s*\"([^\"]+)\"", null);
                String arena = extractString(body, "\"arena\"\\s*:\\s*\"([^\"]+)\"", null);
                int diff = extractInt(body, "\"aiDifficulty\"\\s*:\\s*(\\d+)", -1);

                rwLock.writeLock().lock();
                try {
                    if (weaponKey != null) saveState.put("equippedWeapon", weaponKey.toLowerCase());
                    if (arena != null) saveState.put("preferredArena", arena.toLowerCase());
                    if (diff >= 0 && diff <= 2) saveState.put("aiDifficulty", diff);
                    persistSaveData();
                    sendJsonResponse(ex, 200, buildProfileJson());
                } finally {
                    rwLock.writeLock().unlock();
                }
                return;
            }

            if ("POST".equals(method) && path.contains("/upgrade-weapon")) {
                String body = readBody(ex);
                String weaponKey = extractString(body, "\"weaponKey\"\\s*:\\s*\"([^\"]+)\"", "").toLowerCase();

                rwLock.writeLock().lock();
                try {
                    @SuppressWarnings("unchecked")
                    Map<String, Integer> lvls = (Map<String, Integer>) saveState.get("weaponLevels");
                    int curLvl = lvls.getOrDefault(weaponKey, 1);

                    if (curLvl >= 5) {
                        sendJsonResponse(ex, 422, "{\"error\":\"Weapon already at MAX level 5.\"}");
                        return;
                    }

                    int coinCost = switch (curLvl) {
                        case 1 -> 250;
                        case 2 -> 500;
                        case 3 -> 1000;
                        case 4 -> 2000;
                        default -> 999999;
                    };
                    int orbCost = switch (curLvl) {
                        case 1 -> 0;
                        case 2 -> 10;
                        case 3 -> 25;
                        case 4 -> 50;
                        default -> 999999;
                    };

                    int coins = (int) saveState.get("coins");
                    int orbs = (int) saveState.get("shadowOrbs");

                    if (coins < coinCost || orbs < orbCost) {
                        sendJsonResponse(ex, 422, "{\"error\":\"Insufficient currency for upgrade.\"}");
                        return;
                    }

                    saveState.put("coins", coins - coinCost);
                    saveState.put("shadowOrbs", orbs - orbCost);
                    lvls.put(weaponKey, curLvl + 1);

                    persistSaveData();
                    sendJsonResponse(ex, 200, buildProfileJson());
                } finally {
                    rwLock.writeLock().unlock();
                }
                return;
            }

            sendJsonResponse(ex, 404, "{\"error\":\"Not Found\"}");
        }
    }

    static class MatchStartHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange ex) throws IOException {
            addCorsHeaders(ex);
            if ("OPTIONS".equalsIgnoreCase(ex.getRequestMethod())) {
                ex.sendResponseHeaders(204, -1);
                return;
            }
            String matchId = UUID.randomUUID().toString();
            long now = System.currentTimeMillis();
            activeSessions.put(matchId, now);

            String resp = "{\"matchId\":\"" + matchId + "\",\"startedAt\":" + now + ",\"status\":\"ACTIVE\"}";
            sendJsonResponse(ex, 200, resp);
        }
    }

    static class MatchCompleteHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange ex) throws IOException {
            addCorsHeaders(ex);
            if ("OPTIONS".equalsIgnoreCase(ex.getRequestMethod())) {
                ex.sendResponseHeaders(204, -1);
                return;
            }

            String body = readBody(ex);
            String matchId = extractString(body, "\"matchId\"\\s*:\\s*\"([^\"]+)\"", UUID.randomUUID().toString());
            String winner = extractString(body, "\"winner\"\\s*:\\s*\"([^\"]+)\"", "SHADOW");
            int playerRounds = extractInt(body, "\"playerRoundsWon\"\\s*:\\s*(\\d+)", 2);
            int opponentRounds = extractInt(body, "\"opponentRoundsWon\"\\s*:\\s*(\\d+)", 0);
            String weaponUsed = extractString(body, "\"weaponUsed\"\\s*:\\s*\"([^\"]+)\"", "katana");
            int diff = extractInt(body, "\"aiDifficulty\"\\s*:\\s*(\\d+)", 1);
            String arena = extractString(body, "\"arena\"\\s*:\\s*\"([^\"]+)\"", "temple");
            int maxCombo = extractInt(body, "\"maxCombo\"\\s*:\\s*(\\d+)", 0);
            int parries = extractInt(body, "\"parriesLanded\"\\s*:\\s*(\\d+)", 0);
            int shadowArts = extractInt(body, "\"shadowArtsUsed\"\\s*:\\s*(\\d+)", 0);
            int remainingHp = extractInt(body, "\"remainingHp\"\\s*:\\s*(\\d+)", 500);
            int duration = extractInt(body, "\"durationSeconds\"\\s*:\\s*(\\d+)", 45);

            rwLock.writeLock().lock();
            try {
                boolean won = "SHADOW".equalsIgnoreCase(winner);
                double mult = (diff == 2 ? 2.5 : (diff == 1 ? 1.5 : 1.0));

                int earnedCoins = (int) Math.round(( (won ? 300 : 80) + (maxCombo * 20) + (parries * 35) + (shadowArts * 25) + (remainingHp / 5) ) * mult);
                int earnedXp = (int) Math.round(( (won ? 220 : 60) + (maxCombo * 12) + (parries * 18) ) * mult);
                int earnedOrbs = (int) Math.round(( (won ? 18 : 3) + (shadowArts * 4) ) * (mult >= 2.0 ? 1.5 : 1.0));

                if (won && playerRounds >= 2 && opponentRounds == 0 && remainingHp >= 950) {
                    earnedCoins += 250; earnedXp += 150; earnedOrbs += 10;
                }

                // Progression
                int curLvl = (int) saveState.get("level");
                int curXp = (int) saveState.get("xp") + earnedXp;
                boolean leveledUp = false;
                while (curXp >= (curLvl * 300)) {
                    curXp -= (curLvl * 300);
                    curLvl++;
                    earnedCoins += curLvl * 250;
                    earnedOrbs += curLvl * 15;
                    leveledUp = true;
                }
                saveState.put("level", curLvl);
                saveState.put("xp", curXp);
                saveState.put("coins", (int) saveState.get("coins") + earnedCoins);
                saveState.put("shadowOrbs", (int) saveState.get("shadowOrbs") + earnedOrbs);

                // Stats
                @SuppressWarnings("unchecked")
                Map<String, Integer> stats = (Map<String, Integer>) saveState.get("stats");
                stats.put("totalMatches", stats.get("totalMatches") + 1);
                if (won) stats.put("wins", stats.get("wins") + 1);
                else stats.put("losses", stats.get("losses") + 1);
                stats.put("maxCombo", Math.max(stats.get("maxCombo"), maxCombo));
                stats.put("totalParries", stats.get("totalParries") + parries);
                stats.put("shadowArtsLanded", stats.get("shadowArtsLanded") + shadowArts);

                // Score calculation
                int baseScore = won ? 1200 : 250;
                int score = Math.max(100, (baseScore + remainingHp + (maxCombo * 65) + (parries * 45) + (shadowArts * 35) - (duration * 2)) * (diff + 1));

                Map<String, Object> rec = new LinkedHashMap<>();
                rec.put("matchId", matchId);
                rec.put("timestamp", System.currentTimeMillis());
                rec.put("winner", winner);
                rec.put("playerRoundsWon", playerRounds);
                rec.put("opponentRoundsWon", opponentRounds);
                rec.put("weaponUsed", weaponUsed);
                rec.put("aiDifficulty", diff);
                rec.put("arena", arena);
                rec.put("maxCombo", maxCombo);
                rec.put("parriesLanded", parries);
                rec.put("shadowArtsUsed", shadowArts);
                rec.put("remainingHp", remainingHp);
                rec.put("durationSeconds", duration);
                rec.put("xpEarned", earnedXp);
                rec.put("coinsEarned", earnedCoins);
                rec.put("shadowOrbsEarned", earnedOrbs);
                rec.put("score", score);
                matchHistory.add(0, rec);

                persistSaveData();

                String respJson = "{" +
                    "\"matchId\":\"" + matchId + "\"," +
                    "\"winner\":\"" + winner + "\"," +
                    "\"xpEarned\":" + earnedXp + "," +
                    "\"coinsEarned\":" + earnedCoins + "," +
                    "\"shadowOrbsEarned\":" + earnedOrbs + "," +
                    "\"leveledUp\":" + leveledUp + "," +
                    "\"newLevel\":" + curLvl + "," +
                    "\"currentXp\":" + curXp + "," +
                    "\"xpForNextLevel\":" + (curLvl * 300) + "," +
                    "\"totalCoins\":" + saveState.get("coins") + "," +
                    "\"totalShadowOrbs\":" + saveState.get("shadowOrbs") + "," +
                    "\"score\":" + score + "," +
                    "\"stats\":{" +
                        "\"totalMatches\":" + stats.get("totalMatches") + "," +
                        "\"wins\":" + stats.get("wins") + "," +
                        "\"losses\":" + stats.get("losses") + "," +
                        "\"perfectRounds\":" + stats.get("perfectRounds") + "," +
                        "\"maxCombo\":" + stats.get("maxCombo") + "," +
                        "\"totalParries\":" + stats.get("totalParries") + "," +
                        "\"shadowArtsLanded\":" + stats.get("shadowArtsLanded") +
                    "}" +
                "}";

                sendJsonResponse(ex, 200, respJson);
            } finally {
                rwLock.writeLock().unlock();
            }
        }
    }

    static class LeaderboardHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange ex) throws IOException {
            addCorsHeaders(ex);
            if ("OPTIONS".equalsIgnoreCase(ex.getRequestMethod())) {
                ex.sendResponseHeaders(204, -1);
                return;
            }

            rwLock.readLock().lock();
            try {
                StringBuilder sb = new StringBuilder();
                sb.append("{\"leaderboard\":[");
                int count = Math.min(10, matchHistory.size());
                for (int i = 0; i < count; i++) {
                    Map<String, Object> m = matchHistory.get(i);
                    sb.append("{");
                    int f = 0;
                    for (Map.Entry<String, Object> e : m.entrySet()) {
                        sb.append("\"").append(e.getKey()).append("\":");
                        if (e.getValue() instanceof String) sb.append("\"").append(e.getValue()).append("\"");
                        else sb.append(e.getValue());
                        if (++f < m.size()) sb.append(",");
                    }
                    sb.append("}");
                    if (i < count - 1) sb.append(",");
                }
                sb.append("],\"careerStats\":");
                @SuppressWarnings("unchecked")
                Map<String, Integer> stats = (Map<String, Integer>) saveState.get("stats");
                sb.append("{");
                int si = 0;
                for (Map.Entry<String, Integer> e : stats.entrySet()) {
                    sb.append("\"").append(e.getKey()).append("\":").append(e.getValue());
                    if (++si < stats.size()) sb.append(",");
                }
                sb.append("},\"playerLevel\":").append(saveState.get("level")).append("}");

                sendJsonResponse(ex, 200, sb.toString());
            } finally {
                rwLock.readLock().unlock();
            }
        }
    }

    private static String buildProfileJson() {
        @SuppressWarnings("unchecked")
        Map<String, Integer> lvls = (Map<String, Integer>) saveState.get("weaponLevels");
        @SuppressWarnings("unchecked")
        Map<String, Integer> stats = (Map<String, Integer>) saveState.get("stats");

        StringBuilder sb = new StringBuilder();
        sb.append("{");
        sb.append("\"playerId\":\"").append(saveState.get("playerId")).append("\",");
        sb.append("\"playerName\":\"").append(saveState.get("playerName")).append("\",");
        sb.append("\"level\":").append(saveState.get("level")).append(",");
        sb.append("\"xp\":").append(saveState.get("xp")).append(",");
        sb.append("\"coins\":").append(saveState.get("coins")).append(",");
        sb.append("\"shadowOrbs\":").append(saveState.get("shadowOrbs")).append(",");
        sb.append("\"equippedWeapon\":\"").append(saveState.get("equippedWeapon")).append("\",");
        sb.append("\"preferredArena\":\"").append(saveState.get("preferredArena")).append("\",");
        sb.append("\"aiDifficulty\":").append(saveState.get("aiDifficulty")).append(",");

        sb.append("\"weaponLevels\":{");
        int wi = 0;
        for (Map.Entry<String, Integer> e : lvls.entrySet()) {
            sb.append("\"").append(e.getKey()).append("\":").append(e.getValue());
            if (++wi < lvls.size()) sb.append(",");
        }
        sb.append("},");

        sb.append("\"stats\":{");
        int si = 0;
        for (Map.Entry<String, Integer> e : stats.entrySet()) {
            sb.append("\"").append(e.getKey()).append("\":").append(e.getValue());
            if (++si < stats.size()) sb.append(",");
        }
        sb.append("}");
        sb.append("}");
        return sb.toString();
    }

    private static void addCorsHeaders(HttpExchange ex) {
        ex.getResponseHeaders().set("Access-Control-Allow-Origin", "*");
        ex.getResponseHeaders().set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        ex.getResponseHeaders().set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    }

    private static void sendJsonResponse(HttpExchange ex, int code, String json) throws IOException {
        byte[] bytes = json.getBytes(StandardCharsets.UTF_8);
        ex.getResponseHeaders().set("Content-Type", "application/json; charset=UTF-8");
        ex.sendResponseHeaders(code, bytes.length);
        try (OutputStream os = ex.getResponseBody()) {
            os.write(bytes);
        }
    }

    private static String readBody(HttpExchange ex) throws IOException {
        try (InputStream is = ex.getRequestBody()) {
            return new String(is.readAllBytes(), StandardCharsets.UTF_8);
        }
    }

    private static int extractInt(String json, String pattern, int def) {
        Matcher m = Pattern.compile(pattern).matcher(json);
        if (m.find()) {
            try { return Integer.parseInt(m.group(1)); } catch (Exception ignored) {}
        }
        return def;
    }

    private static String extractString(String json, String pattern, String def) {
        Matcher m = Pattern.compile(pattern).matcher(json);
        if (m.find()) return m.group(1);
        return def;
    }

    // ============================================================================
    // PURE JDK RFC 6455 WEBSOCKET REAL-TIME SERVER
    // ============================================================================

    static class WsClient {
        final java.net.Socket socket;
        final InputStream in;
        final OutputStream out;
        String roomId;
        String role;

        WsClient(java.net.Socket socket) throws IOException {
            this.socket = socket;
            this.in = socket.getInputStream();
            this.out = socket.getOutputStream();
        }

        synchronized void sendText(String text) {
            try {
                byte[] raw = text.getBytes(StandardCharsets.UTF_8);
                int len = raw.length;
                ByteArrayOutputStream frame = new ByteArrayOutputStream();
                frame.write(0x81); // FIN + opcode 1 (text)
                if (len <= 125) {
                    frame.write(len);
                } else if (len <= 65535) {
                    frame.write(126);
                    frame.write((len >> 8) & 0xFF);
                    frame.write(len & 0xFF);
                } else {
                    frame.write(127);
                    for (int i = 7; i >= 0; i--) {
                        frame.write((int) ((len >> (8 * i)) & 0xFF));
                    }
                }
                frame.write(raw);
                out.write(frame.toByteArray());
                out.flush();
            } catch (Exception e) {
                close();
            }
        }

        void close() {
            try { socket.close(); } catch (Exception ignored) {}
        }
    }

    static class WsRoom {
        final String roomId;
        WsClient p1;
        WsClient p2;
        String p1Weapon = "katana";
        String p2Weapon = "katana";

        WsRoom(String roomId) { this.roomId = roomId; }

        synchronized String join(WsClient c, String weapon) {
            if (p1 == null || p1.socket.isClosed()) {
                p1 = c;
                if (weapon != null) p1Weapon = weapon;
                return "P1";
            } else if (p2 == null || p2.socket.isClosed()) {
                p2 = c;
                if (weapon != null) p2Weapon = weapon;
                return "P2";
            }
            return null;
        }

        synchronized WsClient getOpponent(WsClient c) {
            if (c == p1) return p2;
            if (c == p2) return p1;
            return null;
        }

        synchronized void remove(WsClient c) {
            if (c == p1) p1 = null;
            if (c == p2) p2 = null;
        }
    }

    private static void startWebSocketListener(int port) {
        Thread serverThread = new Thread(() -> {
            try (java.net.ServerSocket ss = new java.net.ServerSocket(port)) {
                System.out.println("[WebSocket] RFC 6455 Engine listening on ws://localhost:" + port + "/ws/combat");
                while (!ss.isClosed()) {
                    java.net.Socket socket = ss.accept();
                    Executors.newVirtualThreadPerTaskExecutor().execute(() -> handleWsConnection(socket));
                }
            } catch (Exception e) {
                System.err.println("[WebSocket] Listener error: " + e.getMessage());
            }
        });
        serverThread.setDaemon(true);
        serverThread.start();
    }

    private static void handleWsConnection(java.net.Socket socket) {
        try {
            WsClient client = new WsClient(socket);
            BufferedReader reader = new BufferedReader(new InputStreamReader(client.in, StandardCharsets.UTF_8));
            String line;
            String wsKey = null;

            while ((line = reader.readLine()) != null && !line.isEmpty()) {
                if (line.toLowerCase().startsWith("sec-websocket-key:")) {
                    wsKey = line.substring(line.indexOf(':') + 1).trim();
                }
            }

            if (wsKey == null) {
                client.close();
                return;
            }

            // Handshake response
            String acceptKey = Base64.getEncoder().encodeToString(
                MessageDigest.getInstance("SHA-1").digest((wsKey + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11").getBytes(StandardCharsets.UTF_8))
            );

            String handshake = "HTTP/1.1 101 Switching Protocols\r\n" +
                               "Upgrade: websocket\r\n" +
                               "Connection: Upgrade\r\n" +
                               "Sec-WebSocket-Accept: " + acceptKey + "\r\n\r\n";
            client.out.write(handshake.getBytes(StandardCharsets.UTF_8));
            client.out.flush();

            // Frame reading loop
            InputStream in = client.in;
            while (!socket.isClosed()) {
                int b1 = in.read();
                if (b1 == -1) break;
                int opcode = b1 & 0x0F;
                int b2 = in.read();
                if (b2 == -1) break;
                boolean masked = (b2 & 0x80) != 0;
                long len = b2 & 0x7F;

                if (len == 126) {
                    len = ((in.read() << 8) | in.read());
                } else if (len == 127) {
                    len = 0;
                    for (int i = 0; i < 8; i++) len = (len << 8) | in.read();
                }

                byte[] mask = new byte[4];
                if (masked) {
                    in.readNBytes(mask, 0, 4);
                }

                byte[] payload = in.readNBytes((int) len);
                if (masked) {
                    for (int i = 0; i < payload.length; i++) {
                        payload[i] ^= mask[i % 4];
                    }
                }

                if (opcode == 8) { // CLOSE
                    break;
                } else if (opcode == 9) { // PING
                    client.sendText("{\"type\":\"PONG\"}");
                } else if (opcode == 1) { // TEXT
                    String msg = new String(payload, StandardCharsets.UTF_8);
                    processWsMessage(client, msg);
                }
            }

            cleanupWsClient(client);
        } catch (Exception ignored) {
        }
    }

    private static void processWsMessage(WsClient client, String msg) {
        String type = extractString(msg, "\"type\"\\s*:\\s*\"([^\"]+)\"", "");
        if ("JOIN_ROOM".equals(type)) {
            String roomId = extractString(msg, "\"roomId\"\\s*:\\s*\"([^\"]+)\"", "default_dojo");
            String weapon = extractString(msg, "\"weaponKey\"\\s*:\\s*\"([^\"]+)\"", "katana");

            WsRoom room = combatRooms.computeIfAbsent(roomId, WsRoom::new);
            String role = room.join(client, weapon);
            if (role == null) {
                client.sendText("{\"type\":\"ERROR\",\"message\":\"Room full.\"}");
                return;
            }

            client.roomId = roomId;
            client.role = role;
            client.sendText("{\"type\":\"ROOM_JOINED\",\"role\":\"" + role + "\",\"roomId\":\"" + roomId + "\"}");

            if (room.p1 != null && room.p2 != null) {
                String ready = "{\"type\":\"MATCH_READY\",\"roomId\":\"" + roomId + "\",\"p1Weapon\":\"" + room.p1Weapon + "\",\"p2Weapon\":\"" + room.p2Weapon + "\"}";
                room.p1.sendText(ready);
                room.p2.sendText(ready);
            }
        } else if ("PING".equals(type)) {
            client.sendText("{\"type\":\"PONG\"}");
        } else {
            if (client.roomId != null) {
                WsRoom room = combatRooms.get(client.roomId);
                if (room != null) {
                    WsClient opponent = room.getOpponent(client);
                    if (opponent != null) {
                        opponent.sendText(msg);
                    }
                }
            }
        }
    }

    private static void cleanupWsClient(WsClient client) {
        if (client.roomId != null) {
            WsRoom room = combatRooms.get(client.roomId);
            if (room != null) {
                WsClient opponent = room.getOpponent(client);
                room.remove(client);
                if (opponent != null) {
                    opponent.sendText("{\"type\":\"OPPONENT_LEFT\",\"message\":\"Opponent disconnected.\"}");
                }
            }
        }
        client.close();
    }
}
