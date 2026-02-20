# /training-es:start-1-2 - Trabajando con Archivos de Marketing

## Estándares de Lenguaje y Calidad

**CRÍTICO**: Responde en el mismo idioma que está usando el usuario. Si es vietnamita, responde en vietnamita. Si es español, responde en español.

---

## Instrucciones para Claude

Enseña organización de archivos, uso de comandos y referencia de documentación para proyectos de marketing.

### Descripción General de la Lección

---

**Módulo 1.2: Trabajando con Archivos de Marketing**

Como marketero, trabajas con muchos tipos de activos: resúmenes de campaña, borradores de contenido, documentos de investigación, informes de analítica. Dominemos cómo organizarlos y gestionarlos eficientemente.

**Duración:** ~25 minutos

---

### Paso 1: Revisar la Estructura de Documentación

Muéstrales la carpeta docs:

```
List all files in docs/
```

Explica cada archivo de documentación:
- `brand-guidelines.md` - Plantilla de estándares de marca
- `content-style-guide.md` - Estándares de escritura, CTAs, formato
- `campaign-playbooks.md` - Plantillas de campaña probadas
- `channel-strategies.md` - Tácticas específicas por plataforma
- `analytics-setup.md` - Seguimiento y atribución
- `usage-guide.md` - Referencia completa del sistema

### Paso 2: Explorar los Playbooks de Campaña

Lee los playbooks de campaña:

```
Read docs/campaign-playbooks.md
```

Explica los tipos de playbook:
- Playbook de Lanzamiento de Producto
- Playbook de Generación de Leads
- Playbook de Conocimiento de Marca
- Playbook de Retención
- Playbook de Promoción de Eventos

### Paso 3: Practicar Comandos de Contenido

Guíalos a través de comandos de creación de contenido:

**Artículo de Blog:**
```
/content:blog "5 Ways Remote Teams Can Improve Coordination" "remote team productivity"
```

**Contenido Social:**
```
/content:social "Team coordination tips for remote managers" "linkedin"
```

**Copy de Email:**
```
/content:email "welcome" "trial users for AgentKits"
```

### Paso 4: Practicar Comandos de Búsqueda

Enseña técnicas de búsqueda usando grep/find o preguntando a Claude:

```
Find all files that mention "lead scoring"
```

```
Search for files containing "conversion rate"
```

### Paso 5: Creación de Contenido en Lote

Demuestra la creación de múltiples activos a la vez:

```
Create multi-channel content for AgentKits launch:
1. LinkedIn announcement post
2. Twitter thread (5 tweets)
3. Email subject lines (5 A/B variations)
4. Google Ads headlines (5 variations, max 30 chars)
```

### Paso 6: Referencia Cruzada con la Guía de Estilo

Muestra cómo usar la guía de estilo de contenido:

```
Read docs/content-style-guide.md
```

Señala:
- Fórmulas de titulares (Framework de las 4-U)
- Patrones de CTA
- Estándares de legibilidad
- Directrices de escritura SEO

### Paso 7: Comandos de Referencia Rápida

Comparte patrones de comandos esenciales:

**Comandos de Campaña:**
- `/campaign:plan` - Crear plan de campaña
- `/campaign:brief` - Generar brief creativo
- `/campaign:analyze` - Analizar rendimiento
- `/campaign:calendar` - Calendario de contenido

**Comandos de Contenido:**
- `/content:blog` - Artículo de blog SEO
- `/content:social` - Social específico por plataforma
- `/content:email` - Copy de email
- `/content:landing` - Copy de página de aterrizaje
- `/content:ads` - Copy de anuncios

### Qué Sigue

Diles:
- Ahora saben cómo navegar la documentación del kit de marketing
- Los comandos están organizados por función de marketing
- **Siguiente:** `/training-es:start-1-3` - Primeras Tareas de Marketing (generación de contenido, análisis)

## Puntos Clave de Enseñanza
- Una buena organización de documentación hace todo más rápido
- Seis documentos clave cubren marca, contenido, campañas, canales, analítica, uso
- Los comandos están organizados por función (campaign, content, seo, etc.)
- Referencia cruzada de documentos para consistencia
- Las operaciones en lote ahorran tiempo masivamente

---

REGLAS CRÍTICAS DE SALIDA:
- Produce SOLO el contenido markdown traducido sin formato
- NO envuelvas la salida en bloques de código ```markdown
- NO agregues preámbulo, explicación o comentario
- Comienza directamente con el contenido traducido
- La salida se guardará directamente en un archivo .md