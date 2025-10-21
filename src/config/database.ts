import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite", // le fichier SQLite sera créé ici
  logging: false, // désactive les logs SQL
});

export default sequelize;