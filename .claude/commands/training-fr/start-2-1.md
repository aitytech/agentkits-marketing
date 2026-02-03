# /training-fr:start-2-1 - Rédiger un Brief de Campagne

## Normes de Langue et de Qualité

**CRITIQUE** : Répondez dans la même langue que l'utilisateur. Si c'est du vietnamien, répondez en vietnamien. Si c'est de l'espagnol, répondez en espagnol.

---

## Instructions pour Claude

Commencez le Module 2 - Applications Avancées. Cette leçon enseigne la création complète de briefs de campagne en utilisant les commandes de campagne.

### Aperçu de la Leçon

---

**Module 2.1 : Rédiger un Brief de Campagne**

Bienvenue dans le Module 2 ! Maintenant, nous appliquons tout ce que vous avez appris aux flux de travail marketing réels. Les briefs de campagne sont la fondation d'une exécution réussie.

**Durée :** ~45 minutes

---

### Étape 1 : Expliquer l'Approche Collaborative

> Claude est votre partenaire stratégique, pas un remplacement de votre expertise marketing. Vous apportez des insights, des connaissances du marché et une réflexion stratégique. Claude aide à articuler et structurer ces idées.

### Étape 2 : Recueillir l'Input Stratégique

Demandez à l'étudiant sa réflexion stratégique :

```
Créons un brief de campagne complet pour la campagne de croissance Q2 d'AgentKits.

Tout d'abord, dites-moi votre réflexion stratégique :
- Quel est l'objectif principal ? (par ex., 2000 inscriptions d'essai)
- Quel est le budget ?
- Quel est le calendrier ?
- Y a-t-il des canaux spécifiques sur lesquels se concentrer ?
- Quel est le message clé de ce trimestre ?
```

Attendez leur réponse, puis poursuivez.

### Étape 3 : Utiliser la Commande de Plan de Campagne

Utilisez la commande de planification de campagne :

```
/campaign:plan "AgentKits Q2 Growth - Goal: 2000 trial signups, Budget: $75K, Timeframe: 8 weeks, Channels: LinkedIn Ads, Content Marketing, Email Nurture, Key message: Team-wide focus time coordination"
```

Examinez le plan de campagne complet généré par l'agent `planner`.

### Étape 4 : Générer le Brief Créatif

Maintenant, utilisez la commande de brief créatif :

```
/campaign:brief "AgentKits Q2 Growth Campaign"
```

Expliquez ce que le brief créatif inclut :
- Proposition unique
- Insights sur l'audience cible
- Ton et manière
- Liste des livrables
- Impératifs créatifs

### Étape 5 : Obtenir des Retours Multi-Perspectives

Utilisez les agents évaluateurs :

```
Review the Q2 campaign plan from three perspectives:

1. `manager-maria` (Marketing Manager) - Is this executable by a marketing team?
2. `conversion-optimizer` - Will this campaign structure drive conversions?
3. `brand-voice-guardian` - Is the messaging on-brand?

Provide specific feedback and recommendations.
```

### Étape 6 : Créer le Calendrier de Contenu

Utilisez la commande de calendrier :

```
/campaign:calendar "8 weeks - AgentKits Q2 Growth - content marketing, social media, email nurture focused on team productivity"
```

### Étape 7 : Créer les Documents Annexes

Générez des actifs de campagne supplémentaires :

**Modèle de Scoring des Leads :**
```
/leads:score "B2B SaaS - technology companies - team productivity"
```

**Séquence de Bienvenue :**
```
/sequence:welcome "AgentKits" "trial signups from Q2 campaign"
```

**Séquence de Nurturing :**
```
/sequence:nurture "AgentKits" "engaged leads who haven't converted"
```

### Étape 8 : Préparation Concurrentielle

Préparez les matériaux concurrentiels :

```
/sales:battlecard "RescueTime - main competitor for productivity tools"
```

```
/competitor:deep "Freedom app - focus and productivity blocking"
```

### Étape 9 : Créer le Plan de Mesure

Configurez les analyses :

```
/analytics:funnel "trial signup funnel - awareness to trial to paid"
```

### Étape 10 : Enregistrer comme Modèle

Expliquez que ce flux de travail peut être répété pour n'importe quelle campagne :

```
Campaign Brief Workflow:
1. /campaign:plan - Strategic plan
2. /campaign:brief - Creative brief
3. /campaign:calendar - Content calendar
4. /leads:score - Lead qualification
5. /sequence:welcome - New lead nurture
6. /sequence:nurture - Ongoing nurture
7. /sales:battlecard - Competitive prep
8. /analytics:funnel - Measurement setup
```

### Quelle est la Suite

Dites-leur :
- Ils ont créé un brief de campagne professionnel en moins d'une heure
- Normalement, cela prend des jours avec plusieurs réunions
- **Suivant :** `/training-fr:start-2-2` - Développer une Stratégie de Contenu
- Ils vont créer des plans de contenu complets

## Points d'Enseignement Clés
- Les briefs de campagne sont collaboratifs
- Utilisez `/campaign:plan` pour la planification stratégique
- Utilisez `/campaign:brief` pour la direction créative
- Utilisez `/campaign:calendar` pour la planification du contenu
- Utilisez les agents évaluateurs pour les retours
- Créez des actifs de support (scoring des leads, séquences, battlecards)

---

CRITICAL OUTPUT RULES:
- Output ONLY the raw translated markdown content
- Do NOT wrap output in ```markdown code fences
- Do NOT add any preamble, explanation, or commentary
- Start directly with the translated content
- The output will be saved directly to a .md file