@echo off
title SHADOW REBORN — Game Server Launcher

echo ====================================================================
echo        SHADOW REBORN : SHADOW FIGHT 2 EDITION — GAME SERVER
echo ====================================================================
echo.

:: Prioritize standard Windows System32 and Java bin paths
set "PATH=%SystemRoot%\System32;%SystemRoot%;%SystemRoot%\System32\Wbem;%SystemRoot%\System32\WindowsPowerShell\v1.0;D:\java\bin;%JAVA_HOME%\bin;%PATH%"

set "JAVA_BIN=java"
if exist "D:\java\bin\java.exe" set "JAVA_BIN=D:\java\bin\java.exe"

set "JAVAC_BIN=javac"
if exist "D:\java\bin\javac.exe" set "JAVAC_BIN=D:\java\bin\javac.exe"

"%JAVA_BIN%" -version >nul 2>&1
if errorlevel 1 goto :no_java

echo [OK] Found Java Runtime: "%JAVA_BIN%"
"%JAVA_BIN%" -version
echo.
goto :java_ok

:no_java
echo [ERROR] Java runtime could not be executed.
echo Looked for:
echo   - D:\java\bin\java.exe
echo   - System PATH
echo Please install OpenJDK 17 or higher from https://adoptium.net/
pause
exit /b 1

:java_ok
:: Ensure data directory exists
if not exist "data" mkdir "data"
if not exist "data\shadow_reborn_save.json" (
    echo [INFO] Creating initial player progression file...
    (
        echo {
        echo   "profile": {
        echo     "playerId": "shadow_master_001",
        echo     "playerName": "SHADOW",
        echo     "level": 1,
        echo     "xp": 0,
        echo     "coins": 1250,
        echo     "shadowOrbs": 75,
        echo     "equippedWeapon": "katana",
        echo     "preferredArena": "temple",
        echo     "aiDifficulty": 1,
        echo     "weaponLevels": {
        echo       "katana": 1,
        echo       "sai": 1,
        echo       "naginata": 1,
        echo       "odachi": 1,
        echo       "fists": 1
        echo     },
        echo     "stats": {
        echo       "totalMatches": 0,
        echo       "wins": 0,
        echo       "losses": 0,
        echo       "perfectRounds": 0,
        echo       "maxCombo": 0,
        echo       "totalParries": 0,
        echo       "shadowArtsLanded": 0
        echo     }
        echo   },
        echo   "matchHistory": []
        echo }
    ) > "data\shadow_reborn_save.json"
)

:: Check if Maven is installed
where mvn >nul 2>&1
if errorlevel 1 goto :use_standalone

echo [OK] Maven found! Launching Spring Boot 3 Game Server...
echo Starting server at http://localhost:8080/
start "" cmd /c "timeout /t 5 >nul && start http://localhost:8080/"
call mvn spring-boot:run
goto :end

:use_standalone
echo [INFO] Maven was not detected on PATH.
echo [INFO] Compiling and launching Zero-Dependency Pure JDK Server with WebSocket support...
echo [INFO] Using Compiler: "%JAVAC_BIN%"
echo.

"%JAVAC_BIN%" -version >nul 2>&1
if errorlevel 1 goto :no_javac

if not exist "bin" mkdir "bin"

echo [COMPILING] StandaloneServer.java ...
"%JAVAC_BIN%" -encoding UTF-8 -d bin src/main/java/com/shadowreborn/standalone/StandaloneServer.java
if errorlevel 1 goto :compile_fail

echo [OK] Compilation successful!
echo [RUNNING] Starting Game Server on http://localhost:8080/ ...
start "" cmd /c "timeout /t 2 >nul && start http://localhost:8080/"
"%JAVA_BIN%" -cp bin com.shadowreborn.standalone.StandaloneServer
goto :end

:no_javac
echo [ERROR] javac compiler could not be found or executed at "%JAVAC_BIN%".
pause
exit /b 1

:compile_fail
echo [ERROR] Compilation failed.
pause
exit /b 1

:end
pause
