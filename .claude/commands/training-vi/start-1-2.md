# /training:start-1-2 - Làm Việc Với Marketing Files

## Tiêu Chuẩn Ngôn Ngữ & Chất Lượng

**QUAN TRỌNG**: Phản hồi bằng ngôn ngữ mà người dùng đang sử dụng. Nếu tiếng Việt, trả lời bằng tiếng Việt. Nếu tiếng Tây Ban Nha, trả lời bằng tiếng Tây Ban Nha.

---

## Hướng Dẫn Cho Claude

Dạy về tổ chức file, sử dụng command, và tham chiếu tài liệu cho các dự án marketing.

### Tổng Quan Bài Học

---

**Module 1.2: Làm Việc Với Marketing Files**

Là một marketer, bạn làm việc với nhiều loại asset: campaign briefs, bản nháp nội dung, tài liệu nghiên cứu, báo cáo analytics. Hãy thành thạo việc tổ chức và quản lý chúng hiệu quả.

**Thời lượng:** ~25 phút

---

### Bước 1: Review Cấu Trúc Tài Liệu

Cho họ xem thư mục docs:

```
Liệt kê tất cả files trong docs/
```

Giải thích từng file tài liệu:
- `brand-guidelines.md` - Mẫu tiêu chuẩn thương hiệu
- `content-style-guide.md` - Tiêu chuẩn viết, CTAs, định dạng
- `campaign-playbooks.md` - Mẫu campaign đã được chứng minh
- `channel-strategies.md` - Chiến thuật theo nền tảng
- `analytics-setup.md` - Tracking và attribution
- `usage-guide.md` - Tài liệu tham khảo hệ thống đầy đủ

### Bước 2: Khám Phá Campaign Playbooks

Đọc campaign playbooks:

```
Đọc docs/campaign-playbooks.md
```

Giải thích các loại playbook:
- Product Launch Playbook
- Lead Generation Playbook
- Brand Awareness Playbook
- Retention Playbook
- Event Promotion Playbook

### Bước 3: Thực Hành Content Commands

Hướng dẫn họ qua các lệnh tạo nội dung:

**Blog Post:**
```
/content:blog "5 Cách Các Team Làm Việc Từ Xa Có Thể Cải Thiện Phối Hợp" "năng suất team từ xa"
```

**Social Content:**
```
/content:social "Mẹo phối hợp team cho các quản lý remote" "linkedin"
```

**Email Copy:**
```
/content:email "welcome" "người dùng trial cho AgentKits"
```

### Bước 4: Thực Hành Search Commands

Dạy kỹ thuật tìm kiếm bằng grep/find hoặc hỏi Claude:

```
Tìm tất cả files có đề cập "lead scoring"
```

```
Tìm kiếm files chứa "conversion rate"
```

### Bước 5: Tạo Nội Dung Batch

Trình bày tạo nhiều assets cùng lúc:

```
Tạo nội dung multi-channel cho launch AgentKits:
1. LinkedIn announcement post
2. Twitter thread (5 tweets)
3. Email subject lines (5 biến thể A/B)
4. Google Ads headlines (5 biến thể, tối đa 30 ký tự)
```

### Bước 6: Tham Chiếu Chéo Với Style Guide

Cho thấy cách sử dụng content style guide:

```
Đọc docs/content-style-guide.md
```

Chỉ ra:
- Công thức tiêu đề (4-U Framework)
- Patterns CTA
- Tiêu chuẩn khả năng đọc
- Guidelines viết SEO

### Bước 7: Quick Reference Commands

Chia sẻ các patterns command thiết yếu:

**Campaign Commands:**
- `/campaign:plan` - Tạo campaign plan
- `/campaign:brief` - Tạo creative brief
- `/campaign:analyze` - Phân tích hiệu suất
- `/campaign:calendar` - Content calendar

**Content Commands:**
- `/content:blog` - SEO blog post
- `/content:social` - Platform-specific social
- `/content:email` - Email copy
- `/content:landing` - Landing page copy
- `/content:ads` - Ad copy

### Tiếp Theo

Cho họ biết:
- Họ bây giờ biết cách navigate tài liệu marketing kit
- Commands được tổ chức theo chức năng marketing
- **Tiếp theo:** `/training:start-1-3` - Nhiệm Vụ Marketing Đầu Tiên (tạo nội dung, phân tích)

## Điểm Giảng Dạy Chính
- Tổ chức tài liệu tốt làm mọi thứ nhanh hơn
- Sáu tài liệu chính bao gồm brand, content, campaigns, channels, analytics, usage
- Commands được tổ chức theo chức năng (campaign, content, seo, etc.)
- Tham chiếu chéo docs để đảm bảo tính nhất quán
- Batch operations tiết kiệm rất nhiều thời gian
