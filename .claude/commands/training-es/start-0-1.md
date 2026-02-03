# /training-es:start-0-1 - Instalación y Configuración

## Estándares de Lenguaje y Calidad

**CRÍTICO**: Responde en el mismo idioma que está usando el usuario. Si es vietnamita, responde en vietnamita. Si es español, responde en español.

---

## Instrucciones para Claude

Guía al estudiante a través de la verificación de su instalación de Claude Code y la configuración del kit de marketing.

### Resumen de la Lección

Di algo como:

---

**Módulo 0.1: Instalación y Configuración**

Antes de sumergirnos en los flujos de trabajo de marketing, asegurémonos de que todo esté configurado correctamente.

---

### Paso 1: Verificar Claude Code

Pídeles que confirmen:
- Están ejecutando esto dentro de Claude Code (no el chat web)
- Tienen una suscripción Claude Pro o Max

Si no están seguros, explica:
- Claude Code es la versión de terminal/CLI
- Puede leer, escribir y editar archivos directamente
- Es diferente del chat web de claude.ai

### Paso 2: Verificar los Archivos del Kit de Marketing

Ejecuta estas verificaciones CON el estudiante (ejecútalas realmente):

```
Show me the contents of this directory
```

Deberían ver:
- Carpeta `.claude/` con agentes, comandos, habilidades, flujos de trabajo
- Carpeta `docs/` con documentación
- Archivo `CLAUDE.md` (la memoria del proyecto)
- Archivo `README.md`

### Paso 3: Explorar la Estructura del Sistema

Muéstrales la estructura del kit de marketing:

```
List all folders in .claude/
```

Explica cada componente:
- `agents/` - 18 agentes especializados de marketing
- `commands/` - 76 comandos slash organizados por función
- `skills/` - Conocimiento del dominio de marketing
- `workflows/` - Flujos de trabajo principales de marketing, ventas y CRM

### Paso 4: Explorar los Comandos Disponibles

Muéstrales las categorías de comandos:

```
List all folders in .claude/commands/
```

Explica los grupos de comandos clave:
- `campaign/` - `/campaign:plan`, `/campaign:brief`, `/campaign:analyze`
- `content/` - `/content:blog`, `/content:social`, `/content:email`, `/content:landing`
- `seo/` - `/seo:keywords`, `/seo:audit`, `/seo:optimize`
- `analytics/` - `/analytics:roi`, `/analytics:funnel`, `/analytics:report`
- `sales/` - `/sales:pitch`, `/sales:outreach`, `/sales:battlecard`

### Paso 5: Probar tu Primer Comando

Haz que prueben un comando real:

```
/brainstorm "What are the best marketing channels for a B2B SaaS product?"
```

¡Celebra la ejecución de su primer comando!

### Paso 6: Revisar la Documentación

Muéstrales los documentos clave:

```
Read docs/usage-guide.md (first 50 lines)
```

Explica:
- `docs/usage-guide.md` - Referencia completa del sistema
- `docs/brand-guidelines.md` - Plantilla de estándares de marca
- `docs/content-style-guide.md` - Estándares de escritura
- `docs/campaign-playbooks.md` - Plantillas de campañas
- `docs/channel-strategies.md` - Tácticas de plataformas
- `docs/analytics-setup.md` - Configuración de seguimiento

### Qué Sigue

Diles:
- **Próxima lección:** `/training-es:start-0-2` - Tu Primera Tarea de Marketing
- ¡Acaban de verificar su configuración y ejecutar su primer comando!
- Así es exactamente como funciona el resto del curso

## Puntos Clave de Enseñanza
- Claude Code funciona directamente con archivos
- El kit de marketing tiene 18 agentes, 76 comandos y documentación completa
- Cada lección implica ejecución práctica de comandos
- Verifica que las cosas realmente funcionaron (vuelve a leer los archivos)

---

REGLAS CRÍTICAS DE SALIDA:
- Genera SOLO el contenido markdown traducido sin formato adicional
- NO envuelvas la salida en vallas de código ```markdown
- NO agregues ningún preámbulo, explicación o comentario
- Comienza directamente con el contenido traducido
- La salida se guardará directamente en un archivo .md