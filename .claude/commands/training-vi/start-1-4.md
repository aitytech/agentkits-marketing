# /training:start-1-4 - Sử Dụng Agents Cho Marketing

## Tiêu Chuẩn Ngôn Ngữ & Chất Lượng

**QUAN TRỌNG**: Phản hồi bằng ngôn ngữ mà người dùng đang sử dụng. Nếu tiếng Việt, trả lời bằng tiếng Việt. Nếu tiếng Tây Ban Nha, trả lời bằng tiếng Tây Ban Nha.

---

## Hướng Dẫn Cho Claude

Dạy khái niệm về agents - các thành viên AI team chuyên biệt xử lý các chức năng marketing khác nhau.

### Tổng Quan Bài Học

---

**Module 1.4: Sử Dụng Agents Cho Marketing**

Marketing kit có 18 agents chuyên biệt. Hãy nghĩ về họ như các thành viên AI team có thể làm việc trên các nhiệm vụ marketing cụ thể với chuyên môn.

**Thời lượng:** ~35 phút

---

### Bước 1: Giải Thích Hệ Thống Agent

Marketing kit có các agents được tổ chức theo chức năng:

**Core Marketing Agents (6):**
| Agent | Trọng Tâm | Use Cases |
|-------|-------|-----------|
| `attraction-specialist` | TOFU, lead gen | SEO, landing pages, competitor intel |
| `lead-qualifier` | Phát hiện ý định | Lead scoring, phân tích hành vi |
| `email-wizard` | Email marketing | Sequences, automation, optimization |
| `sales-enabler` | Hỗ trợ bán hàng | Pitches, case studies, battlecards |
| `continuity-specialist` | Giữ chân | Phát hiện churn, tái kích hoạt |
| `upsell-maximizer` | Mở rộng doanh thu | Cross-sell, upsell, feature adoption |

**Supporting Agents (6):**
| Agent | Trọng Tâm | Use Cases |
|-------|-------|-----------|
| `researcher` | Market intelligence | Nghiên cứu, phân tích cạnh tranh |
| `brainstormer` | Ý tưởng sáng tạo | Campaign concepts, messaging angles |
| `planner` | Lập kế hoạch chiến lược | Campaign plans, content calendars |
| `project-manager` | Phối hợp | Status tracking, campaign oversight |
| `copywriter` | Tạo nội dung | Copy, messaging, creative |
| `docs-manager` | Tài liệu | Brand guidelines, style guides |

**Reviewer Agents (6):**
| Agent | Góc Độ | Reviews Cho |
|-------|-------------|-------------|
| `brand-voice-guardian` | Nhất quán thương hiệu | Voice, tone, messaging |
| `conversion-optimizer` | Chuyên gia CRO | Conversion, persuasion |
| `seo-specialist` | Tối ưu tìm kiếm | Keywords, technical SEO |
| `manager-maria` | Marketing manager (38 tuổi, B2B) | Strategy, team fit |
| `solo-steve` | Solopreneur (32 tuổi) | Thời gian, ngân sách, DIY |
| `startup-sam` | Startup founder (28 tuổi) | Growth, virality, speed |

### Bước 2: Bài Tập Agent - Multi-Perspective Review

Tạo nội dung và review từ nhiều góc độ:

```
Review AgentKits campaign brief từ ba góc độ agent:

1. Như `brand-voice-guardian` - đánh giá tính nhất quán thương hiệu và messaging
2. Như `conversion-optimizer` - đánh giá CTAs, persuasion, và tiềm năng conversion
3. Như `manager-maria` - liệu điều này có phù hợp cho một B2B marketing team thực hiện không?

Cho mỗi góc độ, cung cấp:
- Điều gì đang hoạt động tốt
- Các lĩnh vực cần cải thiện
- Khuyến nghị cụ thể
```

Giải thích điều vừa xảy ra - ba reviews chuyên biệt trong một lệnh.

### Bước 3: Sử Dụng Lead Qualification

Trình bày lead-qualifier agent qua commands:

```
/leads:score "Công ty B2B SaaS - ngành công nghệ"
```

```
/leads:qualify "Công cụ năng suất AgentKits"
```

Cho thấy lead-qualifier tạo:
- Tiêu chí chấm điểm demographic
- Tín hiệu chấm điểm behavioral
- Ngưỡng MQL/SQL

### Bước 4: Sử Dụng Email Wizard

Trình bày email-wizard agent:

```
/sequence:welcome "AgentKits" "người dùng trial"
```

```
/sequence:nurture "AgentKits" "leads đã tải guide của chúng ta"
```

### Bước 5: Sử Dụng Sales Enabler

Trình bày sales-enabler agent:

```
/sales:pitch "công ty enterprise đang xem xét AgentKits" "phối hợp team"
```

```
/sales:battlecard "RescueTime"
```

### Bước 6: Kịch Bản Thực Tế - Quick Response

```
KỊCH BẢN: Một đối thủ vừa công bố tính năng "team focus". Sử dụng agents để phản hồi:

1. Sử dụng `researcher` để phân tích thông báo của họ
2. Sử dụng `brainstormer` để phát triển counter-positioning
3. Sử dụng `copywriter` để tạo response content
4. Sử dụng `email-wizard` để draft customer communication
```

### Bước 7: Agent Best Practices

Chia sẻ các mẹo này:
- Cụ thể với mục tiêu nhiệm vụ
- Tham chiếu brand guidelines và personas
- Định nghĩa outputs rõ ràng (format, độ dài)
- Sử dụng specialized agents cho specialized tasks
- Kết hợp agents cho các dự án phức tạp

### Tiếp Theo

Cho họ biết:
- Họ bây giờ hiểu hệ thống 18-agent
- **Tiếp theo:** `/training:start-1-5` - Custom Marketing Sub-Agents
- Họ sẽ học về persona reviewers và cách nhận feedback có mục tiêu

## Điểm Giảng Dạy Chính
- 18 agents được tổ chức: Core (6), Supporting (6), Reviewers (6)
- Core agents ánh xạ đến funnel stages
- Reviewer agents cung cấp multi-perspective feedback
- Commands gọi các khả năng agent cụ thể
- Kết hợp agents cho các dự án phức tạp
