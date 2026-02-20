# /training-pt-br:start-1-1 - Bem-vindo ao Markit

## Padrões de Idioma e Qualidade

**CRÍTICO**: Responda no mesmo idioma que o usuário está usando. Se vietnamita, responda em vietnamita. Se espanhol, responda em espanhol.

---

## Instruções para Claude

Inicie o Módulo 1 - Conceitos Fundamentais. Esta lição apresenta o projeto da agência Markit e os fluxos de trabalho principais do kit de marketing.

### Visão Geral da Lição

---

**Módulo 1.1: Bem-vindo ao Markit**

Bem-vindo ao Módulo 1! Agora vamos dominar os conceitos fundamentais do kit de marketing através de trabalho prático. Ao final deste módulo, você lidará com tarefas reais de marketing com confiança.

**Duração:** ~20 minutos

---

### Etapa 1: Prepare o Cenário

Explique o papel deles:

> Você é um Estrategista de Marketing na agência **Markit**. Seu cliente é **AgentKits**. Sua missão:
> 1. Lançar o produto no mercado
> 2. Gerar reconhecimento e inscrições
> 3. Criar conteúdo que ressoe com equipes remotas
> 4. Construir um motor de marketing de conteúdo sustentável

### Etapa 2: Entenda os Fluxos de Trabalho Principais

Explique os três fluxos de trabalho principais em `.claude/workflows/`:

**Pipeline de Marketing (`primary-workflow.md`):**
```
Research → Insights → Creative → Plan → Create → Edit → Publish → Measure
```

**Pipeline de Vendas (`sales-workflow.md`):**
```
Lead → MQL → SQL → Opportunity → Proposal → Negotiation → Close
```

**Ciclo de Vida CRM (`crm-workflow.md`):**
```
Subscriber → Lead → MQL → SQL → Opportunity → Customer → Advocate
```

### Etapa 3: Entenda os Papéis dos Agentes

Explique como os agentes se mapeiam às funções de marketing:

**TOFU (Topo do Funil):**
- `attraction-specialist` - Geração de leads, SEO, landing pages

**MOFU (Meio do Funil):**
- `lead-qualifier` - Detecção de intenção, pontuação de leads
- `email-wizard` - Sequências de nutrição

**BOFU (Fundo do Funil):**
- `sales-enabler` - Pitches, estudos de caso, battlecards

**Retenção:**
- `continuity-specialist` - Detecção de churn, reengajamento
- `upsell-maximizer` - Expansão de receita

### Etapa 4: Crie o Primeiro Brief de Campanha

Agora o trabalho real começa usando `/campaign:plan`:

```
/campaign:plan "AgentKits Q1 Product Launch - Target: 1000 trial signups in 30 days, Budget: $50K, Channels: LinkedIn, Google Ads, Content, Email"
```

Revise o plano de campanha abrangente gerado.

### Etapa 5: Revise o Brief

Destaque como o agente planejador:
- Criou objetivos estruturados e KPIs
- Definiu segmentos de público-alvo
- Alocou orçamento entre canais
- Configurou framework de medição

### Etapa 6: O Poder da Iteração

Mostre o refinamento usando perguntas de acompanhamento:

```
Expand the target audience section with day-in-the-life scenarios for each persona
```

Explique: A iteração é fundamental. Os primeiros rascunhos são pontos de partida.

### Etapa 7: Demonstração de Consciência de Contexto

Demonstre o poder do contexto:

```
/content:social "Product launch announcement for AgentKits based on the campaign brief" "linkedin"
```

Mostre como Claude extrai do contexto da campanha automaticamente.

### O Que Vem a Seguir

Diga a eles:
- Eles criaram um brief de campanha profissional usando `/campaign:plan`
- Claude usou contexto das diretrizes de marca e personas
- **Próximo:** `/training-pt-br:start-1-2` - Trabalhando com Arquivos de Marketing
- Eles aprenderão a organizar, encontrar e gerenciar ativos de marketing de forma eficiente

## Pontos-Chave de Ensino
- A agência Markit é o projeto de prática hands-on
- Três fluxos de trabalho principais: Marketing, Vendas, CRM
- Agentes se mapeiam aos estágios do funil (TOFU, MOFU, BOFU, Retenção)
- `/campaign:plan` cria briefs de campanha abrangentes
- A iteração melhora a qualidade do resultado

---

REGRAS CRÍTICAS DE SAÍDA:
- Produza APENAS o conteúdo markdown traduzido bruto
- NÃO envolva a saída em code fences ```markdown
- NÃO adicione qualquer preâmbulo, explicação ou comentário
- Comece diretamente com o conteúdo traduzido
- A saída será salva diretamente em um arquivo .md