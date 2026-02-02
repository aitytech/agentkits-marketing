<p align="center">
  <img src="https://raw.githubusercontent.com/aitytech/agentkits-marketing/main/assets/logo.svg" alt="AgentKits Logo" width="80" height="80">
</p>

<h1 align="center">AgentKits Marketing</h1>

<p align="center">
  <a href="https://github.com/aitytech/agentkits-marketing/stargazers"><img src="https://img.shields.io/github/stars/aitytech/agentkits-marketing?style=flat" alt="Stars"></a>
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
  <img src="https://img.shields.io/badge/Claude_Code%20|%20Cursor%20|%20Copilot-Compatible-blueviolet" alt="AI Assistants">
  <br>
  <img src="https://img.shields.io/badge/Agents-18-green" alt="Agents">
  <img src="https://img.shields.io/badge/Commands-93-orange" alt="Commands">
  <img src="https://img.shields.io/badge/Skills-28-blue" alt="Skills">
</p>

<p align="center">
  <strong>Tự động hóa marketing AI cấp doanh nghiệp cho Claude Code, Cursor, GitHub Copilot và bất kỳ trợ lý AI nào hỗ trợ agents & skills.</strong>
</p>

<p align="center">
  Các marketing agents, skills, commands và workflows sẵn sàng sử dụng cho founders SaaS, marketers và growth teams. Lập kế hoạch chiến dịch, tạo nội dung, SEO, CRO, email sequences và analytics - tất cả được vận hành bởi các AI agents chuyên biệt.
</p>

<p align="center">
  <a href="https://www.agentkits.net/marketing">Website</a> •
  <a href="https://www.agentkits.net/docs">Tài liệu</a> •
  <a href="#cài-đặt">Cài đặt</a> •
  <a href="#đào-tạo">Đào tạo</a>
</p>

<p align="center">
  <a href="README.md">English</a> | <strong>Tiếng Việt</strong> | <a href="README.ja.md">日本語</a>
</p>

---

## Vibe Marketing

<p>
  <img src="https://img.shields.io/badge/Vibe_Coding-Developers-blue?style=for-the-badge&logo=code&logoColor=white" alt="Vibe Coding">
  <img src="https://img.shields.io/badge/→-black?style=for-the-badge" alt="arrow">
  <img src="https://img.shields.io/badge/Vibe_Marketing-Marketers-green?style=for-the-badge&logo=target&logoColor=white" alt="Vibe Marketing">
</p>

> *Hưởng ứng phong trào "Vibe Coding" của anh em developer... mình xin phép mở rộng vũ trụ: **Vibe Marketing** cho thời đại AI cái gì cũng làm được.*

| | |
|---|---|
| **Có AI** | Để AI agents lo chiến dịch, bạn chỉ cần tập trung vào chiến lược. Cứ vibe thôi, agents sẽ làm hết việc nặng. |
| **Không có AI** | Repo này vẫn là **thư viện tham khảo toàn diện** về best practices, frameworks và templates marketing. Dùng skills docs như playbook marketing của bạn. |

---

## Nội Dung Bao Gồm

Hoạt động với **Claude Code**, **Cursor**, **GitHub Copilot** và bất kỳ trợ lý AI nào hỗ trợ agents & skills. Cài đặt như plugin hoặc sao chép thủ công các thành phần.

