<p align="center">
  <img src="https://raw.githubusercontent.com/aitytech/agentkits-marketing/main/assets/logo.svg" alt="AgentKits Logo" width="80" height="80">
</p>

<h1 align="center">AgentKits Marketing</h1>

<p align="center">
  <a href="https://github.com/aitytech/agentkits-marketing/stargazers"><img src="https://img.shields.io/github/stars/aitytech/agentkits-marketing?style=flat" alt="Stars"></a>
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
  <img src="https://img.shields.io/badge/Claude_Code%20|%20Cursor%20|%20Copilot-Compatible-blueviolet" alt="AI Assistants">
  <br>
  <img src="https://img.shields.io/badge/Agents-18-green" alt="Agents">
  <img src="https://img.shields.io/badge/Commands-93-orange" alt="Commands">
  <img src="https://img.shields.io/badge/Skills-28-blue" alt="Skills">
</p>

<p align="center">
  <strong>Автоматизация маркетинга с ИИ корпоративного уровня для Claude Code, Cursor, GitHub Copilot и любого ИИ-ассистента с поддержкой агентов и навыков.</strong>
</p>

<p align="center">
  Готовые к продакшену маркетинговые агенты, навыки, команды и рабочие процессы для основателей SaaS, маркетологов и команд роста. Планирование кампаний, создание контента, SEO, CRO, email-последовательности и аналитика - всё работает на специализированных ИИ-агентах.
</p>

<p align="center">
  <a href="https://www.agentkits.net/marketing">Сайт</a> •
  <a href="https://www.agentkits.net/docs">Документация</a> •
  <a href="#установка">Установка</a> •
  <a href="#обучение">Обучение</a>
</p>

<p align="center">
  🌐 <a href="README.md">English</a> · <a href="README.zh.md">简体中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.es.md">Español</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.pt-br.md">Português</a> · <a href="README.vi.md">Tiếng Việt</a> · <strong>Русский</strong> · <a href="README.ar.md">العربية</a>
</p>

---

## Vibe Marketing

<p>
  <img src="https://img.shields.io/badge/Vibe_Coding-Developers-blue?style=for-the-badge&logo=code&logoColor=white" alt="Vibe Coding">
  <img src="https://img.shields.io/badge/→-black?style=for-the-badge" alt="arrow">
  <img src="https://img.shields.io/badge/Vibe_Marketing-Marketers-green?style=for-the-badge&logo=target&logoColor=white" alt="Vibe Marketing">
</p>

> *Вдохновлённые движением "Vibe Coding" разработчиков... мы расширяем вселенную: **Vibe Marketing** для эры ИИ, где всё просто работает.*

| | |
|---|---|
| **С ИИ** | Позвольте ИИ-агентам управлять вашими кампаниями, пока вы фокусируетесь на стратегии. Просто наслаждайтесь процессом, а агенты сделают тяжёлую работу. |
| **Без ИИ** | Этот репозиторий - **комплексная справочная библиотека** лучших маркетинговых практик, фреймворков и шаблонов. Используйте документацию по навыкам как свой маркетинговый справочник. |

---

## Что внутри

Работает с **Claude Code**, **Cursor**, **GitHub Copilot** и любым ИИ-ассистентом с поддержкой агентов и навыков. Устанавливается как плагин или копируется вручную по компонентам.

