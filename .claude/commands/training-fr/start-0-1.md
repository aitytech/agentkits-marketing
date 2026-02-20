# /training-fr:start-0-1 - Installation et Configuration

## Normes de Langue et de Qualité

**CRITIQUE** : Répondez dans la même langue que celle utilisée par l'utilisateur. Si vietnamien, répondez en vietnamien. Si espagnol, répondez en espagnol.

---

## Instructions pour Claude

Guidez l'étudiant pour vérifier son installation de Claude Code et la configuration du kit marketing.

### Aperçu de la Leçon

Dites quelque chose comme :

---

**Module 0.1 : Installation et Configuration**

Avant de plonger dans les flux de travail marketing, assurons-nous que tout est correctement configuré.

---

### Étape 1 : Vérifier Claude Code

Demandez-leur de confirmer :
- Ils exécutent ceci dans Claude Code (et non dans le chat web)
- Ils ont un abonnement Claude Pro ou Max

S'ils ne sont pas sûrs, expliquez :
- Claude Code est la version terminal/CLI
- Il peut lire, écrire et modifier des fichiers directement
- Il est différent du chat web claude.ai

### Étape 2 : Vérifier les Fichiers du Kit Marketing

Exécutez ces vérifications AVEC l'étudiant (exécutez-les réellement) :

```
Show me the contents of this directory
```

Ils devraient voir :
- Dossier `.claude/` avec agents, commandes, compétences, workflows
- Dossier `docs/` avec documentation
- Fichier `CLAUDE.md` (la mémoire du projet)
- Fichier `README.md`

### Étape 3 : Explorer la Structure du Système

Montrez-leur la structure du kit marketing :

```
List all folders in .claude/
```

Expliquez chaque composant :
- `agents/` - 18 agents marketing spécialisés
- `commands/` - 76 commandes slash organisées par fonction
- `skills/` - Connaissances du domaine marketing
- `workflows/` - Flux de travail principaux pour le marketing, les ventes et le CRM

### Étape 4 : Explorer les Commandes Disponibles

Montrez-leur les catégories de commandes :

```
List all folders in .claude/commands/
```

Expliquez les groupes de commandes clés :
- `campaign/` - `/campaign:plan`, `/campaign:brief`, `/campaign:analyze`
- `content/` - `/content:blog`, `/content:social`, `/content:email`, `/content:landing`
- `seo/` - `/seo:keywords`, `/seo:audit`, `/seo:optimize`
- `analytics/` - `/analytics:roi`, `/analytics:funnel`, `/analytics:report`
- `sales/` - `/sales:pitch`, `/sales:outreach`, `/sales:battlecard`

### Étape 5 : Tester Votre Première Commande

Demandez-leur d'essayer une vraie commande :

```
/brainstorm "What are the best marketing channels for a B2B SaaS product?"
```

Célébrez leur première exécution de commande !

### Étape 6 : Consulter la Documentation

Montrez-leur les documents clés :

```
Read docs/usage-guide.md (first 50 lines)
```

Expliquez :
- `docs/usage-guide.md` - Référence complète du système
- `docs/brand-guidelines.md` - Modèle de normes de marque
- `docs/content-style-guide.md` - Normes de rédaction
- `docs/campaign-playbooks.md` - Modèles de campagne
- `docs/channel-strategies.md` - Tactiques par plateforme
- `docs/analytics-setup.md` - Configuration du suivi

### Et Ensuite

Dites-leur :
- **Prochaine leçon :** `/training-fr:start-0-2` - Votre Première Tâche Marketing
- Ils viennent de vérifier leur configuration et d'exécuter leur première commande !
- C'est exactement ainsi que fonctionne le reste du cours

## Points Clés d'Enseignement
- Claude Code fonctionne directement avec les fichiers
- Le kit marketing comprend 18 agents, 76 commandes et une documentation complète
- Chaque leçon implique une exécution pratique de commandes
- Vérifiez que les choses ont réellement fonctionné (relisez les fichiers)

---

RÈGLES CRITIQUES DE SORTIE :
- Sortez UNIQUEMENT le contenu markdown brut traduit
- NE PAS envelopper la sortie dans des blocs de code ```markdown
- NE PAS ajouter de préambule, d'explication ou de commentaire
- Commencez directement par le contenu traduit
- La sortie sera enregistrée directement dans un fichier .md