---
name: o-h-layout
description: "Bố cục ổ H sau khi dọn (2026-11-17): thư mục nào không được di chuyển, thư mục mới, nhật ký để hoàn tác"
metadata:
  node_type: memory
  type: project
  originSessionId: 9db024da-88aa-49de-8f1d-9eddcbab97a0
  modified: 2026-11-17T16:07:03.726Z
---

User nhờ dọn ổ H vì nhìn rối. Đã làm 2026-11-17, nhật ký ở `H:\Sao-luu\Nhat-ky\don-dep-o-H.txt` (ghi từng nơi đã chuyển, muốn hoàn tác thì chuyển ngược).

**KHÔNG di chuyển (phần mềm đang dùng đường dẫn cố định):**
- `H:\iContent` (Studio đang chạy, đường dẫn nằm trong mã và memory)
- `H:\HF` (HF_HOME=H:\HF, cache mô hình)
- `H:\ZaloData`, `H:\Zalo Data` (dữ liệu Zalo, ZaloData dùng hằng ngày)
- `H:\D5 WorkSpace`, `H:\3uToolsV3`, `H:\Wondershare` (thư mục dữ liệu của phần mềm, di chuyển sẽ mất liên kết)
- `H:\video` (workspace FreeCut) và 3 file/thư mục FreeCut ở gốc (`README.md`, `index.json`, `.freecut-workspace.json`, `projects`): chỉ đặt thuộc tính ẩn, không chuyển. Muốn thấy thì bật "Hiện mục ẩn" trong Explorer.

**Thư mục mới:** `Cong-viec-QS\` (usb, NBOX PROMPT CODE, `SketchUp-plugin\` chứa 2 file .rbz), `Video-tai-ve\Video yt`, `Game\Redyornot`, `Cong-cu\AI Editor`, `Sao-luu\Users (ban sao C)` + `Sao-luu\Nhat-ky\`.

**Why:** đừng đặt file/thư mục mới lung tung ở gốc H.
**How to apply:** khi tạo thư mục mới trên H, chọn đúng nhóm trên. Cẩn thận Windows không phân biệt hoa thường: `Video` trùng `video` (FreeCut) — đó là lý do thư mục tải về tên `Video-tai-ve`. Không xóa `Sao-luu\Users (ban sao C)` (bản sao C 273 GB) khi chưa hỏi user.
