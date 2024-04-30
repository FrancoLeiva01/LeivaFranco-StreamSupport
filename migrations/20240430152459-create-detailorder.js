'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DetailOrder', {
        IdDetalle: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
    
        idOrden: {
          type: Sequelize.INTEGER,
          references:{
            model: "saleorders",
            key: "idOrden"
        },

        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },
    
        product_id: {
          type: Sequelize.INTEGER,
          references:{
            model: "products",
            key: "product_id"
        },

        onUpdate: "CASCADE",
        onDelete: "SET NULL"

      },
        cantidad: Sequelize.INTEGER,
        price: Sequelize.DECIMAL(6, 2),

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DetailOrder');
  }
};