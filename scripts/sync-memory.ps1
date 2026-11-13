# Pull the latest Claude Code memory from git at session start.
# Pull only: pushing stays manual.
# Keep this file ASCII-only: Windows PowerShell 5.1 reads BOM-less files as ANSI and breaks on UTF-8 text.
$ErrorActionPreference = 'Continue'
$repo = Join-Path $env:USERPROFILE '.claude'
$logDir = Join-Path $repo 'auto-memory'
$log = Join-Path $logDir 'sync-log.txt'
New-Item -ItemType Directory -Force $logDir | Out-Null

Set-Location $repo
$out = git pull --ff-only --quiet 2>&1
Add-Content -Path $log -Encoding ascii -Value ("{0} [pull] exit={1} {2}" -f (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'), $LASTEXITCODE, ($out -join ' | '))
exit 0
