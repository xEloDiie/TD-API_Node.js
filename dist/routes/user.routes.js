"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importation du module Router d'Express pour gérer les routes
const express_1 = require("express");
// Importation des contrôleurs qui gèrent la logique métier pour les utilisateurs
const user_controller_1 = require("../controllers/user.controller");
// Création d'un routeur Express
const router = (0, express_1.Router)();
/**
* Route GET /users (+ ajout des autres)
* Description : Récupère la liste des utilisateurs
* Contrôleur associé : getUsers (défini dans user.controller.ts)
*/
router.get("/", user_controller_1.getUsers);
router.get("/:id", user_controller_1.getUserById);
router.put("/:id", user_controller_1.updateUser);
router.delete("/:id", user_controller_1.deleteUser);
/**
* Route POST /users
* Description : Ajoute un nouvel utilisateur
* Contrôleur associé : addUser (défini dans user.controller.ts)
*/
router.post("/", user_controller_1.addUser);
// Exportation du routeur pour l'utiliser dans index.ts
exports.default = router;
