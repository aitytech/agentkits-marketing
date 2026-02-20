# /training-fr:start-2-2 - Développer une Stratégie de Contenu

## Normes de Langue et de Qualité

**CRITIQUE** : Répondre dans la même langue que l'utilisateur. Si vietnamien, répondre en vietnamien. Si espagnol, répondre en espagnol.

---

## Instructions pour Claude

Enseigner le développement complet d'une stratégie de contenu : recherche, planification, calendriers et mesure.

### Aperçu de la Leçon

---

**Module 2.2 : Développer une Stratégie de Contenu**

Une stratégie de contenu transforme la création de contenu aléatoire en un moteur de croissance systématique. Construisons-en une pour AgentKits.

**Durée :** ~40 minutes

---

### Étape 1 : Base de Recherche

Commencez par une recherche de marché et d'audience :

```
/research:market "B2B team productivity software - remote work tools market"
```

```
/research:persona "Remote team managers at technology companies - 50-500 employees"
```

```
/research:trend "Remote work productivity - team coordination - async work"
```

### Étape 2 : Recherche de Mots-Clés SEO

Utilisez les commandes SEO pour établir une base de mots-clés :

```
/seo:keywords "remote team productivity"
```

```
/seo:keywords "team coordination software"
```

```
/seo:keywords "deep work for teams"
```

Regroupez les mots-clés en clusters thématiques :
- Cluster 1 : Productivité des équipes distantes
- Cluster 2 : Temps de concentration d'équipe
- Cluster 3 : Coordination sans réunions

### Étape 3 : Analyse de Contenu Concurrentiel

Analysez le contenu des concurrents :

```
/seo:competitor "rescuetime.com"
```

Identifiez :
- Les sujets qu'ils couvrent
- Les lacunes de contenu que nous pouvons combler
- Les mots-clés pour lesquels ils se classent

### Étape 4 : Créer un Calendrier de Contenu

Utilisez le calendrier de campagne pour la planification de contenu :

```
/campaign:calendar "12 weeks - AgentKits content strategy - focus on SEO, thought leadership, lead generation - topics: remote productivity, team coordination, deep work, meeting reduction"
```

### Étape 5 : Définir les Types de Contenu

Planifiez le contenu par étape de l'entonnoir :

**TOFU (Sensibilisation) :**
- Articles de blog (axés sur le SEO)
- Contenu pour les réseaux sociaux
- Leadership éclairé

**MOFU (Considération) :**
- Guides comparatifs
- Contenu explicatif
- Études de cas

**BOFU (Décision) :**
- Démos produit
- Calculateurs de ROI
- Témoignages clients

### Étape 6 : Créer une Stratégie de Contenu Pilier

Planifiez une stratégie de page pilier :

```
/content:blog "The Complete Guide to Remote Team Productivity: How to Coordinate Focus Time Across Time Zones" "remote team productivity"
```

Contenu en cluster (lié au pilier) :
1. Comment planifier le temps de concentration d'équipe
2. Réduire les réunions sans perdre l'alignement
3. Meilleures pratiques de communication asynchrone
4. Travail en profondeur dans les équipes distantes
5. Suivi de la productivité pour les équipes

### Étape 7 : Flux de Production de Contenu

Utilisez les commandes de contenu pour chaque élément :

**Production d'Article de Blog :**
```
1. /seo:keywords "topic" - Rechercher les mots-clés
2. /content:blog "title" "keyword" - Créer l'article
3. /seo:optimize "post" "keyword" - Optimiser
4. Réviser avec l'agent seo-specialist
5. Réviser avec l'agent brand-voice-guardian
```

**Production de Contenu Social :**
```
1. /content:social "topic" "linkedin" - Publication LinkedIn
2. /content:social "topic" "twitter" - Fil Twitter
3. Réviser avec l'agent conversion-optimizer
```

### Étape 8 : Intégration Email

Créez des séquences d'emails pour entretenir les consommateurs de contenu :

```
/sequence:nurture "AgentKits" "blog readers who downloaded guide"
```

### Étape 9 : Plan de Distribution de Contenu

Utilisez les commandes sociales pour la distribution :

```
/social:schedule "linkedin,twitter" "4 weeks - AgentKits content distribution"
```

### Étape 10 : Cadre de Mesure

Configurez l'analyse de contenu :

```
/analytics:report "content performance" "organic traffic, engagement, conversions"
```

Indicateurs clés à suivre :
- Trafic organique par élément de contenu
- Temps passé sur la page
- Taux de conversion par contenu
- Qualité des leads issus du contenu

### Suite

Dites-leur :
- Ils ont une stratégie de contenu complète
- De la publication aléatoire à la croissance systématique
- **Suivant :** `/training-fr:start-2-3` - Générer du Texte Marketing
- Augmenter la production de textes tout en maintenant la qualité

## Points d'Enseignement Clés
- La stratégie transforme le contenu d'aléatoire à systématique
- Les commandes `/research:*` construisent les fondations
- `/seo:keywords` identifie les opportunités
- Pilier + cluster = puissance SEO
- La production de contenu suit un flux reproductible
- La mesure garantit la responsabilité

---

RÈGLES DE SORTIE CRITIQUES :
- Sortir UNIQUEMENT le contenu markdown brut traduit
- NE PAS envelopper la sortie dans des balises de code ```markdown
- NE PAS ajouter de préambule, d'explication ou de commentaire
- Commencer directement par le contenu traduit
- La sortie sera enregistrée directement dans un fichier .md