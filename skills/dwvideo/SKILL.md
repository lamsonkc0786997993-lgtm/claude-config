---
name: dwvideo
description: Kết hợp /dlvideo và /Wvideo: tải video từ link vào H:\Video yt rồi xem và tóm tắt nội dung luôn. Chạy khi người dùng gõ /dwvideo kèm link.
disable-model-invocation: true
---

# /dwvideo — tải rồi xem video trong một bước

Skill này không có quy trình riêng. Nó gọi hai skill đã có và nối kết quả:

- `~\.claude\skills\dlvideo\SKILL.md` (tải video; `~` là thư mục người dùng, `$env:USERPROFILE`)
- `~\.claude\skills\Wvideo\SKILL.md` (xem video)

## Cách chạy

1. Lấy link từ phần sau `/dwvideo`. Nếu không có link, hỏi người dùng gửi link.
2. Đọc `dlvideo/SKILL.md` và làm theo phần "Cách chạy" để tải video vào `H:\Video yt`. Ghi lại đường dẫn file đã tải.
3. Đọc `Wvideo/SKILL.md` và làm theo phần "Cách chạy", với `SOURCE` là đường dẫn file ở bước 2. Dùng `--language vi` nếu người dùng nói tiếng Việt, hoặc `auto` nếu chưa rõ.
4. Trả lời người dùng theo thứ tự:
   - Một dòng: file đã lưu ở đâu và dung lượng bao nhiêu.
   - Tóm tắt nội dung video, ghi mốc thời gian cho các ý chính.
   - Các điểm nổi bật về hình ảnh, dựa trên khung hình đã xem.

## Nếu người dùng hỏi thêm

Dùng các lệnh xem chi tiết trong `Wvideo/SKILL.md` (`frames`, `range`) để xem đúng mốc được hỏi, thay vì đoán từ transcript.

## Lỗi

- Nếu bước tải lỗi, dừng lại và báo lỗi theo hướng dẫn trong `dlvideo/SKILL.md`. Không chạy bước xem.
- Nếu bước xem lỗi nhưng file đã tải thành công, báo đường dẫn file để người dùng biết video vẫn còn.

## Lưu ý

Chỉ tải và xem video người dùng có quyền sử dụng. Không đăng lại nội dung video.
