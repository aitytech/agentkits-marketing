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
  <strong>Automação de marketing com IA de nível empresarial para Claude Code, Cursor, GitHub Copilot e qualquer assistente de IA que suporte agentes e skills.</strong>
</p>

<p align="center">
  Agentes de marketing prontos para produção, skills, comandos e fluxos de trabalho construídos para fundadores de SaaS, profissionais de marketing e equipes de crescimento. Planejamento de campanhas, criação de conteúdo, SEO, CRO, sequências de email e análises - tudo alimentado por agentes de IA especializados.
</p>

<p align="center">
  <a href="https://www.agentkits.net/marketing">Website</a> •
  <a href="https://www.agentkits.net/docs">Documentação</a> •
  <a href="#instalação">Instalar</a> •
  <a href="#treinamento">Treinamento</a>
</p>

<p align="center">
  🌐 <a href="README.md">English</a> · <a href="README.zh.md">简体中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.es.md">Español</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <strong>Português</strong> · <a href="README.vi.md">Tiếng Việt</a> · <a href="README.ru.md">Русский</a> · <a href="README.ar.md">العربية</a>
</p>

---

## Vibe Marketing

<p>
  <img src="https://img.shields.io/badge/Vibe_Coding-Developers-blue?style=for-the-badge&logo=code&logoColor=white" alt="Vibe Coding">
  <img src="https://img.shields.io/badge/→-black?style=for-the-badge" alt="arrow">
  <img src="https://img.shields.io/badge/Vibe_Marketing-Marketers-green?style=for-the-badge&logo=target&logoColor=white" alt="Vibe Marketing">
</p>

> *Inspirado pelo movimento "Vibe Coding" dos desenvolvedores... estamos expandindo o universo: **Vibe Marketing** para a era da IA onde tudo simplesmente funciona.*

| | |
|---|---|
| **Com IA** | Deixe os agentes de IA cuidarem de suas campanhas enquanto você foca na estratégia. Apenas entre no clima e deixe os agentes fazerem o trabalho pesado. |
| **Sem IA** | Este repositório é uma **biblioteca de referência abrangente** de melhores práticas de marketing, frameworks e templates. Use a documentação das skills como seu manual de marketing. |

---

## O Que Está Incluído

Funciona com **Claude Code**, **Cursor**, **GitHub Copilot** e qualquer assistente de IA que suporte agentes e skills. Instale como plugin ou copie componentes manualmente.

```
agentkits-marketing/
|-- .claude-plugin/      # Manifestos de plugin e marketplace
|   |-- plugin.json            # Metadados do plugin e caminhos dos componentes
|   |-- marketplace.json       # Catálogo do marketplace para /plugin marketplace add
|
|-- .claude/
|   |-- agents/          # 18 agentes de marketing especializados
|   |   |-- attraction-specialist.md    # Geração de leads, SEO, landing pages
|   |   |-- lead-qualifier.md           # Pontuação de leads, segmentação
|   |   |-- email-wizard.md             # Sequências de email, automação
|   |   |-- sales-enabler.md            # Material de vendas, battlecards
|   |   |-- continuity-specialist.md    # Retenção, reengajamento
|   |   |-- upsell-maximizer.md         # Expansão de receita
|   |   |-- copywriter.md               # Copy de alta conversão
|   |   |-- conversion-optimizer.md     # Especialista em CRO
|   |   |-- seo-specialist.md           # Otimização de SEO
|   |   |-- brand-voice-guardian.md     # Consistência de marca
|   |   |-- ...e mais
|   |
|   |-- commands/        # 93 comandos slash por categoria
|   |   |-- campaign/    # /campaign:plan, /campaign:brief, /campaign:analyze
|   |   |-- content/     # /content:blog, /content:landing, /content:email
|   |   |-- seo/         # /seo:keywords, /seo:audit, /seo:programmatic
|   |   |-- cro/         # /cro:page, /cro:form, /cro:popup, /cro:signup
|   |   |-- growth/      # /growth:launch, /growth:referral, /growth:free-tool
|   |   |-- ...e mais
|   |
|   |-- skills/          # 28 skills de marketing
|   |   |-- marketing-psychology/       # Mais de 70 modelos mentais
|   |   |-- marketing-ideas/            # Mais de 140 estratégias SaaS
|   |   |-- page-cro/                   # Otimização de landing pages
|   |   |-- copywriting/                # Copy de marketing
|   |   |-- programmatic-seo/           # Geração de páginas em escala
|   |   |-- pricing-strategy/           # Precificação e empacotamento
|   |   |-- ...e mais
|   |
|   |-- workflows/       # Fluxos de trabalho centrais de marketing
|       |-- primary-workflow.md         # Ciclo de vida da campanha
|       |-- sales-workflow.md           # Lead para cliente
|       |-- crm-workflow.md             # Ciclo de vida do contato
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
|-- docs/                # Documentação e guias
|-- marketplace.json     # Configuração do marketplace auto-hospedado
```

