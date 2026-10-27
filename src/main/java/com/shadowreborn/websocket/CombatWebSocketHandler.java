package com.shadowreborn.websocket;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.*;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * CombatWebSocketHandler coordinates real-time 2-player local/LAN versus synchronization,
 * room allocation, player telemetry, and hit event propagation.
 */
@Component
public class CombatWebSocketHandler extends TextWebSocketHandler {

    private final ObjectMapper mapper = new ObjectMapper();
    private final Map<String, CombatRoom> rooms = new ConcurrentHashMap<>();
    private final Map<String, String> sessionToRoom = new ConcurrentHashMap<>();

    public static class CombatRoom {
        private final String roomId;
        private WebSocketSession p1Session;
        private WebSocketSession p2Session;
        private String p1Weapon = "katana";
        private String p2Weapon = "katana";

        public CombatRoom(String roomId) {
            this.roomId = roomId;
        }

        public String getRoomId() {
            return roomId;
        }

        public synchronized String addPlayer(WebSocketSession session, String weapon) {
            if (p1Session == null || !p1Session.isOpen()) {
                p1Session = session;
                if (weapon != null) p1Weapon = weapon;
                return "P1";
            } else if (p2Session == null || !p2Session.isOpen()) {
                p2Session = session;
                if (weapon != null) p2Weapon = weapon;
                return "P2";
            }
            return null; // Room full
        }

        public synchronized void removePlayer(WebSocketSession session) {
            if (session.equals(p1Session)) {
                p1Session = null;
            } else if (session.equals(p2Session)) {
                p2Session = null;
            }
        }

        public synchronized boolean isEmpty() {
            return (p1Session == null || !p1Session.isOpen()) && (p2Session == null || !p2Session.isOpen());
        }

        public synchronized WebSocketSession getOpponent(WebSocketSession session) {
            if (session.equals(p1Session)) return p2Session;
            if (session.equals(p2Session)) return p1Session;
            return null;
        }

        public synchronized int getPlayerCount() {
            int c = 0;
            if (p1Session != null && p1Session.isOpen()) c++;
            if (p2Session != null && p2Session.isOpen()) c++;
            return c;
        }

        public String getP1Weapon() { return p1Weapon; }
        public String getP2Weapon() { return p2Weapon; }
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        System.out.println("[WebSocket] Client connected: " + session.getId());
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        String payload = message.getPayload();
        Map<String, Object> msg = mapper.readValue(payload, new TypeReference<>() {});
        String type = (String) msg.get("type");
        if (type == null) return;

        switch (type) {
            case "JOIN_ROOM" -> handleJoinRoom(session, msg);
            case "PLAYER_INPUT", "HIT_EVENT", "ROUND_OVER", "MATCH_OVER" -> forwardToOpponent(session, msg);
            case "PING" -> session.sendMessage(new TextMessage("{\"type\":\"PONG\"}"));
            default -> System.out.println("[WebSocket] Unrecognized message type: " + type);
        }
    }

    private void handleJoinRoom(WebSocketSession session, Map<String, Object> msg) throws IOException {
        String roomId = (String) msg.getOrDefault("roomId", "default_dojo");
        String weapon = (String) msg.getOrDefault("weaponKey", "katana");

        CombatRoom room = rooms.computeIfAbsent(roomId, CombatRoom::new);
        String assignedRole = room.addPlayer(session, weapon);

        if (assignedRole == null) {
            // Room is full
            Map<String, Object> fullMsg = Map.of(
                "type", "ERROR",
                "message", "Room " + roomId + " is already full (2 players)."
            );
            session.sendMessage(new TextMessage(mapper.writeValueAsString(fullMsg)));
            return;
        }

        sessionToRoom.put(session.getId(), roomId);

        // Notify client of their role
        Map<String, Object> joinedMsg = Map.of(
            "type", "ROOM_JOINED",
            "role", assignedRole,
            "roomId", roomId,
            "playersCount", room.getPlayerCount()
        );
        session.sendMessage(new TextMessage(mapper.writeValueAsString(joinedMsg)));

        System.out.println("[WebSocket] Session " + session.getId() + " joined room " + roomId + " as " + assignedRole);

        // If 2 players present, start the synchronized match
        if (room.getPlayerCount() == 2) {
            Map<String, Object> startMsg = Map.of(
                "type", "MATCH_READY",
                "roomId", roomId,
                "p1Weapon", room.getP1Weapon(),
                "p2Weapon", room.getP2Weapon()
            );
            String startJson = mapper.writeValueAsString(startMsg);
            if (room.p1Session != null && room.p1Session.isOpen()) {
                room.p1Session.sendMessage(new TextMessage(startJson));
            }
            if (room.p2Session != null && room.p2Session.isOpen()) {
                room.p2Session.sendMessage(new TextMessage(startJson));
            }
            System.out.println("[WebSocket] Room " + roomId + " is READY. Match starting!");
        }
    }

    private void forwardToOpponent(WebSocketSession session, Map<String, Object> msg) throws IOException {
        String roomId = sessionToRoom.get(session.getId());
        if (roomId == null) return;

        CombatRoom room = rooms.get(roomId);
        if (room == null) return;

        WebSocketSession opponent = room.getOpponent(session);
        if (opponent != null && opponent.isOpen()) {
            opponent.sendMessage(new TextMessage(mapper.writeValueAsString(msg)));
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        String roomId = sessionToRoom.remove(session.getId());
        if (roomId != null) {
            CombatRoom room = rooms.get(roomId);
            if (room != null) {
                WebSocketSession opponent = room.getOpponent(session);
                room.removePlayer(session);

                if (opponent != null && opponent.isOpen()) {
                    Map<String, Object> leftMsg = Map.of(
                        "type", "OPPONENT_LEFT",
                        "roomId", roomId,
                        "message", "Opponent disconnected."
                    );
                    opponent.sendMessage(new TextMessage(mapper.writeValueAsString(leftMsg)));
                }

                if (room.isEmpty()) {
                    rooms.remove(roomId);
                }
            }
        }
        System.out.println("[WebSocket] Client disconnected: " + session.getId());
    }
}
