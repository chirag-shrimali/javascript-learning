console.log('\n----- OBJECT DESTRUCTURE -----\n');

// let SYMBOL = Symbol('@symbol');

// let user =
// {
//     id : 21 ,

//     userName : 'Chirag' ,

//     'full name' : 'Chirag Shrimali' ,

//     age : 19 ,

//     [SYMBOL] : 'pass1' ,

//     isValid : true ,

//     marks : [99 , 97 , 87] ,

//     greet()
//     {
//         console.log("Hello , World!!");
//     } ,

//     function() // anonymous function
//     {
//         console.log('Jay Hind!!');
//     } ,
// };

// console.log(user[SYMBOL]);

// console.log(user["full name"]);

// console.log(user); // prints the entire object...

// ----------------------------------------------------------------------------------------------------

// let obj =
// {
//     name : 'Chirag' ,

//     age : 19 ,

//     id : 21 ,

//     isValid : true ,
// };

// ----------------------------------------------------------------------------------------------------

// de-structuring...

// let {age , name , isValid} = obj;

// console.log(age , isValid , name);

// ----------------------------------------------------------------------------------------------------

// renaming the keys...

// let {age , name : userName , isValid} = obj;

// console.log(name); // ReferenceError : name is not defined...

// console.log(userName);

// ----------------------------------------------------------------------------------------------------

// de-structuring with rest operator(pack , combine , merge)...

// let {age , isValid , ...rest} = obj;

// console.log(age , isValid); // 19 true

// console.log(rest); // {name : 'Chirag' , id : 21}

// ----------------------------------------------------------------------------------------------------

// combining two object using spread operator(unpack , unbox)...

// let obj1 = 
// {
//     name : 'C' ,

//     age : 21 ,
// };

// let obj2 = 
// {
//     isValid : true ,

//     id : 100 ,

//     age : 60 ,
// };

// ----------------------------------------------------------------------------------------------------

// updating the properties...

// console.log(obj2);

// obj2['age'] = 100;

// console.log(obj2);

// console.log(obj2);

// console.log({...obj2 , age : 100});

// console.log(obj2);

// ----------------------------------------------------------------------------------------------------

// adding the properties...

// console.log(obj2);

// obj2.marks = [99 , 97 , 87];

// console.log(obj2);

// console.log(obj2);

// console.log({...obj2 , userName : 'Chirag Shrimali'}); // spread operator(unpack , unbox)...

// console.log(obj2);

// ----------------------------------------------------------------------------------------------------

// console.log(obj1);

// console.log(obj2);

// ----------------------------------------------------------------------------------------------------

// console.log(obj1 + obj2); // Not Valid Syntax...

// let obj3 = {...obj1 , ...obj2}; // Spread Operator(unpack , unbox)...

// console.log(obj3);

// ----------------------------------------------------------------------------------------------------

// deleting the properties...

// delete obj3.isValid;

// console.log(obj3);

// ----------------------------------------------------------------------------------------------------

// freeze which can not be adding the properties , deleting the properties or updating the properties of an object...

// but in the nested object , if we freeze the outer object only outer object properties can be freezed not inner properties...