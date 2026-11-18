---
name: tiktok-story-character-library
description: Thư viện nhân vật chibi Tam Quốc đã lưu ở H:\iContent\assets\nhan-vat\tam-quoc\ để tái dùng cho các tập kể chuyện TikTok sau
metadata:
  node_type: memory
  type: project
  originSessionId: 454e6060-8a52-4d8e-99d2-488262099cc7
  modified: 2026-11-16T19:40:08.507Z
---

Dự án TikTok kể chuyện lịch sử/Tam Quốc (iContent "Video kể chuyện", phong cách chibi + nền tranh thủy mặc, FLUX local 9:16, giọng vieneu "Thiện Minh", nhạc `co-phong-goc.wav` volume 0.16, outro tắt).

User yêu cầu (2026-11-17): luôn giữ hình mẫu nhân vật để các tập sau dùng lại.

Cài đặt chốt (2026-11-17): giọng "Đức Trí" (Nam · Nam) tốc độ 1.2 (user thử 1.5 rồi chọn 1.2), phụ đề kiểu tiktok + `edit.font_size_ratio: 0.062` trong H:\iContent\config.yaml (bản sao lưu config.yaml.bak-truoc-sub). Trình dựng đang mở trong trình duyệt từng lưu đè trạng thái cũ (speed 1.5) vào tập Di Lăng — sau khi đổi cài đặt bằng script, bảo user tải lại trang trình dựng và kiểm tra lại speed/subs trong story.json. Dựng lại: `S.render_story(store, sid, cfg, Path('H:/iContent/output'))`; kiểm bằng video-cli cần copy sang tên ASCII (tên tiếng Việt gây lỗi mã hóa).

Trạng thái cuối ngày 2026-11-17 (làm tiếp 2026-11-18):
- Hai tập đã xuất ở H:\iContent\output: Di Lăng (s12b06160, 84,7 s, có mở đầu/kết thúc) và Xích Bích (s8ad0b6e9, 76,1 s). Cả hai: giọng Đức Trí 1.2, phụ đề tiktok, nhạc co-phong-goc 0.16. Thư viện nhân vật đã ghi cùng cài đặt này.
- Việc dở: user đang chỉnh trong trình dựng FreeCut (editor.localhost:8765/editor/0a903bc4-…, dự án nằm trong trình duyệt, Claude không sửa trực tiếp được). Gói trình dựng Di Lăng đã dựng lại (font 100, 80,7 s, có nhạc); user cần F5 Studio rồi mở lại trình dựng để tạo dự án mới. Chưa biết user muốn chỉnh gì thêm (cỡ chữ/màu/vị trí phụ đề, v.v.) — hỏi lại.
- Chờ user: nghe thử phát âm tên riêng (H:\iContent\ai\ten-rieng-test.wav, đọc bằng giọng cũ Thiện Minh — cần đọc lại bằng Đức Trí nếu kiểm), chọn tướng Liên Quân để review, Xích Bích còn 2 điểm nhỏ (cảnh lửa có mặt mờ chồng, cờ có chữ giả ở cảnh cầu gió).
- Nhớ: trang Studio mở cũ sẽ lưu đè story.json (speed 1.5/box/mất nhạc) — sau khi đổi bằng script phải nhắc F5, rồi kiểm tra lại story.json trước khi dựng. Nhắc bật nhãn AI khi đăng TikTok.

Thư viện: `H:\iContent\assets\nhan-vat\tam-quoc\` — `anh/<slug>.png` + `nhan-vat.json` (mô tả tiếng Anh, refs, template phong cách/giọng/nhạc) + `tao_tap_moi.py`.
9 nhân vật: Lưu Bị, Gia Cát Lượng, Quan Vũ, Trương Phi, Lục Tốn (tập Di Lăng s12b06160), Tào Tháo, Chu Du, Hoàng Cái, Tôn Quyền (tập Xích Bích s8ad0b6e9).

**Why:** giữ gương mặt/trang phục nhất quán giữa các tập.
**How to apply:** tạo tập mới bằng `tao_tap_moi.tao_tap(title, [tên...])` (trả về store, sid), rồi apply_script thêm cảnh, generate_scene_image, render_story. Nhân vật mới: vẽ ref xong thì copy ảnh vào `anh/` và thêm vào nhan-vat.json NGAY. Tập đã xuất: Di Lăng (71,6 s), Xích Bích (66,6 s) ở `H:\iContent\output`.
