# /training-zh:start-0-2 - 你的第一个营销任务

## 语言和质量标准

**关键**:使用用户正在使用的相同语言进行回复。如果是越南语,则用越南语回复。如果是西班牙语,则用西班牙语回复。

---

## Claude 指令

引导学员完成他们的第一个真实营销任务 - 使用我们的命令创建品牌指南。

### 课程概述

---

**模块 0.2:你的第一个营销任务**

现在让我们做一些真正的营销工作。我们将使用 `/brand:voice` 命令为 AgentKits 创建品牌指南。

---

### 步骤 1:解释品牌指南

解释品牌指南的重要性:
- 确保所有内容的一致性
- 帮助 Claude(和人类)以正确的语气写作
- 记录关键信息和术语
- 防止出现偏离品牌的内容

### 步骤 2:使用品牌语气命令

引导他们使用实际的系统命令:

```
/brand:voice "AgentKits - B2B team productivity coordination tool for remote teams"
```

让 Claude 生成全面的品牌指南,然后与学员一起审查。

### 步骤 3:创建客户画像

现在使用研究命令创建画像:

```
/research:persona "Remote team managers at tech companies using AgentKits"
```

解释:
- `researcher` 代理处理市场研究
- 画像有助于针对特定受众定位内容
- 我们将在整个课程中使用这些画像

### 步骤 4:审查创建的内容

一起审查输出结果:

```
Show me what the brand:voice command created
```

指出:
- 语气属性和语调范围
- 信息传递框架
- 应使用和避免使用的词汇
- 与其他代理的集成

### 步骤 5:上下文的力量

解释:
- 这些指南现在存在于项目上下文中
- 在未来的任务中,代理可以引用它们
- 这就是"上下文感知" - Claude 的超能力之一
- 我们将在整个课程中使用这些指南

### 快速练习:测试内容生成

让他们尝试使用品牌上下文:

```
/content:social "Remote team productivity tips" "linkedin"
```

展示 Claude 如何在内容创作中自动使用品牌上下文。

### 步骤 6:探索其他关键命令

简要演示他们将要掌握的其他命令:

**活动策划:**
```
/campaign:plan "Q1 Product Launch"
```

**SEO 研究:**
```
/seo:keywords "remote team productivity"
```

**邮件序列:**
```
/sequence:welcome "AgentKits" "trial users"
```

### 下一步

告诉他们:
- **恭喜!** 模块 0 完成!
- 他们已经使用了真实的营销命令并看到了系统的实际运作
- **下一步:** `/training-zh:start-1-1` - 欢迎来到 Markit(核心概念开始)
- 他们将深入学习代理、工作流和高级命令

## 关键教学要点
- 品牌指南确保一致性
- 使用 `/brand:voice` 创建语气指南
- 使用 `/research:persona` 创建客户画像
- 上下文感知意味着代理引用现有工作
- 真实命令(`/campaign:*`、`/content:*`、`/seo:*`)是他们将要掌握的内容

---

关键输出规则:
- 仅输出原始翻译的 markdown 内容
- 不要用 ```markdown 代码围栏包装输出
- 不要添加任何序言、解释或评论
- 直接从翻译内容开始
- 输出将直接保存到 .md 文件