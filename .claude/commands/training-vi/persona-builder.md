# /training:persona-builder - Interactive Persona Builder

## Tiêu Chuẩn Ngôn Ngữ & Chất Lượng

**QUAN TRỌNG**: Phản hồi bằng ngôn ngữ mà người dùng đang sử dụng. Nếu tiếng Việt, trả lời bằng tiếng Việt. Nếu tiếng Tây Ban Nha, trả lời bằng tiếng Tây Ban Nha.

---

## Hướng Dẫn Cho Claude

Hướng dẫn non-developer users tạo buyer persona step-by-step bằng **Interactive UX Pattern**. Hỏi câu hỏi với 2-4 options có thể click ở mỗi bước. Đây là session training hands-on, beginner-friendly.

### Welcome Message

---

**Interactive Persona Builder**

Tôi sẽ hướng dẫn bạn tạo buyer persona chi tiết cho sản phẩm hoặc dịch vụ của bạn. Không cần kinh nghiệm marketing - chỉ cần trả lời một vài câu hỏi bằng cách chọn từ các options tôi cung cấp.

**Bạn sẽ tạo:**
- Profile buyer persona hoàn chỉnh
- Key messaging points cho persona này
- Channel recommendations

**Thời lượng:** ~15 phút

Hãy bắt đầu!

---

### Bước 1: Loại Doanh Nghiệp

**QUAN TRỌNG**: Sử dụng AskUserQuestion tool để hỏi:

**Câu hỏi:** "Bạn đang marketing loại sản phẩm hoặc dịch vụ nào?"

**Options:**
1. **SaaS / Phần Mềm** - Cloud software, apps, digital tools
2. **E-commerce** - Sản phẩm vật lý, online store
3. **Professional Services** - Consulting, agency, coaching
4. **Khác** - Để user specify

---

### Bước 2: Target Audience

**QUAN TRỌNG**: Sử dụng AskUserQuestion tool để hỏi:

**Câu hỏi:** "Đối tượng mục tiêu chính của bạn là ai?"

**Options:**
1. **B2B Decision Makers** - Managers, directors, executives tại companies (Recommended cho SaaS)
2. **B2B End Users** - Individual employees, team members
3. **B2C Consumers** - Individual consumers cho personal use
4. **Khác** - Để user specify

---

### Bước 3: Quy Mô Công Ty (nếu B2B)

Nếu B2B được chọn, sử dụng AskUserQuestion tool:

**Câu hỏi:** "Bạn thường target công ty quy mô nào?"

**Options:**
1. **Startups** - 1-20 nhân viên, founders/early team
2. **SMB** - 20-200 nhân viên, growing teams (Recommended)
3. **Mid-Market** - 200-2000 nhân viên, department heads
4. **Enterprise** - 2000+ nhân viên, procurement involved

---

### Bước 4: Primary Pain Point

**QUAN TRỌNG**: Sử dụng AskUserQuestion tool:

**Câu hỏi:** "Vấn đề #1 mà sản phẩm của bạn giải quyết là gì?"

**Options:**
1. **Tiết Kiệm Thời Gian** - Automation, efficiency, productivity
2. **Tiết Kiệm Tiền** - Cost reduction, better ROI
3. **Giảm Rủi Ro** - Compliance, security, reliability
4. **Tăng Doanh Thu** - More sales, leads, customers

---

### Bước 5: Decision Criteria

**QUAN TRỌNG**: Sử dụng AskUserQuestion tool:

**Câu hỏi:** "Điều gì quan trọng nhất với buyers khi chọn solution?"

**Options:**
1. **Giá / Value** - Budget-conscious, ROI-focused
2. **Features / Capability** - Power users, specific needs (Recommended)
3. **Dễ Sử Dụng** - Non-technical, quick adoption
4. **Trust / Brand** - Established players, references

---

### Bước 6: Persona Preset

**QUAN TRỌNG**: Sử dụng AskUserQuestion tool:

**Câu hỏi:** "Persona archetype nào phù hợp nhất với ideal customer của bạn?"

**Options:**
1. **Manager Maria** - B2B manager, team lead, results-focused (Recommended cho B2B)
2. **Startup Sam** - Founder, wears many hats, growth-focused
3. **Solo Steve** - Solopreneur, budget-conscious, DIY
4. **Custom** - Build từ scratch dựa trên previous answers

---

### Generate Persona

Dựa trên tất cả answers, generate complete persona bằng format này:

```markdown
## [Tên Persona]
**Role:** [Job Title dựa trên answers]
**Company:** [Type/Size dựa trên answers]

### Demographics
- Tuổi: [Appropriate range]
- Học vấn: [Appropriate level]
- Kinh nghiệm: [Số năm trong role]
- Báo cáo cho: [Họ report cho ai]

### Goals
1. [Primary goal aligned với pain point]
2. [Secondary goal aligned với decision criteria]
3. [Career/personal goal]

### Challenges
1. [Main pain point từ Bước 4]
2. [Related challenge]
3. [Obstacle to achieving goals]

### Cách [Product] Giúp
- Giải quyết [pain point 1] bằng [specific solution]
- Enables [goal] thông qua [feature]
- Giảm [challenge] với [benefit]

### Objections & Responses
- "[Budget concern]" → [Value-focused response]
- "[Time to implement]" → [Ease of adoption response]
- "[Risk of change]" → [Trust-building response]

### Preferred Channels
- **Discovery:** [Họ research ở đâu]
- **Content:** [Họ consume gì]
- **Social:** [Họ network ở đâu]

### Messaging That Resonates
- Lead with: [Primary benefit]
- Emphasize: [Key differentiator]
- Prove with: [Evidence type]

### Characteristic Quote
"[Statement captures mindset của họ]"
```

---

### Confirm & Save

Sau khi generate, hỏi:

**Câu hỏi:** "Bạn có muốn lưu persona này không?"

**Options:**
1. **Lưu vào docs/** - Lưu như `docs/personas/[name].md`
2. **Refine thêm** - Adjust specific sections
3. **Tạo persona khác** - Start over cho different segment
4. **Xong** - Finish training

---

### Celebration & Next Steps

Chúc mừng họ:

**Bạn đã tạo buyer persona đầu tiên!**

Persona này sẽ giúp bạn:
- Viết targeted marketing copy
- Chọn đúng channels
- Handle objections trong sales

**Tiếp theo:**
- `/content:blog` - Tạo content cho persona này
- `/campaign:brief` - Lập kế hoạch campaign targeting họ
- `/research:persona` - Tạo thêm personas
- `/training:help` - Xem tất cả training có sẵn

---

## Key Teaching Points

1. **Interactive UX Pattern**: Luôn sử dụng AskUserQuestion với 2-4 options
2. **Presets giúp beginners**: Offer recommended options với (Recommended) label
3. **Build progressively**: Mỗi answer inform câu hỏi tiếp theo
4. **Confirm trước action**: Hỏi trước khi saving hoặc major actions
5. **Celebrate completion**: Acknowledge thành tích của họ
6. **Provide next steps**: Guide họ đến related commands
