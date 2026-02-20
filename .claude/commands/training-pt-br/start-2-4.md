# /training-pt-br:start-2-4 - Analisar Dados de Campanha

## Padrões de Idioma e Qualidade

**CRÍTICO**: Responda no mesmo idioma que o usuário está usando. Se vietnamita, responda em vietnamita. Se espanhol, responda em espanhol.

---

## Instruções para Claude

Ensine análise de dados, extração de insights e relatórios executivos usando comandos de analytics.

### Visão Geral da Lição

---

**Módulo 2.4: Analisar Dados de Campanha**

A análise de dados frequentemente consome muito tempo. Vamos dominar a transformação de dados em insights acionáveis e relatórios convincentes.

**Duração:** ~35 minutos

---

### Passo 1: Análise de ROI

Use comandos de analytics:

```
/analytics:roi "Q1 campaign - $50K spend across LinkedIn, Google, Email"
```

Revise o cálculo de ROI:
- Gasto total por canal
- Receita atribuída
- ROAS por canal
- Custo por aquisição

### Passo 2: Análise de Funil

Analise o funil de conversão:

```
/analytics:funnel "trial signup - visitor to trial to paid conversion"
```

Revise as métricas do funil:
- Tráfego por origem
- Taxas de conversão em cada estágio
- Pontos de abandono
- Oportunidades de otimização

### Passo 3: Relatórios de Performance

Gere relatórios de desempenho:

**Relatório Semanal:**
```
/report:weekly "AgentKits" "current week"
```

**Relatório Mensal:**
```
/report:monthly "AgentKits" "current month"
```

### Passo 4: Performance por Canal

Analise por canal:

```
/analytics:report "channel performance" "LinkedIn, Google, Email, Organic"
```

Crie comparação de canais:
- Contribuição de tráfego
- Qualidade de leads
- Taxas de conversão
- Eficiência de custo

### Passo 5: Performance de Conteúdo

Analise a efetividade do conteúdo:

```
/analytics:report "content performance" "blog posts, landing pages, email sequences"
```

Métricas-chave:
- Tráfego por peça de conteúdo
- Engajamento (tempo, scroll, compartilhamentos)
- Taxa de conversão
- Qualidade de leads

### Passo 6: Análise de Qualidade de Leads

Use pontuação de leads para analisar:

```
/crm:score "analyze lead quality by source and campaign"
```

Revise:
- Taxa de MQL por origem
- Conversão de SQL por campanha
- Tendências de pontuação média de leads

### Passo 7: Resumo Executivo

Crie um resumo executivo:

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

### Passo 8: Framework de Dados para Ação

Ensine o framework de insights:

```
For each finding, document:

1. OBSERVATION: What does the data show?
2. INSIGHT: Why is this happening?
3. IMPLICATION: What does it mean?
4. RECOMMENDATION: What should we do?
5. EXPECTED IMPACT: What will change?
```

### Passo 9: Checklists Operacionais

Use checklists de analytics:

```
/checklist:analytics-monthly "current month" "AgentKits"
```

Revise tarefas mensais de analytics:
- Verificações de qualidade de dados
- Verificação de plataforma
- Precisão de relatórios
- Validação de atribuição

### Passo 10: Templates de Relatórios

Explique relatórios reutilizáveis:

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

### Próximos Passos

Diga a eles:
- Eles agora podem transformar dados em decisões
- Relatórios que executivos realmente leem
- **Próximo:** `/training-pt-br:start-2-5` - Análise Competitiva
- Pesquise concorrentes e encontre vantagens

## Pontos-Chave de Ensino
- Comandos `/analytics:*` analisam desempenho
- Comandos `/report:*` geram relatórios
- Análise de ROI e funil são fundamentais
- Resumos executivos devem ser concisos
- Framework de dados para ação garante responsabilidade

---

CRITICAL OUTPUT RULES:
- Output ONLY the raw translated markdown content
- Do NOT wrap output in ```markdown code fences
- Do NOT add any preamble, explanation, or commentary
- Start directly with the translated content
- The output will be saved directly to a .md file