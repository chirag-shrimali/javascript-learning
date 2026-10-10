console.log('\n----- SCOPE || LEXICAL SCOPING ENVIRONMENT -----\n');

// Global Scope...

// let a = 10;

// console.log(a); // 10

// // Block Scope...

// {
//     console.log(a); // 10
// }

// // Function Based Scope...

// function print()
// {
//     console.log(a);
// }

// print(); // 10

// ------------------------------------------------------------------------------------------------------------

// Block Scope...

// let userName = "Chirag"; // Global Scope access any where...

// console.log(userName); // Chirag

// {
//     let age = 19;

//     console.log(userName); // Chirag

//     console.log(age); // 19
// }

// console.log(userName); // Chirag

// console.log(age); // ReferenceError : age is not defined

// ------------------------------------------------------------------------------------------------------------

// let userName = 'Chirag'; // Global Scope...

// console.log(userName); // Chirag

// // Function Based Scope...

// function fun_name()
// {
//     let age = 19;

//     console.log(userName); // Chirag

//     console.log(age); // 19
// }

// fun_name(); // Chirag

// console.log(userName); // Chirag

// console.log(age); // ReferenceError : age is not defined

// ------------------------------------------------------------------------------------------------------------

/**
    let , const and var variable declaration...

    var --- redeclaration and reinitialization / updation both allowed...

    let -- redeclaration are not allowed but reinitialization / updation can be allowed...

    const -- redeclaration and reinitialization / updation both are not allowed...

    let and const are block scope means after block we can not be access the variable which we have to defined as let and const...

    var which can be function based scope which we have to access the variable after the function block end not possible...
*/

// let userName = 'Chirag'; // Global Scope Defined...

// console.log(userName); // Chirag

// console.log(age);

// {
//     // console.log(userName); // Chirag

//     var age = 190;

//     // console.log(age); // 19
// } // Block scope...

// console.log(age); // ReferenceError : age is not defined

// function printName()
// {
//     console.log(userName); // Chirag
    
//     var age = 19;

//     console.log(age); // 19
// }

// console.log(age);

// console.log(age); // ReferenceError : age is not defined

// printName(); // Calling the printName function and then it can be prints the contents of that function...