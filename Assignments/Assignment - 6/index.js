console.log('\n----- Map, Filter & Reduce -----\n');

// Section 1 – map() and Immutability 

/**

1. Convert Product Names to Uppercase

Create an array of product names and use map() to create a new array where every product name is converted to uppercase. 
*/

//                    0         1          2          3           4

// let productName = ['phone' , 'laptop' , 'tablet' , 'charger' , 'cable'];

//                   -5         -4         -3         -2          -1

// let res = productName.map((ele) => {
//     return ele.toUpperCase()
// });

// console.log(productName);

// console.log(res);

// ---------------------------------------------------------------------------------------------------------------------------------

/**
2. Add a Currency Symbol to Prices

Create an array of product prices and use map() to create a new array where each price is displayed with a ₹ symbol. 
*/

// let prices = [100, 250, 500];

// let res = prices.map((ele) => {
//     return '₹' + ele
// });

// console.log(prices);

// console.log(res);

// ---------------------------------------------------------------------------------------------------------------------------------

/**
3. Extract User Names

Create an array of user objects containing name and email. Use map() to create a new array containing only the names. 
*/

// let arrUserObj =
// [
//     { name : "Rahul" , email : "rahul@example.com" } , 

//     { name : "Priya" , email : "priya@example.com" } ,
// ];

// let res = arrUserObj.map((ele) => 
// {
//     return ele.name
// });

// console.log(arrUserObj);

// console.log(res);

// ---------------------------------------------------------------------------------------------------------------------------------

/**
4. Create Updated Product Prices

Create an array of product prices. Use map() to create a new array where every price is increased by 10%. Keep the original array unchanged. 
*/

// let productPrices = [100, 200, 300];

// let res = productPrices.map((ele) => {
//     return ele + (ele * 0.1);
// });

// console.log(productPrices);

// console.log(res);

// ---------------------------------------------------------------------------------------------------------------------------------

/**
5. Update Object Data Immutably

Create an array of user objects with name and role. Use map() and the spread operator to create a new 

array where the role of every user is changed to "developer" without modifying the original array.

Example: 

Input: 
[ 
    { name: "Rahul", role: "student" }, 
    
    { name: "Priya", role: "student" } 
] 

Output: 
[ 
    { name: "Rahul", role: "developer" }, 

    { name: "Priya", role: "developer" } 
] 
*/

// let arrUserObj =
// [ 
//     { name : "Rahul" , role : "student"} , 

//     { name : "Priya" , role : "student"} , 
// ];

// console.log(arrUserObj);

// let res = arrUserObj.map((ele) => {
//     return {...ele , role : 'developer'}
// });

// console.log(res);

// ---------------------------------------------------------------------------------------------------------------------------------

/**
6. Add a New Property Using map()

Create an array of product objects containing name and price. Use map() to create a new array where each product also has an inStock property with the value true. 

Example:

Input: 
[ 
    { name: "Laptop", price: 50000 }, 
    
    { name: "Mouse", price: 500 } 
]

Output: 
[ 
    { name: "Laptop", price: 50000, inStock: true }, 
    
    { name: "Mouse", price: 500, inStock: true } 
] 
*/

// let arrProductObj =
// [ 
//     { name: "Laptop", price: 50000 }, 
    
//     { name: "Mouse", price: 500 } 
// ];

// console.log(arrProductObj);

// let res = arrProductObj.map((ele) => {
//     return {...ele , instock : true}
// });

// console.log(res);

// ---------------------------------------------------------------------------------------------------------------------------------

// Section 2 – map() vs forEach() 

/**
7. Display Technologies Using forEach()

Create an array of frontend technologies and use forEach() to display every technology.
*/

// let frontEnd = ["HTML", "CSS", "JavaScript"];

// frontEnd.forEach(function(ele , index)
// {
//     console.log(index , '-' , ele);
// });

// frontEnd.forEach((ele) => console.log(ele));

// ---------------------------------------------------------------------------------------------------------------------------------

/**
8. Create a New Array Using map()

Using the same array of frontend technologies, use map() to create a new array where every technology 
is converted to uppercase. 
*/

// let frontEnd = ["html", "css", "javascript"];

// console.log(frontEnd);

// let res = frontEnd.map((ele) => {
//     return ele.toUpperCase();
// });

// console.log(res);

// ---------------------------------------------------------------------------------------------------------------------------------

/**
9. Format User Names Using map()

Create an array of names and use map() to add the text "User: " before every name. Display the new array. 
*/

// let names = ["Rahul", "Priya", "Aman"];

// console.log(names);

// let res = names.map((ele) => {
//     return "User: " + ele;
// });

// console.log(res);

// ---------------------------------------------------------------------------------------------------------------------------------

// Section 3 – filter()

/**
10. Filter Available Products

Create an array of product objects containing name and inStock. Use filter() to create a new array containing only the products that are in stock. 
*/

// let productObject =
// [ 
//     { name : "Laptop" , inStock : true } ,
    
//     { name : "Mouse" , inStock : false } ,
// ];

// console.log(productObject);

// let res = productObject.filter((ele) => {
//     return ele.inStock === true;
// });

// console.log(res);

// ---------------------------------------------------------------------------------------------------------------------------------

