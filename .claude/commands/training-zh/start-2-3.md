# /training-zh:start-2-3 - 生成营销文案

## 语言和质量标准

**关键要求**:使用与用户相同的语言回复。如果是越南语,则用越南语回复。如果是西班牙语,则用西班牙语回复。

---

## Claude 指令

教授跨渠道大批量文案生成,同时保持质量。

### 课程概述

---

**模块 2.3:生成营销文案**

学习大规模创建专业营销文案:电子邮件、广告、社交媒体、落地页。质量 + 速度。

**时长:** 约35分钟

---

### 步骤 1:欢迎邮件序列

使用序列命令:

```
/sequence:welcome "AgentKits" "trial users - remote team managers"
```

查看生成的序列:
- 邮件 1(第0天):欢迎 + 快速开始
- 邮件 2(第2天):功能亮点
- 邮件 3(第5天):社会证明 + 技巧
- 邮件 4(第9天):价值强化
- 邮件 5(第13天):试用结束 + 升级

每封邮件包括:
- 用于 A/B 测试的主题行变体
- 预览文本
- 正文
- 清晰的行动号召

### 步骤 2:社交媒体内容

使用内容命令创建社交媒体内容:

**LinkedIn:**
```
/content:social "Team coordination tips for remote managers - AgentKits launch" "linkedin"
```

**Twitter:**
```
/content:social "5 ways remote teams waste time coordinating - thread" "twitter"
```

### 步骤 3:博客内容

使用博客命令,关注 SEO:

```
/content:blog "How Remote Teams Can Coordinate Focus Time Without Endless Meetings" "remote team focus time"
```

然后优化:
```
/seo:optimize "the blog post" "remote team focus time"
```

### 步骤 4:付费广告文案

使用广告文案命令:

**Google Ads:**
```
/content:ads "google" "team productivity software - drive signups"
```

**Meta Ads:**
```
/content:ads "meta" "remote team coordination - awareness campaign"
```

**LinkedIn Ads:**
```
/content:ads "linkedin" "B2B productivity tool - lead generation"
```

### 步骤 5:落地页文案

使用落地页命令:

```
/content:landing "14-day free trial of AgentKits" "remote team managers at tech companies"
```

这将生成:
- 主视觉区(标题、副标题、行动号召)
- 问题区
- 解决方案区
- 功能及优势
- 社会证明区
- 定价概述
- 常见问题区
- 最终行动号召

### 步骤 6:快速内容 vs 优质内容

解释两种内容模式:

**快速内容(`/content:fast`):**
- 快速周转
- 适用于创意构思
- 初稿
- 大批量需求

```
/content:fast "Quick LinkedIn post about team focus time benefits"
```

**优质内容(`/content:good`):**
- 深入研究
- 多个变体
- 可直接发布
- 战略性内容

```
/content:good "Detailed blog post about the science of team focus time with research citations"
```

### 步骤 7:内容增强

使用增强命令:

```
/content:enhance "make the copy more conversational and add urgency"
```

```
/content:cro "optimize for higher conversion rate"
```

### 步骤 8:A/B 测试变体

创建测试变体:

```
Create A/B test variations for the landing page:

Headlines (5 angles):
1. Outcome-focused
2. Problem-focused
3. Question
4. How-to
5. Social proof

CTAs (3 variations):
1. Start Free Trial
2. Try It Free
3. Get Started Now
```

### 步骤 9:按用户画像个性化

创建特定用户画像的变体:

**针对 Solo Sam:**
```
/content:email "product announcement" "technical team managers - efficiency focus"
```

**针对 Startup Sam:**
```
/content:email "product announcement" "startup founders - growth and scale focus"
```

### 步骤 10:质量审核

使用专家代理审核所有内容:

```
Review all content we created with:
1. brand-voice-guardian - brand consistency
2. conversion-optimizer - conversion potential
3. seo-specialist - SEO optimization

Score each piece and identify top improvements needed.
```

### 下一步

告诉他们:
- 他们在一次会话中生成了完整的文案库
- 通常需要数周的工作
- **下一步:** `/training-zh:start-2-4` - 分析活动数据
- 将数据转化为可执行的洞察

## 关键教学要点
- `/content:*` 命令处理所有内容类型
- `/sequence:*` 创建邮件自动化
- 草稿使用快速模式,最终稿使用优质模式
- `/content:cro` 优化转化率
- 按用户画像个性化以提高相关性
- 始终使用专家代理进行审核

---

关键输出规则:
- 仅输出原始翻译的 markdown 内容
- 不要用 ```markdown 代码块包裹输出
- 不要添加任何前言、解释或评论
- 直接从翻译内容开始
- 输出将直接保存到 .md 文件