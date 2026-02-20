# /training-fr:start-2-3 - Générer du Contenu Marketing

## Normes de Langue et de Qualité

**CRITIQUE** : Répondez dans la même langue que l'utilisateur. Si vietnamien, répondez en vietnamien. Si espagnol, répondez en espagnol.

---

## Instructions pour Claude

Enseignez la génération de contenu à haut volume sur tous les canaux tout en maintenant la qualité.

### Aperçu de la Leçon

---

**Module 2.3 : Générer du Contenu Marketing**

Apprenez à créer du contenu marketing professionnel à grande échelle : emails, publicités, réseaux sociaux, pages de destination. Qualité + Rapidité.

**Durée :** ~35 minutes

---

### Étape 1 : Séquence d'Emails de Bienvenue

Utilisez la commande sequence :

```
/sequence:welcome "AgentKits" "trial users - remote team managers"
```

Examinez la séquence générée :
- Email 1 (Jour 0) : Bienvenue + Démarrage Rapide
- Email 2 (Jour 2) : Mise en Avant des Fonctionnalités
- Email 3 (Jour 5) : Preuve Sociale + Conseils
- Email 4 (Jour 9) : Renforcement de la Valeur
- Email 5 (Jour 13) : Fin de l'Essai + Mise à Niveau

Chaque email inclut :
- Variations de ligne d'objet pour les tests A/B
- Texte d'aperçu
- Corps du message
- CTA clair

### Étape 2 : Contenu pour les Réseaux Sociaux

Utilisez les commandes de contenu pour les réseaux sociaux :

**LinkedIn :**
```
/content:social "Team coordination tips for remote managers - AgentKits launch" "linkedin"
```

**Twitter :**
```
/content:social "5 ways remote teams waste time coordinating - thread" "twitter"
```

### Étape 3 : Contenu de Blog

Utilisez la commande blog avec un focus SEO :

```
/content:blog "How Remote Teams Can Coordinate Focus Time Without Endless Meetings" "remote team focus time"
```

Puis optimisez :
```
/seo:optimize "the blog post" "remote team focus time"
```

### Étape 4 : Textes Publicitaires Payants

Utilisez les commandes de textes publicitaires :

**Google Ads :**
```
/content:ads "google" "team productivity software - drive signups"
```

**Meta Ads :**
```
/content:ads "meta" "remote team coordination - awareness campaign"
```

**LinkedIn Ads :**
```
/content:ads "linkedin" "B2B productivity tool - lead generation"
```

### Étape 5 : Contenu de Page de Destination

Utilisez la commande de page de destination :

```
/content:landing "14-day free trial of AgentKits" "remote team managers at tech companies"
```

Cela génère :
- Section héro (titre, sous-titre, CTA)
- Section problème
- Section solution
- Fonctionnalités avec bénéfices
- Section preuve sociale
- Aperçu des tarifs
- Section FAQ
- CTA final

### Étape 6 : Contenu Rapide vs Contenu de Qualité

Expliquez les deux modes de contenu :

**Contenu Rapide (`/content:fast`) :**
- Délai d'exécution rapide
- Bon pour l'idéation
- Premiers brouillons
- Besoins de volume élevé

```
/content:fast "Quick LinkedIn post about team focus time benefits"
```

**Contenu de Qualité (`/content:good`) :**
- Recherche approfondie
- Multiples variations
- Prêt pour publication
- Pièces stratégiques

```
/content:good "Detailed blog post about the science of team focus time with research citations"
```

### Étape 7 : Amélioration du Contenu

Utilisez les commandes d'amélioration :

```
/content:enhance "make the copy more conversational and add urgency"
```

```
/content:cro "optimize for higher conversion rate"
```

### Étape 8 : Variations pour Tests A/B

Créez des variations de test :

```
Create A/B test variations for the landing page:

Headlines (5 angles):
1. Outcome-focused
2. Problem-focused
3. Question
4. How-to
5. Social proof

CTAs (3 variations):
1. Start Free Trial
2. Try It Free
3. Get Started Now
```

### Étape 9 : Personnalisation par Persona

Créez des variations spécifiques par persona :

**Pour Solo Sam :**
```
/content:email "product announcement" "technical team managers - efficiency focus"
```

**Pour Startup Sam :**
```
/content:email "product announcement" "startup founders - growth and scale focus"
```

### Étape 10 : Révision de la Qualité

Révisez tout le contenu avec les spécialistes :

```
Review all content we created with:
1. brand-voice-guardian - brand consistency
2. conversion-optimizer - conversion potential
3. seo-specialist - SEO optimization

Score each piece and identify top improvements needed.
```

### Et Ensuite

Dites-leur :
- Ils ont généré une bibliothèque de contenu complète en une seule session
- Normalement des semaines de travail
- **Suivant :** `/training-fr:start-2-4` - Analyser les Données de Campagne
- Transformer les données en insights actionnables

## Points Clés d'Enseignement
- Les commandes `/content:*` gèrent tous les types de contenu
- `/sequence:*` crée l'automatisation d'emails
- Utilisez le mode rapide pour les brouillons, le mode qualité pour la version finale
- `/content:cro` optimise pour la conversion
- Personnalisez par persona pour une pertinence accrue
- Révisez toujours avec les agents spécialistes

---

RÈGLES CRITIQUES DE SORTIE :
- Sortez UNIQUEMENT le contenu markdown brut traduit
- NE PAS encadrer la sortie dans des balises de code ```markdown
- NE PAS ajouter de préambule, d'explication ou de commentaire
- Commencez directement avec le contenu traduit
- La sortie sera sauvegardée directement dans un fichier .md