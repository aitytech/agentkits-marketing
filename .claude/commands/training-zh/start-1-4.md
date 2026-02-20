# /training-zh:start-1-4 - 使用智能体进行营销

## 语言与质量标准

**重要**：使用用户正在使用的相同语言进行回复。如果是越南语，则用越南语回复。如果是西班牙语，则用西班牙语回复。

---

## Claude 的指导说明

教授智能体的概念 - 处理不同营销功能的专业 AI 团队成员。

### 课程概述

---

**模块 1.4：使用智能体进行营销**

营销工具包拥有 18 个专业智能体。可以将它们视为能够专业处理特定营销任务的 AI 团队成员。

**时长：** 约 35 分钟

---

### 步骤 1：解释智能体系统

营销工具包的智能体按功能组织：

**核心营销智能体（6 个）：**
| 智能体 | 重点领域 | 使用场景 |
|-------|-------|-----------|
| `attraction-specialist` | 漏斗顶端、潜在客户生成 | SEO、落地页、竞争对手情报 |
| `lead-qualifier` | 意图检测 | 潜在客户评分、行为分析 |
| `email-wizard` | 电子邮件营销 | 邮件序列、自动化、优化 |
| `sales-enabler` | 销售支持 | 推介、案例研究、竞品对比卡 |
| `continuity-specialist` | 客户保留 | 流失检测、重新激活 |
| `upsell-maximizer` | 收入扩展 | 交叉销售、追加销售、功能采用 |

**支持智能体（6 个）：**
| 智能体 | 重点领域 | 使用场景 |
|-------|-------|-----------|
| `researcher` | 市场情报 | 研究、竞争分析 |
| `brainstormer` | 创意构思 | 营销活动概念、信息传递角度 |
| `planner` | 战略规划 | 营销活动计划、内容日历 |
| `project-manager` | 协调管理 | 状态跟踪、营销活动监督 |
| `copywriter` | 内容创作 | 文案、信息传递、创意内容 |
| `docs-manager` | 文档管理 | 品牌指南、风格指南 |

**审查智能体（6 个）：**
| 智能体 | 视角 | 审查内容 |
|-------|-------------|-------------|
| `brand-voice-guardian` | 品牌一致性 | 语调、基调、信息传递 |
| `conversion-optimizer` | 转化率优化专家 | 转化、说服力 |
| `seo-specialist` | 搜索优化 | 关键词、技术 SEO |
| `manager-maria` | 营销经理（38 岁，B2B） | 策略、团队适配 |
| `solo-steve` | 独立创业者（32 岁） | 时间、预算、DIY |
| `startup-sam` | 初创公司创始人（28 岁） | 增长、病毒式传播、速度 |

### 步骤 2：智能体练习 - 多视角审查

创建内容并从多个视角进行审查：

```
从三个智能体的视角审查 AgentKits 营销活动简报：

1. 作为 `brand-voice-guardian` - 评估品牌一致性和信息传递
2. 作为 `conversion-optimizer` - 评估 CTA、说服力和转化潜力
3. 作为 `manager-maria` - 这对 B2B 营销团队执行是否可行？

对于每个视角，提供：
- 做得好的方面
- 需要改进的领域
- 具体建议
```

解释刚才发生的事情 - 通过一个命令完成三次专业审查。

### 步骤 3：使用潜在客户资格评估

通过命令演示 lead-qualifier 智能体：

```
/leads:score "B2B SaaS company - technology industry"
```

```
/leads:qualify "AgentKits productivity tool"
```

展示 lead-qualifier 如何创建：
- 人口统计评分标准
- 行为评分信号
- MQL/SQL 阈值

### 步骤 4：使用电子邮件向导

演示 email-wizard 智能体：

```
/sequence:welcome "AgentKits" "trial users"
```

```
/sequence:nurture "AgentKits" "leads who downloaded our guide"
```

### 步骤 5：使用销售赋能

演示 sales-enabler 智能体：

```
/sales:pitch "enterprise company considering AgentKits" "team coordination"
```

```
/sales:battlecard "RescueTime"
```

### 步骤 6：真实场景 - 快速响应

```
场景：竞争对手刚刚宣布了"团队专注"功能。使用智能体进行响应：

1. 使用 `researcher` 分析他们的公告
2. 使用 `brainstormer` 制定反制定位策略
3. 使用 `copywriter` 创建响应内容
4. 使用 `email-wizard` 起草客户沟通内容
```

### 步骤 7：智能体最佳实践

分享以下技巧：
- 明确任务目标
- 参考品牌指南和用户画像
- 清晰定义输出（格式、长度）
- 为专业任务使用专业智能体
- 组合智能体处理复杂项目

### 下一步

告诉他们：
- 他们现在已经了解 18 个智能体系统
- **下一步：** `/training-zh:start-1-5` - 自定义营销子智能体
- 他们将学习用户画像审查者以及如何获得针对性反馈

## 关键教学要点
- 18 个智能体的组织方式：核心（6 个）、支持（6 个）、审查（6 个）
- 核心智能体映射到漏斗阶段
- 审查智能体提供多视角反馈
- 命令调用特定智能体能力
- 组合智能体处理复杂项目

---

关键输出规则：
- 仅输出原始翻译的 markdown 内容
- 不要用 ```markdown 代码围栏包装输出
- 不要添加任何前言、解释或评论
- 直接从翻译内容开始
- 输出将直接保存到 .md 文件