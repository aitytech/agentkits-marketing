# /training-es:persona-builder - Constructor Interactivo de Personas

## Estándares de Idioma y Calidad

**CRÍTICO**: Responde en el mismo idioma que está usando el usuario. Si es vietnamita, responde en vietnamita. Si es español, responde en español.

---

## Instrucciones para Claude

Guía a los usuarios no desarrolladores a través de la creación de una persona compradora paso a paso usando el **Patrón UX Interactivo**. Haz preguntas con 2-4 opciones clicables en cada paso. Esta es una sesión de capacitación práctica y amigable para principiantes.

### Mensaje de Bienvenida

---

**Constructor Interactivo de Personas**

Te guiaré a través de la creación de una persona compradora detallada para tu producto o servicio. No se necesita experiencia en marketing - solo responde algunas preguntas eligiendo entre las opciones que proporciono.

**Lo que crearás:**
- Un perfil completo de persona compradora
- Puntos clave de mensajería para esta persona
- Recomendaciones de canales

**Duración:** ~15 minutos

¡Comencemos!

---

### Paso 1: Tipo de Negocio

**IMPORTANTE**: Usa la herramienta AskUserQuestion para preguntar:

**Pregunta:** "¿Qué tipo de producto o servicio estás comercializando?"

**Opciones:**
1. **SaaS / Software** - Software en la nube, aplicaciones, herramientas digitales
2. **E-commerce** - Productos físicos, tienda en línea
3. **Servicios Profesionales** - Consultoría, agencia, coaching
4. **Otro** - Permitir que el usuario especifique

---

### Paso 2: Audiencia Objetivo

**IMPORTANTE**: Usa la herramienta AskUserQuestion para preguntar:

**Pregunta:** "¿Quién es tu audiencia objetivo principal?"

**Opciones:**
1. **Tomadores de Decisiones B2B** - Gerentes, directores, ejecutivos en empresas (Recomendado para SaaS)
2. **Usuarios Finales B2B** - Empleados individuales, miembros del equipo
3. **Consumidores B2C** - Consumidores individuales para uso personal
4. **Otro** - Permitir que el usuario especifique

---

### Paso 3: Tamaño de Empresa (si es B2B)

Si se seleccionó B2B, usa la herramienta AskUserQuestion:

**Pregunta:** "¿Qué tamaño de empresa sueles dirigirte normalmente?"

**Opciones:**
1. **Startups** - 1-20 empleados, fundadores/equipo inicial
2. **SMB** - 20-200 empleados, equipos en crecimiento (Recomendado)
3. **Mercado Medio** - 200-2000 empleados, jefes de departamento
4. **Empresa** - 2000+ empleados, adquisiciones involucradas

---

### Paso 4: Punto de Dolor Principal

**IMPORTANTE**: Usa la herramienta AskUserQuestion:

**Pregunta:** "¿Cuál es el problema #1 que resuelve tu producto?"

**Opciones:**
1. **Ahorrar Tiempo** - Automatización, eficiencia, productividad
2. **Ahorrar Dinero** - Reducción de costos, mejor ROI
3. **Reducir Riesgo** - Cumplimiento, seguridad, confiabilidad
4. **Aumentar Ingresos** - Más ventas, leads, clientes

---

### Paso 5: Criterios de Decisión

**IMPORTANTE**: Usa la herramienta AskUserQuestion:

**Pregunta:** "¿Qué es lo más importante para tus compradores al elegir una solución?"

**Opciones:**
1. **Precio / Valor** - Conscientes del presupuesto, enfocados en ROI
2. **Características / Capacidad** - Usuarios avanzados, necesidades específicas (Recomendado)
3. **Facilidad de Uso** - No técnicos, adopción rápida
4. **Confianza / Marca** - Jugadores establecidos, referencias

---

### Paso 6: Preset de Persona

**IMPORTANTE**: Usa la herramienta AskUserQuestion:

