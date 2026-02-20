# /training:start-1-5 - Reviewer Agents Deep Dive

## Tiêu Chuẩn Ngôn Ngữ & Chất Lượng

**QUAN TRỌNG**: Phản hồi bằng ngôn ngữ mà người dùng đang sử dụng. Nếu tiếng Việt, trả lời bằng tiếng Việt. Nếu tiếng Tây Ban Nha, trả lời bằng tiếng Tây Ban Nha.

---

## Hướng Dẫn Cho Claude

Dạy học viên tận dụng reviewer agents để đảm bảo chất lượng và multi-perspective feedback.

### Tổng Quan Bài Học

---

**Module 1.5: Reviewer Agents Deep Dive**

Marketing kit bao gồm 6 reviewer agents chuyên biệt. Những agents này cung cấp feedback cấp chuyên gia từ các góc độ khác nhau để đảm bảo chất lượng nội dung.

**Thời lượng:** ~30 phút

---

### Bước 1: Tại Sao Cần Reviewer Agents?

Mọi phần marketing nên được review từ nhiều góc độ:
- Nhất quán thương hiệu
- Tối ưu SEO
- Tiềm năng conversion
- Phù hợp persona
- Triển khai thực tế

Reviewer agents cho bạn các chuyên gia on-demand cho từng lĩnh vực.

### Bước 2: Expert Reviewers

Giải thích ba expert reviewers:

**`brand-voice-guardian`:**
- Đảm bảo nhất quán brand voice
- Kiểm tra tone và messaging
- Xác nhận theo brand guidelines
- Đánh dấu nội dung off-brand

**`seo-specialist`:**
- Đánh giá sử dụng keyword
- Kiểm tra các yếu tố on-page SEO
- Review cấu trúc nội dung
- Xác định cơ hội tối ưu

**`conversion-optimizer`:**
- Đánh giá hiệu quả CTA
- Review các yếu tố persuasion
- Xác định friction points
- Đề xuất cải thiện conversion

### Bước 3: Persona Reviewers

Giải thích ba persona reviewers:

**`manager-maria` (Marketing Manager, 38 tuổi):**
- Góc độ công ty B2B mid-size
- Đánh giá phù hợp triển khai team
- Xem xét ràng buộc tài nguyên
- Review tính khả thi campaign

**`solo-steve` (Solopreneur, 32 tuổi):**
- Góc độ doanh nghiệp một người
- Đánh giá hiệu quả thời gian
- Review dễ tự phục vụ
- Xem xét nhạy cảm ngân sách

**`startup-sam` (Startup Founder, 28 tuổi):**
- Góc độ startup giai đoạn đầu
- Đánh giá tiềm năng growth
- Review yếu tố virality
- Đánh giá speed to market

### Bước 4: Sử Dụng Expert Reviewers

Thực hành với expert reviewers:

```
Review blog post AgentKits của chúng ta với expert reviewers:

1. `brand-voice-guardian`: Đánh giá nhất quán thương hiệu
2. `seo-specialist`: Đánh giá tối ưu SEO
3. `conversion-optimizer`: Đánh giá tiềm năng conversion

Mỗi reviewer nên chấm điểm (1-10) và cung cấp:
- Top 3 điểm mạnh
- Top 3 cải tiến cần thiết
- Chỉnh sửa được đề xuất cụ thể
```

### Bước 5: Sử Dụng Persona Reviewers

Thực hành với persona reviewers:

```
Review email sequence AgentKits từ góc độ persona:

1. `manager-maria`: Một B2B marketing manager có thấy giá trị không?
2. `solo-steve`: Một solopreneur có triển khai không?
3. `startup-sam`: Điều này có thúc đẩy growth cho startup không?

Mỗi reviewer nên đánh giá:
- Cộng hưởng với nhu cầu của họ
- Tính khả thi triển khai
- Nhận thức giá trị
```

### Bước 6: Combined Review Board

Sử dụng tất cả reviewers cùng nhau cho feedback toàn diện:

```
Chạy full review board trên landing page copy AgentKits:

Expert Reviews:
- Nhất quán thương hiệu (brand-voice-guardian)
- Tối ưu SEO (seo-specialist)
- Tiềm năng conversion (conversion-optimizer)

Persona Reviews:
- Phù hợp B2B (manager-maria)
- Tiềm năng self-service (solo-steve)
- Tiềm năng growth (startup-sam)

Tổng hợp: Những thay đổi nào sẽ thỏa mãn tất cả reviewers?
```

### Bước 7: Iterative Improvement

Cho thấy chu kỳ review-improve:

```
1. Tạo nội dung
2. Nhận multi-reviewer feedback
3. Triển khai các thay đổi ưu tiên cao nhất
4. Re-review nội dung đã thay đổi
5. Lặp lại cho đến khi tất cả reviewers chấm 8+
```

### Bước 8: Khi Nào Sử Dụng Reviewer Nào

Cung cấp hướng dẫn:

| Loại Nội Dung | Primary Reviewers |
|-------------|-------------------|
| Blog posts | seo-specialist, brand-voice-guardian |
| Landing pages | conversion-optimizer, manager-maria |
| Email sequences | email-wizard, startup-sam |
| Social content | brand-voice-guardian, solo-steve |
| Sales collateral | sales-enabler, manager-maria |

### Tiếp Theo

Cho họ biết:
- Họ bây giờ có hệ thống review có thể tái sử dụng
- Những reviewers này đảm bảo chất lượng nhất quán
- **Tiếp theo:** `/training:start-1-6` - Project Memory (CLAUDE.md)
- Họ sẽ học cách duy trì persistent context

## Điểm Giảng Dạy Chính
- 6 reviewer agents: 3 expert, 3 persona
- Expert reviewers kiểm tra các dimensions chất lượng
- Persona reviewers kiểm tra audience fit
- Sử dụng nhiều reviewers cho feedback toàn diện
- Iterate nội dung qua review cycles
