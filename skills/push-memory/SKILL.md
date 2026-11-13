---
name: push-memory
description: Đẩy memory Claude Code lên GitHub (repo claude-config, Private) sau khi kéo bản mới nhất, quét thông tin nhạy cảm và nhắc trước khi đẩy. Chỉ chạy khi người dùng gõ /push-memory.
disable-model-invocation: true
---

# /push-memory — đẩy memory lên GitHub

Repo: `C:\Users\PC\.claude` (remote `claude-config`, Private). Chỉ theo dõi `projects\*\memory`.

Trả lời bằng tiếng Việt. Làm theo đúng thứ tự, không bỏ bước.

## Bước 1 — Kéo bản mới nhất

```powershell
git -C "$env:USERPROFILE\.claude" pull --ff-only
```

Nếu lệnh báo lỗi (ví dụ không fast-forward), DỪNG. Báo người dùng rằng máy kia đã đổi memory và cần xử lý xung đột trước khi đẩy. Không tự merge.

## Bước 2 — Xem thay đổi

```powershell
git -C "$env:USERPROFILE\.claude" add projects
git -C "$env:USERPROFILE\.claude" status --short
```

Nếu không có thay đổi nào, báo "Không có thay đổi memory để đẩy" và DỪNG.

## Bước 3 — Quét thông tin nhạy cảm

```powershell
git -C "$env:USERPROFILE\.claude" diff --cached -U0 | Select-String -Pattern 'sk-[A-Za-z0-9]{10,}', '(?i)(api[_-]?key|password|secret|token)\s*[:=]\s*\S+'
```

Nếu có kết quả, DỪNG. Liệt kê tên file và số dòng, KHÔNG in giá trị, rồi hỏi người dùng có muốn tiếp tục không.

## Bước 4 — Nhắc trước khi đẩy

In đúng lời nhắc này trước khi đẩy:

> Nhắc: repo là Private, nhưng memory chứa thông tin cá nhân và hạ tầng (ví dụ IP Tailscale, tên đăng nhập Basic auth, hồ sơ công việc). Các thay đổi dưới đây sẽ được đưa lên GitHub.

Sau đó liệt kê các file sẽ đẩy (lấy từ bước 2).

## Bước 5 — Commit và đẩy

```powershell
git -C "$env:USERPROFILE\.claude" commit -m "Cập nhật memory từ $env:COMPUTERNAME" -m "Co-Authored-By: Claude Haiku 5.5 <noreply@anthropic.com>"
git -C "$env:USERPROFILE\.claude" push
git -C "$env:USERPROFILE\.claude" status -sb
```

## Bước 6 — Báo kết quả

Một dòng: số file đã đẩy và mã commit (`git log --oneline -1`). Nếu có lỗi, nêu nguyên văn thông báo lỗi.
