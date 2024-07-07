// var a=10;
// console.log("line 2",a);

// function fn(){
//     var a=20;
//     console.log("line 6",a);
//     a++;
//     console.log("line 8",a);

//     if(a){
//         var a=30;
//         a++;
//         console.log("line 13",a);
//     }
//     console.log("line 15",a);

// }
// fn();
// console.log("line 19",a);


//0-------VAR----------------

// SUMMARIZE:

// var is Function scope.
// Re-declaration is allowed  in current scope
// we can access before decalration , value will be undefined


// SO inside above fn fucntion ,
// var a is redeclared inside the if condition.
// SO it willl pin to the same previously declared var a inside the funciton.


// ------------------------------------------------------------------------------------




//0-------LET----------------


let a=10;
console.log("line 40",a);

function fn(){
    let a=20;
    console.log("line 44",a);
    a++;
    console.log("line 46",a);

    if(a){
        let a=30;
        a++;
        console.log("line 51",a);
    }
    console.log("line 53",a);

}
fn();
console.log("line 57",a);

// 10 20 21 31 21 10


// SUMMARIZE:
// let =>>> Re-declaration is not allowed in current scope
// ==>> Block Scope
// HOISITING happens 
// cannot acccess the value before decalaration


// -------------------------TEMPORAL DEAD ZONE-----------------------------------------------------


// Before decalring LET variables are not accessible................


console.log("VALUE OF A ",k);

// we will get Reference error: cannot access 'k' before initialization

let k;

console.log("value----",k);


// SUMMARIZE: So before decalration let variable is in temporal dead zone. memory is allocated to undefined , but cannot access it.





TYPE    RE-DECLARE     RE-ASSIGN     SCOPE          T.D.Z
--------------------------------------------------------
VAR     YES            YES           FUNCTION        NO

let     NO             YES           BLOCK           YES

CONST   NO             NO            BLOCK           YES




--------------%%% IMPORTANT  %%%----------------
Javascript provides us the LOGIC 
environment helps us to use these features by giving the OBJECTS (DOCUMENT, CONSOLE, WINDOW ,LOCALSTORAGE)






// ------------------NATIVE BJECTS------------------------------------------------------------------

NATIVE OBJECTS : are part of Javascript=>> Array, Date
HOST OBJECTS : THAT are given to us by our environment. WINDOW, DOCUMENT , CONSOLE , LOCALSTORAGE 












//0-------Var----------------
