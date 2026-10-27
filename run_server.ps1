# SHADOW REBORN — PowerShell Server Launcher
Write-Host "====================================================================" -ForegroundColor Yellow
Write-Host "       SHADOW REBORN : SHADOW FIGHT 2 EDITION — GAME SERVER" -ForegroundColor Yellow
Write-Host "====================================================================" -ForegroundColor Yellow
Write-Host ""

# 1. Resolve Java paths
$javaBin = (Get-Command java -ErrorAction SilentlyContinue).Source
if (-not $javaBin -and (Test-Path "D:\java\bin\java.exe")) {
    $javaBin = "D:\java\bin\java.exe"
}
if (-not $javaBin -and $env:JAVA_HOME -and (Test-Path "$env:JAVA_HOME\bin\java.exe")) {
    $javaBin = "$env:JAVA_HOME\bin\java.exe"
}

$javacBin = (Get-Command javac -ErrorAction SilentlyContinue).Source
if (-not $javacBin -and (Test-Path "D:\java\bin\javac.exe")) {
    $javacBin = "D:\java\bin\javac.exe"
}
if (-not $javacBin -and $env:JAVA_HOME -and (Test-Path "$env:JAVA_HOME\bin\javac.exe")) {
    $javacBin = "$env:JAVA_HOME\bin\javac.exe"
}

if (-not $javaBin) {
    Write-Host "[ERROR] Java runtime not found. Please install OpenJDK 17+: https://adoptium.net/" -ForegroundColor Red
    pause
    exit 1
}

$javaVer = & $javaBin -version 2>&1 | Select-Object -First 1
Write-Host "[OK] Using Java: $javaBin" -ForegroundColor Green
Write-Host "[OK] $javaVer" -ForegroundColor Green
Write-Host ""

# Ensure data directory exists
if (-not (Test-Path "data")) { New-Item -ItemType Directory -Path "data" | Out-Null }

# 2. Check for Maven
$mvnCmd = Get-Command mvn -ErrorAction SilentlyContinue
if ($mvnCmd) {
    Write-Host "[OK] Maven found. Launching Spring Boot server..." -ForegroundColor Cyan
    Start-Process "http://localhost:8080/"
    & mvn spring-boot:run
    exit 0
}

# 3. Pure JDK Zero-Dependency Server
Write-Host "[INFO] Maven not detected. Compiling Zero-Dependency StandaloneServer..." -ForegroundColor Cyan
if (-not (Test-Path "bin")) { New-Item -ItemType Directory -Path "bin" | Out-Null }

Write-Host "[COMPILING] StandaloneServer.java with $javacBin ..." -ForegroundColor DarkGray
& $javacBin -encoding UTF-8 -d bin src/main/java/com/shadowreborn/standalone/StandaloneServer.java
if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERROR] Compilation failed." -ForegroundColor Red
    pause
    exit 1
}

Write-Host "[OK] Compilation successful!" -ForegroundColor Green
Write-Host "[RUNNING] Server listening on http://localhost:8080/ ..." -ForegroundColor Yellow
Start-Process "http://localhost:8080/"
& $javaBin -cp bin com.shadowreborn.standalone.StandaloneServer
