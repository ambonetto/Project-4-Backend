'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert (
    "Colors",
    [
      {
        color: "Black"
      },
      {
        color: "White"
      },
      {
        color: "Pink"
      },
      {
        color: "Purple"
      },
      {
        color: "Grey"
      },
      {
        color: "Lemonchiffon"
      },
      {
        color: "Blue"
      },
      {
        color: "Yellow"
      },
      {
        color: "Orange"
      }
    ]
  )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Colors', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
