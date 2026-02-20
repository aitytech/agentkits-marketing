# /training-fr:start-1-6 - Mémoire de Projet (CLAUDE.md)

## Normes de Langue et de Qualité

**CRITIQUE** : Répondez dans la même langue que l'utilisateur. Si vietnamien, répondez en vietnamien. Si espagnol, répondez en espagnol.

---

## Instructions pour Claude

Enseignez aux étudiants le fichier CLAUDE.md et comment maintenir un contexte de projet persistant.

### Aperçu de la Leçon

---

**Module 1.6 : Mémoire de Projet**

CLAUDE.md, c'est comme donner à Claude un document d'information persistant. Chaque fois que vous travaillez sur ce projet, Claude lit d'abord ce fichier et applique ces directives.

**Durée :** ~20 minutes

---

### Étape 1 : Afficher le CLAUDE.md Actuel

Lisez le fichier CLAUDE.md du projet :

```
Read the CLAUDE.md file in this project
```

Parcourez chaque section :
- Rôle et Responsabilités
- Flux de travail (Marketing, Ventes, CRM)
- Agents Marketing
- Catalogue de Compétences
- Catégories de Commandes
- Gestion de la Documentation

### Étape 2 : Expliquer Comment Ça Fonctionne

Lorsque CLAUDE.md existe, Claude automatiquement :
- Connaît quels agents sont disponibles
- Comprend la structure du flux de travail
- Référence les commandes appropriées
- Suit les règles marketing
- Utilise les bonnes compétences

Vous n'avez pas besoin de le rappeler à Claude à chaque fois - c'est automatique !

### Étape 3 : Sections Clés de CLAUDE.md

Expliquez les sections critiques :

**Flux de travail :**
```markdown
### Core Workflows
- **Marketing:** `./.claude/workflows/primary-workflow.md`
- **Sales:** `./.claude/workflows/sales-workflow.md`
- **CRM:** `./.claude/workflows/crm-workflow.md`
```

**Cartographie des Agents :**
```markdown
### Core Marketing Agents
- `attraction-specialist` - TOFU (SEO, landing pages)
- `lead-qualifier` - Intent detection, scoring
- `email-wizard` - Sequences, automation
...
```

**Catégories de Commandes :**
```markdown
### Campaign Management
- `/campaign:plan`, `/campaign:brief`, `/campaign:analyze`

### Content Creation
- `/content:blog`, `/content:social`, `/content:email`
...
```

### Étape 4 : Tester la Conscience du Contexte

Sans mentionner les directives de marque, demandez :

```
Write a short LinkedIn post about remote team productivity
```

Soulignez comment la sortie correspond automatiquement à :
- La voix de marque des directives
- Le langage de la persona cible
- Le cadre de messagerie clé

### Étape 5 : Comprendre les Références de Flux de Travail

Montrez comment les flux de travail sont référencés :

```
Read .claude/workflows/primary-workflow.md
```

Expliquez :
- Les étapes du pipeline marketing
- Les responsabilités des agents à chaque étape
- Les points de contrôle qualité et les jalons

### Étape 6 : Les Règles Marketing

Montrez les règles marketing :

```
Read .claude/workflows/marketing-rules.md
```

Expliquez les règles clés :
- Efficacité des tokens
- Support multilingue
- Normes de qualité
- Activation des compétences

### Étape 7 : Avantages du Contexte de Projet

Résumez les avantages :
- Voix de marque cohérente automatiquement
- Sélection correcte des agents
- Utilisation appropriée des commandes
- Conformité au flux de travail
- Application des normes de qualité

### Étape 8 : Conseils de Maintenance

Expliquez la maintenance continue :
- Mettre à jour lors du lancement de nouvelles campagnes
- Ajouter les enseignements du contenu réussi
- Référencer la nouvelle documentation
- Maintenir la liste des agents à jour

### Et Ensuite

Dites-leur :
- CLAUDE.md assure la cohérence sans répétition
- **Module 1 presque terminé !**
- **Suivant :** `/training-fr:start-1-7` - Navigation et Recherche
- Compétences finales avant les applications avancées

## Points d'Enseignement Clés
- CLAUDE.md donne à Claude un contexte persistant
- Inclut les flux de travail, agents, commandes, règles
- Claude applique automatiquement à tout le travail
- Les flux de travail définissent les processus marketing
- Les règles marketing garantissent les normes de qualité

---

RÈGLES DE SORTIE CRITIQUES :
- Sortez UNIQUEMENT le contenu markdown traduit brut
- NE PAS envelopper la sortie dans des blocs de code ```markdown
- NE PAS ajouter de préambule, d'explication ou de commentaire
- Commencez directement avec le contenu traduit
- La sortie sera enregistrée directement dans un fichier .md