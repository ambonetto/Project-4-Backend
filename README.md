# Project 4: Your Capstone Project

## Title: JB Designs: Screen Printing

## Description: 
JB Designs is an online application to bring to life custom screen printing designs. To start, create an account and begin brainstorming ideas. Once a design is choosen, place an order, and watch as your design comes to life. 

## Table of contents
* Wireframe
* Flow Diagram
* Entity Relationship Diagram
* User Stories
* App
* Features
* Future Additions
* Languages Used
* Packages/Libraries
* Deployment
* Contribute
* Issue and Resolutions
* Submit a Ticket
* Resources

## Wireframe

* All Designs Show Page: <br />
![alt text](https://github.com/ambonetto/Project-4-Backend/blob/master/Images/AllDesigns.png)

* See Images Folder: AllDesigns.png

* All Shirts Show Page: <br />
![alt text](https://github.com/ambonetto/Project-4-Backend/blob/master/Images/AllShirts.png)

* See Images Folder: AllShirts.png

* Shirts Show Page: <br />
![alt text](https://github.com/ambonetto/Project-4-Backend/blob/master/Images/ShirtShowpage.png)

* See Images Folder: ShirtsShowpage.png

## Flow Diagram

![alt text](https://github.com/ambonetto/Project-4-Backend/blob/master/Images/FlowDiagram.png)

* See Images Folder: FlowDiagram.png

## Entity Relationship Diagram (ERD)

* ERD:

![alt text](https://github.com/ambonetto/Project-4-Backend/blob/master/Images/ERD.png)

* See Images Folder: ERD.png

## User Stories

* As an unregistered user, I want to sign up, so that I can order shirts.

* As an unregistered user, I want to see designs, so that I can decide to place an order.

* As a registerered user, I want to see my orders, so that I can reorder.

* As a registered user, I want to like and comment designs, so that I can provide feedback.

* As a registered user, I want to place an order, so that I can order custom shirts.

## App

- **App:** http://jb-designs.surge.sh/

## Features

* Login, Sign Up, and Sign Out of App
* View, Update, and Delete Profile
* View Designs
* Admin access to Add Design and/or Delete Design
* Place an Order
    * Upload Design or Select a Design
    * Select Shirt Type
    * Select Shirt Color
    * Select Shirt Size and Quantity
    * Review and Place Order
* About Designer Page
* Email Designer
* Display Designer's location
* About Screen Printing

## Future Additions

* Pass order information to backend
* Pass order information to be displayed before submitting order
* Comment and/or Rate a design
* Review Orders Placed
* Reorder from Orders Placed
* Admin access display's all orders
* Admin access can exoprt all orders
* Set up payment process
* Display prices
* Display status bar for place order steps

## Languages Used

* JavaScript

## Packages/Libraries

* Express
* EJS
* Method-Override
* Sequelize
* PG (Postgres)
* Dotenv
* Bcryptjs
* JSONwebtoken
* Cors
* Body-Parser
* Sequelize-CLI

## Deployment

* Heroku

## Contribute

**Source Code:** https://github.com/ambonetto/Project-4-Backend

## Issue and Resolutions

### Issue
* Deleting a design from the design list
    * Frontend capturing designId however backend designId displaying undefined

### Resolution
* Change the route for delete
    * Result: Backend designId same as frontend designId value
    * Cause: Allowing for the backend to pass the designId through the route to the controller to delete the design
        * Code Used: (In design.js Routes)
    ```
        router.delete('/:designId', ctrl.design.deleteDesign);
    ```

### Issue
* Sequelize Migrations and Seeders
    * Issue: CORS Errors
    * Unable to load backend database information

### Resolution
* Changing migration and seeders to lowercase, snakecase, and camalcase
    * Result: Information loading with no CORS Error
    * Cause: Heroku database connecting with Sequelize
    * Example: createdAt -> created_at
        * Code Used: (In migrations designs)
            * Note: both seeder and migration files need to use lowercase, snakecase, and camalcase
    ``` 
        'use strict';
        module.exports = {
        up: async (queryInterface, Sequelize) => {
            await queryInterface.createTable('designs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.STRING
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date()
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date()
            }
            });
        },
        down: async (queryInterface, Sequelize) => {
            await queryInterface.dropTable('designs');
        }
        };
    ```

## Submit a Ticket

* If a problem occurs with the Drink Mixer or have suggestions for updates, please add them here: 

https://github.com/ambonetto/Project-4-Backend/issues

**Note:** Responses can take up to 48 hours. Thank you for shopping! 

## Resources

* Contributors:
    - Andrea Bonetto
* Websites:
    - **w3schools** https://www.w3schools.com/
    - **MDN web docs** https://developer.mozilla.org/en-US/
    - **stackoverflow** https://stackoverflow.com/
    - **GeeksforGeeks** https://www.geeksforgeeks.org
    - **GitHub Docs** https://docs.github.com/en
    - **Heroku** https://www.heroku.com/
    - **Sequelize** https://sequelize.org/master/
    - **Lucidchart: Draw ERD Diagram** https://www.lucidchart.com/pages/er-diagrams
* Instructors: 
    - Casey R Harding
    - David Magbee
    - Isha Arora
    - Leah Mattern
* SEI Classmates