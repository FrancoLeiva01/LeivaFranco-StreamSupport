'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DetailOrder.belongsTo(models.SaleOrder, {foreignKey: "idOrden"}),
      DetailOrder.belongsTo(models.Product, {foreignKey: "product_id"})
    }
  }
  DetailOrder.init({
    IdDetalle: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    idOrden: {
      type: DataTypes.INTEGER,
      references:{
        model: "saleorders",
        key: "id_order"
      }
    },

    product_id: {
      type: DataTypes.INTEGER,
      references:{
        model: "products",
        key: "product_id"
      }
    },

    cantidad: DataTypes.INTEGER,

    price: DataTypes.DECIMAL(6, 2),
  },
  {
    sequelize,
    modelName: 'DetailOrder',
  });
  return DetailOrder;
};

// CREATE table detallesDeVenta (
//   IdDetalle int auto_inCrement primary key,
//   idOrden INT NOT NULL,
//   product_id int NOT NULL, 
//   cantidad int not null,
//   price DECIMAL (10, 2) NOT NULL,
//   FOREIGN KEY (idOrden) REFERENCES ordenesDeVenta (idOrden),
//   FOREIGN KEY (product_id) REFERENCES productos (product_id)
//   );