```
agentkits-marketing/
|-- .claude-plugin/      # Манифесты плагина и маркетплейса
|   |-- plugin.json            # Метаданные плагина и пути к компонентам
|   |-- marketplace.json       # Каталог маркетплейса для /plugin marketplace add
|
|-- .claude/
|   |-- agents/          # 18 специализированных маркетинговых агентов
|   |   |-- attraction-specialist.md    # Генерация лидов, SEO, лендинги
|   |   |-- lead-qualifier.md           # Скоринг лидов, сегментация
|   |   |-- email-wizard.md             # Email-последовательности, автоматизация
|   |   |-- sales-enabler.md            # Материалы для продаж, battlecards
|   |   |-- continuity-specialist.md    # Удержание, реактивация
|   |   |-- upsell-maximizer.md         # Расширение дохода
|   |   |-- copywriter.md               # Высококонверсионные тексты
|   |   |-- conversion-optimizer.md     # Специалист по CRO
|   |   |-- seo-specialist.md           # SEO-оптимизация
|   |   |-- brand-voice-guardian.md     # Консистентность бренда
|   |   |-- ...и другие
|   |
|   |-- commands/        # 93 slash-команды по категориям
|   |   |-- campaign/    # /campaign:plan, /campaign:brief, /campaign:analyze
|   |   |-- content/     # /content:blog, /content:landing, /content:email
|   |   |-- seo/         # /seo:keywords, /seo:audit, /seo:programmatic
|   |   |-- cro/         # /cro:page, /cro:form, /cro:popup, /cro:signup
|   |   |-- growth/      # /growth:launch, /growth:referral, /growth:free-tool
|   |   |-- ...и другие
|   |
|   |-- skills/          # 28 маркетинговых навыков
|   |   |-- marketing-psychology/       # 70+ ментальных моделей
|   |   |-- marketing-ideas/            # 140+ SaaS-стратегий
|   |   |-- page-cro/                   # Оптимизация лендингов
|   |   |-- copywriting/                # Маркетинговые тексты
|   |   |-- programmatic-seo/           # Масштабная генерация страниц
|   |   |-- pricing-strategy/           # Ценообразование и пакетирование
|   |   |-- ...и другие
|   |
|   |-- workflows/       # Основные маркетинговые процессы
|       |-- primary-workflow.md         # Жизненный цикл кампании
|       |-- sales-workflow.md           # От лида к клиенту
|       |-- crm-workflow.md             # Жизненный цикл контакта
|
|-- training/            # 23 interactive lessons (English)
|-- training-zh/         # 简体中文
|-- training-ja/         # 日本語
|-- training-ko/         # 한국어
|-- training-es/         # Español
|-- training-de/         # Deutsch
|-- training-fr/         # Français
|-- training-pt-br/      # Português
|-- training-vi/         # Tiếng Việt
|-- training-ru/         # Русский
|-- training-ar/         # العربية
|-- docs/                # Документация и руководства
|-- marketplace.json     # Конфигурация собственного маркетплейса
```

---

## Установка

### Вариант 1: Маркетплейс плагинов Claude Code (Рекомендуется для Claude Code)

Установите напрямую через систему плагинов Claude Code — без ручной настройки:

```bash
# Добавить маркетплейс
/plugin marketplace add aitytech/agentkits-marketing

# Установить полный набор (18 агентов, 28 навыков, 93 команды)
/plugin install agentkits-marketing@agentkits-marketing
```

Также можно установить отдельные компоненты:

```bash
/plugin install agentkits-marketing-skills@agentkits-marketing    # Только навыки
/plugin install agentkits-marketing-agents@agentkits-marketing    # Только агенты
/plugin install agentkits-marketing-commands@agentkits-marketing  # Только команды
```

Перезапустите Claude Code после установки.

---

### Вариант 2: Установка через npx (Все платформы)

Одна команда для установки 18 агентов, 28 навыков, 93 команд:

```bash
npx @aitytech/agentkits-marketing install
```

**Установка для конкретной платформы:**

```bash
npx @aitytech/agentkits-marketing install --platform claude    # Claude Code
npx @aitytech/agentkits-marketing install --platform cursor    # Cursor IDE
npx @aitytech/agentkits-marketing install --platform windsurf  # Windsurf
npx @aitytech/agentkits-marketing install --platform cline     # Cline
npx @aitytech/agentkits-marketing install --platform copilot   # GitHub Copilot
npx @aitytech/agentkits-marketing install --platform all       # Все платформы
```

**Другие команды CLI:**

```bash
npx @aitytech/agentkits-marketing --help        # Показать все команды
npx @aitytech/agentkits-marketing list-ides     # Список поддерживаемых IDE
npx @aitytech/agentkits-marketing list-modules  # Список доступных модулей
npx @aitytech/agentkits-marketing update        # Обновить существующую установку
```

---

### Вариант 3: Клонирование и использование

Клонируйте репозиторий и работайте внутри него:

```bash
git clone https://github.com/aitytech/agentkits-marketing.git
cd agentkits-marketing
claude
```

---

### Вариант 4: Ручная установка

Скопируйте отдельные компоненты в конфигурацию Claude:

