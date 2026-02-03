---
---
description: /training-pt-br:start-3-1 - Fundamentos de CRO
argument-hint:
---

# Módulo 3, Lição 1: Fundamentos de CRO

## Bem-vindo à Otimização da Taxa de Conversão

Neste módulo, você dominará as novas habilidades de CRO (Otimização da Taxa de Conversão) adicionadas ao AgentKits Marketing. Essas habilidades ajudam você a melhorar sistematicamente as taxas de conversão em todos os ativos de marketing.

## Objetivos de Aprendizagem

Ao final desta lição, você será capaz de:
1. Compreender as 6 categorias de habilidades de CRO
2. Saber quando usar cada comando de CRO
3. Aplicar princípios psicológicos às conversões
4. Criar sua primeira auditoria de CRO

---

## O Conjunto de Habilidades de CRO

O AgentKits Marketing inclui 7 habilidades especializadas de CRO:

| Habilidade | Use Para | Comando |
|-------|---------|---------|
| `page-cro` | Landing pages, páginas iniciais, preços | `/cro:page` |
| `form-cro` | Captura de leads, contato, formulários de demo | `/cro:form` |
| `popup-cro` | Modais, overlays, intenção de saída | `/cro:popup` |
| `signup-flow-cro` | Registro, inscrições para trial | `/cro:signup` |
| `onboarding-cro` | Ativação pós-inscrição | `/cro:onboarding` |
| `paywall-upgrade-cro` | Paywalls no aplicativo, upgrades | `/cro:paywall` |
| `ab-test-setup` | Design de experimentos | `/test:ab-setup` |

---

## Framework de CRO

Toda análise de CRO segue esta hierarquia:

### 1. Proposta de Valor (Maior Impacto)
- Os visitantes conseguem entender o que você oferece em 5 segundos?
- O benefício está claro, não apenas as funcionalidades?

### 2. Efetividade do Título
- Ele comunica o valor principal?
- É específico e crível?

### 3. Otimização de CTA
- Uma ação primária clara?
- Acima da dobra, visível, convincente?

### 4. Sinais de Confiança
- Prova social próxima às decisões?
- Selos de segurança visíveis?

### 5. Redução de Atrito
- Campos de formulário mínimos?
- Próximos passos claros?

---

## Exercício 1: Auditar a Landing Page da AgentKits

Vamos aplicar os princípios de CRO à landing page da AgentKits.

### Estado Atual (Hipotético)

**Título:** "Team Productivity Software"
**CTA:** "Learn More"
**Formulário:** 7 campos

### Sua Tarefa

Crie uma auditoria de CRO usando o comando `/cro:page`:

```bash
/cro:page "Analyze AgentKits's landing page: Headline 'Team Productivity Software', CTA 'Learn More', 7-field form. Target: remote team managers."
```

### Resultado Esperado

A auditoria deve identificar:
- Título genérico (não específico ou focado em benefícios)
- CTA fraco ("Learn More" vs orientado à ação)
- Alto atrito (7 campos é demais)

---

## Exercício 2: Aplicar Psicologia

A habilidade `marketing-psychology` inclui mais de 70 modelos mentais. Tente:

```bash
/marketing:psychology "How can we use loss aversion and social proof to improve AgentKits's trial signup rate?"
```

### Modelos Principais para CRO

| Modelo | Aplicação |
|-------|-------------|
| Aversão à Perda | Enquadramento "Não perca" |
| Prova Social | "Junte-se a mais de 10.000 equipes" |
| Ancoragem | Mostre o plano mais caro primeiro |
| Escassez | Vagas ou tempo limitados |
| Reciprocidade | Valor gratuito antes da solicitação |

---

## Tarefa Prática

Crie um plano completo de melhoria de CRO:

1. **Execute a auditoria da página:**
   ```bash
   /cro:page "AgentKits homepage audit"
   ```

2. **Otimize o formulário:**
   ```bash
   /cro:form "Reduce AgentKits's 7-field trial signup form"
   ```

3. **Projete um teste A/B:**
   ```bash
   /test:ab-setup "Test new headline vs current for AgentKits"
   ```

Salve seu trabalho em:
```
training/exercises/markit/cro/
├── landing-page-audit.md
├── form-optimization.md
└── ab-test-plan.md
```

---

## Checkpoint

Antes de prosseguir, verifique se você consegue:
- [ ] Identificar as 6 categorias de habilidades de CRO
- [ ] Executar uma auditoria `/cro:page`
- [ ] Aplicar princípios psicológicos ao CRO
- [ ] Criar uma hipótese de teste A/B

---

## Próxima Lição

Continue para o Módulo 3, Lição 2: Otimização de Formulários e Inscrição

```bash
/training-pt-br:start-3-2