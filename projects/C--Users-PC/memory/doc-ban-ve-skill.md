---
name: doc-ban-ve-skill
description: "User is a QS (quantity surveyor); /doc-ban-ve and /markitdown skills for reading construction drawing PDFs cheaply, plus planned old-vs-new drawing comparison to Excel"
metadata:
  node_type: memory
  type: project
  originSessionId: 6a21dec3-8685-4416-886d-ad76fcc6138a
  modified: 2026-11-12T08:51:41.346Z
---

User is a **QS (khối lượng/dự toán) employee**; works with large PDF drawing sets (e.g. 293-page "Thiết kế Villa" HSKT in Downloads, sheets KT-xx / ME-xx; page 4 = DANH MỤC BẢN VẼ).

- `~/.claude/skills/markitdown/SKILL.md`: markitdown installed via `uv tool install "markitdown[all]" --python 3.12` (`~\.local\bin\markitdown.exe`). Useless for drawings (graphic).
- `~/.claude/skills/doc-ban-ve/` : `scripts/ban_ve.py` (title-block text index → JSON, render page/crop at low dpi via PyMuPDF with `uv run --python 3.12 --with pymupdf`), `scripts/so_sanh.py` (compare old vs new PDFs by sheet code → Excel: TomTat, ChiTietSo, ChiCoMotBen, with marked images). Index cache at `%TEMP%\ban-ve\`.
- Known limits: ~164/293 pages lack text titles (divider pages drawn as shapes); some Vietnamese font-encoding garbage (trust sheet codes); small dimensions may be misread → zoom crop.
- **Pending:** user wants to review old vs new drawing versions (e.g. "KC-08 thay đổi khối lượng thép"), output as Excel. Tool tested only on a simulated change; waiting for user to give the two real PDF paths.

**Why:** reduces token cost of reading drawings; user wants it in Claude Code, Claude Chat and Claude Code window in chat ([[claude-web-chat-setup]]).
**How to apply:** use text index first, render only needed pages/crops, delegate multi-page reading to Haiku subagents ([[token-saving]]); recommend Sonnet/Opus for accurate reading.
