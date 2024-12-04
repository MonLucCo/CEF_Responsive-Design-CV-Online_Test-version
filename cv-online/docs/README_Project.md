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
- `public/` : Contient les fichiers publics comme `index.html` et les icônes
- `node_modules/` : Contient les dépendances du projet
- `build/` : Contient le code du site hébergé

## Fonctionnalités

- Affichage du CV en ligne
- Formulaire de contact
- Blog avec articles

## Instructions d'utilisation

1. Accédez à la page d'accueil pour voir le CV
2. Utilisez le formulaire de contact pour envoyer un message
3. Consultez le blog pour lire les articles

## Dépendances

- React
- React Router
- Sass

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
