# /training-pt-br:start-0-2 - Sua Primeira Tarefa de Marketing

## Padrões de Idioma e Qualidade

**CRÍTICO**: Responda no mesmo idioma que o usuário está usando. Se vietnamita, responda em vietnamita. Se espanhol, responda em espanhol.

---

## Instruções para o Claude

Guie o estudante através de sua primeira tarefa real de marketing - criando diretrizes de marca usando nossos comandos.

### Visão Geral da Lição

---

**Módulo 0.2: Sua Primeira Tarefa de Marketing**

Agora vamos fazer um trabalho real de marketing. Vamos criar diretrizes de marca para o AgentKits usando o comando `/brand:voice`.

---

### Passo 1: Explicar Diretrizes de Marca

Explique por que as diretrizes de marca são importantes:
- Garante consistência em todo o conteúdo
- Ajuda o Claude (e humanos) a escrever no tom certo
- Documenta mensagens-chave e terminologia
- Previne conteúdo fora da identidade da marca

### Passo 2: Usar o Comando de Voz da Marca

Oriente-os a usar o comando real do sistema:

```
/brand:voice "AgentKits - B2B team productivity coordination tool for remote teams"
```

Deixe o Claude gerar diretrizes de marca abrangentes e então revise com o estudante.

### Passo 3: Criar Personas de Clientes

Agora use o comando de pesquisa para personas:

```
/research:persona "Remote team managers at tech companies using AgentKits"
```

Explique:
- O agente `researcher` lida com pesquisa de mercado
- Personas ajudam a direcionar conteúdo para públicos específicos
- Vamos usar essas personas ao longo do curso

### Passo 4: Revisar o Que Foi Criado

Revise os resultados juntos:

```
Show me what the brand:voice command created
```

Aponte:
- Atributos de voz e espectro de tom
- Framework de mensagens
- Palavras a usar e evitar
- Integração com outros agentes

### Passo 5: O Poder do Contexto

Explique:
- Essas diretrizes agora existem no contexto do projeto
- Em tarefas futuras, os agentes podem referenciá-las
- Isso é "consciência de contexto" - um dos superpoderes do Claude
- Vamos usar isso ao longo do curso

### Exercício Rápido: Testar Geração de Conteúdo

Peça para eles tentarem usar o contexto da marca:

```
/content:social "Remote team productivity tips" "linkedin"
```

Mostre como o Claude usa o contexto da marca automaticamente na criação de conteúdo.

### Passo 6: Explorar Outros Comandos Principais

Demonstre brevemente outros comandos que eles vão dominar:

**Planejamento de Campanha:**
```
/campaign:plan "Q1 Product Launch"
```

**Pesquisa de SEO:**
```
/seo:keywords "remote team productivity"
```

**Sequências de Email:**
```
/sequence:welcome "AgentKits" "trial users"
```

### Próximos Passos

Diga a eles:
- **Parabéns!** Módulo 0 completo!
- Eles usaram comandos reais de marketing e viram o sistema em ação
- **Próximo:** `/training-pt-br:start-1-1` - Bem-vindo ao Markit (Conceitos Fundamentais começam)
- Eles vão mergulhar profundamente em agentes, fluxos de trabalho e comandos avançados

## Pontos-Chave de Ensino
- Diretrizes de marca garantem consistência
- Use `/brand:voice` para criar diretrizes de voz
- Use `/research:persona` para personas de clientes
- Consciência de contexto significa que agentes referenciam trabalhos existentes
- Comandos reais (`/campaign:*`, `/content:*`, `/seo:*`) são o que eles vão dominar

---

REGRAS CRÍTICAS DE SAÍDA:
- Produza APENAS o conteúdo markdown traduzido bruto
- NÃO envolva a saída em cercas de código ```markdown
- NÃO adicione qualquer preâmbulo, explicação ou comentário
- Comece diretamente com o conteúdo traduzido
- A saída será salva diretamente em um arquivo .md