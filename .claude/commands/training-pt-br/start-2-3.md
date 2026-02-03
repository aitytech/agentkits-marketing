# /training-pt-br:start-2-3 - Gerar Copy de Marketing

## Padrões de Idioma & Qualidade

**CRÍTICO**: Responda no mesmo idioma que o usuário está usando. Se vietnamita, responda em vietnamita. Se espanhol, responda em espanhol.

---

## Instruções para Claude

Ensine geração de copy em alto volume através de canais mantendo a qualidade.

### Visão Geral da Lição

---

**Módulo 2.3: Gerar Copy de Marketing**

Aprenda a criar copy de marketing profissional em escala: emails, anúncios, redes sociais, landing pages. Qualidade + Velocidade.

**Duração:** ~35 minutos

---

### Passo 1: Sequência de Email de Boas-Vindas

Use o comando de sequência:

```
/sequence:welcome "AgentKits" "trial users - remote team managers"
```

Revise a sequência gerada:
- Email 1 (Dia 0): Boas-vindas + Início Rápido
- Email 2 (Dia 2): Destaque de Funcionalidade
- Email 3 (Dia 5): Prova Social + Dicas
- Email 4 (Dia 9): Reforço de Valor
- Email 5 (Dia 13): Trial Terminando + Upgrade

Cada email inclui:
- Variações de linha de assunto para teste A/B
- Texto de pré-visualização
- Copy do corpo
- CTA claro

### Passo 2: Conteúdo para Redes Sociais

Use comandos de conteúdo para redes sociais:

**LinkedIn:**
```
/content:social "Team coordination tips for remote managers - AgentKits launch" "linkedin"
```

**Twitter:**
```
/content:social "5 ways remote teams waste time coordinating - thread" "twitter"
```

### Passo 3: Conteúdo de Blog

Use o comando de blog com foco em SEO:

```
/content:blog "How Remote Teams Can Coordinate Focus Time Without Endless Meetings" "remote team focus time"
```

Depois otimize:
```
/seo:optimize "the blog post" "remote team focus time"
```

### Passo 4: Copy de Anúncios Pagos

Use comandos de copy de anúncios:

**Google Ads:**
```
/content:ads "google" "team productivity software - drive signups"
```

**Meta Ads:**
```
/content:ads "meta" "remote team coordination - awareness campaign"
```

**LinkedIn Ads:**
```
/content:ads "linkedin" "B2B productivity tool - lead generation"
```

### Passo 5: Copy de Landing Page

Use o comando de landing page:

```
/content:landing "14-day free trial of AgentKits" "remote team managers at tech companies"
```

Isso gera:
- Seção hero (título, subtítulo, CTA)
- Seção de problema
- Seção de solução
- Funcionalidades com benefícios
- Seção de prova social
- Visão geral de preços
- Seção de FAQ
- CTA final

### Passo 6: Conteúdo Rápido vs Bom

Explique os dois modos de conteúdo:

**Conteúdo Rápido (`/content:fast`):**
- Entrega rápida
- Bom para ideação
- Primeiros rascunhos
- Necessidades de alto volume

```
/content:fast "Quick LinkedIn post about team focus time benefits"
```

**Conteúdo Bom (`/content:good`):**
- Pesquisa completa
- Múltiplas variações
- Pronto para publicação
- Peças estratégicas

```
/content:good "Detailed blog post about the science of team focus time with research citations"
```

### Passo 7: Melhoria de Conteúdo

Use comandos de melhoria:

```
/content:enhance "make the copy more conversational and add urgency"
```

```
/content:cro "optimize for higher conversion rate"
```

### Passo 8: Variações de Teste A/B

Crie variações de teste:

```
Create A/B test variations for the landing page:

Headlines (5 angles):
1. Outcome-focused
2. Problem-focused
3. Question
4. How-to
5. Social proof

CTAs (3 variations):
1. Start Free Trial
2. Try It Free
3. Get Started Now
```

### Passo 9: Personalização por Persona

Crie variações específicas por persona:

**Para Solo Sam:**
```
/content:email "product announcement" "technical team managers - efficiency focus"
```

**Para Startup Sam:**
```
/content:email "product announcement" "startup founders - growth and scale focus"
```

### Passo 10: Revisão de Qualidade

Revise todo o conteúdo com especialistas:

```
Review all content we created with:
1. brand-voice-guardian - brand consistency
2. conversion-optimizer - conversion potential
3. seo-specialist - SEO optimization

Score each piece and identify top improvements needed.
```

### Próximos Passos

Diga a eles:
- Eles geraram uma biblioteca completa de copy em uma sessão
- Normalmente semanas de trabalho
- **Próximo:** `/training-pt-br:start-2-4` - Analisar Dados de Campanha
- Transformar dados em insights acionáveis

## Pontos de Ensino Principais
- Comandos `/content:*` lidam com todos os tipos de conteúdo
- `/sequence:*` cria automação de email
- Use modo rápido para rascunhos, modo bom para final
- `/content:cro` otimiza para conversão
- Personalize por persona para maior relevância
- Sempre revise com agentes especialistas

---

REGRAS CRÍTICAS DE SAÍDA:
- Envie APENAS o conteúdo markdown traduzido bruto
- NÃO envolva a saída em cercas de código ```markdown
- NÃO adicione qualquer preâmbulo, explicação ou comentário
- Comece diretamente com o conteúdo traduzido
- A saída será salva diretamente em um arquivo .md