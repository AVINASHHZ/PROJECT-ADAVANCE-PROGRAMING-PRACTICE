# Shadow Reborn: Shadow Fight 2 Edition

A high-performance 2D martial arts fighting game built with an HTML5 procedural physics/animation canvas frontend and a Java 17 Spring Boot backend featuring real-time 2-player WebSocket multiplayer and REST APIs.

---

## Features
- **Procedural Kinematics & Ragdoll Combat:** Smooth forward-kinematics joint articulation, dynamic weapon trails, hit-stop impact freeze, and collision detection.
- **Single-Player Story & Campaign:** 15 distinct hand-crafted martial arts arenas, boss fights, leveling progression, and local profile saving.
- **Real-Time 2-Player Versus Mode:** Real-time synchronized combat across WebSockets (`/ws/combat`).
- **REST APIs & Backend:** Profile progression, telemetry, and leaderboard tracking.
- **Cloud Ready:** Packaged with Docker and Render Blueprint for one-click cloud deployment.

---

## Deployment on Render

This repository includes a multi-stage `Dockerfile` and `render.yaml` blueprint for one-click deployment to **[Render.com](https://render.com)**.

1. Create a new **Web Service** on Render.
2. Connect your GitHub repository (`PROJECT-ADAVANCE-PROGRAMING-PRACTICE`).
3. Select **Docker** as the runtime.
4. Choose the **Singapore (Asia)** region (or nearest to your players) for low-latency combat.
5. Deploy! Render will build the Maven application and serve both frontend and backend on port `8080`.

---

## Local Development

### Running the Java Server
```bash
./run_server.bat
# Or using Maven directly:
mvn spring-boot:run
```
Once started, access the game at: `http://localhost:8080/`
WebSocket endpoint: `ws://localhost:8080/ws/combat`

### Standalone Client
You can also open `index.html` directly in any modern browser for offline single-player gameplay.
