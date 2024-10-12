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


// let a=10;
// console.log("line 40",a);

// function fn(){
//     let a=20;
//     console.log("line 44",a);
//     a++;
//     console.log("line 46",a);

//     if(a){
//         let a=30;
//         a++;
//         console.log("line 51",a);
//     }
//     console.log("line 53",a);

// }
// fn();
// console.log("line 57",a);

// 10 20 21 31 21 10


// SUMMARIZE:
// let =>>> Re-declaration is not allowed in current scope
// ==>> Block Scope
// HOISITING happens 

// hoisting is basically when  emmory is allocated inside the stack 

//  Here memory allocation is first step 
// for variable undefined will be given and for fucntion some memenry allocated in heap 
// cannot acccess the value before decalaration


// -------------------------TEMPORAL DEAD ZONE-----------------------------------------------------


// Before decalring LET variables are not accessible................


// console.log("VALUE OF A ",k);

// // we will get Reference error: cannot access 'k' before initialization

// let k;

// console.log("value----",k);


// SUMMARIZE: So before decalration let variable is in temporal dead zone. 
// memory is allocated to undefined , but cannot access it.





// TYPE    RE-DECLARE     RE-ASSIGN     SCOPE          T.D.Z
// --------------------------------------------------------
// VAR     YES            YES           FUNCTION        NO

// let     NO             YES           BLOCK           YES

// CONST   NO             NO            BLOCK           YES




// --------------%%% IMPORTANT  %%%----------------
// Javascript provides us the LOGIC 
// environment helps us to use these features by giving the OBJECTS (DOCUMENT, CONSOLE, WINDOW ,LOCALSTORAGE)






// // ------------------NATIVE BJECTS------------------------------------------------------------------

// NATIVE OBJECTS : are part of Javascript=>> Array, Date
// HOST OBJECTS : THAT are given to us by our environment. WINDOW, DOCUMENT , CONSOLE , LOCALSTORAGE 






//  ----------------------------SHdowing--------------------
// In the current scope if you have a variable then that variable will shaodw the 
// outer vaiable in that scope fi the names are SVGMaskElement.


// ------------------- Legal Shadowing ----------------------

// var fruits="apple";

// console.log('fruits',fruits);

// {
//     let fruits;
//     fruits='apple';
//     console.log('fruits--',fruits);

//     {
//         let fruits;
//         console.log('fruits',fruits);
//     }
// }




// ----------------------- Ilegal shadowing -------------------

// uncomment below lines onyl and check it will show error  .
// Because   here var has this whole area as a scope . So if we use let outside and var inside then it illegal showiding.

let fruits="apple";

console.log('fruits',fruits);

{
    let fruits;
    fruits='apple';
    console.log('fruits--',fruits);

    {
        var fruits;

        console.log('fruits',fruits);
    }
}







//0-------Var----------------


console.log("thissss",this);




----------------
for every execution contex we have below things

1.) varibale, fucntions,
2,) outer scopes
3.) window object 


Native Object: that are part of JS =>> array , date  , those given by JS
Host object: that are given by environment ,, window ,, console ,document  local Storage, session storgare.