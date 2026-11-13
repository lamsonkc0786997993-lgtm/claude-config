---
name: qs-ai-tools-zalo-research
description: User (QS at a construction company) is exploring AI tools for the company; decisions on Perplexity/Firecrawl/PostHog/Composio and Zalo message summarizing (as of 2026-11-14)
metadata:
  node_type: memory
  type: project
  originSessionId: 85c4ad20-b260-4010-9ab9-266bab67eea0
  modified: 2026-11-13T19:12:04.299Z
---

User wants to apply AI at their construction company (QS role, see [[doc-ban-ve-skill]]) and asks me to "research X" tool by tool.

- Researched 2026-11-14, advice given NOT to install (overlaps WebSearch/WebFetch/Agent Reach, costs tokens/API keys): Perplexity, Firecrawl, PostHog. Composio: no confirmed Zalo toolkit. None installed.
- Real goal: read messages so nothing is missed — technical staff reports, customer messages, daily summary of active project groups. They use **personal Zalo groups** (not Zalo OA). No official API for personal Zalo; unofficial readers risk account ban → recommended copy-paste chat into Claude for summaries.
- I drafted skill `/tom-tat-zalo` (5-section summary from pasted chat) and tested it on a fake chat; user then asked to **delete it as "không khả dụng"** (2026-11-14). Don't recreate unless asked; ask what was unusable first.
- Privacy: customer/staff chats contain personal data (Nghị định 13/2023); mask phone numbers before sending to cloud AI.

**Why:** avoid re-pitching tools already evaluated and avoid unofficial Zalo automation.
**How to apply:** for new tool questions, compare with existing tools first ([[token-saving]]); keep suggestions cheap and low-risk.
