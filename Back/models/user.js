"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      user: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      id: false,
    }
  );
  User.removeAttribute("id");
  return User;
};

// CREATE TABLE usuarios (
//   idUsuario int auto_increment primary key,
//   user varchar(100) UNIQUE NOT NULL,
//   password varchar(50) NOT NULL,
//   email varchar(50) NOT NULL
//   );