---

## Instalação

### Opção 1: Marketplace de Plugins do Claude Code (Recomendado para Claude Code)

Instale diretamente via sistema de plugins do Claude Code — sem configuração manual:

```bash
# Adicionar o marketplace
/plugin marketplace add aitytech/agentkits-marketing

# Instalar a suíte completa (18 agentes, 28 skills, 93 comandos)
/plugin install agentkits-marketing@agentkits-marketing
```

Você também pode instalar componentes individuais:

```bash
/plugin install agentkits-marketing-skills@agentkits-marketing    # Apenas Skills
/plugin install agentkits-marketing-agents@agentkits-marketing    # Apenas Agentes
/plugin install agentkits-marketing-commands@agentkits-marketing  # Apenas Comandos
```

Reinicie o Claude Code após a instalação.

---

### Opção 2: Instalar via npx (Todas as Plataformas)

Um comando para instalar 18 agentes, 28 skills, 93 comandos:

```bash
npx @aitytech/agentkits-marketing install
```

**Instalação específica por plataforma:**

```bash
npx @aitytech/agentkits-marketing install --platform claude    # Claude Code
npx @aitytech/agentkits-marketing install --platform cursor    # Cursor IDE
npx @aitytech/agentkits-marketing install --platform windsurf  # Windsurf
npx @aitytech/agentkits-marketing install --platform cline     # Cline
npx @aitytech/agentkits-marketing install --platform copilot   # GitHub Copilot
npx @aitytech/agentkits-marketing install --platform all       # Todas as plataformas
```

**Outros comandos CLI:**

```bash
npx @aitytech/agentkits-marketing --help        # Mostrar todos os comandos
npx @aitytech/agentkits-marketing list-ides     # Listar IDEs suportadas
npx @aitytech/agentkits-marketing list-modules  # Listar módulos disponíveis
npx @aitytech/agentkits-marketing update        # Atualizar instalação existente
```

---

### Opção 3: Clonar e Usar

Clone o repositório e trabalhe dentro dele:

```bash
git clone https://github.com/aitytech/agentkits-marketing.git
cd agentkits-marketing
claude
```

---

### Opção 4: Instalação Manual

Copie componentes individuais para sua configuração do Claude:

```bash
# Clone o repositório
git clone https://github.com/aitytech/agentkits-marketing.git

# Copie os agentes
cp agentkits-marketing/.claude/agents/*.md ~/.claude/agents/

# Copie os comandos
cp -r agentkits-marketing/.claude/commands/* ~/.claude/commands/

# Copie as skills
cp -r agentkits-marketing/.claude/skills/* ~/.claude/skills/

# Copie os workflows
cp -r agentkits-marketing/.claude/workflows/* ~/.claude/workflows/
```

---

## Início Rápido

### Lançamento de Campanha