```bash
# Клонировать репозиторий
git clone https://github.com/aitytech/agentkits-marketing.git

# Скопировать агентов
cp agentkits-marketing/.claude/agents/*.md ~/.claude/agents/

# Скопировать команды
cp -r agentkits-marketing/.claude/commands/* ~/.claude/commands/

# Скопировать навыки
cp -r agentkits-marketing/.claude/skills/* ~/.claude/skills/

# Скопировать процессы
cp -r agentkits-marketing/.claude/workflows/* ~/.claude/workflows/
```

---

## Быстрый старт

### Запуск кампании

```bash
# Исследование и планирование
/research:market "SaaS productivity tools"
/competitor:deep "competitor.com"
/campaign:plan "Q1 Product Launch"

# Создание контента
/content:landing "new feature" "target audience"
/content:email "product launch" "trial users"
/content:blog "feature announcement" "primary keyword"

# Оптимизация
/cro:page "landing page for conversion"
/seo:optimize "content.md" "target keyword"
```

### Создание контента

```bash
/content:good "Blog post about AI marketing"
/content:editing "polish this draft"
/seo:keywords "ai marketing automation"
```

### Оптимизация конверсии

```bash
/cro:page "homepage conversion audit"
/cro:form "lead capture optimization"
/cro:signup "registration flow"
/test:ab-setup "headline variations"
```

### Рост и стратегия

```bash
/marketing:ideas "SaaS product"
/marketing:psychology "pricing objections"
/growth:launch "Product Hunt strategy"
/pricing:strategy "tier structure"
```

---

## Доступные навыки

| Навык | Описание | Когда использовать |
|-------|-------------|----------|
| **Основной маркетинг** |
| `marketing-psychology` | 70+ ментальных моделей для маркетинга | Убеждение, ценообразование, возражения |
| `marketing-ideas` | 140 проверенных SaaS-стратегий | Нужны маркетинговые идеи |
| `marketing-fundamentals` | Воронка, путь клиента, позиционирование | Базовые концепции |
| **Оптимизация конверсии** |
| `page-cro` | Лендинги, главные страницы, прайсинг | Страница не конвертирует |
| `form-cro` | Формы захвата лидов, контактные формы | Оптимизация форм |
| `popup-cro` | Модальные окна, оверлеи, exit intent | Создание попапов |
| `signup-flow-cro` | Регистрация, пробная подписка | Трение при регистрации |
| `onboarding-cro` | Активация после регистрации | Активация пользователей |
| `paywall-upgrade-cro` | Внутриаппные платные стены, экраны апгрейда | Конверсия freemium |
| `ab-test-setup` | Дизайн экспериментов | A/B-тестирование |
| **Контент и тексты** |
| `copywriting` | Тексты для маркетинговых страниц | Написание новых текстов |
| `copy-editing` | Редактирование и полировка | Улучшение существующих текстов |
| `email-sequence` | Drip-кампании, nurture | Email-автоматизация |
| **SEO и рост** |
| `seo-mastery` | Ключевые слова, техническое, on-page | SEO-оптимизация |
| `programmatic-seo` | Шаблонные страницы в масштабе | Масштабное SEO |
| `schema-markup` | Структурированные данные, расширенные сниппеты | Внедрение схем |
| `competitor-alternatives` | Страницы сравнения, альтернативы | Контент сравнений |
| `launch-strategy` | Запуск продуктов, анонсы | Выход на рынок |
| `pricing-strategy` | Ценообразование, пакетирование, тарифы | Решения по ценам |
| `referral-program` | Реферальные, партнёрские программы | Вирусный рост |
| `free-tool-strategy` | Инжиниринг как маркетинг | Планирование бесплатных инструментов |

---

## Маркетинговые агенты

### Основные агенты
| Агент | Фокус |
|-------|-------|
| `attraction-specialist` | Генерация лидов, SEO, лендинги |
| `lead-qualifier` | Скоринг лидов, сегментация |
| `email-wizard` | Email-последовательности, автоматизация |
| `sales-enabler` | Материалы для продаж, battlecards |
| `continuity-specialist` | Удержание, реактивация |
| `upsell-maximizer` | Расширение дохода, кросс-продажи |

### Вспомогательные агенты
| Агент | Фокус |
|-------|-------|
| `researcher` | Маркетинговые исследования, конкурентная разведка |
| `brainstormer` | Генерация идей кампаний, креативные концепции |
| `planner` | Планирование кампаний, календари |
| `copywriter` | Высококонверсионные тексты |
| `project-manager` | Координация кампаний |
| `docs-manager` | Маркетинговая документация |

