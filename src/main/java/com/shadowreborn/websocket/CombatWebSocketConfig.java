package com.shadowreborn.websocket;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

/**
 * CombatWebSocketConfig registers the real-time combat WebSocket endpoint at /ws/combat.
 */
@Configuration
@EnableWebSocket
public class CombatWebSocketConfig implements WebSocketConfigurer {

    private final CombatWebSocketHandler combatWebSocketHandler;

    public CombatWebSocketConfig(CombatWebSocketHandler combatWebSocketHandler) {
        this.combatWebSocketHandler = combatWebSocketHandler;
    }

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(combatWebSocketHandler, "/ws/combat")
                .setAllowedOrigins("*");
    }
}