/**
11. Filter Users by Role

Create an array of user objects containing name and role. Use filter() to get all users whose role is "developer". 
*/

// let arrUserObj =
// [ 
//     { name : "Rahul" , role : "developer" } , 

//     { name : "Priya" , role : "student" } ,
// ];

// console.log(arrUserObj);

// let res = arrUserObj.filter((ele) => {
//     return ele.role === 'developer'.toLowerCase();
// });

// console.log(res);

// ---------------------------------------------------------------------------------------------------------------------------------

/**
12. Filter Expensive Products

Create an array of product objects containing name and price. Use filter() to get products with a price greater than 1000.
*/

// let arrProductObj =
// [ 
//     { name : "Mouse" , price : 500 } , 

//     { name : "Keyboard" , price : 1500 } , 
// ];

// console.log(arrProductObj);

// let res = arrProductObj.filter((ele) =>
// {
//     return ele.price > 1000;
// });

// console.log(res);

// ---------------------------------------------------------------------------------------------------------------------------------

/**
13. Filter Active Users

Create an array of users containing name and isActive. Use filter() to get only the active users.
*/

// let arrUserObj =
// [ 
//     { name : "Rahul" , isActive : true } , 

//     { name : "Priya" , isActive : false } , 
// ];

// console.log(arrUserObj);

// let res = arrUserObj.filter((ele) => {
//     return ele.isActive === true;
// });

// console.log(res);

// ---------------------------------------------------------------------------------------------------------------------------------

/**
14. Filter Gmail Addresses

Create an array of email addresses and use filter() to get only the emails that include "@gmail.com".
*/

// let emailAddress = ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"];

// console.log(emailAddress);

// let res = emailAddress.filter((ele) => {
//     return ele.endsWith('@gmail.com');
// });

// console.log(res);

// ---------------------------------------------------------------------------------------------------------------------------------

// Section 4 – reduce() and Accumulator Pattern

/**
15. Calculate the Total Cart Price

Create an array of product prices and use reduce() to calculate the total price of all items in the cart. 
*/

// let productPrices = [500, 1200, 300];

// console.log(productPrices);

// let res = productPrices.reduce((totalPrices , ele) => {
//     return totalPrices + ele; // totalPrices += ele // totalPrices = totalPrices + ele
// } , 0);

// console.log(res);

// 0 + 500 -- 500
// 500 + 1200 -- 1700
// 1700 + 300 -- 2000

// ---------------------------------------------------------------------------------------------------------------------------------

/**
16. Count Total Products

Create an array of product names and use reduce() with an accumulator to count the total number of products.
*/

// let productNames = ["Laptop", "Mouse", "Keyboard"];

// console.log(productNames);

// let res = productNames.reduce((totalNumber) => {
//     return totalNumber + 1;
// } , 0);

// console.log(res);

// ---------------------------------------------------------------------------------------------------------------------------------

/**
17. Calculate the Total Quantity

Create an array of cart item objects containing name and quantity. Use reduce() to calculate the total quantity of all items.
*/

// let arrCartObj =
// [ 
//     { name : "Laptop" , quantity : 1 } ,
    
//     { name : "Mouse" , quantity : 2 } ,
// ];

// console.log(arrCartObj);

// let res = arrCartObj.reduce((totalQuantity , ele) => {
//     return ele.quantity + totalQuantity;
// } , 0);

// console.log(res);

// ---------------------------------------------------------------------------------------------------------------------------------

/**
18. Calculate Total Order Amount

Create an array of order objects containing amount. Use reduce() to calculate the total order amount.
*/

// let arrOrderObj =
// [ 
//     { amount : 500 } ,

//     { amount : 1000 } ,
    
//     { amount: 750 } ,
// ];

// console.log(arrOrderObj);

// let res = arrOrderObj.reduce((totalOrder , ele) => {
//     return ele.amount + totalOrder;
// } , 0);

// console.log(res);

// ---------------------------------------------------------------------------------------------------------------------------------

/**
19. Create a Comma-Separated String

Create an array of frontend technologies and use reduce() to combine them into a single comma-separated string.

Example: 

Input: 
["HTML", "CSS", "JavaScript"]

Output: 
"HTML, CSS, JavaScript"
*/

// let frontEnd = ["HTML", "CSS", "JavaScript"];

// console.log(frontEnd);

// console.log(frontEnd.join(','));

// let res = frontEnd.reduce((acc , ele , index) => {
//     if(index === 0) return ele;

//     return acc + ', ' + ele; 
// } , "");

// console.log(res);

// ---------------------------------------------------------------------------------------------------------------------------------

/**
20. Calculate Final Cart Total

Create an array of cart items containing name, price, and quantity. Use reduce() to calculate the final 

cart total by multiplying the price and quantity of each item.
*/

// let arrCartObj =
// [ 
//     { name : "Mouse" , price : 500, quantity : 2 } ,
    
//     { name : "Keyboard" , price : 1000 , quantity : 1 } ,
// ];

// console.log(arrCartObj);

// let res = arrCartObj.reduce((totalCart , ele) => {
//     return (ele.price * ele.quantity) + totalCart
// } , 0);

// console.log(res);