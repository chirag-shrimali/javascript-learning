// console.log("Conditional Statements...");

/**
    1. simple if

    2. if ... else

    3. nested if ... else

    4. ladder else if

    5. multiple if statements
 */

// let age = 20;

// let bankAccount = true;

// let condition = ((age >= 18) && (bankAccount === true))

// if(condition) // true
// {
//     console.log("true");
// }

// else
// {
//     console.log("false");
// }

// -------------------------------------------------------------------------------------------------

// let isLoggedIn = true;

// let isLoggedIn = false;

// if(isLoggedIn)
// {
//     console.log("You can be like , share and Comment!!");
// }

// else
// {
//     console.log("Login First!!");
// }

// ladder else if --------------------------------------------------------------

// let day = "saturday";

// if(day === "monday")
// {
//     console.log("1st day of the week...");
// }
// else if(day === "tuesday")
// {
//     console.log("2nd day of the week...");
// }
// else if(day === "wednesday")
// {
//     console.log("3rd day of the week...");
// }
// else if(day === "thursday")
// {
//     console.log("4th day of the week...");
// }
// else if(day === "friday")
// {
//     console.log("5th day of the week...");
// }
// else if(day === "saturday")
// {
//     console.log("6th day of the week...");
// }
// else if(day === "sunday")
// {
//     console.log("7th day of the week...");
// }
// else
// {
//     console.log("Invalid day!!");
// }

// let marks = 75;

// if(marks >= 90)
// {
//     console.log("A Grade");
// }
// else if(marks >= 80 && marks < 90)
// {
//     console.log("B Grade");
// }
// else if(marks >= 70 && marks < 80)
// {
//     console.log("C Grade");
// }
// else if(marks >= 60 && marks < 70)
// {
//     console.log("D Grade");
// }
// else // less than 60
// {
//     console.log("Fail!!");
// }

// Nested if ... else --------------------------------------------------------------

// let a = 5;

// let b = 7;

// let c = 4;

// if(a >= b)
// {
//     if(a >= c)
//     {
//         console.log("A is Maximum...");
//     }

//     else // c >= a
//     {
//         console.log("C is Maximum...");
//     }
// }

// else // b >= a
// {
//     if(b >= c)
//     {
//         console.log("B is Maximum...");
//     }

//     else // c >= b
//     {
//         console.log("C is Maximum...");
//     }
// }

// const isLoggedIn = true;

// const isSubscribed = false;

// if(isLoggedIn) // true
// {
//     if(isSubscribed) // true
//     {
//         console.log("You can be Watch Premium Videos with out any ads...");
//     }

//     else // false
//     {
//         console.log("You can not be Watch Premium Videos with out any ads...");
//     }
// }

// else // isNotLoggedIn // false
// {
//     console.log("Please Login First!!");
// }

// Switch Case --------------------------------------------------------------

let op = "*";

switch(op)
{
    case "+" : 
                console.log("Addition :" , 5 + 3);
                break;

    case "-" : 
                console.log("Subtraction :" , 5 - 3);
                break;

    case "*" : 
                console.log("Multiplication :" , 5 * 3);
                break;

    case "/" : 
                console.log("Division :" , 5 / 3);
                break;

    case "%" : 
                console.log("Modulus(Modulo / Remainder) :" , 5 % 3);
                break;

    case "**" : 
                console.log("Power(Exponent) :" , 5 ** 3);
                break;
    
    default : 
                console.log("Invalid Choice of Selection!!");
}