**Pregunta:** "¿Qué arquetipo de persona se ajusta mejor a tu cliente ideal?"

**Opciones:**
1. **Manager Maria** - Gerente B2B, líder de equipo, enfocado en resultados (Recomendado para B2B)
2. **Startup Sam** - Fundador, múltiples roles, enfocado en crecimiento
3. **Solo Steve** - Emprendedor individual, consciente del presupuesto, DIY
4. **Personalizado** - Construir desde cero basado en respuestas anteriores

---

### Generar Persona

Basándote en todas las respuestas, genera una persona completa usando este formato:

```markdown
## [Nombre de Persona]
**Rol:** [Título del Trabajo basado en respuestas]
**Empresa:** [Tipo/Tamaño basado en respuestas]

### Demografía
- Edad: [Rango apropiado]
- Educación: [Nivel apropiado]
- Experiencia: [Años en el rol]
- Reporta a: [A quién reporta]

### Objetivos
1. [Objetivo principal alineado con punto de dolor]
2. [Objetivo secundario alineado con criterios de decisión]
3. [Objetivo profesional/personal]

### Desafíos
1. [Punto de dolor principal del Paso 4]
2. [Desafío relacionado]
3. [Obstáculo para lograr objetivos]

### Cómo [Producto] Ayuda
- Resuelve [punto de dolor 1] mediante [solución específica]
- Habilita [objetivo] a través de [característica]
- Reduce [desafío] con [beneficio]

### Objeciones y Respuestas
- "[Preocupación de presupuesto]" → [Respuesta enfocada en valor]
- "[Tiempo de implementación]" → [Respuesta de facilidad de adopción]
- "[Riesgo de cambio]" → [Respuesta de construcción de confianza]

### Canales Preferidos
- **Descubrimiento:** [Dónde investigan]
- **Contenido:** [Qué consumen]
- **Social:** [Dónde hacen networking]

### Mensajería que Resuena
- Liderar con: [Beneficio principal]
- Enfatizar: [Diferenciador clave]
- Probar con: [Tipo de evidencia]

### Cita Característica
"[Declaración que captura su mentalidad]"
```

---

### Confirmar y Guardar

Después de generar, pregunta:

**Pregunta:** "¿Te gustaría guardar esta persona?"

**Opciones:**
1. **Guardar en docs/** - Guardar como `docs/personas/[nombre].md`
2. **Refinar más** - Ajustar secciones específicas
3. **Crear otra persona** - Comenzar de nuevo para un segmento diferente
4. **Terminado** - Finalizar la capacitación

---

### Celebración y Próximos Pasos

Felicítalos:

**¡Has creado tu primera persona compradora!**

Esta persona te ayudará a:
- Escribir copy de marketing dirigido
- Elegir los canales correctos
- Manejar objeciones en ventas

**¿Qué sigue?**
- `/content:blog` - Crear contenido para esta persona
- `/campaign:brief` - Planificar una campaña dirigida a ellos
- `/research:persona` - Crear personas adicionales
- `/training-es:help` - Ver toda la capacitación disponible

---

## Puntos Clave de Enseñanza

1. **Patrón UX Interactivo**: Siempre usa AskUserQuestion con 2-4 opciones
2. **Los presets ayudan a principiantes**: Ofrece opciones recomendadas con etiqueta (Recomendado)
3. **Construye progresivamente**: Cada respuesta informa la siguiente pregunta
4. **Confirma antes de actuar**: Pregunta antes de guardar o acciones importantes
5. **Celebra la finalización**: Reconoce su logro
6. **Proporciona próximos pasos**: Guíalos a comandos relacionados

---

REGLAS CRÍTICAS DE SALIDA:
- Emite SOLO el contenido markdown traducido sin procesar
- NO envuelvas la salida en bloques de código ```markdown
- NO agregues ningún preámbulo, explicación o comentario
- Comienza directamente con el contenido traducido
- La salida se guardará directamente en un archivo .md