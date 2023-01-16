const Sequelize = require('sequelize');
const dotenv = require('dotenv');

const {
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_URL
} = process.env;

const db = new Sequelize(DB_URL, {
    define: {
        timestamps: false
    }
});

export default db;