```bash
# Pesquisa e planejamento
/research:market "SaaS productivity tools"
/competitor:deep "competitor.com"
/campaign:plan "Q1 Product Launch"

# Gerar conteúdo
/content:landing "new feature" "target audience"
/content:email "product launch" "trial users"
/content:blog "feature announcement" "primary keyword"

# Otimizar
/cro:page "landing page for conversion"
/seo:optimize "content.md" "target keyword"
```

### Criação de Conteúdo

```bash
/content:good "Blog post about AI marketing"
/content:editing "polish this draft"
/seo:keywords "ai marketing automation"
```

### Otimização de Conversão

```bash
/cro:page "homepage conversion audit"
/cro:form "lead capture optimization"
/cro:signup "registration flow"
/test:ab-setup "headline variations"
```

### Crescimento e Estratégia

```bash
/marketing:ideas "SaaS product"
/marketing:psychology "pricing objections"
/growth:launch "Product Hunt strategy"
/pricing:strategy "tier structure"
```

---

## Skills Disponíveis

| Skill | Descrição | Usar Quando |
|-------|-----------|-------------|
| **Marketing Central** |
| `marketing-psychology` | Mais de 70 modelos mentais para marketing | Persuasão, precificação, objeções |
| `marketing-ideas` | 140 estratégias SaaS comprovadas | Precisa de ideias de marketing |
| `marketing-fundamentals` | Funil, jornada, posicionamento | Conceitos fundamentais |
| **Otimização de Conversão** |
| `page-cro` | Landing page, homepage, precificação | Página não está convertendo |
| `form-cro` | Captura de leads, formulários de contato | Otimização de formulário |
| `popup-cro` | Modais, overlays, exit intent | Criação de popup |
| `signup-flow-cro` | Registro, inscrição para trial | Fricção no cadastro |
| `onboarding-cro` | Ativação pós-cadastro | Ativação de usuário |
| `paywall-upgrade-cro` | Paywalls no app, telas de upgrade | Conversão freemium |
| `ab-test-setup` | Design de experimentos | Testes A/B |
| **Conteúdo e Copy** |
| `copywriting` | Copy de página de marketing | Escrever novo copy |
| `copy-editing` | Editar e polir | Melhorar copy existente |
| `email-sequence` | Campanhas de gotejamento, nutrição | Automação de email |
| **SEO e Crescimento** |
| `seo-mastery` | Palavra-chave, técnico, on-page | Otimização de SEO |
| `programmatic-seo` | Páginas de template em escala | SEO em escala |
| `schema-markup` | Dados estruturados, rich snippets | Implementação de schema |
| `competitor-alternatives` | Páginas vs, alternativas | Conteúdo de comparação |
| `launch-strategy` | Lançamentos de produto, anúncios | Go-to-market |
| `pricing-strategy` | Precificação, empacotamento, níveis | Decisões de precificação |
| `referral-program` | Programa de indicação, afiliados | Crescimento viral |
| `free-tool-strategy` | Engenharia como marketing | Planejamento de ferramenta gratuita |

---

## Agentes de Marketing

### Agentes Principais
| Agente | Foco |
|--------|------|
| `attraction-specialist` | Geração de leads, SEO, landing pages |
| `lead-qualifier` | Pontuação de leads, segmentação |
| `email-wizard` | Sequências de email, automação |
| `sales-enabler` | Material de vendas, battlecards |
| `continuity-specialist` | Retenção, reengajamento |
| `upsell-maximizer` | Expansão de receita, venda cruzada |

### Agentes de Suporte
| Agente | Foco |
|--------|------|
| `researcher` | Pesquisa de mercado, inteligência competitiva |
| `brainstormer` | Ideação de campanha, conceitos criativos |
| `planner` | Planejamento de campanha, calendários |
| `copywriter` | Copy de alta conversão |
| `project-manager` | Coordenação de campanha |
| `docs-manager` | Documentação de marketing |

