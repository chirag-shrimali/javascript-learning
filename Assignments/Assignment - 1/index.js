/**
    Section 1 - Variables & Operators
 */

// 1. Basic Calculator

// Variable Declaration and Initialization...
// let no1 = 15;

// let no2 = 5;

// console.log("\nAddition :" , no1 + no2); // 20

// console.log("Subtraction :" , no1 - no2); // 10

// console.log("Multiplication :" , no1 * no2); // 75

// // Quotient
// console.log("Division :" , no1 / no2); // 3

// // Modulus(Modulo) -- Remainder
// console.log("Remainder :" , no1 % no2); // 0

// // Exponent
// console.log("Power :" , no1 ** no2); // 759,375

// ------------------------------------------------------------------------------------------------------------

// 2. Swap Two Numbers

// let a = 10;

// let b = 20;

// let temp; // third(extra variable)

// console.log("\nBefore Swapping : ");

// console.log("a =" , a);

// console.log("b =" , b , "\n");

// temp = a;

// a = b;

// b = temp;

// console.log("After Swapping : ");

// console.log("a =" , a);

// console.log("b =" , b);

// ------------------------------------------------------------------------------------------------------------

// 3. Student Marks

// let math = 99;

// let chem = 97;

// let phy = 87;

// let total = (math + chem + phy);

// let avg = total / 3;

// let per = (total / 300) * 100;

// console.log(`\nTotal Marks : ${total}`);

// console.log(`Average Marks : ${avg}`);

// console.log(`Percentage : ${per} %`);

// ------------------------------------------------------------------------------------------------------------

// 4. Shopping Bill

// let productPrice = 499;

// let quantity = 5;

// let totalBill = productPrice * quantity;

// let discount = 0.1; // 10% --> 10/100

// console.log(`\nOriginal Bill : ${totalBill}`); // 2495

// let discountAmount = totalBill * discount;

// console.log(`Discount Amount : ${discountAmount}`); // 249.5

// let finalBill = totalBill - discountAmount;

// console.log(`Final Bill : ${finalBill}`); // 2245.5

// ------------------------------------------------------------------------------------------------------------

// 5. Area Calculator

// let len = 5;

// let wid = 4; // width = breadth

// let areaRectangle = len * wid;

// let perimeterRectangle = 2 * (len + wid);

// console.log(`\nArea of a Rectangle = ${areaRectangle}`); // 20

// console.log(`Perimeter of a Rectangle = ${perimeterRectangle}`); // 18

// ------------------------------------------------------------------------------------------------------------

/**
    Section 2 - Comparison & Logical Operators
 */

// 6. Even or Odd

// let no = 7;

// if(no % 2 == 0)
// {
//     console.log(`\n${no} is an Even Number...`);
// }

// else // no % 2 != 0 // no % 2 == 1 // (!(no % 2 == 0))
// {
//     console.log(`\n${no} is an Odd Number...`);
// }

// ------------------------------------------------------------------------------------------------------------

// 7. Positive, Negative or Zero

// let no = 10;

// if(no > 0)
// {
//     console.log(`\n${no} is a Positive Number...`);
// }

// else if(no < 0)
// {
//     console.log(`\n${no} is a Negative Number...`);
// }

// else // no == 0
// {
//     console.log(`\n${no} is a Zero Number...`);
// }

// ------------------------------------------------------------------------------------------------------------

// 8. Greater Number

// let no1 = 50;

// let no2 = 50;

// if(no1 > no2)
// {
//     console.log(`\n${no1} is greater than ${no2}`);
// }

// else if(no2 > no1)
// {
//     console.log(`\n${no2} is greater than ${no1}`);
// }

// else // no1 === no2
// {
//     console.log(`\n${no1} and ${no2} both numbers are equal...`);
// }

// ------------------------------------------------------------------------------------------------------------

// 9. Largest of Three Numbers

// let no1 = 7;

// let no2 = 9;

// let no3 = 8;

// // ladder else if...

// // if(no1 >= no2 && no1 >= no3)
// // {
// //     console.log(`\n${no1} is Largest among these three numbers...`);
// // }

