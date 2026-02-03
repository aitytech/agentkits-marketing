# /training-fr:start-1-2 - Travailler avec les Fichiers Marketing

## Normes de Langue et de Qualité

**CRITIQUE** : Répondez dans la même langue que l'utilisateur. Si vietnamien, répondez en vietnamien. Si espagnol, répondez en espagnol.

---

## Instructions pour Claude

Enseignez l'organisation des fichiers, l'utilisation des commandes et la référence à la documentation pour les projets marketing.

### Aperçu de la Leçon

---

**Module 1.2 : Travailler avec les Fichiers Marketing**

En tant que marketeur, vous travaillez avec de nombreux types de ressources : briefs de campagne, brouillons de contenu, documents de recherche, rapports d'analyse. Maîtrisons leur organisation et leur gestion de manière efficace.

**Durée :** ~25 minutes

---

### Étape 1 : Examiner la Structure de la Documentation

Montrez-leur le dossier docs :

```
List all files in docs/
```

Expliquez chaque fichier de documentation :
- `brand-guidelines.md` - Modèle de normes de marque
- `content-style-guide.md` - Normes de rédaction, CTA, formatage
- `campaign-playbooks.md` - Modèles de campagnes éprouvés
- `channel-strategies.md` - Tactiques spécifiques aux plateformes
- `analytics-setup.md` - Suivi et attribution
- `usage-guide.md` - Référence complète du système

### Étape 2 : Explorer les Playbooks de Campagne

Lisez les playbooks de campagne :

```
Read docs/campaign-playbooks.md
```

Expliquez les types de playbooks :
- Playbook de Lancement de Produit
- Playbook de Génération de Leads
- Playbook de Notoriété de Marque
- Playbook de Rétention
- Playbook de Promotion d'Événement

### Étape 3 : Pratiquer les Commandes de Contenu

Guidez-les à travers les commandes de création de contenu :

**Article de Blog :**
```
/content:blog "5 Ways Remote Teams Can Improve Coordination" "remote team productivity"
```

**Contenu Social :**
```
/content:social "Team coordination tips for remote managers" "linkedin"
```

**Copie d'Email :**
```
/content:email "welcome" "trial users for AgentKits"
```

### Étape 4 : Pratiquer les Commandes de Recherche

Enseignez les techniques de recherche en utilisant grep/find ou en interrogeant Claude :

```
Find all files that mention "lead scoring"
```

```
Search for files containing "conversion rate"
```

### Étape 5 : Création de Contenu en Lot

Démontrez la création de plusieurs ressources à la fois :

```
Create multi-channel content for AgentKits launch:
1. LinkedIn announcement post
2. Twitter thread (5 tweets)
3. Email subject lines (5 A/B variations)
4. Google Ads headlines (5 variations, max 30 chars)
```

### Étape 6 : Croiser avec le Guide de Style

Montrez comment utiliser le guide de style du contenu :

```
Read docs/content-style-guide.md
```

Soulignez :
- Formules de titres (4-U Framework)
- Modèles de CTA
- Normes de lisibilité
- Directives de rédaction SEO

### Étape 7 : Commandes de Référence Rapide

Partagez les modèles de commandes essentiels :

**Commandes de Campagne :**
- `/campaign:plan` - Créer un plan de campagne
- `/campaign:brief` - Générer un brief créatif
- `/campaign:analyze` - Analyser les performances
- `/campaign:calendar` - Calendrier de contenu

**Commandes de Contenu :**
- `/content:blog` - Article de blog SEO
- `/content:social` - Contenu social spécifique à la plateforme
- `/content:email` - Copie d'email
- `/content:landing` - Copie de page de destination
- `/content:ads` - Copie publicitaire

### Et Ensuite

Dites-leur :
- Ils savent maintenant comment naviguer dans la documentation du kit marketing
- Les commandes sont organisées par fonction marketing
- **Suivant :** `/training-fr:start-1-3` - Premières Tâches Marketing (génération de contenu, analyse)

## Points Clés d'Enseignement
- Une bonne organisation de la documentation accélère tout
- Six documents clés couvrent la marque, le contenu, les campagnes, les canaux, l'analyse, l'utilisation
- Les commandes sont organisées par fonction (campaign, content, seo, etc.)
- Croisez les références des documents pour la cohérence
- Les opérations en lot permettent de gagner énormément de temps

---

RÈGLES CRITIQUES DE SORTIE :
- Sortez UNIQUEMENT le contenu markdown traduit brut
- NE PAS envelopper la sortie dans des blocs de code ```markdown
- NE PAS ajouter de préambule, d'explication ou de commentaire
- Commencez directement avec le contenu traduit
- La sortie sera sauvegardée directement dans un fichier .md