### Агенты-рецензенты
| Агент | Перспектива |
|-------|-------------|
| `brand-voice-guardian` | Консистентность бренда |
| `conversion-optimizer` | Лучшие практики CRO |
| `seo-specialist` | SEO-оптимизация |
| `solopreneur` | Фрилансер/малый бизнес |
| `startup-founder` | Ранний стартап |

---

## Категории команд

| Категория | Команды | Примеры |
|----------|----------|----------|
| Campaign | 4 | `/campaign:plan`, `/campaign:brief` |
| Content | 10 | `/content:blog`, `/content:landing`, `/content:editing` |
| SEO | 6 | `/seo:keywords`, `/seo:audit`, `/seo:programmatic` |
| CRO | 6 | `/cro:page`, `/cro:form`, `/cro:signup` |
| Growth | 3 | `/growth:launch`, `/growth:referral` |
| Email | 4 | `/sequence:welcome`, `/sequence:nurture` |
| Analytics | 5 | `/analytics:roi`, `/analytics:funnel` |
| Sales | 4 | `/sales:pitch`, `/sales:battlecard` |
| Research | 3 | `/research:market`, `/research:persona` |
| Marketing | 2 | `/marketing:psychology`, `/marketing:ideas` |
| Testing | 1 | `/test:ab-setup` |
| ...ещё | 45+ | См. полный справочник команд |

---

## Обучение

**22 интерактивных урока** для освоения маркетинга с ИИ. Учитесь на практике, выполняя реальную маркетинговую работу внутри вашего ИИ-ассистента.

| | |
|---|---|
| **Метод** | Интерактивные уроки от Claude |
| **Проект** | Агентство Markit работает для клиента AgentKits |
| **Длительность** | 5-6 часов всего |
| **Требования** | Claude Code, Cursor или совместимый ИИ-ассистент |
| **Языки** | Английский, вьетнамский (Tiếng Việt), японский (日本語) |

```bash
# Start training in your language
/training:start-0-0           # English
/training-zh:start-0-0        # 简体中文
/training-ja:start-0-0        # 日本語
/training-ko:start-0-0        # 한국어
/training-es:start-0-0        # Español
/training-de:start-0-0        # Deutsch
/training-fr:start-0-0        # Français
/training-pt-br:start-0-0     # Português
/training-vi:start-0-0        # Tiếng Việt
/training-ru:start-0-0        # Русский
/training-ar:start-0-0        # العربية
```

---

### Учебный проект: Агентство Markit

Вы - маркетинговый стратег в **Markit**, B2B SaaS маркетинговом агентстве.

**Ваш клиент:** AgentKits - инструментарий автоматизации маркетинга с ИИ

| | |
|---|---|
| **Продукт** | Автоматизация маркетинга с ИИ корпоративного уровня |
| **Целевая аудитория** | Основатели SaaS, маркетологи и команды роста |
| **Цена** | Бесплатно и Open Source (лицензия MIT) |
| **Конкуренты** | Jasper, Copy.ai, HubSpot |

**Ключевые персоны:**
- **Solo Sam** (25-35) - Соло-предприниматель/инди-хакер, bootstrapped SaaS
- **Marketer Maya** (30-40) - Менеджер по маркетингу, среднего размера SaaS-компания
- **Founder Felix** (28-40) - Технический основатель, ранний стартап

---

### Модуль 0: Начало работы (30 мин)

Изучите основы и выполните первую маркетинговую задачу.

| Команда | Урок | Длительность |
|---------|--------|----------|
| `/training:start-0-0` | Введение в курс | 10 мин |
| `/training:start-0-1` | Установка и настройка | 15 мин |
| `/training:start-0-2` | Ваша первая маркетинговая задача | 15 мин |

**Что вы изучите:**
- Интерфейс ИИ-ассистента и базовые команды
- Создание и управление файлами
- Взаимодействие с ИИ для маркетинговых задач

---

### Модуль 1: Основные концепции (90 мин)

Освойте фундаментальные процессы через проект агентства Markit.

| Команда | Урок | Длительность |
|---------|--------|----------|
| `/training:start-1-1` | Добро пожаловать в Markit | 20 мин |
| `/training:start-1-2` | Работа с маркетинговыми файлами | 25 мин |
| `/training:start-1-3` | Первые маркетинговые задачи | 30 мин |
| `/training:start-1-4` | Использование агентов для маркетинга | 35 мин |
| `/training:start-1-5` | Погружение в агентов-рецензентов | 30 мин |
| `/training:start-1-6` | Память проекта (CLAUDE.md) | 20 мин |
| `/training:start-1-7` | Навигация и поиск | 20 мин |

