const { use } = require("react");

console.log('\n----- ARROW FUNCTION & THIS KEYWORD -----\n');

// function declaration / definition...

// here function is a reserved keyword
// greet() function name

// greet(); // Hello , World!! -- due to hoisting in the function declaration / definition we can be calling the function before it's initialization...

// function greet()
// {
//     console.log('Hello , World!!');
// }

// greet(); // Calling the Function...

// --------------------------------------------------------------------------------------------------------------------------

// function expression...

// print(); // ReferenceError : cannot access 'print' before it's initialization...

// let print = function()
// {
//     console.log('Hello!!');
// }

// print(); // Hello!!

// --------------------------------------------------------------------------------------------------------------------------

// Arrow Function...

// print(); // ReferenceError : cannot access 'print' before it's initialization...

// let print = () => 
// {
//     console.log('Hello');
// }

// print(); // Hello

// --------------------------------------------------------------------------------------------------------------------------

// let user =
// {
//     id : 21 ,

//     userName : 'Chirag' ,

//     age : 19 ,

//     marks : [99 , 97 , 87] ,

//     greet()
//     {
//         console.log(`Hello , ${this.userName}`);
//     } ,

//     printNo : function()
//     {
//         // console.log('Hello , World!!');

//         console.log(this); // this represents the current entities here like whole object
//     } ,
// };

// user.printNo(); // it can be same as the console.log(user)...

// console.log(user);

// --------------------------------------------------------------------------------------------------------------------------

// user.greet();

// console.log(user);

// user.userName = 'Ramesh'

// console.log(user);

// user.greet();

// --------------------------------------------------------------------------------------------------------------------------

// console.log(this); // Empty Object -- {} -- this in the browser shows window...

// --------------------------------------------------------------------------------------------------------------------------

// Normal / Regular Function(Function declaration / definition)...

// function greet()
// {
//     console.log(this); // window browser can be printed...
// }

// function greet()
// {
//     let userName = 'Chirag';

//     // this ket=yword only applied on the object not function or array...

//     console.log(this.userName); // undefined
// }

// greet();

// --------------------------------------------------------------------------------------------------------------------------

// Function Expression...

// let greet = function()
// {
//     console.log(this); // window browser can be printed...
// }

// let greet = function()
// {
//     let userName = 'Chirag';

//     console.log(this.userName); // undefined
// }

// greet();

// --------------------------------------------------------------------------------------------------------------------------

// Arrow Function...

// let print = () => 
// {
//     console.log(this); // window browser can be printed...
// };

// let print = () => 
// {
//     let userName = 'Chirag';

//     console.log(this.userName); // undefined
// };

// print();

// let addNum = (n1 , n2) =>
// {
//     return n1 + n2;
// }

// let result = addNum(1 , 2);

// console.log(result);

// --------------------------------------------------------------------------------------------------------------------------

// explicitly...

// let addNum = (n1 , n2) => n1 + n2;

// let addNum = (n1 , n2) => (n1 + n2);

// console.log(addNum(5 , 3)); // 8

// --------------------------------------------------------------------------------------------------------------------------