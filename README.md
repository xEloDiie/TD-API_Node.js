# API Node.js avec TypeScript

## Description
Ce projet a permis de créer une API grâce à TypeScript, fonctionnel sur un serveur local.  
L’API a pu **gérer des utilisateurs** (au départ dans un fichier .json) puis, par la suite, en créant des routes CRUD et un stockage **persistant dans SQLite** (non éphémère).  

---

## Technologies utilisées
- **Node.js** : Environnement serveur JavaScript
- **TypeScript** : Superset de JavaScript avec typage statique
- **Express** : Framework web pour créer l’API
- **Sequelize** : ORM pour gérer SQLite
- **SQLite** : Base de données légère et locale
- **dotenv** : Gestion des variables d’environnement
- **Nodemon** : Redémarrage automatique du serveur pendant le développement

---

## Logiciels utilisés
- **Visual Studio Code** : Pour coder.
- **Postman** : Pour les requêtes GET, POST, PUT, DELETE.
- **DB Browser for SQLITE** : Pour afficher visuellement la base de données et vérifier la pérénité des entrées.


--- 

## Structure du projet

```
api-node-ts/
├── node_modules/ # Dossier d'installation des modules Node.js
├── .env # Variables d'environnement
├── nodemon.json # Configuration Nodemon
├── package.json
├── tsconfig.json # Configuration TypeScript
└── src/
     ├── config/
     │     └── database.ts # Configuration Sequelize / SQLite
     ├── controllers/
     │     └── user.controller.ts # Logique métier utilisateurs
     ├── models/
     │     └── user.model.ts # Modèle utilisateur Sequelize
     ├── routes/
     │     └── user.routes.ts # Définition des routes utilisateurs
     └── index.ts # Point d’entrée de l’application
```

---

## Remarque

Les commentaires demandés pour les fichiers ```nodemon.json``` et ```package.json``` se situent dans la balise "```_comment```" des fichiers respectifs.
