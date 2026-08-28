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
  <strong>企业级 AI 营销自动化工具,适用于 Claude Code、Cursor、GitHub Copilot 以及任何支持 agents 和 skills 的 AI 助手。</strong>
</p>

<p align="center">
  为 SaaS 创始人、营销人员和增长团队构建的生产就绪营销 agents、skills、commands 和工作流。活动策划、内容创作、SEO、CRO、邮件序列和分析 - 全部由专业 AI agents 驱动。
</p>

<p align="center">
  <a href="https://www.agentkits.net/marketing">网站</a> •
  <a href="https://www.agentkits.net/docs">文档</a> •
  <a href="#安装">安装</a> •
  <a href="#培训">培训</a>
</p>

<p align="center">
  🌐 <a href="README.md">English</a> · <strong>简体中文</strong> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.es.md">Español</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.pt-br.md">Português</a> · <a href="README.vi.md">Tiếng Việt</a> · <a href="README.ru.md">Русский</a> · <a href="README.ar.md">العربية</a>
</p>

---

## Vibe Marketing

<p>
  <img src="https://img.shields.io/badge/Vibe_Coding-Developers-blue?style=for-the-badge&logo=code&logoColor=white" alt="Vibe Coding">
  <img src="https://img.shields.io/badge/→-black?style=for-the-badge" alt="arrow">
  <img src="https://img.shields.io/badge/Vibe_Marketing-Marketers-green?style=for-the-badge&logo=target&logoColor=white" alt="Vibe Marketing">
</p>

> *受开发者"Vibe Coding"运动的启发...我们正在扩展宇宙:**Vibe Marketing** 适用于 AI 时代,一切自动运转。*

| | |
|---|---|
| **使用 AI** | 让 AI agents 处理您的营销活动,您专注于策略。只需放松,让 agents 完成繁重的工作。 |
| **不使用 AI** | 本仓库是营销最佳实践、框架和模板的**综合参考库**。将 skills 文档用作您的营销手册。 |

---

## 内容概览

兼容 **Claude Code**、**Cursor**、**GitHub Copilot** 以及任何支持 agents 和 skills 的 AI 助手。可作为插件安装或手动复制组件。

```
agentkits-marketing/
|-- .claude-plugin/      # 插件和市场清单
|   |-- plugin.json            # 插件元数据和组件路径
|   |-- marketplace.json       # /plugin marketplace add 的市场目录
|
|-- .claude/
|   |-- agents/          # 18 个专业营销 agents
|   |   |-- attraction-specialist.md    # 潜在客户生成、SEO、着陆页
|   |   |-- lead-qualifier.md           # 潜在客户评分、细分
|   |   |-- email-wizard.md             # 邮件序列、自动化
|   |   |-- sales-enabler.md            # 销售资料、作战卡
|   |   |-- continuity-specialist.md    # 留存、重新激活
|   |   |-- upsell-maximizer.md         # 收入扩展
|   |   |-- copywriter.md               # 高转化文案
|   |   |-- conversion-optimizer.md     # CRO 专家
|   |   |-- seo-specialist.md           # SEO 优化
|   |   |-- brand-voice-guardian.md     # 品牌一致性
|   |   |-- ...更多
|   |
|   |-- commands/        # 93 个按类别分类的斜杠命令
|   |   |-- campaign/    # /campaign:plan, /campaign:brief, /campaign:analyze
|   |   |-- content/     # /content:blog, /content:landing, /content:email
|   |   |-- seo/         # /seo:keywords, /seo:audit, /seo:programmatic
|   |   |-- cro/         # /cro:page, /cro:form, /cro:popup, /cro:signup
|   |   |-- growth/      # /growth:launch, /growth:referral, /growth:free-tool
|   |   |-- ...更多
|   |
|   |-- skills/          # 28 个营销 skills
|   |   |-- marketing-psychology/       # 70+ 心理模型
|   |   |-- marketing-ideas/            # 140+ SaaS 策略
|   |   |-- page-cro/                   # 着陆页优化
|   |   |-- copywriting/                # 营销文案
|   |   |-- programmatic-seo/           # 规模化页面生成
|   |   |-- pricing-strategy/           # 定价与打包
|   |   |-- ...更多
|   |
|   |-- workflows/       # 核心营销工作流
|       |-- primary-workflow.md         # 活动生命周期
|       |-- sales-workflow.md           # 潜在客户到客户
|       |-- crm-workflow.md             # 联系人生命周期
|
|-- training/            # 23 interactive lessons (English)
|-- training-zh/         # 简体中文
|-- training-ja/         # 日本語
|-- training-ko/         # 한국어
|-- training-es/         # Español
|-- training-de/         # Deutsch
|-- training-fr/         # Français
|-- training-pt-br/      # Português
|-- training-vi/         # Tiếng Việt
|-- training-ru/         # Русский
|-- training-ar/         # العربية
|-- docs/                # 文档和指南
|-- marketplace.json     # 自托管市场配置
```