```
agentkits-marketing/
|-- .claude-plugin/      # Plugin và marketplace manifests
|   |-- plugin.json            # Metadata plugin và đường dẫn components
|   |-- marketplace.json       # Catalog marketplace cho /plugin marketplace add
|
|-- .claude/
|   |-- agents/          # 18 marketing agents chuyên biệt
|   |   |-- attraction-specialist.md    # Lead gen, SEO, landing pages
|   |   |-- lead-qualifier.md           # Lead scoring, segmentation
|   |   |-- email-wizard.md             # Email sequences, automation
|   |   |-- sales-enabler.md            # Sales collateral, battlecards
|   |   |-- continuity-specialist.md    # Retention, re-engagement
|   |   |-- upsell-maximizer.md         # Revenue expansion
|   |   |-- copywriter.md               # High-converting copy
|   |   |-- conversion-optimizer.md     # CRO specialist
|   |   |-- seo-specialist.md           # SEO optimization
|   |   |-- brand-voice-guardian.md     # Brand consistency
|   |   |-- ...và nhiều hơn nữa
|   |
|   |-- commands/        # 93 slash commands theo danh mục
|   |   |-- campaign/    # /campaign:plan, /campaign:brief, /campaign:analyze
|   |   |-- content/     # /content:blog, /content:landing, /content:email
|   |   |-- seo/         # /seo:keywords, /seo:audit, /seo:programmatic
|   |   |-- cro/         # /cro:page, /cro:form, /cro:popup, /cro:signup
|   |   |-- growth/      # /growth:launch, /growth:referral, /growth:free-tool
|   |   |-- ...và nhiều hơn nữa
|   |
|   |-- skills/          # 28 marketing skills
|   |   |-- marketing-psychology/       # 70+ mental models
|   |   |-- marketing-ideas/            # 140+ chiến lược SaaS
|   |   |-- page-cro/                   # Tối ưu landing page
|   |   |-- copywriting/                # Marketing copy
|   |   |-- programmatic-seo/           # Tạo page quy mô lớn
|   |   |-- pricing-strategy/           # Pricing & packaging
|   |   |-- ...và nhiều hơn nữa
|   |
|   |-- workflows/       # Workflows marketing cốt lõi
|       |-- primary-workflow.md         # Vòng đời chiến dịch
|       |-- sales-workflow.md           # Lead đến customer
|       |-- crm-workflow.md             # Vòng đời contact
|
|-- training/            # 23 bài học đào tạo tương tác (English)
|-- training-vi/         # Đào tạo tiếng Việt
|-- training-ja/         # Đào tạo tiếng Nhật (日本語)
|-- docs/                # Tài liệu và hướng dẫn
|-- marketplace.json     # Cấu hình marketplace tự host
```

---

## Cài Đặt

### Tùy chọn 1: Cài đặt qua npx (Khuyến nghị)

Một lệnh để cài đặt 18 agents, 28 skills, 93 commands:

```bash
npx @aitytech/agentkits-marketing install
```

**Cài đặt theo nền tảng cụ thể:**

```bash
npx @aitytech/agentkits-marketing install --platform claude    # Claude Code
npx @aitytech/agentkits-marketing install --platform cursor    # Cursor IDE
npx @aitytech/agentkits-marketing install --platform windsurf  # Windsurf
npx @aitytech/agentkits-marketing install --platform cline     # Cline
npx @aitytech/agentkits-marketing install --platform copilot   # GitHub Copilot
npx @aitytech/agentkits-marketing install --platform all       # Tất cả nền tảng
```

**Các lệnh CLI khác:**

```bash
npx @aitytech/agentkits-marketing --help        # Hiển thị tất cả lệnh
npx @aitytech/agentkits-marketing list-ides     # Liệt kê các IDE được hỗ trợ
npx @aitytech/agentkits-marketing list-modules  # Liệt kê các module có sẵn
npx @aitytech/agentkits-marketing update        # Cập nhật cài đặt hiện có
```

---

### Tùy chọn 2: Clone và Sử dụng

Clone repository và làm việc trong đó:

```bash
git clone https://github.com/aitytech/agentkits-marketing.git
cd agentkits-marketing
claude
```

---

### Tùy chọn 3: Cài đặt như Plugin (Sắp ra mắt)

> **Lưu ý:** Đang chờ phê duyệt plugin marketplace.

Sau khi được phê duyệt, cài đặt trực tiếp qua hệ thống plugin của Claude Code:

```bash
# Thêm repo này như một marketplace
/plugin marketplace add aitytech/agentkits-marketing

# Cài đặt plugin
/plugin install agentkits-marketing@agentkits-marketing
```

---

### Tùy chọn 4: Cài đặt Thủ công

Sao chép từng thành phần vào cấu hình Claude của bạn:

```bash
# Clone repo
git clone https://github.com/aitytech/agentkits-marketing.git

# Sao chép agents
cp agentkits-marketing/.claude/agents/*.md ~/.claude/agents/

# Sao chép commands
cp -r agentkits-marketing/.claude/commands/* ~/.claude/commands/

# Sao chép skills
cp -r agentkits-marketing/.claude/skills/* ~/.claude/skills/

# Sao chép workflows
cp -r agentkits-marketing/.claude/workflows/* ~/.claude/workflows/
```

---

## Bắt Đầu Nhanh

### Khởi chạy Chiến dịch

