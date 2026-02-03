# /training-pt-br:start-1-6 - Memória do Projeto (CLAUDE.md)

## Padrões de Idioma e Qualidade

**CRÍTICO**: Responda no mesmo idioma que o usuário está usando. Se for vietnamita, responda em vietnamita. Se for espanhol, responda em espanhol.

---

## Instruções para o Claude

Ensine aos alunos sobre o CLAUDE.md e como manter o contexto persistente do projeto.

### Visão Geral da Lição

---

**Módulo 1.6: Memória do Projeto**

O CLAUDE.md é como dar ao Claude um documento de briefing persistente. Toda vez que você trabalha neste projeto, o Claude lê este arquivo primeiro e aplica essas diretrizes.

**Duração:** ~20 minutos

---

### Passo 1: Mostrar o CLAUDE.md Atual

Leia o CLAUDE.md do projeto:

```
Read the CLAUDE.md file in this project
```

Percorra cada seção:
- Papel e Responsabilidades
- Workflows (Marketing, Vendas, CRM)
- Agentes de Marketing
- Catálogo de Skills
- Categorias de Comandos
- Gerenciamento de Documentação

### Passo 2: Explicar Como Funciona

Quando o CLAUDE.md existe, o Claude automaticamente:
- Sabe quais agentes estão disponíveis
- Entende a estrutura do workflow
- Referencia os comandos apropriados
- Segue as regras de marketing
- Usa as skills corretas

Você não precisa lembrar o Claude toda vez - é automático!

### Passo 3: Seções-Chave do CLAUDE.md

Explique as seções críticas:

**Workflows:**
```markdown
### Core Workflows
- **Marketing:** `./.claude/workflows/primary-workflow.md`
- **Sales:** `./.claude/workflows/sales-workflow.md`
- **CRM:** `./.claude/workflows/crm-workflow.md`
```

**Mapeamento de Agentes:**
```markdown
### Core Marketing Agents
- `attraction-specialist` - TOFU (SEO, landing pages)
- `lead-qualifier` - Intent detection, scoring
- `email-wizard` - Sequences, automation
...
```

**Categorias de Comandos:**
```markdown
### Campaign Management
- `/campaign:plan`, `/campaign:brief`, `/campaign:analyze`

### Content Creation
- `/content:blog`, `/content:social`, `/content:email`
...
```

### Passo 4: Testar a Consciência de Contexto

Sem mencionar as diretrizes da marca, pergunte:

```
Write a short LinkedIn post about remote team productivity
```

Aponte como a saída automaticamente corresponde a:
- Tom de voz da marca das diretrizes
- Linguagem da persona alvo
- Framework de mensagens-chave

### Passo 5: Entender Referências de Workflow

Mostre como os workflows são referenciados:

```
Read .claude/workflows/primary-workflow.md
```

Explique:
- Estágios do pipeline de marketing
- Responsabilidades dos agentes em cada estágio
- Pontos de controle e verificação de qualidade

### Passo 6: As Regras de Marketing

Mostre as regras de marketing:

```
Read .claude/workflows/marketing-rules.md
```

Explique as regras-chave:
- Eficiência de tokens
- Suporte multilíngue
- Padrões de qualidade
- Ativação de skills

### Passo 7: Benefícios do Contexto do Projeto

Resuma os benefícios:
- Tom de voz da marca consistente automaticamente
- Seleção correta de agentes
- Uso adequado de comandos
- Conformidade com o workflow
- Aplicação de padrões de qualidade

### Passo 8: Dicas de Manutenção

Explique a manutenção contínua:
- Atualize conforme novas campanhas são lançadas
- Adicione aprendizados de conteúdo bem-sucedido
- Referencie nova documentação
- Mantenha a lista de agentes atualizada

### O Que Vem a Seguir

Diga a eles:
- O CLAUDE.md garante consistência sem repetição
- **Módulo 1 quase completo!**
- **Próximo:** `/training-pt-br:start-1-7` - Navegação e Busca
- Skills finais antes de aplicações avançadas

## Pontos-Chave de Ensino
- CLAUDE.md dá ao Claude contexto persistente
- Inclui workflows, agentes, comandos, regras
- Claude aplica automaticamente a todo o trabalho
- Workflows definem processos de marketing
- Regras de marketing garantem padrões de qualidade

---

REGRAS CRÍTICAS DE SAÍDA:
- Produza APENAS o conteúdo markdown traduzido bruto
- NÃO envolva a saída em blocos de código ```markdown
- NÃO adicione nenhum preâmbulo, explicação ou comentário
- Comece diretamente com o conteúdo traduzido
- A saída será salva diretamente em um arquivo .md