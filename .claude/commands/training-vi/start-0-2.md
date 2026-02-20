# /training:start-0-2 - Nhiệm Vụ Marketing Đầu Tiên

## Tiêu Chuẩn Ngôn Ngữ & Chất Lượng

**QUAN TRỌNG**: Phản hồi bằng ngôn ngữ mà người dùng đang sử dụng. Nếu tiếng Việt, trả lời bằng tiếng Việt. Nếu tiếng Tây Ban Nha, trả lời bằng tiếng Tây Ban Nha.

---

## Hướng Dẫn Cho Claude

Hướng dẫn học viên thực hiện nhiệm vụ marketing thực đầu tiên - tạo brand guidelines bằng các lệnh của chúng ta.

### Tổng Quan Bài Học

---

**Module 0.2: Nhiệm Vụ Marketing Đầu Tiên**

Bây giờ hãy làm công việc marketing thực. Chúng ta sẽ tạo brand guidelines cho AgentKits bằng lệnh `/brand:voice`.

---

### Bước 1: Giải Thích Brand Guidelines

Giải thích tại sao brand guidelines quan trọng:
- Đảm bảo tính nhất quán trên tất cả nội dung
- Giúp Claude (và con người) viết đúng giọng điệu
- Ghi lại các thông điệp chính và thuật ngữ
- Ngăn chặn nội dung lệch thương hiệu

### Bước 2: Sử Dụng Lệnh Brand Voice

Hướng dẫn họ sử dụng lệnh hệ thống thực:

```
/brand:voice "AgentKits - Công cụ phối hợp năng suất đội nhóm B2B cho các team làm việc từ xa"
```

Để Claude tạo brand guidelines toàn diện, sau đó review với học viên.

### Bước 3: Tạo Customer Personas

Bây giờ sử dụng lệnh research cho personas:

```
/research:persona "Quản lý team làm việc từ xa tại các công ty công nghệ sử dụng AgentKits"
```

Giải thích:
- Agent `researcher` xử lý nghiên cứu thị trường
- Personas giúp nhắm mục tiêu nội dung đến đối tượng cụ thể
- Chúng ta sẽ sử dụng các personas này trong suốt khóa học

### Bước 4: Review Những Gì Đã Tạo

Review các đầu ra cùng nhau:

```
Cho tôi xem những gì lệnh brand:voice đã tạo
```

Chỉ ra:
- Thuộc tính giọng nói và phổ tone
- Framework thông điệp
- Từ nên dùng và tránh
- Tích hợp với các agents khác

### Bước 5: Sức Mạnh Của Context

Giải thích:
- Các guidelines này bây giờ tồn tại trong project context
- Trong các nhiệm vụ tương lai, agents có thể tham chiếu chúng
- Đây là "context awareness" - một trong những siêu năng lực của Claude
- Chúng ta sẽ sử dụng chúng trong suốt khóa học

### Bài Tập Nhanh: Thử Tạo Nội Dung

Cho họ thử sử dụng brand context:

```
/content:social "Mẹo năng suất cho team làm việc từ xa" "linkedin"
```

Cho thấy Claude tự động sử dụng brand context trong việc tạo nội dung.

### Bước 6: Khám Phá Các Commands Chính Khác

Trình bày ngắn gọn các commands khác họ sẽ thành thạo:

**Lập Kế Hoạch Campaign:**
```
/campaign:plan "Ra Mắt Sản Phẩm Q1"
```

**Nghiên Cứu SEO:**
```
/seo:keywords "năng suất team làm việc từ xa"
```

**Email Sequences:**
```
/sequence:welcome "AgentKits" "người dùng trial"
```

### Tiếp Theo

Cho họ biết:
- **Chúc mừng!** Module 0 hoàn thành!
- Họ đã sử dụng các lệnh marketing thực và thấy hệ thống hoạt động
- **Tiếp theo:** `/training:start-1-1` - Chào Mừng Đến Markit (Khái Niệm Cốt Lõi bắt đầu)
- Họ sẽ đi sâu vào agents, workflows, và các commands nâng cao

## Điểm Giảng Dạy Chính
- Brand guidelines đảm bảo tính nhất quán
- Sử dụng `/brand:voice` để tạo voice guidelines
- Sử dụng `/research:persona` cho customer personas
- Context awareness nghĩa là agents tham chiếu công việc hiện có
- Các lệnh thực (`/campaign:*`, `/content:*`, `/seo:*`) là những gì họ sẽ thành thạo
