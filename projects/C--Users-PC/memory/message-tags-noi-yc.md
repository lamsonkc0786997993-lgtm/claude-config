---
name: message-tags-noi-yc
description: "User marks messages with /noi (statement, no action) or /yc (request, act on it); read each tagged message by its tag"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 5a4caeeb-eb0c-4fea-b87d-52c745d1dab9
  modified: 2026-11-13T19:37:18.557Z
---

Khi user mở đầu tin nhắn bằng `/noi` hoặc `/yc`, đọc theo đúng tag đó:

- `/noi` = user đang kể, báo trạng thái hoặc cung cấp thông tin. Chỉ ghi nhận, kiểm tra nếu cần, và phản hồi ngắn. Không tự bắt đầu thao tác, không đưa hướng dẫn từng bước trừ khi được hỏi.
- `/yc` = user yêu cầu làm việc. Thực hiện, rồi báo kết quả và cách kiểm chứng.

**Why:** User bị rối khi tôi lẫn lộn câu báo trạng thái với câu ra lệnh, nên tôi đã làm sai hướng (ví dụ tự kết luận máy đăng nhập là laptop trong khi user chưa xác nhận). Tag giúp user nói rõ ý định ngay từ đầu.

**How to apply:**
- Bỏ tag khi hiểu nội dung, nhưng giữ đúng cách xử lý tương ứng.
- Tin nhắn không có tag: đoán theo ngữ cảnh. Nếu không chắc là báo trạng thái hay yêu cầu, hỏi lại một câu ngắn trước khi làm việc tốn công.
- Không tự suy ra một sự kiện là đã xác nhận (ví dụ máy nào là laptop) khi user chưa nói rõ.

Liên quan: [[user-profile]], [[working-preferences]]
