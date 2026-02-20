# /training-es:start-2-3 - Generar Contenido de Marketing

## Estándares de Idioma y Calidad

**CRÍTICO**: Responde en el mismo idioma que está usando el usuario. Si es vietnamita, responde en vietnamita. Si es español, responde en español.

---

## Instrucciones para Claude

Enseña la generación de contenido a gran volumen a través de canales mientras se mantiene la calidad.

### Resumen de la Lección

---

**Módulo 2.3: Generar Contenido de Marketing**

Aprende a crear contenido de marketing profesional a escala: emails, anuncios, redes sociales, páginas de destino. Calidad + Velocidad.

**Duración:** ~35 minutos

---

### Paso 1: Secuencia de Emails de Bienvenida

Usa el comando de secuencia:

```
/sequence:welcome "AgentKits" "trial users - remote team managers"
```

Revisa la secuencia generada:
- Email 1 (Día 0): Bienvenida + Inicio Rápido
- Email 2 (Día 2): Destacado de Funcionalidad
- Email 3 (Día 5): Prueba Social + Consejos
- Email 4 (Día 9): Refuerzo de Valor
- Email 5 (Día 13): Fin de Prueba + Actualización

Cada email incluye:
- Variaciones de línea de asunto para pruebas A/B
- Texto de vista previa
- Cuerpo del texto
- CTA claro

### Paso 2: Contenido para Redes Sociales

Usa comandos de contenido para redes sociales:

**LinkedIn:**
```
/content:social "Team coordination tips for remote managers - AgentKits launch" "linkedin"
```

**Twitter:**
```
/content:social "5 ways remote teams waste time coordinating - thread" "twitter"
```

### Paso 3: Contenido de Blog

Usa el comando de blog con enfoque SEO:

```
/content:blog "How Remote Teams Can Coordinate Focus Time Without Endless Meetings" "remote team focus time"
```

Luego optimiza:
```
/seo:optimize "the blog post" "remote team focus time"
```

### Paso 4: Texto para Anuncios Pagados

Usa comandos de texto publicitario:

**Google Ads:**
```
/content:ads "google" "team productivity software - drive signups"
```

**Meta Ads:**
```
/content:ads "meta" "remote team coordination - awareness campaign"
```

**LinkedIn Ads:**
```
/content:ads "linkedin" "B2B productivity tool - lead generation"
```

### Paso 5: Texto de Página de Destino

Usa el comando de página de destino:

```
/content:landing "14-day free trial of AgentKits" "remote team managers at tech companies"
```

Esto genera:
- Sección principal (titular, subtítulo, CTA)
- Sección de problema
- Sección de solución
- Funcionalidades con beneficios
- Sección de prueba social
- Resumen de precios
- Sección de FAQ
- CTA final

### Paso 6: Contenido Rápido vs Bueno

Explica los dos modos de contenido:

**Contenido Rápido (`/content:fast`):**
- Entrega rápida
- Bueno para ideación
- Primeros borradores
- Necesidades de alto volumen

```
/content:fast "Quick LinkedIn post about team focus time benefits"
```

**Contenido Bueno (`/content:good`):**
- Investigación exhaustiva
- Múltiples variaciones
- Listo para publicación
- Piezas estratégicas

```
/content:good "Detailed blog post about the science of team focus time with research citations"
```

### Paso 7: Mejora de Contenido

Usa comandos de mejora:

```
/content:enhance "make the copy more conversational and add urgency"
```

```
/content:cro "optimize for higher conversion rate"
```

### Paso 8: Variaciones de Prueba A/B

Crea variaciones de prueba:

```
Create A/B test variations for the landing page:

Headlines (5 angles):
1. Outcome-focused
2. Problem-focused
3. Question
4. How-to
5. Social proof

CTAs (3 variations):
1. Start Free Trial
2. Try It Free
3. Get Started Now
```

### Paso 9: Personalización por Persona

Crea variaciones específicas por persona:

**Para Solo Sam:**
```
/content:email "product announcement" "technical team managers - efficiency focus"
```

**Para Startup Sam:**
```
/content:email "product announcement" "startup founders - growth and scale focus"
```

### Paso 10: Revisión de Calidad

Revisa todo el contenido con especialistas:

```
Review all content we created with:
1. brand-voice-guardian - brand consistency
2. conversion-optimizer - conversion potential
3. seo-specialist - SEO optimization

Score each piece and identify top improvements needed.
```

### Qué Sigue

Diles:
- Generaron una biblioteca completa de contenido en una sola sesión
- Normalmente semanas de trabajo
- **Siguiente:** `/training-es:start-2-4` - Analizar Datos de Campaña
- Convertir datos en insights accionables

## Puntos Clave de Enseñanza
- Los comandos `/content:*` manejan todos los tipos de contenido
- `/sequence:*` crea automatización de emails
- Usa modo rápido para borradores, modo bueno para versión final
- `/content:cro` optimiza para conversión
- Personaliza por persona para mayor relevancia
- Siempre revisa con agentes especialistas

---

REGLAS CRÍTICAS DE SALIDA:
- Genera SOLO el contenido markdown traducido sin formato adicional
- NO envuelvas la salida en bloques de código ```markdown
- NO agregues preámbulos, explicaciones o comentarios
- Comienza directamente con el contenido traducido
- La salida se guardará directamente en un archivo .md