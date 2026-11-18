---
name: phong-cach-ke-chuyen-tam-quoc
description: "Quy tắc phong cách và các lần chỉnh sửa của user cho dự án truyện kể TikTok Tam Quốc trong iContent (chọn cảnh, nhân vật, ảnh mẫu, cách duyệt) — chỉ áp dụng cho dự án này"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 9db024da-88aa-49de-8f1d-9eddcbab97a0
  modified: 2026-11-17T16:05:51.208Z
---

CHỈ áp dụng cho dự án truyện kể TikTok "2 Phút Học Thêm" / Tam Quốc chibi trong H:\iContent. Rút ra từ lần chạy lại tập Trận Di Lăng (story `sae0a652b`, 2026-11-17), user duyệt từng cảnh.

**Quy trình duyệt (user luôn muốn):**
- Vẽ 2 bản (A/B) ghép cạnh nhau trong `xem-truoc\`, tôi nêu chọn bản nào và vì sao, rồi DỪNG chờ duyệt. User trả lời "Lấy B", "Chốt", "ok duyệt". Không tự chốt vào thư viện, không tự dựng video khi chưa được bảo.
- User hỏi kiểu "cân nhắc X có cần không / có nên vẽ lại không" = muốn tôi tự đánh giá theo nội dung truyện, nếu cần thì vẽ lại luôn và cho xem; trả lời ngắn, nêu lý do.
- Việc thừa thì nói là không cần (vd cảnh 5 giữ nguyên), không vẽ lại cho có.

**Mỗi cảnh phải tự giải thích được cho người xem:**
- Lời thoại nhắc sự kiện hoặc người cụ thể thì HÌNH phải thấy được điều đó. Ví dụ: cảnh 2 phải thấy hồn Quan Vũ, Trương Phi trên trời và Lưu Bị khóc quỳ dưới; cảnh 8 "giao con thơ" phải có cậu bé Lưu Thiện cạnh Lưu Bị và Gia Cát Lượng. Cảnh chỉ có hai người nắm tay thì người xem không hiểu.
- Khi user nói "người xem chưa hiểu cảnh N": tìm thứ lời kể nhắc mà hình thiếu, thêm nó (nhân vật phụ, hành động), vẽ lại 2 bản.

**Nhân vật và thời kì:**
- Luôn kiểm tra tuổi nhân vật tại thời điểm cảnh để chọn đúng bản: "già" (tên gốc) hay "(trẻ)" = 30–40 tuổi trên chiến trường, không phải trẻ con. Ví dụ Di Lăng: Gia Cát Lượng ~40 và Lục Tốn ~39 dùng bản trẻ; Lưu Bị, Quan Vũ, Trương Phi dùng bản già.
- Vật đặc trưng không gán cho người khác: quạt lông là của Gia Cát Lượng/Chu Du, không cho Lục Tốn cầm (dễ nhầm). Tôi sửa mô tả riêng trong tập, thư viện chung chỉ đổi khi user đồng ý.
- Lính/quần chúng là người vô danh, mặt khác nhau, không được giống nhân vật có tên; nhân vật có tên đứng xa nhỏ ở hậu cảnh. Cảnh toàn cảnh không người: ghi rõ "no people, no creatures, no faces" để FLUX không sinh mặt/khối tròn lạ.
- Nhân vật mới (vd Lưu Thiện) => vẽ ảnh mẫu bằng Gemini web, mỗi người có bản nhỏ/trẻ và bản lớn/già để kể theo thời kì, rồi lưu thư viện. Không vẽ nhân vật mới bằng mô tả chữ nếu sẽ dùng lại.
- Giới hạn: FLUX local chỉ nhận 2 ảnh mẫu mỗi cảnh; nhân vật thứ ba chỉ giữ bằng mô tả, nên dễ lệch. Cảnh 3 người: ưu tiên 2 nhân vật chính có ảnh mẫu.

**Why:** user là người kiểm duyệt chất lượng cuối, muốn tập kể chuyện nhất quán nhân vật và người xem hiểu ngay bằng hình; đã mất thời gian chỉnh từng cảnh nên không muốn lặp lại lỗi cũ.
**How to apply:** khi tạo hoặc sửa bất kỳ tập kể chuyện Tam Quốc nào, áp các quy tắc trên trước khi hỏi user; viết lời nhắn vẽ cảnh bằng tiếng Anh, trả lời user bằng tiếng Việt. Liên quan [[tiktok-story-character-library]], [[gemini-web-character-refs]], [[working-preferences]], [[message-tags-noi-yc]].
