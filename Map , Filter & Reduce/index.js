console.log('\n----- MAP , FILTER & REDUCE -----\n');

// ------------------------------------------------------------------------------------------------------------------

//         0   1   2   3   4

// let arr = [5 , 9 , 3 , 7 , 6];

//         -5  -4  -3  -2  -1

// console.log(arr); // prints the five size / length of the array and it's elements...

// forEach methods / functions...

// callBack Function -- in the function/methods arguments passing an another function is a callback function...

// arr.forEach(function(ele , index)
// {
//     console.log(index , '-' , ele);
// });

// using arrow function -- in the one liner it can be written and so it can be return by default...

// arr.forEach((ele , index) => console.log(index , '-' , ele));

// ------------------------------------------------------------------------------------------------------------------

// let originalPrice = [563 , 789 , 145 , 120 , 453];

// let discountPrice = []

// for(ele of originalPrice)
// {
//     // discountPrice = ele * 0.1;

//     discountPrice.push(ele * 0.9);
// }

// console.log(originalPrice);

// console.log(discountPrice);

// ------------------------------------------------------------------------------------------------------------------

// map -- Immutable...

//         0      1     2     3     4

let arr = [145 , 789 , 369 , 230 , 500];

//          -5    -4    -3    -2    -1

// console.log(arr);

// let finalPrice = arr.map((ele , index) =>
// {
//     // return `${index} - ${ele}`;

//     return ele * 0.9; // discount is 10% -- 10/100 -- 0.1
// });

// console.log(finalPrice);

// forEach() methods / functions -- it can not be return the value...

// let discountPrice = []

// arr.forEach((ele) => 
// {
//     discountPrice.push(ele * 0.9);
// })

// console.log(discountPrice);

