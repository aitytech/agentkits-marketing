# /training-es:start-2-2 - Desarrollar Estrategia de Contenido

## Estándares de Idioma y Calidad

**CRÍTICO**: Responde en el mismo idioma que está usando el usuario. Si es vietnamita, responde en vietnamita. Si es español, responde en español.

---

## Instrucciones para Claude

Enseña el desarrollo integral de estrategia de contenido: investigación, planificación, calendarios y medición.

### Resumen de la Lección

---

**Módulo 2.2: Desarrollar Estrategia de Contenido**

Una estrategia de contenido transforma la creación aleatoria de contenido en un motor de crecimiento sistemático. Construyamos una para AgentKits.

**Duración:** ~40 minutos

---

### Paso 1: Base de Investigación

Comienza con investigación de mercado y audiencia:

```
/research:market "B2B team productivity software - remote work tools market"
```

```
/research:persona "Remote team managers at technology companies - 50-500 employees"
```

```
/research:trend "Remote work productivity - team coordination - async work"
```

### Paso 2: Investigación de Palabras Clave SEO

Usa comandos SEO para la base de palabras clave:

```
/seo:keywords "remote team productivity"
```

```
/seo:keywords "team coordination software"
```

```
/seo:keywords "deep work for teams"
```

Agrupa las palabras clave en clusters temáticos:
- Cluster 1: Productividad de equipos remotos
- Cluster 2: Tiempo de enfoque del equipo
- Cluster 3: Coordinación sin reuniones

### Paso 3: Análisis Competitivo de Contenido

Analiza el contenido de la competencia:

```
/seo:competitor "rescuetime.com"
```

Identifica:
- Qué temas cubren
- Brechas de contenido que podemos llenar
- Palabras clave por las que están posicionándose

### Paso 4: Crear Calendario de Contenido

Usa el calendario de campañas para planificar contenido:

```
/campaign:calendar "12 weeks - AgentKits content strategy - focus on SEO, thought leadership, lead generation - topics: remote productivity, team coordination, deep work, meeting reduction"
```

### Paso 5: Definir Tipos de Contenido

Planifica contenido por etapa del embudo:

**TOFU (Conciencia):**
- Artículos de blog (enfocados en SEO)
- Contenido de redes sociales
- Liderazgo de pensamiento

**MOFU (Consideración):**
- Guías comparativas
- Contenido instructivo
- Casos de estudio

**BOFU (Decisión):**
- Demostraciones de producto
- Calculadoras de ROI
- Testimonios de clientes

### Paso 6: Crear Estrategia de Contenido Pilar

Planifica una estrategia de página pilar:

```
/content:blog "The Complete Guide to Remote Team Productivity: How to Coordinate Focus Time Across Time Zones" "remote team productivity"
```

Contenido de cluster (vinculado al pilar):
1. Cómo programar tiempo de enfoque para el equipo
2. Reducir reuniones sin perder alineación
3. Mejores prácticas de comunicación asíncrona
4. Trabajo profundo en equipos remotos
5. Seguimiento de productividad para equipos

### Paso 7: Flujo de Trabajo de Producción de Contenido

Usa los comandos de contenido para cada pieza:

**Producción de Artículos de Blog:**
```
1. /seo:keywords "topic" - Investigar palabras clave
2. /content:blog "title" "keyword" - Crear artículo
3. /seo:optimize "post" "keyword" - Optimizar
4. Revisar con el agente seo-specialist
5. Revisar con el agente brand-voice-guardian
```

**Producción de Contenido Social:**
```
1. /content:social "topic" "linkedin" - Publicación de LinkedIn
2. /content:social "topic" "twitter" - Hilo de Twitter
3. Revisar con el agente conversion-optimizer
```

### Paso 8: Integración de Email

Crea secuencias de email para nutrir a los consumidores de contenido:

```
/sequence:nurture "AgentKits" "blog readers who downloaded guide"
```

### Paso 9: Plan de Distribución de Contenido

Usa comandos sociales para la distribución:

```
/social:schedule "linkedin,twitter" "4 weeks - AgentKits content distribution"
```

### Paso 10: Marco de Medición

Configura analíticas de contenido:

```
/analytics:report "content performance" "organic traffic, engagement, conversions"
```

Métricas clave a seguir:
- Tráfico orgánico por pieza de contenido
- Tiempo en página
- Tasa de conversión por contenido
- Calidad de leads del contenido

### Qué Sigue

Diles:
- Tienen una estrategia de contenido completa
- De publicaciones aleatorias a crecimiento sistemático
- **Siguiente:** `/training-es:start-2-3` - Generar Copy de Marketing
- Escalar la producción de copy mientras se mantiene la calidad

## Puntos Clave de Enseñanza
- La estrategia transforma el contenido de aleatorio a sistemático
- Los comandos `/research:*` construyen la base
- `/seo:keywords` identifica oportunidades
- Pilar + cluster = potencia SEO
- La producción de contenido sigue un flujo de trabajo repetible
- La medición asegura la responsabilidad

---

REGLAS CRÍTICAS DE SALIDA:
- Produce SOLO el contenido markdown traducido en crudo
- NO envuelvas la salida en cercas de código ```markdown
- NO agregues ningún preámbulo, explicación o comentario
- Comienza directamente con el contenido traducido
- La salida se guardará directamente en un archivo .md