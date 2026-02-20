# /training-pt-br:start-1-3 - Primeiras Tarefas de Marketing

## Padrões de Linguagem e Qualidade

**CRÍTICO**: Responda no mesmo idioma que o usuário está usando. Se vietnamita, responda em vietnamita. Se espanhol, responda em espanhol.

---

## Instruções para Claude

Guie os alunos através de tarefas reais de marketing: cópia multicanal, análise competitiva e planejamento de conteúdo usando comandos reais do sistema.

### Visão Geral da Lição

---

**Módulo 1.3: Primeiras Tarefas de Marketing**

Agora vamos fazer trabalho de marketing de verdade. Você completará três tarefas comuns que todo profissional de marketing realiza regularmente.

**Duração:** ~30 minutos

---

### Tarefa 1: Geração de Cópia Multicanal

Gere cópia para múltiplos canais usando comandos de conteúdo:

**Post no LinkedIn:**
```
/content:social "AgentKits launch announcement - team productivity coordination for remote teams" "linkedin"
```

**Post no Blog:**
```
/content:blog "How Remote Teams Can Coordinate Focus Time Without Endless Meetings" "remote team coordination"
```

**Email:**
```
/content:email "product announcement" "existing subscribers"
```

Revise os resultados juntos. Mostre iteração:

```
Make the LinkedIn post more educational - focus on the problem of coordinating deep work time
```

### Tarefa 2: Análise Competitiva

Use o comando de análise competitiva:

```
/competitor:deep "RescueTime - personal time tracking and productivity software"
```

Explique o que o agente `researcher` analisa:
- Público-alvo
- Principais recursos e posicionamento
- Modelo de precificação
- Forças e fraquezas
- Oportunidades de mercado

Faça uma pergunta de acompanhamento:
```
Based on this analysis, what's AgentKits's biggest competitive advantage?
```

### Tarefa 3: Calendário de Conteúdo

Use o comando de calendário de campanha:

```
/campaign:calendar "4 weeks - AgentKits product launch - focus on remote work productivity, team collaboration, deep work"
```

Revise o calendário gerado:
- Tópicos de posts de blog com palavras-chave de SEO
- Temas de mídia social por plataforma
- Cronograma de newsletters por email
- Objetivos de conteúdo para cada peça

### Passo 4: Expandir Uma Peça

Pegue um tópico e expanda-o usando comandos de conteúdo:

```
/content:blog "The Complete Guide to Team Focus Time: How Remote Teams Can Coordinate Deep Work" "team focus time"
```

### Passo 5: Otimização de SEO

Use comandos de SEO para otimizar:

```
/seo:keywords "remote team productivity"
```

Então:
```
/seo:optimize "the blog post we just created" "team focus time"
```

### Passo 6: Revisar com Especialistas

Use agentes revisores (explique que estes serão cobertos em detalhes mais tarde):

```
Review the blog post from three perspectives:
1. Brand Voice Guardian - does it match our voice?
2. SEO Specialist - is it optimized for search?
3. Conversion Optimizer - will it drive action?
```

### Celebre

Aponte o que eles acabaram de realizar:
- Geração de cópia multicanal usando comandos `/content:*`
- Análise competitiva usando `/competitor:deep`
- Calendário de conteúdo usando `/campaign:calendar`
- Pesquisa de palavras-chave de SEO usando `/seo:keywords`
- Post de blog completo com otimização de SEO

### O Que Vem a Seguir

Diga a eles:
- **Próximo:** `/training-pt-br:start-1-4` - Usando Agentes para Marketing
- Eles aprenderão sobre os 18 agentes especializados e como aproveitá-los

## Pontos-Chave de Ensino
- Comandos reais lidam com tarefas reais de marketing
- Comandos `/content:*` criam conteúdo específico para cada plataforma
- `/competitor:deep` fornece inteligência competitiva
- `/campaign:calendar` cria calendários de conteúdo
- Comandos `/seo:*` lidam com otimização de busca
- Sempre forneça contexto (marca, público, objetivos)

---

REGRAS CRÍTICAS DE SAÍDA:
- Produza APENAS o conteúdo markdown traduzido bruto
- NÃO envolva a saída em cercas de código ```markdown
- NÃO adicione qualquer preâmbulo, explicação ou comentário
- Comece diretamente com o conteúdo traduzido
- A saída será salva diretamente em um arquivo .md