### Agentes Revisores
| Agente | Perspectiva |
|--------|-------------|
| `brand-voice-guardian` | Consistência de marca |
| `conversion-optimizer` | Melhores práticas de CRO |
| `seo-specialist` | Otimização de SEO |
| `solopreneur` | Freelancer/pequeno negócio |
| `startup-founder` | Startup em estágio inicial |

---

## Categorias de Comandos

| Categoria | Comandos | Exemplos |
|-----------|----------|----------|
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
| ...mais | 45+ | Veja referência completa de comandos |

---

## Treinamento

**22 lições interativas** para dominar marketing alimentado por IA. Aprenda fazendo trabalho real de marketing dentro do seu assistente de IA.

| | |
|---|---|
| **Método** | Lições interativas ensinadas pelo Claude |
| **Projeto** | Agência Markit trabalhando para o cliente AgentKits |
| **Duração** | 5-6 horas no total |
| **Pré-requisito** | Claude Code, Cursor ou assistente de IA compatível |
| **Idiomas** | Inglês, Vietnamita (Tiếng Việt), Japonês (日本語) |

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

### Projeto Prático: Agência Markit

Você é um Estrategista de Marketing na **Markit**, uma agência de marketing B2B SaaS.

**Seu Cliente:** AgentKits - toolkit de automação de marketing com IA

| | |
|---|---|
| **Produto** | Automação de marketing com IA de nível empresarial |
| **Alvo** | Fundadores de SaaS, profissionais de marketing e equipes de crescimento |
| **Precificação** | Gratuito e Open Source (licença MIT) |
| **Concorrentes** | Jasper, Copy.ai, HubSpot |

**Personas Principais:**
- **Solo Sam** (25-35) - Empreendedor solo/indie hacker, SaaS bootstrapped
- **Marketer Maya** (30-40) - Gerente de marketing, empresa SaaS de médio porte
- **Founder Felix** (28-40) - Fundador técnico, startup em estágio inicial

---

### Módulo 0: Começando (30 min)

Aprenda o básico e complete sua primeira tarefa de marketing.

| Comando | Lição | Duração |
|---------|-------|---------|
| `/training:start-0-0` | Introdução ao Curso | 10 min |
| `/training:start-0-1` | Instalação e Configuração | 15 min |
| `/training:start-0-2` | Sua Primeira Tarefa de Marketing | 15 min |

**O Que Você Aprenderá:**
- Interface do assistente de IA e comandos básicos
- Criação e gerenciamento de arquivos
- Interagir com IA para tarefas de marketing

---

### Módulo 1: Conceitos Centrais (90 min)

Domine fluxos de trabalho fundamentais através do projeto da agência Markit.

| Comando | Lição | Duração |
|---------|-------|---------|
| `/training:start-1-1` | Bem-vindo à Markit | 20 min |
| `/training:start-1-2` | Trabalhando com Arquivos de Marketing | 25 min |
| `/training:start-1-3` | Primeiras Tarefas de Marketing | 30 min |
| `/training:start-1-4` | Usando Agentes para Marketing | 35 min |
| `/training:start-1-5` | Mergulho Profundo em Agentes Revisores | 30 min |
| `/training:start-1-6` | Memória do Projeto (CLAUDE.md) | 20 min |
| `/training:start-1-7` | Navegação e Busca | 20 min |

**O Que Você Aprenderá:**
- Criação de brief de campanha
- Desenvolvimento de voz de marca e persona
- Coordenação e delegação de agentes
- Melhores práticas de organização de arquivos
- Usar memória do projeto efetivamente

**O Que Você Construirá:**
- Brief de campanha completo
- Documento de diretrizes de marca
- Personas de clientes
- Agentes revisores personalizados

---

### Módulo 2: Aplicações Avançadas (120 min)

Aplique skills em cenários reais de marketing em escala.

