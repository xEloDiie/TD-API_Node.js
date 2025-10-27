# API Node.js avec TypeScript

## Description
Ce projet a permis de créer une API grâce à TypeScript, fonctionnel sur un serveur local.  
L’API a pu **gérer des utilisateurs** (au départ dans un fichier .json) puis, par la suite, dans une base de données (fichier .sqlite), en créant des routes CRUD pour plus de fonctionnalités.

---

## Technologies utilisées
- **Node.js** : Environnement serveur JavaScript
- **TypeScript** : Superset de JavaScript avec typage statique
- **Express** : Framework web pour créer l’API
- **Sequelize** : ORM pour gérer SQLite
- **SQLite** : Base de données (locale)
- **dotenv** : Gestion des variables d’environnement
- **Nodemon** : Redémarrage automatique du serveur pendant le développement

---

## Logiciels utilisés
- **Visual Studio Code** : Pour coder
- **Postman** : Pour les requêtes GET, POST, PUT, DELETE
- **DB Browser for SQLITE** : Pour afficher visuellement la base de données et vérifier les entrées dans la base

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

---

## Prérequis & Installations requises

Ce dépôt contient déjà tous les fichiers nécessaires, y compris : 
* les dépendances (dans node_modules/)
* la configuration (.env)
* le code source complet (src/)
  
Cependant, il est nécessaire d'installer Node.js pour pouvoir utiliser les commandes pour faire marcher le serveur.
Lien de la page de téléchargement du site : https://nodejs.org/en/download 


Il est également recommandé (car plus facile) d'installer Postman pour les requêtes GET, POST, PUT et DELETE. 
Lien de la page de téléchargement du site : https://www.postman.com/downloads/

---

## Utilisation

### 1. Cloner le projet :
```bash
git clone https://github.com/xEloDiie/TD-API_Node.js.git
cd api-node-ts
```

Il n'y aura rien à intaller au niveau des dépendances, tout est déjà prêt à l'emploi !

### 2. Lancer le serveur en mode développement
```bash
npm run dev
```
Le serveur sera ainsi accessible en local à l'adresse suivante : http://localhost:4000

### 3. Exécuter des requêtes dans Postman ou dans une invite de commande pour tester la base de données :

#### Pour vérifier si l'API fonctionne :

##### - Avec Postman :

1. Exécuter
```bash
GET http://localhost:4000/
```

![Desktop 2025 10 27 - 13 44 05 03-00 00 03 130-00 00 14 889](https://github.com/user-attachments/assets/5b1087d6-e9c4-4de9-a214-bd69c386427e)

##### - Depuis l'invite de commande :

1. Exécuter
```bash
curl http://localhost:4000/
```

<img width="1128" height="450" alt="image" src="https://github.com/user-attachments/assets/f318ece5-ec16-4335-ae09-bc5f404653c8" />

---

#### Pour ajouter un utilisateur :

##### - Avec Postman :
  
1. Se rendre dans "Body" puis "raw" et choisir comme language JSON et ajouter :
```JSON
{
     "name": "<NOM_A_AJOUTER>",
     "email": "<EMAIL_A_AJOUTER>",
}
```

2. Exécuter
```bash
POST http://localhost:4000/users/
```

![Desktop 2025 10 27 - 14 42 57 07](https://github.com/user-attachments/assets/2ac53971-f9fe-4214-bb98-99ef503dce84)


##### - Depuis l'invite de commande :

1. Exécuter :
```bash
curl -X POST http://localhost:4000/users/ -H "Content-Type: application/json" -d "{\"name\":\"Alice Dupont\",\"email\":\"alice.dupont@example.com\"}"
```

<img width="1117" height="80" alt="image" src="https://github.com/user-attachments/assets/03a50551-3199-4764-971f-d586f5855d4b" />


---

#### Pour afficher les utilisateurs :

##### - Avec Postman :

1. Exécuter :
```bash
GET http://localhost:4000/users/
```

##### - Depuis l'invite de commande :

1. Exécuter :
```bash
curl http://localhost:4000/users/
```

---

#### Pour l'afficher à l'aide d'un ID particulier : 

##### - Avec Postman :

1. Exécuter :
```bash
GET http://localhost:4000/users/<ID_UTILISATEUR>
```

##### - Depuis l'invite de commande :

1. Exécuter :
```bash
curl http://localhost:4000/users/<ID_UTILISATEUR>
```

---

#### Pour mettre à jour une information à l'aide d'un ID fourni : 

##### - Avec Postman :

1. Se rendre dans "Body" puis "raw" et choisir comme language JSON et modifier les valeurs directement
   
2. Ensuite, exéxuter : 
```bash
PUT http://localhost:4000/users/<ID_UTILISATEUR>
```

##### - Depuis l'invite de commande :

1. Exécuter : 
```bash
curl -X PUT http://localhost:4000/users/<ID_UTILISATEUR>\
-H "Content-Type: application/json" \
-d "{\"name\":\"<NOM_A_MODIF>\",\"email\":\"<EMAIL_A_MODIF>\"}"
```

---

#### Pour le supprimer :
  
##### - Avec Postman :

1. Exécuter :
```bash
DELETE http://localhost:4000/users/<ID_UTILISATEUR>
```

##### - Depuis l'invite de commande : 

1. Exécuter :
```
curl -X DELETE http://localhost:4000/users/<ID_UTILISATEUR>
```
