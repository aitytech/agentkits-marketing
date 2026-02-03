# /training-zh:start-1-2 - 使用营销文件

## 语言和质量标准

**关键**:使用与用户相同的语言回复。如果是越南语,用越南语回复。如果是西班牙语,用西班牙语回复。

---

## Claude 的指导说明

教授文件组织、命令使用以及营销项目的文档参考。

### 课程概述

---

**模块 1.2:使用营销文件**

作为营销人员,您会使用多种资产类型:活动简报、内容草稿、研究文档、分析报告。让我们掌握高效组织和管理它们的方法。

**时长:** 约 25 分钟

---

### 步骤 1:查看文档结构

向他们展示 docs 文件夹:

```
List all files in docs/
```

解释每个文档文件:
- `brand-guidelines.md` - 品牌标准模板
- `content-style-guide.md` - 写作标准、CTA、格式
- `campaign-playbooks.md` - 经过验证的活动模板
- `channel-strategies.md` - 特定平台的策略
- `analytics-setup.md` - 追踪和归因
- `usage-guide.md` - 完整系统参考

### 步骤 2:探索活动手册

阅读活动手册:

```
Read docs/campaign-playbooks.md
```

解释手册类型:
- 产品发布手册
- 潜在客户生成手册
- 品牌认知手册
- 留存手册
- 活动推广手册

### 步骤 3:练习内容命令

指导他们使用内容创建命令:

**博客文章:**
```
/content:blog "5 Ways Remote Teams Can Improve Coordination" "remote team productivity"
```

**社交媒体内容:**
```
/content:social "Team coordination tips for remote managers" "linkedin"
```

**电子邮件文案:**
```
/content:email "welcome" "trial users for AgentKits"
```

### 步骤 4:练习搜索命令

使用 grep/find 或询问 Claude 来教授搜索技巧:

```
Find all files that mention "lead scoring"
```

```
Search for files containing "conversion rate"
```

### 步骤 5:批量内容创建

演示一次创建多个资产:

```
Create multi-channel content for AgentKits launch:
1. LinkedIn announcement post
2. Twitter thread (5 tweets)
3. Email subject lines (5 A/B variations)
4. Google Ads headlines (5 variations, max 30 chars)
```

### 步骤 6:交叉参考样式指南

展示如何使用内容样式指南:

```
Read docs/content-style-guide.md
```

指出:
- 标题公式(4-U 框架)
- CTA 模式
- 可读性标准
- SEO 写作指南

### 步骤 7:快速参考命令

分享基本命令模式:

**活动命令:**
- `/campaign:plan` - 创建活动计划
- `/campaign:brief` - 生成创意简报
- `/campaign:analyze` - 分析表现
- `/campaign:calendar` - 内容日历

**内容命令:**
- `/content:blog` - SEO 博客文章
- `/content:social` - 特定平台的社交内容
- `/content:email` - 电子邮件文案
- `/content:landing` - 落地页文案
- `/content:ads` - 广告文案

### 接下来

告诉他们:
- 他们现在知道如何浏览营销工具包文档
- 命令按营销功能组织
- **下一步:** `/training-zh:start-1-3` - 首次营销任务(内容生成、分析)

## 关键教学要点
- 良好的文档组织使一切更快
- 六个关键文档涵盖品牌、内容、活动、渠道、分析、使用
- 命令按功能组织(campaign、content、seo 等)
- 交叉参考文档以保持一致性
- 批量操作可节省大量时间

---

关键输出规则:
- 仅输出原始翻译的 markdown 内容
- 不要用 ```markdown 代码围栏包装输出
- 不要添加任何前言、解释或评论
- 直接从翻译内容开始
- 输出将直接保存到 .md 文件