| Comando | Lição | Duração |
|---------|-------|---------|
| `/training:start-2-1` | Escrever um Brief de Campanha | 45 min |
| `/training:start-2-2` | Desenvolver Estratégia de Conteúdo | 40 min |
| `/training:start-2-3` | Gerar Copy de Marketing | 35 min |
| `/training:start-2-4` | Analisar Dados de Campanha | 35 min |
| `/training:start-2-5` | Análise Competitiva | 30 min |
| `/training:start-2-6` | Otimização de SEO | 40 min |

**O Que Você Aprenderá:**
- Planejamento estratégico de campanha
- Criação de conteúdo multicanal
- Análise de dados e insights
- Coleta de inteligência competitiva
- Melhores práticas de SEO

**O Que Você Construirá:**
- Biblioteca de conteúdo completa (blog, email, social, anúncios)
- Relatório de análise competitiva
- Plano de otimização de SEO
- Painel de análise de campanha

---

### Módulo 3: CRO e Conversão (60 min)

Domine otimização de taxa de conversão com skills especializadas em CRO.

| Comando | Lição | Duração |
|---------|-------|---------|
| `/training:start-3-1` | Fundamentos de CRO | 20 min |
| `/training:start-3-2` | Otimização de Formulário e Cadastro | 20 min |
| `/training:start-3-3` | CRO de Popup e Onboarding | 20 min |

**O Que Você Aprenderá:**
- 7 skills de CRO para o funil completo de conversão
- Otimização de formulário (regra dos 5 campos)
- Melhores práticas de fluxo de cadastro
- Design e triggers de popup
- Onboarding e ativação
- Telas de paywall e upgrade
- Design de teste A/B

**O Que Você Construirá:**
- Auditoria de CRO de landing page
- Design de formulário otimizado
- Fluxo de onboarding
- Tela de upgrade
- Hipóteses de teste A/B

**Cobertura Completa do Funil de CRO:**
```
Visitante → CRO de Página → CRO de Formulário → CRO de Cadastro
     ↓
  CRO de Popup (capturar abandonos)
     ↓
Novo Usuário → CRO de Onboarding → Ativação
     ↓
Usuário Gratuito → CRO de Paywall → Cliente Pagante
```

---

### Conteúdo Bônus

| Comando | Descrição |
|---------|-----------|
| `/training:bonus-patterns` | Biblioteca de padrões para títulos, emails, social, anúncios, CRO |
| `/training:bonus-secret` | O Framework do Profissional de Marketing 10x |
| `/training:help` | Mostrar todos os comandos de treinamento disponíveis |

---

### Treinamento Multilíngue

O treinamento está disponível em 3 idiomas. Todo o conteúdo é idêntico - escolha seu idioma preferido:

| Idioma | Prefixo do Comando | Exemplo |
|--------|-------------------|---------|
| **Inglês** | `/training:` | `/training:start-0-0` |
| **Vietnamita** (Tiếng Việt) | `/training-vi:` | `/training-vi:start-0-0` |
| **Japonês** (日本語) | `/training-ja:` | `/training-ja:start-0-0` |

**Comandos localizados disponíveis:**
- `start-0-0` a `start-0-2` (Módulo 0)
- `start-1-1` a `start-1-7` (Módulo 1)
- `start-2-1` a `start-2-6` (Módulo 2)
- `start-3-1` a `start-3-3` (Módulo 3)
- `help`, `bonus-patterns`, `bonus-secret`, `persona-builder`

---

### O Efeito Composto

Cada campanha torna a próxima mais rápida:

| Campanha | Tempo | Melhoria |
|----------|-------|----------|
| Primeira (Módulo 2) | 40 hrs | Construir do zero |
| 5ª campanha | 15 hrs | 62% mais rápido |
| 10ª campanha | 10 hrs | 75% mais rápido |

**O Que Você Acumulará:**
- Templates de brief de campanha
- Diretrizes de voz de marca
- Templates de conteúdo (blog, email, social, anúncios)
- Frameworks de persona
- Templates de análise competitiva
- Checklists de otimização de SEO
- Agentes revisores personalizados
- Padrões de automação de fluxo de trabalho