```bash
# Nghiên cứu và lập kế hoạch
/research:market "SaaS productivity tools"
/competitor:deep "competitor.com"
/campaign:plan "Q1 Product Launch"

# Tạo nội dung
/content:landing "new feature" "target audience"
/content:email "product launch" "trial users"
/content:blog "feature announcement" "primary keyword"

# Tối ưu hóa
/cro:page "landing page for conversion"
/seo:optimize "content.md" "target keyword"
```

### Tạo Nội dung

```bash
/content:good "Blog post about AI marketing"
/content:editing "polish this draft"
/seo:keywords "ai marketing automation"
```

### Tối ưu Chuyển đổi

```bash
/cro:page "homepage conversion audit"
/cro:form "lead capture optimization"
/cro:signup "registration flow"
/test:ab-setup "headline variations"
```

### Growth & Chiến lược

```bash
/marketing:ideas "SaaS product"
/marketing:psychology "pricing objections"
/growth:launch "Product Hunt strategy"
/pricing:strategy "tier structure"
```

---

## Skills Có Sẵn

| Skill | Mô tả | Sử dụng Khi |
|-------|-------|-------------|
| **Marketing Cốt lõi** |
| `marketing-psychology` | 70+ mental models cho marketing | Thuyết phục, pricing, xử lý phản đối |
| `marketing-ideas` | 140 chiến lược SaaS đã được chứng minh | Cần ý tưởng marketing |
| `marketing-fundamentals` | Funnel, journey, positioning | Khái niệm nền tảng |
| **Tối ưu Chuyển đổi** |
| `page-cro` | Landing page, homepage, pricing | Page không chuyển đổi |
| `form-cro` | Lead capture, contact forms | Tối ưu form |
| `popup-cro` | Modals, overlays, exit intent | Tạo popup |
| `signup-flow-cro` | Registration, trial signup | Ma sát đăng ký |
| `onboarding-cro` | Post-signup activation | Kích hoạt người dùng |
| `paywall-upgrade-cro` | In-app paywalls, upgrade screens | Chuyển đổi freemium |
| `ab-test-setup` | Thiết kế thí nghiệm | A/B testing |
| **Nội dung & Copy** |
| `copywriting` | Marketing page copy | Viết copy mới |
| `copy-editing` | Chỉnh sửa và hoàn thiện | Cải thiện copy hiện có |
| `email-sequence` | Drip campaigns, nurture | Email automation |
| **SEO & Growth** |
| `seo-mastery` | Keyword, technical, on-page | Tối ưu SEO |
| `programmatic-seo` | Template pages quy mô lớn | SEO quy mô |
| `schema-markup` | Structured data, rich snippets | Triển khai schema |
| `competitor-alternatives` | vs pages, alternatives | Nội dung so sánh |
| `launch-strategy` | Product launches, announcements | Go-to-market |
| `pricing-strategy` | Pricing, packaging, tiers | Quyết định pricing |
| `referral-program` | Referral, affiliate | Viral growth |
| `free-tool-strategy` | Engineering-as-marketing | Lập kế hoạch free tool |

---

## Marketing Agents

### Core Agents
| Agent | Trọng tâm |
|-------|-----------|
| `attraction-specialist` | Lead gen, SEO, landing pages |
| `lead-qualifier` | Lead scoring, segmentation |
| `email-wizard` | Email sequences, automation |
| `sales-enabler` | Sales collateral, battlecards |
| `continuity-specialist` | Retention, re-engagement |
| `upsell-maximizer` | Revenue expansion, cross-sell |

### Supporting Agents
| Agent | Trọng tâm |
|-------|-----------|
| `researcher` | Market research, competitive intel |
| `brainstormer` | Campaign ideation, creative concepts |
| `planner` | Campaign planning, calendars |
| `copywriter` | High-converting copy |
| `project-manager` | Campaign coordination |
| `docs-manager` | Marketing documentation |

### Reviewer Agents
| Agent | Góc nhìn |
|-------|----------|
| `brand-voice-guardian` | Brand consistency |
| `conversion-optimizer` | CRO best practices |
| `seo-specialist` | SEO optimization |
| `solopreneur` | Freelancer/small business |
| `startup-founder` | Early-stage startup |

---

## Danh Mục Commands

