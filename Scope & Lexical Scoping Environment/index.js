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

// ------------------------------------------------------------------------------------------------------------

// SCOPING IN THE JS(JAVASCRIPT)...

/**
1. Global Scope...
2. Block Scope / Local Scope...
3. Function Based Scope...

let and const variable declaration are block scope...
where var variable declaration is function based scope...
*/

// Global Scope -- it can be defined globally...

// let a = 10;

// const b = 20;

// var c = 30;

// console.log(a , b , c); // 10 20 30

// ------------------------------------------------------------------------------------------------------------

// Block Scope...

// here {} is a scope which is also known as block / local scope...

// {
//     let a = 10;

//     const b = 20;

//     var c = 30;

//     // console.log(a , b , c); // 10 20 30
// }

// console.log(a); // ReferenceError : a is not defined

// console.log(b); // ReferenceError : b is not defined

// console.log(c); // due to the hoisting it can be printed as 30 in the var varibale declaration...

// ------------------------------------------------------------------------------------------------------------

// let a = 10;

// const b = 20;

// var c = 30;

// console.log(a , b , c); // 10 20 30

// {
//     let a = 100;

//     const b = 200;

//     var c = 300;

//     console.log(a , b , c); // 100 200 300
// }

// console.log(a , b , c); // 10 20 300

// ------------------------------------------------------------------------------------------------------------

// Function based scope...

// let userName = 'Chirag';

// function greet()
// {
//     let userName = 'Ramesh';
    
//     console.log(`Hello , ${userName}!!`); // Grave-Accent / Back-Tick / Template-Literal...
// } 

// greet();

// ------------------------------------------------------------------------------------------------------------

// Nested Scope...

function one()
{
    const userName = 'Chirag';

    function two()
    {
        // const website = 'Youtube';

        console.log(userName);
    }

    // console.log(website);

    two();
}

one();