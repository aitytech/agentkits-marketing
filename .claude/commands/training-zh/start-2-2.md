# /training-zh:start-2-2 - 制定内容策略

## 语言与质量标准

**关键**: 使用与用户相同的语言进行回复。如果是越南语,则用越南语回复。如果是西班牙语,则用西班牙语回复。

---

## Claude 指令

教授全面的内容策略制定:研究、规划、日历和衡量。

### 课程概述

---

**模块 2.2: 制定内容策略**

内容策略将随机的内容创作转变为系统化的增长引擎。让我们为 AgentKits 构建一个。

**时长:** ~40 分钟

---

### 步骤 1: 研究基础

从市场和受众研究开始:

```
/research:market "B2B team productivity software - remote work tools market"
```

```
/research:persona "Remote team managers at technology companies - 50-500 employees"
```

```
/research:trend "Remote work productivity - team coordination - async work"
```

### 步骤 2: SEO 关键词研究

使用 SEO 命令建立关键词基础:

```
/seo:keywords "remote team productivity"
```

```
/seo:keywords "team coordination software"
```

```
/seo:keywords "deep work for teams"
```

将关键词分组为主题集群:
- 集群 1: 远程团队生产力
- 集群 2: 团队专注时间
- 集群 3: 无需会议的协调

### 步骤 3: 竞争对手内容分析

分析竞争对手内容:

```
/seo:competitor "rescuetime.com"
```

识别:
- 他们涵盖哪些主题
- 我们可以填补的内容空白
- 他们排名的关键词

### 步骤 4: 创建内容日历

使用营销活动日历进行内容规划:

```
/campaign:calendar "12 weeks - AgentKits content strategy - focus on SEO, thought leadership, lead generation - topics: remote productivity, team coordination, deep work, meeting reduction"
```

### 步骤 5: 定义内容类型

按漏斗阶段规划内容:

**TOFU (认知阶段):**
- 博客文章(专注于 SEO)
- 社交媒体内容
- 思想领导力

**MOFU (考虑阶段):**
- 对比指南
- 操作指南内容
- 案例研究

**BOFU (决策阶段):**
- 产品演示
- ROI 计算器
- 客户推荐

### 步骤 6: 创建支柱内容策略

规划支柱页面策略:

```
/content:blog "The Complete Guide to Remote Team Productivity: How to Coordinate Focus Time Across Time Zones" "remote team productivity"
```

集群内容(链接到支柱):
1. 如何安排团队专注时间
2. 在不失去协同的情况下减少会议
3. 异步沟通最佳实践
4. 远程团队中的深度工作
5. 团队生产力跟踪

### 步骤 7: 内容制作工作流

为每个内容使用内容命令:

**博客文章制作:**
```
1. /seo:keywords "topic" - 研究关键词
2. /content:blog "title" "keyword" - 创建文章
3. /seo:optimize "post" "keyword" - 优化
4. 使用 seo-specialist 代理审查
5. 使用 brand-voice-guardian 代理审查
```

**社交内容制作:**
```
1. /content:social "topic" "linkedin" - LinkedIn 帖子
2. /content:social "topic" "twitter" - Twitter 推文串
3. 使用 conversion-optimizer 代理审查
```

### 步骤 8: 邮件整合

创建邮件序列以培育内容消费者:

```
/sequence:nurture "AgentKits" "blog readers who downloaded guide"
```

### 步骤 9: 内容分发计划

使用社交命令进行分发:

```
/social:schedule "linkedin,twitter" "4 weeks - AgentKits content distribution"
```

### 步骤 10: 衡量框架

设置内容分析:

```
/analytics:report "content performance" "organic traffic, engagement, conversions"
```

要跟踪的关键指标:
- 按内容的自然流量
- 页面停留时间
- 每个内容的转化率
- 来自内容的潜在客户质量

### 下一步

告诉他们:
- 他们已拥有完整的内容策略
- 从随机发布到系统化增长
- **下一步:** `/training-zh:start-2-3` - 生成营销文案
- 在保持质量的同时扩大文案制作规模

## 关键教学要点
- 策略将内容从随机转变为系统化
- `/research:*` 命令构建基础
- `/seo:keywords` 识别机会
- 支柱 + 集群 = SEO 强大引擎
- 内容制作遵循可重复的工作流
- 衡量确保问责制

---

关键输出规则:
- 仅输出原始翻译的 markdown 内容
- 不要用 ```markdown 代码围栏包装输出
- 不要添加任何前言、解释或评论
- 直接从翻译内容开始
- 输出将直接保存到 .md 文件