---

## 安装

### 选项 1:Claude Code 插件市场(推荐用于 Claude Code)

通过 Claude Code 的插件系统直接安装 — 无需手动配置:

```bash
# 添加市场
/plugin marketplace add aitytech/agentkits-marketing

# 安装完整套件(18 个 agents、28 个 skills、93 个 commands)
/plugin install agentkits-marketing@agentkits-marketing
```

你也可以单独安装各个组件:

```bash
/plugin install agentkits-marketing-skills@agentkits-marketing    # 仅 Skills
/plugin install agentkits-marketing-agents@agentkits-marketing    # 仅 Agents
/plugin install agentkits-marketing-commands@agentkits-marketing  # 仅 Commands
```

安装后重启 Claude Code。

---

### 选项 2:通过 npx 安装(所有平台)

一条命令安装 18 个 agents、28 个 skills、93 个 commands:

```bash
npx @aitytech/agentkits-marketing install
```

**特定平台安装:**

```bash
npx @aitytech/agentkits-marketing install --platform claude    # Claude Code
npx @aitytech/agentkits-marketing install --platform cursor    # Cursor IDE
npx @aitytech/agentkits-marketing install --platform windsurf  # Windsurf
npx @aitytech/agentkits-marketing install --platform cline     # Cline
npx @aitytech/agentkits-marketing install --platform copilot   # GitHub Copilot
npx @aitytech/agentkits-marketing install --platform all       # 所有平台
```

**其他 CLI 命令:**

```bash
npx @aitytech/agentkits-marketing --help        # 显示所有命令
npx @aitytech/agentkits-marketing list-ides     # 列出支持的 IDE
npx @aitytech/agentkits-marketing list-modules  # 列出可用模块
npx @aitytech/agentkits-marketing update        # 更新现有安装
```

---

### 选项 3:克隆并使用

克隆仓库并在其中工作:

```bash
git clone https://github.com/aitytech/agentkits-marketing.git
cd agentkits-marketing
claude
```

---

### 选项 4:手动安装

将单个组件复制到您的 Claude 配置:

```bash
# 克隆仓库
git clone https://github.com/aitytech/agentkits-marketing.git

# 复制 agents
cp agentkits-marketing/.claude/agents/*.md ~/.claude/agents/

# 复制 commands
cp -r agentkits-marketing/.claude/commands/* ~/.claude/commands/

# 复制 skills
cp -r agentkits-marketing/.claude/skills/* ~/.claude/skills/

# 复制 workflows
cp -r agentkits-marketing/.claude/workflows/* ~/.claude/workflows/
```

---

## 快速开始

### 活动启动

