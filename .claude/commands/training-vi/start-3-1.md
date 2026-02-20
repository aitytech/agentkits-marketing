---
description: /training:start-3-1 - Nền Tảng CRO
argument-hint:
---

# Module 3, Bài 1: Nền Tảng CRO

## Chào Mừng Đến Với Conversion Rate Optimization

Trong module này, bạn sẽ thành thạo các CRO (Conversion Rate Optimization) skills mới được thêm vào AgentKits Marketing. Những skills này giúp bạn cải thiện conversion rates một cách có hệ thống trên tất cả marketing assets.

## Mục Tiêu Học Tập

Đến cuối bài học này, bạn sẽ:
1. Hiểu 6 CRO skill categories
2. Biết khi nào sử dụng mỗi CRO command
3. Áp dụng psychological principles cho conversions
4. Tạo CRO audit đầu tiên

---

## CRO Skills Suite

AgentKits Marketing bao gồm 7 CRO skills chuyên biệt:

| Skill | Sử Dụng Cho | Command |
|-------|---------|---------|
| `page-cro` | Landing pages, homepages, pricing | `/cro:page` |
| `form-cro` | Lead capture, contact, demo forms | `/cro:form` |
| `popup-cro` | Modals, overlays, exit intent | `/cro:popup` |
| `signup-flow-cro` | Registration, trial signups | `/cro:signup` |
| `onboarding-cro` | Post-signup activation | `/cro:onboarding` |
| `paywall-upgrade-cro` | In-app paywalls, upgrades | `/cro:paywall` |
| `ab-test-setup` | Experiment design | `/test:ab-setup` |

---

## CRO Framework

Mỗi CRO analysis tuân theo hierarchy này:

### 1. Value Proposition (Impact Cao Nhất)
- Visitors có thể hiểu bạn offer gì trong 5 giây không?
- Benefit có rõ ràng không, không chỉ features?

### 2. Headline Effectiveness
- Nó có communicate core value không?
- Có specific và credible không?

### 3. CTA Optimization
- Một primary action rõ ràng?
- Above fold, visible, compelling?

### 4. Trust Signals
- Social proof gần decisions?
- Security badges visible?

### 5. Friction Reduction
- Minimal form fields?
- Next steps rõ ràng?

---

## Bài Tập 1: Audit Landing Page AgentKits

Hãy áp dụng CRO principles cho landing page của AgentKits.

### Trạng Thái Hiện Tại (Hypothetical)

**Headline:** "Team Productivity Software"
**CTA:** "Learn More"
**Form:** 7 fields

### Nhiệm Vụ Của Bạn

Tạo CRO audit bằng lệnh `/cro:page`:

```bash
/cro:page "Phân tích landing page AgentKits: Headline 'Team Productivity Software', CTA 'Learn More', 7-field form. Target: remote team managers."
```

### Expected Output

Audit nên xác định:
- Generic headline (không specific hoặc benefit-focused)
- CTA yếu ("Learn More" vs action-oriented)
- High friction (7 fields là quá nhiều)

---

## Bài Tập 2: Áp Dụng Psychology

`marketing-psychology` skill bao gồm 70+ mental models. Thử:

```bash
/marketing:psychology "Làm thế nào chúng ta có thể sử dụng loss aversion và social proof để cải thiện trial signup rate của AgentKits?"
```

### Key Models Cho CRO

| Model | Ứng Dụng |
|-------|-------------|
| Loss Aversion | "Don't miss out" framing |
| Social Proof | "Join 10,000+ teams" |
| Anchoring | Show expensive plan first |
| Scarcity | Limited spots hoặc time |
| Reciprocity | Free value trước khi ask |

---

## Practice Assignment

Tạo complete CRO improvement plan:

1. **Chạy page audit:**
   ```bash
   /cro:page "AgentKits homepage audit"
   ```

2. **Tối ưu form:**
   ```bash
   /cro:form "Giảm 7-field trial signup form của AgentKits"
   ```

3. **Design A/B test:**
   ```bash
   /test:ab-setup "Test new headline vs current cho AgentKits"
   ```

Lưu work vào:
```
training/exercises/markit/cro/
├── landing-page-audit.md
├── form-optimization.md
└── ab-test-plan.md
```

---

## Checkpoint

Trước khi tiếp tục, verify bạn có thể:
- [ ] Xác định 6 CRO skill categories
- [ ] Chạy `/cro:page` audit
- [ ] Áp dụng psychology principles cho CRO
- [ ] Tạo A/B test hypothesis

---

## Bài Tiếp Theo

Tiếp tục Module 3, Bài 2: Form & Signup Optimization

```bash
/training:start-3-2
```
