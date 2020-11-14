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
     "Designs",
     [
       {
         name: "Fall Design",
         image: "https://raw.githubusercontent.com/ambonetto/Project-4-Frontend/master/Images/Fall.jpg?_sm_au_=iVVzMk7320SWq3tQL321jK0f1JH33"
       }, 
       {
         name: "Party",
         image: "https://raw.githubusercontent.com/ambonetto/Project-4-Frontend/master/Images/Party.jpg?_sm_au_=iVVzMk7320SWq3tQL321jK0f1JH33"
       },
       {
         name: "Dinosaur",
         image: "https://raw.githubusercontent.com/ambonetto/Project-4-Frontend/master/Images/Dinosaur.jpg?_sm_au_=iVVzMk7320SWq3tQL321jK0f1JH33"
       }
     ]
   )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Designs', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
