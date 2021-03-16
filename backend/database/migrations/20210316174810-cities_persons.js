'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CitiesPersons', {
      cityId:{
        type:Sequelize.INTEGER,
        references:{model:'cities',key:'id'},
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
        allowNull:false
      },
      personId:{
        type:Sequelize.INTEGER,
        references:{model:'persons',key:'id'},
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
        allowNull:false
      },
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CitiesPersons');
  }
};