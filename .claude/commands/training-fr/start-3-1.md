---
description: /training-fr:start-3-1 - Fondamentaux du CRO
argument-hint:
---

# Module 3, Leçon 1 : Fondamentaux du CRO

## Bienvenue dans l'optimisation du taux de conversion

Dans ce module, vous maîtriserez les nouvelles compétences CRO (Optimisation du Taux de Conversion) ajoutées à AgentKits Marketing. Ces compétences vous aident à améliorer systématiquement les taux de conversion sur tous les actifs marketing.

## Objectifs d'apprentissage

À la fin de cette leçon, vous serez capable de :
1. Comprendre les 6 catégories de compétences CRO
2. Savoir quand utiliser chaque commande CRO
3. Appliquer les principes psychologiques aux conversions
4. Créer votre premier audit CRO

---

## La suite de compétences CRO

AgentKits Marketing comprend 7 compétences CRO spécialisées :

| Compétence | Utiliser pour | Commande |
|-------|---------|---------|
| `page-cro` | Pages de destination, pages d'accueil, tarification | `/cro:page` |
| `form-cro` | Capture de leads, formulaires de contact, de démo | `/cro:form` |
| `popup-cro` | Modales, superpositions, intention de sortie | `/cro:popup` |
| `signup-flow-cro` | Inscription, essais gratuits | `/cro:signup` |
| `onboarding-cro` | Activation post-inscription | `/cro:onboarding` |
| `paywall-upgrade-cro` | Paywalls in-app, mises à niveau | `/cro:paywall` |
| `ab-test-setup` | Conception d'expériences | `/test:ab-setup` |

---

## Cadre CRO

Chaque analyse CRO suit cette hiérarchie :

### 1. Proposition de valeur (Impact le plus élevé)
- Les visiteurs peuvent-ils comprendre ce que vous proposez en 5 secondes ?
- L'avantage est-il clair, pas seulement les fonctionnalités ?

### 2. Efficacité du titre
- Communique-t-il la valeur fondamentale ?
- Est-il spécifique et crédible ?

### 3. Optimisation du CTA
- Une action principale claire ?
- Au-dessus de la ligne de flottaison, visible, convaincante ?

### 4. Signaux de confiance
- Preuve sociale près des décisions ?
- Badges de sécurité visibles ?

### 5. Réduction des frictions
- Nombre minimal de champs de formulaire ?
- Prochaines étapes claires ?

---

## Exercice 1 : Auditer la page de destination d'AgentKits

Appliquons les principes CRO à la page de destination d'AgentKits.

### État actuel (Hypothétique)

**Titre :** "Logiciel de productivité d'équipe"
**CTA :** "En savoir plus"
**Formulaire :** 7 champs

### Votre tâche

Créez un audit CRO en utilisant la commande `/cro:page` :

```bash
/cro:page "Analyze AgentKits's landing page: Headline 'Team Productivity Software', CTA 'Learn More', 7-field form. Target: remote team managers."
```

### Résultat attendu

L'audit devrait identifier :
- Titre générique (pas spécifique ni axé sur les avantages)
- CTA faible ("En savoir plus" vs orienté action)
- Friction élevée (7 champs c'est trop)

---

## Exercice 2 : Appliquer la psychologie

La compétence `marketing-psychology` comprend plus de 70 modèles mentaux. Essayez :

```bash
/marketing:psychology "How can we use loss aversion and social proof to improve AgentKits's trial signup rate?"
```

### Modèles clés pour le CRO

| Modèle | Application |
|-------|-------------|
| Aversion à la perte | Formulation "Ne manquez pas" |
| Preuve sociale | "Rejoignez plus de 10 000 équipes" |
| Ancrage | Montrer d'abord le plan le plus cher |
| Rareté | Places ou temps limités |
| Réciprocité | Valeur gratuite avant la demande |

---

## Devoir pratique

Créez un plan complet d'amélioration CRO :

1. **Effectuez un audit de page :**
   ```bash
   /cro:page "AgentKits homepage audit"
   ```

2. **Optimisez le formulaire :**
   ```bash
   /cro:form "Reduce AgentKits's 7-field trial signup form"
   ```

3. **Concevez un test A/B :**
   ```bash
   /test:ab-setup "Test new headline vs current for AgentKits"
   ```

Enregistrez votre travail dans :
```
training/exercises/markit/cro/
├── landing-page-audit.md
├── form-optimization.md
└── ab-test-plan.md
```

---

## Point de contrôle

Avant de continuer, vérifiez que vous pouvez :
- [ ] Identifier les 6 catégories de compétences CRO
- [ ] Effectuer un audit `/cro:page`
- [ ] Appliquer les principes de psychologie au CRO
- [ ] Créer une hypothèse de test A/B

---

## Prochaine leçon

Continuez vers le Module 3, Leçon 2 : Optimisation des formulaires et de l'inscription

```bash
/training-fr:start-3-2