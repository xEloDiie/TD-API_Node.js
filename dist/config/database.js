"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite", // le fichier SQLite sera créé ici
    logging: false, // désactive les logs SQL
});
exports.default = sequelize;
