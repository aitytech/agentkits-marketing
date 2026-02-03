# /training-pt-br:start-2-1 - Escreva um Brief de Campanha

## Padrões de Idioma e Qualidade

**CRÍTICO**: Responda no mesmo idioma que o usuário está usando. Se for vietnamita, responda em vietnamita. Se for espanhol, responda em espanhol.

---

## Instruções para Claude

Inicie o Módulo 2 - Aplicações Avançadas. Esta lição ensina a criação abrangente de brief de campanha usando os comandos de campanha.

### Visão Geral da Lição

---

**Módulo 2.1: Escreva um Brief de Campanha**

Bem-vindo ao Módulo 2! Agora aplicamos tudo o que você aprendeu aos fluxos de trabalho de marketing reais. Briefs de campanha são a base de uma execução bem-sucedida.

**Duração:** ~45 minutos

---

### Passo 1: Explique a Abordagem Colaborativa

> Claude é seu parceiro estratégico, não uma substituição para sua expertise em marketing. Você traz insights, conhecimento de mercado e pensamento estratégico. Claude ajuda a articular e estruturar essas ideias.

### Passo 2: Colete Informações Estratégicas

Peça ao aluno seu pensamento estratégico:

```
Vamos criar um brief de campanha abrangente para a campanha de crescimento do Q2 da AgentKits.

Primeiro, me conte seu pensamento estratégico:
- Qual é o objetivo principal? (ex: 2000 inscrições para trial)
- Qual é o orçamento?
- Qual é o prazo?
- Algum canal específico para focar?
- Qual é a mensagem-chave deste trimestre?
```

Aguarde a resposta deles, então prossiga.

### Passo 3: Use o Comando de Planejamento de Campanha

Use o comando de planejamento de campanha:

```
/campaign:plan "AgentKits Q2 Growth - Goal: 2000 trial signups, Budget: $75K, Timeframe: 8 weeks, Channels: LinkedIn Ads, Content Marketing, Email Nurture, Key message: Team-wide focus time coordination"
```

Revise o plano de campanha abrangente gerado pelo agente `planner`.

### Passo 4: Gere o Brief Criativo

Agora use o comando de brief criativo:

```
/campaign:brief "AgentKits Q2 Growth Campaign"
```

Explique o que o brief criativo inclui:
- Proposição única
- Insights do público-alvo
- Tom e maneira
- Lista de entregas
- Obrigatoriedades criativas

### Passo 5: Obtenha Feedback de Múltiplas Perspectivas

Use agentes revisores:

```
Review the Q2 campaign plan from three perspectives:

1. `manager-maria` (Marketing Manager) - Is this executable by a marketing team?
2. `conversion-optimizer` - Will this campaign structure drive conversions?
3. `brand-voice-guardian` - Is the messaging on-brand?

Provide specific feedback and recommendations.
```

### Passo 6: Crie o Calendário de Conteúdo

Use o comando de calendário:

```
/campaign:calendar "8 weeks - AgentKits Q2 Growth - content marketing, social media, email nurture focused on team productivity"
```

### Passo 7: Crie Documentos de Apoio

Gere ativos adicionais da campanha:

**Modelo de Pontuação de Leads:**
```
/leads:score "B2B SaaS - technology companies - team productivity"
```

**Sequência de Boas-Vindas:**
```
/sequence:welcome "AgentKits" "trial signups from Q2 campaign"
```

**Sequência de Nutrição:**
```
/sequence:nurture "AgentKits" "engaged leads who haven't converted"
```

### Passo 8: Preparação Competitiva

Prepare materiais competitivos:

```
/sales:battlecard "RescueTime - main competitor for productivity tools"
```

```
/competitor:deep "Freedom app - focus and productivity blocking"
```

### Passo 9: Crie o Plano de Medição

Configure a análise:

```
/analytics:funnel "trial signup funnel - awareness to trial to paid"
```

### Passo 10: Salve como Template

Explique que este fluxo de trabalho pode ser repetido para qualquer campanha:

```
Fluxo de Trabalho do Brief de Campanha:
1. /campaign:plan - Plano estratégico
2. /campaign:brief - Brief criativo
3. /campaign:calendar - Calendário de conteúdo
4. /leads:score - Qualificação de leads
5. /sequence:welcome - Nutrição de novos leads
6. /sequence:nurture - Nutrição contínua
7. /sales:battlecard - Preparação competitiva
8. /analytics:funnel - Configuração de medição
```

### O Que Vem a Seguir

Diga a eles:
- Eles criaram um brief de campanha profissional em menos de uma hora
- Normalmente isso leva dias com múltiplas reuniões
- **Próximo:** `/training-pt-br:start-2-2` - Desenvolva Estratégia de Conteúdo
- Eles vão construir planos de conteúdo abrangentes

## Pontos de Ensino Principais
- Briefs de campanha são colaborativos
- Use `/campaign:plan` para planejamento estratégico
- Use `/campaign:brief` para direção criativa
- Use `/campaign:calendar` para agendamento de conteúdo
- Use agentes revisores para feedback
- Crie ativos de apoio (pontuação de leads, sequências, battlecards)

---

REGRAS CRÍTICAS DE SAÍDA:
- Produza APENAS o conteúdo markdown traduzido bruto
- NÃO envolva a saída em delimitadores de código ```markdown
- NÃO adicione nenhum preâmbulo, explicação ou comentário
- Comece diretamente com o conteúdo traduzido
- A saída será salva diretamente em um arquivo .md