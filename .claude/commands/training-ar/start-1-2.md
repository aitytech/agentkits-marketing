# /training-ar:start-1-2 - العمل مع ملفات التسويق

## معايير اللغة والجودة

**مهم جداً**: الرد بنفس اللغة التي يستخدمها المستخدم. إذا كانت فيتنامية، رد بالفيتنامية. إذا كانت إسبانية، رد بالإسبانية.

---

## تعليمات لـ Claude

علّم تنظيم الملفات، واستخدام الأوامر، والرجوع إلى التوثيق لمشاريع التسويق.

### نظرة عامة على الدرس

---

**الوحدة 1.2: العمل مع ملفات التسويق**

كمسوّق، تعمل مع أنواع عديدة من الأصول: ملخصات الحملات، مسودات المحتوى، مستندات الأبحاث، تقارير التحليلات. لنتقن تنظيمها وإدارتها بكفاءة.

**المدة:** ~25 دقيقة

---

### الخطوة 1: مراجعة بنية التوثيق

اعرض لهم مجلد docs:

```
List all files in docs/
```

اشرح كل ملف توثيق:
- `brand-guidelines.md` - قالب معايير العلامة التجارية
- `content-style-guide.md` - معايير الكتابة، دعوات الإجراء، التنسيق
- `campaign-playbooks.md` - قوالب الحملات المجربة
- `channel-strategies.md` - تكتيكات خاصة بكل منصة
- `analytics-setup.md` - التتبع والإسناد
- `usage-guide.md` - مرجع النظام الكامل

### الخطوة 2: استكشاف دلائل الحملات

اقرأ دلائل الحملات:

```
Read docs/campaign-playbooks.md
```

اشرح أنواع الدلائل:
- دليل إطلاق المنتج
- دليل توليد العملاء المحتملين
- دليل الوعي بالعلامة التجارية
- دليل الاحتفاظ بالعملاء
- دليل الترويج للفعاليات

### الخطوة 3: ممارسة أوامر المحتوى

أرشدهم عبر أوامر إنشاء المحتوى:

**مقال مدونة:**
```
/content:blog "5 Ways Remote Teams Can Improve Coordination" "remote team productivity"
```

**محتوى وسائل التواصل الاجتماعي:**
```
/content:social "Team coordination tips for remote managers" "linkedin"
```

**نسخة البريد الإلكتروني:**
```
/content:email "welcome" "trial users for AgentKits"
```

### الخطوة 4: ممارسة أوامر البحث

علّم تقنيات البحث باستخدام grep/find أو بسؤال Claude:

```
Find all files that mention "lead scoring"
```

```
Search for files containing "conversion rate"
```

### الخطوة 5: إنشاء المحتوى بالجملة

اعرض إنشاء عدة أصول دفعة واحدة:

```
Create multi-channel content for AgentKits launch:
1. LinkedIn announcement post
2. Twitter thread (5 tweets)
3. Email subject lines (5 A/B variations)
4. Google Ads headlines (5 variations, max 30 chars)
```

### الخطوة 6: الإحالة المرجعية مع دليل الأسلوب

اعرض كيفية استخدام دليل أسلوب المحتوى:

```
Read docs/content-style-guide.md
```

أشر إلى:
- صيغ العناوين (إطار عمل 4-U)
- أنماط دعوات الإجراء
- معايير سهولة القراءة
- إرشادات كتابة محتوى SEO

### الخطوة 7: أوامر المرجع السريع

شارك أنماط الأوامر الأساسية:

**أوامر الحملات:**
- `/campaign:plan` - إنشاء خطة حملة
- `/campaign:brief` - توليد ملخص إبداعي
- `/campaign:analyze` - تحليل الأداء
- `/campaign:calendar` - تقويم المحتوى

**أوامر المحتوى:**
- `/content:blog` - مقال مدونة محسّن لمحركات البحث
- `/content:social` - محتوى اجتماعي خاص بالمنصة
- `/content:email` - نسخة البريد الإلكتروني
- `/content:landing` - نسخة الصفحة المقصودة
- `/content:ads` - نسخة إعلانية

### ما التالي

أخبرهم:
- أنهم الآن يعرفون كيفية التنقل في توثيق مجموعة التسويق
- الأوامر منظمة حسب الوظيفة التسويقية
- **التالي:** `/training-ar:start-1-3` - مهام التسويق الأولى (توليد المحتوى، التحليل)

## نقاط التدريس الرئيسية
- التنظيم الجيد للتوثيق يجعل كل شيء أسرع
- ستة مستندات رئيسية تغطي العلامة التجارية، المحتوى، الحملات، القنوات، التحليلات، الاستخدام
- الأوامر منظمة حسب الوظيفة (campaign، content، seo، إلخ)
- الإحالة المرجعية للمستندات لضمان الاتساق
- العمليات الجماعية توفر وقتاً هائلاً

---

CRITICAL OUTPUT RULES:
- Output ONLY the raw translated markdown content
- Do NOT wrap output in ```markdown code fences
- Do NOT add any preamble, explanation, or commentary
- Start directly with the translated content
- The output will be saved directly to a .md file