```bash
# 研究和规划
/research:market "SaaS productivity tools"
/competitor:deep "competitor.com"
/campaign:plan "Q1 Product Launch"

# 生成内容
/content:landing "new feature" "target audience"
/content:email "product launch" "trial users"
/content:blog "feature announcement" "primary keyword"

# 优化
/cro:page "landing page for conversion"
/seo:optimize "content.md" "target keyword"
```

### 内容创作

```bash
/content:good "Blog post about AI marketing"
/content:editing "polish this draft"
/seo:keywords "ai marketing automation"
```

### 转化优化

```bash
/cro:page "homepage conversion audit"
/cro:form "lead capture optimization"
/cro:signup "registration flow"
/test:ab-setup "headline variations"
```

### 增长与策略

```bash
/marketing:ideas "SaaS product"
/marketing:psychology "pricing objections"
/growth:launch "Product Hunt strategy"
/pricing:strategy "tier structure"
```

---

## 可用 Skills

| Skill | 描述 | 使用时机 |
|-------|-------------|----------|
| **核心营销** |
| `marketing-psychology` | 70+ 营销心理模型 | 说服、定价、异议处理 |
| `marketing-ideas` | 140 个经过验证的 SaaS 策略 | 需要营销创意 |
| `marketing-fundamentals` | 漏斗、旅程、定位 | 基础概念 |
| **转化优化** |
| `page-cro` | 着陆页、主页、定价页 | 页面转化不佳 |
| `form-cro` | 潜在客户捕获、联系表单 | 表单优化 |
| `popup-cro` | 弹窗、叠加层、退出意图 | 弹窗创建 |
| `signup-flow-cro` | 注册、试用注册 | 注册摩擦 |
| `onboarding-cro` | 注册后激活 | 用户激活 |
| `paywall-upgrade-cro` | 应用内付费墙、升级页面 | 免费增值转化 |
| `ab-test-setup` | 实验设计 | A/B 测试 |
| **内容与文案** |
| `copywriting` | 营销页面文案 | 撰写新文案 |
| `copy-editing` | 编辑和润色 | 改进现有文案 |
| `email-sequence` | 滴灌营销活动、培育 | 邮件自动化 |
| **SEO 与增长** |
| `seo-mastery` | 关键词、技术、页面优化 | SEO 优化 |
| `programmatic-seo` | 大规模模板页面 | 规模化 SEO |
| `schema-markup` | 结构化数据、富片段 | Schema 实施 |
| `competitor-alternatives` | 对比页面、替代方案 | 比较内容 |
| `launch-strategy` | 产品发布、公告 | 上市策略 |
| `pricing-strategy` | 定价、打包、层级 | 定价决策 |
| `referral-program` | 推荐、联盟 | 病毒式增长 |
| `free-tool-strategy` | 工程即营销 | 免费工具规划 |

---

## 营销 Agents

### 核心 Agents
| Agent | 专注领域 |
|-------|-------|
| `attraction-specialist` | 潜在客户生成、SEO、着陆页 |
| `lead-qualifier` | 潜在客户评分、细分 |
| `email-wizard` | 邮件序列、自动化 |
| `sales-enabler` | 销售资料、作战卡 |
| `continuity-specialist` | 留存、重新激活 |
| `upsell-maximizer` | 收入扩展、交叉销售 |

### 支持 Agents
| Agent | 专注领域 |
|-------|-------|
| `researcher` | 市场研究、竞争情报 |
| `brainstormer` | 活动创意、创意概念 |
| `planner` | 活动规划、日历 |
| `copywriter` | 高转化文案 |
| `project-manager` | 活动协调 |
| `docs-manager` | 营销文档 |

### 审查 Agents
| Agent | 视角 |
|-------|-------------|
| `brand-voice-guardian` | 品牌一致性 |
| `conversion-optimizer` | CRO 最佳实践 |
| `seo-specialist` | SEO 优化 |
| `solopreneur` | 自由职业者/小企业 |
| `startup-founder` | 早期创业公司 |

---

## 命令类别

