'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SaleOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SaleOrder.belongsTo(models.User, {foreignKey: "idUsuario"})
    }
  }
  SaleOrder.init({
    idOrden : {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    orden_date: DataTypes.STRING,

    total_order: DataTypes.DECIMAL(6, 2),

    idUsuario: {
      type: DataTypes.INTEGER,
      references:{
        model: "usuarios",
        key: "idUsuario"
    },
  },
},
  {
    sequelize,
    modelName: 'SaleOrder',
  });
  return SaleOrder;
};


// CREATE table ordenesDeVenta (
//   idOrden int auto_increment primary key,
//   orden_date DATETIME NOT NULL,
//   total_order DECIMAL (10, 2) NOT NULL,
//   idUsuario INT,
//   FOREIGN KEY (idUsuario) REFERENCES usuarios (idUsuario)
//   );