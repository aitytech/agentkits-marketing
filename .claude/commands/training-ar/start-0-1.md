# /training-ar:start-0-1 - التثبيت والإعداد

## معايير اللغة والجودة

**حرج**: الرد بنفس اللغة التي يستخدمها المستخدم. إذا كانت فيتنامية، الرد بالفيتنامية. إذا كانت إسبانية، الرد بالإسبانية.

---

## تعليمات لـ Claude

إرشاد الطالب خلال التحقق من تثبيت Claude Code وإعداد حزمة التسويق.

### نظرة عامة على الدرس

قل شيئاً مثل:

---

**الوحدة 0.1: التثبيت والإعداد**

قبل أن نتعمق في سير عمل التسويق، دعنا نتأكد من أن كل شيء معد بشكل صحيح.

---

### الخطوة 1: التحقق من Claude Code

اطلب منهم التأكيد:
- أنهم يشغلون هذا داخل Claude Code (وليس الدردشة عبر الويب)
- أن لديهم اشتراك Claude Pro أو Max

إذا لم يكونوا متأكدين، اشرح:
- Claude Code هو إصدار الطرفية/CLI
- يمكنه قراءة وكتابة وتحرير الملفات مباشرة
- إنه يختلف عن دردشة الويب claude.ai

### الخطوة 2: التحقق من ملفات حزمة التسويق

قم بإجراء هذه الفحوصات مع الطالب (قم بتنفيذها فعلياً):

```
Show me the contents of this directory
```

يجب أن يروا:
- مجلد `.claude/` مع العملاء والأوامر والمهارات وسير العمل
- مجلد `docs/` مع الوثائق
- ملف `CLAUDE.md` (ذاكرة المشروع)
- ملف `README.md`

### الخطوة 3: استكشاف بنية النظام

أظهر لهم بنية حزمة التسويق:

```
List all folders in .claude/
```

اشرح كل مكون:
- `agents/` - 18 عميل تسويق متخصص
- `commands/` - 76 أمر مقسمة حسب الوظيفة
- `skills/` - معرفة مجال التسويق
- `workflows/` - سير العمل الأساسية للتسويق والمبيعات وإدارة علاقات العملاء

### الخطوة 4: استكشاف الأوامر المتاحة

أظهر لهم فئات الأوامر:

```
List all folders in .claude/commands/
```

اشرح مجموعات الأوامر الرئيسية:
- `campaign/` - `/campaign:plan`، `/campaign:brief`، `/campaign:analyze`
- `content/` - `/content:blog`، `/content:social`، `/content:email`، `/content:landing`
- `seo/` - `/seo:keywords`، `/seo:audit`، `/seo:optimize`
- `analytics/` - `/analytics:roi`، `/analytics:funnel`، `/analytics:report`
- `sales/` - `/sales:pitch`، `/sales:outreach`، `/sales:battlecard`

### الخطوة 5: اختبر أمرك الأول

اطلب منهم تجربة أمر حقيقي:

```
/brainstorm "What are the best marketing channels for a B2B SaaS product?"
```

احتفل بتنفيذ أول أمر لهم!

### الخطوة 6: مراجعة الوثائق

أظهر لهم الوثائق الرئيسية:

```
Read docs/usage-guide.md (first 50 lines)
```

اشرح:
- `docs/usage-guide.md` - مرجع النظام الكامل
- `docs/brand-guidelines.md` - قالب معايير العلامة التجارية
- `docs/content-style-guide.md` - معايير الكتابة
- `docs/campaign-playbooks.md` - قوالب الحملات
- `docs/channel-strategies.md` - تكتيكات المنصات
- `docs/analytics-setup.md` - إعدادات التتبع

### ما التالي

أخبرهم:
- **الدرس التالي:** `/training-ar:start-0-2` - مهمتك التسويقية الأولى
- لقد تحققوا للتو من إعدادهم ونفذوا أول أمر لهم!
- هكذا بالضبط يعمل باقي الدورة

## نقاط التدريس الرئيسية
- Claude Code يعمل مباشرة مع الملفات
- حزمة التسويق تحتوي على 18 عميل، و76 أمر، ووثائق شاملة
- كل درس يتضمن تنفيذ أوامر عملية
- التحقق من أن الأشياء عملت فعلاً (قراءة الملفات مرة أخرى)

---

CRITICAL OUTPUT RULES:
- Output ONLY the raw translated markdown content
- Do NOT wrap output in ```markdown code fences
- Do NOT add any preamble, explanation, or commentary
- Start directly with the translated content
- The output will be saved directly to a .md file