"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.addUser = exports.getUserById = exports.getUsers = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
/**
 * Contrôleur pour la route GET /users
 * Description : Renvoie la liste des utilisateurs depuis la base de données
 */
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.default.findAll();
    res.json(users);
});
exports.getUsers = getUsers;
/**
 * Contrôleur pour la route GET /users/:id
 * Description : Renvoie un utilisateur spécifique
 */
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findByPk(req.params.id);
    if (!user)
        return res.status(404).json({ message: "Utilisateur non trouvé" });
    res.json(user);
});
exports.getUserById = getUserById;
/**
 * Contrôleur pour la route POST /users
 * Description : Ajoute un utilisateur dans la base
 */
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body; // Récupération des données envoyées dans le corps de la requête    
    if (!name || !email) {
        return res.status(400).json({ message: "Nom et email requis" });
    }
    try {
        const user = yield user_model_1.default.create({ name, email });
        console.log("🛠 Utilisateur ajouté :", user.toJSON());
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.addUser = addUser;
/**
 * Contrôleur pour la route PUT /users/:id
 * Description : Met à jour un utilisateur
 */
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = yield user_model_1.default.findByPk(id);
    if (!user)
        return res.status(404).json({ message: "Utilisateur non trouvé" });
    yield user.update({ name, email });
    res.json({ message: "Utilisateur mis à jour", user });
});
exports.updateUser = updateUser;
/**
 * Contrôleur pour la route DELETE /users/:id
 * Description : Supprime un utilisateur
 */
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_model_1.default.findByPk(id);
    if (!user)
        return res.status(404).json({ message: "Utilisateur non trouvé" });
    yield user.destroy();
    res.json({ message: "Utilisateur supprimé" });
});
exports.deleteUser = deleteUser;
