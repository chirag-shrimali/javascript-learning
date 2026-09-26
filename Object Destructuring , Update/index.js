console.log('\n----- OBJECT DE-STRUCTURING || UPDATING -----\n');

// ------------------------------------------------------------------------------------------------------------------------

// let obj =
// {
//     name : 'Chirag' ,

//     rollNo : 21 ,

//     marks : [99 , 97 , 87] ,

//     age : 19 ,

//     isValid : true ,

//     total : 10 ,
// };

// ------------------------------------------------------------------------------------------------------------------------

// console.log(obj); // prints the obj object...

// console.log(Object.keys(obj)); // prints the keys of obj Object in the array...

// console.log(Object.values(obj)); // prints the values of obj Object in the array...

// console.log(Object.entries(obj)); // prints the properties(keys-values pairs) of obj Object in the array of array...

// ------------------------------------------------------------------------------------------------------------------------

// de-structuring of the object...

// let {name , age , isValid} = obj;

// console.log(name , age , isValid); // Chirag 19 true

// ------------------------------------------------------------------------------------------------------------------------

// rest operator(pack , combine , merge)

// let {rollNo , age , ...rest} = obj;

// console.log(rollNo , age , rest); // 21 19 {name : 'Chirag' , marks : [99 , 97 , 87] , isValid : true}

// ------------------------------------------------------------------------------------------------------------------------

// let {...hello} = obj;

// console.log(hello); // prints the entire object same as obj means it can be copying the obj object to hello...

// ------------------------------------------------------------------------------------------------------------------------

// let {...hello , age} = obj; // errors rest operator must be last defined...

// ------------------------------------------------------------------------------------------------------------------------

// let {rollNo , name , ...rest} = obj;

// console.log(rollNo , name , rest); // 21 Chirag {marks : [99 , 97 , 87] , age : 19 , isValid : true}

// ------------------------------------------------------------------------------------------------------------------------

// rename the keys of the object...

// let {name , ...rest} = obj;

// console.log(name , rest); // Chirag {rest object prints}

// let {name , ...rest} = obj;

// let userName = name; // doing this we can be only access the keys of the object in another names but does not change the object...

// console.log(obj);

// console.log(obj);

// let {name : userName , ...rest} = obj;

// console.log(userName);

// ------------------------------------------------------------------------------------------------------------------------

// Default keys...

// total = something so this is shows default keys and values...

// let {name , total , ...rest} = obj;

// console.log(name , total , rest); // Chirag undefined {rest object}

// let {name , total = 60 , ...rest} = obj;

// console.log(name , total , rest); // Chirag 60 {rest object}

// let {name , total = 60 , ...rest} = obj; // but if the keys already present in the object then it can be override so object keys values prints...

// console.log(name , total , rest); // Chirag 10 {rest object}

// ------------------------------------------------------------------------------------------------------------------------

// merge the two object

// let obj1 =
// {
//     name : 'Chirag' ,

//     phoneNo : 9876543210 ,

//     totalMarks : 1 ,
// };

// let variable = "hello";

// let obj2 =
// {
//     city : variable ,

//     age : 19 ,
// };

// let obj3 = {...obj1 , ...obj2}; // spread operator(unpack , unbox)

// console.log(obj3);

// ------------------------------------------------------------------------------------------------------------------------

// object updating values...

// let obj1 =
// {
//     name : 'C' ,

//     phNo : 963 ,
// };

// console.log({...obj1 , name : 'R'});

// let hello = 21;

// let obj2 =
// {
//     id : hello , // ReferenceError : hello is not defined

//     // here hello is not a string it is a variable so we have to initializes it...

//     age : 19 ,

//     marks : 100 ,

//     name : 'D' ,
// };

// obj1 obj2 merge...

// let obj3 = {...obj1 , ...obj2};

// console.log(obj3);

// ------------------------------------------------------------------------------------------------------------------------

// updating the array in the let...

//         0   1   2   3   4

// let arr = [5 , 9 , 3 , 6 , 2];

//         -5  -4  -3  -2  -1

// console.log(arr);

// arr = ['A' , 'B' , 'C']; // reinitialization / updation allowed in the let variable declaration...

// console.log(arr);

// specific elements updating...

// console.log(arr);

// arr[1] = 90;

// console.log(arr);

// updating the array elements in the const variable...

// const arr = [5 , 9 , 3 , 6 , 2];

// console.log(arr);

// // arr = ['A' , 'C']; // in the const we can not be reinitialization the whole array at the time...

// // console.log(arr);

// using const variable we can be only one elements can be updating at the same time...

// console.log(arr); // [5 , 9 , 3 , 6 , 2]

// arr[2] = 100;

// console.log(arr); // [5 , 9 , 100 , 6 , 2]

// ------------------------------------------------------------------------------------------------------------------------

// let obj =
// {
//     name : 'Chirag' ,

//     id : 21 ,

//     age : 19 ,
// };

// updating the object...

// obj =
// {
//     address : 'Ahmedabad' ,
// };

// console.log(obj);

// console.log(obj);

// obj.name = 'Jay'; // updating the object values...

// obj['id'] = 100; // updating the object values...

// console.log(obj);

// delete the keys-values pairs...

// delete obj['age']; // delete the object properties

// console.log(obj);

// ------------------------------------------------------------------------------------------------------------------------

// optional chaining...

// let obj = 
// {
//     name : 'Chirag' ,

//     address : null ,
// };

// console.log(obj);

// console.log(obj?.address); // here ? is an optional chaining due to this , we can be safely access the object properties...

// console.log(obj.address?.street); // undefined -- optional chaining

// console.log(obj.address);

// console.log(obj['address']);

// ------------------------------------------------------------------------------------------------------------------------

//              0   1   2   3   4   5   6   7

// const arr = [1 , 2 , 3 , 4 , 5 , 3 , 5 , 9];

//             -8   -7  -6  -5  -4  -3  -2  -1

// console.log(arr.join('#'));

// console.log(arr.indexOf(3)); // 2

// console.log(arr.lastIndexOf(3)); // 5

// console.log(arr.length);

// console.log(arr.toString());

// start to delete , delete count , 

// delete the elements...

// arr.splice(1 , 4);

// add the elements(the elements at that index shiftimg to the right side)...

// arr.splice(4 , 0 , 100);

// arr.splice(8 , 0 , 50);

// replace the elements (add + delete)...

// arr.splice(1 , 1 , 'C');

// arr.splice(2 , 3 , 'CHI');

// console.log(arr); // [1 , 2 , 'CHI' , 3 , 5 , 9]

// console.log(arr.reverse());

// arr.forEach((val , index) => console.log(index , '-' , val));

// console.log(arr.includes(3)); // true
// console.log(arr.includes(5)); // true
// console.log(arr.includes(0)); // false

// console.log(arr.indexOf(3)); // 2
// console.log(arr.indexOf(5)); // 4
// console.log(arr.indexOf(0)); // -1
// console.log(arr.indexOf(-6)); // -1
// console.log(arr.indexOf(2)); // 1

// console.log(arr.slice(4)); // [5]

// starting --> index thi length sudhi lese...

// starting included , ending excluded...

// ------------------------------------------------------------------------------------------------------------------------

// find() methods / functions -- find() function finds the elements if existed in the array...

// let arr = [5 , 9 , 3 , 6 , 7];

// arr.find((val)=> console.log(val));

// let res = arr.find((val) => {
//     return val === 7;

//     // return val === 10; // undefined because it is not in the array...
// });

// console.log(res);

// ------------------------------------------------------------------------------------------------------------------------