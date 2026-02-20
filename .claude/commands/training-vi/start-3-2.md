---
description: /training:start-3-2 - Form & Signup Optimization
argument-hint:
---

# Module 3, Bài 2: Form & Signup Optimization

## Thành Thạo Form và Registration CRO

Forms là conversion gatekeepers. Mỗi field không cần thiết tốn leads. Bài học này dạy bạn tối ưu lead capture forms và signup flows.

## Mục Tiêu Học Tập

Đến cuối bài học này, bạn sẽ:
1. Áp dụng quy tắc 5-field maximum
2. Tối ưu signup flows cho conversion
3. Giảm form friction một cách có hệ thống
4. Design multi-step progressive forms

---

## Form CRO Principles

### Quy Tắc 5-Field

Mỗi field vượt quá 5 giảm conversion khoảng 10%.

**Chỉ essential fields:**
1. Email (luôn required)
2. Name (đôi khi)
3. Company (B2B only)
4. Password (signup only)
5. Một qualifier nếu cần

**Defer mọi thứ khác** đến post-signup.

### Friction Points Cần Loại Bỏ

| Friction | Fix |
|----------|-----|
| Quá nhiều fields | Remove hoặc defer |
| Password requirements | Show inline, không phải after error |
| Required phone | Make optional hoặc remove |
| CAPTCHA | Dùng invisible alternatives |
| No social login | Thêm Google/SSO options |

---

## Form CRO Command

Sử dụng `/cro:form` cho lead capture forms:

```bash
/cro:form "Tối ưu demo request form của AgentKits: Name, Email, Company, Phone, Title, Team Size, Message"
```

### Expected Recommendations

1. **Remove:** Message (hỏi trong follow-up)
2. **Remove:** Phone (có thể capture sau)
3. **Make optional:** Title
4. **Keep:** Name, Email, Company, Team Size

Giảm từ 7 → 4 fields = ước tính +30% conversions

---

## Signup Flow Optimization

Cho account registration, sử dụng `/cro:signup`:

```bash
/cro:signup "Phân tích trial signup AgentKits: Email → Password → Company → Team Size → Use Case → Payment"
```

### Signup Flow Patterns

| Pattern | Best For | Conversion |
|---------|----------|------------|
| Email-only start | Highest conversion | Start với email, progressive profiling |
| Social-first | Consumer apps | Google/SSO prominent |
| Single-page minimal | B2C, simple products | Tất cả fields visible |
| Multi-step với progress | B2B, complex | Guided, shows progress |

---

## Bài Tập 1: Form Audit

Audit demo request form hiện tại của AgentKits:

```bash
/cro:form "7-field form: Name, Email, Company, Phone, Job Title, Team Size, Message. Goal: schedule demo calls."
```

Tạo recommendations trong:
```
training/exercises/markit/cro/form-audit.md
```

### Output Của Bạn Nên Bao Gồm

1. Fields cần remove
2. Fields cần make optional
3. Progressive profiling strategy
4. Copy improvements (button text, labels)

---

## Bài Tập 2: Signup Flow Redesign

Design optimized signup flow cho AgentKits:

```bash
/cro:signup "Design optimal trial signup cho AgentKits. Current: 5-step process. Goal: maximize trial starts."
```

Xem xét:
- Email-only initial capture
- OAuth options (Google Workspace cho B2B)
- Khi nào collect company info
- Onboarding vs signup separation

---

## Bài Tập 3: Multi-Step Form Design

Cho complex B2B signups, design multi-step approach:

**Step 1:** Email only
**Step 2:** Company + team size (với progress bar)
**Step 3:** Optional use case selection

Sử dụng form-cro skill để validate:

```bash
/cro:form "Design 3-step progressive form cho AgentKits enterprise demo"
```

---

## Practice Assignment

Hoàn thành các tasks này:

1. **Audit current form:**
   Lưu vào `training/exercises/markit/cro/current-form-audit.md`

2. **Design optimized form:**
   Lưu vào `training/exercises/markit/cro/optimized-form.md`

3. **Tạo A/B test:**
   ```bash
   /test:ab-setup "Test 7-field vs 4-field form cho AgentKits demos"
   ```
   Lưu vào `training/exercises/markit/cro/form-ab-test.md`

---

## Checkpoint

Trước khi tiếp tục, verify bạn có thể:
- [ ] Áp dụng quy tắc 5-field maximum
- [ ] Xác định friction trong signup flows
- [ ] Design progressive profiling strategy
- [ ] Tạo form A/B test hypotheses

---

## Bài Tiếp Theo

Tiếp tục Module 3, Bài 3: Popup & Onboarding CRO

```bash
/training:start-3-3
```
