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

  await queryInterface.bulkInsert(
    "Shirts",
    [
      {
        brand: "Gildan",
        description: "Adult Unisex Heavy Cotton 5.3 oz. T-Shirt",
        type: "Short Sleeve",
        color: "Black",
        quantity: 50,
        size: "S",
        image: "https://jiffyshirts1.imgix.net/G500_51_z.png?ixlib=rb-0.3.4&auto=format&fit=fill&fill=solid&trim-color=FFFFFF&trim=color&trim-tol=8&w=307&h=480&q=80&dpr=2"
      },
      {
        brand: "Gildan",
        description: "Adult Unisex Heavy Cotton 5.3 oz. T-Shirt",
        type: "Short Sleeve",
        color: "Cobalt",
        quantity: 25,
        size: "L",
        image: "https://jiffyshirts1.imgix.net/58656544d6ccad.png?ixlib=rb-0.3.4&auto=format&fit=fill&fill=solid&trim-color=FFFFFF&trim=color&trim-tol=8&w=307&h=480&q=80&dpr=2"
      },
      {
        brand: "Gildan",
        description: "Adult Unisex Heavy Cotton 5.3 oz. T-Shirt",
        type: "Short Sleeve",
        color: "Corn Silk",
        quantity: 100,
        size: "M",
        image: "https://jiffyshirts.imgix.net/ebb2df8e87c84e.png?ixlib=rb-0.3.4&auto=format&fit=fill&fill=solid&trim-color=FFFFFF&trim=color&trim-tol=8&w=307&h=480&q=80&dpr=2"
      },
    ], {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Shirts', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
