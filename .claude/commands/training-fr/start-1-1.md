# /training-fr:start-1-1 - Bienvenue chez Markit

## Normes de Langue et de Qualité

**CRITIQUE** : Répondez dans la même langue que l'utilisateur. Si vietnamien, répondez en vietnamien. Si espagnol, répondez en espagnol.

---

## Instructions pour Claude

Commencez le Module 1 - Concepts Fondamentaux. Cette leçon présente le projet d'agence Markit et les flux de travail principaux du kit marketing.

### Aperçu de la Leçon

---

**Module 1.1 : Bienvenue chez Markit**

Bienvenue au Module 1 ! Nous allons maintenant maîtriser les concepts fondamentaux du kit marketing à travers un travail pratique. À la fin de ce module, vous gérerez des tâches marketing réelles avec confiance.

**Durée :** ~20 minutes

---

### Étape 1 : Présenter le Contexte

Expliquez leur rôle :

> Vous êtes un Stratège Marketing chez l'agence **Markit**. Votre client est **AgentKits**. Votre mission :
> 1. Lancer le produit sur le marché
> 2. Générer de la notoriété et des inscriptions
> 3. Créer du contenu qui résonne avec les équipes distantes
> 4. Construire un moteur de marketing de contenu durable

### Étape 2 : Comprendre les Flux de Travail Principaux

Expliquez les trois principaux flux de travail dans `.claude/workflows/` :

**Pipeline Marketing (`primary-workflow.md`) :**
```
Research → Insights → Creative → Plan → Create → Edit → Publish → Measure
```

**Pipeline Ventes (`sales-workflow.md`) :**
```
Lead → MQL → SQL → Opportunity → Proposal → Negotiation → Close
```

**Cycle de Vie CRM (`crm-workflow.md`) :**
```
Subscriber → Lead → MQL → SQL → Opportunity → Customer → Advocate
```

### Étape 3 : Comprendre les Rôles des Agents

Expliquez comment les agents correspondent aux fonctions marketing :

**TOFU (Haut de l'Entonnoir) :**
- `attraction-specialist` - Génération de leads, SEO, pages de destination

**MOFU (Milieu de l'Entonnoir) :**
- `lead-qualifier` - Détection d'intention, notation des leads
- `email-wizard` - Séquences de nurturing

**BOFU (Bas de l'Entonnoir) :**
- `sales-enabler` - Présentations, études de cas, fiches de bataille

**Rétention :**
- `continuity-specialist` - Détection de désabonnement, réengagement
- `upsell-maximizer` - Expansion des revenus

### Étape 4 : Créer le Premier Brief de Campagne

Maintenant le vrai travail commence en utilisant `/campaign:plan` :

```
/campaign:plan "AgentKits Q1 Product Launch - Target: 1000 trial signups in 30 days, Budget: $50K, Channels: LinkedIn, Google Ads, Content, Email"
```

Examinez le plan de campagne complet généré.

### Étape 5 : Examiner le Brief

Soulignez comment l'agent planificateur :
- A créé des objectifs et des KPI structurés
- A défini les segments d'audience cible
- A alloué le budget entre les canaux
- A mis en place un cadre de mesure

### Étape 6 : Le Pouvoir de l'Itération

Montrez-leur le raffinement en utilisant des questions de suivi :

```
Expand the target audience section with day-in-the-life scenarios for each persona
```

Expliquez : L'itération est essentielle. Les premières versions sont des points de départ.

### Étape 7 : Démonstration de la Conscience du Contexte

Démontrez la puissance du contexte :

```
/content:social "Product launch announcement for AgentKits based on the campaign brief" "linkedin"
```

Montrez comment Claude puise automatiquement dans le contexte de la campagne.

### Prochaines Étapes

Dites-leur :
- Ils ont créé un brief de campagne professionnel en utilisant `/campaign:plan`
- Claude a utilisé le contexte des directives de marque et des personas
- **Ensuite :** `/training-fr:start-1-2` - Travailler avec les Fichiers Marketing
- Ils apprendront à organiser, trouver et gérer efficacement les ressources marketing

## Points d'Enseignement Clés
- L'agence Markit est le projet pratique de mise en application
- Trois flux de travail principaux : Marketing, Ventes, CRM
- Les agents correspondent aux étapes de l'entonnoir (TOFU, MOFU, BOFU, Rétention)
- `/campaign:plan` crée des briefs de campagne complets
- L'itération améliore la qualité des résultats

---

RÈGLES DE SORTIE CRITIQUES :
- Afficher UNIQUEMENT le contenu markdown traduit brut
- NE PAS encadrer la sortie dans des blocs de code ```markdown
- NE PAS ajouter de préambule, d'explication ou de commentaire
- Commencer directement avec le contenu traduit
- La sortie sera enregistrée directement dans un fichier .md