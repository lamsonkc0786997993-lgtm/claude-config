---
name: auto-memory-hook
description: "Memory auto-saves after every Claude Code session and every idle Claude Chat conversation via ~\\.claude\\hooks\\auto-memory.mjs (Sonnet, background)"
metadata:
  node_type: memory
  type: project
  originSessionId: 164bf744-aa5b-410d-8577-359af5f6796a
  modified: 2026-11-11T03:49:30.433Z
---

Set up 2026-11-11 at the user's request ("after each session, save memory yourself").

- Script: `C:\Users\PC\.claude\hooks\auto-memory.mjs` with modes `hook` (Claude Code), `chat <file>` (web chat) and `worker` (internal).
- Claude Code: `SessionEnd` and `PreCompact` hooks in `~/.claude/settings.json` run `node ".../auto-memory.mjs" hook`. It condenses the transcript (only lines added since last run, tracked in `state.json`) into a queue, then a detached worker runs `claude.exe -p --model sonnet` with hooks disabled, no session persistence, and only Read/Write/Edit/Glob/Grep tools. That worker updates this memory dir.
- Claude Chat ([[claude-web-chat-setup]]): `server.js` checks every 60s. A chat with new messages that has been idle for 15 min (`CHAT_MEMORY_IDLE_MIN`) gets sent to `auto-memory.mjs chat`. Progress is kept in `data\memory-state.json`. `CHAT_MEMORY=0` turns it off; `CHAT_MEMORY_SCRIPT` swaps in a fake script for tests.
- Work files are in `~\.claude\auto-memory\`: `queue\`, `failed\` (jobs that errored, can be retried), `log.txt`, `worker.lock`.
- Env overrides for testing on a copy: `AUTO_MEMORY_DIR`, `AUTO_MEMORY_WORKDIR`, `AUTO_MEMORY_MODEL`. `AUTO_MEMORY_CHILD=1` prevents recursion.

**Why:** the user wants continuity across sessions without asking each time.
**How to apply:** if memory isn't updating, read `~\.claude\auto-memory\log.txt` first. Test changes against a copy (`AUTO_MEMORY_DIR`), never the real dir. Each run costs one Sonnet call through Om.
