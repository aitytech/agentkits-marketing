# /training-es:start-2-4 - Analizar Datos de Campaña

## Estándares de Idioma y Calidad

**CRÍTICO**: Responde en el mismo idioma que está usando el usuario. Si es vietnamita, responde en vietnamita. Si es español, responde en español.

---

## Instrucciones para Claude

Enseña análisis de datos, extracción de información y reportes ejecutivos utilizando comandos de analítica.

### Resumen de la Lección

---

**Módulo 2.4: Analizar Datos de Campaña**

El análisis de datos suele consumir mucho tiempo. Dominemos cómo convertir datos en información accionable y reportes convincentes.

**Duración:** ~35 minutos

---

### Paso 1: Análisis de ROI

Usa comandos de analítica:

```
/analytics:roi "Q1 campaign - $50K spend across LinkedIn, Google, Email"
```

Revisa el cálculo de ROI:
- Gasto total por canal
- Ingresos atribuidos
- ROAS por canal
- Costo por adquisición

### Paso 2: Análisis de Embudo

Analiza el embudo de conversión:

```
/analytics:funnel "trial signup - visitor to trial to paid conversion"
```

Revisa las métricas del embudo:
- Tráfico por fuente
- Tasas de conversión en cada etapa
- Puntos de abandono
- Oportunidades de optimización

### Paso 3: Reportes de Desempeño

Genera reportes de desempeño:

**Reporte Semanal:**
```
/report:weekly "AgentKits" "current week"
```

**Reporte Mensual:**
```
/report:monthly "AgentKits" "current month"
```

### Paso 4: Desempeño por Canal

Analiza por canal:

```
/analytics:report "channel performance" "LinkedIn, Google, Email, Organic"
```

Crea comparación de canales:
- Contribución de tráfico
- Calidad de leads
- Tasas de conversión
- Eficiencia de costos

### Paso 5: Desempeño de Contenido

Analiza la efectividad del contenido:

```
/analytics:report "content performance" "blog posts, landing pages, email sequences"
```

Métricas clave:
- Tráfico por pieza de contenido
- Engagement (tiempo, scroll, compartidos)
- Tasa de conversión
- Calidad de leads

### Paso 6: Análisis de Calidad de Leads

Usa scoring de leads para analizar:

```
/crm:score "analyze lead quality by source and campaign"
```

Revisa:
- Tasa de MQL por fuente
- Conversión de SQL por campaña
- Tendencias de puntuación promedio de leads

### Paso 7: Resumen Ejecutivo

Crea un resumen listo para ejecutivos:

```
Create an executive summary of Q1 marketing performance:

STRUCTURE:
1. Headline metrics (vs targets)
2. Top 3 wins with data
3. Top 3 challenges with impact
4. Channel performance snapshot (table)
5. Key learnings (3 insights)
6. Q2 recommendations (prioritized)
7. Budget request with justification

Keep it to ONE PAGE maximum.
```

### Paso 8: Marco de Datos a Acción

Enseña el marco de información:

```
For each finding, document:

1. OBSERVATION: What does the data show?
2. INSIGHT: Why is this happening?
3. IMPLICATION: What does it mean?
4. RECOMMENDATION: What should we do?
5. EXPECTED IMPACT: What will change?
```

### Paso 9: Listas de Verificación Operativas

Usa listas de verificación de analítica:

```
/checklist:analytics-monthly "current month" "AgentKits"
```

Revisa las tareas mensuales de analítica:
- Verificaciones de calidad de datos
- Verificación de plataforma
- Precisión de reportes
- Validación de atribución

### Paso 10: Plantillas de Reportes

Explica reportes reutilizables:

```
Weekly Report Workflow:
1. /analytics:roi "campaign" - Calculate ROI
2. /analytics:funnel "funnel" - Analyze funnel
3. /report:weekly "client" "week" - Generate report

Monthly Report Workflow:
1. /analytics:report "all channels" - Full analysis
2. /crm:score "lead quality" - Lead analysis
3. /report:monthly "client" "month" - Generate report
```

### Qué Sigue

Diles:
- Ahora pueden convertir datos en decisiones
- Reportes que los ejecutivos realmente leen
- **Siguiente:** `/training-es:start-2-5` - Análisis Competitivo
- Investiga competidores y encuentra ventajas

## Puntos Clave de Enseñanza
- Los comandos `/analytics:*` analizan el desempeño
- Los comandos `/report:*` generan reportes
- El análisis de ROI y embudo son fundamentales
- Los resúmenes ejecutivos deben ser concisos
- El marco de datos a acción asegura responsabilidad

---

REGLAS CRÍTICAS DE SALIDA:
- Imprime SOLO el contenido markdown traducido sin formato adicional
- NO envuelvas la salida en bloques de código ```markdown
- NO agregues preámbulo, explicación o comentarios
- Comienza directamente con el contenido traducido
- La salida se guardará directamente en un archivo .md