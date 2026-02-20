# /training-fr:persona-builder - Constructeur de Persona Interactif

## Normes de Langue et de Qualité

**CRITIQUE** : Répondez dans la même langue que celle utilisée par l'utilisateur. Si vietnamien, répondez en vietnamien. Si espagnol, répondez en espagnol.

---

## Instructions pour Claude

Guidez les utilisateurs non-développeurs à travers la création d'un persona d'acheteur étape par étape en utilisant le **Modèle UX Interactif**. Posez des questions avec 2 à 4 options cliquables à chaque étape. Il s'agit d'une session de formation pratique et adaptée aux débutants.

### Message de Bienvenue

---

**Constructeur de Persona Interactif**

Je vais vous guider dans la création d'un persona d'acheteur détaillé pour votre produit ou service. Aucune expérience en marketing n'est requise - répondez simplement à quelques questions en choisissant parmi les options que je propose.

**Ce que vous allez créer :**
- Un profil complet de persona d'acheteur
- Des points de message clés pour ce persona
- Des recommandations de canaux

**Durée :** ~15 minutes

Commençons !

---

### Étape 1 : Type d'Entreprise

**IMPORTANT** : Utilisez l'outil AskUserQuestion pour demander :

**Question :** "Quel type de produit ou service commercialisez-vous ?"

**Options :**
1. **SaaS / Logiciel** - Logiciel cloud, applications, outils numériques
2. **E-commerce** - Produits physiques, boutique en ligne
3. **Services Professionnels** - Conseil, agence, coaching
4. **Autre** - Laisser l'utilisateur préciser

---

### Étape 2 : Public Cible

**IMPORTANT** : Utilisez l'outil AskUserQuestion pour demander :

**Question :** "Qui est votre public cible principal ?"

**Options :**
1. **Décideurs B2B** - Managers, directeurs, cadres dans les entreprises (Recommandé pour SaaS)
2. **Utilisateurs Finaux B2B** - Employés individuels, membres d'équipe
3. **Consommateurs B2C** - Consommateurs individuels pour usage personnel
4. **Autre** - Laisser l'utilisateur préciser

---

### Étape 3 : Taille de l'Entreprise (si B2B)

Si B2B a été sélectionné, utilisez l'outil AskUserQuestion :

**Question :** "Quelle taille d'entreprise ciblez-vous généralement ?"

**Options :**
1. **Startups** - 1-20 employés, fondateurs/équipe initiale
2. **PME** - 20-200 employés, équipes en croissance (Recommandé)
3. **Marché Intermédiaire** - 200-2000 employés, chefs de département
4. **Grande Entreprise** - 2000+ employés, achats impliqués

---

### Étape 4 : Point de Douleur Principal

**IMPORTANT** : Utilisez l'outil AskUserQuestion :

**Question :** "Quel est le problème n°1 que votre produit résout ?"

**Options :**
1. **Gagner du Temps** - Automatisation, efficacité, productivité
2. **Économiser de l'Argent** - Réduction des coûts, meilleur ROI
3. **Réduire les Risques** - Conformité, sécurité, fiabilité
4. **Augmenter le Chiffre d'Affaires** - Plus de ventes, prospects, clients

---

### Étape 5 : Critères de Décision

**IMPORTANT** : Utilisez l'outil AskUserQuestion :

**Question :** "Qu'est-ce qui compte le plus pour vos acheteurs lors du choix d'une solution ?"

**Options :**
1. **Prix / Valeur** - Soucieux du budget, axé sur le ROI
2. **Fonctionnalités / Capacités** - Utilisateurs avancés, besoins spécifiques (Recommandé)
3. **Facilité d'Utilisation** - Non-technique, adoption rapide
4. **Confiance / Marque** - Acteurs établis, références

---

### Étape 6 : Préréglage de Persona

**IMPORTANT** : Utilisez l'outil AskUserQuestion :

**Question :** "Quel archétype de persona correspond le mieux à votre client idéal ?"

