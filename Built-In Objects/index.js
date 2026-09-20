console.log('\n ----- BUILT - IN OBJECTS ----- \n');

// function magnitude(num)
// {
//     if (num < 0) return -num;

//     else return num;
// }

// console.log(magnitude(5));
// console.log(magnitude(-6));
// console.log(magnitude(0));

// --------------------------------------------------------------------------------------------------

// let n = Math.abs(-89);

// let n = Math.abs(89);

// let n = Math.abs(0);

// console.log(n);

// --------------------------------------------------------------------------------------------------

// let x = Math.max(4 , 6);

// console.log(x);

// --------------------------------------------------------------------------------------------------

// let x = Math.min(8 , 7);

// console.log(x);

// --------------------------------------------------------------------------------------------------

// let x = Math.sqrt(25);

// let x = Math.sqrt(49);

// let x = Math.sqrt(37);

// console.log(x); // 5

// --------------------------------------------------------------------------------------------------

// let x = Math.pow(2 , 4);

// console.log(2 ** 4);

// console.log(x);

// --------------------------------------------------------------------------------------------------

// let x = parseInt(Math.random() * 5 + 1);

// console.log(x);

// let x = Math.floor(Math.random() * 100 + 1);

// console.log(x);

// --------------------------------------------------------------------------------------------------

// console.log(Math.PI); // it can be returned to me the value of the PI...

// --------------------------------------------------------------------------------------------------

// RoundOf --> 0 to 4 no change and 5 to 9 change or increase by one value...

// console.log(Math.round(7.99)); // 8
// console.log(Math.round(9.56)); // 10
// console.log(Math.round(3.36)); // 3
// console.log(Math.round(6.069)); // 6
// console.log(Math.round(5.455)); // 5

// --------------------------------------------------------------------------------------------------

// console.log(Math.floor(5.99)); // 5
// console.log(Math.floor(5.01)); // 5
// console.log(Math.floor(-5.06)); // -6
// console.log(Math.floor(-5.99)); // -6
// console.log(Math.floor(7.00)); // 7

// --------------------------------------------------------------------------------------------------

// console.log(Math.ceil(5.99)); // 6
// console.log(Math.ceil(5.01)); // 6
// console.log(Math.ceil(-5.02)); // -5
// console.log(Math.ceil(-5.96)); // -5
// console.log(Math.ceil(7.00)); // 7
// console.log(Math.ceil(7.000788)); // 8

// --------------------------------------------------------------------------------------------------

// min-max

// Math.floor(Math.random() * (max - min + 1)) + min

// let min = 5;

// let max = 10;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// --------------------------------------------------------------------------------------------------

// Number Objects in js...

// console.log(Number.isInteger(6333));

// console.log(Number.isInteger("Ch"));

// --------------------------------------------------------------------------------------------------

// console.log(Number.isFinite(12366));

// console.log(Number.isFinite(1/0));

// console.log(Number.isFinite(Infinity));

// --------------------------------------------------------------------------------------------------

// console.log(Number.MAX_SAFE_INTEGER);

// console.log(Number.MIN_SAFE_INTEGER);

// --------------------------------------------------------------------------------------------------

// console.log(Number.MIN_VALUE);

// console.log(Number.MAX_VALUE);

// --------------------------------------------------------------------------------------------------

// console.log(Number.parseInt("56")); // 56

// console.log(Number.parseInt(56.9999)); // 56

// console.log(Number.parseInt(false)); // NaN

// --------------------------------------------------------------------------------------------------

// let n1 = "63";

// let n2 = "23";

// console.log(n1 + n2); // 6323 -- Concatenations

// console.log(Number.parseInt(n1) + Number.parseInt(n2)); // 86

// console.log("4" - "2"); // 2

// --------------------------------------------------------------------------------------------------

// let num = 463.796333568;

// // console.log(num.toFixed()); // 464

// // console.log(num.toFixed(2)); // 463.80

// console.log(num.toPrecision(5));

// --------------------------------------------------------------------------------------------------

// console.log("Chirag".at(2)); // i

// console.log("Chirag".concat(" ").concat("Shrimali"));

// console.log("Chirag".endsWith("ag")); // true

// console.log("Chirag".endsWith("ira")); // false

// console.log("Chirag".indexOf("g")); // 5

// console.log("Chirag Shrimali".includes("a"));

// console.log("Chirag".length); // 6

// console.log("Chirag".toUpperCase()); // CHIRAG

// console.log("ChIrAg".toLowerCase()); // chirag

// a --> 97

// console.log("Chirag".charCodeAt(4)); // it can be giving that in that index which character are there and return it's ascii value...

// console.log("Chirag".lastIndexOf("r")); // 3 -- if any character which are not in the string it gives -1...

// console.log("Chirag".replace("i" , "a")); // Charag

// console.log("   Chirag  Shrimali   ".trim()); // Chirag  Shrimali

// console.log("Chirag   ".trimEnd()); // Chirag

// console.log("     Chirag".trimStart()); // Chirag

// console.log("Chirag".startsWith("Ch")); // true

// console.log("Chirag".startsWith("h")); // false

// console.log("Chirag".repeat(3)); // ChiragChiragChirag

// console.log("Chirag".split()); // ['Chirag']

// console.log("Chirag".slice(1 , 6)); // hirag

// console.log("Chirag Shrimali".toString()); // Chirag Shrimali

// console.log("Chirag".search("ag")); // 4

// console.log("Chirag ag".replaceAll("a" , "i")); // Chirig ig

// console.log("Chirag".substring(2 , 4)); // ir

// console.log("Chirag".substring(3 , "Chirag".length)); // 3 to 6 --> 3 4 5 6 --> rag

// console.log("Chirag".indexOf("l")); // -1 if character is present return index of them otherwise -1.

// console.log("Chirag Shrimali".indexOf("i")); // 2

// console.log("Chirag Shrimali".lastIndexOf("i")); // 14

// --------------------------------------------------------------------------------------------------

// Date Object

// console.log(Date.now()); // gives the timestamp

// let day = new Date();

// console.log(day.getDate()); // 20

// console.log(day.getDay()); // 0

// console.log(day.getFullYear()); // 2026

// console.log(day.getHours()); // 19

// console.log(day.getMonth()); // 8

// console.log(day.toLocaleDateString());

// console.log(day.toLocaleTimeString());

// console.log(day.toTimeString());

// console.log(day.toLocaleString());