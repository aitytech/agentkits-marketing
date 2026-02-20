# /training-zh:start-1-3 - 第一批营销任务

## 语言与质量标准

**关键要求**：使用与用户相同的语言进行回复。如果是越南语,用越南语回复。如果是西班牙语,用西班牙语回复。

---

## Claude 的指导说明

引导学生完成真实的营销任务:使用实际系统命令进行多渠道文案创作、竞争分析和内容规划。

### 课程概述

---

**模块 1.3:第一批营销任务**

现在让我们开始真正的营销工作。你将完成每个营销人员定期执行的三个常见任务。

**时长:**约 30 分钟

---

### 任务 1:多渠道文案生成

使用内容命令为多个渠道生成文案:

**LinkedIn 帖子:**
```
/content:social "AgentKits launch announcement - team productivity coordination for remote teams" "linkedin"
```

**博客文章:**
```
/content:blog "How Remote Teams Can Coordinate Focus Time Without Endless Meetings" "remote team coordination"
```

**电子邮件:**
```
/content:email "product announcement" "existing subscribers"
```

一起审查输出结果。展示迭代过程:

```
Make the LinkedIn post more educational - focus on the problem of coordinating deep work time
```

### 任务 2:竞争分析

使用竞争分析命令:

```
/competitor:deep "RescueTime - personal time tracking and productivity software"
```

解释 `researcher` 代理分析的内容:
- 目标受众
- 关键功能和定位
- 定价模式
- 优势和劣势
- 市场机会

进行后续提问:
```
Based on this analysis, what's AgentKits's biggest competitive advantage?
```

### 任务 3:内容日历

使用营销活动日历命令:

```
/campaign:calendar "4 weeks - AgentKits product launch - focus on remote work productivity, team collaboration, deep work"
```

审查生成的日历:
- 带有 SEO 关键词的博客文章主题
- 按平台划分的社交媒体主题
- 电子邮件通讯计划
- 每篇内容的内容目标

### 步骤 4:扩展某个内容

选择一个主题并使用内容命令进行扩展:

```
/content:blog "The Complete Guide to Team Focus Time: How Remote Teams Can Coordinate Deep Work" "team focus time"
```

### 步骤 5:SEO 优化

使用 SEO 命令进行优化:

```
/seo:keywords "remote team productivity"
```

然后:
```
/seo:optimize "the blog post we just created" "team focus time"
```

### 步骤 6:使用专家进行审查

使用审查员代理(说明这些将在稍后详细介绍):

```
Review the blog post from three perspectives:
1. Brand Voice Guardian - does it match our voice?
2. SEO Specialist - is it optimized for search?
3. Conversion Optimizer - will it drive action?
```

### 庆祝成果

指出他们刚刚完成的工作:
- 使用 `/content:*` 命令生成多渠道文案
- 使用 `/competitor:deep` 进行竞争分析
- 使用 `/campaign:calendar` 创建内容日历
- 使用 `/seo:keywords` 进行 SEO 关键词研究
- 完成带有 SEO 优化的完整博客文章

### 下一步

告诉他们:
- **下一步:** `/training-zh:start-1-4` - 在营销中使用代理
- 他们将了解 18 个专业代理以及如何利用它们

## 重点教学要点
- 真实命令处理真实营销任务
- `/content:*` 命令创建特定平台的内容
- `/competitor:deep` 提供竞争情报
- `/campaign:calendar` 创建内容日历
- `/seo:*` 命令处理搜索优化
- 始终提供上下文(品牌、受众、目标)

---

关键输出规则:
- 仅输出原始翻译的 markdown 内容
- 不要用 ```markdown 代码围栏包装输出
- 不要添加任何前言、解释或评论
- 直接从翻译的内容开始
- 输出将直接保存到 .md 文件