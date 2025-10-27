"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importation des modules nécessaires
const express_1 = __importDefault(require("express")); // Framework Express et types pour les requêtes/réponses
const dotenv = __importStar(require("dotenv")); // Permet de charger les variables d’environnement
const user_routes_1 = __importDefault(require("./routes/user.routes")); // Importe les routes utilisateurs
const database_1 = __importDefault(require("./config/database"));
// Charge les variables d'environnement depuis le fichier .env
dotenv.config();
// Création de l'application Express
const app = (0, express_1.default)();
// Définition du port du serveur (utilise celui de l'environnement ou 3000 par défaut)
const PORT = process.env.PORT || 3000;
// Middleware pour parser le JSON dans les requêtes entrantes
app.use(express_1.default.json());
// Route de test pour vérifier si le serveur fonctionne
app.get('/', (req, res) => {
    res.send('🚀 API Node.js avec TypeScript fonctionne !'); // Réponse envoyée au client
});
// Utilisation des routes utilisateurs définies dans "user.routes.ts"
app.use('/users', user_routes_1.default);
// Synchronisation de la base de données
database_1.default
    .sync()
    .then(() => {
    console.log("📁 Base de données SQLite synchronisée !");
    app.listen(PORT, () => console.log(`✅ Serveur démarré sur http://localhost:${PORT}`));
})
    .catch((err) => console.error("❌ Erreur de connexion à la base :", err));
