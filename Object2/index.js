console.log('\n--- OBJECTS ---\n');

// Object Literals

// ----------------------------------------------------------------------------------------------------

// let obj = {};

// console.log(obj); // {}

// console.log(typeof obj); // object

// console.log(typeof(obj)); // object

// ----------------------------------------------------------------------------------------------------

let mySym = Symbol('@sym1');

let obj =
{
    name : 'Chirag' ,

    "Full Name" : 'Chirag Shrimali' ,

    [mySym] : 'hello' ,

    age : 19 ,

    id : 21 ,

    isValid : true ,

    marks : [99 , 97 , 87] ,

    greet()
    {
        console.log('Hello , World!!');    
    } ,
};

// ----------------------------------------------------------------------------------------------------

// using the obj object propeties using this keyword...

// obj.hello = function()
// {
//     // console.log('Hello , World!!');

//     // console.log(`Hello , ${obj.name}`);

//     console.log(`Hello , ${this.name}`); // using this keyword...
// }

// obj.hello();

// console.log(obj.hello); // [Function (anonymous)]

// obj.hello(); // Hello , World!!

// ----------------------------------------------------------------------------------------------------

// adding the properties in the object obj as using function...

// console.log(obj);

// obj.print = function()
// {
//     console.log(5);
// }

// console.log(obj);

// ----------------------------------------------------------------------------------------------------

// Freeze can not change the existing properties , can not add the properties or can not delete the properties of the object obj...

// obj.age = 100;

// obj.email = "hello@gmail.com";

// delete obj.marks;

// console.log(obj);

// Object.freeze(obj);

// obj.id = 70;

// obj.email = "hello1@gmail.com";

// delete obj.age;

// console.log(obj);

// ----------------------------------------------------------------------------------------------------

// updating the object value...

// console.log(obj.age);

// obj.age = 30;

// console.log(obj.age);

// console.log(obj[mySym]);

// ----------------------------------------------------------------------------------------------------

// we can be use the bracket notation most of the case when left side keys are string in the '' or "" quote given...

// console.log(obj["Full Name"]);

// object access the properties...

// dot notation and bracket notation...

// console.log(obj.age , obj.isValid , obj['marks'] , obj['greet']); // 19 true [99 , 97 , 87] [Function: greet]

// obj['greet']();

// obj.greet();

// console.log(obj);

// prints the object of the obj...

/**
{
    name : 'Chirag' ,

    age : 19 ,

    id : 21 ,

    isValid : true ,

    marks : [99 , 97 , 87] ,

    greet : [Function: greet]
}
*/