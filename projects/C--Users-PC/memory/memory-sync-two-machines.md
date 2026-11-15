---
name: memory-sync-two-machines
description: "Đồng bộ memory giữa laptop (user PC) và máy bàn (user Admin) qua repo GitHub private claude-config; pull tự động, push thủ công bằng /push-memory"
metadata:
  node_type: memory
  type: project
  originSessionId: 556f3f4d-e067-4c25-9bb4-fabc35bee325
  modified: 2026-11-13T20:51:04.002Z
---

Hai máy riêng, chỉ đồng bộ memory (không đồng bộ settings/hooks/Om):
- **Laptop** (ASUS Zenbook 14): Windows user `PC`, `C:\Users\PC\.claude`. Chạy Om (localhost:20128), Claude Code cài bằng npm, qua ANTHROPIC_BASE_URL.
- **Máy bàn**: Windows user `Admin`, `C:\Users\Admin\.claude`. Claude Code native, đã đăng nhập claude.ai, model haiku.
- Repo: https://github.com/lamsonkc0786997993-lgtm/claude-config (Private), nhánh main, whitelist `.gitignore`: chỉ `projects/C--Users-PC/memory/`, `scripts/`, `skills/push-memory/`.
- Máy bàn: `projects\C--Users-Admin\memory` là **junction** trỏ tới `projects\C--Users-PC\memory` (nên Claude ghi vào đó vẫn vào repo). `/projects/C--Users-Admin/` bị ignore.
- Hook `SessionStart` trên cả hai máy chạy `scripts/sync-memory.ps1` (chỉ `git pull --ff-only`, log ở `auto-memory\sync-log.txt`).
- Push làm thủ công bằng skill `/push-memory` (pull, quét bí mật, nhắc nhở, commit, push). Chưa test end-to-end với thay đổi thật (as of 2026-11-14).

**Why:** Auto push khi SessionEnd bị hệ thống chặn (coi là rò dữ liệu) và script .ps1 có tiếng Việt không BOM lỗi trên PowerShell 5.1; user chọn pull tự động, push thủ công.
**How to apply:** Script .ps1 phải ASCII. Hỏi "máy nào" trước khi nói laptop/máy bàn (đừng gán theo tên user). Máy bàn cần `-ExecutionPolicy Bypass` để chạy .ps1. Không đồng bộ `.env`/bí mật. Xem [[omniroute-nickname-om]], [[auto-memory-hook]], [[working-preferences]].
