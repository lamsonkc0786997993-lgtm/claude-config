---
name: video-3d-piezo-lighter-project
description: "Kênh \"2 Phút Học Thêm\" làm video 3D mổ xẻ thiết bị theo quy tắc 3d.md; dự án thử bật lửa piezo (piezo-lighter-2k), trạng thái môi trường tính đến 2026-11-13"
metadata:
  node_type: memory
  type: project
  originSessionId: 9a43ea98-74d1-4a3d-8f0a-33a9c0674f1b
  modified: 2026-11-15T18:12:31.648Z
---

- User làm video dọc 9:16 (1080x1920, 30fps, 124s) mổ xẻ thiết bị 3D cho kênh **"2 Phút Học Thêm"**. Quy tắc nằm trong file `3d.md` (trigger always_on, viết cho ổ `G:\Tao Video`, công cụ H3 ở `G:\H3+upscale`, HyperFrames, subagent `image-generator`, mẫu `butane-gas-lighter-2k`).
- 2026-11-13: user nhờ thử video **bật lửa piezo**, slug `piezo-lighter-2k`, 7 cảnh (tổng quan, bình gas, nút/đòn bẩy/lò xo, van+vòi phun, búa đập tinh thể, điện cực+tia lửa, chạy đồng bộ). Cũng nhờ thumbnail ("KHÔNG PIN, VẪN RA LỬA?").
- Trong chat, một máy hiển thị chỉ có ổ C: và D: (không có G:); sau đó user cài Claude Code CLI 2.1.323 trên tài khoản `C:\Users\Admin` (chưa đăng nhập). Chưa xác nhận H3/ComfyUI/hyperframes đã cài. Muốn tạo ảnh hàng loạt qua ComfyUI (7 ảnh Start bằng t2i, 7 ảnh End bằng img2img).
- 2026-11-15: hướng dẫn user chạy `claude auth login` (cần gói Pro/Max hoặc API key Console) rồi tạo `C:\TaoVideo\3D\piezo-lighter-2k`, chạy `claude` trong `C:\TaoVideo` và dán yêu cầu kiểm tra môi trường (nvidia-smi, Node, ffmpeg, hyperframes, ComfyUI, H3). Chờ user báo kết quả; chưa biết đã đăng nhập chưa.
- User nhắc tool "Iconten" (chưa rõ là gì).

**Why:** việc dở, lần sau user có thể quay lại hỏi tiếp.
**How to apply:** trước khi hứa chạy pipeline, kiểm tra thật ổ G:, H3, ComfyUI, hyperframes, nvidia-smi; đừng giả định đường dẫn G:. Xem [[user-profile]].
