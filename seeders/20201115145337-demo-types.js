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
      "types",
      [
        {
          type: "Long Sleeve",
          image: "https://jiffyshirts.imgix.net/7e438a72a503ef.jpg?ixlib=rb-0.3.4&auto=format&fit=fill&fill=solid&trim-color=FFFFFF&trim=color&trim-tol=8&w=307&h=480&q=80&dpr=2"
        },
        {
          type: "Short Sleeve",
          image: "https://jiffyshirts1.imgix.net/b4a90b6068c2d2.png?ixlib=rb-0.3.4&auto=format&fit=fill&fill=solid&trim-color=FFFFFF&trim=color&trim-tol=8&w=307&h=480&q=80&dpr=2"
        },
        {
          type: "Sweatshirt",
          image: "https://jiffyshirts.imgix.net/8cd2483b2058cd.jpg?ixlib=rb-0.3.4&auto=format&fit=fill&fill=solid&trim-color=FFFFFF&trim=color&trim-tol=8&w=307&h=480&q=80&dpr=2"
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('types', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