// // else if(no2 >= no1 && no2 >= no3)
// // {
// //     console.log(`\n${no2} is Largest among these three numbers...`);
// // }

// // else // no3 >= no1 && no3 >= no2
// // {
// //     console.log(`\n${no3} is Largest among these three numbers...`);
// // }

// // nested if ... else

// if(no1 >= no2)
// {
//     if(no1 >= no3)
//     {
//         console.log(`\n${no1} is Largest among these three numbers...`);
//     }

//     else // no3 >= no1
//     {
//         console.log(`\n${no3} is Largest among these three numbers...`);
//     }
// }

// else // no2 >= no1
// {
//     if(no2 >= no3)
//     {
//         console.log(`\n${no2} is Largest among these three numbers...`);
//     }

//     else // no3 >= no2
//     {
//         console.log(`\n${no3} is Largest among these three numbers...`);
//     }
// }

// ------------------------------------------------------------------------------------------------------------

// 10. Voting Eligibility

// let age = 20;

// if(age >= 18)
// {
//     console.log(`\nYour Age is ${age}.Thus,you are Eligible to vote!!`);
// }

// else
// {
//     console.log(`\nYour Age is ${age}.Thus,you are not Eligible to vote!!`);
// }

// ------------------------------------------------------------------------------------------------------------

// 11. Driving Eligibility

// let age = 19;

// let hasLicense = true; // yes i have a license

// if(age >= 18 && hasLicense)
// {
//     console.log(`\nPerson can be Drive...`);
// }

// else
// {
//     console.log(`\nPerson can not be Drive...`);
// }

// ------------------------------------------------------------------------------------------------------------

// 12. Number Range

// let no = 50;

// if(no >= 10 && no <= 100)
// {
//     console.log(`\nNumber is between 10 and 100...`);
// }

// else
// {
//     console.log(`\nNumber is not between 10 and 100...`);
// }

// ------------------------------------------------------------------------------------------------------------

/**
    Section 3 - if, else-if & Nested Conditions
 */

// 13. Student Grade

// let per = 50;

// if(per >= 90 && per < 101)
// {
//     console.log("\nA Grade...");
// }

// else if(per >= 80 && per < 90)
// {
//     console.log("\nB Grade...");
// }

// else if(per >= 70 && per < 80)
// {
//     console.log("\nC Grade...");
// }

// else if(per >= 60 && per < 70)
// {
//     console.log("\nD Grade...");
// }

// else if(per >= 40 && per < 60)
// {
//     console.log("\nE Grade...");
// }

// else if(per > 100 || per < 0)
// {
//     console.log("\nInvalid Percentages!!");
// }

// else // below 40
// {
//     console.log("\nF Grade...");
// }

// ------------------------------------------------------------------------------------------------------------

// 14. Student Result

// let math = 99;

// let chem = 97;

// let phy = 87;

// if(math >= 40 && chem >= 40 && phy >= 40)
// {
//     let avg = (math + chem + phy) / 3;

//     if(avg >= 75)
//     {
//         console.log("\nDistinction");
//     }

//     else if(avg >= 60)
//     {
//         console.log("\nFirst Division");
//     }

//     else if(avg >= 50)
//     {
//         console.log("\nSecond Division");
//     }

//     else
//     {
//         console.log("\nPass");
//     }
// }

// else
// {
//     console.log("\nResult : Fail");
// }

// ------------------------------------------------------------------------------------------------------------

// 15. Electricity Bill

// let units = 0;

// let bill;

// if(units < 0) console.log("\nInvalid Units!!");

// if(units >= 0)
// {
//     if(units >= 0 && units <= 100)
//     {
//         bill = units * 5;
//     }

//     else if(units > 100 && units <= 200)
//     {
//         bill = 100 * 5 + (units - 100) * 7;
//     }

//     else if(units > 200) // 250 > 200
//     {
//         bill = 100 * 5 + 100 * 7 + (units - 200) * 10; // 
//     }

//     console.log(`\nFinal Bill : ${bill}`);
// }

// ------------------------------------------------------------------------------------------------------------

// 16. Simple Login

// let userName = "admin";

// let passWord = "12345";

// if(userName === "admin" && passWord === "12345")
// {
//     console.log("\nLogin successful");
// }

