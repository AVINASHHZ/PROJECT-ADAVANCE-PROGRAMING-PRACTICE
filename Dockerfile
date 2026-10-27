# ==============================================================================
# Multi-stage Dockerfile for Shadow Reborn (Java 17 + Spring Boot 3) on Render
# ==============================================================================

# Stage 1: Build the Application
FROM maven:3.9.6-eclipse-temurin-17 AS builder
WORKDIR /app

# Cache dependencies
COPY pom.xml .
RUN mvn dependency:go-offline -B || true

# Copy source code and assets
COPY src ./src

# Package production executable JAR
RUN mvn clean package -DskipTests

# Stage 2: Production JRE Runtime
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Create directory for game saves
RUN mkdir -p /app/data

# Copy built JAR from builder
COPY --from=builder /app/target/shadow-reborn-server-1.0.0.jar /app/shadow-reborn.jar

# Expose Render default port
EXPOSE 8080

ENV PORT=8080

# Run Spring Boot server binding to Render's dynamic $PORT
ENTRYPOINT ["sh", "-c", "java -Dserver.port=${PORT} -jar /app/shadow-reborn.jar"]
