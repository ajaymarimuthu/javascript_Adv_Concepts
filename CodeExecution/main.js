// let a=10;

function fn (){
    console.log("Iam the Fn");;

    function inner(){
        console.log("Iam the inner fn");
    }

    inner();
}

// fn();


// Everthing executed inside the call stack.
// Code outside funtions will be availabel in Global Execution Context (GEC) , like variables and functions.Code
// whenever a funciton invoke happens , a new E.C is created in call stack . imagine a stack .

// then each a everline of that particular function will executed inside that E.C , 
// but again if there is any function invoke is there, then new E.C will be created.C

// After exectung each and every line functions it gets removed from call stack.After


// --------------------------DEVELOPER TOOLS --------------------------

// In source tab place a debugger and check .

// we can see ANONYMUS (i.e ...... GLOBAL EXECUTION CONTEXT)...





// real();

function real() {
console.log("Iam real");
}

// function real() {
//     console.log("NO ,,Iam real");
// }

// function real() {
//     console.log("You both are not");
// }



// ---------------------EXECUTION CONTEXT------------------

// 1. It either belong to the code outside every function.
// 2. whenever a function is called.


// ---------------------EXECUTION CONTEXT CONTAINS------------------

// 1. access to its vaiables and functions
// 2. access to the code you write.

// ---------------------EXECUTION CONTEXT RUNS IN CALL STACK------------------

// 1. creation phase:
//    1. memory allocated for variables and functions
//         variables: undefined
//         function: memory allocated. 


// 2.  code execution phase :
//        code inside E.C is executed . 


console.log("75",a);
var a=10;

function fun(){
    console.log("79",a);
    var a=20;
    console.log("81",a);
}
console.log("83",a);
fun();

console.log("aa",a);