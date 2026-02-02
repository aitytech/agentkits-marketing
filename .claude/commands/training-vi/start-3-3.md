---
description: /training:start-3-3 - Popup & Onboarding CRO
argument-hint:
---

# Module 3, Bài 3: Popup & Onboarding CRO

## Converting Visitors và Activating Users

Bài học này cover hai điểm conversion quan trọng: capturing visitors với popups và activating new signups thông qua onboarding.

## Mục Tiêu Học Tập

Đến cuối bài học này, bạn sẽ:
1. Design high-converting popups mà không gây khó chịu users
2. Tối ưu post-signup onboarding flows
3. Xác định và tăng tốc "Aha moment"
4. Tạo paywall và upgrade screens

---

## Popup CRO

### Khi Nào Popups Hoạt Động

| Type | Trigger | Best For |
|------|---------|----------|
| Exit Intent | Mouse rời viewport | Lead capture, save abandoners |
| Time-Delayed | 30-60 giây trên page | Engaged visitors |
| Scroll-Triggered | 50-70% scroll depth | Content engagement |
| Click-Triggered | User action | Specific CTAs |

### Khi Nào Popups Thất Bại

- Xuất hiện ngay lập tức khi page load
- Không có clear value proposition
- Khó close
- Cùng popup trên mỗi visit

---

## Bài Tập Design Popup

Sử dụng `/cro:popup` để design effective popups:

```bash
/cro:popup "Design exit-intent popup cho AgentKits blog. Goal: capture emails cho 'Remote Team Productivity Guide' lead magnet."
```

### Good Popup Elements

1. **Clear value:** Họ nhận được gì
2. **Minimal fields:** Email only
3. **Easy dismiss:** Visible X
4. **Mobile-friendly:** Thumb-reachable CTA
5. **Frequency cap:** Once per session

---

## Onboarding CRO

### The Activation Equation

**Aha Moment** = Lần đầu user trải nghiệm core value

Cho AgentKits: "Khi team member thấy focus schedule của team và blocks distraction-free time"

### Onboarding Patterns

| Pattern | Best For |
|---------|----------|
| Setup Wizard | Complex products cần config |
| Checklist | Feature-rich apps |
| Interactive Tour | UI-heavy products |
| Template Gallery | Creative tools |
| Sample Project | Project-based tools |

---

## Bài Tập Onboarding

Sử dụng `/cro:onboarding` để tối ưu activation của AgentKits:

```bash
/cro:onboarding "Design onboarding cho AgentKits. Aha moment: seeing team focus schedule. Current activation: 15% of trials. Goal: 40%."
```

### Key Questions

1. Minimum setup cần gì để có value?
2. Có thể show value trước setup không?
3. #1 action nào predict conversion?
4. Users có thể reach Aha moment nhanh bao nhiêu?

---

## Paywall & Upgrade CRO

Cho freemium và trial products, upgrade screens rất quan trọng.

### Paywall Triggers

| Trigger | Context |
|---------|---------|
| Feature gate | User thử premium feature |
| Usage limit | Reached free tier limit |
| Trial expiry | Time-based trial ending |
| Upgrade prompt | Sau value moment |

### Bài Tập Paywall

```bash
/cro:paywall "Design upgrade screen cho AgentKits. Trigger: user hits 5-user limit trên free tier. Goal: convert sang Team plan ($12/user)."
```

---

## Practice Assignment

Hoàn thành các bài tập này cho AgentKits:

### 1. Exit Intent Popup
```bash
/cro:popup "Exit intent cho AgentKits pricing page - capture leads rời mà không trial"
```
Lưu vào: `training/exercises/markit/cro/exit-popup.md`

### 2. Onboarding Flow
```bash
/cro:onboarding "5-step onboarding để reach Aha moment trong dưới 3 phút"
```
Lưu vào: `training/exercises/markit/cro/onboarding-flow.md`

### 3. Upgrade Screen
```bash
/cro:paywall "Upgrade screen khi free user mời thành viên thứ 6"
```
Lưu vào: `training/exercises/markit/cro/upgrade-screen.md`

---

## Full CRO Funnel

Bây giờ bạn có thể tối ưu complete conversion funnel:

```
Visitor → Page CRO → Form CRO → Signup CRO
     ↓
  Popup CRO (capture abandoners)
     ↓
New User → Onboarding CRO → Activation
     ↓
Free User → Paywall CRO → Paid Customer
```

Mỗi skill xử lý một stage cụ thể.

---

## Checkpoint

Trước khi hoàn thành Module 3, verify bạn có thể:
- [ ] Design effective popups với proper triggers
- [ ] Tạo onboarding flows tăng tốc Aha moment
- [ ] Build upgrade screens cho freemium conversion
- [ ] Map full CRO funnel

---

## Module 3 Hoàn Thành!

Bạn đã thành thạo CRO skills. Deliverables của bạn:

```
training/exercises/markit/cro/
├── landing-page-audit.md
├── form-audit.md
├── optimized-form.md
├── form-ab-test.md
├── exit-popup.md
├── onboarding-flow.md
└── upgrade-screen.md
```

---

## Tiếp: Advanced Skills

Tiếp tục Module 4: Growth & Launch Strategies

```bash
/training:start-4-1
```

Hoặc khám phá các skills mới khác:
- `/marketing:psychology` - 70+ mental models
- `/marketing:ideas` - 140 marketing ideas
- `/growth:launch` - Launch strategy
- `/pricing:strategy` - Pricing design
