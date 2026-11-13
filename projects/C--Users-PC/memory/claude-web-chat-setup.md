---
name: claude-web-chat-setup
description: "User's self-hosted browser chat page (\"Claude Chat\") at C:\\Users\\PC\\claude-web-chat that talks to Claude/Gemini/free models through Om — files, features, how to change it safely"
metadata:
  node_type: memory
  type: project
  originSessionId: 7314b395-916b-4d21-9c0c-7afdfcc09d23
  modified: 2026-11-13T19:11:59.404Z
---

Built 2026-11-11 so the user has a claude.ai-like web chat that goes through Om instead of claude.ai.

**Files** (`C:\Users\PC\claude-web-chat\`): `server.js` (Node, no deps, 127.0.0.1:3939, proxies to Om `/v1/messages`), `index.html` (whole UI, one file), `start.vbs` (launcher: starts Om if down, starts server hidden, opens browser), `data\store.json` (+`.bak`; chats/projects/skills), `data\files\` (attachments), `config.json` (optional real Om API key), `import-skills.mjs`, `rename-skills.mjs`, icons.

**Features:** sidebar (new chat, Ctrl+K accent-insensitive search, projects with instructions, skills with "/" picker + SKILL.md import/export, recent list with rename/move/export-Markdown/delete), model picker (Claude 5.x, Gemini group, free group, custom), per-model effort selector, 🌐 Internet toggle (Claude/Gemini get 5 read-only Agent Reach tools: web_search, read_url, youtube_search, youtube_subtitle, github_search — server runs agent-reach.exe via execFile, no shell; client-side tool loop in `generate()`), attachments (image/PDF/text, paste/drag), edit & regenerate (confirms before truncating), auto-title via claude-haiku-5-5 (`/api/complete`), long-chat warning + "summarize to new chat", non-Claude models get system/skills injected into last user message.

**How to apply:**
- After editing `server.js`, restart only the node process whose command line contains `claude-web-chat\server.js`; `index.html` changes need only F5.
- Data writes are conflict-guarded (PUT /api/data with `baseSavedAt` → 409 → page reloads). To change data from outside, go through the HTTP API (see import/rename scripts), never edit store.json while the page is open.
- Browser localStorage history is merged into disk once (flag `cwc.migrated.v1`).
- Test with a separate server: env `CHAT_PORT` + `CHAT_DATA_DIR`, headless Edge + CDP.

- server.js also auto-saves memory from idle chats (see [[auto-memory-hook]]); progress in `data\memory-state.json`.

**Added 2026-11-12:**
- Sidebar: collapsible sections (arrows), "Dự án code" list (saved in store.json `codeProjects`; click opens Claude Code window in that folder), Claude Code window with image paste/drag/+Ảnh (stream-json, max 5 imgs ≤5MB), Model selector + hint to switch to Sonnet/Opus when mentioning bản vẽ/.pdf, session id + log persisted server-side (300 lines, so laptop sees same session).
- "Bản vẽ" toggle next to Internet: tools `ban_ve_muc_luc` / `ban_ve_xem_trang` (PDF only from Downloads/Documents/Desktop), hint to use Sonnet/Opus. Uses skill [[doc-ban-ve-skill]].
- Remote access: server also listens on Tailscale IP 100.68.127.21:3939 (env CHAT_TS_IP), Basic auth user `chat`, password in Windows user env CHAT_PASSWORD (never store it here). localhost needs no password. Pending: user's password is weak/reused → recommend changing.
- Backups `server.js.bak-before-*`, `index.html.bak-before-*` made before each edit.

**Added 2026-11-14:**
- The "Nỗ lực" (effort) selector moved from the composer toolbar to the topbar, right after the model picker (same ids, so JS unchanged). Backup `index.html.bak-before-effort-move`. Not yet checked visually at phone width.

**Added 2026-11-14 (skill index):**
- Sidebar section "Mục lục skill" (under "Kỹ năng", collapsible arrow, state remembered) lists Claude Code skills: name + short Vietnamese description on one line (built-in VN description map for ~35 skills; fallback first sentence of original), full VN tooltip on hover, "Hay dùng" top-5 (usage in localStorage), then "Của bạn", "Plugin". Click fills `/tên ` into the input only (Claude Chat can't run Claude Code skills). Refreshes every 60s + on tab focus.
- server.js endpoint `/api/cc-skills` scans SKILL.md files (skills without a file on disk, e.g. dataviz/run/claude-api, don't appear). Backups `*.bak-before-skillindex`.
- User first asked right side, then left, finally in the left sidebar with a dropdown arrow. Also built a Claude Code terminal mod `skill-index` (right pane, `/skill-index`) in `~\.claude\dev-mods\<session>\skill-index`; pane only draws when terminal ≥144 cols.

Related: [[omniroute-nickname-om]], [[om-providers-status]], [[claude-code-addons]], [[working-preferences]]
