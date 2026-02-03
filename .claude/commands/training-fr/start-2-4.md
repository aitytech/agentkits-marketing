# /training-fr:start-2-4 - Analyser les données de campagne

## Normes de langue et de qualité

**CRITIQUE** : Répondez dans la même langue que celle utilisée par l'utilisateur. Si c'est le vietnamien, répondez en vietnamien. Si c'est l'espagnol, répondez en espagnol.

---

## Instructions pour Claude

Enseignez l'analyse de données, l'extraction d'informations et les rapports pour dirigeants à l'aide des commandes d'analyse.

### Aperçu de la leçon

---

**Module 2.4 : Analyser les données de campagne**

L'analyse de données prend souvent beaucoup de temps. Maîtrisons la transformation des données en informations exploitables et en rapports convaincants.

**Durée :** ~35 minutes

---

### Étape 1 : Analyse du ROI

Utilisez les commandes d'analyse :

```
/analytics:roi "Q1 campaign - $50K spend across LinkedIn, Google, Email"
```

Examinez le calcul du ROI :
- Dépenses totales par canal
- Revenus attribués
- ROAS par canal
- Coût par acquisition

### Étape 2 : Analyse de l'entonnoir

Analysez l'entonnoir de conversion :

```
/analytics:funnel "trial signup - visitor to trial to paid conversion"
```

Examinez les métriques de l'entonnoir :
- Trafic par source
- Taux de conversion à chaque étape
- Points de décrochage
- Opportunités d'optimisation

### Étape 3 : Rapports de performance

Générez des rapports de performance :

**Rapport hebdomadaire :**
```
/report:weekly "AgentKits" "current week"
```

**Rapport mensuel :**
```
/report:monthly "AgentKits" "current month"
```

### Étape 4 : Performance par canal

Analysez par canal :

```
/analytics:report "channel performance" "LinkedIn, Google, Email, Organic"
```

Créez une comparaison des canaux :
- Contribution au trafic
- Qualité des prospects
- Taux de conversion
- Efficacité des coûts

### Étape 5 : Performance du contenu

Analysez l'efficacité du contenu :

```
/analytics:report "content performance" "blog posts, landing pages, email sequences"
```

Métriques clés :
- Trafic par élément de contenu
- Engagement (temps, défilement, partages)
- Taux de conversion
- Qualité des prospects

### Étape 6 : Analyse de la qualité des prospects

Utilisez la notation des prospects pour analyser :

```
/crm:score "analyze lead quality by source and campaign"
```

Examinez :
- Taux de MQL par source
- Conversion SQL par campagne
- Tendances du score moyen des prospects

### Étape 7 : Résumé pour la direction

Créez un résumé prêt pour la direction :

```
Create an executive summary of Q1 marketing performance:

STRUCTURE:
1. Headline metrics (vs targets)
2. Top 3 wins with data
3. Top 3 challenges with impact
4. Channel performance snapshot (table)
5. Key learnings (3 insights)
6. Q2 recommendations (prioritized)
7. Budget request with justification

Keep it to ONE PAGE maximum.
```

### Étape 8 : Cadre Données-vers-Action

Enseignez le cadre d'analyse :

```
For each finding, document:

1. OBSERVATION: What does the data show?
2. INSIGHT: Why is this happening?
3. IMPLICATION: What does it mean?
4. RECOMMENDATION: What should we do?
5. EXPECTED IMPACT: What will change?
```

### Étape 9 : Listes de contrôle opérationnelles

Utilisez les listes de contrôle d'analyse :

```
/checklist:analytics-monthly "current month" "AgentKits"
```

Examinez les tâches d'analyse mensuelles :
- Vérifications de la qualité des données
- Vérification des plateformes
- Exactitude des rapports
- Validation de l'attribution

### Étape 10 : Modèles de rapports

Expliquez les rapports réutilisables :

```
Weekly Report Workflow:
1. /analytics:roi "campaign" - Calculate ROI
2. /analytics:funnel "funnel" - Analyze funnel
3. /report:weekly "client" "week" - Generate report

Monthly Report Workflow:
1. /analytics:report "all channels" - Full analysis
2. /crm:score "lead quality" - Lead analysis
3. /report:monthly "client" "month" - Generate report
```

### Et maintenant ?

Dites-leur :
- Ils peuvent maintenant transformer les données en décisions
- Des rapports que les dirigeants lisent réellement
- **Suivant :** `/training-fr:start-2-5` - Analyse concurrentielle
- Recherchez les concurrents et trouvez des avantages

## Points d'enseignement clés
- Les commandes `/analytics:*` analysent les performances
- Les commandes `/report:*` génèrent des rapports
- L'analyse du ROI et de l'entonnoir sont fondamentales
- Les résumés pour la direction doivent être concis
- Le cadre données-vers-action garantit la responsabilité

---

RÈGLES DE SORTIE CRITIQUES :
- Affichez UNIQUEMENT le contenu markdown traduit brut
- NE PAS encadrer la sortie avec des balises de code ```markdown
- NE PAS ajouter de préambule, d'explication ou de commentaire
- Commencez directement avec le contenu traduit
- La sortie sera enregistrée directement dans un fichier .md