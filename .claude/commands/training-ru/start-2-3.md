# /training-ru:start-2-3 - Создание маркетинговых текстов

## Языковые стандарты и стандарты качества

**КРИТИЧНО**: Отвечайте на том же языке, который использует пользователь. Если вьетнамский, отвечайте на вьетнамском. Если испанский, отвечайте на испанском.

---

## Инструкции для Claude

Обучите созданию большого объема текстов для разных каналов с сохранением качества.

### Обзор урока

---

**Модуль 2.3: Создание маркетинговых текстов**

Научитесь создавать профессиональные маркетинговые тексты в масштабе: электронные письма, реклама, социальные сети, целевые страницы. Качество + Скорость.

**Продолжительность:** ~35 минут

---

### Шаг 1: Приветственная последовательность писем

Используйте команду последовательности:

```
/sequence:welcome "AgentKits" "trial users - remote team managers"
```

Просмотрите созданную последовательность:
- Письмо 1 (День 0): Приветствие + Быстрый старт
- Письмо 2 (День 2): Выделение функций
- Письмо 3 (День 5): Социальное доказательство + Советы
- Письмо 4 (День 9): Подкрепление ценности
- Письмо 5 (День 13): Окончание пробного периода + Обновление

Каждое письмо включает:
- Варианты темы письма для A/B-тестирования
- Текст предпросмотра
- Основной текст
- Четкий CTA

### Шаг 2: Контент для социальных сетей

Используйте команды контента для социальных сетей:

**LinkedIn:**
```
/content:social "Team coordination tips for remote managers - AgentKits launch" "linkedin"
```

**Twitter:**
```
/content:social "5 ways remote teams waste time coordinating - thread" "twitter"
```

### Шаг 3: Контент для блога

Используйте команду блога с фокусом на SEO:

```
/content:blog "How Remote Teams Can Coordinate Focus Time Without Endless Meetings" "remote team focus time"
```

Затем оптимизируйте:
```
/seo:optimize "the blog post" "remote team focus time"
```

### Шаг 4: Рекламные тексты

Используйте команды для рекламных текстов:

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

### Шаг 5: Текст для целевой страницы

Используйте команду целевой страницы:

```
/content:landing "14-day free trial of AgentKits" "remote team managers at tech companies"
```

Это создаст:
- Героическая секция (заголовок, подзаголовок, CTA)
- Секция проблемы
- Секция решения
- Функции с преимуществами
- Секция социального доказательства
- Обзор цен
- Секция FAQ
- Финальный CTA

### Шаг 6: Быстрый контент против качественного контента

Объясните два режима контента:

**Быстрый контент (`/content:fast`):**
- Быстрое выполнение
- Подходит для генерации идей
- Первые черновики
- Потребности в большом объеме

```
/content:fast "Quick LinkedIn post about team focus time benefits"
```

**Качественный контент (`/content:good`):**
- Тщательное исследование
- Множество вариантов
- Готовность к публикации
- Стратегические материалы

```
/content:good "Detailed blog post about the science of team focus time with research citations"
```

### Шаг 7: Улучшение контента

Используйте команды улучшения:

```
/content:enhance "make the copy more conversational and add urgency"
```

```
/content:cro "optimize for higher conversion rate"
```

### Шаг 8: Варианты для A/B-тестирования

Создайте варианты для тестирования:

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

### Шаг 9: Персонализация по персонам

Создайте варианты для конкретных персон:

**Для Solo Sam:**
```
/content:email "product announcement" "technical team managers - efficiency focus"
```

**Для Startup Sam:**
```
/content:email "product announcement" "startup founders - growth and scale focus"
```

### Шаг 10: Проверка качества

Проверьте весь контент со специалистами:

```
Review all content we created with:
1. brand-voice-guardian - brand consistency
2. conversion-optimizer - conversion potential
3. seo-specialist - SEO optimization

Score each piece and identify top improvements needed.
```

### Что дальше

Скажите им:
- Они создали полную библиотеку текстов за одну сессию
- Обычно это занимает недели работы
- **Далее:** `/training-ru:start-2-4` - Анализ данных кампании
- Превратите данные в практические выводы

## Ключевые моменты обучения
- Команды `/content:*` обрабатывают все типы контента
- `/sequence:*` создает автоматизацию электронных писем
- Используйте быстрый режим для черновиков, качественный режим для финальных версий
- `/content:cro` оптимизирует для конверсии
- Персонализируйте по персонам для большей релевантности
- Всегда проверяйте со специализированными агентами

---

КРИТИЧНЫЕ ПРАВИЛА ВЫВОДА:
- Выводите ТОЛЬКО переведенное содержимое в формате markdown
- НЕ оборачивайте вывод в блоки кода ```markdown
- НЕ добавляйте никаких преамбул, объяснений или комментариев
- Начинайте непосредственно с переведенного содержимого
- Вывод будет сохранен непосредственно в файл .md