// else
// {
//     console.log("\nInvalid username or password");
// }

// ------------------------------------------------------------------------------------------------------------

// 17. Salary Bonus

// let originalSalary = 40000;

// let experience = 11;

// let bonus = 0;

// let finalSalary;

// console.log(`\nOriginal Salary : ${originalSalary}`);

// if(experience >= 10)
// {
//     bonus = originalSalary * 0.2;

//     finalSalary = originalSalary + bonus;
// }

// else if(experience >= 5)
// {
//     bonus = originalSalary * 0.1;

//     finalSalary = originalSalary + bonus;
// }

// else if(experience >= 2)
// {
//     bonus = originalSalary * 0.05;

//     finalSalary = originalSalary + bonus;
// }

// else
// {
//     finalSalary = originalSalary;
// }

// console.log(`Bonus : ${bonus}`);

// console.log(`Final Salary : ${finalSalary}`);

// ------------------------------------------------------------------------------------------------------------

// 18. Age Category

// let age = 19;

// if(age < 0)
// {
//     console.log("\nInvalid Negative Age Selection!!");
// }

// else if(age >= 0 && age <= 12)
// {
//     console.log("\nChild");
// }

// else if(age >= 13 && age <= 19)
// {
//     console.log("\nTeenager");
// }

// else if(age >= 20 && age <= 59)
// {
//     console.log("\nAdult");
// }

// else
// {
//     console.log("\nSenior Citizen");
// }

// ------------------------------------------------------------------------------------------------------------

/**
    Section 4 - switch-case
 */

// 19. Day of the Week

// let day = 5;

// switch(day)
// {
//     case 1 : 
    
//             console.log("\nMonday...");
//             break;

//     case 2 : 
    
//             console.log("\nTuesday...");
//             break;

//     case 3 : 
    
//             console.log("\nWednesday...");
//             break;

//     case 4 : 
    
//             console.log("\nThursday...");
//             break;

//     case 5 : 
    
//             console.log("\nFriday...");
//             break;

//     case 6 : 
    
//             console.log("\nSaturday...");
//             break;

//     case 7 : 
    
//             console.log("\nSunday...");
//             break;

//     default :

//             console.log("\nInvalid Day Selection!!");
// }

// ------------------------------------------------------------------------------------------------------------

// 20. Simple Calculator

// let firstNo = 20;

// let secondNo = 10;

// let op = "/";

// console.log(`\nFirst number : ${firstNo}`);

// console.log(`Second number : ${secondNo}`);

// console.log(`Operator : ${op}`);

// switch(op)
// {
//     case "+" :

//                 console.log(`\nAddition : ${firstNo + secondNo}`);
//                 break;

//     case "-" :

//                 console.log(`\nSubtraction : ${firstNo - secondNo}`);
//                 break;

//     case "*" :

//                 console.log(`\nMultiplication : ${firstNo * secondNo}`);
//                 break;

//     case "/" :

//                 if(secondNo != 0)
//                 {
//                     console.log(`\nDivision : ${firstNo / secondNo}`);
//                 }

//                 else
//                 {
//                     console.log("\nInvalid , Division by Zero");
//                 }

//                 break;

//     case "%" :

//                 console.log(`\nModulus : ${firstNo % secondNo}`);
//                 break;

//     case "**" :

//                 console.log(`\nPower : ${firstNo ** secondNo}`);
//                 break;

//     default : console.log("\nInvalid Selection!!");
// }

// ------------------------------------------------------------------------------------------------------------

// 21. Month Name

// let monthNo = 11;

// switch(monthNo)
// {
//     case 1 : 

//             console.log("\nJanuary...");
//             break;

//     case 2 : 

//             console.log("\nFebruary...");
//             break;

//     case 3 : 

//             console.log("\nMarch...");
//             break;

//     case 4 : 

//             console.log("\nApril...");
//             break;

//     case 5 : 

//             console.log("\nMay...");
//             break;

//     case 6 : 

//             console.log("\nJune...");
//             break;

//     case 7 : 

//             console.log("\nJuly...");
//             break;

//     case 8 : 

//             console.log("\nAugust...");
//             break;

