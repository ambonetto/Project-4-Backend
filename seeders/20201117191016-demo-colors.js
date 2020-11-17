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
    "colors",
    [
      {
        color: "Black",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Black_colour.jpg"
      },
      {
        color: "White",
        image: "https://www.technistone.com/color-range/image-product/Prod%20Crystal%20Absolute%20White.jpg"
      },
      {
        color: "Pink",
        image: "https://images.fabric.com/images/1080/1080/AP-895.jpg"
      },
      {
        color: "Purple",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS03s0x43GvrT2XZ73Ztvca_58tPZMcoy2cw&usqp=CAU"
      },
      {
        color: "Grey",
        image: "https://media.tarkett-image.com/large/TH_25121916_25131916_25126916_25136916_001.jpg"
      },
      {
        color: "Lemonchiffon",
        image: "https://www.colorhexa.com/fffacd.png"
      },
      {
        color: "Blue",
        image: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/8/1/1375354802439/Blue---the-colour-008.jpg?width=700&quality=85&auto=format&fit=max&s=d8d0e02e14f045772be95f21c0a3dfcd"
      },
      {
        color: "Yellow",
        image: "https://i.ytimg.com/vi/R3unPcJDbCc/hqdefault.jpg"
      },
      {
        color: "Orange",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxDDt_D2KgiRI1Ph5Ch9ezKZfYI-iPHsKkQ&usqp=CAU"
      },
      {
        color: "Red",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX/AAAZ4gk3AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
      }
    ]
  )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('colors', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
