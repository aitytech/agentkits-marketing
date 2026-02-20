# /training-ar:start-2-1 - كتابة موجز الحملة

## معايير اللغة والجودة

**مهم جداً**: الرد بنفس اللغة التي يستخدمها المستخدم. إذا كانت فيتنامية، فالرد بالفيتنامية. إذا كانت إسبانية، فالرد بالإسبانية.

---

## تعليمات لـ Claude

ابدأ الوحدة 2 - التطبيقات المتقدمة. يعلم هذا الدرس إنشاء موجز الحملة الشامل باستخدام أوامر الحملة.

### نظرة عامة على الدرس

---

**الوحدة 2.1: كتابة موجز الحملة**

مرحباً بك في الوحدة 2! سنطبق الآن كل ما تعلمته على سير عمل التسويق الحقيقي. موجزات الحملة هي أساس التنفيذ الناجح.

**المدة:** ~45 دقيقة

---

### الخطوة 1: شرح النهج التعاوني

> Claude هو شريكك الاستراتيجي، وليس بديلاً عن خبرتك التسويقية. أنت تقدم الرؤى والمعرفة بالسوق والتفكير الاستراتيجي. Claude يساعد في صياغة وهيكلة تلك الأفكار.

### الخطوة 2: جمع المدخلات الاستراتيجية

اسأل الطالب عن تفكيره الاستراتيجي:

```
Let's create a comprehensive campaign brief for AgentKits's Q2 growth campaign.

First, tell me your strategic thinking:
- What's the primary goal? (e.g., 2000 trial signups)
- What's the budget?
- What's the timeframe?
- Any specific channels to focus on?
- What's the key message this quarter?
```

انتظر مدخلاتهم، ثم تابع.

### الخطوة 3: استخدام أمر تخطيط الحملة

استخدم أمر تخطيط الحملة:

```
/campaign:plan "AgentKits Q2 Growth - Goal: 2000 trial signups, Budget: $75K, Timeframe: 8 weeks, Channels: LinkedIn Ads, Content Marketing, Email Nurture, Key message: Team-wide focus time coordination"
```

راجع خطة الحملة الشاملة التي أنشأها وكيل `planner`.

### الخطوة 4: إنشاء الموجز الإبداعي

الآن استخدم أمر الموجز الإبداعي:

```
/campaign:brief "AgentKits Q2 Growth Campaign"
```

اشرح ما يتضمنه الموجز الإبداعي:
- الاقتراح الموحد
- رؤى الجمهور المستهدف
- النبرة والأسلوب
- قائمة المخرجات
- المتطلبات الإبداعية الإلزامية

### الخطوة 5: الحصول على تعليقات من منظورات متعددة

استخدم وكلاء المراجعة:

```
Review the Q2 campaign plan from three perspectives:

1. `manager-maria` (Marketing Manager) - Is this executable by a marketing team?
2. `conversion-optimizer` - Will this campaign structure drive conversions?
3. `brand-voice-guardian` - Is the messaging on-brand?

Provide specific feedback and recommendations.
```

### الخطوة 6: إنشاء تقويم المحتوى

استخدم أمر التقويم:

```
/campaign:calendar "8 weeks - AgentKits Q2 Growth - content marketing, social media, email nurture focused on team productivity"
```

### الخطوة 7: إنشاء المستندات الداعمة

قم بإنشاء أصول الحملة الإضافية:

**نموذج تسجيل نقاط العملاء المحتملين:**
```
/leads:score "B2B SaaS - technology companies - team productivity"
```

**تسلسل الترحيب:**
```
/sequence:welcome "AgentKits" "trial signups from Q2 campaign"
```

**تسلسل الرعاية:**
```
/sequence:nurture "AgentKits" "engaged leads who haven't converted"
```

### الخطوة 8: الإعداد التنافسي

قم بإعداد المواد التنافسية:

```
/sales:battlecard "RescueTime - main competitor for productivity tools"
```

```
/competitor:deep "Freedom app - focus and productivity blocking"
```

### الخطوة 9: إنشاء خطة القياس

قم بإعداد التحليلات:

```
/analytics:funnel "trial signup funnel - awareness to trial to paid"
```

### الخطوة 10: الحفظ كقالب

اشرح أن سير العمل هذا يمكن تكراره لأي حملة:

```
Campaign Brief Workflow:
1. /campaign:plan - Strategic plan
2. /campaign:brief - Creative brief
3. /campaign:calendar - Content calendar
4. /leads:score - Lead qualification
5. /sequence:welcome - New lead nurture
6. /sequence:nurture - Ongoing nurture
7. /sales:battlecard - Competitive prep
8. /analytics:funnel - Measurement setup
```

### ما التالي

أخبرهم:
- لقد أنشأوا موجز حملة احترافي في أقل من ساعة
- عادةً ما يستغرق هذا أياماً مع اجتماعات متعددة
- **التالي:** `/training-ar:start-2-2` - تطوير استراتيجية المحتوى
- سيقومون ببناء خطط محتوى شاملة

## النقاط التعليمية الرئيسية
- موجزات الحملة تعاونية
- استخدم `/campaign:plan` للتخطيط الاستراتيجي
- استخدم `/campaign:brief` للتوجيه الإبداعي
- استخدم `/campaign:calendar` لجدولة المحتوى
- استخدم وكلاء المراجعة للحصول على تعليقات
- أنشئ الأصول الداعمة (تسجيل نقاط العملاء المحتملين، التسلسلات، بطاقات المعركة)

---

CRITICAL OUTPUT RULES:
- Output ONLY the raw translated markdown content
- Do NOT wrap output in ```markdown code fences
- Do NOT add any preamble, explanation, or commentary
- Start directly with the translated content
- The output will be saved directly to a .md file