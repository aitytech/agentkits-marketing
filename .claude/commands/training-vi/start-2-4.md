# /training:start-2-4 - Phân Tích Campaign Data

## Tiêu Chuẩn Ngôn Ngữ & Chất Lượng

**QUAN TRỌNG**: Phản hồi bằng ngôn ngữ mà người dùng đang sử dụng. Nếu tiếng Việt, trả lời bằng tiếng Việt. Nếu tiếng Tây Ban Nha, trả lời bằng tiếng Tây Ban Nha.

---

## Hướng Dẫn Cho Claude

Dạy phân tích data, trích xuất insight, và executive reporting bằng analytics commands.

### Tổng Quan Bài Học

---

**Module 2.4: Phân Tích Campaign Data**

Phân tích data thường tốn thời gian. Hãy thành thạo biến data thành actionable insights và compelling reports.

**Thời lượng:** ~35 phút

---

### Bước 1: ROI Analysis

Sử dụng analytics commands:

```
/analytics:roi "Q1 campaign - chi tiêu $50K qua LinkedIn, Google, Email"
```

Review ROI calculation:
- Tổng chi tiêu theo kênh
- Revenue attributed
- ROAS theo kênh
- Cost per acquisition

### Bước 2: Funnel Analysis

Phân tích conversion funnel:

```
/analytics:funnel "trial signup - visitor đến trial đến paid conversion"
```

Review funnel metrics:
- Traffic theo source
- Conversion rates ở mỗi stage
- Drop-off points
- Optimization opportunities

### Bước 3: Performance Reporting

Tạo performance reports:

**Weekly Report:**
```
/report:weekly "AgentKits" "tuần hiện tại"
```

**Monthly Report:**
```
/report:monthly "AgentKits" "tháng hiện tại"
```

### Bước 4: Channel Performance

Phân tích theo kênh:

```
/analytics:report "channel performance" "LinkedIn, Google, Email, Organic"
```

Tạo channel comparison:
- Traffic contribution
- Lead quality
- Conversion rates
- Cost efficiency

### Bước 5: Content Performance

Phân tích content effectiveness:

```
/analytics:report "content performance" "blog posts, landing pages, email sequences"
```

Key metrics:
- Traffic theo content piece
- Engagement (time, scroll, shares)
- Conversion rate
- Lead quality

### Bước 6: Lead Quality Analysis

Sử dụng lead scoring để phân tích:

```
/crm:score "phân tích lead quality theo source và campaign"
```

Review:
- MQL rate theo source
- SQL conversion theo campaign
- Average lead score trends

### Bước 7: Executive Summary

Tạo executive-ready summary:

```
Tạo executive summary của Q1 marketing performance:

CẤU TRÚC:
1. Headline metrics (vs targets)
2. Top 3 wins với data
3. Top 3 challenges với impact
4. Channel performance snapshot (bảng)
5. Key learnings (3 insights)
6. Q2 recommendations (ưu tiên)
7. Budget request với justification

Giữ trong TỐI ĐA MỘT TRANG.
```

### Bước 8: Data-to-Action Framework

Dạy insight framework:

```
Cho mỗi finding, document:

1. OBSERVATION: Data cho thấy gì?
2. INSIGHT: Tại sao điều này xảy ra?
3. IMPLICATION: Nó có ý nghĩa gì?
4. RECOMMENDATION: Chúng ta nên làm gì?
5. EXPECTED IMPACT: Điều gì sẽ thay đổi?
```

### Bước 9: Operational Checklists

Sử dụng analytics checklists:

```
/checklist:analytics-monthly "tháng hiện tại" "AgentKits"
```

Review monthly analytics tasks:
- Data quality checks
- Platform verification
- Reporting accuracy
- Attribution validation

### Bước 10: Reporting Templates

Giải thích reusable reporting:

```
Weekly Report Workflow:
1. /analytics:roi "campaign" - Tính ROI
2. /analytics:funnel "funnel" - Phân tích funnel
3. /report:weekly "client" "week" - Tạo report

Monthly Report Workflow:
1. /analytics:report "all channels" - Full analysis
2. /crm:score "lead quality" - Lead analysis
3. /report:monthly "client" "month" - Tạo report
```

### Tiếp Theo

Cho họ biết:
- Họ bây giờ có thể biến data thành decisions
- Reports mà executives thực sự đọc
- **Tiếp theo:** `/training:start-2-5` - Competitive Analysis
- Research đối thủ và tìm advantages

## Điểm Giảng Dạy Chính
- Lệnh `/analytics:*` phân tích performance
- Lệnh `/report:*` tạo reports
- ROI và funnel analysis là nền tảng
- Executive summaries phải ngắn gọn
- Data-to-action framework đảm bảo accountability