---

## Caminhos de Aprendizado

### Caminho 1: Início Rápido (30 min)
Para profissionais de marketing experientes - vá direto para produção:
```bash
/campaign:plan "Your campaign"
/content:good "Your content"
/cro:page "Your landing page"
```

### Caminho 2: Treinamento Completo (5-6 hrs)
Para iniciantes - complete o treinamento interativo:
```bash
/training:start-0-0  # Comece aqui
```

### Caminho 3: Específico de Skill (15-30 min cada)
Aprenda skills específicas conforme necessário:

| Objetivo | Comandos |
|----------|----------|
| **Melhorar conversões** | `/cro:page`, `/cro:form`, `/marketing:psychology` |
| **Escrever copy melhor** | `/content:good`, `/content:editing` |
| **Lançar um produto** | `/growth:launch`, `/campaign:plan` |
| **Otimizar precificação** | `/pricing:strategy` |
| **Escalar SEO** | `/seo:programmatic`, `/seo:schema` |
| **Desenhar programa de indicação** | `/growth:referral` |
| **Testes A/B** | `/test:ab-setup` |

### Caminho 4: Maestria em CRO (60 min)
Complete o treinamento completo de otimização de conversão:
```bash
/training:start-3-1  # Comece com fundamentos
/training:start-3-2  # Formulário e cadastro
/training:start-3-3  # Popup e onboarding
```

---

## Integrações MCP

Dados reais de serviços conectados (veja `data-reliability-rules.md`):

| Servidor | Usar Para |
|----------|-----------|
| `sensortower` | Análise de app, ASO |
| `google-search-console` | Performance de busca |
| `google-analytics` | Análise web |
| `semrush` | Palavras-chave, backlinks |
| `dataforseo` | Dados de SERP |
| `meta-ads` | Anúncios Facebook/Instagram |
| `hubspot` | CRM, automação |

---

## Contribuindo

Contribuições são bem-vindas! Se você tem:
- Agentes ou skills melhorados
- Novos comandos de marketing
- Melhores fluxos de trabalho
- Correções de bugs

Veja [CONTRIBUTING.md](CONTRIBUTING.md) para diretrizes.

### Ideias para Contribuições
- Skills específicas de indústria (B2B, e-commerce, SaaS)
- Agentes específicos de plataforma (TikTok, YouTube, Reddit)
- Marketing regional (APAC, EMEA, LATAM)
- Integrações de análise

---

## Recursos

### AgentKits
- [Homepage do AgentKits](https://agentkits.net)
- [Página do Kit de Marketing](https://www.agentkits.net/marketing)
- [Documentação](https://www.agentkits.net/docs)
- [AgentKits CLI](https://github.com/aitytech/agentkits-cli)

### Assistentes de IA
- [Documentação do Claude Code](https://docs.claude.com/en/docs/claude-code/overview)
- [Documentação do Cursor](https://docs.cursor.com)
- [Documentação do GitHub Copilot](https://docs.github.com/en/copilot)
- [Model Context Protocol](https://modelcontextprotocol.io)

### Comunidade
- [GitHub Issues](https://github.com/aitytech/agentkits-marketing/issues)
- [GitHub Discussions](https://github.com/aitytech/agentkits-marketing/discussions)

---

## Histórico de Estrelas

<a href="https://star-history.dera.page/#aitytech/agentkits-marketing&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://star-history.dera.page/svg?repos=aitytech/agentkits-marketing&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://star-history.dera.page/svg?repos=aitytech/agentkits-marketing&type=Date" />
   <img alt="Star History Chart" src="https://star-history.dera.page/svg?repos=aitytech/agentkits-marketing&type=Date" />
 </picture>
</a>

---

## Licença

MIT - Use livremente, modifique conforme necessário, contribua de volta se puder.

---

**Dê uma estrela neste repositório se ele ajudar. Comece a construir campanhas de marketing alimentadas por IA hoje.**