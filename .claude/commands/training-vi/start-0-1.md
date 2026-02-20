# /training:start-0-1 - Cài Đặt & Thiết Lập

## Tiêu Chuẩn Ngôn Ngữ & Chất Lượng

**QUAN TRỌNG**: Phản hồi bằng ngôn ngữ mà người dùng đang sử dụng. Nếu tiếng Việt, trả lời bằng tiếng Việt. Nếu tiếng Tây Ban Nha, trả lời bằng tiếng Tây Ban Nha.

---

## Hướng Dẫn Cho Claude

Hướng dẫn học viên xác minh cài đặt Claude Code và thiết lập marketing kit.

### Tổng Quan Bài Học

Nói điều gì đó như:

---

**Module 0.1: Cài Đặt & Thiết Lập**

Trước khi đi sâu vào các quy trình marketing, hãy đảm bảo mọi thứ được thiết lập đúng.

---

### Bước 1: Xác Minh Claude Code

Yêu cầu họ xác nhận:
- Họ đang chạy trong Claude Code (không phải web chat)
- Họ có đăng ký Claude Pro hoặc Max

Nếu họ không chắc, giải thích:
- Claude Code là phiên bản terminal/CLI
- Nó có thể đọc, viết và chỉnh sửa file trực tiếp
- Khác với claude.ai web chat

### Bước 2: Kiểm Tra Files Marketing Kit

Chạy các kiểm tra này VỚI học viên (thực sự thực thi chúng):

```
Cho tôi xem nội dung của thư mục này
```

Họ sẽ thấy:
- Thư mục `.claude/` với agents, commands, skills, workflows
- Thư mục `docs/` với tài liệu
- File `CLAUDE.md` (project memory)
- File `README.md`

### Bước 3: Khám Phá Cấu Trúc Hệ Thống

Cho họ xem cấu trúc marketing kit:

```
Liệt kê tất cả thư mục trong .claude/
```

Giải thích từng thành phần:
- `agents/` - 18 marketing agents chuyên biệt
- `commands/` - 76 slash commands được tổ chức theo chức năng
- `skills/` - Kiến thức domain marketing
- `workflows/` - Quy trình Marketing, Sales, và CRM cốt lõi

### Bước 4: Khám Phá Commands Có Sẵn

Cho họ xem các danh mục command:

```
Liệt kê tất cả thư mục trong .claude/commands/
```

Giải thích các nhóm command chính:
- `campaign/` - `/campaign:plan`, `/campaign:brief`, `/campaign:analyze`
- `content/` - `/content:blog`, `/content:social`, `/content:email`, `/content:landing`
- `seo/` - `/seo:keywords`, `/seo:audit`, `/seo:optimize`
- `analytics/` - `/analytics:roi`, `/analytics:funnel`, `/analytics:report`
- `sales/` - `/sales:pitch`, `/sales:outreach`, `/sales:battlecard`

### Bước 5: Thử Lệnh Đầu Tiên

Cho họ thử một lệnh thực:

```
/brainstorm "Các kênh marketing tốt nhất cho sản phẩm B2B SaaS là gì?"
```

Chúc mừng việc thực thi lệnh đầu tiên của họ!

### Bước 6: Xem Tài Liệu

Cho họ xem các tài liệu chính:

```
Đọc docs/usage-guide.md (50 dòng đầu)
```

Giải thích:
- `docs/usage-guide.md` - Tài liệu tham khảo hệ thống đầy đủ
- `docs/brand-guidelines.md` - Mẫu tiêu chuẩn thương hiệu
- `docs/content-style-guide.md` - Tiêu chuẩn viết
- `docs/campaign-playbooks.md` - Mẫu campaign
- `docs/channel-strategies.md` - Chiến thuật nền tảng
- `docs/analytics-setup.md` - Cấu hình tracking

### Tiếp Theo

Cho họ biết:
- **Bài tiếp theo:** `/training:start-0-2` - Nhiệm Vụ Marketing Đầu Tiên
- Họ vừa xác minh thiết lập và chạy lệnh đầu tiên!
- Đây chính xác là cách phần còn lại của khóa học hoạt động

## Điểm Giảng Dạy Chính
- Claude Code làm việc trực tiếp với files
- Marketing kit có 18 agents, 76 commands, và tài liệu toàn diện
- Mỗi bài học liên quan đến thực thi command thực hành
- Xác minh mọi thứ thực sự hoạt động (đọc lại files)
