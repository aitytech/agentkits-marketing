# /training-zh:start-1-6 - 项目记忆 (CLAUDE.md)

## 语言和质量标准

**关键要求**：使用用户正在使用的相同语言进行回复。如果是越南语，则用越南语回复。如果是西班牙语，则用西班牙语回复。

---

## 给 Claude 的指令

向学员讲解 CLAUDE.md 以及如何维护持久的项目上下文。

### 课程概述

---

**模块 1.6：项目记忆**

CLAUDE.md 就像是为 Claude 提供一份持久的简报文档。每次你在这个项目上工作时，Claude 都会首先读取这个文件并应用这些指南。

**时长：** 约 20 分钟

---

### 步骤 1：展示当前的 CLAUDE.md

读取项目的 CLAUDE.md：

```
Read the CLAUDE.md file in this project
```

逐步讲解每个部分：
- 角色与职责
- 工作流程（营销、销售、CRM）
- 营销代理
- 技能目录
- 命令分类
- 文档管理

### 步骤 2：解释其工作原理

当 CLAUDE.md 存在时，Claude 会自动：
- 知道哪些代理可用
- 理解工作流程结构
- 引用适当的命令
- 遵循营销规则
- 使用正确的技能

你不需要每次都提醒 Claude - 这是自动的！

### 步骤 3：CLAUDE.md 的关键部分

解释关键部分：

**工作流程：**
```markdown
### Core Workflows
- **Marketing:** `./.claude/workflows/primary-workflow.md`
- **Sales:** `./.claude/workflows/sales-workflow.md`
- **CRM:** `./.claude/workflows/crm-workflow.md`
```

**代理映射：**
```markdown
### Core Marketing Agents
- `attraction-specialist` - TOFU (SEO, landing pages)
- `lead-qualifier` - Intent detection, scoring
- `email-wizard` - Sequences, automation
...
```

**命令分类：**
```markdown
### Campaign Management
- `/campaign:plan`, `/campaign:brief`, `/campaign:analyze`

### Content Creation
- `/content:blog`, `/content:social`, `/content:email`
...
```

### 步骤 4：测试上下文感知

在不提及品牌指南的情况下，询问：

```
Write a short LinkedIn post about remote team productivity
```

指出输出如何自动匹配：
- 来自指南的品牌语调
- 目标人物角色语言
- 关键信息框架

### 步骤 5：理解工作流程引用

展示如何引用工作流程：

```
Read .claude/workflows/primary-workflow.md
```

解释：
- 营销管道阶段
- 每个阶段的代理职责
- 质量关卡和检查点

### 步骤 6：营销规则

展示营销规则：

```
Read .claude/workflows/marketing-rules.md
```

解释关键规则：
- 令牌效率
- 多语言支持
- 质量标准
- 技能激活

### 步骤 7：项目上下文的好处

总结好处：
- 自动保持一致的品牌语调
- 正确的代理选择
- 正确的命令使用
- 工作流程合规性
- 质量标准执行

### 步骤 8：维护技巧

解释持续维护：
- 随着新活动的启动进行更新
- 添加成功内容的经验教训
- 引用新文档
- 保持代理列表的最新状态

### 下一步

告诉他们：
- CLAUDE.md 确保了一致性而无需重复
- **模块 1 即将完成！**
- **下一步：** `/training-zh:start-1-7` - 导航与搜索
- 在高级应用之前的最后技能

## 关键教学要点
- CLAUDE.md 为 Claude 提供持久的上下文
- 包括工作流程、代理、命令、规则
- Claude 自动应用于所有工作
- 工作流程定义营销流程
- 营销规则确保质量标准

---

关键输出规则：
- 仅输出原始翻译的 markdown 内容
- 不要将输出包装在 ```markdown 代码围栏中
- 不要添加任何前言、解释或评论
- 直接从翻译内容开始
- 输出将直接保存到 .md 文件