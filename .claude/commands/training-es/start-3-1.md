---
---
description: /training-es:start-3-1 - Fundamentos de CRO
argument-hint:
---

# Módulo 3, Lección 1: Fundamentos de CRO

## Bienvenido a la Optimización de Tasa de Conversión

En este módulo, dominarás las nuevas habilidades de CRO (Optimización de Tasa de Conversión) añadidas a AgentKits Marketing. Estas habilidades te ayudan a mejorar sistemáticamente las tasas de conversión en todos los activos de marketing.

## Objetivos de Aprendizaje

Al final de esta lección, podrás:
1. Comprender las 6 categorías de habilidades CRO
2. Saber cuándo usar cada comando CRO
3. Aplicar principios psicológicos a las conversiones
4. Crear tu primera auditoría CRO

---

## El Conjunto de Habilidades CRO

AgentKits Marketing incluye 7 habilidades CRO especializadas:

| Habilidad | Usar Para | Comando |
|-------|---------|---------|
| `page-cro` | Páginas de destino, páginas de inicio, precios | `/cro:page` |
| `form-cro` | Captura de leads, contacto, formularios de demo | `/cro:form` |
| `popup-cro` | Modales, overlays, intención de salida | `/cro:popup` |
| `signup-flow-cro` | Registro, inscripciones de prueba | `/cro:signup` |
| `onboarding-cro` | Activación post-registro | `/cro:onboarding` |
| `paywall-upgrade-cro` | Muros de pago en la aplicación, actualizaciones | `/cro:paywall` |
| `ab-test-setup` | Diseño de experimentos | `/test:ab-setup` |

---

## Marco de Trabajo CRO

Cada análisis CRO sigue esta jerarquía:

### 1. Propuesta de Valor (Mayor Impacto)
- ¿Pueden los visitantes entender lo que ofreces en 5 segundos?
- ¿Es claro el beneficio, no solo las características?

### 2. Efectividad del Titular
- ¿Comunica el valor principal?
- ¿Es específico y creíble?

### 3. Optimización del CTA
- ¿Una acción principal clara?
- ¿Por encima del pliegue, visible, convincente?

### 4. Señales de Confianza
- ¿Prueba social cerca de las decisiones?
- ¿Insignias de seguridad visibles?

### 5. Reducción de Fricción
- ¿Campos de formulario mínimos?
- ¿Siguientes pasos claros?

---

## Ejercicio 1: Auditar la Página de Destino de AgentKits

Apliquemos los principios CRO a la página de destino de AgentKits.

### Estado Actual (Hipotético)

**Titular:** "Software de Productividad para Equipos"
**CTA:** "Saber Más"
**Formulario:** 7 campos

### Tu Tarea

Crea una auditoría CRO usando el comando `/cro:page`:

```bash
/cro:page "Analyze AgentKits's landing page: Headline 'Team Productivity Software', CTA 'Learn More', 7-field form. Target: remote team managers."
```

### Resultado Esperado

La auditoría debería identificar:
- Titular genérico (no específico ni enfocado en beneficios)
- CTA débil ("Saber Más" vs orientado a la acción)
- Alta fricción (7 campos es demasiado)

---

## Ejercicio 2: Aplicar Psicología

La habilidad `marketing-psychology` incluye más de 70 modelos mentales. Prueba:

```bash
/marketing:psychology "How can we use loss aversion and social proof to improve AgentKits's trial signup rate?"
```

### Modelos Clave para CRO

| Modelo | Aplicación |
|-------|-------------|
| Aversión a la Pérdida | Enfoque de "No te lo pierdas" |
| Prueba Social | "Únete a más de 10,000 equipos" |
| Anclaje | Mostrar primero el plan más caro |
| Escasez | Lugares o tiempo limitados |
| Reciprocidad | Valor gratuito antes de pedir |

---

## Tarea Práctica

Crea un plan completo de mejora CRO:

1. **Ejecuta auditoría de página:**
   ```bash
   /cro:page "AgentKits homepage audit"
   ```

2. **Optimiza el formulario:**
   ```bash
   /cro:form "Reduce AgentKits's 7-field trial signup form"
   ```

3. **Diseña prueba A/B:**
   ```bash
   /test:ab-setup "Test new headline vs current for AgentKits"
   ```

Guarda tu trabajo en:
```
training/exercises/markit/cro/
├── landing-page-audit.md
├── form-optimization.md
└── ab-test-plan.md
```

---

## Punto de Verificación

Antes de continuar, verifica que puedes:
- [ ] Identificar las 6 categorías de habilidades CRO
- [ ] Ejecutar una auditoría `/cro:page`
- [ ] Aplicar principios de psicología a CRO
- [ ] Crear una hipótesis de prueba A/B

---

## Siguiente Lección

Continúa con el Módulo 3, Lección 2: Optimización de Formularios e Inscripciones

```bash
/training-es:start-3-2