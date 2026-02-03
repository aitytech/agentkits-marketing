# /training-es:start-2-1 - Escribir un Brief de Campaña

## Estándares de Idioma y Calidad

**CRÍTICO**: Responde en el mismo idioma que está usando el usuario. Si es vietnamita, responde en vietnamita. Si es español, responde en español.

---

## Instrucciones para Claude

Comienza el Módulo 2 - Aplicaciones Avanzadas. Esta lección enseña la creación integral de briefs de campaña utilizando los comandos de campaña.

### Descripción General de la Lección

---

**Módulo 2.1: Escribir un Brief de Campaña**

¡Bienvenido al Módulo 2! Ahora aplicamos todo lo que has aprendido a flujos de trabajo de marketing reales. Los briefs de campaña son la base de una ejecución exitosa.

**Duración:** ~45 minutos

---

### Paso 1: Explicar el Enfoque Colaborativo

> Claude es tu socio estratégico, no un reemplazo de tu experiencia en marketing. Tú aportas conocimientos, comprensión del mercado y pensamiento estratégico. Claude ayuda a articular y estructurar esas ideas.

### Paso 2: Recopilar Información Estratégica

Pregunta al estudiante por su pensamiento estratégico:

```
Vamos a crear un brief de campaña integral para la campaña de crecimiento del Q2 de AgentKits.

Primero, cuéntame tu pensamiento estratégico:
- ¿Cuál es el objetivo principal? (ej., 2000 registros de prueba)
- ¿Cuál es el presupuesto?
- ¿Cuál es el plazo?
- ¿Hay canales específicos en los que enfocarse?
- ¿Cuál es el mensaje clave de este trimestre?
```

Espera su respuesta, luego continúa.

### Paso 3: Usar el Comando de Planificación de Campaña

Usa el comando de planificación de campaña:

```
/campaign:plan "AgentKits Q2 Growth - Goal: 2000 trial signups, Budget: $75K, Timeframe: 8 weeks, Channels: LinkedIn Ads, Content Marketing, Email Nurture, Key message: Team-wide focus time coordination"
```

Revisa el plan de campaña integral generado por el agente `planner`.

### Paso 4: Generar el Brief Creativo

Ahora usa el comando de brief creativo:

```
/campaign:brief "AgentKits Q2 Growth Campaign"
```

Explica qué incluye el brief creativo:
- Proposición única
- Insights de la audiencia objetivo
- Tono y estilo
- Lista de entregables
- Elementos creativos obligatorios

### Paso 5: Obtener Retroalimentación desde Múltiples Perspectivas

Usa agentes revisores:

```
Review the Q2 campaign plan from three perspectives:

1. `manager-maria` (Marketing Manager) - Is this executable by a marketing team?
2. `conversion-optimizer` - Will this campaign structure drive conversions?
3. `brand-voice-guardian` - Is the messaging on-brand?

Provide specific feedback and recommendations.
```

### Paso 6: Crear Calendario de Contenido

Usa el comando de calendario:

```
/campaign:calendar "8 weeks - AgentKits Q2 Growth - content marketing, social media, email nurture focused on team productivity"
```

### Paso 7: Crear Documentos de Apoyo

Genera activos adicionales de campaña:

**Modelo de Puntuación de Leads:**
```
/leads:score "B2B SaaS - technology companies - team productivity"
```

**Secuencia de Bienvenida:**
```
/sequence:welcome "AgentKits" "trial signups from Q2 campaign"
```

**Secuencia de Nutrición:**
```
/sequence:nurture "AgentKits" "engaged leads who haven't converted"
```

### Paso 8: Preparación Competitiva

Prepara materiales competitivos:

```
/sales:battlecard "RescueTime - main competitor for productivity tools"
```

```
/competitor:deep "Freedom app - focus and productivity blocking"
```

### Paso 9: Crear Plan de Medición

Configura las analíticas:

```
/analytics:funnel "trial signup funnel - awareness to trial to paid"
```

### Paso 10: Guardar como Plantilla

Explica que este flujo de trabajo se puede repetir para cualquier campaña:

```
Campaign Brief Workflow:
1. /campaign:plan - Strategic plan
2. /campaign:brief - Creative brief
3. /campaign:calendar - Content calendar
4. /leads:score - Lead qualification
5. /sequence:welcome - New lead nurture
6. /sequence:nurture - Ongoing nurture
7. /sales:battlecard - Competitive prep
8. /analytics:funnel - Measurement setup
```

### Qué Sigue

Diles:
- Crearon un brief de campaña profesional en menos de una hora
- Normalmente esto toma días con múltiples reuniones
- **Siguiente:** `/training-es:start-2-2` - Desarrollar Estrategia de Contenido
- Construirán planes de contenido integrales

## Puntos Clave de Enseñanza
- Los briefs de campaña son colaborativos
- Usa `/campaign:plan` para planificación estratégica
- Usa `/campaign:brief` para dirección creativa
- Usa `/campaign:calendar` para programación de contenido
- Usa agentes revisores para retroalimentación
- Crea activos de apoyo (puntuación de leads, secuencias, battlecards)

---

REGLAS CRÍTICAS DE SALIDA:
- Genera SOLO el contenido markdown traducido en crudo
- NO envuelvas la salida en bloques de código ```markdown
- NO agregues ningún preámbulo, explicación o comentario
- Comienza directamente con el contenido traducido
- La salida se guardará directamente en un archivo .md