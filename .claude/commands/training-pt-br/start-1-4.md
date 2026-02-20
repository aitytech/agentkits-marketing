# /training-pt-br:start-1-4 - Usando Agentes para Marketing

## Padrões de Idioma e Qualidade

**CRÍTICO**: Responda no mesmo idioma que o usuário está usando. Se vietnamita, responda em vietnamita. Se espanhol, responda em espanhol.

---

## Instruções para Claude

Ensine o conceito de agentes - membros especializados da equipe de IA que lidam com diferentes funções de marketing.

### Visão Geral da Lição

---

**Módulo 1.4: Usando Agentes para Marketing**

O kit de marketing possui 18 agentes especializados. Pense neles como membros da equipe de IA que podem trabalhar em tarefas específicas de marketing com expertise.

**Duração:** ~35 minutos

---

### Passo 1: Explicar o Sistema de Agentes

O kit de marketing possui agentes organizados por função:

**Agentes de Marketing Principais (6):**
| Agente | Foco | Casos de Uso |
|-------|-------|-----------|
| `attraction-specialist` | TOFU, geração de leads | SEO, landing pages, inteligência competitiva |
| `lead-qualifier` | Detecção de intenção | Pontuação de leads, análise comportamental |
| `email-wizard` | Email marketing | Sequências, automação, otimização |
| `sales-enabler` | Suporte de vendas | Pitches, estudos de caso, battlecards |
| `continuity-specialist` | Retenção | Detecção de churn, reengajamento |
| `upsell-maximizer` | Expansão de receita | Cross-sell, upsell, adoção de recursos |

**Agentes de Suporte (6):**
| Agente | Foco | Casos de Uso |
|-------|-------|-----------|
| `researcher` | Inteligência de mercado | Pesquisa, análise competitiva |
| `brainstormer` | Ideação criativa | Conceitos de campanha, ângulos de mensagem |
| `planner` | Planejamento estratégico | Planos de campanha, calendários de conteúdo |
| `project-manager` | Coordenação | Acompanhamento de status, supervisão de campanhas |
| `copywriter` | Criação de conteúdo | Copy, mensagens, criativo |
| `docs-manager` | Documentação | Diretrizes de marca, guias de estilo |

**Agentes Revisores (6):**
| Agente | Perspectiva | Revisa Para |
|-------|-------------|-------------|
| `brand-voice-guardian` | Consistência de marca | Voz, tom, mensagens |
| `conversion-optimizer` | Especialista em CRO | Conversão, persuasão |
| `seo-specialist` | Otimização de busca | Palavras-chave, SEO técnico |
| `manager-maria` | Gerente de marketing (38 anos, B2B) | Estratégia, adequação à equipe |
| `solo-steve` | Empreendedor solo (32 anos) | Tempo, orçamento, DIY |
| `startup-sam` | Fundador de startup (28 anos) | Crescimento, viralidade, velocidade |

### Passo 2: Exercício de Agente - Revisão Multiperspectiva

Crie conteúdo e revise de múltiplas perspectivas:

```
Review the AgentKits campaign brief from three agent perspectives:

1. As the `brand-voice-guardian` - evaluate brand consistency and messaging
2. As the `conversion-optimizer` - assess CTAs, persuasion, and conversion potential
3. As `manager-maria` - would this work for a B2B marketing team to execute?

For each perspective, provide:
- What's working well
- Areas for improvement
- Specific recommendations
```

Explique o que acabou de acontecer - três revisões especializadas em um único comando.

### Passo 3: Usando Qualificação de Leads

Demonstre o agente lead-qualifier via comandos:

```
/leads:score "B2B SaaS company - technology industry"
```

```
/leads:qualify "AgentKits productivity tool"
```

Mostre como o lead-qualifier cria:
- Critérios de pontuação demográfica
- Sinais de pontuação comportamental
- Limites de MQL/SQL

### Passo 4: Usando Email Wizard

Demonstre o agente email-wizard:

```
/sequence:welcome "AgentKits" "trial users"
```

```
/sequence:nurture "AgentKits" "leads who downloaded our guide"
```

### Passo 5: Usando Sales Enabler

Demonstre o agente sales-enabler:

```
/sales:pitch "enterprise company considering AgentKits" "team coordination"
```

```
/sales:battlecard "RescueTime"
```

### Passo 6: Cenário do Mundo Real - Resposta Rápida

```
SCENARIO: A competitor just announced a "team focus" feature. Use agents to respond:

1. Use `researcher` to analyze their announcement
2. Use `brainstormer` to develop counter-positioning
3. Use `copywriter` to create response content
4. Use `email-wizard` to draft customer communication
```

### Passo 7: Melhores Práticas de Agentes

Compartilhe essas dicas:
- Seja específico com os objetivos da tarefa
- Referencie diretrizes de marca e personas
- Defina saídas claramente (formato, tamanho)
- Use agentes especializados para tarefas especializadas
- Combine agentes para projetos complexos

### Próximos Passos

Diga a eles:
- Eles agora entendem o sistema de 18 agentes
- **Próximo:** `/training-pt-br:start-1-5` - Sub-Agentes de Marketing Personalizados
- Eles aprenderão sobre revisores de persona e como obter feedback direcionado

## Pontos-Chave de Ensino
- 18 agentes organizados: Principais (6), Suporte (6), Revisores (6)
- Agentes principais mapeiam para estágios do funil
- Agentes revisores fornecem feedback multiperspectiva
- Comandos invocam capacidades específicas do agente
- Combine agentes para projetos complexos

---

REGRAS CRÍTICAS DE SAÍDA:
- Produza APENAS o conteúdo markdown traduzido bruto
- NÃO envolva a saída em blocos de código ```markdown
- NÃO adicione preâmbulo, explicação ou comentário
- Comece diretamente com o conteúdo traduzido
- A saída será salva diretamente em um arquivo .md