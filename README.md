# PleXiglass

PleXiglass est une application web permettant de soumettre des demandes d'ajout de contenu à l'administrateur d'un serveur PleX.

## Table des matières

- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [Structure du projet](#structure-du-projet)
- [Contribution](#contribution)
- [License](#license)

## Prérequis

- Node.js (version compatible avec vos dépendances)
- npm (pour la gestion des paquets)
- Un compte Gmail pour la configuration de l'envoi d'emails (via Nodemailer)

## Installation

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/Anatoleee/PleXiglass.git
   cd PleXiglass
   ```

2. **Installer les dépendances**

   Dans le répertoire principal du projet, exécutez :

   ```bash
   npm install
   ```

## Configuration

Ce projet utilise les variables suivantes :

```
PORT=<PORT> 
GMAIL_USER=<VOTRE_ADRESSE_GMAIL> 
GMAIL_PASS=<VOTRE_MOT_DE_PASSE_GMAIL>
```

**Remarque :** Assurez-vous que votre compte Gmail autorise les connexions depuis des applications externes ou que vous utilisez un mot de passe d'application.

## Utilisation

### Lancement du projet

Pour démarrer le projet, exécutez :



```bash
cd src
```
```bash
npm run dev
```
```bash
GMAIL_USER=<EMAIL> GMAIL_PASS=<MOT_DE_PASSE_APP> PORT=3000 node server.js
```

## Note
Sur certaines machines, il est nécessaire de modifier le fichier "index.html" exporté par la commande 
```bash
npm run build
```
Les modifications à apporter sont la suppression du "/" devant tout les fichiers et images dans le index.html
