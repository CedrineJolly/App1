# Install le projet

Installer Node.js (dernière version stable de préférence)

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

npm run start

# Debug du projet

Pour ouvrir les devtools dans l'app, il faut décommenter la ligne suivante du fichier `main.js`:

```
    mainWindow.webContents.openDevTools()
```

# Mise à jour du modèle de données

La base sqlite est utilisée pour ce projet.
Le fichier de base de données est le fichier `database.db`.
Ce fichier contient uniquement le modèle de données.

Pour le faire évoluer, utiliser un outils comme `DBeaver`.

:warning: le fichier database.db est ajouté au `.gitignore`, pour le commit il est nécessaire de modifier le `.gitignore` le temps de commit les modifications sur ce fichier.


# Packager le projet

TODO Il faudra voir comment packager le projet pour pouvoir le lancer sans avoir à lancer une commande npm run start et éventuellement si c'est possible sans avoir à installer nodejs

# Structure des sources du projet

## Models

TODO expliquer le role de ce que contient ce répertoire

## Renderer

TODO expliquer le role de ce que contient ce répertoire

## Pages

TODO expliquer le role de ce que contient ce répertoire
Utilisation du framework css bootstrap ?
