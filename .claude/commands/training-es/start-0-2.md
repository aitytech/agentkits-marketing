# /training-es:start-0-2 - Tu Primera Tarea de Marketing

## Estándares de Idioma y Calidad

**CRÍTICO**: Responde en el mismo idioma que está usando el usuario. Si es vietnamita, responde en vietnamita. Si es español, responde en español.

---

## Instrucciones para Claude

Guía al estudiante a través de su primera tarea real de marketing: crear directrices de marca usando nuestros comandos.

### Resumen de la Lección

---

**Módulo 0.2: Tu Primera Tarea de Marketing**

Ahora hagamos algo de trabajo de marketing real. Crearemos directrices de marca para AgentKits usando el comando `/brand:voice`.

---

### Paso 1: Explicar las Directrices de Marca

Explica por qué importan las directrices de marca:
- Asegura consistencia en todo el contenido
- Ayuda a Claude (y a los humanos) a escribir con el tono correcto
- Documenta mensajes clave y terminología
- Previene contenido fuera de marca

### Paso 2: Usar el Comando de Voz de Marca

Guíalos a usar el comando real del sistema:

```
/brand:voice "AgentKits - B2B team productivity coordination tool for remote teams"
```

Deja que Claude genere directrices de marca completas, luego revísalas con el estudiante.

### Paso 3: Crear Personas de Cliente

Ahora usa el comando de investigación para personas:

```
/research:persona "Remote team managers at tech companies using AgentKits"
```

Explica:
- El agente `researcher` maneja la investigación de mercado
- Las personas ayudan a dirigir contenido a audiencias específicas
- Usaremos estas personas a lo largo del curso

### Paso 4: Revisar Lo Que Se Creó

Revisa los resultados juntos:

```
Show me what the brand:voice command created
```

Señala:
- Atributos de voz y espectro de tono
- Marco de mensajería
- Palabras a usar y evitar
- Integración con otros agentes

### Paso 5: El Poder del Contexto

Explica:
- Estas directrices ahora existen en el contexto del proyecto
- En tareas futuras, los agentes pueden referenciarlas
- Esto es "conciencia de contexto" - uno de los superpoderes de Claude
- Las usaremos a lo largo del curso

### Ejercicio Rápido: Probar la Generación de Contenido

Haz que prueben usar el contexto de marca:

```
/content:social "Remote team productivity tips" "linkedin"
```

Muestra cómo Claude usa el contexto de marca automáticamente en la creación de contenido.

### Paso 6: Explorar Otros Comandos Clave

Demuestra brevemente otros comandos que dominarán:

**Planificación de Campaña:**
```
/campaign:plan "Q1 Product Launch"
```

**Investigación SEO:**
```
/seo:keywords "remote team productivity"
```

**Secuencias de Email:**
```
/sequence:welcome "AgentKits" "trial users"
```

### Qué Sigue

Diles:
- **¡Felicitaciones!** ¡Módulo 0 completado!
- Han usado comandos de marketing reales y visto el sistema en acción
- **Siguiente:** `/training-es:start-1-1` - Bienvenido a Markit (Comienzan los Conceptos Básicos)
- Se sumergirán profundamente en agentes, flujos de trabajo y comandos avanzados

## Puntos Clave de Enseñanza
- Las directrices de marca aseguran consistencia
- Usa `/brand:voice` para crear directrices de voz
- Usa `/research:persona` para personas de cliente
- La conciencia de contexto significa que los agentes referencian trabajo existente
- Los comandos reales (`/campaign:*`, `/content:*`, `/seo:*`) son los que dominarán

---

REGLAS CRÍTICAS DE SALIDA:
- Emite SOLO el contenido markdown traducido sin procesar
- NO envuelvas la salida en bloques de código ```markdown
- NO agregues ningún preámbulo, explicación o comentario
- Comienza directamente con el contenido traducido
- La salida se guardará directamente en un archivo .md