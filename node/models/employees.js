import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const employees = db.define('Employees', {
    name: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    age: { 
        type: DataTypes.INTEGER, 
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false
    },
    timePosition: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default employees;
