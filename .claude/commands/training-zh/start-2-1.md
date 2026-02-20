# /training-zh:start-2-1 - 撰写营销活动简报

## 语言与质量标准

**关键**：使用用户正在使用的相同语言进行响应。如果是越南语，则用越南语响应。如果是西班牙语，则用西班牙语响应。

---

## Claude 指令

开始模块 2 - 高级应用。本课程教授使用营销活动命令创建全面的营销活动简报。

### 课程概述

---

**模块 2.1：撰写营销活动简报**

欢迎来到模块 2！现在我们将把您学到的所有知识应用到真实的营销工作流程中。营销活动简报是成功执行的基础。

**时长：** 约 45 分钟

---

### 步骤 1：解释协作方法

> Claude 是您的战略合作伙伴，而不是您营销专业知识的替代品。您带来洞察力、市场知识和战略思维。Claude 帮助阐述和构建这些想法。

### 步骤 2：收集战略输入

询问学员的战略思考：

```
让我们为 AgentKits 的第二季度增长营销活动创建一份全面的营销活动简报。

首先，告诉我您的战略思考：
- 主要目标是什么？（例如：2000 个试用注册）
- 预算是多少？
- 时间范围是多久？
- 有要重点关注的特定渠道吗？
- 本季度的关键信息是什么？
```

等待他们的输入，然后继续。

### 步骤 3：使用营销活动计划命令

使用营销活动规划命令：

```
/campaign:plan "AgentKits Q2 Growth - Goal: 2000 trial signups, Budget: $75K, Timeframe: 8 weeks, Channels: LinkedIn Ads, Content Marketing, Email Nurture, Key message: Team-wide focus time coordination"
```

查看由 `planner` 代理生成的全面营销活动计划。

### 步骤 4：生成创意简报

现在使用创意简报命令：

```
/campaign:brief "AgentKits Q2 Growth Campaign"
```

解释创意简报包含的内容：
- 单一核心主张
- 目标受众洞察
- 语调和风格
- 交付成果清单
- 创意必备要素

### 步骤 5：获取多角度反馈

使用审核代理：

```
从三个角度审查第二季度营销活动计划：

1. `manager-maria`（营销经理）- 营销团队能否执行？
2. `conversion-optimizer` - 此营销活动结构是否会推动转化？
3. `brand-voice-guardian` - 信息传递是否符合品牌调性？

提供具体的反馈和建议。
```

### 步骤 6：创建内容日历

使用日历命令：

```
/campaign:calendar "8 weeks - AgentKits Q2 Growth - content marketing, social media, email nurture focused on team productivity"
```

### 步骤 7：创建支持文档

生成额外的营销活动资产：

**潜在客户评分模型：**
```
/leads:score "B2B SaaS - technology companies - team productivity"
```

**欢迎序列：**
```
/sequence:welcome "AgentKits" "trial signups from Q2 campaign"
```

**培育序列：**
```
/sequence:nurture "AgentKits" "engaged leads who haven't converted"
```

### 步骤 8：竞争准备

准备竞争材料：

```
/sales:battlecard "RescueTime - main competitor for productivity tools"
```

```
/competitor:deep "Freedom app - focus and productivity blocking"
```

### 步骤 9：创建衡量计划

设置分析：

```
/analytics:funnel "trial signup funnel - awareness to trial to paid"
```

### 步骤 10：保存为模板

解释此工作流程可以在任何营销活动中重复使用：

```
营销活动简报工作流程：
1. /campaign:plan - 战略计划
2. /campaign:brief - 创意简报
3. /campaign:calendar - 内容日历
4. /leads:score - 潜在客户资格认定
5. /sequence:welcome - 新潜在客户培育
6. /sequence:nurture - 持续培育
7. /sales:battlecard - 竞争准备
8. /analytics:funnel - 衡量设置
```

### 下一步

告诉他们：
- 他们在不到一小时内创建了一份专业的营销活动简报
- 通常这需要数天时间和多次会议
- **下一课：** `/training-zh:start-2-2` - 制定内容战略
- 他们将构建全面的内容计划

## 关键教学要点
- 营销活动简报是协作性的
- 使用 `/campaign:plan` 进行战略规划
- 使用 `/campaign:brief` 进行创意指导
- 使用 `/campaign:calendar` 进行内容排期
- 使用审核代理获取反馈
- 创建支持资产（潜在客户评分、序列、竞争卡片）

---

关键输出规则：
- 仅输出原始翻译的 markdown 内容
- 不要用 ```markdown 代码围栏包装输出
- 不要添加任何前言、解释或评论
- 直接从翻译内容开始
- 输出将直接保存到 .md 文件