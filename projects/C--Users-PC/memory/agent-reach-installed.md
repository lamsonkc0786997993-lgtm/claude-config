---
name: agent-reach-installed
description: Agent Reach 1.6.1 (read-only web/YouTube/GitHub reader CLI) is installed for the user; where it lives and install gotchas
metadata:
  node_type: memory
  type: project
  originSessionId: 7314b395-916b-4d21-9c0c-7afdfcc09d23
  modified: 2026-11-10T19:51:41.195Z
---

Installed 2026-11-11 at user's request: Agent Reach 1.6.1 from github.com/Panniantong/Agent-Reach (NOT the PyPI package of the same name). Exe: `C:\Users\PC\.local\bin\agent-reach.exe` (installed via `uv tool install --python 3.12 …`; uv came from winget). Skill copied to `~/.claude/skills/agent-reach`. Default channels on: web, youtube, github, bilibili, v2ex — verified web/youtube/github work. Login-based channels (X, Reddit, Instagram…) not enabled.

**Why:** gives Claude read access to web/YouTube subtitles/GitHub.
**How to apply:** Python 3.15 (uv default) fails building pyyaml (no MSVC) — always pass `--python 3.12` for uv tool installs here. Auto mode blocked `uv tool install <remote url>`; the user ran it via `!`. Don't enable login channels without the user (ban risk).
