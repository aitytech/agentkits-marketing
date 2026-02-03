# /training-zh:start-1-1 - 欢迎来到 Markit

## 语言和质量标准

**重要**：使用用户正在使用的语言进行回复。如果是越南语，则用越南语回复。如果是西班牙语，则用西班牙语回复。

---

## Claude 的指令

开始模块 1 - 核心概念。本课程介绍 Markit 代理项目和营销工具包的核心工作流程。

### 课程概述

---

**模块 1.1：欢迎来到 Markit**

欢迎来到模块 1！现在我们将通过实践工作掌握营销工具包的核心概念。在本模块结束时，您将能够自信地处理真实的营销任务。

**时长：** 约 20 分钟

---

### 步骤 1：设定场景

解释他们的角色：

> 您是 **Markit** 代理公司的营销策略师。您的客户是 **AgentKits**。您的任务：
> 1. 将产品推向市场
> 2. 提高知名度和注册量
> 3. 创建能够与远程团队产生共鸣的内容
> 4. 建立可持续的内容营销引擎

### 步骤 2：理解核心工作流程

解释 `.claude/workflows/` 中的三个主要工作流程：

**营销管道（`primary-workflow.md`）：**
```
Research → Insights → Creative → Plan → Create → Edit → Publish → Measure
```

**销售管道（`sales-workflow.md`）：**
```
Lead → MQL → SQL → Opportunity → Proposal → Negotiation → Close
```

**CRM 生命周期（`crm-workflow.md`）：**
```
Subscriber → Lead → MQL → SQL → Opportunity → Customer → Advocate
```

### 步骤 3：理解代理角色

解释代理如何映射到营销职能：

**TOFU（漏斗顶部）：**
- `attraction-specialist` - 潜在客户生成、SEO、落地页

**MOFU（漏斗中部）：**
- `lead-qualifier` - 意图检测、潜在客户评分
- `email-wizard` - 培育序列

**BOFU（漏斗底部）：**
- `sales-enabler` - 宣传资料、案例研究、对比卡

**留存：**
- `continuity-specialist` - 流失检测、重新激活
- `upsell-maximizer` - 收入扩展

### 步骤 4：创建第一个营销活动简报

现在使用 `/campaign:plan` 开始真正的工作：

```
/campaign:plan "AgentKits Q1 Product Launch - Target: 1000 trial signups in 30 days, Budget: $50K, Channels: LinkedIn, Google Ads, Content, Email"
```

查看生成的综合营销活动计划。

### 步骤 5：审查简报

指出规划代理如何：
- 创建结构化的目标和 KPI
- 定义目标受众细分
- 在各渠道分配预算
- 建立衡量框架

### 步骤 6：迭代的力量

使用后续问题展示优化过程：

```
Expand the target audience section with day-in-the-life scenarios for each persona
```

解释：迭代是关键。初稿只是起点。

### 步骤 7：上下文感知演示

演示上下文的力量：

```
/content:social "Product launch announcement for AgentKits based on the campaign brief" "linkedin"
```

展示 Claude 如何自动从营销活动上下文中提取信息。

### 下一步

告诉他们：
- 他们使用 `/campaign:plan` 创建了专业的营销活动简报
- Claude 使用了品牌指南和角色的上下文
- **下一步：** `/training-zh:start-1-2` - 处理营销文件
- 他们将学习如何高效地组织、查找和管理营销资产

## 关键教学要点
- Markit 代理是实践项目
- 三个核心工作流程：营销、销售、CRM
- 代理映射到漏斗阶段（TOFU、MOFU、BOFU、留存）
- `/campaign:plan` 创建综合营销活动简报
- 迭代提高输出质量

---

关键输出规则：
- 仅输出原始翻译的 markdown 内容
- 不要用 ```markdown 代码围栏包装输出
- 不要添加任何前言、解释或评论
- 直接从翻译内容开始
- 输出将直接保存到 .md 文件