//     case 9 : 

//             console.log("\nSeptember...");
//             break;

//     case 10 : 

//             console.log("\nOctober...");
//             break;

//     case 11 : 

//             console.log("\nNovember...");
//             break;

//     case 12 : 

//             console.log("\nDecember...");
//             break;

//     default : console.log("\nInvalid Month Number Selection!!");
// }

// ------------------------------------------------------------------------------------------------------------

// 22. Menu-Based Calculato

// console.log("\n1. Addition");
// console.log("2. Subtraction");
// console.log("3. Multiplication");
// console.log("4. Division");
// console.log("5. Modulus");
// console.log("6. Power");

// let choice = 4;

// let no1 = 9;

// let no2 = 3;

// switch(choice)
// {
//     case 1 : 
    
//             console.log(`\nAddition : ${no1 + no2}`);
//             break;

//     case 2 : 
    
//             console.log(`\nSubtraction : ${no1 - no2}`);
//             break;

//     case 3 : 
    
//             console.log(`\nMultiplication : ${no1 * no2}`);
//             break;

//     case 4 : 
    
//             console.log(`\nDivision : ${no1 / no2}`);
//             break;

//     case 5 : 
    
//             console.log(`\nModulus : ${no1 % no2}`);
//             break;

//     case 6 : 
    
//             console.log(`\nPower : ${no1 ** no2}`);
//             break;

//     default : console.log("\nInvalid Choice Of Selection!!");
// }

// ------------------------------------------------------------------------------------------------------------

// 23. Traffic Signal

// let color = "red";

// switch(color)
// {
//     case "red" :
        
//                 console.log("\nStop...");
//                 break;

//     case "yellow" :
        
//                 console.log("\nWait...");
//                 break;

//     case "green" :
        
//                 console.log("\nGo...");
//                 break;

//     default : console.log("\nInvalid Signal!!");
// }

// ------------------------------------------------------------------------------------------------------------

/**
    Section 5 - Mixed Problems
 */

// 24. ATM Transaction

// let balance = 10000;

// let withdrawAmount = 3000;

// if(withdrawAmount > 0 && balance >= withdrawAmount)
// {
//     console.log("\nWithdrawal Successfully!!");

//     console.log(`Remaining Balance : ${balance - withdrawAmount}`);
// }

// else
// {
//     console.log("\nInvalid Selection!!");
// }

// ------------------------------------------------------------------------------------------------------------

// 25. Movie Ticket System

// let age = 25;

// let numberOfTickets = 3;

// let price;

// if(age < 0)
// {
//     console.log("\nInvalid Age Selection!!");
// }

// if(age >= 0)
// {
//     if(age < 12 && age >= 0)
//     {
//         price = numberOfTickets * 100;
//     }

//     else if(age >= 12 && age < 60)
//     {
//         price = numberOfTickets * 200;
//     }

//     else
//     {
//         price = numberOfTickets * 120;
//     }
//         console.log(`\nTotal : ${price}`);
// }

// ------------------------------------------------------------------------------------------------------------

// 26. Restaurant Menu

// console.log("\n1. Burger --> 150Rs.");
// console.log("2. Pizza --> 250Rs.");
// console.log("3. Pasta --> 180Rs.");
// console.log("4. Sandwich --> 120Rs.");

// let choice = 2;

// let quantity = 3;

// console.log(`\nChoice : ${choice}`);
// console.log(`Quantity : ${quantity}`);

// switch(choice)
// {
//     case 1 :

//             console.log(`\nTotal : ${quantity * 150}`);
//             break;

//     case 2 :

//             console.log(`\nTotal : ${quantity * 250}`);
//             break;

//     case 3 :

//             console.log(`\nTotal : ${quantity * 180}`);
//             break;

//     case 4 :

//             console.log(`\nTotal : ${quantity * 120}`);
//             break;

//     default :

//             console.log("\nInvalid Choice Of Selection!!");
// }

// ------------------------------------------------------------------------------------------------------------

// 27. Electricity Bill + Discount

// let units = 250;

// let originalBill = 0;

// if(units < 0)
// {
//     console.log("\nInvalid Units Selection!!");
// }

