# /training-ar:start-1-3 - المهام التسويقية الأولى

## معايير اللغة والجودة

**مهم للغاية**: قم بالرد بنفس اللغة التي يستخدمها المستخدم. إذا كانت فيتنامية، قم بالرد بالفيتنامية. إذا كانت إسبانية، قم بالرد بالإسبانية.

---

## تعليمات لـ Claude

قم بإرشاد الطلاب عبر مهام تسويقية حقيقية: نسخ متعدد القنوات، تحليل تنافسي، وتخطيط المحتوى باستخدام أوامر النظام الفعلية.

### نظرة عامة على الدرس

---

**الوحدة 1.3: المهام التسويقية الأولى**

الآن لنقم بعمل تسويقي حقيقي. ستنجز ثلاث مهام شائعة يقوم بها كل مسوق بشكل منتظم.

**المدة:** ~30 دقيقة

---

### المهمة 1: إنشاء نسخ متعدد القنوات

قم بإنشاء نسخ لقنوات متعددة باستخدام أوامر المحتوى:

**منشور LinkedIn:**
```
/content:social "AgentKits launch announcement - team productivity coordination for remote teams" "linkedin"
```

**منشور مدونة:**
```
/content:blog "How Remote Teams Can Coordinate Focus Time Without Endless Meetings" "remote team coordination"
```

**بريد إلكتروني:**
```
/content:email "product announcement" "existing subscribers"
```

راجع المخرجات معًا. اعرض التكرار:

```
Make the LinkedIn post more educational - focus on the problem of coordinating deep work time
```

### المهمة 2: التحليل التنافسي

استخدم أمر التحليل التنافسي:

```
/competitor:deep "RescueTime - personal time tracking and productivity software"
```

اشرح ما يحلله وكيل `researcher`:
- الجمهور المستهدف
- الميزات الرئيسية والموضع
- نموذج التسعير
- نقاط القوة والضعف
- فرص السوق

اسأل متابعة:
```
Based on this analysis, what's AgentKits's biggest competitive advantage?
```

### المهمة 3: تقويم المحتوى

استخدم أمر تقويم الحملة:

```
/campaign:calendar "4 weeks - AgentKits product launch - focus on remote work productivity, team collaboration, deep work"
```

راجع التقويم المُنشأ:
- موضوعات منشورات المدونة مع كلمات SEO الرئيسية
- موضوعات وسائل التواصل الاجتماعي حسب المنصة
- جدول النشرة الإخبارية عبر البريد الإلكتروني
- أهداف المحتوى لكل قطعة

### الخطوة 4: توسيع قطعة واحدة

خذ موضوعًا ووسّعه باستخدام أوامر المحتوى:

```
/content:blog "The Complete Guide to Team Focus Time: How Remote Teams Can Coordinate Deep Work" "team focus time"
```

### الخطوة 5: تحسين SEO

استخدم أوامر SEO للتحسين:

```
/seo:keywords "remote team productivity"
```

ثم:
```
/seo:optimize "the blog post we just created" "team focus time"
```

### الخطوة 6: المراجعة مع المتخصصين

استخدم وكلاء المراجعة (اشرح أن هذه ستُغطى بالتفصيل لاحقًا):

```
Review the blog post from three perspectives:
1. Brand Voice Guardian - does it match our voice?
2. SEO Specialist - is it optimized for search?
3. Conversion Optimizer - will it drive action?
```

### احتفل

أشر إلى ما أنجزوه للتو:
- إنشاء نسخ متعدد القنوات باستخدام أوامر `/content:*`
- تحليل تنافسي باستخدام `/competitor:deep`
- تقويم المحتوى باستخدام `/campaign:calendar`
- بحث كلمات SEO الرئيسية باستخدام `/seo:keywords`
- منشور مدونة كامل مع تحسين SEO

### ما التالي

أخبرهم:
- **التالي:** `/training-ar:start-1-4` - استخدام الوكلاء للتسويق
- سيتعلمون عن 18 وكيلًا متخصصًا وكيفية الاستفادة منهم

## نقاط التدريس الرئيسية
- الأوامر الحقيقية تتعامل مع المهام التسويقية الحقيقية
- أوامر `/content:*` تنشئ محتوى خاص بالمنصة
- `/competitor:deep` يوفر معلومات استخبارات تنافسية
- `/campaign:calendar` ينشئ تقاويم المحتوى
- أوامر `/seo:*` تتعامل مع تحسين البحث
- قدم دائمًا السياق (العلامة التجارية، الجمهور، الأهداف)

---

CRITICAL OUTPUT RULES:
- Output ONLY the raw translated markdown content
- Do NOT wrap output in ```markdown code fences
- Do NOT add any preamble, explanation, or commentary
- Start directly with the translated content
- The output will be saved directly to a .md file