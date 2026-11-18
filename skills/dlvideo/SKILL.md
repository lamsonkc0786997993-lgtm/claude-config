---
name: dlvideo
description: Tải video từ link (Facebook reel/video, YouTube, v.v.) bằng yt-dlp và lưu vào H:\Video yt. Chỉ chạy khi người dùng gõ /dlvideo kèm link.
disable-model-invocation: true
---

# /dlvideo — tải video vào H:\Video yt

Dùng yt-dlp (đã cài trên máy bàn, kèm FFmpeg và Deno). Thư mục lưu: `H:\Video yt`.

## Cách chạy

1. Lấy link từ phần sau `/dlvideo`. Nếu không có link, hỏi người dùng gửi link.
2. Chạy PowerShell, làm mới PATH trong cùng lệnh (shell không tự nhận PATH mới) và tạo thư mục nếu chưa có:

```powershell
$env:Path = [Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [Environment]::GetEnvironmentVariable("Path","User")
if (-not (Test-Path "H:\Video yt")) { New-Item -ItemType Directory -Path "H:\Video yt" | Out-Null }
yt-dlp --windows-filenames -o "H:\Video yt\%(id)s.%(ext)s" "LINK"
```

3. Tên file là ID của video (không dùng tiêu đề), để tránh lỗi ký tự tiếng Việt và emoji trên Windows.
4. Sau khi xong, báo đường dẫn file và dung lượng. Ví dụ: `Get-ChildItem "H:\Video yt" -Filter "<ID>*"`.

## Lỗi thường gặp

- `yt-dlp` không nhận diện: làm mới PATH như bước 2, hoặc mở lại terminal.
- Video cần đăng nhập: thêm `--cookies-from-browser chrome` (hoặc `edge`, `firefox`). Chỉ dùng với tài khoản của người dùng.
- Lỗi do bản yt-dlp cũ: chạy `yt-dlp -U`.

## Lưu ý

Chỉ tải video người dùng có quyền dùng, hoặc để xem cá nhân. Không đăng lại hay dùng thương mại nếu chưa được phép.
