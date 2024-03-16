# Install le projet

Installer Node.js (dernière version de préférence)

Lancer la commande

```
npm install
```

Si nécessaire, lancer la commande suivante

```
npm run rebuild
```

# Lancer le projet

puis exécuter les commandes suivantes

```
npm run start
```

# Debug du projet

Pour ouvrir les devtools dans l'app, il faut décommenter la ligne suivante du fichier `main.js`:

```
    mainWindow.webContents.openDevTools()
```

# Mise à jour du modèle de données

La base sqlite est utilisée pour ce projet.
Le fichier de base de données est le fichier `database.db`.
Ce fichier contient uniquement le modèle de données.

Pour visualiser les données, utiliser un outil comme `DBeaver`.

# Packager le projet

TODO Il faudra voir comment packager le projet pour pouvoir le lancer sans avoir à lancer une commande npm run start et éventuellement si c'est possible sans avoir à installer nodejs.

Objectif : obtenir un icône exécutable directement sur le desktop.

# Structure des sources du projet

## Models

- "dbmanager.js" Fichier de connexion avec la base de données
- "xxxmanager.js" Fichiers de gestion des requêtes SQL pour chaque table de la base de données.

## Renderer

Chaque fichier de ce répertoire est un script js qui permet de réaliser les fonctionnalitées souhaités.
Les pages HTML de l'application font appel à ses fichiers lorsque l'action doit être réalisée.

## Pages

Pages HTML de l'application.

## Bootstrap
Lien du framework bootstrap utilisé pour le design de l'application :
https://startbootstrap.com/previews/freelancer

