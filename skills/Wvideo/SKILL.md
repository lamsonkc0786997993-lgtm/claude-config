---
name: Wvideo
description: Cho Claude xem video (file trên máy hoặc link YouTube/Facebook...) bằng watch-video: transcript có mốc thời gian, khung hình chính, và xem chi tiết từng mốc. Chạy khi người dùng gõ /Wvideo kèm đường dẫn hoặc link video.
disable-model-invocation: true
---

# /Wvideo — xem và hiểu video bằng watch-video

Công cụ: `video-cli` (cài bằng `uv tool install --python 3.12 --force --with "av==13.1.0" "watch-video-mcp[whisper]"`). Chạy hoàn toàn trên máy, không cần API key.

## Cách chạy

1. Lấy đường dẫn hoặc link từ phần sau `/Wvideo`. Nếu không có, hỏi người dùng gửi video. Nếu người dùng muốn hỏi một điều cụ thể, ghi lại câu hỏi để trả lời sau khi xem.
2. Chạy PowerShell, làm mới PATH, thêm thư mục công cụ vào PATH, rồi chạy tổng quan:

```powershell
$env:Path = [Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [Environment]::GetEnvironmentVariable("Path","User")
$bin = (uv tool dir --bin 2>$null | Out-String).Trim(); $env:Path = "$bin;" + $env:Path
$env:CUDA_VISIBLE_DEVICES = "-1"; $env:HF_HUB_DISABLE_SYMLINKS_WARNING = "1"
video-cli overview "SOURCE" --engine whisper --language LANG --max-frames 8
```

- `LANG`: `vi` cho tiếng Việt, `en` cho tiếng Anh, `auto` nếu chưa rõ.
- `--engine whisper` bắt buộc khi không phải tiếng châu Âu. Không dùng Parakeet cho tiếng Việt, vì nó nghe sai.
- Tăng `--max-frames` (tối đa khoảng 40) nếu video dài hoặc nhiều chi tiết hình ảnh.
- Kết quả gồm: thời lượng, transcript có mốc thời gian, các khung hình chính và đường dẫn ảnh contact sheet. Dùng Read để mở ảnh khi cần xem hình.

3. Trả lời người dùng theo transcript và khung hình. Luôn ghi mốc thời gian khi trích dẫn. Không chép nguyên văn dài từ transcript, chỉ tóm tắt.

## Xem chi tiết

- Xem khung hình tại mốc cụ thể (độ phân giải cao): `video-cli frames "SOURCE" 01:30 02:05`
- Không dùng `video-cli search` cho video tiếng Việt: lệnh này lấy transcript đã cache, có thể là bản Parakeet nghe sai. Thay vào đó, tìm trong kết quả `overview` (bản Whisper, `--language vi`).
- Xem một đoạn đều khung hình: `video-cli range "SOURCE" 01:00 01:30 --count 12`
- Đọc chữ trên màn hình (cần gói OCR, chưa cài): thêm `--ocr`

Mọi kết quả được cache ở `~\.cache\video_mcp`, nên chạy lại cùng video sẽ nhanh.

## Lỗi thường gặp

- `cublas64_12.dll` hoặc lỗi CUDA: thiếu `CUDA_VISIBLE_DEVICES=-1`.
- `open() got an unexpected keyword argument 'metadata_errors'`: PyAV quá mới. Cài lại với `--with "av==13.1.0"`.
- `video-cli` không nhận diện: thêm thư mục `uv tool dir --bin` vào PATH.

## Lưu ý

Chỉ xử lý video người dùng có quyền truy cập. Không đăng lại nội dung video.
