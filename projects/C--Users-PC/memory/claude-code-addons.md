---
name: claude-code-addons
description: "Extras installed into the user's Claude Code — Superpowers plugin, Agent Reach skill, desktop shortcuts/icons"
metadata:
  node_type: memory
  type: project
  originSessionId: 7314b395-916b-4d21-9c0c-7afdfcc09d23
  modified: 2026-11-12T08:51:44.131Z
---

- Superpowers plugin 7.0.0 installed 2026-11-11 via `/plugin install superpowers@claude-plugins-official` (user scope). 6 of its skills were also copied into the Claude Chat page (renamed Vietnamese: Ý tưởng, Kế hoạch, Gỡ lỗi, Test trước, Xem góp ý code, Kiểm chứng) via `claude-web-chat\import-skills.mjs` + `rename-skills.mjs`; re-run import after `/plugin update superpowers` (matches by `source`, keeps Vietnamese names).
- Agent Reach skill at `~/.claude/skills/agent-reach` — see [[agent-reach-installed]].
- Desktop shortcuts: "Claude Code" (Ctrl+Alt+C, icon `claude-web-chat\claude-code-icon.ico`, wt → powershell → claude), "Claude Chat (OmniRoute)" (Ctrl+Alt+O, QS icon `claude-web-chat\icon.ico`, runs start.vbs which auto-starts Om), "Claude Web" (Ctrl+Alt+W → claude.ai). Icons built from user-supplied SVGs via headless Edge render + System.Drawing → multi-size .ico.
- `/om` skill at `~/.claude/skills/om/SKILL.md` (user-invoked only, added 2026-11-11). It checks Om is up (offers to start it if down; never restarts it), asks which page to open (Combos / main Dashboard), asks for a final "Mở / Huỷ" confirmation, then opens the pages. The user explicitly wants a question before anything runs.
- Om fallback combos file `C:\Users\PC\om-claude-fallback-combos.json` (4 combos named after the Claude model ids: Claude first, then Gemini → GLM → Kimi). The user imported it on 2026-11-11 via Dashboard → Combos → Import → Merge. Verified: the combos table has all 4 alongside the user's own "Kimi Coding" combo, and Claude Code requests now log combo_name=claude-opus-5-5. The actual 429→Gemini fallthrough has not been seen live yet; to check, look in call_logs for rows with combo_name set and provider≠claude.
- GitHub: `gh` 2.103.3 at `C:\Program Files\GitHub CLI\gh.exe` (not on bash PATH—use full path), logged in as `lamsonkc0786997993-lgtm` (2026-11-12), git global user/email set, `gh auth setup-git` done. No repos yet; ask before pushing anything.
- Tailscale installed on desktop (IP 100.68.127.21); laptop not yet joined. Remote Control (`claude remote-control`) for Claude Code not enabled yet. See [[claude-web-chat-setup]].
- Status line hook `~/.claude/hooks/usage-line.mjs` shows Sonnet hint when model is Haiku (backup .bak-before-hint). Skills: [[doc-ban-ve-skill]].
- Plugins researched but not installed (2026-11-12): claude-memory, Cairn Memory, Headroom (`headroom wrap claude`, risk of losing 1M context with custom base URL), Task Observer. User asked only to investigate.
- claude-mem: user declined (don't suggest again).

Related: [[claude-web-chat-setup]], [[user-profile]]