**Что вы изучите:**
- Создание брифов кампаний
- Разработка голоса бренда и персон
- Координация и делегирование агентов
- Лучшие практики организации файлов
- Эффективное использование памяти проекта

**Что вы создадите:**
- Полный бриф кампании
- Документ с гайдлайнами бренда
- Персоны клиентов
- Кастомные агенты-рецензенты

---

### Модуль 2: Продвинутые приложения (120 мин)

Применяйте навыки к реальным маркетинговым сценариям в масштабе.

| Команда | Урок | Длительность |
|---------|--------|----------|
| `/training:start-2-1` | Написание брифа кампании | 45 мин |
| `/training:start-2-2` | Разработка контент-стратегии | 40 мин |
| `/training:start-2-3` | Создание маркетинговых текстов | 35 мин |
| `/training:start-2-4` | Анализ данных кампании | 35 мин |
| `/training:start-2-5` | Конкурентный анализ | 30 мин |
| `/training:start-2-6` | SEO-оптимизация | 40 мин |

**Что вы изучите:**
- Стратегическое планирование кампаний
- Создание мультиканального контента
- Анализ данных и инсайты
- Сбор конкурентной разведки
- Лучшие практики SEO

**Что вы создадите:**
- Полную библиотеку контента (блог, email, соцсети, реклама)
- Отчёт конкурентного анализа
- План SEO-оптимизации
- Дашборд аналитики кампании

---

### Модуль 3: CRO и конверсия (60 мин)

Освойте оптимизацию конверсии со специализированными CRO-навыками.

| Команда | Урок | Длительность |
|---------|--------|----------|
| `/training:start-3-1` | Основы CRO | 20 мин |
| `/training:start-3-2` | Оптимизация форм и регистрации | 20 мин |
| `/training:start-3-3` | CRO попапов и онбординга | 20 мин |

**Что вы изучите:**
- 7 CRO-навыков для полной воронки конверсии
- Оптимизация форм (правило 5 полей)
- Лучшие практики потока регистрации
- Дизайн и триггеры попапов
- Онбординг и активация
- Экраны платных стен и апгрейдов
- Дизайн A/B-тестов

**Что вы создадите:**
- CRO-аудит лендинга
- Оптимизированный дизайн формы
- Поток онбординга
- Экран апгрейда
- Гипотезы A/B-тестов

**Полное покрытие воронки CRO:**
```
Посетитель → Page CRO → Form CRO → Signup CRO
     ↓
  Popup CRO (захват уходящих)
     ↓
Новый пользователь → Onboarding CRO → Активация
     ↓
Бесплатный пользователь → Paywall CRO → Платящий клиент
```

---

### Бонусный контент

| Команда | Описание |
|---------|-------------|
| `/training:bonus-patterns` | Библиотека паттернов для заголовков, email, соцсетей, рекламы, CRO |
| `/training:bonus-secret` | Фреймворк маркетолога 10x |
| `/training:help` | Показать все доступные команды обучения |

---

### Многоязычное обучение

Обучение доступно на 3 языках. Весь контент идентичен - выберите предпочитаемый язык:

| Язык | Префикс команды | Пример |
|----------|---------------|---------|
| **Английский** | `/training:` | `/training:start-0-0` |
| **Вьетнамский** (Tiếng Việt) | `/training-vi:` | `/training-vi:start-0-0` |
| **Японский** (日本語) | `/training-ja:` | `/training-ja:start-0-0` |

**Доступные локализованные команды:**
- `start-0-0` до `start-0-2` (Модуль 0)
- `start-1-1` до `start-1-7` (Модуль 1)
- `start-2-1` до `start-2-6` (Модуль 2)
- `start-3-1` до `start-3-3` (Модуль 3)
- `help`, `bonus-patterns`, `bonus-secret`, `persona-builder`

---

### Эффект накопления

Каждая кампания делает следующую быстрее:

| Кампания | Время | Улучшение |
|----------|------|-------------|
| Первая (Модуль 2) | 40 ч | Создание с нуля |
| 5-я кампания | 15 ч | На 62% быстрее |
| 10-я кампания | 10 ч | На 75% быстрее |

