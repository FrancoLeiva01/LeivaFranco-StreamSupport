"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("productos", {
      product_id: {
        type: Sequelize.INTEGER,
        allownull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      product_name: {
        type: Sequelize.STRING,
        allownull: false,
      },

      price: {
        type: Sequelize.DECIMAL(10, 2),
        allownull: false,
      },

      id_category: {
        type: Sequelize.INTEGER,
        references: {
          model: "category",
          key: "id_category",
        },

        product_description: {
          type: Sequelize.STRING,
        },

        stock: Sequelize.STRING,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("productos");
  },
};
