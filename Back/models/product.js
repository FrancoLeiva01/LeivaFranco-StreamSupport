"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      product_id: {
        type: DataTypes.INTEGER,
        allownull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      product_name: {
        type: DataTypes.STRING,
        allownull: false,
      },

      price: {
        type: DataTypes.DECIMAL(10, 2),
        allownull: false,
      },

      id_category: {
        type: DataTypes.INTEGER,
        references: {
          model: "category",
          key: "id_category",
        },
      },

      product_description: {
        type: DataTypes.STRING,
      },

      stock: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};

// CREATE TABLE productos (
//   product_id INT AUTO_INCREMENT PRIMARY KEY,
//   product_name VARCHAR(100) NOT NULL,
//   product_description TEXT,
//   price DECIMAL (10, 2) NOT NULL,
//   stock INT NOT NULL
//   );
