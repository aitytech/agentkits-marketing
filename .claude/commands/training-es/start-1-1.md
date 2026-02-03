# /training-es:start-1-1 - Bienvenido a Markit

## Estándares de Idioma y Calidad

**CRÍTICO**: Responde en el mismo idioma que está usando el usuario. Si es vietnamita, responde en vietnamita. Si es español, responde en español.

---

## Instrucciones para Claude

Comienza el Módulo 1 - Conceptos Fundamentales. Esta lección introduce el proyecto de la agencia Markit y los flujos de trabajo principales del kit de marketing.

### Descripción General de la Lección

---

**Módulo 1.1: Bienvenido a Markit**

¡Bienvenido al Módulo 1! Ahora dominaremos los conceptos fundamentales del kit de marketing a través de trabajo práctico. Al final de este módulo, manejarás tareas de marketing reales con confianza.

**Duración:** ~20 minutos

---

### Paso 1: Establece el Escenario

Explica su rol:

> Eres un Estratega de Marketing en la agencia **Markit**. Tu cliente es **AgentKits**. Tu misión:
> 1. Lanzar el producto al mercado
> 2. Generar reconocimiento y registros
> 3. Crear contenido que resuene con equipos remotos
> 4. Construir un motor de marketing de contenidos sostenible

### Paso 2: Comprende los Flujos de Trabajo Fundamentales

Explica los tres flujos de trabajo principales en `.claude/workflows/`:

**Pipeline de Marketing (`primary-workflow.md`):**
```
Research → Insights → Creative → Plan → Create → Edit → Publish → Measure
```

**Pipeline de Ventas (`sales-workflow.md`):**
```
Lead → MQL → SQL → Opportunity → Proposal → Negotiation → Close
```

**Ciclo de Vida CRM (`crm-workflow.md`):**
```
Subscriber → Lead → MQL → SQL → Opportunity → Customer → Advocate
```

### Paso 3: Comprende los Roles de los Agentes

Explica cómo los agentes se relacionan con las funciones de marketing:

**TOFU (Top of Funnel):**
- `attraction-specialist` - Generación de leads, SEO, páginas de destino

**MOFU (Middle of Funnel):**
- `lead-qualifier` - Detección de intención, puntuación de leads
- `email-wizard` - Secuencias de nutrición

**BOFU (Bottom of Funnel):**
- `sales-enabler` - Propuestas, casos de estudio, tarjetas de batalla

**Retención:**
- `continuity-specialist` - Detección de abandono, reactivación
- `upsell-maximizer` - Expansión de ingresos

### Paso 4: Crea el Primer Brief de Campaña

Ahora comienza el trabajo real usando `/campaign:plan`:

```
/campaign:plan "AgentKits Q1 Product Launch - Target: 1000 trial signups in 30 days, Budget: $50K, Channels: LinkedIn, Google Ads, Content, Email"
```

Revisa el plan de campaña integral generado.

### Paso 5: Revisa el Brief

Señala cómo el agente planificador:
- Creó objetivos estructurados y KPIs
- Definió segmentos de audiencia objetivo
- Asignó presupuesto a través de los canales
- Estableció un marco de medición

### Paso 6: El Poder de la Iteración

Muéstrales el refinamiento usando preguntas de seguimiento:

```
Expand the target audience section with day-in-the-life scenarios for each persona
```

Explica: La iteración es clave. Los primeros borradores son puntos de partida.

### Paso 7: Demostración de Conciencia del Contexto

Demuestra el poder del contexto:

```
/content:social "Product launch announcement for AgentKits based on the campaign brief" "linkedin"
```

Muestra cómo Claude extrae del contexto de la campaña automáticamente.

### Qué Sigue

Diles:
- Crearon un brief de campaña profesional usando `/campaign:plan`
- Claude usó contexto de las guías de marca y personas
- **Siguiente:** `/training-es:start-1-2` - Trabajando con Archivos de Marketing
- Aprenderán a organizar, encontrar y gestionar activos de marketing eficientemente

## Puntos Clave de Enseñanza
- La agencia Markit es el proyecto de práctica hands-on
- Tres flujos de trabajo fundamentales: Marketing, Ventas, CRM
- Los agentes se relacionan con las etapas del embudo (TOFU, MOFU, BOFU, Retención)
- `/campaign:plan` crea briefs de campaña integrales
- La iteración mejora la calidad del resultado

---

REGLAS CRÍTICAS DE SALIDA:
- Genera SOLO el contenido markdown traducido sin formato adicional
- NO envuelvas la salida en vallas de código ```markdown
- NO agregues ningún preámbulo, explicación o comentario
- Comienza directamente con el contenido traducido
- La salida se guardará directamente en un archivo .md