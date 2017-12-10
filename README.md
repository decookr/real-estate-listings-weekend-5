# Weekend Challenge 5 - Angular, Mongo, Mongoose Oh My!

Welcome to weekend challenge 5! This weekend, you will take on the role of an application developer for a real estate company. You will be working with data that we will be providing to you. After importing the data (instructions below), you should have two collections, *listings* and *rentals*. Inside of your collections, you will find information for properties that are either "for rent" or "for sale".

You job is to get this data onto the DOM. Use client side routing (`angular-route`) to display the rentals on one view and listings for purchase on another view. There should be two navigation links on the page allowing the user to switch between the two views. Additionally, let’s bring Bootstrap into the mix to make sure that the application looks as good as possible.

> NOTE: Deploying to Heroku is **not** required for this assignment. We will cover deployment with Mongo next week.

## Project Requirements

- [X] Create a Full Stack application from the ground up using Angular, Node, Express, and MongoDB
- [X] Work with the data set that we have provide for you
- [X] Account for the different data properties ("rent" versus "cost") and ensure that this is noted on the display of the information, by listing "For Rent" or "For Sale" based on which of the two properties that it has.
- [X] 2 routes, each with a controller and template file. One set for "For Rent" properties and another set for "For Sale" properties
- [X] Create an interface for adding additional rental or housing properties to the collection(s). You will need to give the user an option for either a Rent property, or a Sale property

## Importing the Provided Data File

There is no need to do any initial setup on the database. The following commands will create the **database**, **collections** and **documents** automatically! 

1. Download the *listingData.js* and *rentalData.js* files.
2. In Terminal, navigate to the folder where you downloaded the above file (or move it to where you want it).
3. Run this command in your Terminal: `mongoimport --db realestate --collection rentals --file rentalData.js`
4. Run this command in your Terminal: `mongoimport --db realestate --collection listings --file listingData.js`


## Hard Mode

- [X] Ability to delete an existing listings
- [X] Move all HTTP/Ajax requests to Angular Service(s)

## Pro Mode

- [ ] Ability to update an existing record using a pop up (modal). You will need to research libraries that support modals (e.g. [Sweet Alert](https://sweetalert.js.org/) or [ui-bootstrap](https://angular-ui.github.io/bootstrap/))
- [ ] Display the least expensive property featured at the top of the page.
- [ ] Ability to search or filter by various parameters (try doing this in Mongo instead of Angular)
