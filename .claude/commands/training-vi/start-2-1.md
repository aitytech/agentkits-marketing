# /training:start-2-1 - Viết Campaign Brief

## Tiêu Chuẩn Ngôn Ngữ & Chất Lượng

**QUAN TRỌNG**: Phản hồi bằng ngôn ngữ mà người dùng đang sử dụng. Nếu tiếng Việt, trả lời bằng tiếng Việt. Nếu tiếng Tây Ban Nha, trả lời bằng tiếng Tây Ban Nha.

---

## Hướng Dẫn Cho Claude

Bắt đầu Module 2 - Ứng Dụng Nâng Cao. Bài học này dạy tạo campaign brief toàn diện bằng campaign commands.

### Tổng Quan Bài Học

---

**Module 2.1: Viết Campaign Brief**

Chào mừng đến Module 2! Bây giờ chúng ta áp dụng mọi thứ bạn đã học vào các marketing workflows thực. Campaign briefs là nền tảng của việc thực thi thành công.

**Thời lượng:** ~45 phút

---

### Bước 1: Giải Thích Cách Tiếp Cận Hợp Tác

> Claude là đối tác chiến lược của bạn, không phải thay thế cho chuyên môn marketing của bạn. Bạn mang đến insights, kiến thức thị trường, và tư duy chiến lược. Claude giúp diễn đạt và cấu trúc những ý tưởng đó.

### Bước 2: Thu Thập Input Chiến Lược

Hỏi học viên về tư duy chiến lược của họ:

```
Hãy tạo một campaign brief toàn diện cho chiến dịch growth Q2 của AgentKits.

Trước tiên, cho tôi biết tư duy chiến lược của bạn:
- Mục tiêu chính là gì? (ví dụ: 2000 trial signups)
- Ngân sách là bao nhiêu?
- Khung thời gian là gì?
- Có kênh cụ thể nào cần tập trung không?
- Thông điệp chính quý này là gì?
```

Chờ input của họ, sau đó tiếp tục.

### Bước 3: Sử Dụng Campaign Plan Command

Sử dụng lệnh campaign planning:

```
/campaign:plan "AgentKits Q2 Growth - Mục tiêu: 2000 trial signups, Ngân sách: $75K, Khung thời gian: 8 tuần, Kênh: LinkedIn Ads, Content Marketing, Email Nurture, Thông điệp chính: Phối hợp thời gian tập trung toàn team"
```

Review campaign plan toàn diện được tạo bởi `planner` agent.

### Bước 4: Tạo Creative Brief

Bây giờ sử dụng lệnh creative brief:

```
/campaign:brief "AgentKits Q2 Growth Campaign"
```

Giải thích những gì creative brief bao gồm:
- Single-minded proposition
- Target audience insights
- Tone and manner
- Deliverables list
- Creative mandatories

### Bước 5: Nhận Multi-Perspective Feedback

Sử dụng reviewer agents:

```
Review Q2 campaign plan từ ba góc độ:

1. `manager-maria` (Marketing Manager) - Liệu điều này có khả thi cho marketing team thực hiện không?
2. `conversion-optimizer` - Liệu cấu trúc campaign này có thúc đẩy conversions không?
3. `brand-voice-guardian` - Messaging có on-brand không?

Cung cấp feedback và đề xuất cụ thể.
```

### Bước 6: Tạo Content Calendar

Sử dụng lệnh calendar:

```
/campaign:calendar "8 tuần - AgentKits Q2 Growth - content marketing, social media, email nurture tập trung vào team productivity"
```

### Bước 7: Tạo Tài Liệu Hỗ Trợ

Tạo các campaign assets bổ sung:

**Lead Scoring Model:**
```
/leads:score "B2B SaaS - công ty công nghệ - team productivity"
```

**Welcome Sequence:**
```
/sequence:welcome "AgentKits" "trial signups từ Q2 campaign"
```

**Nurture Sequence:**
```
/sequence:nurture "AgentKits" "engaged leads chưa convert"
```

### Bước 8: Chuẩn Bị Cạnh Tranh

Chuẩn bị competitive materials:

```
/sales:battlecard "RescueTime - đối thủ chính cho productivity tools"
```

```
/competitor:deep "Freedom app - focus và productivity blocking"
```

### Bước 9: Tạo Measurement Plan

Thiết lập analytics:

```
/analytics:funnel "trial signup funnel - awareness đến trial đến paid"
```

### Bước 10: Lưu Như Template

Giải thích workflow này có thể lặp lại cho bất kỳ campaign nào:

```
Campaign Brief Workflow:
1. /campaign:plan - Strategic plan
2. /campaign:brief - Creative brief
3. /campaign:calendar - Content calendar
4. /leads:score - Lead qualification
5. /sequence:welcome - New lead nurture
6. /sequence:nurture - Ongoing nurture
7. /sales:battlecard - Competitive prep
8. /analytics:funnel - Measurement setup
```

### Tiếp Theo

Cho họ biết:
- Họ đã tạo campaign brief chuyên nghiệp trong chưa đầy một giờ
- Thông thường việc này mất nhiều ngày với nhiều cuộc họp
- **Tiếp theo:** `/training:start-2-2` - Phát Triển Content Strategy
- Họ sẽ xây dựng content plans toàn diện

## Điểm Giảng Dạy Chính
- Campaign briefs là hợp tác
- Sử dụng `/campaign:plan` cho strategic planning
- Sử dụng `/campaign:brief` cho creative direction
- Sử dụng `/campaign:calendar` cho content scheduling
- Sử dụng reviewer agents cho feedback
- Tạo supporting assets (lead scoring, sequences, battlecards)
