# /training-pt-br:start-0-1 - Instalação & Configuração

## Padrões de Idioma & Qualidade

**CRÍTICO**: Responda no mesmo idioma que o usuário está usando. Se vietnamita, responda em vietnamita. Se espanhol, responda em espanhol.

---

## Instruções para Claude

Guie o estudante através da verificação de sua instalação do Claude Code e configuração do kit de marketing.

### Visão Geral da Lição

Diga algo como:

---

**Módulo 0.1: Instalação & Configuração**

Antes de mergulharmos nos fluxos de trabalho de marketing, vamos garantir que tudo esteja configurado corretamente.

---

### Passo 1: Verificar Claude Code

Peça para confirmarem:
- Eles estão executando isso dentro do Claude Code (não no chat web)
- Eles têm uma assinatura Claude Pro ou Max

Se não tiverem certeza, explique:
- Claude Code é a versão terminal/CLI
- Ele pode ler, escrever e editar arquivos diretamente
- É diferente do chat web claude.ai

### Passo 2: Verificar Arquivos do Kit de Marketing

Execute essas verificações COM o estudante (realmente execute-as):

```
Show me the contents of this directory
```

Eles devem ver:
- Pasta `.claude/` com agents, commands, skills, workflows
- Pasta `docs/` com documentação
- Arquivo `CLAUDE.md` (a memória do projeto)
- Arquivo `README.md`

### Passo 3: Explorar Estrutura do Sistema

Mostre a eles a estrutura do kit de marketing:

```
List all folders in .claude/
```

Explique cada componente:
- `agents/` - 18 agentes de marketing especializados
- `commands/` - 76 comandos de barra organizados por função
- `skills/` - Conhecimento do domínio de marketing
- `workflows/` - Fluxos de trabalho principais de marketing, vendas e CRM

### Passo 4: Explorar Comandos Disponíveis

Mostre a eles as categorias de comandos:

```
List all folders in .claude/commands/
```

Explique os principais grupos de comandos:
- `campaign/` - `/campaign:plan`, `/campaign:brief`, `/campaign:analyze`
- `content/` - `/content:blog`, `/content:social`, `/content:email`, `/content:landing`
- `seo/` - `/seo:keywords`, `/seo:audit`, `/seo:optimize`
- `analytics/` - `/analytics:roi`, `/analytics:funnel`, `/analytics:report`
- `sales/` - `/sales:pitch`, `/sales:outreach`, `/sales:battlecard`

### Passo 5: Testar Seu Primeiro Comando

Peça para tentarem um comando real:

```
/brainstorm "What are the best marketing channels for a B2B SaaS product?"
```

Celebre a primeira execução de comando deles!

### Passo 6: Revisar Documentação

Mostre a eles os documentos principais:

```
Read docs/usage-guide.md (first 50 lines)
```

Explique:
- `docs/usage-guide.md` - Referência completa do sistema
- `docs/brand-guidelines.md` - Template de padrões de marca
- `docs/content-style-guide.md` - Padrões de escrita
- `docs/campaign-playbooks.md` - Templates de campanha
- `docs/channel-strategies.md` - Táticas de plataforma
- `docs/analytics-setup.md` - Configuração de rastreamento

### O Que Vem a Seguir

Diga a eles:
- **Próxima lição:** `/training-pt-br:start-0-2` - Sua Primeira Tarefa de Marketing
- Eles acabaram de verificar sua configuração e executaram seu primeiro comando!
- É exatamente assim que o resto do curso funciona

## Pontos de Ensino Principais
- Claude Code trabalha diretamente com arquivos
- O kit de marketing tem 18 agentes, 76 comandos e documentação abrangente
- Cada lição envolve execução prática de comandos
- Verifique se as coisas realmente funcionaram (leia os arquivos de volta)

---

REGRAS CRÍTICAS DE SAÍDA:
- Produza APENAS o conteúdo markdown traduzido bruto
- NÃO envolva a saída em blocos de código ```markdown
- NÃO adicione qualquer preâmbulo, explicação ou comentário
- Comece diretamente com o conteúdo traduzido
- A saída será salva diretamente em um arquivo .md