// if(units >= 0)
// {
//     if(units > 0 && units < 101)
//     {
//         originalBill = units * 5;
//     }

//     else if(units > 100 && units < 201)
//     {
//         originalBill = (100 * 5) + (units - 100) * 7;
//     }

//     else 
//     {
//         originalBill = (100 * 5) + (100 * 7) + (units - 200) * 10;
//     }

//     let discount = 0;

//     if(originalBill >= 2000)
//     {
//         discount = originalBill * 0.1; // 10% --> 10/100
//     }

//     console.log(`\nUnits : ${units}`);

//     console.log(`Original Bill : ${originalBill}`);

//     console.log(`Discount Amount : ${discount}`);

//     console.log(`Final Bill : ${originalBill - discount}`);
// }

// ------------------------------------------------------------------------------------------------------------

// 28. Simple ATM Menu

// console.log("\n1. Check Balance");
// console.log("2. Deposit Money");
// console.log("3. Withdraw Money");
// console.log("4. Exit");

// let balance = 10000;

// let choice = 7;

// let deposit = 3000;

// let withdraw = 15000;

// switch(choice)
// {
//     case 1 :

//             console.log(`\nCurrent Balance : ${balance}`);
//             break;

//     case 2 :

//             console.log("\nMoney Deposited Successfully!!");
//             console.log(`Current Balance : ${balance + deposit}`);
//             break;

//     case 3 :

//             if(balance < withdraw)
//             {
//                 console.log("\nInsufficient Balance");
//             }

//             else
//             {
//                 console.log("\nMoney Withdrawal Successfully!!");
//                 console.log(`Remaining Balance : ${balance - withdraw}`);
//             }
//             break;

//     case 4 :

//             console.log("\nThank you for using the ATM. Goodbye!");
//             break;

//     default :

//             console.log("\nInvalid Choice Of Selection!!");
// }

// ------------------------------------------------------------------------------------------------------------

/**
    Challenge Questions
 */

// 29. Number Classification

// let no = 150;

// if(no > 0)
// {
//     console.log("\nPositive");
// }

// else if(no < 0)
// {
//     console.log("\nNegative");
// }

// else
// {
//     console.log("\nZero");
// }

// if(no % 2 == 0)
// {
//     console.log("Even");
// }

// else
// {
//     console.log("Odd");
// }

// if(no > 100)
// {
//     console.log("Greater than 100");
// }

// else if(no < 100)
// {
//     console.log("Less than 100");
// }

// else
// {
//     console.log("Equal to 100");
// }

// ------------------------------------------------------------------------------------------------------------

// 30. Student Result System

let studentName = "Rahul";

let rollNumber = 101;

let mathMarks = 85;

let scienceMarks = 78;

let englishMarks = 92;

let totalMarks = (mathMarks + scienceMarks + englishMarks);

let grade;

let result;

let percentage = (totalMarks / 300) * 100;

if(mathMarks >= 40 && scienceMarks >= 40 && englishMarks >= 40)
{
    if(percentage >= 90 && percentage < 101)
    {
        grade = "A";

        result = "Pass";
    }

    else if(percentage >= 80 && percentage < 90)
    {
        grade = "B";

        result = "Pass";
    }

    else if(percentage >= 70 && percentage < 80)
    {
        grade = "C";

        result = "Pass";
    }

    else if(percentage >= 60 && percentage < 70)
    {
        grade = "D";

        result = "Pass";
    }

    else if(percentage >= 40 && percentage < 60)
    {
        grade = "E";

        result = "Pass";
    }
}

else
{
    grade = "F";

    result = "Fail";
}

console.log("-------------------------");

console.log("      STUDENT RESULT     ");

console.log("-------------------------\n");

console.log(`Name       : ${studentName}`);
console.log(`RollNo     : ${rollNumber}`);

console.log(`\nMath       : ${mathMarks}`);
console.log(`Science    : ${scienceMarks}`);
console.log(`English    : ${englishMarks}`);

console.log(`\nTotal      : ${totalMarks}`);
console.log(`Percentage : ${percentage}%`);
console.log(`Grade      : ${grade}`);
console.log(`Result     : ${result}`);

console.log("\n-------------------------\n");