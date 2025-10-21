// Importation du module Router d'Express pour gérer les routes
import { Router } from 'express';
// Importation des contrôleurs qui gèrent la logique métier pour les utilisateurs
import { getUsers, getUserById, addUser, updateUser, deleteUser } from '../controllers/user.controller';
// Création d'un routeur Express
const router = Router();
/**
* Route GET /users (+ ajout des autres)
* Description : Récupère la liste des utilisateurs
* Contrôleur associé : getUsers (défini dans user.controller.ts)
*/
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
/**
* Route POST /users
* Description : Ajoute un nouvel utilisateur
* Contrôleur associé : addUser (défini dans user.controller.ts)
*/
router.post("/", addUser);

// Exportation du routeur pour l'utiliser dans index.ts
export default router;