**Options :**
1. **Manager Maria** - Manager B2B, chef d'équipe, axé sur les résultats (Recommandé pour B2B)
2. **Startup Sam** - Fondateur, porte plusieurs casquettes, axé sur la croissance
3. **Solo Steve** - Solopreneur, soucieux du budget, DIY
4. **Personnalisé** - Construire à partir de zéro en fonction des réponses précédentes

---

### Générer le Persona

En fonction de toutes les réponses, générez un persona complet en utilisant ce format :

```markdown
## [Nom du Persona]
**Rôle :** [Titre du poste basé sur les réponses]
**Entreprise :** [Type/Taille basé sur les réponses]

### Démographie
- Âge : [Tranche appropriée]
- Éducation : [Niveau approprié]
- Expérience : [Années dans le poste]
- Rapporte à : [À qui ils rapportent]

### Objectifs
1. [Objectif principal aligné avec le point de douleur]
2. [Objectif secondaire aligné avec les critères de décision]
3. [Objectif de carrière/personnel]

### Défis
1. [Point de douleur principal de l'Étape 4]
2. [Défi connexe]
3. [Obstacle à l'atteinte des objectifs]

### Comment [Produit] Aide
- Résout [point de douleur 1] en [solution spécifique]
- Permet [objectif] grâce à [fonctionnalité]
- Réduit [défi] avec [bénéfice]

### Objections & Réponses
- "[Préoccupation budgétaire]" → [Réponse axée sur la valeur]
- "[Temps de mise en œuvre]" → [Réponse sur la facilité d'adoption]
- "[Risque de changement]" → [Réponse de renforcement de la confiance]

### Canaux Préférés
- **Découverte :** [Où ils font leurs recherches]
- **Contenu :** [Ce qu'ils consomment]
- **Social :** [Où ils réseautent]

### Messages Qui Résonnent
- Commencer par : [Bénéfice principal]
- Mettre l'accent sur : [Différenciateur clé]
- Prouver avec : [Type de preuve]

### Citation Caractéristique
"[Déclaration qui capture leur état d'esprit]"
```

---

### Confirmer & Enregistrer

Après la génération, demandez :

**Question :** "Souhaitez-vous enregistrer ce persona ?"

**Options :**
1. **Enregistrer dans docs/** - Enregistrer comme `docs/personas/[nom].md`
2. **Affiner davantage** - Ajuster des sections spécifiques
3. **Créer un autre persona** - Recommencer pour un segment différent
4. **Terminé** - Terminer la formation

---

### Célébration & Prochaines Étapes

Félicitez-les :

**Vous avez créé votre premier persona d'acheteur !**

Ce persona vous aidera à :
- Rédiger du contenu marketing ciblé
- Choisir les bons canaux
- Gérer les objections en vente

**Et ensuite :**
- `/content:blog` - Créer du contenu pour ce persona
- `/campaign:brief` - Planifier une campagne les ciblant
- `/research:persona` - Créer des personas supplémentaires
- `/training-fr:help` - Voir toutes les formations disponibles

---

## Points Pédagogiques Clés

1. **Modèle UX Interactif** : Toujours utiliser AskUserQuestion avec 2 à 4 options
2. **Les préréglages aident les débutants** : Offrir des options recommandées avec l'étiquette (Recommandé)
3. **Construire progressivement** : Chaque réponse informe la question suivante
4. **Confirmer avant l'action** : Demander avant d'enregistrer ou d'effectuer des actions majeures
5. **Célébrer l'accomplissement** : Reconnaître leur réussite
6. **Fournir les prochaines étapes** : Les guider vers les commandes associées

---

RÈGLES DE SORTIE CRITIQUES :
- Sortir UNIQUEMENT le contenu markdown brut traduit
- NE PAS envelopper la sortie dans des blocs de code ```markdown
- NE PAS ajouter de préambule, d'explication ou de commentaire
- Commencer directement avec le contenu traduit
- La sortie sera enregistrée directement dans un fichier .md