| Danh mục | Commands | Ví dụ |
|----------|----------|-------|
| Campaign | 4 | `/campaign:plan`, `/campaign:brief` |
| Content | 10 | `/content:blog`, `/content:landing`, `/content:editing` |
| SEO | 6 | `/seo:keywords`, `/seo:audit`, `/seo:programmatic` |
| CRO | 6 | `/cro:page`, `/cro:form`, `/cro:signup` |
| Growth | 3 | `/growth:launch`, `/growth:referral` |
| Email | 4 | `/sequence:welcome`, `/sequence:nurture` |
| Analytics | 5 | `/analytics:roi`, `/analytics:funnel` |
| Sales | 4 | `/sales:pitch`, `/sales:battlecard` |
| Research | 3 | `/research:market`, `/research:persona` |
| Marketing | 2 | `/marketing:psychology`, `/marketing:ideas` |
| Testing | 1 | `/test:ab-setup` |
| ...thêm | 45+ | Xem tham chiếu command đầy đủ |

---

## Đào Tạo

**22 bài học tương tác** để thành thạo marketing được hỗ trợ bởi AI. Học bằng cách thực hiện công việc marketing thực sự trong trợ lý AI của bạn.

| | |
|---|---|
| **Phương pháp** | Bài học tương tác được dạy bởi Claude |
| **Dự án** | Agency Markit làm việc cho khách hàng AgentKits |
| **Thời lượng** | Tổng cộng 5-6 giờ |
| **Điều kiện tiên quyết** | Claude Code, Cursor hoặc trợ lý AI tương thích |
| **Ngôn ngữ** | English, Tiếng Việt, 日本語 (Nhật) |

```bash
# Bắt đầu đào tạo ngay
/training:start-0-0           # English
/training-vi:start-0-0        # Tiếng Việt (Khuyến nghị)
/training-ja:start-0-0        # 日本語 (Nhật)
```

---

### Dự án Thực hành: Agency Markit

Bạn là Marketing Strategist tại **Markit**, một agency marketing B2B SaaS.

**Khách hàng của bạn:** AgentKits - bộ công cụ tự động hóa marketing AI

| | |
|---|---|
| **Sản phẩm** | Tự động hóa marketing AI cấp doanh nghiệp |
| **Đối tượng** | SaaS founders, marketers và growth teams |
| **Giá** | Miễn phí & Mã nguồn mở (giấy phép MIT) |
| **Đối thủ** | Jasper, Copy.ai, HubSpot |

**Personas Chính:**
- **Solo Sam** (25-35) - Solopreneur/indie hacker, bootstrapped SaaS
- **Marketer Maya** (30-40) - Marketing manager, công ty SaaS tầm trung
- **Founder Felix** (28-40) - Technical founder, startup giai đoạn đầu

---

### Module 0: Bắt Đầu (30 phút)

Tìm hiểu cơ bản và hoàn thành nhiệm vụ marketing đầu tiên.

| Command | Bài học | Thời lượng |
|---------|---------|------------|
| `/training:start-0-0` | Giới thiệu Khóa học | 10 phút |
| `/training:start-0-1` | Cài đặt & Thiết lập | 15 phút |
| `/training:start-0-2` | Nhiệm vụ Marketing Đầu tiên | 15 phút |

**Bạn Sẽ Học:**
- Giao diện trợ lý AI và commands cơ bản
- Tạo và quản lý file
- Tương tác với AI cho các nhiệm vụ marketing

---

### Module 1: Khái Niệm Cốt Lõi (90 phút)

Thành thạo các workflows cơ bản thông qua dự án agency Markit.

| Command | Bài học | Thời lượng |
|---------|---------|------------|
| `/training:start-1-1` | Chào mừng đến Markit | 20 phút |
| `/training:start-1-2` | Làm việc với Marketing Files | 25 phút |
| `/training:start-1-3` | Nhiệm vụ Marketing Đầu tiên | 30 phút |
| `/training:start-1-4` | Sử dụng Agents cho Marketing | 35 phút |
| `/training:start-1-5` | Reviewer Agents Chuyên sâu | 30 phút |
| `/training:start-1-6` | Bộ nhớ Dự án (CLAUDE.md) | 20 phút |
| `/training:start-1-7` | Điều hướng & Tìm kiếm | 20 phút |

**Bạn Sẽ Học:**
- Tạo campaign brief
- Phát triển brand voice và persona
- Điều phối và ủy quyền agents
- Best practices tổ chức file
- Sử dụng project memory hiệu quả

