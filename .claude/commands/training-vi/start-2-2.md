# /training:start-2-2 - Phát Triển Content Strategy

## Tiêu Chuẩn Ngôn Ngữ & Chất Lượng

**QUAN TRỌNG**: Phản hồi bằng ngôn ngữ mà người dùng đang sử dụng. Nếu tiếng Việt, trả lời bằng tiếng Việt. Nếu tiếng Tây Ban Nha, trả lời bằng tiếng Tây Ban Nha.

---

## Hướng Dẫn Cho Claude

Dạy phát triển content strategy toàn diện: research, planning, calendars, và measurement.

### Tổng Quan Bài Học

---

**Module 2.2: Phát Triển Content Strategy**

Content strategy biến đổi việc tạo nội dung ngẫu nhiên thành một growth engine có hệ thống. Hãy xây dựng một cái cho AgentKits.

**Thời lượng:** ~40 phút

---

### Bước 1: Research Foundation

Bắt đầu với market và audience research:

```
/research:market "B2B team productivity software - thị trường remote work tools"
```

```
/research:persona "Quản lý team remote tại các công ty công nghệ - 50-500 nhân viên"
```

```
/research:trend "Remote work productivity - team coordination - async work"
```

### Bước 2: SEO Keyword Research

Sử dụng SEO commands cho keyword foundation:

```
/seo:keywords "năng suất team từ xa"
```

```
/seo:keywords "phần mềm phối hợp team"
```

```
/seo:keywords "deep work cho teams"
```

Nhóm keywords thành topic clusters:
- Cluster 1: Remote team productivity
- Cluster 2: Team focus time
- Cluster 3: Coordination without meetings

### Bước 3: Competitive Content Analysis

Phân tích competitor content:

```
/seo:competitor "rescuetime.com"
```

Xác định:
- Những topics họ cover
- Content gaps chúng ta có thể fill
- Keywords họ đang rank

### Bước 4: Tạo Content Calendar

Sử dụng campaign calendar cho content planning:

```
/campaign:calendar "12 tuần - AgentKits content strategy - tập trung vào SEO, thought leadership, lead generation - topics: remote productivity, team coordination, deep work, meeting reduction"
```

### Bước 5: Định Nghĩa Content Types

Lập kế hoạch content theo funnel stage:

**TOFU (Awareness):**
- Blog posts (SEO-focused)
- Social media content
- Thought leadership

**MOFU (Consideration):**
- Comparison guides
- How-to content
- Case studies

**BOFU (Decision):**
- Product demos
- ROI calculators
- Customer testimonials

### Bước 6: Tạo Pillar Content Strategy

Lập kế hoạch pillar page strategy:

```
/content:blog "Hướng Dẫn Hoàn Chỉnh Về Năng Suất Team Từ Xa: Cách Phối Hợp Thời Gian Tập Trung Qua Các Múi Giờ" "năng suất team từ xa"
```

Cluster content (link đến pillar):
1. Cách lên lịch thời gian tập trung team
2. Giảm họp mà không mất alignment
3. Async communication best practices
4. Deep work trong remote teams
5. Productivity tracking cho teams

### Bước 7: Content Production Workflow

Sử dụng content commands cho mỗi piece:

**Blog Post Production:**
```
1. /seo:keywords "topic" - Research keywords
2. /content:blog "title" "keyword" - Tạo post
3. /seo:optimize "post" "keyword" - Tối ưu
4. Review với seo-specialist agent
5. Review với brand-voice-guardian agent
```

**Social Content Production:**
```
1. /content:social "topic" "linkedin" - LinkedIn post
2. /content:social "topic" "twitter" - Twitter thread
3. Review với conversion-optimizer agent
```

### Bước 8: Email Integration

Tạo email sequences để nurture content consumers:

```
/sequence:nurture "AgentKits" "blog readers đã tải guide"
```

### Bước 9: Content Distribution Plan

Sử dụng social commands cho distribution:

```
/social:schedule "linkedin,twitter" "4 tuần - AgentKits content distribution"
```

### Bước 10: Measurement Framework

Thiết lập content analytics:

```
/analytics:report "content performance" "organic traffic, engagement, conversions"
```

Key metrics cần track:
- Organic traffic theo content piece
- Time on page
- Conversion rate per content
- Lead quality từ content

### Tiếp Theo

Cho họ biết:
- Họ có complete content strategy
- Từ posting ngẫu nhiên đến systematic growth
- **Tiếp theo:** `/training:start-2-3` - Tạo Marketing Copy
- Scale copy production trong khi duy trì chất lượng

## Điểm Giảng Dạy Chính
- Strategy biến đổi content từ random thành systematic
- Lệnh `/research:*` xây dựng foundation
- `/seo:keywords` xác định opportunities
- Pillar + cluster = SEO powerhouse
- Content production tuân theo repeatable workflow
- Measurement đảm bảo accountability
