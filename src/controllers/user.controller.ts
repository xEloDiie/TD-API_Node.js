import { Request, Response } from "express";
import User from "../models/user.model";

/**
 * Contrôleur pour la route GET /users
 * Description : Renvoie la liste des utilisateurs depuis la base de données
 */
export const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll();
  res.json(users);
};

/**
 * Contrôleur pour la route GET /users/:id
 * Description : Renvoie un utilisateur spécifique
 */
export const getUserById = async (req: Request, res: Response) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });
  res.json(user);
};

/**
 * Contrôleur pour la route POST /users
 * Description : Ajoute un utilisateur dans la base
 */
export const addUser = async (req: Request, res: Response) => {
  const { name, email } = req.body; // Récupération des données envoyées dans le corps de la requête    
  if (!name || !email) {
    return res.status(400).json({ message: "Nom et email requis" });
  }

  try {
    const user = await User.create({ name, email });
    console.log("🛠 Utilisateur ajouté :", user.toJSON());
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * Contrôleur pour la route PUT /users/:id
 * Description : Met à jour un utilisateur
 */
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = await User.findByPk(id);
  if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });

  await user.update({ name, email });
  res.json({ message: "Utilisateur mis à jour", user });
};

/**
 * Contrôleur pour la route DELETE /users/:id
 * Description : Supprime un utilisateur
 */
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });

  await user.destroy();
  res.json({ message: "Utilisateur supprimé" });
};