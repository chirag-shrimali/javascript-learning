console.log("\n----- Loops and Functions -----\n");

// ------------------------------------------------------------------------------------

//                             Section 1 - Basic Loops

// ------------------------------------------------------------------------------------

// Part A - for Loop

/**

1. Print Numbers

Write a program to print numbers from 1 to 10 using a for loop.

*/

// for(let i = 1 ; i <= 10 ; i++) // i++ // i += 1 // i = i + 1
// {
//     console.log(i);
// }

// ------------------------------------------------------------------------------------

/**

2. Print Even Numbers

Write a program to print all even numbers from 1 to 20

*/

// for(let i = 1 ; i <= 20 ; i++)
// {
//     // if(i % 2 == 0) console.log(i);

//     // if(i % 2 === 0) console.log(i);

//     if(i % 2 !== 0) continue;

//     console.log(i);
// }

// ------------------------------------------------------------------------------------

/**

3. Print Odd Numbers

Write a program to print all odd numbers from 1 to 20

*/

// for(let i = 1 ; i <= 20 ; i++)
// {
//     // if(i % 2 != 0) console.log(i);

//     // if(i % 2 !== 0) console.log(i);

//     if(i % 2 === 1) console.log(i);

//     // if(i % 2 === 0) continue;

//     // console.log(i);
// }

// ------------------------------------------------------------------------------------

/**

4. Reverse Counting

Write a program to print numbers from 10 to 1 using a loop

*/

// for(let i = 10 ; i >= 1 ; i--) // i-- // i = i - 1 // i -= 1
// {
//     console.log(i);
// }

// let no = 10;

// for(let i = 1 ; i <= 10 ; i++)
// {
//     console.log(no - i + 1);
// }

// ------------------------------------------------------------------------------------

/**

5. Sum of Numbers

Write a program to calculate the sum of numbers from 1 to 10.

*/

// let sum = 0;

// for(let i = 1 ; i <= 10 ; i++) // i++ // i += 1 // i = i + 1
// {
//     sum = sum + i; // sum += i;
// }

// console.log(`The Sum of First 10 Numbers are : ${sum}`);

// ------------------------------------------------------------------------------------

/**

6. Multiplication Table

Take a number and print its multiplication table up to 10.

*/

// let no = 7;

// for(let i = 1 ; i <= 10 ; i++)
// {
//     console.log(`${no} X ${i} = ${no * i}`);
// }

// ------------------------------------------------------------------------------------

// Part B - while Loop

/**

7. Basic while Loop

Write a program to print numbers from 1 to 10 using a while loop.

*/

// let i = 1;

// while(i <= 10)
// {
//     console.log(i);

//     i++; // i++ // i += 1 // i = i + 1
// }

/**

// ------------------------------------------------------------------------------------

8. Sum of Even Numbers

Write a program to calculate the sum of all even numbers from 1 to 20.

*/

// let i = 1;

// let sum = 0;

// while(i <= 20)
// {
//     if(i % 2 === 0) 
//     {
//         // console.log(i);
//         sum = sum + i;
//     }

//     i++; // i++ // i += 1 // i = i + 1
// }

// console.log(`The Sum of all even numbers from 1 to 20 are : ${sum}`);

// ------------------------------------------------------------------------------------

/**

9. Stop the Loop Using break

Write a program using a while loop to print numbers from 1 onwards, but stop the loop when the
number reaches 6 using the break statement.

Expected Output: 1 2 3 4 5


*/

// let i = 1;

// while(true)
// {
//     if(i === 6) break;

//     console.log(i);

//     i++; // i++ // i = i + 1 // i += 1
// }

// ------------------------------------------------------------------------------------

/**

10. Skip a Number

Print numbers from 1 to 10, but skip the number 5 using the continue statement.

*/

// let i = 1;

// while(i <= 10)
// {
//     if(i === 5)
//     {
//         continue;
//     }
    
//     console.log(i);

//     i++; // i += 1 // i++ // i = i + 1
// }

// ------------------------------------------------------------------------------------

// Section 2 - Functions

/**

11. Function with a Parameter

Create a function named greetUser(name) that takes a name as a parameter and displays a greeting
message.

Example:
Input: Rahul
Output: Hello, Rahul

*/

// function greetUser(name)
// {
//     console.log(`Hello, ${name}`);
// }

// greetUser("Rahul");

// ------------------------------------------------------------------------------------

/**

12. Add Two Numbers

Create a function that takes two numbers as parameters and returns their sum.

*/

// function add(a , b)
// {
//     return a + b;
// }

// console.log(add(4 , 9));

// ------------------------------------------------------------------------------------

/**

13. Even or Odd Function

Create a function that takes a number and checks whether it is even or odd.

*/

// function isEvenOdd(num)
// {
//     if(num % 2 === 0) console.log("Even!!");

//     else console.log("Odd!!");
// }

// isEvenOdd(4);

// isEvenOdd(7);

// ------------------------------------------------------------------------------------

/**

14. Square of a Number

Create a function that takes a number and returns its square.

*/

// function square(num)
// {
//     return num * num;
// }

// console.log(square(7));

// ------------------------------------------------------------------------------------

/**

15. Largest of Two Numbers

Create a function that takes two numbers and returns the greater number.

*/

// function maximumNum(a , b)
// {
//     if(a >= b) return a;

//     else return b;
// }

// console.log(maximumNum(7 , 6)); // 7
// console.log(maximumNum(96 , 98)); // 98
// console.log(maximumNum(74 , 60)); // 74

// ------------------------------------------------------------------------------------

/**

16. Calculate Total Price

Create a function named calculateTotal(price, quantity) using a function declaration. The function
should calculate and display the total price.

Example:
Input: price = 100, quantity = 3
Output: Total Price: 300

*/

// function calculateTotal(price, quantity)
// {
//     let totalPrice = price * quantity;

//     return `Total Price : ${totalPrice}`;
// }

// console.log(calculateTotal(100 , 3));

// ------------------------------------------------------------------------------------

// Section 3 - Functions with Loops

/**

17. Print Numbers Using a Function

Create a function printNumbers(n) that prints numbers from 1 to n using a loop.

Example:
Input: 5
Output: 1 2 3 4 5

*/

// function printNumbers(n)
// {
//     for(let i = 1 ; i <= n ; i++)
//     {
//         console.log(i);
//     }
// }

// printNumbers(5);

// ------------------------------------------------------------------------------------

/**

18. Multiplication Table Function

Create a function printTable(num) that prints the multiplication table of the given number.

*/

// let printTable = num =>
// {
//     for(let i = 1 ; i <= 10 ; i++) // i++ // i += 1 // i = i + 1
//     {
//         console.log(`${num} X ${i} = ${num * i}`);
//     }
// }

// printTable(7);

// ------------------------------------------------------------------------------------

/**

19. Sum from 1 to N

Create a function sumNumbers(n) that calculates and returns the sum of numbers from 1 to n.

Example:
Input: 5
Output: 15

*/

let sumNumbers = function(n)
{
    let sum = 0;

    console.log(`Input : ${n}`);

    for(let i = 1 ; i <= n ; i++) // i++ // i += 1 // i = i + 1
    {
        // console.log(i);

        sum = sum + i;
    }

    console.log(`Output : ${sum}`);
}

sumNumbers(10);