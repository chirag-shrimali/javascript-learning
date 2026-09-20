// console.log("\n----- ARRAY & ARRAY METHODS -----\n");

// Array is a non-primitive data type which can be used to store the sequence of the ordered collection of the data...

// let arr = [];

// console.log(arr); // [] // empty array with truthy value...

// --------------------------------------------------------------------------------------------------

//            0           1           2          3         4  

// let arr = ["Chirag" , "Shrimali" , "Ramesh" , "Suresh" , "Paresh"]; // 5 size array index value starts with 0 to 4...

//            -5         -4           -3         -2         -1

// console.log(arr);

// console.log(arr[2]); // Ramesh

// console.log(arr[0]); // Chirag

// console.log(arr[5]); // undefined

// console.log(arr.length); // 5

// console.log(arr[arr.length - 1]); // Paresh

// console.log(arr.at(4)); // Paresh

// console.log(arr.at(2)); // Ramesh

// console.log(arr.at(5)); // undefined

// console.log(arr.at(-5)); // Chirag

// console.log(arr.at(-6)); // undefined

// console.log(arr);

// for(let i = 0 ; i < arr.length ; i++)
// {
//     console.log(arr[i]);
// }

// --------------------------------------------------------------------------------------------------

// let nestedArr = [

// // 0    -3
// //           0      1        2
// //           -1     -2       -3
//             [1 , "Chirag" , 99] , 

// // 1     -2
// //           0      1        2
// //           -1     -2       -3
//             [2 , "Ramesh" , 97] , 

// // 2     -1
// //           0      1        2
// //           -1     -2       -3
//             [3 , "Suresh" , 90]
//     ];

// console.log(nestedArr); // print the entire nested array...

// console.log(nestedArr[0]); // [1 , 'Chirag' , 99]

// console.log(nestedArr[2]); // [3 , 'Suresh' , 90]

// console.log(nestedArr.at(-2)); // [2 , 'Ramesh' , 97]

// console.log(nestedArr[3]); // undefined

// console.log(nestedArr.at(-4)); // undefined

// console.log(nestedArr[1][2]); // 97

// console.log(nestedArr[2][3]); // undefined

// console.log(nestedArr[0][0]); // 1

// console.log(nestedArr[1].at(-3)); // 2

// console.log(nestedArr[2].at(-2)); // Suresh

// console.log(nestedArr[0].at(-1)); // 99

// for(let i = 0 ; i < nestedArr.length ; i++)
// {
//     // console.log(nestedArr[i][1]);

//     // console.log(nestedArr[i][0]);

//     // console.log(nestedArr[i][2]);

//     // console.log(nestedArr[i].at(-2));
// }

// --------------------------------------------------------------------------------------------------

//            0           1           2          3         4  

let arr = ["Chirag" , "Shrimali" , "Ramesh" , "Suresh" , "Paresh"]; // 5 size array index value starts with 0 to 4...

//            -5         -4           -3         -2         -1

// console.log(arr);

// arr.push("Ramesh"); // it can be add the items in the end of the array...

// console.log(arr);

// --------------------------------------------------------------------------------------------------

// console.log(arr);

// arr.pop(); // remove the last items from the array...

// console.log(arr);

// --------------------------------------------------------------------------------------------------

// console.log(arr);

// arr.unshift("Ram"); // it can be add the items from the start...

// console.log(arr);

// --------------------------------------------------------------------------------------------------

// console.log(arr);

// arr.shift(); // it can be remove the elements / items from the start...

// console.log(arr);

// --------------------------------------------------------------------------------------------------

// console.log(arr);

// arr.reverse()

// console.log(arr);

// --------------------------------------------------------------------------------------------------