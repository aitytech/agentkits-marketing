# /training-zh:start-2-4 - 分析营销活动数据

## 语言和质量标准

**重要提示**:使用用户正在使用的相同语言进行回复。如果是越南语,则用越南语回复。如果是西班牙语,则用西班牙语回复。

---

## Claude 指令

教授数据分析、洞察提取和使用分析命令进行高管报告。

### 课程概述

---

**模块 2.4:分析营销活动数据**

数据分析通常很耗时。让我们掌握如何将数据转化为可操作的洞察和有说服力的报告。

**时长:**约 35 分钟

---

### 步骤 1:ROI 分析

使用分析命令:

```
/analytics:roi "Q1 campaign - $50K spend across LinkedIn, Google, Email"
```

查看 ROI 计算:
- 各渠道总支出
- 归因收入
- 各渠道 ROAS
- 每次获客成本

### 步骤 2:漏斗分析

分析转化漏斗:

```
/analytics:funnel "trial signup - visitor to trial to paid conversion"
```

查看漏斗指标:
- 各来源流量
- 各阶段转化率
- 流失点
- 优化机会

### 步骤 3:绩效报告

生成绩效报告:

**周报:**
```
/report:weekly "AgentKits" "current week"
```

**月报:**
```
/report:monthly "AgentKits" "current month"
```

### 步骤 4:渠道绩效

按渠道分析:

```
/analytics:report "channel performance" "LinkedIn, Google, Email, Organic"
```

创建渠道对比:
- 流量贡献
- 线索质量
- 转化率
- 成本效率

### 步骤 5:内容绩效

分析内容有效性:

```
/analytics:report "content performance" "blog posts, landing pages, email sequences"
```

关键指标:
- 各内容的流量
- 互动(时长、滚动、分享)
- 转化率
- 线索质量

### 步骤 6:线索质量分析

使用线索评分进行分析:

```
/crm:score "analyze lead quality by source and campaign"
```

查看:
- 各来源的 MQL 率
- 各营销活动的 SQL 转化率
- 平均线索评分趋势

### 步骤 7:执行摘要

创建高管就绪摘要:

```
Create an executive summary of Q1 marketing performance:

STRUCTURE:
1. Headline metrics (vs targets)
2. Top 3 wins with data
3. Top 3 challenges with impact
4. Channel performance snapshot (table)
5. Key learnings (3 insights)
6. Q2 recommendations (prioritized)
7. Budget request with justification

Keep it to ONE PAGE maximum.
```

### 步骤 8:数据到行动框架

教授洞察框架:

```
For each finding, document:

1. OBSERVATION: What does the data show?
2. INSIGHT: Why is this happening?
3. IMPLICATION: What does it mean?
4. RECOMMENDATION: What should we do?
5. EXPECTED IMPACT: What will change?
```

### 步骤 9:运营清单

使用分析清单:

```
/checklist:analytics-monthly "current month" "AgentKits"
```

查看月度分析任务:
- 数据质量检查
- 平台验证
- 报告准确性
- 归因验证

### 步骤 10:报告模板

解释可重用报告:

```
Weekly Report Workflow:
1. /analytics:roi "campaign" - Calculate ROI
2. /analytics:funnel "funnel" - Analyze funnel
3. /report:weekly "client" "week" - Generate report

Monthly Report Workflow:
1. /analytics:report "all channels" - Full analysis
2. /crm:score "lead quality" - Lead analysis
3. /report:monthly "client" "month" - Generate report
```

### 下一步

告诉他们:
- 他们现在可以将数据转化为决策
- 制作高管真正会阅读的报告
- **下一步:** `/training-zh:start-2-5` - 竞争分析
- 研究竞争对手并找到优势

## 关键教学要点
- `/analytics:*` 命令分析绩效
- `/report:*` 命令生成报告
- ROI 和漏斗分析是基础
- 执行摘要必须简明扼要
- 数据到行动框架确保问责制

---

重要输出规则:
- 仅输出原始翻译的 markdown 内容
- 不要用 ```markdown 代码块包裹输出
- 不要添加任何前言、解释或评论
- 直接从翻译内容开始
- 输出将直接保存到 .md 文件