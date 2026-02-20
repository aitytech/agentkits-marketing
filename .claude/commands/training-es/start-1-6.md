# /training-es:start-1-6 - Memoria del Proyecto (CLAUDE.md)

## Estándares de Idioma y Calidad

**CRÍTICO**: Responde en el mismo idioma que está usando el usuario. Si es vietnamita, responde en vietnamita. Si es español, responde en español.

---

## Instrucciones para Claude

Enseña a los estudiantes sobre CLAUDE.md y cómo mantener el contexto persistente del proyecto.

### Resumen de la Lección

---

**Módulo 1.6: Memoria del Proyecto**

CLAUDE.md es como darle a Claude un documento informativo persistente. Cada vez que trabajas en este proyecto, Claude lee este archivo primero y aplica esas directrices.

**Duración:** ~20 minutos

---

### Paso 1: Mostrar el CLAUDE.md Actual

Lee el CLAUDE.md del proyecto:

```
Read the CLAUDE.md file in this project
```

Recorre cada sección:
- Rol y Responsabilidades
- Flujos de Trabajo (Marketing, Ventas, CRM)
- Agentes de Marketing
- Catálogo de Skills
- Categorías de Comandos
- Gestión de Documentación

### Paso 2: Explicar Cómo Funciona

Cuando existe CLAUDE.md, Claude automáticamente:
- Sabe qué agentes están disponibles
- Comprende la estructura del flujo de trabajo
- Referencia los comandos apropiados
- Sigue las reglas de marketing
- Usa los skills correctos

¡No necesitas recordárselo a Claude cada vez - es automático!

### Paso 3: Secciones Clave de CLAUDE.md

Explica las secciones críticas:

**Flujos de Trabajo:**
```markdown
### Core Workflows
- **Marketing:** `./.claude/workflows/primary-workflow.md`
- **Sales:** `./.claude/workflows/sales-workflow.md`
- **CRM:** `./.claude/workflows/crm-workflow.md`
```

**Mapeo de Agentes:**
```markdown
### Core Marketing Agents
- `attraction-specialist` - TOFU (SEO, landing pages)
- `lead-qualifier` - Intent detection, scoring
- `email-wizard` - Sequences, automation
...
```

**Categorías de Comandos:**
```markdown
### Campaign Management
- `/campaign:plan`, `/campaign:brief`, `/campaign:analyze`

### Content Creation
- `/content:blog`, `/content:social`, `/content:email`
...
```

### Paso 4: Probar la Conciencia del Contexto

Sin mencionar las directrices de marca, pregunta:

```
Write a short LinkedIn post about remote team productivity
```

Señala cómo la salida coincide automáticamente con:
- Voz de marca de las directrices
- Lenguaje de la persona objetivo
- Marco de mensajería clave

### Paso 5: Comprender las Referencias de Flujo de Trabajo

Muestra cómo se referencian los flujos de trabajo:

```
Read .claude/workflows/primary-workflow.md
```

Explica:
- Etapas del pipeline de marketing
- Responsabilidades de los agentes en cada etapa
- Puntos de control y compuertas de calidad

### Paso 6: Las Reglas de Marketing

Muestra las reglas de marketing:

```
Read .claude/workflows/marketing-rules.md
```

Explica las reglas clave:
- Eficiencia de tokens
- Soporte multiidioma
- Estándares de calidad
- Activación de skills

### Paso 7: Beneficios del Contexto del Proyecto

Resume los beneficios:
- Voz de marca consistente automáticamente
- Selección correcta de agentes
- Uso apropiado de comandos
- Cumplimiento del flujo de trabajo
- Aplicación de estándares de calidad

### Paso 8: Consejos de Mantenimiento

Explica el mantenimiento continuo:
- Actualizar cuando se lancen nuevas campañas
- Agregar aprendizajes del contenido exitoso
- Referenciar nueva documentación
- Mantener actualizada la lista de agentes

### Qué Sigue

Diles:
- CLAUDE.md asegura consistencia sin repetición
- **¡Módulo 1 casi completo!**
- **Siguiente:** `/training-es:start-1-7` - Navegación y Búsqueda
- Skills finales antes de aplicaciones avanzadas

## Puntos Clave de Enseñanza
- CLAUDE.md le da a Claude contexto persistente
- Incluye flujos de trabajo, agentes, comandos, reglas
- Claude lo aplica automáticamente a todo el trabajo
- Los flujos de trabajo definen los procesos de marketing
- Las reglas de marketing aseguran estándares de calidad

---

REGLAS CRÍTICAS DE SALIDA:
- Genera SOLO el contenido markdown traducido sin formato adicional
- NO envuelvas la salida en bloques de código ```markdown
- NO agregues preámbulos, explicaciones o comentarios
- Comienza directamente con el contenido traducido
- La salida se guardará directamente en un archivo .md