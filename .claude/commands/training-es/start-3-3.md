---
description: /training-es:start-3-3 - CRO de Popups y Onboarding
argument-hint:
---

# Módulo 3, Lección 3: CRO de Popups y Onboarding

## Convirtiendo Visitantes y Activando Usuarios

Esta lección cubre dos puntos críticos de conversión: capturar visitantes con popups y activar nuevos registros a través del onboarding.

## Objetivos de Aprendizaje

Al finalizar esta lección, podrás:
1. Diseñar popups de alta conversión sin molestar a los usuarios
2. Optimizar los flujos de onboarding post-registro
3. Identificar y acelerar el "momento Aha"
4. Crear pantallas de paywall y actualización

---

## CRO de Popups

### Cuándo Funcionan los Popups

| Tipo | Disparador | Mejor Para |
|------|---------|----------|
| Exit Intent | El ratón sale del viewport | Captura de leads, salvar abandonos |
| Retardo de Tiempo | 30-60 segundos en la página | Visitantes comprometidos |
| Activado por Scroll | 50-70% de profundidad de scroll | Engagement con contenido |
| Activado por Clic | Acción del usuario | CTAs específicos |

### Cuándo Fallan los Popups

- Aparecer inmediatamente al cargar la página
- Sin propuesta de valor clara
- Difícil de cerrar
- El mismo popup en cada visita

---

## Ejercicio de Diseño de Popups

Usa `/cro:popup` para diseñar popups efectivos:

```bash
/cro:popup "Design exit-intent popup for AgentKits blog. Goal: capture emails for 'Remote Team Productivity Guide' lead magnet."
```

### Elementos de un Buen Popup

1. **Valor claro:** Qué reciben
2. **Campos mínimos:** Solo email
3. **Fácil de cerrar:** X visible
4. **Mobile-friendly:** CTA alcanzable con el pulgar
5. **Límite de frecuencia:** Una vez por sesión

---

## CRO de Onboarding

### La Ecuación de Activación

**Momento Aha** = La primera vez que el usuario experimenta el valor central

Para AgentKits: "Cuando un miembro del equipo ve el calendario de concentración de su equipo y bloquea tiempo libre de distracciones"

### Patrones de Onboarding

| Patrón | Mejor Para |
|---------|----------|
| Asistente de Configuración | Productos complejos que necesitan configuración |
| Lista de Verificación | Apps ricas en funcionalidades |
| Tour Interactivo | Productos con UI intensiva |
| Galería de Plantillas | Herramientas creativas |
| Proyecto de Ejemplo | Herramientas basadas en proyectos |

---

## Ejercicio de Onboarding

Usa `/cro:onboarding` para optimizar la activación de AgentKits:

```bash
/cro:onboarding "Design onboarding for AgentKits. Aha moment: seeing team focus schedule. Current activation: 15% of trials. Goal: 40%."
```

### Preguntas Clave

1. ¿Cuál es la configuración mínima para obtener valor?
2. ¿Puedes mostrar valor antes de la configuración?
3. ¿Cuál es la acción #1 que predice la conversión?
4. ¿Qué tan rápido pueden los usuarios alcanzar el momento Aha?

---

## CRO de Paywall y Actualización

Para productos freemium y de prueba, las pantallas de actualización son críticas.

### Disparadores de Paywall

| Disparador | Contexto |
|---------|---------|
| Bloqueo de función | El usuario intenta una función premium |
| Límite de uso | Alcanzó el límite del tier gratuito |
| Expiración de prueba | Finalización de prueba basada en tiempo |
| Mensaje de actualización | Después de un momento de valor |

### Ejercicio de Paywall

```bash
/cro:paywall "Design upgrade screen for AgentKits. Trigger: user hits 5-user limit on free tier. Goal: convert to Team plan ($12/user)."
```

---

## Tarea Práctica

Completa estos ejercicios para AgentKits:

### 1. Popup de Exit Intent
```bash
/cro:popup "Exit intent for AgentKits pricing page - capture leads who leave without trial"
```
Guardar en: `training/exercises/markit/cro/exit-popup.md`

### 2. Flujo de Onboarding
```bash
/cro:onboarding "5-step onboarding to reach Aha moment in under 3 minutes"
```
Guardar en: `training/exercises/markit/cro/onboarding-flow.md`

### 3. Pantalla de Actualización
```bash
/cro:paywall "Upgrade screen when free user invites 6th team member"
```
Guardar en: `training/exercises/markit/cro/upgrade-screen.md`

---

## Embudo Completo de CRO

Ahora puedes optimizar el embudo de conversión completo:

```
Visitante → CRO de Página → CRO de Formulario → CRO de Registro
     ↓
  CRO de Popup (capturar abandonos)
     ↓
Nuevo Usuario → CRO de Onboarding → Activación
     ↓
Usuario Gratuito → CRO de Paywall → Cliente de Pago
```

Cada habilidad maneja una etapa específica.

---

## Punto de Control

Antes de completar el Módulo 3, verifica que puedes:
- [ ] Diseñar popups efectivos con disparadores apropiados
- [ ] Crear flujos de onboarding que aceleren el momento Aha
- [ ] Construir pantallas de actualización para conversión freemium
- [ ] Mapear el embudo completo de CRO

---

## ¡Módulo 3 Completo!

Has dominado las habilidades de CRO. Tus entregables:

```
training/exercises/markit/cro/
├── landing-page-audit.md
├── form-audit.md
├── optimized-form.md
├── form-ab-test.md
├── exit-popup.md
├── onboarding-flow.md
└── upgrade-screen.md
```

---

## Siguiente: Habilidades Avanzadas

Continúa al Módulo 4: Estrategias de Crecimiento y Lanzamiento

```bash
/training-es:start-4-1
```

O explora otras habilidades nuevas:
- `/marketing:psychology` - Más de 70 modelos mentales
- `/marketing:ideas` - 140 ideas de marketing
- `/growth:launch` - Estrategia de lanzamiento
- `/pricing:strategy` - Diseño de precios