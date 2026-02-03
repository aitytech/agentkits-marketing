# /training-fr:start-1-4 - Utiliser les Agents pour le Marketing

## Normes de Langue et de Qualité

**CRITIQUE** : Répondez dans la même langue que l'utilisateur. Si vietnamien, répondez en vietnamien. Si espagnol, répondez en espagnol.

---

## Instructions pour Claude

Enseignez le concept d'agents - des membres d'équipe IA spécialisés qui gèrent différentes fonctions marketing.

### Aperçu de la Leçon

---

**Module 1.4 : Utiliser les Agents pour le Marketing**

Le kit marketing dispose de 18 agents spécialisés. Considérez-les comme des membres d'équipe IA qui peuvent travailler sur des tâches marketing spécifiques avec expertise.

**Durée :** ~35 minutes

---

### Étape 1 : Expliquer le Système d'Agents

Le kit marketing possède des agents organisés par fonction :

**Agents Marketing Principaux (6) :**
| Agent | Focus | Cas d'Usage |
|-------|-------|-----------|
| `attraction-specialist` | TOFU, génération de leads | SEO, pages d'atterrissage, renseignement concurrent |
| `lead-qualifier` | Détection d'intention | Scoring de leads, analyse comportementale |
| `email-wizard` | Marketing par email | Séquences, automatisation, optimisation |
| `sales-enabler` | Support aux ventes | Présentations, études de cas, fiches de combat |
| `continuity-specialist` | Rétention | Détection du churn, ré-engagement |
| `upsell-maximizer` | Expansion des revenus | Vente croisée, montée en gamme, adoption de fonctionnalités |

**Agents de Support (6) :**
| Agent | Focus | Cas d'Usage |
|-------|-------|-----------|
| `researcher` | Intelligence de marché | Recherche, analyse concurrentielle |
| `brainstormer` | Idéation créative | Concepts de campagne, angles de message |
| `planner` | Planification stratégique | Plans de campagne, calendriers de contenu |
| `project-manager` | Coordination | Suivi de statut, supervision de campagne |
| `copywriter` | Création de contenu | Rédaction, messages, créatif |
| `docs-manager` | Documentation | Guidelines de marque, guides de style |

**Agents Réviseurs (6) :**
| Agent | Perspective | Révise Pour |
|-------|-------------|-------------|
| `brand-voice-guardian` | Cohérence de marque | Voix, ton, message |
| `conversion-optimizer` | Expert CRO | Conversion, persuasion |
| `seo-specialist` | Optimisation pour les moteurs de recherche | Mots-clés, SEO technique |
| `manager-maria` | Responsable marketing (38 ans, B2B) | Stratégie, adéquation d'équipe |
| `solo-steve` | Solopreneur (32 ans) | Temps, budget, DIY |
| `startup-sam` | Fondateur de startup (28 ans) | Croissance, viralité, rapidité |

### Étape 2 : Exercice d'Agent - Revue Multi-Perspective

Créez du contenu et révisez-le depuis plusieurs perspectives :

```
Review the AgentKits campaign brief from three agent perspectives:

1. As the `brand-voice-guardian` - evaluate brand consistency and messaging
2. As the `conversion-optimizer` - assess CTAs, persuasion, and conversion potential
3. As `manager-maria` - would this work for a B2B marketing team to execute?

For each perspective, provide:
- What's working well
- Areas for improvement
- Specific recommendations
```

Expliquez ce qui vient de se passer - trois revues spécialisées en une seule commande.

### Étape 3 : Utiliser la Qualification de Leads

Démontrez l'agent lead-qualifier via les commandes :

```
/leads:score "B2B SaaS company - technology industry"
```

```
/leads:qualify "AgentKits productivity tool"
```

Montrez comment lead-qualifier crée :
- Des critères de scoring démographique
- Des signaux de scoring comportemental
- Des seuils MQL/SQL

### Étape 4 : Utiliser Email Wizard

Démontrez l'agent email-wizard :

```
/sequence:welcome "AgentKits" "trial users"
```

```
/sequence:nurture "AgentKits" "leads who downloaded our guide"
```

### Étape 5 : Utiliser Sales Enabler

Démontrez l'agent sales-enabler :

```
/sales:pitch "enterprise company considering AgentKits" "team coordination"
```

```
/sales:battlecard "RescueTime"
```

### Étape 6 : Scénario Réel - Réponse Rapide

```
SCENARIO: A competitor just announced a "team focus" feature. Use agents to respond:

1. Use `researcher` to analyze their announcement
2. Use `brainstormer` to develop counter-positioning
3. Use `copywriter` to create response content
4. Use `email-wizard` to draft customer communication
```

### Étape 7 : Meilleures Pratiques d'Agent

Partagez ces conseils :
- Soyez précis avec les objectifs de tâche
- Référencez les guidelines de marque et les personas
- Définissez clairement les résultats (format, longueur)
- Utilisez des agents spécialisés pour des tâches spécialisées
- Combinez les agents pour des projets complexes

### Prochaines Étapes

Dites-leur :
- Ils comprennent maintenant le système de 18 agents
- **Suivant :** `/training-fr:start-1-5` - Sous-Agents Marketing Personnalisés
- Ils apprendront sur les réviseurs persona et comment obtenir des retours ciblés

## Points d'Enseignement Clés
- 18 agents organisés : Principaux (6), Support (6), Réviseurs (6)
- Les agents principaux correspondent aux étapes de l'entonnoir
- Les agents réviseurs fournissent des retours multi-perspectives
- Les commandes invoquent des capacités d'agent spécifiques
- Combinez les agents pour des projets complexes

---

RÈGLES DE SORTIE CRITIQUES :
- Sortie UNIQUEMENT le contenu markdown traduit brut
- NE PAS envelopper la sortie dans des balises de code ```markdown
- NE PAS ajouter de préambule, d'explication ou de commentaire
- Commencer directement avec le contenu traduit
- La sortie sera sauvegardée directement dans un fichier .md