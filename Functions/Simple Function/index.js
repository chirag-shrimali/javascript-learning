// console.log("Functions in JavaScript");

/**
    keyword
    function function_name() // parameter / formal argument / variable
    {
        // function block code / body / work
    }

    // argument / actual parameter / value
    funtion_name(); // calling the function
 */

// ----------------------------------------------------------------------------------------------------------------------

// 1. No Return Type No Argument

// function greet()
// {
//     console.log("Hello , World!!");
// }

// greet();

// ----------------------------------------------------------------------------------------------------------------------

// 2. No Return Type With Argument

// function greet(name , greetMessage)
// {
//     console.log(`${greetMessage} , ${name}`);
// }

// greet("Chirag" , "Hello");

// greet("Ramesh" , "Hii");

// greet("Suresh" , "Namaste");

// ----------------------------------------------------------------------------------------------------------------------

// 3. With Return Type No Argument

// function greet()
// {
//     let a = 5 , b = 8;

//     return a + b;
// }

// console.log("Addition :" , greet());

// ----------------------------------------------------------------------------------------------------------------------

// 4. With Return Type With Argument

// function greet(name)
// {
//     return `Hello , ${name}`;
// }

// console.log(greet("Chirag"));

// ----------------------------------------------------------------------------------------------------------------------

// function totalMarks(name , math , chem , phy) // variable / formal parameter / parameter
// {
//     let total = math + chem + phy;

//     let per = (total / 300) * 100;

//     let avg = total / 3;

//     console.log(`\nName : ${name}\nTotal : ${total}\nPercentage : ${per}\nAverage : ${avg}`);
// }

// totalMarks("Chirag" , 99 , 97 , 87); // value / actual parameter / argument

// totalMarks("Ramesh" , 56 , 89 , 78);

// ----------------------------------------------------------------------------------------------------------------------

// function calculator(n1 , n2 , op)
// {
//     switch(op)
//     {
//         case "+" :

//                     console.log(`Addition : ${n1 + n2}`);
//                     break;

//         case "-" :

//                     console.log(`Subtraction : ${n1 - n2}`);
//                     break;

//         case "*" :

//                     console.log(`Multiplication : ${n1 * n2}`);
//                     break;

//         case "/" :

//                     console.log(`Division : ${n1 / n2}`);
//                     break;

//         case "%" :

//                     console.log(`Modulus : ${n1 % n2}`);
//                     break;

//         case "**" :

//                     console.log(`Power : ${n1 ** n2}`);
//                     break;

//         default :

//                     console.log("Invalid Choice Of Selection!!");
//     }
// }

// calculator(7 , 3 , "+"); // 10
// calculator(7 , 3 , "-"); // 4
// calculator(7 , 3 , "*"); // 21
// calculator(7 , 3 , "/"); // 2.__
// calculator(7 , 3 , "%"); // 1
// calculator(7 , 3 , "**"); // 343
// calculator(7 , 3 , ""); // Invalid Choice Of Selection!!

// ----------------------------------------------------------------------------------------------------------------------

// Default Parameter...

// function greet(greetMessage = "Namaste" , name = "Chirag") // default parameter
// {
//     console.log(`${greetMessage} , ${name}!!`);
// }

// greet("Hello");

// greet();

// ----------------------------------------------------------------------------------------------------------------------

// function totalMarks(math , chem , phy) // variable / formal parameter / parameter
// {
//     let total = math + chem + phy;

//     return total;

//     // let per = (total / 300) * 100;

//     // let avg = total / 3;

//     // console.log(`\nName : ${name}\nTotal : ${total}\nPercentage : ${per}\nAverage : ${avg}`);
// }

// function percentage(name)
// {
//     let total = totalMarks(99 , 97 , 87); // value / actual parameter / argument

//     let per = (total / 300) * 100;

//     console.log(`\nName : ${name}\nTotalMarks : ${total}\nPercentage : ${per}%`);
// }

// percentage("Chirag");

// // totalMarks("Ramesh" , 56 , 89 , 78);

// ----------------------------------------------------------------------------------------------------------------------

// Function Declaration / Defination

// function add(n1 , n2)
// {
//     return n1 + n2;
// }

// console.log(add(4 , 7)); // 11

// ----------------------------------------------------------------------------------------------------------------------

/**
    Function Expression...
    
    Syntax
    
    keyword(let , const , var) name = function()
    {

    }
 */

let add = function(n1 , n2)
{
    return n1 + n2;
}

console.log(add(4 , 7)); // 11