**Что вы накопите:**
- Шаблоны брифов кампаний
- Гайдлайны голоса бренда
- Шаблоны контента (блог, email, соцсети, реклама)
- Фреймворки персон
- Шаблоны конкурентного анализа
- Чеклисты SEO-оптимизации
- Кастомные агенты-рецензенты
- Паттерны автоматизации процессов

---

## Пути обучения

### Путь 1: Быстрый старт (30 мин)
Для опытных маркетологов - сразу в продакшен:
```bash
/campaign:plan "Your campaign"
/content:good "Your content"
/cro:page "Your landing page"
```

### Путь 2: Полное обучение (5-6 ч)
Для новичков - завершите интерактивное обучение:
```bash
/training:start-0-0  # Начните здесь
```

### Путь 3: По конкретным навыкам (15-30 мин каждый)
Изучайте конкретные навыки по мере необходимости:

| Цель | Команды |
|------|----------|
| **Улучшить конверсии** | `/cro:page`, `/cro:form`, `/marketing:psychology` |
| **Писать лучшие тексты** | `/content:good`, `/content:editing` |
| **Запустить продукт** | `/growth:launch`, `/campaign:plan` |
| **Оптимизировать цены** | `/pricing:strategy` |
| **Масштабировать SEO** | `/seo:programmatic`, `/seo:schema` |
| **Создать реферальную программу** | `/growth:referral` |
| **A/B-тестирование** | `/test:ab-setup` |

### Путь 4: Мастерство CRO (60 мин)
Завершите обучение по оптимизации конверсии:
```bash
/training:start-3-1  # Начните с основ
/training:start-3-2  # Формы и регистрация
/training:start-3-3  # Попапы и онбординг
```

---

## MCP-интеграции

Реальные данные из подключённых сервисов (см. `data-reliability-rules.md`):

| Сервер | Использование |
|--------|---------|
| `sensortower` | Аналитика приложений, ASO |
| `google-search-console` | Эффективность поиска |
| `google-analytics` | Веб-аналитика |
| `semrush` | Ключевые слова, обратные ссылки |
| `dataforseo` | Данные SERP |
| `meta-ads` | Реклама Facebook/Instagram |
| `hubspot` | CRM, автоматизация |

---

## Вклад в проект

Приветствуются вклады! Если у вас есть:
- Улучшенные агенты или навыки
- Новые маркетинговые команды
- Улучшенные процессы
- Исправления ошибок

См. [CONTRIBUTING.md](CONTRIBUTING.md) для руководства.

### Идеи для вклада
- Навыки для конкретных отраслей (B2B, электронная коммерция, SaaS)
- Агенты для конкретных платформ (TikTok, YouTube, Reddit)
- Региональный маркетинг (APAC, EMEA, LATAM)
- Интеграции с аналитикой

---

## Ресурсы

### AgentKits
- [Главная страница AgentKits](https://agentkits.net)
- [Страница Marketing Kit](https://www.agentkits.net/marketing)
- [Документация](https://www.agentkits.net/docs)
- [AgentKits CLI](https://github.com/aitytech/agentkits-cli)

### ИИ-ассистенты
- [Документация Claude Code](https://docs.claude.com/en/docs/claude-code/overview)
- [Документация Cursor](https://docs.cursor.com)
- [Документация GitHub Copilot](https://docs.github.com/en/copilot)
- [Model Context Protocol](https://modelcontextprotocol.io)

### Сообщество
- [GitHub Issues](https://github.com/aitytech/agentkits-marketing/issues)
- [GitHub Discussions](https://github.com/aitytech/agentkits-marketing/discussions)

---

## История звёзд

<a href="https://star-history.dera.page/#aitytech/agentkits-marketing&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://star-history.dera.page/svg?repos=aitytech/agentkits-marketing&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://star-history.dera.page/svg?repos=aitytech/agentkits-marketing&type=Date" />
   <img alt="Star History Chart" src="https://star-history.dera.page/svg?repos=aitytech/agentkits-marketing&type=Date" />
 </picture>
</a>

---

## Лицензия

MIT - Используйте свободно, модифицируйте по необходимости, делитесь улучшениями, если можете.

---

**Поставьте звезду этому репозиторию, если он помог. Начните создавать маркетинговые кампании с ИИ сегодня.**