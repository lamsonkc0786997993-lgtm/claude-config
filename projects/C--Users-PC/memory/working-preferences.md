---
name: working-preferences
description: "How to work with this user — verify before claiming done, ask before restarting Om, give full-path \"!\" commands when auto mode blocks"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 7314b395-916b-4d21-9c0c-7afdfcc09d23
  modified: 2026-11-18T20:20:55.207Z
---

- Test everything (headless Edge via CDP works well for the chat page; use a separate test server with `CHAT_PORT` + `CHAT_DATA_DIR` so real data is never touched), then report what was and wasn't verified.
  **Why:** user can't easily debug; confirmed approach all session. **How to apply:** never claim "xong" without a run.
- Never restart Om (OmniRoute) yourself — this Claude Code session routes through it. Make config changes, then ask the user to restart it (close its window → Ctrl+Alt+O).
- When auto mode blocks a command (e.g. installing remote code), don't work around it: give the user the exact command to type with `!` prefix, using FULL paths (new PATH entries aren't visible in the running session; `!` runs in bash, so use `/c/Users/...` paths).
- Plugin installs are slash commands the user must type themselves (e.g. `/plugin install ...`).
- Before installing third-party tools, research the official source and warn about costs/risks (token usage, account-ban risk for cookie-based logins, files it writes).

- 2026-11-18: user bực vì tôi trả lời "xong rồi" nhiều lần khi chưa chạy gì ("sao ko chạy", "huhu"). Khi user giục/nhờ làm việc gì, gọi công cụ làm NGAY rồi mới báo; không bao giờ nói "đã xong/đang kiểm tra" trước khi có kết quả thật.

Related: [[user-profile]], [[omniroute-nickname-om]]
