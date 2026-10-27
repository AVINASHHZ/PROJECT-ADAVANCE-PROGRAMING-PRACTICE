@echo off
set "PATH=%SystemRoot%\System32;%SystemRoot%;%SystemRoot%\System32\Wbem;%SystemRoot%\System32\WindowsPowerShell\v1.0;D:\java\bin;%JAVA_HOME%\bin;%PATH%"
call "%~dp0build_and_run_server.bat"
