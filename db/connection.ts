import { Sequelize } from 'sequelize';

const db = new Sequelize('node-type-mysql', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;