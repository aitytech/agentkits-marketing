# /training-pt-br:persona-builder - Construtor Interativo de Persona

## Padrões de Linguagem & Qualidade

**CRÍTICO**: Responda no mesmo idioma que o usuário está usando. Se vietnamita, responda em vietnamita. Se espanhol, responda em espanhol.

---

## Instruções para Claude

Guie usuários não-desenvolvedores através da criação de uma buyer persona passo a passo usando o **Padrão UX Interativo**. Faça perguntas com 2-4 opções clicáveis em cada etapa. Esta é uma sessão de treinamento prática e amigável para iniciantes.

### Mensagem de Boas-Vindas

---

**Construtor Interativo de Persona**

Vou guiá-lo através da criação de uma buyer persona detalhada para seu produto ou serviço. Não é necessária experiência em marketing - apenas responda algumas perguntas escolhendo entre as opções que forneço.

**O que você criará:**
- Um perfil completo de buyer persona
- Pontos-chave de mensagem para esta persona
- Recomendações de canais

**Duração:** ~15 minutos

Vamos começar!

---

### Etapa 1: Tipo de Negócio

**IMPORTANTE**: Use a ferramenta AskUserQuestion para perguntar:

**Pergunta:** "Que tipo de produto ou serviço você está comercializando?"

**Opções:**
1. **SaaS / Software** - Software em nuvem, aplicativos, ferramentas digitais
2. **E-commerce** - Produtos físicos, loja online
3. **Serviços Profissionais** - Consultoria, agência, coaching
4. **Outro** - Permitir que o usuário especifique

---

### Etapa 2: Público-Alvo

**IMPORTANTE**: Use a ferramenta AskUserQuestion para perguntar:

**Pergunta:** "Quem é seu público-alvo principal?"

**Opções:**
1. **Tomadores de Decisão B2B** - Gerentes, diretores, executivos em empresas (Recomendado para SaaS)
2. **Usuários Finais B2B** - Funcionários individuais, membros de equipe
3. **Consumidores B2C** - Consumidores individuais para uso pessoal
4. **Outro** - Permitir que o usuário especifique

---

### Etapa 3: Tamanho da Empresa (se B2B)

Se B2B foi selecionado, use a ferramenta AskUserQuestion:

**Pergunta:** "Qual tamanho de empresa você normalmente visa?"

**Opções:**
1. **Startups** - 1-20 funcionários, fundadores/equipe inicial
2. **PME** - 20-200 funcionários, equipes em crescimento (Recomendado)
3. **Médio Porte** - 200-2000 funcionários, chefes de departamento
4. **Enterprise** - 2000+ funcionários, compras envolvidas

---

### Etapa 4: Dor Principal

**IMPORTANTE**: Use a ferramenta AskUserQuestion:

**Pergunta:** "Qual é o problema #1 que seu produto resolve?"

**Opções:**
1. **Economizar Tempo** - Automação, eficiência, produtividade
2. **Economizar Dinheiro** - Redução de custos, melhor ROI
3. **Reduzir Risco** - Conformidade, segurança, confiabilidade
4. **Aumentar Receita** - Mais vendas, leads, clientes

---

### Etapa 5: Critérios de Decisão

**IMPORTANTE**: Use a ferramenta AskUserQuestion:

**Pergunta:** "O que mais importa para seus compradores ao escolher uma solução?"

**Opções:**
1. **Preço / Valor** - Consciente do orçamento, focado em ROI
2. **Funcionalidades / Capacidade** - Usuários avançados, necessidades específicas (Recomendado)
3. **Facilidade de Uso** - Não-técnico, adoção rápida
4. **Confiança / Marca** - Players estabelecidos, referências

---

### Etapa 6: Preset de Persona

**IMPORTANTE**: Use a ferramenta AskUserQuestion:

**Pergunta:** "Qual arquétipo de persona se encaixa melhor no seu cliente ideal?"

**Opções:**
1. **Gerente Maria** - Gerente B2B, líder de equipe, focado em resultados (Recomendado para B2B)
2. **Sam Startup** - Fundador, acumula várias funções, focado em crescimento
3. **Steve Solo** - Empreendedor solo, consciente do orçamento, faça você mesmo
4. **Personalizado** - Construir do zero com base nas respostas anteriores

---

### Gerar Persona

Com base em todas as respostas, gere uma persona completa usando este formato:

```markdown
## [Nome da Persona]
**Função:** [Cargo baseado nas respostas]
**Empresa:** [Tipo/Tamanho baseado nas respostas]

### Dados Demográficos
- Idade: [Faixa apropriada]
- Educação: [Nível apropriado]
- Experiência: [Anos na função]
- Reporta para: [Para quem se reporta]

### Objetivos
1. [Objetivo principal alinhado com a dor]
2. [Objetivo secundário alinhado com critérios de decisão]
3. [Objetivo de carreira/pessoal]

### Desafios
1. [Principal dor da Etapa 4]
2. [Desafio relacionado]
3. [Obstáculo para alcançar objetivos]

### Como [Produto] Ajuda
- Resolve [dor 1] através de [solução específica]
- Permite [objetivo] por meio de [funcionalidade]
- Reduz [desafio] com [benefício]

### Objeções & Respostas
- "[Preocupação com orçamento]" → [Resposta focada em valor]
- "[Tempo de implementação]" → [Resposta sobre facilidade de adoção]
- "[Risco de mudança]" → [Resposta geradora de confiança]

### Canais Preferidos
- **Descoberta:** [Onde pesquisam]
- **Conteúdo:** [O que consomem]
- **Social:** [Onde fazem networking]

### Mensagem que Ressoa
- Lidere com: [Benefício principal]
- Enfatize: [Diferencial chave]
- Prove com: [Tipo de evidência]

### Citação Característica
"[Declaração que captura sua mentalidade]"
```

---

### Confirmar & Salvar

Após gerar, pergunte:

**Pergunta:** "Você gostaria de salvar esta persona?"

**Opções:**
1. **Salvar em docs/** - Salvar como `docs/personas/[nome].md`
2. **Refinar mais** - Ajustar seções específicas
3. **Criar outra persona** - Recomeçar para segmento diferente
4. **Concluído** - Finalizar o treinamento

---

### Celebração & Próximos Passos

Parabenize-os:

**Você criou sua primeira buyer persona!**

Esta persona ajudará você a:
- Escrever copy de marketing direcionado
- Escolher os canais certos
- Lidar com objeções em vendas

**Próximos passos:**
- `/content:blog` - Criar conteúdo para esta persona
- `/campaign:brief` - Planejar uma campanha direcionada a ela
- `/research:persona` - Criar personas adicionais
- `/training-pt-br:help` - Ver todos os treinamentos disponíveis

---

## Pontos-Chave de Ensino

1. **Padrão UX Interativo**: Sempre use AskUserQuestion com 2-4 opções
2. **Presets ajudam iniciantes**: Ofereça opções recomendadas com rótulo (Recomendado)
3. **Construa progressivamente**: Cada resposta informa a próxima pergunta
4. **Confirme antes de agir**: Pergunte antes de salvar ou realizar ações importantes
5. **Celebre a conclusão**: Reconheça a conquista deles
6. **Forneça próximos passos**: Guie-os para comandos relacionados

---

REGRAS CRÍTICAS DE SAÍDA:
- Produza APENAS o conteúdo markdown traduzido bruto
- NÃO envolva a saída em cercas de código ```markdown
- NÃO adicione nenhum preâmbulo, explicação ou comentário
- Comece diretamente com o conteúdo traduzido
- A saída será salva diretamente em um arquivo .md