// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    Plain_Tshirt: {
        type: DataTypes.STRING
    },
    Running_Sneakers: {
        type: DataTypes.STRING
    },
    Branded_Baseball_Hat: {
        type: DataTypes.STRING
    },
    Top_40_Music_Complation_Vinyl_Record: {
        type: DataTypes.STRING
    },
    Cargo_Shorts: {
        type: DataTypes.STRING
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
