---
description: /training-pt-br:start-3-2 - Otimização de Formulários e Cadastro
argument-hint:
---

# Módulo 3, Lição 2: Otimização de Formulários e Cadastro

## Dominando o CRO de Formulários e Registro

Formulários são guardiões de conversão. Cada campo desnecessário custa leads. Esta lição ensina você a otimizar formulários de captura de leads e fluxos de cadastro.

## Objetivos de Aprendizagem

Ao final desta lição, você será capaz de:
1. Aplicar a regra do máximo de 5 campos
2. Otimizar fluxos de cadastro para conversão
3. Reduzir atrito em formulários sistematicamente
4. Projetar formulários progressivos de múltiplas etapas

---

## Princípios de CRO para Formulários

### A Regra dos 5 Campos

Cada campo além de 5 reduz a conversão em ~10%.

**Apenas campos essenciais:**
1. Email (sempre obrigatório)
2. Nome (às vezes)
3. Empresa (apenas B2B)
4. Senha (apenas cadastro)
5. Um qualificador se necessário

**Adie todo o resto** para pós-cadastro.

### Pontos de Atrito a Eliminar

| Atrito | Solução |
|----------|-----|
| Muitos campos | Remover ou adiar |
| Requisitos de senha | Mostrar inline, não após erro |
| Telefone obrigatório | Tornar opcional ou remover |
| CAPTCHA | Usar alternativas invisíveis |
| Sem login social | Adicionar opções Google/SSO |

---

## Comando de CRO para Formulários

Use `/cro:form` para formulários de captura de leads:

```bash
/cro:form "Optimize AgentKits's demo request form: Name, Email, Company, Phone, Title, Team Size, Message"
```

### Recomendações Esperadas

1. **Remover:** Message (perguntar no follow-up)
2. **Remover:** Phone (pode capturar depois)
3. **Tornar opcional:** Title
4. **Manter:** Name, Email, Company, Team Size

Reduzido de 7 → 4 campos = estimativa de +30% conversões

---

## Otimização de Fluxo de Cadastro

Para registro de conta, use `/cro:signup`:

```bash
/cro:signup "Analyze AgentKits's trial signup: Email → Password → Company → Team Size → Use Case → Payment"
```

### Padrões de Fluxo de Cadastro

| Padrão | Melhor Para | Conversão |
|---------|----------|------------|
| Início apenas com email | Maior conversão | Começar com email, profiling progressivo |
| Social primeiro | Apps de consumidor | Google/SSO em destaque |
| Página única mínima | B2C, produtos simples | Todos os campos visíveis |
| Multi-etapa com progresso | B2B, complexo | Guiado, mostra progresso |

---

## Exercício 1: Auditoria de Formulário

Audite o formulário atual de solicitação de demo do AgentKits:

```bash
/cro:form "7-field form: Name, Email, Company, Phone, Job Title, Team Size, Message. Goal: schedule demo calls."
```

Crie recomendações em:
```
training/exercises/markit/cro/form-audit.md
```

### Sua Saída Deve Incluir

1. Campos a remover
2. Campos a tornar opcionais
3. Estratégia de profiling progressivo
4. Melhorias de copy (texto do botão, labels)

---

## Exercício 2: Redesign do Fluxo de Cadastro

Projete um fluxo de cadastro otimizado para o AgentKits:

```bash
/cro:signup "Design optimal trial signup for AgentKits. Current: 5-step process. Goal: maximize trial starts."
```

Considere:
- Captura inicial apenas de email
- Opções OAuth (Google Workspace para B2B)
- Quando coletar informações da empresa
- Separação entre onboarding e cadastro

---

## Exercício 3: Design de Formulário Multi-Etapa

Para cadastros B2B complexos, projete uma abordagem multi-etapa:

**Etapa 1:** Apenas email
**Etapa 2:** Empresa + tamanho da equipe (com barra de progresso)
**Etapa 3:** Seleção opcional de caso de uso

Use a skill form-cro para validar:

```bash
/cro:form "Design 3-step progressive form for AgentKits enterprise demo"
```

---

## Tarefa Prática

Complete estas tarefas:

1. **Audite o formulário atual:**
   Salve em `training/exercises/markit/cro/current-form-audit.md`

2. **Projete formulário otimizado:**
   Salve em `training/exercises/markit/cro/optimized-form.md`

3. **Crie teste A/B:**
   ```bash
   /test:ab-setup "Test 7-field vs 4-field form for AgentKits demos"
   ```
   Salve em `training/exercises/markit/cro/form-ab-test.md`

---

## Checkpoint

Antes de prosseguir, verifique se você consegue:
- [ ] Aplicar a regra do máximo de 5 campos
- [ ] Identificar atrito em fluxos de cadastro
- [ ] Projetar estratégia de profiling progressivo
- [ ] Criar hipóteses de teste A/B para formulários

---

## Próxima Lição

Continue para o Módulo 3, Lição 3: CRO de Popup e Onboarding

```bash
/training-pt-br:start-3-3