# cv-online

## Sommaire

- [cv-online](#cv-online)
  - [Sommaire](#sommaire)
  - [Architecture](#architecture)
  - [Fonctionnalités](#fonctionnalités)
  - [Instructions d'utilisation](#instructions-dutilisation)
  - [Dépendances](#dépendances)
  - [Configuration](#configuration)
  - [Déploiement](#déploiement)
  - [Preuves de validité du projet](#preuves-de-validité-du-projet)
  - [Navigation dans la documentation](#navigation-dans-la-documentation)

## Architecture

- `src/` : Contient le code source de l'application
  - `assets/styles/` : contient les dossiers des styles (fichier SCSS) segmentés par nature
  - `config/` : contient la configuration de l'application
  - `pages/` : contient les composants de page de l'application
  - `components/` : contient les composants de rendu de l'application
  - `utils/` : contient les composants utilitaires de l'application
- `public/` : Contient les fichiers publics comme `index.html` et les icônes et les dossiers suivants :
  - `data/` : contient toutes les données chargées de manière asynchrone
  - `images/`: contient les fichiers d'image segmentés par composant
- `node_modules/` : Contient les dépendances du projet
- `build/` : Contient le code du site hébergé

## Fonctionnalités

- Affichage du CV en ligne
- Formulaire de contact
- Réalisations avec accès aux projets du CV
- Blog avec articles publiés
- Page des mentions légales intégrée à l'application du CV
- Accès à l'application externe **GitHub Profile Viewer** hébergée sur CodeSandbox

## Instructions d'utilisation

1. Accédez à la page d'accueil pour voir le CV
2. Utilisez le formulaire de contact pour envoyer un message
3. Consulter les réalisations pour accéder aux projets réalisées (simulation de l'accès lorsque l'adresse n'est pas connue)
4. Consultez le blog pour lire les articles (simulation de l'accès car pas d'adresse connue pour les publications)
5. Consulter la page des services proposés
6. Accéder à l'application externe **GitHub Profile Viewer** pour visualiser les informations du profil du candidat du CV (ou autre profil défini par une adresse url valide de l'API GitHub)

## Dépendances

- React
- React Router
- Sass
- Bootstrap 5.3.3 (installé via CDN)
- Font Awesome 6 (installé via CDN)

## Configuration

1. Assurez-vous que toutes les dépendances sont installées avec `npm install`.
2. Configurez les variables d'environnement si nécessaire.

## Déploiement

1. Construisez l'application pour la production avec `npm run build`.
2. Déployez les fichiers générés dans le dossier `build` sur votre serveur ou plateforme de cloud.

## Preuves de validité du projet

Vous pouvez consulter les preuves de validation du projet selon les références du `W3C` et l'outil `Ligthouse` dans le document [Preuves W3C Ligthouse](./VALIDATION_PRODUCT.md).

## Navigation dans la documentation

Pour plus d'informations sur le projet, vous pouvez consulter les documents suivants :

- [README du repository GitHub](../README.md) : Vue d'ensemble du projet, instructions d'installation et d'utilisation, méthodes de développement.
- [README du projet CV Online](./README_Project.md) : Détails sur l'architecture, les fonctionnalités, les instructions d'utilisation, les dépendances, la configuration, les tests et le déploiement de l'application CV Online.
- [Preuves de validation](./VALIDATION_PRODUCT.md) : Résultats des validations W3C et Lighthouse.
