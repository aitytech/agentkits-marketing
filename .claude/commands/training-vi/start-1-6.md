# /training:start-1-6 - Project Memory (CLAUDE.md)

## Tiêu Chuẩn Ngôn Ngữ & Chất Lượng

**QUAN TRỌNG**: Phản hồi bằng ngôn ngữ mà người dùng đang sử dụng. Nếu tiếng Việt, trả lời bằng tiếng Việt. Nếu tiếng Tây Ban Nha, trả lời bằng tiếng Tây Ban Nha.

---

## Hướng Dẫn Cho Claude

Dạy học viên về CLAUDE.md và cách duy trì persistent project context.

### Tổng Quan Bài Học

---

**Module 1.6: Project Memory**

CLAUDE.md giống như cung cấp cho Claude một tài liệu briefing persistent. Mỗi khi bạn làm việc trên dự án này, Claude đọc file này trước và áp dụng các hướng dẫn đó.

**Thời lượng:** ~20 phút

---

### Bước 1: Xem CLAUDE.md Hiện Tại

Đọc CLAUDE.md của dự án:

```
Đọc file CLAUDE.md trong dự án này
```

Đi qua từng phần:
- Role & Responsibilities
- Workflows (Marketing, Sales, CRM)
- Marketing Agents
- Skills Catalog
- Command Categories
- Documentation Management

### Bước 2: Giải Thích Cách Hoạt Động

Khi CLAUDE.md tồn tại, Claude tự động:
- Biết những agents nào có sẵn
- Hiểu cấu trúc workflow
- Tham chiếu commands phù hợp
- Tuân theo marketing rules
- Sử dụng đúng skills

Bạn không cần nhắc Claude mỗi lần - nó tự động!

### Bước 3: Các Phần CLAUDE.md Quan Trọng

Giải thích các phần critical:

**Workflows:**
```markdown
### Core Workflows
- **Marketing:** `./.claude/workflows/primary-workflow.md`
- **Sales:** `./.claude/workflows/sales-workflow.md`
- **CRM:** `./.claude/workflows/crm-workflow.md`
```

**Agent Mapping:**
```markdown
### Core Marketing Agents
- `attraction-specialist` - TOFU (SEO, landing pages)
- `lead-qualifier` - Phát hiện ý định, scoring
- `email-wizard` - Sequences, automation
...
```

**Command Categories:**
```markdown
### Campaign Management
- `/campaign:plan`, `/campaign:brief`, `/campaign:analyze`

### Content Creation
- `/content:blog`, `/content:social`, `/content:email`
...
```

### Bước 4: Test Context Awareness

Không đề cập brand guidelines, hỏi:

```
Viết một LinkedIn post ngắn về năng suất team làm việc từ xa
```

Chỉ ra cách output tự động khớp:
- Brand voice từ guidelines
- Ngôn ngữ target persona
- Key messaging framework

### Bước 5: Hiểu Workflow References

Cho thấy cách workflows được tham chiếu:

```
Đọc .claude/workflows/primary-workflow.md
```

Giải thích:
- Các giai đoạn marketing pipeline
- Trách nhiệm agent ở mỗi giai đoạn
- Quality gates và checkpoints

### Bước 6: Marketing Rules

Cho thấy marketing rules:

```
Đọc .claude/workflows/marketing-rules.md
```

Giải thích các rules chính:
- Token efficiency
- Multi-language support
- Quality standards
- Skill activation

### Bước 7: Lợi Ích Project Context

Tóm tắt lợi ích:
- Brand voice nhất quán tự động
- Chọn agent đúng
- Sử dụng command đúng
- Tuân thủ workflow
- Thực thi quality standards

### Bước 8: Mẹo Bảo Trì

Giải thích bảo trì liên tục:
- Cập nhật khi campaigns mới launch
- Thêm learnings từ nội dung thành công
- Tham chiếu tài liệu mới
- Giữ agent list hiện tại

### Tiếp Theo

Cho họ biết:
- CLAUDE.md đảm bảo nhất quán mà không cần lặp lại
- **Module 1 sắp hoàn thành!**
- **Tiếp theo:** `/training:start-1-7` - Navigation & Search
- Kỹ năng cuối cùng trước các ứng dụng nâng cao

## Điểm Giảng Dạy Chính
- CLAUDE.md cung cấp cho Claude persistent context
- Bao gồm workflows, agents, commands, rules
- Claude tự động áp dụng cho tất cả công việc
- Workflows định nghĩa quy trình marketing
- Marketing rules đảm bảo quality standards