**Bạn Sẽ Xây dựng:**
- Campaign brief hoàn chỉnh
- Tài liệu brand guidelines
- Customer personas
- Custom reviewer agents

---

### Module 2: Ứng Dụng Nâng Cao (120 phút)

Áp dụng kỹ năng vào các kịch bản marketing thực tế quy mô lớn.

| Command | Bài học | Thời lượng |
|---------|---------|------------|
| `/training:start-2-1` | Viết Campaign Brief | 45 phút |
| `/training:start-2-2` | Phát triển Content Strategy | 40 phút |
| `/training:start-2-3` | Tạo Marketing Copy | 35 phút |
| `/training:start-2-4` | Phân tích Dữ liệu Campaign | 35 phút |
| `/training:start-2-5` | Phân tích Đối thủ | 30 phút |
| `/training:start-2-6` | Tối ưu SEO | 40 phút |

**Bạn Sẽ Học:**
- Lập kế hoạch chiến dịch chiến lược
- Tạo nội dung đa kênh
- Phân tích dữ liệu và insights
- Thu thập competitive intelligence
- SEO best practices

**Bạn Sẽ Xây dựng:**
- Thư viện nội dung hoàn chỉnh (blog, email, social, ads)
- Báo cáo phân tích đối thủ
- Kế hoạch tối ưu SEO
- Campaign analytics dashboard

---

### Module 3: CRO & Chuyển đổi (60 phút)

Thành thạo tối ưu hóa tỷ lệ chuyển đổi với các CRO skills chuyên biệt.

| Command | Bài học | Thời lượng |
|---------|---------|------------|
| `/training:start-3-1` | CRO Cơ bản | 20 phút |
| `/training:start-3-2` | Tối ưu Form & Signup | 20 phút |
| `/training:start-3-3` | Popup & Onboarding CRO | 20 phút |

**Bạn Sẽ Học:**
- 7 CRO skills cho toàn bộ conversion funnel
- Tối ưu form (quy tắc 5 trường)
- Best practices signup flow
- Thiết kế và triggers popup
- Onboarding và activation
- Paywall và upgrade screens
- Thiết kế A/B test

**Bạn Sẽ Xây dựng:**
- Landing page CRO audit
- Thiết kế form được tối ưu
- Onboarding flow
- Upgrade screen
- A/B test hypotheses

**Toàn bộ CRO Funnel:**
```
Visitor → Page CRO → Form CRO → Signup CRO
     ↓
  Popup CRO (capture abandoners)
     ↓
New User → Onboarding CRO → Activation
     ↓
Free User → Paywall CRO → Paid Customer
```

---

### Nội Dung Bonus

| Command | Mô tả |
|---------|-------|
| `/training:bonus-patterns` | Pattern library cho headlines, emails, social, ads, CRO |
| `/training:bonus-secret` | The 10x Marketer Framework |
| `/training:help` | Hiển thị tất cả training commands có sẵn |

---

### Đào Tạo Đa Ngôn Ngữ

Đào tạo có sẵn bằng 3 ngôn ngữ. Tất cả nội dung đều giống nhau - chọn ngôn ngữ bạn thích:

| Ngôn ngữ | Tiền tố Command | Ví dụ |
|----------|-----------------|-------|
| **English** | `/training:` | `/training:start-0-0` |
| **Tiếng Việt** (Khuyến nghị) | `/training-vi:` | `/training-vi:start-0-0` |
| **日本語** (Nhật) | `/training-ja:` | `/training-ja:start-0-0` |

**Các commands đã được bản địa hóa:**
- `start-0-0` đến `start-0-2` (Module 0)
- `start-1-1` đến `start-1-7` (Module 1)
- `start-2-1` đến `start-2-6` (Module 2)
- `start-3-1` đến `start-3-3` (Module 3)
- `help`, `bonus-patterns`, `bonus-secret`, `persona-builder`

---

### Hiệu Ứng Cộng Hưởng

Mỗi chiến dịch làm chiến dịch tiếp theo nhanh hơn:

| Chiến dịch | Thời gian | Cải thiện |
|------------|-----------|-----------|
| Đầu tiên (Module 2) | 40 giờ | Xây dựng từ đầu |
| Chiến dịch thứ 5 | 15 giờ | Nhanh hơn 62% |
| Chiến dịch thứ 10 | 10 giờ | Nhanh hơn 75% |

