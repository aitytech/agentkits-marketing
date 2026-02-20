---
description: /training-fr:start-3-2 - Optimisation des Formulaires et Inscriptions
argument-hint:
---

# Module 3, Leçon 2 : Optimisation des Formulaires et Inscriptions

## Maîtriser l'Optimisation des Formulaires et de l'Enregistrement

Les formulaires sont les gardiens de la conversion. Chaque champ inutile vous coûte des prospects. Cette leçon vous apprend à optimiser les formulaires de capture de prospects et les flux d'inscription.

## Objectifs d'Apprentissage

À la fin de cette leçon, vous serez capable de :
1. Appliquer la règle des 5 champs maximum
2. Optimiser les flux d'inscription pour la conversion
3. Réduire systématiquement les frictions dans les formulaires
4. Concevoir des formulaires progressifs en plusieurs étapes

---

## Principes CRO des Formulaires

### La Règle des 5 Champs

Chaque champ au-delà de 5 réduit la conversion d'environ 10 %.

**Champs essentiels uniquement :**
1. Email (toujours requis)
2. Nom (parfois)
3. Entreprise (B2B uniquement)
4. Mot de passe (inscription uniquement)
5. Un qualificateur si nécessaire

**Reporter tout le reste** à l'après-inscription.

### Points de Friction à Éliminer

| Friction | Solution |
|----------|----------|
| Trop de champs | Supprimer ou reporter |
| Exigences du mot de passe | Afficher en ligne, pas après erreur |
| Téléphone obligatoire | Rendre optionnel ou supprimer |
| CAPTCHA | Utiliser des alternatives invisibles |
| Pas de connexion sociale | Ajouter Google/SSO |

---

## Commande CRO pour Formulaires

Utilisez `/cro:form` pour les formulaires de capture de prospects :

```bash
/cro:form "Optimize AgentKits's demo request form: Name, Email, Company, Phone, Title, Team Size, Message"
```

### Recommandations Attendues

1. **Supprimer :** Message (demander lors du suivi)
2. **Supprimer :** Téléphone (peut être capturé plus tard)
3. **Rendre optionnel :** Titre
4. **Conserver :** Nom, Email, Entreprise, Taille de l'équipe

Réduction de 7 → 4 champs = environ +30 % de conversions estimées

---

## Optimisation du Flux d'Inscription

Pour l'enregistrement de compte, utilisez `/cro:signup` :

```bash
/cro:signup "Analyze AgentKits's trial signup: Email → Password → Company → Team Size → Use Case → Payment"
```

### Modèles de Flux d'Inscription

| Modèle | Idéal Pour | Conversion |
|---------|------------|------------|
| Démarrage email uniquement | Conversion maximale | Commencer par l'email, profilage progressif |
| Social d'abord | Applications grand public | Google/SSO en évidence |
| Page unique minimale | B2C, produits simples | Tous les champs visibles |
| Multi-étapes avec progression | B2B, complexe | Guidé, montre la progression |

---

## Exercice 1 : Audit de Formulaire

Auditez le formulaire actuel de demande de démonstration d'AgentKits :

```bash
/cro:form "7-field form: Name, Email, Company, Phone, Job Title, Team Size, Message. Goal: schedule demo calls."
```

Créez les recommandations dans :
```
training/exercises/markit/cro/form-audit.md
```

### Votre Résultat Devrait Inclure

1. Champs à supprimer
2. Champs à rendre optionnels
3. Stratégie de profilage progressif
4. Améliorations de la copie (texte du bouton, étiquettes)

---

## Exercice 2 : Refonte du Flux d'Inscription

Concevez un flux d'inscription optimisé pour AgentKits :

```bash
/cro:signup "Design optimal trial signup for AgentKits. Current: 5-step process. Goal: maximize trial starts."
```

Considérez :
- Capture initiale par email uniquement
- Options OAuth (Google Workspace pour B2B)
- Quand collecter les informations de l'entreprise
- Séparation onboarding vs inscription

---

## Exercice 3 : Conception de Formulaire Multi-Étapes

Pour les inscriptions B2B complexes, concevez une approche multi-étapes :

**Étape 1 :** Email uniquement
**Étape 2 :** Entreprise + taille de l'équipe (avec barre de progression)
**Étape 3 :** Sélection optionnelle du cas d'usage

Utilisez la compétence form-cro pour valider :

```bash
/cro:form "Design 3-step progressive form for AgentKits enterprise demo"
```

---

## Exercice Pratique

Complétez ces tâches :

1. **Auditer le formulaire actuel :**
   Enregistrer dans `training/exercises/markit/cro/current-form-audit.md`

2. **Concevoir le formulaire optimisé :**
   Enregistrer dans `training/exercises/markit/cro/optimized-form.md`

3. **Créer un test A/B :**
   ```bash
   /test:ab-setup "Test 7-field vs 4-field form for AgentKits demos"
   ```
   Enregistrer dans `training/exercises/markit/cro/form-ab-test.md`

---

## Point de Contrôle

Avant de continuer, vérifiez que vous pouvez :
- [ ] Appliquer la règle des 5 champs maximum
- [ ] Identifier les frictions dans les flux d'inscription
- [ ] Concevoir une stratégie de profilage progressif
- [ ] Créer des hypothèses de test A/B pour les formulaires

---

## Prochaine Leçon

Continuez avec le Module 3, Leçon 3 : Optimisation des Popups et de l'Onboarding

```bash
/training-fr:start-3-3