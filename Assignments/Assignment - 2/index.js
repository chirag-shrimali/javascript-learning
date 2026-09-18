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