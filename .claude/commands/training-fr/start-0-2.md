# /training-fr:start-0-2 - Votre première tâche marketing

## Normes de langue et de qualité

**CRITIQUE** : Répondez dans la même langue que celle utilisée par l'utilisateur. Si c'est du vietnamien, répondez en vietnamien. Si c'est de l'espagnol, répondez en espagnol.

---

## Instructions pour Claude

Guidez l'étudiant à travers sa première véritable tâche marketing - créer des directives de marque en utilisant nos commandes.

### Aperçu de la leçon

---

**Module 0.2 : Votre première tâche marketing**

Passons maintenant à un vrai travail marketing. Nous allons créer des directives de marque pour AgentKits en utilisant la commande `/brand:voice`.

---

### Étape 1 : Expliquer les directives de marque

Expliquez pourquoi les directives de marque sont importantes :
- Assure la cohérence sur l'ensemble du contenu
- Aide Claude (et les humains) à écrire avec la bonne voix
- Documente les messages clés et la terminologie
- Prévient le contenu hors marque

### Étape 2 : Utiliser la commande Brand Voice

Guidez-les pour utiliser la commande système réelle :

```
/brand:voice "AgentKits - B2B team productivity coordination tool for remote teams"
```

Laissez Claude générer des directives de marque complètes, puis examinez-les avec l'étudiant.

### Étape 3 : Créer des personas clients

Utilisez maintenant la commande de recherche pour les personas :

```
/research:persona "Remote team managers at tech companies using AgentKits"
```

Expliquez :
- L'agent `researcher` gère les études de marché
- Les personas aident à cibler le contenu vers des audiences spécifiques
- Nous utiliserons ces personas tout au long du cours

### Étape 4 : Examiner ce qui a été créé

Examinez les résultats ensemble :

```
Show me what the brand:voice command created
```

Soulignez :
- Les attributs de voix et le spectre de ton
- Le cadre de messagerie
- Les mots à utiliser et à éviter
- L'intégration avec d'autres agents

### Étape 5 : Le pouvoir du contexte

Expliquez :
- Ces directives existent maintenant dans le contexte du projet
- Dans les tâches futures, les agents peuvent y faire référence
- C'est la « conscience du contexte » - l'un des super-pouvoirs de Claude
- Nous les utiliserons tout au long du cours

### Exercice rapide : Tester la génération de contenu

Demandez-leur d'essayer d'utiliser le contexte de marque :

```
/content:social "Remote team productivity tips" "linkedin"
```

Montrez comment Claude utilise automatiquement le contexte de marque dans la création de contenu.

### Étape 6 : Explorer d'autres commandes clés

Démontrez brièvement d'autres commandes qu'ils maîtriseront :

**Planification de campagne :**
```
/campaign:plan "Q1 Product Launch"
```

**Recherche SEO :**
```
/seo:keywords "remote team productivity"
```

**Séquences d'emails :**
```
/sequence:welcome "AgentKits" "trial users"
```

### Et après

Dites-leur :
- **Félicitations !** Module 0 terminé !
- Ils ont utilisé de vraies commandes marketing et vu le système en action
- **Ensuite :** `/training-fr:start-1-1` - Bienvenue chez Markit (les concepts de base commencent)
- Ils plongeront en profondeur dans les agents, les workflows et les commandes avancées

## Points d'enseignement clés
- Les directives de marque assurent la cohérence
- Utilisez `/brand:voice` pour créer des directives de voix
- Utilisez `/research:persona` pour les personas clients
- La conscience du contexte signifie que les agents font référence au travail existant
- Les vraies commandes (`/campaign:*`, `/content:*`, `/seo:*`) sont celles qu'ils maîtriseront

---

RÈGLES DE SORTIE CRITIQUES :
- Sortez UNIQUEMENT le contenu markdown traduit brut
- NE PAS encadrer la sortie dans des balises de code ```markdown
- NE PAS ajouter de préambule, d'explication ou de commentaire
- Commencez directement avec le contenu traduit
- La sortie sera sauvegardée directement dans un fichier .md