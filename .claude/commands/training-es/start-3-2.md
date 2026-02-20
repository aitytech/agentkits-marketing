---
description: /training-es:start-3-2 - Optimización de Formularios e Inscripciones
argument-hint:
---

# Módulo 3, Lección 2: Optimización de Formularios e Inscripciones

## Dominando el CRO de Formularios y Registro

Los formularios son guardianes de conversión. Cada campo innecesario te cuesta leads. Esta lección te enseña a optimizar formularios de captura de leads y flujos de inscripción.

## Objetivos de Aprendizaje

Al final de esta lección, podrás:
1. Aplicar la regla del máximo de 5 campos
2. Optimizar flujos de inscripción para conversión
3. Reducir la fricción de formularios sistemáticamente
4. Diseñar formularios progresivos de múltiples pasos

---

## Principios de CRO para Formularios

### La Regla de los 5 Campos

Cada campo más allá de 5 reduce la conversión aproximadamente un 10%.

**Solo campos esenciales:**
1. Email (siempre requerido)
2. Nombre (a veces)
3. Empresa (solo B2B)
4. Contraseña (solo inscripción)
5. Un calificador si es necesario

**Diferir todo lo demás** para después de la inscripción.

### Puntos de Fricción a Eliminar

| Fricción | Solución |
|----------|----------|
| Demasiados campos | Eliminar o diferir |
| Requisitos de contraseña | Mostrar en línea, no después del error |
| Teléfono requerido | Hacer opcional o eliminar |
| CAPTCHA | Usar alternativas invisibles |
| Sin login social | Agregar opciones de Google/SSO |

---

## Comando de CRO para Formularios

Usa `/cro:form` para formularios de captura de leads:

```bash
/cro:form "Optimize AgentKits's demo request form: Name, Email, Company, Phone, Title, Team Size, Message"
```

### Recomendaciones Esperadas

1. **Eliminar:** Message (preguntar en seguimiento)
2. **Eliminar:** Phone (se puede capturar después)
3. **Hacer opcional:** Title
4. **Mantener:** Name, Email, Company, Team Size

Reducido de 7 → 4 campos = estimado +30% conversiones

---

## Optimización de Flujo de Inscripción

Para registro de cuentas, usa `/cro:signup`:

```bash
/cro:signup "Analyze AgentKits's trial signup: Email → Password → Company → Team Size → Use Case → Payment"
```

### Patrones de Flujo de Inscripción

| Patrón | Mejor Para | Conversión |
|---------|-----------|------------|
| Inicio solo con email | Mayor conversión | Comenzar con email, perfilado progresivo |
| Social primero | Apps de consumidor | Google/SSO prominente |
| Página única mínima | B2C, productos simples | Todos los campos visibles |
| Múltiples pasos con progreso | B2B, complejo | Guiado, muestra progreso |

---

## Ejercicio 1: Auditoría de Formulario

Audita el formulario actual de solicitud de demo de AgentKits:

```bash
/cro:form "7-field form: Name, Email, Company, Phone, Job Title, Team Size, Message. Goal: schedule demo calls."
```

Crea recomendaciones en:
```
training/exercises/markit/cro/form-audit.md
```

### Tu Resultado Debe Incluir

1. Campos a eliminar
2. Campos a hacer opcionales
3. Estrategia de perfilado progresivo
4. Mejoras de copy (texto de botón, etiquetas)

---

## Ejercicio 2: Rediseño de Flujo de Inscripción

Diseña un flujo de inscripción optimizado para AgentKits:

```bash
/cro:signup "Design optimal trial signup for AgentKits. Current: 5-step process. Goal: maximize trial starts."
```

Considera:
- Captura inicial solo con email
- Opciones OAuth (Google Workspace para B2B)
- Cuándo recopilar información de empresa
- Separación entre onboarding e inscripción

---

## Ejercicio 3: Diseño de Formulario de Múltiples Pasos

Para inscripciones B2B complejas, diseña un enfoque de múltiples pasos:

**Paso 1:** Solo email
**Paso 2:** Empresa + tamaño del equipo (con barra de progreso)
**Paso 3:** Selección opcional de caso de uso

Usa la habilidad form-cro para validar:

```bash
/cro:form "Design 3-step progressive form for AgentKits enterprise demo"
```

---

## Tarea Práctica

Completa estas tareas:

1. **Auditar formulario actual:**
   Guardar en `training/exercises/markit/cro/current-form-audit.md`

2. **Diseñar formulario optimizado:**
   Guardar en `training/exercises/markit/cro/optimized-form.md`

3. **Crear prueba A/B:**
   ```bash
   /test:ab-setup "Test 7-field vs 4-field form for AgentKits demos"
   ```
   Guardar en `training/exercises/markit/cro/form-ab-test.md`

---

## Punto de Control

Antes de continuar, verifica que puedes:
- [ ] Aplicar la regla del máximo de 5 campos
- [ ] Identificar fricción en flujos de inscripción
- [ ] Diseñar estrategia de perfilado progresivo
- [ ] Crear hipótesis de pruebas A/B para formularios

---

## Próxima Lección

Continúa al Módulo 3, Lección 3: CRO de Popups y Onboarding

```bash
/training-es:start-3-3