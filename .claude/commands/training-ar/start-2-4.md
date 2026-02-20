# /training-ar:start-2-4 - تحليل بيانات الحملات

## معايير اللغة والجودة

**هام جداً**: استجب بنفس اللغة التي يستخدمها المستخدم. إذا كانت فيتنامية، استجب بالفيتنامية. إذا كانت إسبانية، استجب بالإسبانية.

---

## تعليمات لـ Claude

علّم تحليل البيانات واستخراج الرؤى وإعداد التقارير التنفيذية باستخدام أوامر التحليلات.

### نظرة عامة على الدرس

---

**الوحدة 2.4: تحليل بيانات الحملات**

غالباً ما يستغرق تحليل البيانات وقتاً طويلاً. لنتقن تحويل البيانات إلى رؤى قابلة للتنفيذ وتقارير مقنعة.

**المدة:** ~35 دقيقة

---

### الخطوة 1: تحليل العائد على الاستثمار (ROI)

استخدم أوامر التحليلات:

```
/analytics:roi "Q1 campaign - $50K spend across LinkedIn, Google, Email"
```

راجع حساب العائد على الاستثمار:
- إجمالي الإنفاق حسب القناة
- الإيرادات المنسوبة
- عائد الإنفاق الإعلاني (ROAS) حسب القناة
- تكلفة الاكتساب

### الخطوة 2: تحليل مسار التحويل

حلل مسار التحويل:

```
/analytics:funnel "trial signup - visitor to trial to paid conversion"
```

راجع مقاييس مسار التحويل:
- الزيارات حسب المصدر
- معدلات التحويل في كل مرحلة
- نقاط التسرب
- فرص التحسين

### الخطوة 3: إعداد تقارير الأداء

أنشئ تقارير الأداء:

**التقرير الأسبوعي:**
```
/report:weekly "AgentKits" "current week"
```

**التقرير الشهري:**
```
/report:monthly "AgentKits" "current month"
```

### الخطوة 4: أداء القنوات

حلل حسب القناة:

```
/analytics:report "channel performance" "LinkedIn, Google, Email, Organic"
```

أنشئ مقارنة بين القنوات:
- مساهمة الزيارات
- جودة العملاء المحتملين
- معدلات التحويل
- كفاءة التكلفة

### الخطوة 5: أداء المحتوى

حلل فعالية المحتوى:

```
/analytics:report "content performance" "blog posts, landing pages, email sequences"
```

المقاييس الرئيسية:
- الزيارات حسب جزء المحتوى
- التفاعل (الوقت، التمرير، المشاركات)
- معدل التحويل
- جودة العملاء المحتملين

### الخطوة 6: تحليل جودة العملاء المحتملين

استخدم تسجيل العملاء المحتملين للتحليل:

```
/crm:score "analyze lead quality by source and campaign"
```

راجع:
- معدل العملاء المحتملين المؤهلين للتسويق (MQL) حسب المصدر
- تحويل العملاء المحتملين المؤهلين للمبيعات (SQL) حسب الحملة
- اتجاهات متوسط درجات العملاء المحتملين

### الخطوة 7: الملخص التنفيذي

أنشئ ملخصاً جاهزاً للمديرين التنفيذيين:

```
Create an executive summary of Q1 marketing performance:

STRUCTURE:
1. Headline metrics (vs targets)
2. Top 3 wins with data
3. Top 3 challenges with impact
4. Channel performance snapshot (table)
5. Key learnings (3 insights)
6. Q2 recommendations (prioritized)
7. Budget request with justification

Keep it to ONE PAGE maximum.
```

### الخطوة 8: إطار تحويل البيانات إلى إجراءات

علّم إطار الرؤى:

```
For each finding, document:

1. OBSERVATION: What does the data show?
2. INSIGHT: Why is this happening?
3. IMPLICATION: What does it mean?
4. RECOMMENDATION: What should we do?
5. EXPECTED IMPACT: What will change?
```

### الخطوة 9: قوائم التحقق التشغيلية

استخدم قوائم التحقق من التحليلات:

```
/checklist:analytics-monthly "current month" "AgentKits"
```

راجع مهام التحليلات الشهرية:
- فحوصات جودة البيانات
- التحقق من المنصات
- دقة التقارير
- التحقق من الإسناد

### الخطوة 10: قوالب التقارير

اشرح التقارير القابلة لإعادة الاستخدام:

```
Weekly Report Workflow:
1. /analytics:roi "campaign" - Calculate ROI
2. /analytics:funnel "funnel" - Analyze funnel
3. /report:weekly "client" "week" - Generate report

Monthly Report Workflow:
1. /analytics:report "all channels" - Full analysis
2. /crm:score "lead quality" - Lead analysis
3. /report:monthly "client" "month" - Generate report
```

### ما التالي

أخبرهم:
- يمكنهم الآن تحويل البيانات إلى قرارات
- تقارير يقرأها المديرون التنفيذيون فعلياً
- **التالي:** `/training-ar:start-2-5` - التحليل التنافسي
- بحث المنافسين وإيجاد المزايا

## نقاط التدريس الرئيسية
- أوامر `/analytics:*` تحلل الأداء
- أوامر `/report:*` تولد التقارير
- تحليل العائد على الاستثمار ومسار التحويل أساسيان
- يجب أن تكون الملخصات التنفيذية موجزة
- إطار تحويل البيانات إلى إجراءات يضمن المساءلة

---

CRITICAL OUTPUT RULES:
- Output ONLY the raw translated markdown content
- Do NOT wrap output in ```markdown code fences
- Do NOT add any preamble, explanation, or commentary
- Start directly with the translated content
- The output will be saved directly to a .md file