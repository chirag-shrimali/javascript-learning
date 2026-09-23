console.log('\nASSIGNMENT - 4 || ARRAY & Methods!!\n');

// Section 1 - Basic Array Operations

/**

    1. Create and Display an Array

    Create an array containing the names of five fruits and display the complete array

*/

// five size array names as fruits and index value starts from 0 to 4...

//               0          1         2           3            4

// let fruits = ['Banana' , "Apple" , 'Cherry' , "Watermelon" , 'Mango'];

//               -5        -4         -3           -2            -1

// console.log(fruits); // prints the entire array...

// console.log(fruits[0]); // Banana

// console.log(fruits[3]); // Watermelon

// console.log(fruits[1]); // Apple

// console.log(fruits.at(-1)); // Mango

// console.log(fruits.at(-3)); // Cherry

// Prints the entire elements using loops...

// for(let i = 0 ; i < fruits.length ; i++)
// {
//     // console.log(i); // prints the index value...

//     console.log(fruits[i]); // prints the elements...
// }

// ------------------------------------------------------------------------------------------------------------------------

/**

    2. Add an Element Using push()


    Create the following array and use push() to add "JavaScript" at the end.

    Example:
    
    Input: ["HTML", "CSS"]
    Output: ["HTML", "CSS", "JavaScript"]

*/

// let arr = ["HTML", "CSS"];

// console.log(arr); // before pushing elements at the end...

// arr.push('JavaScript');

// console.log(arr); // after pushing elements at the end...

// ------------------------------------------------------------------------------------------------------------------------

/**

    3. Remove an Element Using pop()
    
    Remove the last element from the given array using pop().

    Example:

    Input: ["HTML", "CSS", "JavaScript"]
    Output: ["HTML", "CSS"]

*/

// let arr = ["HTML", "CSS", "JavaScript"];

// console.log(arr); // before removing the array using pop()...

// arr.pop();

// console.log(arr); // after removing the array using pop()...

// ------------------------------------------------------------------------------------------------------------------------

/**

    4. Remove the First Element Using shift()

    Remove the first element from the following array using shift().

    Example:
    
    Input: ["Red", "Blue", "Green"]
    Output: ["Blue", "Green"]

*/

// let colors = ["Red", "Blue", "Green"];

// console.log(colors); // before removing the elements from the beginning...

// colors.shift();

// console.log(colors); // after removing the elements from the beginning...

// ------------------------------------------------------------------------------------------------------------------------

/**

    5. Add an Element at the Beginning

    Use unshift() to add "HTML" at the beginning of the following array.
    
    Example:

    Input: ["CSS", "JavaScript"]
    Output: ["HTML", "CSS", "JavaScript"]

*/

// let arr = ["CSS", "JavaScript"];

// console.log(arr); // before adding the elements from the beginning...

// arr.unshift("HTML");

// console.log(arr); // after adding the elements from the beginning...

// ------------------------------------------------------------------------------------------------------------------------

/**

    6. Add Multiple Elements

    Create an array containing two programming languages and use push() to add two more languages to
    the array.

    Example:

    Input: ["HTML", "CSS"]

    After adding: "JavaScript" and "React"

    Output: ["HTML", "CSS", "JavaScript", "React"]

*/

// let arr = ["HTML", "CSS"];

// console.log(arr); // before adding the elements using push() at the end...

// arr.push("JavaScript");

// arr.push("React");

// console.log(arr); // after adding the elements using push() at the end...

// ------------------------------------------------------------------------------------------------------------------------

// Section 2 - splice() and slice()

/**

    7. Remove an Element Using splice()

    Remove "CSS" from the following array using splice().

    Example:

    Input: ["HTML", "CSS", "JavaScript", "React"]
    Output: ["HTML", "JavaScript", "React"]

*/




// ------------------------------------------------------------------------------------------------------------------------

/**

    8. Add an Element Using splice()

    Use splice() to add "CSS" between "HTML" and "JavaScript".

    Example:

    Input: ["HTML", "JavaScript"]
    Output: ["HTML", "CSS", "JavaScript"]

*/




// ------------------------------------------------------------------------------------------------------------------------

/**

    9. Replace an Array Element

    Use splice() to replace "Java" with "JavaScript".

    Example:

    Input: ["HTML", "CSS", "Java"]
    Output: ["HTML", "CSS", "JavaScript"]

*/




