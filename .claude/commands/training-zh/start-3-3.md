---
description: /training-zh:start-3-3 - 弹窗与新手引导 CRO
argument-hint:
---

# 模块 3,课程 3:弹窗与新手引导 CRO

## 转化访客和激活用户

本课程涵盖两个关键的转化节点:通过弹窗捕获访客,以及通过新手引导激活新注册用户。

## 学习目标

完成本课程后,你将能够:
1. 设计高转化率的弹窗而不会惹恼用户
2. 优化注册后的新手引导流程
3. 识别并加速"啊哈时刻"
4. 创建付费墙和升级页面

---

## 弹窗 CRO

### 何时弹窗有效

| 类型 | 触发条件 | 最适用于 |
|------|---------|----------|
| 退出意图 | 鼠标离开视口 | 潜在客户捕获,挽救放弃者 |
| 延时触发 | 页面停留 30-60 秒 | 参与度高的访客 |
| 滚动触发 | 滚动深度 50-70% | 内容互动 |
| 点击触发 | 用户操作 | 特定 CTA |

### 何时弹窗失效

- 页面加载时立即弹出
- 没有清晰的价值主张
- 难以关闭
- 每次访问都显示同样的弹窗

---

## 弹窗设计练习

使用 `/cro:popup` 来设计有效的弹窗:

```bash
/cro:popup "Design exit-intent popup for AgentKits blog. Goal: capture emails for 'Remote Team Productivity Guide' lead magnet."
```

### 优秀弹窗的要素

1. **清晰的价值:** 他们会得到什么
2. **最少字段:** 仅需邮箱
3. **易于关闭:** 可见的 X 按钮
4. **移动端友好:** 拇指可触及的 CTA
5. **频率限制:** 每个会话仅一次

---

## 新手引导 CRO

### 激活方程式

**啊哈时刻** = 用户首次体验到核心价值的时刻

对于 AgentKits:"当团队成员看到团队的专注时间表并屏蔽无干扰时间时"

### 新手引导模式

| 模式 | 最适用于 |
|---------|----------|
| 设置向导 | 需要配置的复杂产品 |
| 清单列表 | 功能丰富的应用 |
| 交互式引导 | UI 密集型产品 |
| 模板库 | 创意工具 |
| 示例项目 | 基于项目的工具 |

---

## 新手引导练习

使用 `/cro:onboarding` 来优化 AgentKits 的激活:

```bash
/cro:onboarding "Design onboarding for AgentKits. Aha moment: seeing team focus schedule. Current activation: 15% of trials. Goal: 40%."
```

### 关键问题

1. 获得价值所需的最少设置是什么?
2. 能否在设置前展示价值?
3. 哪个操作最能预测转化?
4. 用户能多快到达啊哈时刻?

---

## 付费墙与升级 CRO

对于免费增值和试用产品,升级页面至关重要。

### 付费墙触发条件

| 触发条件 | 场景 |
|---------|---------|
| 功能限制 | 用户尝试高级功能 |
| 使用限制 | 达到免费层级限制 |
| 试用到期 | 基于时间的试用结束 |
| 升级提示 | 在价值时刻之后 |

### 付费墙练习

```bash
/cro:paywall "Design upgrade screen for AgentKits. Trigger: user hits 5-user limit on free tier. Goal: convert to Team plan ($12/user)."
```

---

## 实践作业

完成以下 AgentKits 练习:

### 1. 退出意图弹窗
```bash
/cro:popup "Exit intent for AgentKits pricing page - capture leads who leave without trial"
```
保存到:`training/exercises/markit/cro/exit-popup.md`

### 2. 新手引导流程
```bash
/cro:onboarding "5-step onboarding to reach Aha moment in under 3 minutes"
```
保存到:`training/exercises/markit/cro/onboarding-flow.md`

### 3. 升级页面
```bash
/cro:paywall "Upgrade screen when free user invites 6th team member"
```
保存到:`training/exercises/markit/cro/upgrade-screen.md`

---

## 完整 CRO 漏斗

现在你可以优化完整的转化漏斗:

```
访客 → 页面 CRO → 表单 CRO → 注册 CRO
     ↓
  弹窗 CRO (捕获放弃者)
     ↓
新用户 → 新手引导 CRO → 激活
     ↓
免费用户 → 付费墙 CRO → 付费客户
```

每个技能处理特定阶段。

---

## 检查点

完成模块 3 之前,验证你能够:
- [ ] 设计具有适当触发条件的有效弹窗
- [ ] 创建加速啊哈时刻的新手引导流程
- [ ] 为免费增值转化构建升级页面
- [ ] 映射完整的 CRO 漏斗

---

## 模块 3 完成!

你已掌握 CRO 技能。你的交付成果:

```
training/exercises/markit/cro/
├── landing-page-audit.md
├── form-audit.md
├── optimized-form.md
├── form-ab-test.md
├── exit-popup.md
├── onboarding-flow.md
└── upgrade-screen.md
```

---

## 下一步:高级技能

继续学习模块 4:增长与发布策略

```bash
/training-zh:start-4-1
```

或探索其他新技能:
- `/marketing:psychology` - 70+ 心理模型
- `/marketing:ideas` - 140 个营销创意
- `/growth:launch` - 发布策略
- `/pricing:strategy` - 定价设计

---