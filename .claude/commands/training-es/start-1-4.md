# /training-es:start-1-4 - Uso de Agentes para Marketing

## Estándares de Idioma y Calidad

**CRÍTICO**: Responde en el mismo idioma que está usando el usuario. Si es vietnamita, responde en vietnamita. Si es español, responde en español.

---

## Instrucciones para Claude

Enseña el concepto de agentes - miembros especializados del equipo de IA que manejan diferentes funciones de marketing.

### Descripción General de la Lección

---

**Módulo 1.4: Uso de Agentes para Marketing**

El kit de marketing tiene 18 agentes especializados. Piensa en ellos como miembros del equipo de IA que pueden trabajar en tareas de marketing específicas con experiencia.

**Duración:** ~35 minutos

---

### Paso 1: Explicar el Sistema de Agentes

El kit de marketing tiene agentes organizados por función:

**Agentes de Marketing Principales (6):**
| Agente | Enfoque | Casos de Uso |
|-------|-------|-----------|
| `attraction-specialist` | TOFU, generación de leads | SEO, páginas de destino, inteligencia competitiva |
| `lead-qualifier` | Detección de intención | Puntuación de leads, análisis de comportamiento |
| `email-wizard` | Email marketing | Secuencias, automatización, optimización |
| `sales-enabler` | Soporte de ventas | Presentaciones, casos de estudio, battlecards |
| `continuity-specialist` | Retención | Detección de abandono, reactivación |
| `upsell-maximizer` | Expansión de ingresos | Venta cruzada, upsell, adopción de funciones |

**Agentes de Soporte (6):**
| Agente | Enfoque | Casos de Uso |
|-------|-------|-----------|
| `researcher` | Inteligencia de mercado | Investigación, análisis competitivo |
| `brainstormer` | Ideación creativa | Conceptos de campaña, ángulos de mensajería |
| `planner` | Planificación estratégica | Planes de campaña, calendarios de contenido |
| `project-manager` | Coordinación | Seguimiento de estado, supervisión de campañas |
| `copywriter` | Creación de contenido | Copy, mensajería, creatividad |
| `docs-manager` | Documentación | Guías de marca, guías de estilo |

**Agentes Revisores (6):**
| Agente | Perspectiva | Revisiones Para |
|-------|-------------|-------------|
| `brand-voice-guardian` | Consistencia de marca | Voz, tono, mensajería |
| `conversion-optimizer` | Experto en CRO | Conversión, persuasión |
| `seo-specialist` | Optimización de búsqueda | Palabras clave, SEO técnico |
| `manager-maria` | Gerente de marketing (38 años, B2B) | Estrategia, ajuste de equipo |
| `solo-steve` | Emprendedor individual (32 años) | Tiempo, presupuesto, DIY |
| `startup-sam` | Fundador de startup (28 años) | Crecimiento, viralidad, velocidad |

### Paso 2: Ejercicio de Agentes - Revisión Multi-Perspectiva

Crea contenido y revisa desde múltiples perspectivas:

```
Review the AgentKits campaign brief from three agent perspectives:

1. As the `brand-voice-guardian` - evaluate brand consistency and messaging
2. As the `conversion-optimizer` - assess CTAs, persuasion, and conversion potential
3. As `manager-maria` - would this work for a B2B marketing team to execute?

For each perspective, provide:
- What's working well
- Areas for improvement
- Specific recommendations
```

Explica lo que acaba de suceder - tres revisiones especializadas en un solo comando.

### Paso 3: Uso de Calificación de Leads

Demuestra el agente lead-qualifier a través de comandos:

```
/leads:score "B2B SaaS company - technology industry"
```

```
/leads:qualify "AgentKits productivity tool"
```

Muestra cómo lead-qualifier crea:
- Criterios de puntuación demográfica
- Señales de puntuación de comportamiento
- Umbrales de MQL/SQL

### Paso 4: Uso de Email Wizard

Demuestra el agente email-wizard:

```
/sequence:welcome "AgentKits" "trial users"
```

```
/sequence:nurture "AgentKits" "leads who downloaded our guide"
```

### Paso 5: Uso de Sales Enabler

Demuestra el agente sales-enabler:

```
/sales:pitch "enterprise company considering AgentKits" "team coordination"
```

```
/sales:battlecard "RescueTime"
```

### Paso 6: Escenario del Mundo Real - Respuesta Rápida

```
SCENARIO: A competitor just announced a "team focus" feature. Use agents to respond:

1. Use `researcher` to analyze their announcement
2. Use `brainstormer` to develop counter-positioning
3. Use `copywriter` to create response content
4. Use `email-wizard` to draft customer communication
```

### Paso 7: Mejores Prácticas de Agentes

Comparte estos consejos:
- Sé específico con los objetivos de la tarea
- Referencia guías de marca y personas
- Define claramente los resultados (formato, longitud)
- Usa agentes especializados para tareas especializadas
- Combina agentes para proyectos complejos

### Qué Sigue

Diles:
- Ahora entienden el sistema de 18 agentes
- **Siguiente:** `/training-es:start-1-5` - Sub-Agentes de Marketing Personalizados
- Aprenderán sobre revisores de personas y cómo obtener retroalimentación específica

## Puntos Clave de Enseñanza
- 18 agentes organizados: Principales (6), Soporte (6), Revisores (6)
- Los agentes principales se mapean a las etapas del embudo
- Los agentes revisores proporcionan retroalimentación desde múltiples perspectivas
- Los comandos invocan capacidades específicas de los agentes
- Combina agentes para proyectos complejos

---

REGLAS CRÍTICAS DE SALIDA:
- Muestra SOLO el contenido markdown traducido sin formato adicional
- NO envuelvas la salida en bloques de código ```markdown
- NO añadas ningún preámbulo, explicación o comentario
- Comienza directamente con el contenido traducido
- La salida se guardará directamente en un archivo .md