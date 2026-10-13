console.log('\n--- OBJECT ---\n');

// object literals / non-singleton objects...

// let obj = {name : 'Chirag' , age : 19};

// console.log(obj);

// ----------------------------------------------------------------------------------------------------

// Object using singleton / using constructor...

// let user = new Object(); // Empty Singleton Object...

// let obj = {}; // Non-Singleton / object literals...

// console.log(obj);

// console.log(user);

// ----------------------------------------------------------------------------------------------------

// let obj = {};

// console.log(obj);

// obj.name = 'Chirag';

// obj.age = 19;

// console.log(obj);

// ----------------------------------------------------------------------------------------------------

// nested object...

// let company =
// {
//     iphone : 
//     {
//         price : 10000 ,

//         quantity : 10 ,
//     } ,

//     samsung : 
//     {
//         price : 35000 ,

//         quantity : 50 ,
//     } ,

//     vivo : 
//     {
//         price : 90000 ,

//         quantity : 90 ,
//     } ,
// };

// console.log(company);

// console.log(company.iphone , company['vivo'] , company.samsung['quantity'] , company.iphone.price); // iphoneObject vivoObject 50 10000

// ----------------------------------------------------------------------------------------------------

// merging the object...

// let obj1 = {1 : 'a' , 2 : 'b'};

// let obj2 = {3 : 'c' , 4 : 'd'};

// console.log(obj1);

// console.log(obj2);

// let obj3 = {obj1 , obj2}; // no a valid syntax

// console.log(obj3);

// ----------------------------------------------------------------------------------------------------

// console.log(obj1 + obj2); // [object Object] [object Object]

// ----------------------------------------------------------------------------------------------------

// using spread / unpack / unbox operator...

// let obj3 = {...obj1 , ...obj2};

// console.log(obj3);

// ----------------------------------------------------------------------------------------------------

// using assign method / function...

// let obj3 = Object.assign(obj1 , obj2);

// let obj3 = Object.assign({} , obj1 , obj2); // for better practice we can be use this...

// console.log(obj3);

// ----------------------------------------------------------------------------------------------------

// hasOwnProperty...

// let obj = {name : 'C' , id : 21};

// hasOwnProperty same as in the string object includes...

// hasOwnProperty takes the keys of the object and prints true if exits otherwise false...

// console.log(obj.hasOwnProperty('name')); // true

// console.log(obj.hasOwnProperty('age')); // false