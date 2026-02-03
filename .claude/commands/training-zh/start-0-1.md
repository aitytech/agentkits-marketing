# /training-zh:start-0-1 - 安装与设置

## 语言和质量标准

**关键要求**：使用与用户相同的语言回应。如果是越南语,用越南语回应。如果是西班牙语,用西班牙语回应。

---

## Claude 的指令

指导学生验证他们的 Claude Code 安装和营销工具包设置。

### 课程概述

说类似这样的话:

---

**模块 0.1: 安装与设置**

在我们深入了解营销工作流程之前,让我们确保一切都已正确设置。

---

### 步骤 1: 验证 Claude Code

要求他们确认:
- 他们在 Claude Code 内运行(而不是网页聊天)
- 他们拥有 Claude Pro 或 Max 订阅

如果他们不确定,解释:
- Claude Code 是终端/CLI 版本
- 它可以直接读取、写入和编辑文件
- 它与 claude.ai 网页聊天不同

### 步骤 2: 检查营销工具包文件

与学生一起运行这些检查(实际执行它们):

```
Show me the contents of this directory
```

他们应该看到:
- `.claude/` 文件夹,包含 agents、commands、skills、workflows
- `docs/` 文件夹,包含文档
- `CLAUDE.md` 文件(项目记忆)
- `README.md` 文件

### 步骤 3: 探索系统结构

向他们展示营销工具包结构:

```
List all folders in .claude/
```

解释每个组件:
- `agents/` - 18 个专业营销代理
- `commands/` - 76 个按功能组织的斜杠命令
- `skills/` - 营销领域知识
- `workflows/` - 核心营销、销售和 CRM 工作流程

### 步骤 4: 探索可用命令

向他们展示命令类别:

```
List all folders in .claude/commands/
```

解释关键命令组:
- `campaign/` - `/campaign:plan`、`/campaign:brief`、`/campaign:analyze`
- `content/` - `/content:blog`、`/content:social`、`/content:email`、`/content:landing`
- `seo/` - `/seo:keywords`、`/seo:audit`、`/seo:optimize`
- `analytics/` - `/analytics:roi`、`/analytics:funnel`、`/analytics:report`
- `sales/` - `/sales:pitch`、`/sales:outreach`、`/sales:battlecard`

### 步骤 5: 测试您的第一个命令

让他们尝试一个真实命令:

```
/brainstorm "What are the best marketing channels for a B2B SaaS product?"
```

庆祝他们的第一次命令执行!

### 步骤 6: 查看文档

向他们展示关键文档:

```
Read docs/usage-guide.md (first 50 lines)
```

解释:
- `docs/usage-guide.md` - 完整系统参考
- `docs/brand-guidelines.md` - 品牌标准模板
- `docs/content-style-guide.md` - 写作标准
- `docs/campaign-playbooks.md` - 活动模板
- `docs/channel-strategies.md` - 平台策略
- `docs/analytics-setup.md` - 跟踪配置

### 接下来是什么

告诉他们:
- **下一课:** `/training-zh:start-0-2` - 您的第一个营销任务
- 他们刚刚验证了设置并运行了第一个命令!
- 课程的其余部分就是这样进行的

## 关键教学要点
- Claude Code 直接处理文件
- 营销工具包拥有 18 个代理、76 个命令和全面的文档
- 每节课都涉及实际命令执行
- 验证操作确实成功(读取文件)

---

关键输出规则:
- 仅输出原始翻译的 markdown 内容
- 不要用 ```markdown 代码围栏包装输出
- 不要添加任何序言、解释或评论
- 直接从翻译内容开始
- 输出将直接保存到 .md 文件