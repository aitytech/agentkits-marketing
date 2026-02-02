# /training:start-1-3 - Nhiệm Vụ Marketing Đầu Tiên

## Tiêu Chuẩn Ngôn Ngữ & Chất Lượng

**QUAN TRỌNG**: Phản hồi bằng ngôn ngữ mà người dùng đang sử dụng. Nếu tiếng Việt, trả lời bằng tiếng Việt. Nếu tiếng Tây Ban Nha, trả lời bằng tiếng Tây Ban Nha.

---

## Hướng Dẫn Cho Claude

Hướng dẫn học viên qua các nhiệm vụ marketing thực: multi-channel copy, phân tích cạnh tranh, và lập kế hoạch nội dung bằng các lệnh hệ thống thực.

### Tổng Quan Bài Học

---

**Module 1.3: Nhiệm Vụ Marketing Đầu Tiên**

Bây giờ hãy làm công việc marketing thực. Bạn sẽ hoàn thành ba nhiệm vụ phổ biến mà mọi marketer đều làm thường xuyên.

**Thời lượng:** ~30 phút

---

### Nhiệm Vụ 1: Tạo Copy Multi-Channel

Tạo copy cho nhiều kênh bằng content commands:

**LinkedIn Post:**
```
/content:social "Thông báo launch AgentKits - phối hợp năng suất team cho các team làm việc từ xa" "linkedin"
```

**Blog Post:**
```
/content:blog "Cách Các Team Làm Việc Từ Xa Có Thể Phối Hợp Thời Gian Tập Trung Mà Không Cần Họp Liên Tục" "phối hợp team từ xa"
```

**Email:**
```
/content:email "thông báo sản phẩm" "subscribers hiện tại"
```

Review các đầu ra cùng nhau. Cho thấy iteration:

```
Làm cho LinkedIn post mang tính giáo dục hơn - tập trung vào vấn đề phối hợp thời gian deep work
```

### Nhiệm Vụ 2: Phân Tích Cạnh Tranh

Sử dụng lệnh phân tích cạnh tranh:

```
/competitor:deep "RescueTime - phần mềm theo dõi thời gian và năng suất cá nhân"
```

Giải thích những gì agent `researcher` phân tích:
- Đối tượng mục tiêu
- Tính năng chính và định vị
- Mô hình giá
- Điểm mạnh và điểm yếu
- Cơ hội thị trường

Hỏi follow-up:
```
Dựa trên phân tích này, lợi thế cạnh tranh lớn nhất của AgentKits là gì?
```

### Nhiệm Vụ 3: Content Calendar

Sử dụng lệnh campaign calendar:

```
/campaign:calendar "4 tuần - AgentKits product launch - tập trung vào năng suất làm việc từ xa, cộng tác team, deep work"
```

Review calendar được tạo:
- Chủ đề blog post với SEO keywords
- Chủ đề social media theo nền tảng
- Lịch email newsletter
- Mục tiêu nội dung cho từng phần

### Bước 4: Mở Rộng Một Phần

Lấy một chủ đề và mở rộng bằng content commands:

```
/content:blog "Hướng Dẫn Hoàn Chỉnh Về Thời Gian Tập Trung Team: Cách Các Team Từ Xa Có Thể Phối Hợp Deep Work" "thời gian tập trung team"
```

### Bước 5: Tối Ưu Hóa SEO

Sử dụng SEO commands để tối ưu:

```
/seo:keywords "năng suất team từ xa"
```

Sau đó:
```
/seo:optimize "blog post chúng ta vừa tạo" "thời gian tập trung team"
```

### Bước 6: Review Với Specialists

Sử dụng reviewer agents (giải thích những điều này sẽ được đề cập chi tiết sau):

```
Review blog post từ ba góc độ:
1. Brand Voice Guardian - có khớp với giọng điệu của chúng ta không?
2. SEO Specialist - có được tối ưu cho tìm kiếm không?
3. Conversion Optimizer - liệu nó có thúc đẩy hành động không?
```

### Chúc Mừng

Chỉ ra những gì họ vừa hoàn thành:
- Tạo multi-channel copy bằng lệnh `/content:*`
- Phân tích cạnh tranh bằng `/competitor:deep`
- Content calendar bằng `/campaign:calendar`
- Nghiên cứu SEO keyword bằng `/seo:keywords`
- Full blog post với tối ưu hóa SEO

### Tiếp Theo

Cho họ biết:
- **Tiếp theo:** `/training:start-1-4` - Sử Dụng Agents Cho Marketing
- Họ sẽ học về 18 agents chuyên biệt và cách tận dụng chúng

## Điểm Giảng Dạy Chính
- Các lệnh thực xử lý các nhiệm vụ marketing thực
- Lệnh `/content:*` tạo nội dung platform-specific
- `/competitor:deep` cung cấp competitive intelligence
- `/campaign:calendar` tạo content calendars
- Lệnh `/seo:*` xử lý tối ưu hóa tìm kiếm
- Luôn cung cấp context (brand, audience, goals)
