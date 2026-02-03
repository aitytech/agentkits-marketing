# /training-pt-br:start-1-2 - Trabalhando com Arquivos de Marketing

## Padrões de Linguagem e Qualidade

**CRÍTICO**: Responda no mesmo idioma que o usuário está usando. Se vietnamita, responda em vietnamita. Se espanhol, responda em espanhol.

---

## Instruções para Claude

Ensine organização de arquivos, uso de comandos e referência de documentação para projetos de marketing.

### Visão Geral da Lição

---

**Módulo 1.2: Trabalhando com Arquivos de Marketing**

Como profissional de marketing, você trabalha com muitos tipos de recursos: briefings de campanha, rascunhos de conteúdo, documentos de pesquisa, relatórios analíticos. Vamos dominar a organização e o gerenciamento eficiente deles.

**Duração:** ~25 minutos

---

### Etapa 1: Revisar Estrutura da Documentação

Mostre a pasta docs:

```
List all files in docs/
```

Explique cada arquivo de documentação:
- `brand-guidelines.md` - Template de padrões de marca
- `content-style-guide.md` - Padrões de escrita, CTAs, formatação
- `campaign-playbooks.md` - Templates de campanhas comprovados
- `channel-strategies.md` - Táticas específicas por plataforma
- `analytics-setup.md` - Rastreamento e atribuição
- `usage-guide.md` - Referência completa do sistema

### Etapa 2: Explorar Playbooks de Campanha

Leia os playbooks de campanha:

```
Read docs/campaign-playbooks.md
```

Explique os tipos de playbook:
- Playbook de Lançamento de Produto
- Playbook de Geração de Leads
- Playbook de Conscientização de Marca
- Playbook de Retenção
- Playbook de Promoção de Eventos

### Etapa 3: Praticar Comandos de Conteúdo

Oriente-os através dos comandos de criação de conteúdo:

**Post de Blog:**
```
/content:blog "5 Ways Remote Teams Can Improve Coordination" "remote team productivity"
```

**Conteúdo Social:**
```
/content:social "Team coordination tips for remote managers" "linkedin"
```

**Copy de Email:**
```
/content:email "welcome" "trial users for AgentKits"
```

### Etapa 4: Praticar Comandos de Busca

Ensine técnicas de busca usando grep/find ou perguntando ao Claude:

```
Find all files that mention "lead scoring"
```

```
Search for files containing "conversion rate"
```

### Etapa 5: Criação de Conteúdo em Lote

Demonstre a criação de múltiplos recursos de uma só vez:

```
Create multi-channel content for AgentKits launch:
1. LinkedIn announcement post
2. Twitter thread (5 tweets)
3. Email subject lines (5 A/B variations)
4. Google Ads headlines (5 variations, max 30 chars)
```

### Etapa 6: Fazer Referência Cruzada com o Guia de Estilo

Mostre como usar o guia de estilo de conteúdo:

```
Read docs/content-style-guide.md
```

Destaque:
- Fórmulas de títulos (Framework 4-U)
- Padrões de CTA
- Padrões de legibilidade
- Diretrizes de escrita SEO

### Etapa 7: Comandos de Referência Rápida

Compartilhe padrões de comandos essenciais:

**Comandos de Campanha:**
- `/campaign:plan` - Criar plano de campanha
- `/campaign:brief` - Gerar briefing criativo
- `/campaign:analyze` - Analisar desempenho
- `/campaign:calendar` - Calendário de conteúdo

**Comandos de Conteúdo:**
- `/content:blog` - Post de blog SEO
- `/content:social` - Social específico por plataforma
- `/content:email` - Copy de email
- `/content:landing` - Copy de landing page
- `/content:ads` - Copy de anúncios

### Próximos Passos

Diga a eles:
- Agora eles sabem como navegar pela documentação do kit de marketing
- Os comandos estão organizados por função de marketing
- **Próximo:** `/training-pt-br:start-1-3` - Primeiras Tarefas de Marketing (geração de conteúdo, análise)

## Pontos-Chave de Ensino
- Boa organização da documentação torna tudo mais rápido
- Seis documentos principais cobrem marca, conteúdo, campanhas, canais, analytics e uso
- Comandos estão organizados por função (campaign, content, seo, etc.)
- Faça referência cruzada dos documentos para consistência
- Operações em lote economizam tempo massivamente

---

REGRAS CRÍTICAS DE SAÍDA:
- Produza APENAS o conteúdo markdown traduzido bruto
- NÃO envolva a saída em cercas de código ```markdown
- NÃO adicione nenhum preâmbulo, explicação ou comentário
- Comece diretamente com o conteúdo traduzido
- A saída será salva diretamente em um arquivo .md