| 类别 | 命令数 | 示例 |
|----------|----------|----------|
| Campaign | 4 | `/campaign:plan`、`/campaign:brief` |
| Content | 10 | `/content:blog`、`/content:landing`、`/content:editing` |
| SEO | 6 | `/seo:keywords`、`/seo:audit`、`/seo:programmatic` |
| CRO | 6 | `/cro:page`、`/cro:form`、`/cro:signup` |
| Growth | 3 | `/growth:launch`、`/growth:referral` |
| Email | 4 | `/sequence:welcome`、`/sequence:nurture` |
| Analytics | 5 | `/analytics:roi`、`/analytics:funnel` |
| Sales | 4 | `/sales:pitch`、`/sales:battlecard` |
| Research | 3 | `/research:market`、`/research:persona` |
| Marketing | 2 | `/marketing:psychology`、`/marketing:ideas` |
| Testing | 1 | `/test:ab-setup` |
| ...更多 | 45+ | 查看完整命令参考 |

---

## 培训

**22 个互动课程**,掌握 AI 驱动的营销。在您的 AI 助手中通过实际营销工作学习。

| | |
|---|---|
| **方法** | Claude 教授的互动课程 |
| **项目** | Markit 代理机构为客户 AgentKits 工作 |
| **时长** | 总计 5-6 小时 |
| **前提条件** | Claude Code、Cursor 或兼容的 AI 助手 |
| **语言** | 英语、越南语(Tiếng Việt)、日语(日本語) |

```bash
# Start training in your language
/training:start-0-0           # English
/training-zh:start-0-0        # 简体中文
/training-ja:start-0-0        # 日本語
/training-ko:start-0-0        # 한국어
/training-es:start-0-0        # Español
/training-de:start-0-0        # Deutsch
/training-fr:start-0-0        # Français
/training-pt-br:start-0-0     # Português
/training-vi:start-0-0        # Tiếng Việt
/training-ru:start-0-0        # Русский
/training-ar:start-0-0        # العربية
```

---

### 实践项目:Markit 代理机构

您是 **Markit** 的营销策略师,这是一家 B2B SaaS 营销代理机构。

**您的客户:** AgentKits - AI 营销自动化工具包

| | |
|---|---|
| **产品** | 企业级 AI 营销自动化 |
| **目标** | SaaS 创始人、营销人员和增长团队 |
| **定价** | 免费开源(MIT 许可证) |
| **竞争对手** | Jasper、Copy.ai、HubSpot |

**关键人物角色:**
- **Solo Sam**(25-35 岁)- 独立创业者/独立黑客,自举式 SaaS
- **Marketer Maya**(30-40 岁)- 营销经理,中型 SaaS 公司
- **Founder Felix**(28-40 岁)- 技术创始人,早期创业公司

---

### 模块 0:入门(30 分钟)

学习基础知识并完成您的第一个营销任务。

| 命令 | 课程 | 时长 |
|---------|--------|----------|
| `/training:start-0-0` | 课程介绍 | 10 分钟 |
| `/training:start-0-1` | 安装与设置 | 15 分钟 |
| `/training:start-0-2` | 您的第一个营销任务 | 15 分钟 |

**您将学习:**
- AI 助手界面和基本命令
- 文件创建和管理
- 与 AI 交互完成营销任务

---

### 模块 1:核心概念(90 分钟)

通过 Markit 代理机构项目掌握基本工作流。

| 命令 | 课程 | 时长 |
|---------|--------|----------|
| `/training:start-1-1` | 欢迎来到 Markit | 20 分钟 |
| `/training:start-1-2` | 处理营销文件 | 25 分钟 |
| `/training:start-1-3` | 第一个营销任务 | 30 分钟 |
| `/training:start-1-4` | 使用 Agents 进行营销 | 35 分钟 |
| `/training:start-1-5` | 审查 Agents 深度解析 | 30 分钟 |
| `/training:start-1-6` | 项目记忆(CLAUDE.md) | 20 分钟 |
| `/training:start-1-7` | 导航与搜索 | 20 分钟 |

