---
name: gemini-web-character-refs
description: "Quy trình vẽ ảnh mẫu nhân vật Tam Quốc bằng Gemini web (gói Plus) qua browser-use, đã chốt 19 ảnh già/trẻ vào thư viện"
metadata:
  node_type: memory
  type: project
  originSessionId: 9db024da-88aa-49de-8f1d-9eddcbab97a0
  modified: 2026-11-17T16:06:16.196Z
---

Đã dựng (2026-11-17): `C:\Users\Admin\browser-agent\` (browser-use + Chrome profile riêng đã đăng nhập Gemini, `gen_image.py`), provider `geminiweb` opt-in trong `H:\iContent\icontent\imagegen.py`, shortcut Desktop "Tao anh Gemini".
Ảnh mẫu nhân vật: `H:\iContent\assets\nhan-vat\tam-quoc\` — `tao_nhan_vat_gemini.py` (`ve` tạo ứng viên vào `ung-vien\`, `chot` đưa vào `anh\` + `nhan-vat.json`), `ve_hang_loat.py` (vẽ hàng loạt, nhật ký `ung-vien\_nhat-ky.txt`), tờ xem trước ở `xem-truoc\`.
Thư viện hiện 19 mục: mỗi nhân vật có bản già (tên gốc) + "(trẻ)" (mã `-tre`), Triệu Vân trẻ là "Triệu Vân" + "Triệu Vân (già)", Chu Du chỉ 1 bản (mất 36 tuổi). Mỗi mục có `person` và `era` để kể theo thời kì. Tập mới dùng `tao_tap_moi.py` với tên mục.

Cập nhật 2026-11-17: thêm "Lưu Thiện (nhỏ)" (~10 tuổi) và "Lưu Thiện" (hoàng đế 30-40 tuổi) => thư viện 21 mục. Đã chạy cả luồng: tập thử Di Lăng `sae0a652b` (9 cảnh FLUX vẽ bằng ảnh mẫu Gemini) được user duyệt xong; CHƯA dựng video (chờ user bảo). Quy tắc duyệt: xem [[phong-cach-ke-chuyen-tam-quoc]].

**Why:** user muốn nhân vật cố định: Gemini vẽ ảnh mẫu một lần, sau đó FLUX local vẽ cảnh theo ảnh mẫu.
**How to apply:** user duyệt từng ảnh/tờ tổng hợp trước khi `chot`; không mở ảnh trong `ung-vien\` bằng trình xem (khóa file làm ghi lỗi, mở bản trong `xem-truoc\`); Om phải chạy và đóng Chrome profile riêng khi vẽ; dùng `python -I -X utf8` (cờ -I bỏ qua PYTHONIOENCODING). Chưa chạy thử cả luồng tạo tập + FLUX vẽ cảnh bằng ảnh mẫu Gemini. Liên quan [[tiktok-story-character-library]].