**Bạn Sẽ Tích lũy:**
- Campaign brief templates
- Brand voice guidelines
- Content templates (blog, email, social, ads)
- Persona frameworks
- Competitive analysis templates
- SEO optimization checklists
- Custom reviewer agents
- Workflow automation patterns

---

## Lộ Trình Học

### Lộ trình 1: Bắt Đầu Nhanh (30 phút)
Cho marketers có kinh nghiệm - chuyển thẳng sang production:
```bash
/campaign:plan "Your campaign"
/content:good "Your content"
/cro:page "Your landing page"
```

### Lộ trình 2: Đào Tạo Đầy Đủ (5-6 giờ)
Cho người mới bắt đầu - hoàn thành đào tạo tương tác:
```bash
/training:start-0-0  # Bắt đầu tại đây
```

### Lộ trình 3: Theo Skill Cụ Thể (15-30 phút mỗi skill)
Học các skills cụ thể khi cần:

| Mục tiêu | Commands |
|----------|----------|
| **Cải thiện conversions** | `/cro:page`, `/cro:form`, `/marketing:psychology` |
| **Viết copy tốt hơn** | `/content:good`, `/content:editing` |
| **Ra mắt sản phẩm** | `/growth:launch`, `/campaign:plan` |
| **Tối ưu pricing** | `/pricing:strategy` |
| **Scale SEO** | `/seo:programmatic`, `/seo:schema` |
| **Thiết kế referrals** | `/growth:referral` |
| **A/B testing** | `/test:ab-setup` |

### Lộ trình 4: Thành thạo CRO (60 phút)
Hoàn thành đào tạo conversion optimization:
```bash
/training:start-3-1  # Bắt đầu với fundamentals
/training:start-3-2  # Form & signup
/training:start-3-3  # Popup & onboarding
```

---

## Tích Hợp MCP

Dữ liệu thực từ các dịch vụ được kết nối (xem `data-reliability-rules.md`):

| Server | Sử dụng Cho |
|--------|-------------|
| `sensortower` | App analytics, ASO |
| `google-search-console` | Search performance |
| `google-analytics` | Web analytics |
| `semrush` | Keywords, backlinks |
| `dataforseo` | SERP data |
| `meta-ads` | Facebook/Instagram ads |
| `hubspot` | CRM, automation |

---

## Đóng Góp

Hoan nghênh đóng góp! Nếu bạn có:
- Agents hoặc skills được cải tiến
- Marketing commands mới
- Workflows tốt hơn
- Bug fixes

Xem [CONTRIBUTING.md](CONTRIBUTING.md) để biết hướng dẫn.

### Ý Tưởng Đóng Góp
- Skills theo ngành cụ thể (B2B, e-commerce, SaaS)
- Agents theo nền tảng (TikTok, YouTube, Reddit)
- Marketing theo khu vực (APAC, EMEA, LATAM)
- Analytics integrations

---

## Tài Nguyên

### AgentKits
- [AgentKits Homepage](https://agentkits.net)
- [Marketing Kit Page](https://www.agentkits.net/marketing)
- [Tài liệu](https://www.agentkits.net/docs)
- [AgentKits CLI](https://github.com/aitytech/agentkits-cli)

### AI Assistants
- [Claude Code Docs](https://docs.claude.com/en/docs/claude-code/overview)
- [Cursor Docs](https://docs.cursor.com)
- [GitHub Copilot Docs](https://docs.github.com/en/copilot)
- [Model Context Protocol](https://modelcontextprotocol.io)

### Cộng đồng
- [GitHub Issues](https://github.com/aitytech/agentkits-marketing/issues)
- [GitHub Discussions](https://github.com/aitytech/agentkits-marketing/discussions)

---

## Lịch Sử Star

<a href="https://star-history.com/#aitytech/agentkits-marketing&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=aitytech/agentkits-marketing&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=aitytech/agentkits-marketing&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=aitytech/agentkits-marketing&type=Date" />
 </picture>
</a>

---

## Giấy Phép

MIT - Sử dụng tự do, chỉnh sửa khi cần, đóng góp lại nếu có thể.

---

**Star repo này nếu nó hữu ích. Bắt đầu xây dựng các chiến dịch marketing được hỗ trợ bởi AI ngay hôm nay.**
