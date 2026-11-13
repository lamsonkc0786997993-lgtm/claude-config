---
name: omniroute-nickname-om
description: "User calls OmniRoute \"Om\" — when they say \"Om\" they mean the local OmniRoute gateway"
metadata:
  node_type: memory
  type: user
  originSessionId: 7314b395-916b-4d21-9c0c-7afdfcc09d23
  modified: 2026-11-10T18:44:24.753Z
---

The user calls OmniRoute **"Om"** (user often types it "OminiRoute"). Whenever they say "Om", they mean their local OmniRoute AI gateway: source at `C:\Users\PC\OmniRoute`, runs via `npm run dev`, listens on http://localhost:20128 (bound to 127.0.0.1 via `HOST` in `.env`), dashboard at /dashboard. Claude Code itself routes through it (`ANTHROPIC_BASE_URL`). The user speaks Vietnamese — reply in Vietnamese and may use "Om" in replies.

Related: [[claude-web-chat-setup]]
