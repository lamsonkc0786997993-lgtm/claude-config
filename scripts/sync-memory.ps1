param(
  [ValidateSet('pull','push')][string]$Mode = 'pull',
  [int]$Delay = 0
)
# Đồng bộ memory qua GitHub (repo ~\.claude, chỉ theo dõi projects\*\memory).
# pull: lúc bắt đầu phiên. push: lúc kết thúc phiên, có thể trì hoãn để auto-memory kịp ghi.
$ErrorActionPreference = 'Continue'
$repo = Join-Path $env:USERPROFILE '.claude'
$logDir = Join-Path $repo 'auto-memory'
$log = Join-Path $logDir 'sync-log.txt'
New-Item -ItemType Directory -Force $logDir | Out-Null

function Write-Log([string]$msg) {
  Add-Content -Path $log -Encoding utf8 -Value ("{0} [{1}] {2}" -f (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'), $Mode, $msg)
}

Set-Location $repo

if ($Mode -eq 'pull') {
  $out = git pull --ff-only --quiet 2>&1
  Write-Log ("pull exit=$LASTEXITCODE " + ($out -join ' | '))
  exit 0
}

# push
if ($Delay -gt 0) { Start-Sleep -Seconds $Delay }
git add projects 2>&1 | Out-Null
$staged = git diff --cached --name-only
if (-not $staged) { Write-Log 'no memory changes'; exit 0 }
$msg = "Tự động đồng bộ memory từ $env:COMPUTERNAME"
$out = git commit -q -m $msg -m "Co-Authored-By: Claude Haiku 5.5 <noreply@anthropic.com>" 2>&1
Write-Log ("commit exit=$LASTEXITCODE " + ($out -join ' | '))
$out = git push -q 2>&1
Write-Log ("push exit=$LASTEXITCODE " + ($out -join ' | '))
exit 0
