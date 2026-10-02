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

// let arr = [145 , 789 , 369 , 230 , 500];

//          -5    -4    -3    -2    -1

// console.log(arr);

// let finalPrice = arr.map((ele , index) =>
// {
//     // return `${index} - ${ele}`;

//     return ele * 0.9; // discount is 10% -- 10/100 -- 0.1
// });

// let finalPrice = arr.map((ele , index) => ele * 0.9); // discount is 10% -- 10/100 -- 0.1
// // return `${index} - ${ele}`;

// console.log(finalPrice);

// forEach() methods / functions -- it can not be return the value...

// let discountPrice = []

// arr.forEach((ele) => 
// {
//     discountPrice.push(ele * 0.9);
// })

// console.log(discountPrice);

// Object...

// let obj =
// {
//     name : 'Chirag' ,

//     age : 19 , 

//     isValid : true ,

//     id : 21 ,

//     address : 'Ahmedabad' ,
// };

// console.log(obj);

// Object.keys(obj).map((ele)=> console.log(ele));

// Object.values(obj).map((ele)=> console.log(ele));

// Object.entries(obj).map((ele)=> console.log(ele));

// --------------------------------------------------------------------------------------------------

// Array of Objects...

// let obj =
// [
//     {
//         name : 'C' ,

//         age : 21 ,
//     } ,

//     {
//         name : 'R' ,

//         age : 19 ,
//     } ,

//     {
//         name : 'V' ,

//         age : 25 ,
//     } ,
// ];

// prints the name of each students...

// let nameArr = [];

// obj.forEach((ele) => nameArr.push(ele.name));

// console.log(nameArr);

// let nameArr1 = obj.map((ele)=> ele.name);

// console.log(nameArr1);

// let res = obj.map((ele)=> ele);

// console.log(res);

// ---------------------------------------------------------------------------------------------------------------------

// let newArr = [];

// obj.forEach((ele) => newArr.push(ele.age + 10));

// console.log(newArr);

// let res = obj.map((ele) => ele.age + 10);

// console.log(res);

// let newArr = [];

// for(ele of obj)
// {
//     newArr.push(ele.age + 10);
// }

// console.log(newArr);

// let res = obj.map((ele) => {
//     return {...ele , age : ele.age + 10}
// })

// console.log(res);

// let res = obj.map((ele) => ({...ele , age : ele.age + 10}))

// console.log(res);

// -------------------------------------------------------------------------------------------------------

// Filter methods / functions...

//         0   1   2   3   4

// let arr = [5 , 9 , 3 , 4 , 6];

//         -5  -4  -3  -2  -1

// arr.filter((ele , index) => {
//     console.log(index , '-' ,ele);
// });

// let students =
// [
//     {
//         name : 'C' ,

//         marks : 99 ,
//     } ,

//     {
//         name : 'R' ,

//         marks : 40 ,
//     } ,

//     {
//         name : 'D' ,

//         marks : 50 ,
//     } ,

//     {
//         name : 'M' ,

//         marks : 80 ,
//     } ,

//     {
//         name : 'Q' ,

//         marks : 20 ,
//     } ,
// ];

// forEach() method...

// let newArr = [];

// students.forEach((ele) =>
// {
//     if(ele.marks < 33) newArr.push(ele);
// })

// console.log(newArr);

// filter...

// let res = students.filter((ele) => ele.marks < 33);

// console.log(res);

// -----------------------------------------------------------------------------------------------------------------------

//         0   1   2

// let arr = [1 , 2 , 3 , 4];

//        -3   -2   -1

// console.log(arr);

// forEach() Methods / functions...

// let totalMarks = 0;

// arr.forEach((ele) => 
// {
//     totalMarks += ele; // totalMarks = totalMarks + ele
// });

// console.log(totalMarks);

// reduce() methods / functions

// let res = arr.reduce((totalMarks , ele) =>
// {
//     return totalMarks += ele; // totalMarks = totalMarks + ele;
// } , 0);

// let res = arr.reduce((totalMarks , ele) => totalMarks += ele , 0); // totalMarks = totalMarks + ele;

// console.log(res);

// let arrObj =
// [
//     {
//         name : 'C' ,

//         marks : 96 ,
//     } ,

//     {
//         name : 'R' ,

//         marks : 60 ,
//     } ,

//     {
//         name : 'D' ,

//         marks : 50 ,
//     } ,
// ];

// console.log(arrObj);

// forEach() methods / functions...

// let totalMarks = 0;

// arrObj.forEach((ele) => {
//     totalMarks += ele.marks;
// });

// console.log(totalMarks);

// reduce() methods / functions...

// let res = arrObj.reduce((totalMarks , ele) => totalMarks += ele.marks , 0); // totalMarks = totalMarks + ele.marks

// console.log(res);

// -------------------------------------------------------------------------------------------------------

//                   0           1           2          3           4          5           6

let attendance = ['Present' , 'Present' , 'Absent' , 'Present' , 'Absent' , 'Absent' , 'Present'];

//                  -7           -6         -5          -4         -3          -2         -1

// console.log(attendance);

// forEach() methods / functions...

// let preAtt = 0;

// let absAtt = 0;

// attendance.forEach((ele) => 
// {
//     if(ele === 'Present') preAtt += 1; // preAtt = preAtt + 1

//     else absAtt += 1; // absAtt = absAtt + 1
// });

// console.log({Present : preAtt , Absent : absAtt});

// let obj = {}; // empty object...

// attendance.forEach((ele) => 
// {
//     if(obj[ele])
//     {
//         obj[ele] += 1; // obj[ele] = obj[ele] + 1
//     }

//     else obj[ele] = 1
// });

// console.log(obj);

// reduce() methods / functions...

let res = attendance.reduce((obj , ele) => 
{
    // if(obj[ele]) obj[ele] += 1
    
    // else obj[ele] = 1

    // return obj

    obj[ele] = (obj[ele] || 0) + 1;

    return obj
} , {});

console.log(res);

// let res = attendance.reduce((preAtt , absAtt , ele) => 
// {
//     if(ele === 'Present') preAtt += 1;

//     else absAtt += 1;
// } , 0 , 0);

// console.log(res);

// -------------------------------------------------------------------------------------------------------