**您将学习:**
- 活动简报创建
- 品牌声音和人物角色开发
- Agent 协调和委派
- 文件组织最佳实践
- 有效使用项目记忆

**您将构建:**
- 完整的活动简报
- 品牌指南文档
- 客户人物角色
- 自定义审查 agents

---

### 模块 2:高级应用(120 分钟)

将技能应用于大规模的真实营销场景。

| 命令 | 课程 | 时长 |
|---------|--------|----------|
| `/training:start-2-1` | 编写活动简报 | 45 分钟 |
| `/training:start-2-2` | 开发内容策略 | 40 分钟 |
| `/training:start-2-3` | 生成营销文案 | 35 分钟 |
| `/training:start-2-4` | 分析活动数据 | 35 分钟 |
| `/training:start-2-5` | 竞争分析 | 30 分钟 |
| `/training:start-2-6` | SEO 优化 | 40 分钟 |

**您将学习:**
- 战略活动规划
- 多渠道内容创作
- 数据分析和洞察
- 竞争情报收集
- SEO 最佳实践

**您将构建:**
- 完整的内容库(博客、邮件、社交、广告)
- 竞争分析报告
- SEO 优化计划
- 活动分析仪表板

---

### 模块 3:CRO 与转化(60 分钟)

通过专业 CRO skills 掌握转化率优化。

| 命令 | 课程 | 时长 |
|---------|--------|----------|
| `/training:start-3-1` | CRO 基础 | 20 分钟 |
| `/training:start-3-2` | 表单与注册优化 | 20 分钟 |
| `/training:start-3-3` | 弹窗与引导 CRO | 20 分钟 |

**您将学习:**
- 完整转化漏斗的 7 个 CRO skills
- 表单优化(5 字段规则)
- 注册流程最佳实践
- 弹窗设计和触发器
- 引导和激活
- 付费墙和升级页面
- A/B 测试设计

**您将构建:**
- 着陆页 CRO 审计
- 优化的表单设计
- 引导流程
- 升级页面
- A/B 测试假设

**完整 CRO 漏斗覆盖:**
```
访客 → 页面 CRO → 表单 CRO → 注册 CRO
     ↓
  弹窗 CRO(捕获放弃者)
     ↓
新用户 → 引导 CRO → 激活
     ↓
免费用户 → 付费墙 CRO → 付费客户
```

---

### 奖励内容

| 命令 | 描述 |
|---------|-------------|
| `/training:bonus-patterns` | 标题、邮件、社交、广告、CRO 的模式库 |
| `/training:bonus-secret` | 10 倍营销人员框架 |
| `/training:help` | 显示所有可用的培训命令 |

---

### 多语言培训

培训提供 3 种语言。所有内容相同 - 选择您喜欢的语言:

| 语言 | 命令前缀 | 示例 |
|----------|---------------|---------|
| **英语** | `/training:` | `/training:start-0-0` |
| **越南语**(Tiếng Việt) | `/training-vi:` | `/training-vi:start-0-0` |
| **日语**(日本語) | `/training-ja:` | `/training-ja:start-0-0` |

**可用的本地化命令:**
- `start-0-0` 到 `start-0-2`(模块 0)
- `start-1-1` 到 `start-1-7`(模块 1)
- `start-2-1` 到 `start-2-6`(模块 2)
- `start-3-1` 到 `start-3-3`(模块 3)
- `help`、`bonus-patterns`、`bonus-secret`、`persona-builder`

---

### 复利效应

每个活动都会让下一个更快:

| 活动 | 时间 | 改进 |
|----------|------|-------------|
| 第一个(模块 2) | 40 小时 | 从头开始构建 |
| 第 5 个活动 | 15 小时 | 快 62% |
| 第 10 个活动 | 10 小时 | 快 75% |

