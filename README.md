# CEF_Responsive-Design-CV-Online_Test-version

## Sommaire

- [CEF\_Responsive-Design-CV-Online\_Test-version](#cef_responsive-design-cv-online_test-version)
  - [Sommaire](#sommaire)
  - [Description](#description)
  - [Installation](#installation)
    - [Installation de l'environnement de développement](#installation-de-lenvironnement-de-développement)
    - [Installation de React, React Router et Sass](#installation-de-react-react-router-et-sass)
  - [Utilisation](#utilisation)
    - [Serveur de développement](#serveur-de-développement)
    - [Serveur de production](#serveur-de-production)
  - [Méthode de Développement](#méthode-de-développement)
    - [Utilisation de GitHub](#utilisation-de-github)
    - [Environnements utilisés](#environnements-utilisés)
  - [Détails du projet **CV Online**](#détails-du-projet-cv-online)
  - [Navigation dans la documentation](#navigation-dans-la-documentation)

## Description

Le projet concerne le site d'un CV en ligne réalisé avec la librairie `React.js` et déployé chez un hébergeur.

## Installation

### Installation de l'environnement de développement

1. Clonez le repository : `git clone https://github.com/votre-utilisateur/cv-online.git`
2. Accédez au répertoire du projet : `cd cv-online`
3. Installez les dépendances : `npm install`

### Installation de React, React Router et Sass

1. Installez React : `npx create-react-app .`
2. Installez React Router : `npm install react-router-dom`
3. Installez Sass : `npm install sass`

## Utilisation

### Serveur de développement

1. Se positionner dans le dossier de l'application : `cd cv-online`
2. Démarrez le serveur de développement en local : `npm start`
3. Pour simuler l'application de développement, ouvrez votre navigateur à `http://localhost:3000`

### Serveur de production

1. Se positionner dans le dossier de l'application : `cd cv-online`
2. Pour créer l'application à déployer (dans le dossier `/build`) : `npm run build`
3. Démarrez le serveur de production en local :
   - installez le serveur : `npm install -g serve`
   - démarrez le serveur de production : `serve -s build`
4. Pour simuler l'application de production, ouvrez votre navigateur en localhost au port indiqué

## Méthode de Développement

### Utilisation de GitHub

1. **Forker le repository** : Cliquez sur le bouton "Fork" en haut de la page du repository.
2. **Clonez le fork** : Clonez votre fork localement avec `git clone https://github.com/votre-utilisateur/cv-online.git`.
3. **Créez une branche** : Créez une nouvelle branche pour votre fonctionnalité ou correction de bug avec `git checkout -b ma-fonctionnalite`.
4. **Faites les modifications** : Apportez vos modifications dans votre branche.
5. **Testez les modifications** : Assurez-vous que toutes les modifications sont correctement testées.
6. **Commitez les modifications** : Commitez vos modifications avec un message de commit clair et descriptif avec `git commit -m 'Ajout de ma fonctionnalité'`.
7. **Poussez la branche** : Poussez votre branche vers votre fork avec `git push origin ma-fonctionnalite`.
8. **Créez une Pull Request** : Allez sur la page du repository original et créez une Pull Request à partir de votre branche.

### Environnements utilisés

1. Environnement de codage VSCode
2. Environnement d'hébergement :
   - Compte `CodeSandbox.io` pour l'hébergemet d'une application React externe
   - Compte `AlwaysData.com` pour l'hébergement du site d'application
   - Compte `GitHub.com` pour l'historisation des travaux
3. Environnement de tests :
   - Outil DevTools `Ligthouse` de `Chrome`
   - Outil [W3C Validator HTML](https://validator.w3.org/) de `W3C`
   - Outil [W3C Validator CSS](https://validator.w3.org/) de `W3C`

## Détails du projet **CV Online**

Le détail du projet est décrit dans la documentation [README de CV-online](./cv-online/docs/README_Project.md).

## Navigation dans la documentation

Pour plus d'informations sur le projet, vous pouvez consulter les documents suivants :

- [README du repository GitHub](./README.md) : Vue d'ensemble du projet, instructions d'installation et d'utilisation, méthodes de développement.
- [README du projet CV Online](./cv-online/docs/README_Project.md) : Détails sur l'architecture, les fonctionnalités, les instructions d'utilisation, les dépendances, la configuration, les tests et le déploiement de l'application CV Online.
- [Preuves de validation](./cv-online/docs/VALIDATION_PRODUCT.md) : Résultats des validations `W3C` et `Lighthouse`.
