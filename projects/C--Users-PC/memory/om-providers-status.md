---
name: om-providers-status
description: "State of Om (OmniRoute) as of 2026-11-11 — which providers/models work, security config, pending items"
metadata:
  node_type: memory
  type: project
  originSessionId: 7314b395-916b-4d21-9c0c-7afdfcc09d23
  modified: 2026-11-12T02:25:01.380Z
---

State as of 2026-11-11 (re-verify before relying on it — free providers change often):
- Security: `HOST=127.0.0.1` added to `C:\Users\PC\OmniRoute\.env` (backup `.env.backup-before-host`); verified LAN access blocked. `REQUIRE_API_KEY=false` (requests run anonymous; the env ANTHROPIC_API_KEY is NOT a valid Om key). Dashboard password was verified 2026-11-11 to NO LONGER be `CHANGEME` (already changed) — no need to remind.
- Claude fallback combos (imported 2026-11-11 from `C:\Users\PC\om-claude-fallback-combos.json`): combos named `claude-opus-5-5`, `claude-sonnet-5-5`, `claude-haiku-5-5`, `claude-fable-5-2` (Priority strategy): real `claude/...` first, on 429 falls to gemini-3-flash-preview → cfp glm-5.2 → kimi-k2.6 (haiku uses gemini flash-lite first). Verified requests route via combo with Claude answering (200); the 429 failover itself was not actually exercised. To check fallback use: Om dashboard Logs (combo set but provider ≠ claude) or DB `~/.omniroute/storage.sqlite` column `combo_name`. Pre-existing combo "Kimi Coding" kept. Disable by deleting the 4 `claude-*` combos.
- Playwright Chromium installed (`npx playwright install chromium`) → keyless Cloudflare Playground works.
- Working free/keyless models (tested): `auto/best-free`, `ddgw/gpt-5.4-mini`, `ddgw/claude-haiku-4-5`, `ddgw/mistral-small-2603`, `cfp/zai-org/glm-5.2`, `cfp/moonshotai/kimi-k2.6`, `cfp/openai/gpt-oss-120b`, `cfp/meta/llama-4-scout-17b-16e-instruct`. `cfp/deepseek-ai/deepseek-v4-flash-0731` outputs garbage tool calls — avoid. DuckDuckGo streams end with a harmless "terminal marker" error.
- Gemini (Google AI Studio key) connected by user: working `gemini/gemini-3-flash-preview`, `gemini/gemini-3.5-flash-lite`; Pro/4-argon "cooling down" (free tier), 2.5 models retired for new users.
- Effort param: Claude 5.x all levels; Gemini *flash-lite* low/medium/high work; Gemini 3 Flash and free models ignore it.
- Not done / user undecided: Microsoft Copilot Web connection (guided, needs browser token), Om API key from API Manager (needed for model auto-discovery in chat page), auto-start Om + chat at Windows boot.
- Om dev UI: dashboard http://localhost:20128/dashboard, API keys at /dashboard/api-manager, providers at /dashboard/providers, free tiers at /dashboard/free-tiers.

- Slow startup (investigated 2026-11-12): `.env` has `OMNIROUTE_USE_TURBOPACK=1` (only used by `npm run dev`); `.build\next\dev` cache had grown to ~9.1 GB. Deleted it 2026-11-12 (auto-regenerates; first boot after may be slower). Faster alternatives: `npm run start` / `npm run start:fast`; `OMNIROUTE_SKIP_DB_HEALTHCHECK=1` only helps with big DB (storage.sqlite is ~16 MB). Not measured: actual startup time or which command user uses to launch Om. If slow again, re-check the cache size. (The session ended with an API connection error right after the delete step; deletion result unconfirmed.)

Related: [[omniroute-nickname-om]], [[claude-web-chat-setup]]
