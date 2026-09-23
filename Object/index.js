// Object is a non-primitive data type...
// Object is a collection of related properties or methods...
// Object is a collection of keys/values...

console.log("\n----- Object & their Methods -----\n");

// let obj = {};

// console.log(obj); // empty object

// console.log(typeof obj); // object

// ----------------------------------------------------------------------------------------------------------

// let obj = {id : 1 , salary : 25000 , userName : "Chirag"};

// console.log(obj.id); // 1
// console.log(obj.salary); // 25000
// console.log(obj.userName); // Chirag

// ----------------------------------------------------------------------------------------------------------

// let products = {

//     iPhone : {
//         id : 1 ,
//         price : 25000 ,
//         quantity : 20 ,
//         isAvailable : true ,
//         description : "Expensive & Luxary" ,
//     } ,

//     samsung : {
//         id : 2 ,
//         price : 20000 ,
//         quantity : 10 ,
//         isAvailable : false ,
//         description : "Good & Cheap" ,
//     } ,

//     oppo : {
//         id : 3 ,
//         price : 15000 ,
//         quantity : 15 ,
//         isAvailable : true ,
//         description : "Nice" ,
//     } ,
// };

// console.log(products); // prints the objects of the products...

// console.log(products.oppo); // prints the oppo objects...

// console.log(products.samsung.isAvailable); // false
// console.log(products.iPhone.price); // 25000
// console.log(products.oppo.quantity); // 15
// console.log(products.iPhone.id); // 1
// console.log(products.samsung.description); // Good & Cheap

// console.log(products['oppo']);

// console.log(products['samsung']['price']);

// console.log(products["iPhone"].quantity);

// ----------------------------------------------------------------------------------------------------------

// let obj = {
//     greetMessage : function(name)
//     {
//         console.log(`Hello , ${name}!!`); // back-tick // grave-accent // template literal...
//         // return `Hello , ${name}!!`;
//     } ,

//     printMessage(name , id)
//     {
//         console.log(`Hello , ${name} ${id}!!!!`);
//     }
// }

// console.log(obj.greetMessage("Chirag"));

// obj.greetMessage("Chirag");

// obj.printMessage("Chirag" , 7);

// obj.greetMessage("Ramesh");

// ----------------------------------------------------------------------------------------------------------

// let obj = {
//     id : 3 ,

//     proName : "iphone" ,

//     printProd : function()
//     {
//         // console.log("samsung");

//         console.log(this.proName);
//     } ,

//     printPrice(price)
//     {
//         return price;
//     } ,

//     hello()
//     {
//         console.log(this.id);
//     }
// };

// console.log(obj);

// obj.hello(); // 3

// obj.printProd(); // call the function

// let price = obj.printPrice(25000);

// console.log(price);

// obj.printProd();

// console.log(obj.proName);

// obj.printProd();

// ----------------------------------------------------------------------------------------------------------

let obj = {
    name : "Chirag" ,

    id : 21 ,

    address : 'Ahmedabad' ,

    isMarried : false ,

    age : 19 ,

    pro : {
        name : "iPhone" ,

        price : 15000 ,
    } ,
};

// console.log(obj);

// console.log(Object.keys(obj)); // prints the object keys

// console.log(Object.values(obj)); // prints the object values

console.log(Object.entries(obj));