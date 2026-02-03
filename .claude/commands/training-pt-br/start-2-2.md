# /training-pt-br:start-2-2 - Desenvolver Estratégia de Conteúdo

## Padrões de Idioma e Qualidade

**CRÍTICO**: Responda no mesmo idioma que o usuário está usando. Se vietnamita, responda em vietnamita. Se espanhol, responda em espanhol.

---

## Instruções para Claude

Ensine desenvolvimento abrangente de estratégia de conteúdo: pesquisa, planejamento, calendários e mensuração.

### Visão Geral da Lição

---

**Módulo 2.2: Desenvolver Estratégia de Conteúdo**

Uma estratégia de conteúdo transforma a criação aleatória de conteúdo em um motor sistemático de crescimento. Vamos construir uma para AgentKits.

**Duração:** ~40 minutos

---

### Passo 1: Base de Pesquisa

Comece com pesquisa de mercado e audiência:

```
/research:market "B2B team productivity software - remote work tools market"
```

```
/research:persona "Remote team managers at technology companies - 50-500 employees"
```

```
/research:trend "Remote work productivity - team coordination - async work"
```

### Passo 2: Pesquisa de Palavras-chave para SEO

Use comandos de SEO para a base de palavras-chave:

```
/seo:keywords "remote team productivity"
```

```
/seo:keywords "team coordination software"
```

```
/seo:keywords "deep work for teams"
```

Agrupe palavras-chave em clusters de tópicos:
- Cluster 1: Produtividade de equipes remotas
- Cluster 2: Tempo de foco da equipe
- Cluster 3: Coordenação sem reuniões

### Passo 3: Análise de Conteúdo Competitivo

Analise o conteúdo dos concorrentes:

```
/seo:competitor "rescuetime.com"
```

Identifique:
- Quais tópicos eles cobrem
- Lacunas de conteúdo que podemos preencher
- Palavras-chave para as quais eles estão ranqueando

### Passo 4: Criar Calendário de Conteúdo

Use o calendário de campanha para planejamento de conteúdo:

```
/campaign:calendar "12 weeks - AgentKits content strategy - focus on SEO, thought leadership, lead generation - topics: remote productivity, team coordination, deep work, meeting reduction"
```

### Passo 5: Definir Tipos de Conteúdo

Planeje conteúdo por estágio do funil:

**TOFU (Conscientização):**
- Posts de blog (focados em SEO)
- Conteúdo de mídia social
- Liderança de pensamento

**MOFU (Consideração):**
- Guias de comparação
- Conteúdo de como fazer
- Estudos de caso

**BOFU (Decisão):**
- Demos de produto
- Calculadoras de ROI
- Depoimentos de clientes

### Passo 6: Criar Estratégia de Conteúdo Pilar

Planeje uma estratégia de página pilar:

```
/content:blog "The Complete Guide to Remote Team Productivity: How to Coordinate Focus Time Across Time Zones" "remote team productivity"
```

Conteúdo em cluster (link para o pilar):
1. Como agendar tempo de foco da equipe
2. Reduzindo reuniões sem perder o alinhamento
3. Melhores práticas de comunicação assíncrona
4. Trabalho profundo em equipes remotas
5. Rastreamento de produtividade para equipes

### Passo 7: Fluxo de Trabalho de Produção de Conteúdo

Use os comandos de conteúdo para cada peça:

**Produção de Post de Blog:**
```
1. /seo:keywords "topic" - Pesquisar palavras-chave
2. /content:blog "title" "keyword" - Criar post
3. /seo:optimize "post" "keyword" - Otimizar
4. Revisar com o agente seo-specialist
5. Revisar com o agente brand-voice-guardian
```

**Produção de Conteúdo Social:**
```
1. /content:social "topic" "linkedin" - Post no LinkedIn
2. /content:social "topic" "twitter" - Thread no Twitter
3. Revisar com o agente conversion-optimizer
```

### Passo 8: Integração com Email

Crie sequências de email para nutrir consumidores de conteúdo:

```
/sequence:nurture "AgentKits" "blog readers who downloaded guide"
```

### Passo 9: Plano de Distribuição de Conteúdo

Use comandos sociais para distribuição:

```
/social:schedule "linkedin,twitter" "4 weeks - AgentKits content distribution"
```

### Passo 10: Framework de Mensuração

Configure analytics de conteúdo:

```
/analytics:report "content performance" "organic traffic, engagement, conversions"
```

Métricas-chave para rastrear:
- Tráfego orgânico por peça de conteúdo
- Tempo na página
- Taxa de conversão por conteúdo
- Qualidade de leads do conteúdo

### O Que Vem a Seguir

Diga a eles:
- Eles têm uma estratégia de conteúdo completa
- De postagens aleatórias para crescimento sistemático
- **Próximo:** `/training-pt-br:start-2-3` - Gerar Copy de Marketing
- Escalar a produção de copy mantendo a qualidade

## Pontos-Chave de Ensino
- Estratégia transforma conteúdo de aleatório para sistemático
- Comandos `/research:*` constroem a base
- `/seo:keywords` identifica oportunidades
- Pilar + cluster = potência de SEO
- Produção de conteúdo segue fluxo de trabalho repetível
- Mensuração garante responsabilidade

---

REGRAS CRÍTICAS DE SAÍDA:
- Exiba APENAS o conteúdo markdown traduzido bruto
- NÃO envolva a saída em cercas de código ```markdown
- NÃO adicione nenhum preâmbulo, explicação ou comentário
- Comece diretamente com o conteúdo traduzido
- A saída será salva diretamente em um arquivo .md