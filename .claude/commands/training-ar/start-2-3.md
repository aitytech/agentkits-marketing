# /training-ar:start-2-3 - إنشاء محتوى تسويقي

## معايير اللغة والجودة

**مهم جداً**: استجب بنفس اللغة التي يستخدمها المستخدم. إذا كانت فيتنامية، استجب بالفيتنامية. إذا كانت إسبانية، استجب بالإسبانية.

---

## تعليمات لـ Claude

علّم إنشاء محتوى تسويقي بكميات كبيرة عبر القنوات المختلفة مع الحفاظ على الجودة.

### نظرة عامة على الدرس

---

**الوحدة 2.3: إنشاء محتوى تسويقي**

تعلم كيفية إنشاء محتوى تسويقي احترافي على نطاق واسع: رسائل البريد الإلكتروني، الإعلانات، وسائل التواصل الاجتماعي، الصفحات المقصودة. الجودة + السرعة.

**المدة:** ~35 دقيقة

---

### الخطوة 1: تسلسل رسائل الترحيب الإلكترونية

استخدم أمر التسلسل:

```
/sequence:welcome "AgentKits" "trial users - remote team managers"
```

راجع التسلسل المُنشأ:
- الرسالة 1 (اليوم 0): الترحيب + البدء السريع
- الرسالة 2 (اليوم 2): تسليط الضوء على الميزات
- الرسالة 3 (اليوم 5): الدليل الاجتماعي + نصائح
- الرسالة 4 (اليوم 9): تعزيز القيمة
- الرسالة 5 (اليوم 13): انتهاء الفترة التجريبية + الترقية

كل رسالة تتضمن:
- تنويعات سطر الموضوع لاختبار A/B
- نص المعاينة
- نص المحتوى
- دعوة واضحة لاتخاذ إجراء (CTA)

### الخطوة 2: محتوى وسائل التواصل الاجتماعي

استخدم أوامر المحتوى لوسائل التواصل الاجتماعي:

**LinkedIn:**
```
/content:social "Team coordination tips for remote managers - AgentKits launch" "linkedin"
```

**Twitter:**
```
/content:social "5 ways remote teams waste time coordinating - thread" "twitter"
```

### الخطوة 3: محتوى المدونة

استخدم أمر المدونة مع التركيز على تحسين محركات البحث:

```
/content:blog "How Remote Teams Can Coordinate Focus Time Without Endless Meetings" "remote team focus time"
```

ثم قم بالتحسين:
```
/seo:optimize "the blog post" "remote team focus time"
```

### الخطوة 4: محتوى الإعلانات المدفوعة

استخدم أوامر محتوى الإعلانات:

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

### الخطوة 5: محتوى الصفحة المقصودة

استخدم أمر الصفحة المقصودة:

```
/content:landing "14-day free trial of AgentKits" "remote team managers at tech companies"
```

هذا ينشئ:
- قسم البطل (العنوان الرئيسي، العنوان الفرعي، دعوة لاتخاذ إجراء)
- قسم المشكلة
- قسم الحل
- الميزات مع الفوائد
- قسم الدليل الاجتماعي
- نظرة عامة على الأسعار
- قسم الأسئلة الشائعة
- دعوة نهائية لاتخاذ إجراء

### الخطوة 6: المحتوى السريع مقابل المحتوى الجيد

اشرح نمطي المحتوى:

**المحتوى السريع (`/content:fast`):**
- تنفيذ سريع
- جيد للأفكار الأولية
- المسودات الأولى
- احتياجات الحجم الكبير

```
/content:fast "Quick LinkedIn post about team focus time benefits"
```

**المحتوى الجيد (`/content:good`):**
- بحث شامل
- تنويعات متعددة
- جاهز للنشر
- قطع استراتيجية

```
/content:good "Detailed blog post about the science of team focus time with research citations"
```

### الخطوة 7: تحسين المحتوى

استخدم أوامر التحسين:

```
/content:enhance "make the copy more conversational and add urgency"
```

```
/content:cro "optimize for higher conversion rate"
```

### الخطوة 8: تنويعات اختبار A/B

أنشئ تنويعات الاختبار:

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

### الخطوة 9: التخصيص حسب الشخصية

أنشئ تنويعات خاصة بكل شخصية:

**لـ Solo Sam:**
```
/content:email "product announcement" "technical team managers - efficiency focus"
```

**لـ Startup Sam:**
```
/content:email "product announcement" "startup founders - growth and scale focus"
```

### الخطوة 10: مراجعة الجودة

راجع جميع المحتوى مع المتخصصين:

```
Review all content we created with:
1. brand-voice-guardian - brand consistency
2. conversion-optimizer - conversion potential
3. seo-specialist - SEO optimization

Score each piece and identify top improvements needed.
```

### ما التالي

أخبرهم:
- لقد أنشأوا مكتبة محتوى كاملة في جلسة واحدة
- عادةً ما يستغرق هذا أسابيع من العمل
- **التالي:** `/training-ar:start-2-4` - تحليل بيانات الحملة
- تحويل البيانات إلى رؤى قابلة للتنفيذ

## نقاط التعليم الرئيسية
- أوامر `/content:*` تتعامل مع جميع أنواع المحتوى
- `/sequence:*` ينشئ أتمتة البريد الإلكتروني
- استخدم الوضع السريع للمسودات، والوضع الجيد للنسخة النهائية
- `/content:cro` يحسّن معدل التحويل
- قم بالتخصيص حسب الشخصية لزيادة الصلة
- راجع دائماً مع الوكلاء المتخصصين