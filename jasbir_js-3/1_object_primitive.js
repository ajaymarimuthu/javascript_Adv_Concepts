 
/*



In JS 
Primitives : number, string , booleans, null ,undefined 
             Symbol, BigInt
    
EVERYTHING ELSE IS AN OBJECT    (ARRAY, OBJECT , FUNCTIONS) SEE BELOW FOR CLEAR EXPLANATION


OBJECT: 
   A.) Key , Value pair
   B.) property and methods

*/


// let cap = {
//   //prperties
//   name: "Steve",

//   // methods

//   sayHi: function () {
//     console.log("HIII");
//   },
// };

// let arr=[1,2,3,4,5,6];


/*AN ARRAY IS AN OBJECT*/
// ---------------------------

// we can add anything to an array EXAMPLE: string and function ,,, see below example 

// arr.prop="Iam a property";
// arr.method = function (){
//     console.log("inside arr method");
//     return "returning from array";
// }

// console.log("arrrrrrrayyyy",arr); // this will print array with new values i have added




/* FUNCTION IS AN OBJECT*/
// ---------------------------

// function fn(){
//     console.log('hiiiii');
//     return "Iam a functio ";
// }
 
// fn.myProperty="helllo";
// fn.myMethod = function(){
//     console.log('hiiiii');
//     return "Iam newly added function to an existing function fn...";
// }


// console.log("Function property",fn.myProperty);
// console.log("Function property",fn.myMethod());

// -----------------------------------------------------------------------------------------------------------------


// A function that has a Key , which is called as a method .
 
// EX: 
// let cap ={

//     // below is a property 
//     name:'ajau';

//         // below is a method
//     sayHi : function (){
//         console.log('Hiiiiiiii');
//     }
// }

// let sayHiAdd= cap.sayHi;


// initially in GEC , below three will be three


// GEC:  global = window
//       this = window 
//       ca = undefiend:
//       sayHiAdd = undefined;



// "use strict"

// console.log('this in GEC', this);

var fName='loki';
let cap={
   fName:'Steve',
   sayHi:()=>{
      console.log('inside func 106',this.fName);
      console.log('this inside func 107',this);

      const inner = ()=>{
         console.log('inside inner 110',this.fName);
         console.log('this inner 111',this);

      }
      inner();

   
   }
}
cap.sayHi();





