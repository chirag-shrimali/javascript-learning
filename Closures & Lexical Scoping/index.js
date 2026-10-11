console.log('\n----- CLOSURES || LEXICAL SCOPING -----\n');

// function outer()
// {
//     let userName = 'Chirag';

//     function inner()
//     {
//         console.log(userName);
//     }

//     inner();
// }

// outer(); // Calling / invoking the function...

// ------------------------------------------------------------------------------------------------------------

// Lexical Scoping / nested scoping...

// function outer()
// {
//     let userName = 'Chirag';

//     // console.log(secret); // ReferenceError : secret is not defined

//     function inner()
//     {
//         // let secret = '123';

//         console.log(userName);
//     }

//     function innerTwo()
//     {
//         console.log(userName);

//         // console.log(secret); // ReferenceError : secret is not defined
//     }

//     // console.log(secret); // ReferenceError : secret is not defined

//     inner();

//     innerTwo();
// }

// outer();

// ------------------------------------------------------------------------------------------------------------

// Closures...

function outer()
{
    const userName = 'Chirag';

    function inner()
    {
        console.log(userName);
    }

    return inner; // [Function: inner]
}

let Outer = outer();

console.log(Outer()); // [Function: inner]