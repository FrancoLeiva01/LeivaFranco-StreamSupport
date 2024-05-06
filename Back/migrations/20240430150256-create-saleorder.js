'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SaleOrders', {

      idOrden : {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      orden_date: Sequelize.STRING,
  
      idUsuario: {
        type: Sequelize.INTEGER,
        references:{
          model: "usuarios",
          key: "idUsuario"
        },

        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },

        total_order: Sequelize.DECIMAL(6, 2),

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
    await queryInterface.dropTable('SaleOrders');
  }
};