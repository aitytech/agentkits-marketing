# /training:start-1-1 - Chào Mừng Đến Markit

## Tiêu Chuẩn Ngôn Ngữ & Chất Lượng

**QUAN TRỌNG**: Phản hồi bằng ngôn ngữ mà người dùng đang sử dụng. Nếu tiếng Việt, trả lời bằng tiếng Việt. Nếu tiếng Tây Ban Nha, trả lời bằng tiếng Tây Ban Nha.

---

## Hướng Dẫn Cho Claude

Bắt đầu Module 1 - Khái Niệm Cốt Lõi. Bài học này giới thiệu dự án agency Markit và các quy trình cốt lõi của marketing kit.

### Tổng Quan Bài Học

---

**Module 1.1: Chào Mừng Đến Markit**

Chào mừng đến Module 1! Bây giờ chúng ta sẽ nắm vững các khái niệm cốt lõi của marketing kit thông qua công việc thực hành. Đến cuối module này, bạn sẽ xử lý các nhiệm vụ marketing thực một cách tự tin.

**Thời lượng:** ~20 phút

---

### Bước 1: Thiết Lập Bối Cảnh

Giải thích vai trò của họ:

> Bạn là Marketing Strategist tại agency **Markit**. Khách hàng của bạn là **AgentKits**. Nhiệm vụ của bạn:
> 1. Ra mắt sản phẩm ra thị trường
> 2. Tạo nhận thức và đăng ký
> 3. Tạo nội dung cộng hưởng với các team làm việc từ xa
> 4. Xây dựng một content marketing engine bền vững

### Bước 2: Hiểu Các Quy Trình Cốt Lõi

Giải thích ba quy trình chính trong `.claude/workflows/`:

**Marketing Pipeline (`primary-workflow.md`):**
```
Nghiên cứu → Insights → Sáng tạo → Kế hoạch → Tạo → Chỉnh sửa → Xuất bản → Đo lường
```

**Sales Pipeline (`sales-workflow.md`):**
```
Lead → MQL → SQL → Cơ hội → Đề xuất → Đàm phán → Đóng
```

**CRM Lifecycle (`crm-workflow.md`):**
```
Subscriber → Lead → MQL → SQL → Cơ hội → Khách hàng → Advocate
```

### Bước 3: Hiểu Vai Trò Agent

Giải thích cách agents ánh xạ đến các chức năng marketing:

**TOFU (Đầu Phễu):**
- `attraction-specialist` - Tạo lead, SEO, landing pages

**MOFU (Giữa Phễu):**
- `lead-qualifier` - Phát hiện ý định, chấm điểm lead
- `email-wizard` - Chuỗi nurture

**BOFU (Cuối Phễu):**
- `sales-enabler` - Pitches, case studies, battlecards

**Giữ Chân:**
- `continuity-specialist` - Phát hiện churn, tái kích hoạt
- `upsell-maximizer` - Mở rộng doanh thu

### Bước 4: Tạo Campaign Brief Đầu Tiên

Bây giờ công việc thực sự bắt đầu với `/campaign:plan`:

```
/campaign:plan "AgentKits Q1 Product Launch - Mục tiêu: 1000 trial signups trong 30 ngày, Ngân sách: $50K, Kênh: LinkedIn, Google Ads, Content, Email"
```

Review campaign plan toàn diện được tạo ra.

### Bước 5: Review Brief

Chỉ ra cách planner agent:
- Tạo mục tiêu và KPIs có cấu trúc
- Định nghĩa các phân khúc đối tượng mục tiêu
- Phân bổ ngân sách qua các kênh
- Thiết lập framework đo lường

### Bước 6: Sức Mạnh Iteration

Cho họ thấy tinh chỉnh bằng câu hỏi follow-up:

```
Mở rộng phần đối tượng mục tiêu với các kịch bản day-in-the-life cho mỗi persona
```

Giải thích: Iteration là chìa khóa. Bản nháp đầu tiên là điểm khởi đầu.

### Bước 7: Demo Context Awareness

Trình bày sức mạnh của context:

```
/content:social "Thông báo ra mắt sản phẩm cho AgentKits dựa trên campaign brief" "linkedin"
```

Cho thấy Claude tự động lấy từ campaign context.

### Tiếp Theo

Cho họ biết:
- Họ đã tạo campaign brief chuyên nghiệp bằng `/campaign:plan`
- Claude đã sử dụng context từ brand guidelines và personas
- **Tiếp theo:** `/training:start-1-2` - Làm Việc Với Marketing Files
- Họ sẽ học cách tổ chức, tìm và quản lý marketing assets hiệu quả

## Điểm Giảng Dạy Chính
- Markit agency là dự án thực hành hands-on
- Ba quy trình cốt lõi: Marketing, Sales, CRM
- Agents ánh xạ đến các giai đoạn phễu (TOFU, MOFU, BOFU, Retention)
- `/campaign:plan` tạo campaign briefs toàn diện
- Iteration cải thiện chất lượng đầu ra
