console.log("\n----- LOOPS -----\n");

// for of and for each method which can be apply on array...

// for in loop apply only object...

//         0       1        2       3         4

// let arr = [21 , "Chirag" , true , 90000 , "Ahmedabad"];

// console.log(arr);

// for loops...

// for(let i = 0 ; i < arr.length ; i++)
// {
//     console.log(arr[i]);
// }

// ----------------------------------------------------------------------------------------------------------

// for of loop...

// for(value of arr)
// {
//     console.log(value);
// }

// ----------------------------------------------------------------------------------------------------------

// for each loop...

// arr.forEach(function(ele , index)
// {
//     console.log(index , '-' , ele);
// });

// function inside function we can call it's known as call-back function...

// ----------------------------------------------------------------------------------------------------------

// for in loop...

// let obj = {
//     name : "Chirag" ,
    
//     id : 21 ,

//     isAvailable : true ,

//     salary : 50000 ,
// };

// console.log(obj);

// for(ele in obj)
// {
//     // console.log(ele); // prints the object key...

//     console.log(obj[ele]); // prints / returns the values of the object...
// }

// for(ele in arr)
// {
//     // console.log(ele); // prints the array key here indexing key...

//     // ele --> 0 1 2 3 4

//     // console.log(arr[ele]); // prints the value of array...
// }

// ----------------------------------------------------------------------------------------------------------

// De-Structruing...

// De-Structruing Array... 

// let arr = [21 , "Chirag" , true , 25000 , 'Ahmedabad'];

// let [id , name , isValid , salary , address , hello] = arr;

// let [id , name , isValid , salary , address , hello] = [21 , "Chirag" , true , 25000 , 'Ahmedabad'];

// console.log(id); // 21

// console.log(name); // Chirag

// console.log(isValid); // true

// console.log(salary); // 25000

// // console.log(e); // ReferenceError : e is not defined...

// console.log(address); // Ahmedabad

// console.log(hello); // undefined

// ----------------------------------------------------------------------------------------------------------

// De-Structruing Object...

// let obj = {
//     name : "Chirag" , 

//     id : 21 ,

//     isValid : true ,

//     age : 19 ,

//     address : 'Ahmedabad' ,
// };

// console.log(obj);

// let {name , id , isValid , age , address} = obj;

// let {name , id , isValid , age , address , price} = {name : "Chirag" , id : 21 , isValid : true , age : 19 , address : 'Ahmedabad'};

// console.log(name);

// console.log(age); // 19

// console.log(address); // Ahmedabad

// console.log(price); // undefined

// console.log(hello); // ReferenceError : hello is not defined...

// for(ele in obj)
// {
//     console.log(ele);
// }

// for(ele of Object.keys(obj))
// {
//     console.log(ele); // prints the key of an object...
// }

// for(ele of Object.values(obj))
// {
//     console.log(ele); // prints the values of an object...
// }

// for(ele of Object.entries(obj))
// {
//     console.log(ele); // prints the properties of an object in array...
// }

// for([key , value] of Object.entries(obj))
// {
//     console.log(key , '-' , value);
// }

// ----------------------------------------------------------------------------------------------------------

// Rest(pack , combine) and Spread(unboxing / unpack) Operator...

//         0       1        2       3        4

// let arr = [21 , 'Chirag' , true , 25000 , "Address"];

// //         -5      -4       -3      -2        -1

// console.log(arr); // prints the array

// console.log(...arr); // spread operator -- unpack / unboxing...

// console.log(arr);

// ----------------------------------------------------------------------------------------------------------

// let arr = [56 , 8 , 66 , 96 , 36 , 78 , 25 , 46];

// console.log(Math.max(5 , 3 , 6 , 8 , 6));

// console.log(Math.max(arr)); // NaN(Not a Number)

// console.log(arr);

// console.log(...arr);

// console.log(Math.max(...arr)); // spread operator -- unpack / unboxing...

// ----------------------------------------------------------------------------------------------------------

// let a = [1 , 2];

// let b = [3 , 4];

// console.log([...a , ...b]);

// let c = a + b;

// let c = [...a , ...b]; // merging the array by using of the spread operator

// console.log(c);

// console.log(...c);

// ----------------------------------------------------------------------------------------------------------

// let [id , name , isValid , ...hello] = [21 , 'Chirag' , true , 25000 , "Address"];

// console.log(id);

// console.log(hello); // rest opeartor -- combine / pack / boxing the items...

// spread operator -- unpack / unboxing

// ----------------------------------------------------------------------------------------------------------

function add(...numbers) // rest operator make the items into an array...
{
    let arr = numbers;

    let sum = 0;

    for(let i = 0 ; i < arr.length ; i++)
    {
        sum = sum + arr[i];
    }

    console.log(sum);

    // return a + b;
}

// console.log(add(2 , 3 , 5 , 6 , 8 , 9));

add(2 , 3 , 5 , 6 , 8 , 9);