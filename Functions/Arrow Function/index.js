// console.log("\nArrow Functions");

// Function Declarations / Definations

// console.log(greet("Chirag"));

// function greet(name)
// {
//     return `Hello , ${name}!!`;
// }

// console.log(greet("Chirag")); // Hello , Chirag!!

// Function Expression

// console.log(greet("Chirag")); // Reference Error

// let greet = function(name)
// {
//     return `Hello , ${name}!!`;
// }

// let ans = greet("Chirag");

// console.log(ans);

// console.log(greet("Chirag"));

// ----------------------------------------------------------------------------------------------------------------------

/**
    Arrow Function

    Syntax

    let / const / var name = () =>
    {
        
    }
 */

let add = (n1 , n2) => 
{
    return n1 + n2;
}
    
console.log(add(5 , 7));

// ----------------------------------------------------------------------------------------------------------------------

// let sub = n1 => n1

// console.log(sub(2));

// ----------------------------------------------------------------------------------------------------------------------

// let mul = (n1 , n2) => n1 * n2;

// console.log(mul(5 , 4));