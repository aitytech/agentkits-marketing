# /training:start-2-3 - Tạo Marketing Copy

## Tiêu Chuẩn Ngôn Ngữ & Chất Lượng

**QUAN TRỌNG**: Phản hồi bằng ngôn ngữ mà người dùng đang sử dụng. Nếu tiếng Việt, trả lời bằng tiếng Việt. Nếu tiếng Tây Ban Nha, trả lời bằng tiếng Tây Ban Nha.

---

## Hướng Dẫn Cho Claude

Dạy tạo copy khối lượng lớn qua các kênh trong khi duy trì chất lượng.

### Tổng Quan Bài Học

---

**Module 2.3: Tạo Marketing Copy**

Học cách tạo marketing copy chuyên nghiệp ở quy mô: emails, ads, social, landing pages. Chất lượng + Tốc độ.

**Thời lượng:** ~35 phút

---

### Bước 1: Email Welcome Sequence

Sử dụng lệnh sequence:

```
/sequence:welcome "AgentKits" "người dùng trial - quản lý team từ xa"
```

Review sequence được tạo:
- Email 1 (Ngày 0): Welcome + Quick Start
- Email 2 (Ngày 2): Feature Highlight
- Email 3 (Ngày 5): Social Proof + Tips
- Email 4 (Ngày 9): Value Reinforcement
- Email 5 (Ngày 13): Trial Ending + Upgrade

Mỗi email bao gồm:
- Biến thể subject line cho A/B testing
- Preview text
- Body copy
- CTA rõ ràng

### Bước 2: Social Media Content

Sử dụng content commands cho social:

**LinkedIn:**
```
/content:social "Mẹo phối hợp team cho quản lý remote - AgentKits launch" "linkedin"
```

**Twitter:**
```
/content:social "5 cách remote teams lãng phí thời gian phối hợp - thread" "twitter"
```

### Bước 3: Blog Content

Sử dụng blog command với SEO focus:

```
/content:blog "Cách Remote Teams Có Thể Phối Hợp Thời Gian Tập Trung Mà Không Cần Họp Liên Tục" "thời gian tập trung team từ xa"
```

Sau đó tối ưu:
```
/seo:optimize "blog post" "thời gian tập trung team từ xa"
```

### Bước 4: Paid Ad Copy

Sử dụng ad copy commands:

**Google Ads:**
```
/content:ads "google" "phần mềm năng suất team - thúc đẩy signups"
```

**Meta Ads:**
```
/content:ads "meta" "phối hợp team từ xa - awareness campaign"
```

**LinkedIn Ads:**
```
/content:ads "linkedin" "B2B productivity tool - lead generation"
```

### Bước 5: Landing Page Copy

Sử dụng landing page command:

```
/content:landing "14-day free trial của AgentKits" "quản lý team từ xa tại công ty công nghệ"
```

Điều này tạo ra:
- Hero section (headline, subhead, CTA)
- Problem section
- Solution section
- Features với benefits
- Social proof section
- Pricing overview
- FAQ section
- Final CTA

### Bước 6: Fast vs Good Content

Giải thích hai content modes:

**Fast Content (`/content:fast`):**
- Turnaround nhanh
- Tốt cho ideation
- First drafts
- Nhu cầu high volume

```
/content:fast "Quick LinkedIn post về lợi ích thời gian tập trung team"
```

**Good Content (`/content:good`):**
- Research kỹ lưỡng
- Multiple variations
- Publication-ready
- Strategic pieces

```
/content:good "Detailed blog post về khoa học của thời gian tập trung team với citations nghiên cứu"
```

### Bước 7: Content Enhancement

Sử dụng enhancement commands:

```
/content:enhance "làm copy conversational hơn và thêm urgency"
```

```
/content:cro "tối ưu cho conversion rate cao hơn"
```

### Bước 8: A/B Test Variations

Tạo test variations:

```
Tạo A/B test variations cho landing page:

Headlines (5 góc độ):
1. Outcome-focused
2. Problem-focused
3. Question
4. How-to
5. Social proof

CTAs (3 variations):
1. Start Free Trial
2. Try It Free
3. Get Started Now
```

### Bước 9: Personalization by Persona

Tạo persona-specific variations:

**Cho Solo Sam:**
```
/content:email "thông báo sản phẩm" "technical team managers - efficiency focus"
```

**Cho Startup Sam:**
```
/content:email "thông báo sản phẩm" "startup founders - growth và scale focus"
```

### Bước 10: Quality Review

Review tất cả content với specialists:

```
Review tất cả content chúng ta đã tạo với:
1. brand-voice-guardian - brand consistency
2. conversion-optimizer - conversion potential
3. seo-specialist - SEO optimization

Chấm điểm mỗi piece và xác định top improvements cần thiết.
```

### Tiếp Theo

Cho họ biết:
- Họ đã tạo complete copy library trong một session
- Thông thường mất nhiều tuần
- **Tiếp theo:** `/training:start-2-4` - Phân Tích Campaign Data
- Biến data thành actionable insights

## Điểm Giảng Dạy Chính
- Lệnh `/content:*` xử lý tất cả content types
- `/sequence:*` tạo email automation
- Dùng fast mode cho drafts, good mode cho final
- `/content:cro` tối ưu cho conversion
- Personalize theo persona cho relevance cao hơn
- Luôn review với specialist agents
