---
description: /training-fr:start-3-3 - CRO des popups et de l'onboarding
argument-hint:
---

# Module 3, Leçon 3 : CRO des popups et de l'onboarding

## Convertir les visiteurs et activer les utilisateurs

Cette leçon couvre deux points de conversion critiques : capturer les visiteurs avec des popups et activer les nouveaux inscrits grâce à l'onboarding.

## Objectifs d'apprentissage

À la fin de cette leçon, vous serez capable de :
1. Concevoir des popups à forte conversion sans agacer les utilisateurs
2. Optimiser les flux d'onboarding post-inscription
3. Identifier et accélérer le « moment Aha »
4. Créer des écrans de paywall et de mise à niveau

---

## CRO des popups

### Quand les popups fonctionnent

| Type | Déclencheur | Idéal pour |
|------|---------|----------|
| Intention de sortie | La souris quitte la fenêtre | Capture de leads, sauver les abandons |
| Temporisé | 30-60 secondes sur la page | Visiteurs engagés |
| Déclenchement au défilement | 50-70% de profondeur de défilement | Engagement avec le contenu |
| Déclenchement au clic | Action de l'utilisateur | CTA spécifiques |

### Quand les popups échouent

- Apparition immédiate au chargement de la page
- Pas de proposition de valeur claire
- Difficile à fermer
- Même popup à chaque visite

---

## Exercice de conception de popup

Utilisez `/cro:popup` pour concevoir des popups efficaces :

```bash
/cro:popup "Design exit-intent popup for AgentKits blog. Goal: capture emails for 'Remote Team Productivity Guide' lead magnet."
```

### Bons éléments de popup

1. **Valeur claire :** Ce qu'ils obtiennent
2. **Champs minimaux :** Email uniquement
3. **Fermeture facile :** X visible
4. **Adapté mobile :** CTA accessible au pouce
5. **Limite de fréquence :** Une fois par session

---

## CRO de l'onboarding

### L'équation d'activation

**Moment Aha** = Première fois que l'utilisateur expérimente la valeur centrale

Pour AgentKits : « Lorsqu'un membre de l'équipe voit le planning de concentration de son équipe et bloque du temps sans distraction »

### Modèles d'onboarding

| Modèle | Idéal pour |
|---------|----------|
| Assistant de configuration | Produits complexes nécessitant une configuration |
| Liste de contrôle | Applications riches en fonctionnalités |
| Visite interactive | Produits axés sur l'interface |
| Galerie de modèles | Outils créatifs |
| Projet exemple | Outils basés sur des projets |

---

## Exercice d'onboarding

Utilisez `/cro:onboarding` pour optimiser l'activation d'AgentKits :

```bash
/cro:onboarding "Design onboarding for AgentKits. Aha moment: seeing team focus schedule. Current activation: 15% of trials. Goal: 40%."
```

### Questions clés

1. Quelle est la configuration minimale pour obtenir de la valeur ?
2. Pouvez-vous montrer la valeur avant la configuration ?
3. Quelle est l'action n°1 qui prédit la conversion ?
4. À quelle vitesse les utilisateurs peuvent-ils atteindre le moment Aha ?

---

## CRO du paywall et de la mise à niveau

Pour les produits freemium et en période d'essai, les écrans de mise à niveau sont critiques.

### Déclencheurs de paywall

| Déclencheur | Contexte |
|---------|---------|
| Barrière de fonctionnalité | L'utilisateur essaie une fonctionnalité premium |
| Limite d'utilisation | Limite du niveau gratuit atteinte |
| Expiration de l'essai | Fin de l'essai basé sur le temps |
| Invitation à la mise à niveau | Après un moment de valeur |

### Exercice de paywall

```bash
/cro:paywall "Design upgrade screen for AgentKits. Trigger: user hits 5-user limit on free tier. Goal: convert to Team plan ($12/user)."
```

---

## Exercice pratique

Complétez ces exercices pour AgentKits :

### 1. Popup d'intention de sortie
```bash
/cro:popup "Exit intent for AgentKits pricing page - capture leads who leave without trial"
```
Enregistrer dans : `training/exercises/markit/cro/exit-popup.md`

### 2. Flux d'onboarding
```bash
/cro:onboarding "5-step onboarding to reach Aha moment in under 3 minutes"
```
Enregistrer dans : `training/exercises/markit/cro/onboarding-flow.md`

### 3. Écran de mise à niveau
```bash
/cro:paywall "Upgrade screen when free user invites 6th team member"
```
Enregistrer dans : `training/exercises/markit/cro/upgrade-screen.md`

---

## Entonnoir CRO complet

Vous pouvez maintenant optimiser l'entonnoir de conversion complet :

```
Visiteur → CRO de page → CRO de formulaire → CRO d'inscription
     ↓
  CRO de popup (capturer les abandons)
     ↓
Nouvel utilisateur → CRO d'onboarding → Activation
     ↓
Utilisateur gratuit → CRO de paywall → Client payant
```

Chaque compétence gère une étape spécifique.

---

## Point de contrôle

Avant de terminer le Module 3, vérifiez que vous pouvez :
- [ ] Concevoir des popups efficaces avec des déclencheurs appropriés
- [ ] Créer des flux d'onboarding qui accélèrent le moment Aha
- [ ] Construire des écrans de mise à niveau pour la conversion freemium
- [ ] Cartographier l'entonnoir CRO complet

---

## Module 3 terminé !

Vous avez maîtrisé les compétences CRO. Vos livrables :

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

## Suivant : Compétences avancées

Continuez vers le Module 4 : Stratégies de croissance et de lancement

```bash
/training-fr:start-4-1
```

Ou explorez d'autres nouvelles compétences :
- `/marketing:psychology` - Plus de 70 modèles mentaux
- `/marketing:ideas` - 140 idées marketing
- `/growth:launch` - Stratégie de lancement
- `/pricing:strategy` - Conception de la tarification