/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */






/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

let products = [ // Declares an array of products 

	{
		name: 'cherry', //Declares an object named cherry
		price: 6.0,
		quantity: 0,
		productId: 1,
		image: './images/cherry.jpg',
	},

	{
		name: 'orange', // Declares an object named  orange 
		price: 10.0,
		quantity: 0,
		productId: 2,
		image: './images/orange.jpg',
	},

	{
		name: 'strawberry', //Declares an object named strawberry
		price: 20.0,
		quantity: 0,
		productId: 3,
		image: './images/strawberry.jpg',
	},

];


/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

let cart = []; //Declares an empty cart  Array


/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function getProductById(productId) {  // This function will be used to create a helper function

	for (let i = 0; i < products.length; i++) {

		if (products[i].productId === productId) {

			return products[i];

		}

	}

	return null; // Product not found
}


function addProductToCart(productId) { //Declares a function that will add products to the cart using product Id as an argument.

	let product = getProductById(productId); // Helper Function to check for Product Id 

	product.quantity += 1; // Adds a quantity of 1 to the chosen object 

	if (!cart.includes(product)) { // Checks to see if the object is not in cart 

		cart.push(product); // product is pushed to the cart if the previous condition returns true 

	}

}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) { //Declares a function that will increase product quantity to the cart using product Id as an argument.

	let product = getProductById(productId); // Helper Function to check for Product Id 

	product.quantity += 1; // Adds a quantity of 1 to the chosen object 

}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) { //Declares a function that will decrease product quantity to the cart using product Id as an argument.

	let product = getProductById(productId); // Helper Function to check for Product Id 

	product.quantity = product.quantity - 1 // Adds a quantity of 1 to the chosen object

	if (product.quantity === 0) // Checks if product quantity eq 0

		cart.pop(); //removes product from cart 

}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) { //Declares a function that will decrease product quantity to the cart using product Id as an argument

	cart.forEach(function(product) { //Runs the function for each object in the array

		let index = cart.indexOf(product); //Checks for a product in cart  

		if (productId === product.productId) { // compares product to an Id

			product.quantity = 0; //if product is found the quantity is set to 0

			if (index > -1) { // checks for product with an index of 0 or more 

				cart.splice(index, 1); //if product is found it is remove from the cart 

			}

		}

	})

}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

function cartTotal() { //Declares a function that will get the cart total

	let total = 0; // sets the total variable to 0

	cart.forEach(function(product) { // runs the function for each product in cart 

		total += product.price * product.quantity // sets the total to equal price of product times there quantity

	});

	return total // returns the total variable 

}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() { // funtion is declared for an empty array 

	cart = [];

}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
let totalAmountPaid = 0; // sets totalAmountPaid variable to 0

function pay(amount) { // Declares a function called pay with a parameter of amount

	let cartDifference = 0;// sets cartDifference variable to 0

	let cartTotal = 0; //  sets cartTotal variable to 0

	cart.forEach(function(product) { //runs function for each item in cart 

		cartTotal += product.price * product.quantity; // sets the value of cartTotal

	});

	totalAmountPaid += amount + 0; //Defines Total Amount Paid 

	cartDifference += totalAmountPaid - cartTotal; //Defines cart balance after money given

	if (cartDifference >= 0) { //Defines condition if exact or extra money is gi

		return cartDifference;

	}

	if (cartDifference < 0) // Defines conditon if not enough money is given

		return cartDifference;

}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
	products,
	cart,
	addProductToCart,
	increaseQuantity,
	decreaseQuantity,
	removeProductFromCart,
	cartTotal,
	pay,
	emptyCart,

}

/* Uncomment the following line if completing the currency converter bonus */
// currency
