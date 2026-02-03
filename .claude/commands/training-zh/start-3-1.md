---
description: /training-zh:start-3-1 - CRO 基础知识
argument-hint:
---

# 模块 3，第 1 课：CRO 基础知识

## 欢迎学习转化率优化

在本模块中，您将掌握 AgentKits Marketing 中新增的 CRO（转化率优化）技能。这些技能帮助您系统性地提高所有营销资产的转化率。

## 学习目标

在本课结束时，您将能够：
1. 理解 6 大 CRO 技能类别
2. 了解何时使用每个 CRO 命令
3. 将心理学原理应用于转化优化
4. 创建您的第一个 CRO 审计

---

## CRO 技能套件

AgentKits Marketing 包含 7 个专业的 CRO 技能：

| 技能 | 用途 | 命令 |
|-------|---------|---------|
| `page-cro` | 着陆页、首页、定价页 | `/cro:page` |
| `form-cro` | 潜在客户获取、联系、演示表单 | `/cro:form` |
| `popup-cro` | 模态框、浮层、退出意图弹窗 | `/cro:popup` |
| `signup-flow-cro` | 注册、试用注册流程 | `/cro:signup` |
| `onboarding-cro` | 注册后的激活流程 | `/cro:onboarding` |
| `paywall-upgrade-cro` | 应用内付费墙、升级 | `/cro:paywall` |
| `ab-test-setup` | 实验设计 | `/test:ab-setup` |

---

## CRO 框架

每个 CRO 分析都遵循以下层次结构：

### 1. 价值主张（最高影响）
- 访问者能否在 5 秒内理解您提供的内容？
- 是否清晰传达了好处，而不仅仅是功能？

### 2. 标题有效性
- 是否传达了核心价值？
- 是否具体且可信？

### 3. CTA 优化
- 是否有一个清晰的主要操作？
- 是否在首屏、可见且有吸引力？

### 4. 信任信号
- 社会证明是否靠近决策点？
- 安全徽章是否可见？

### 5. 摩擦减少
- 表单字段是否最少化？
- 后续步骤是否清晰？

---

## 练习 1：审计 AgentKits 的着陆页

让我们将 CRO 原则应用到 AgentKits 的着陆页。

### 当前状态（假设）

**标题：** "团队生产力软件"
**CTA：** "了解更多"
**表单：** 7 个字段

### 您的任务

使用 `/cro:page` 命令创建 CRO 审计：

```bash
/cro:page "Analyze AgentKits's landing page: Headline 'Team Productivity Software', CTA 'Learn More', 7-field form. Target: remote team managers."
```

### 预期输出

审计应识别出：
- 通用标题（不具体或缺乏利益导向）
- 弱 CTA（"了解更多" vs 行动导向）
- 高摩擦（7 个字段太多）

---

## 练习 2：应用心理学

`marketing-psychology` 技能包含 70 多个心理模型。尝试：

```bash
/marketing:psychology "How can we use loss aversion and social proof to improve AgentKits's trial signup rate?"
```

### CRO 的关键模型

| 模型 | 应用 |
|-------|-------------|
| 损失厌恶 | "不要错过"框架 |
| 社会证明 | "加入 10,000+ 团队" |
| 锚定效应 | 首先展示高价计划 |
| 稀缺性 | 限量名额或限时 |
| 互惠原则 | 在请求前提供免费价值 |

---

## 实践作业

创建一个完整的 CRO 改进计划：

1. **运行页面审计：**
   ```bash
   /cro:page "AgentKits homepage audit"
   ```

2. **优化表单：**
   ```bash
   /cro:form "Reduce AgentKits's 7-field trial signup form"
   ```

3. **设计 A/B 测试：**
   ```bash
   /test:ab-setup "Test new headline vs current for AgentKits"
   ```

将您的工作保存到：
```
training/exercises/markit/cro/
├── landing-page-audit.md
├── form-optimization.md
└── ab-test-plan.md
```

---

## 检查点

在继续之前，验证您是否能够：
- [ ] 识别 6 大 CRO 技能类别
- [ ] 运行 `/cro:page` 审计
- [ ] 将心理学原理应用于 CRO
- [ ] 创建 A/B 测试假设

---

## 下一课

继续学习模块 3，第 2 课：表单和注册优化

```bash
/training-zh:start-3-2