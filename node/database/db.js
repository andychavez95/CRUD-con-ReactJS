import { Sequelize } from "sequelize";

const db = new Sequelize('MyCompany', 'usr-dev', 'Hackeame2024$$', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
