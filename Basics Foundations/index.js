// Single - Line Comment...

/* 
    Multi - Line Comment...
*/

// , operator used to separate the two things...

// + used for concatenation...

// console.log("Hello , World!!");

// console.log(5 + 3);

// console.log(5 * 6);

// console.log("Js Founder Name is Brendan Eich...");

// console.log("Created in 1995.");

// console.log("Created by Netscape Communications.");

// console.log("4 * 5 =" , 4 * 5);

// Variables

// age --> variable name , 19 value , = assignment operator...

// age = 19;

// name = "Chirag";

// console.log(age);

// console.log(name);

// console.log(age , name);

/** 

    var , let and const used to  declare the variable...

    var age --> variable declaration

    = value --> initialization...

    var age = 19; // variable declaration and initialization at same time...

    in the var , re declaration and re-initialization(updation) are allowed...

    in the let , re-declaration(syntaxerror) are not allowed but updation(re-initialization) are allowed...

    in the const , re-declaration and updation(re-initialization) both are not allowed...
*/

// var age = 19;

// console.log(age); // 19

// var age = 25; // re - declaration...

// console.log(age); // 25

// age = 50; // re initialization / update

// console.log(age); // 50

// let a = 5;

// console.log(a); // 5

// let a = 6; // error

// a = 3;

// console.log(a); // 3

// const pi = 3.14;

// console.log(pi); // 3.14

// const pi = 5.69; // Error SyntaxError

// console.log(pi);

// pi = 5.96; // error --> TypeError...

// console.log(pi);

/**

    --- Variable Naming Rules ---

    Give meaningful name always...

    starts must be alphabets (capital , small) or _(underscore special symbols) or $(dollar special symbols)...

    then use digits too...

    special symbols except _ , $ not allowed...

    keyword also not allowed...

 */

/**

    -- Casing --

    camelCase

    PascalCase

    snake_case

    SCREAMING_SNAKE_CASE

 */

// Data Types...

/**
    
    -- data types --

    1. Primitive Data Type

    number

    string

    boolean

    null

    undefined

    Symbol

    Bigint

    2. Non Primitive Data Type

    function

    array

    object

 */

var age = 50;

console.log(typeof(age)); // number

console.log(typeof age); // number

var mark = 56.8;

console.log(typeof(mark)); // number

let name = "Rahul";

console.log(typeof(name)); // string

console.log(typeof name); // string

let bool = true;

console.log(typeof(bool)); // boolean

console.log(typeof bool); // boolean

// console.log("Hello , World");

// console.log("Hello" , "World");

// console.log("Hello" + " " + "World");

// console.log('Hello');

// console.log(`Hello , World!!`);

let userName = "Chirag"; 

let greetMessage = `Hello , ${userName}` // ` backtick / grave accent

console.log(greetMessage);

let namste = "Hello";

let world = `Hi , ${ console.log("Chirag") }`;

console.log(world);

let user;

console.log(user); // undefined

let pro = null;

console.log(null); // null

console.log(typeof pro);