**您将积累:**
- 活动简报模板
- 品牌声音指南
- 内容模板(博客、邮件、社交、广告)
- 人物角色框架
- 竞争分析模板
- SEO 优化检查清单
- 自定义审查 agents
- 工作流自动化模式

---

## 学习路径

### 路径 1:快速开始(30 分钟)
适用于经验丰富的营销人员 - 直接投入生产:
```bash
/campaign:plan "Your campaign"
/content:good "Your content"
/cro:page "Your landing page"
```

### 路径 2:完整培训(5-6 小时)
适用于初学者 - 完成互动培训:
```bash
/training:start-0-0  # 从这里开始
```

### 路径 3:特定技能(每个 15-30 分钟)
根据需要学习特定技能:

| 目标 | 命令 |
|------|----------|
| **提高转化率** | `/cro:page`、`/cro:form`、`/marketing:psychology` |
| **撰写更好的文案** | `/content:good`、`/content:editing` |
| **发布产品** | `/growth:launch`、`/campaign:plan` |
| **优化定价** | `/pricing:strategy` |
| **规模化 SEO** | `/seo:programmatic`、`/seo:schema` |
| **设计推荐计划** | `/growth:referral` |
| **A/B 测试** | `/test:ab-setup` |

### 路径 4:CRO 精通(60 分钟)
完成转化优化培训:
```bash
/training:start-3-1  # 从基础开始
/training:start-3-2  # 表单与注册
/training:start-3-3  # 弹窗与引导
```

---

## MCP 集成

来自连接服务的真实数据(参见 `data-reliability-rules.md`):

| 服务器 | 用途 |
|--------|---------|
| `sensortower` | 应用分析、ASO |
| `google-search-console` | 搜索性能 |
| `google-analytics` | 网站分析 |
| `semrush` | 关键词、反向链接 |
| `dataforseo` | SERP 数据 |
| `meta-ads` | Facebook/Instagram 广告 |
| `hubspot` | CRM、自动化 |

---

## 贡献

欢迎贡献!如果您有:
- 改进的 agents 或 skills
- 新的营销 commands
- 更好的工作流
- Bug 修复

请参阅 [CONTRIBUTING.md](CONTRIBUTING.md) 了解指南。

### 贡献想法
- 行业特定 skills(B2B、电商、SaaS)
- 平台特定 agents(TikTok、YouTube、Reddit)
- 区域营销(亚太、欧洲中东非洲、拉美)
- 分析集成

---

## 资源

### AgentKits
- [AgentKits 主页](https://agentkits.net)
- [Marketing Kit 页面](https://www.agentkits.net/marketing)
- [文档](https://www.agentkits.net/docs)
- [AgentKits CLI](https://github.com/aitytech/agentkits-cli)

### AI 助手
- [Claude Code 文档](https://docs.claude.com/en/docs/claude-code/overview)
- [Cursor 文档](https://docs.cursor.com)
- [GitHub Copilot 文档](https://docs.github.com/en/copilot)
- [Model Context Protocol](https://modelcontextprotocol.io)

### 社区
- [GitHub Issues](https://github.com/aitytech/agentkits-marketing/issues)
- [GitHub Discussions](https://github.com/aitytech/agentkits-marketing/discussions)

---

## Star 历史

<a href="https://star-history.dera.page/#aitytech/agentkits-marketing&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://star-history.dera.page/svg?repos=aitytech/agentkits-marketing&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://star-history.dera.page/svg?repos=aitytech/agentkits-marketing&type=Date" />
   <img alt="Star History Chart" src="https://star-history.dera.page/svg?repos=aitytech/agentkits-marketing&type=Date" />
 </picture>
</a>

---

## 许可证

MIT - 自由使用,按需修改,如果可以请回馈贡献。

---

**如果对您有帮助,请给这个仓库加星。今天就开始构建 AI 驱动的营销活动。**