---
name: token-saving
description: "User wants token use minimized — default model Sonnet, delegate side work to Haiku/Sonnet subagents, read narrowly"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 164bf744-aa5b-410d-8577-359af5f6796a
  modified: 2026-11-11T04:30:00.925Z
---

On 2026-11-11 the user asked Claude to choose models itself to save as many tokens as possible, and agreed to all of the suggestions.

- The default model is now `"model": "sonnet"` in `~/.claude/settings.json`. The user switches to `/model opus` for hard work.
- When delegating, pick the cheapest model that fits. Use `model: "haiku"` for searching files, reading logs, or simple lookups. Use `model: "sonnet"` for medium tasks. Keep core reasoning and final decisions in the main thread.
- Read narrowly. Read only the needed line ranges, and filter command output (grep/head/tail/node one-liners) before it enters context. Don't dump whole files or large JSON.
- When a task is clearly simple, suggest `/effort low` or `/effort medium`. When switching to an unrelated topic, suggest `/clear`, since memory survives it.

**Why:** the user pays for usage, and Claude via Om has quota limits. See [[auto-memory-hook]] and [[claude-code-addons]] for the fallback when quota runs out.
**How to apply:** apply this by default in every session without asking. Still use a stronger model when quality would clearly suffer.