// ------------------------------------------------------------------------------------------------------------------------

/**

    10. Extract Part of an Array

    Use slice() to create a new array containing "CSS", "JavaScript", and "React".
    
    Example:

    Input: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
    Output: ["CSS", "JavaScript", "React"]

*/




// ------------------------------------------------------------------------------------------------------------------------

/**

    11. Create a Copy Using slice()

    Create an array of your choice and use slice() without any arguments to create a copy of that array.

*/



// ------------------------------------------------------------------------------------------------------------------------

// Section 3 - Searching in Arrays

/**

    12. Find the Index of an Element

    Use indexOf() to find the index of "JavaScript".

    Example:

    Input: ["HTML", "CSS", "JavaScript", "React"]

    Output: 2

    13. Find an Element Using indexOf()

    Create an array of programming languages and use indexOf() to find the position of "React".

*/

//            0       1         2          3

// let prog = ["HTML", "CSS", "JavaScript", "React"];

//            -4      -3        -2          -1

// console.log(prog);

// console.log(prog.indexOf('JavaScript')); // 2

// console.log(prog.indexOf('React')); // 3

// console.log(prog.indexOf('Hello')); // -1 -- if any string is not present in the array then it can be gives as -1...

// ------------------------------------------------------------------------------------------------------------------------

/**

    14. Find an Object Using find()

    Create an array of user objects containing name and age. Use find() to get the user whose name is "Rahul".

    Example:

    Input:

    [
    
        { name: "Rahul", age: 20 },
    
        { name: "Priya", age: 22 }
    ]

*/




// ------------------------------------------------------------------------------------------------------------------------

/**

    15. Find an Index Using findIndex()

    Using an array of user objects, use findIndex() to find the index of the user whose name is "Priya".

    Example:

    [
    
        { name: "Rahul", age: 20 },

        { name: "Priya", age: 22 }
    ]

*/




// ------------------------------------------------------------------------------------------------------------------------

// Section 4 - Other Array Methods

/**

    16. Flatten a Nested Array

    Use flat() to convert the nested array into a single-level array.

    Example:

    Input: [1, 2, [3, 4]]
    Output: [1, 2, 3, 4]

*/




// ------------------------------------------------------------------------------------------------------------------------

/**

    17. Flatten a Multi-Level Array

    Use flat() with an appropriate depth to flatten the following array completely.

    Example:

    Input: [1, [2, [3, 4]]]
    Output: [1, 2, 3, 4]

*/




// ------------------------------------------------------------------------------------------------------------------------

/**

    18. Display Every Element Using forEach()

    Create an array containing five colors and use forEach() to display every color.

*/

// create a five size array , index value starts from 0 to 4

//              0        1        2        3         4

// let colors = ['Blue' , "Red" , 'Green' , "White" , 'Black'];

//               -5      -4       -3        -2         -1

// console.log(colors); // prints the array of the colors...

// colors.forEach(function(ele , index){
//     console.log(ele , '-' , index);
// });

// colors.forEach((ele , index) => console.log(ele , '-' , index));

// ------------------------------------------------------------------------------------------------------------------------

/**

    19. Display Elements with Their Index

    Create an array of programming languages and use forEach() to display each element along with its index.

    Example 
    
    Output:

    0 HTML
    1 CSS
    2 JavaScript

*/

//            0        1          2

// let prog = ['HTML' , "CSS" , 'JavaScript'];

//            -3       -2         -1

// console.log(prog); // prints the array of the programming langauge...

// prog.forEach((ele , index) => console.log(index , ele));

// ------------------------------------------------------------------------------------------------------------------------

/**

    20. Update an Array Using Multiple Methods Perform the following operations on an array:

    1. Add "React" using push().

    2. Remove the first element using shift().

    3. Display the final array.

    Example:

    Input: ["HTML", "CSS", "JavaScript"]
    Final Output: ["CSS", "JavaScript", "React"]

*/

//           0       1          2

let arr = ["HTML", "CSS", "JavaScript"];

//           -3      -2         -1

console.log(arr); // prints the array...

arr.shift(); // removing the HTML elements from the start...

console.log(arr); // ['CSS' , 'JS'];

arr.push('React'); // adding the elements from the end...

console.log(arr);// ['CSS' , 'JS' , 'React'];