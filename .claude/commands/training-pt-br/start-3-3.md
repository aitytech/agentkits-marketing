---
description: /training-pt-br:start-3-3 - CRO de Popup e Onboarding
argument-hint:
---

# Módulo 3, Lição 3: CRO de Popup e Onboarding

## Convertendo Visitantes e Ativando Usuários

Esta lição aborda dois pontos críticos de conversão: capturar visitantes com popups e ativar novos cadastros através do onboarding.

## Objetivos de Aprendizagem

Ao final desta lição, você será capaz de:
1. Projetar popups de alta conversão sem irritar os usuários
2. Otimizar fluxos de onboarding pós-cadastro
3. Identificar e acelerar o "momento Aha"
4. Criar telas de paywall e upgrade

---

## CRO de Popup

### Quando Popups Funcionam

| Tipo | Gatilho | Melhor Para |
|------|---------|----------|
| Intenção de Saída | Mouse sai da janela de visualização | Captura de leads, salvar abandonos |
| Com Atraso | 30-60 segundos na página | Visitantes engajados |
| Por Rolagem | 50-70% de profundidade de rolagem | Engajamento com conteúdo |
| Por Clique | Ação do usuário | CTAs específicos |

### Quando Popups Falham

- Aparecer imediatamente no carregamento da página
- Sem proposta de valor clara
- Difícil de fechar
- Mesmo popup em todas as visitas

---

## Exercício de Design de Popup

Use `/cro:popup` para projetar popups eficazes:

```bash
/cro:popup "Design exit-intent popup for AgentKits blog. Goal: capture emails for 'Remote Team Productivity Guide' lead magnet."
```

### Elementos de um Bom Popup

1. **Valor claro:** O que eles recebem
2. **Campos mínimos:** Apenas e-mail
3. **Fechamento fácil:** X visível
4. **Mobile-friendly:** CTA acessível ao polegar
5. **Limite de frequência:** Uma vez por sessão

---

## CRO de Onboarding

### A Equação de Ativação

**Momento Aha** = Primeira vez que o usuário experimenta o valor principal

Para AgentKits: "Quando um membro da equipe vê a agenda de foco da sua equipe e bloqueia tempo livre de distrações"

### Padrões de Onboarding

| Padrão | Melhor Para |
|---------|----------|
| Assistente de Configuração | Produtos complexos que precisam de configuração |
| Checklist | Apps ricos em recursos |
| Tour Interativo | Produtos com interface pesada |
| Galeria de Templates | Ferramentas criativas |
| Projeto de Exemplo | Ferramentas baseadas em projetos |

---

## Exercício de Onboarding

Use `/cro:onboarding` para otimizar a ativação do AgentKits:

```bash
/cro:onboarding "Design onboarding for AgentKits. Aha moment: seeing team focus schedule. Current activation: 15% of trials. Goal: 40%."
```

### Perguntas-Chave

1. Qual é a configuração mínima para gerar valor?
2. Você pode mostrar valor antes da configuração?
3. Qual é a ação #1 que prevê conversão?
4. Quão rápido os usuários podem alcançar o momento Aha?

---

## CRO de Paywall e Upgrade

Para produtos freemium e de teste, telas de upgrade são críticas.

### Gatilhos de Paywall

| Gatilho | Contexto |
|---------|---------|
| Bloqueio de recurso | Usuário tenta recurso premium |
| Limite de uso | Atingiu limite do plano gratuito |
| Expiração do trial | Trial baseado em tempo terminando |
| Prompt de upgrade | Após momento de valor |

### Exercício de Paywall

```bash
/cro:paywall "Design upgrade screen for AgentKits. Trigger: user hits 5-user limit on free tier. Goal: convert to Team plan ($12/user)."
```

---

## Tarefa Prática

Complete estes exercícios para AgentKits:

### 1. Popup de Intenção de Saída
```bash
/cro:popup "Exit intent for AgentKits pricing page - capture leads who leave without trial"
```
Salvar em: `training/exercises/markit/cro/exit-popup.md`

### 2. Fluxo de Onboarding
```bash
/cro:onboarding "5-step onboarding to reach Aha moment in under 3 minutes"
```
Salvar em: `training/exercises/markit/cro/onboarding-flow.md`

### 3. Tela de Upgrade
```bash
/cro:paywall "Upgrade screen when free user invites 6th team member"
```
Salvar em: `training/exercises/markit/cro/upgrade-screen.md`

---

## Funil Completo de CRO

Agora você pode otimizar o funil de conversão completo:

```
Visitante → CRO de Página → CRO de Formulário → CRO de Cadastro
     ↓
  CRO de Popup (capturar abandonos)
     ↓
Novo Usuário → CRO de Onboarding → Ativação
     ↓
Usuário Gratuito → CRO de Paywall → Cliente Pago
```

Cada habilidade trata de um estágio específico.

---

## Checkpoint

Antes de completar o Módulo 3, verifique se você consegue:
- [ ] Projetar popups eficazes com gatilhos apropriados
- [ ] Criar fluxos de onboarding que aceleram o momento Aha
- [ ] Construir telas de upgrade para conversão freemium
- [ ] Mapear o funil completo de CRO

---

## Módulo 3 Completo!

Você dominou as habilidades de CRO. Seus entregáveis:

```
training/exercises/markit/cro/
├── landing-page-audit.md
├── form-audit.md
├── optimized-form.md
├── form-ab-test.md
├── exit-popup.md
├── onboarding-flow.md
└── upgrade-screen.md
```

---

## Próximo: Habilidades Avançadas

Continue para o Módulo 4: Estratégias de Crescimento e Lançamento

```bash
/training-pt-br:start-4-1
```

Ou explore outras novas habilidades:
- `/marketing:psychology` - Mais de 70 modelos mentais
- `/marketing:ideas` - 140 ideias de marketing
- `/growth:launch` - Estratégia de lançamento
- `/pricing:strategy` - Design de precificação