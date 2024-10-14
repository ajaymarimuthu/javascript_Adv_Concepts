


// ------------Use Case of ---CALL APPLY BIND----------------------------------


// let cap = {
//     name:'setve',
//     sayHi:function(avg1,avg2){
//         console.log('Hey',avg1,avg2);
//         console.log('Hi from ',this.name);
//     }
// }
// let ironman = {
//     name:'TonyStark',
     
// }

// cap.sayHi('Peter','Wanda');


// /***** Method to call : borrow a method/

// Call Method is generally used to borrow a method for any Object we are calling 


// 1. Call
// sayHi.call(ironman,'AJay','Vijay');


// ---------------------------------------------------------------------------


// let cap = {
//     name:'setve',
//     sayHi:function(avg1,avg2 , ...collectionParams){
//         console.log('Hey',avg1,avg2 , ...collectionParams);
//         console.log('------',collectionParams);
//         console.log('Hi from ',this.name );
//     }
// }
// let ironman = {
//     name:'TonyStark',
     
// }




// /***** Method to call/borrow a method/

// APply Method is generally used to borrow a method , You can pass n number of parameteres 



// 2.) APply 
// cap.sayHi.apply(ironman,['AJay','Vijay','kkkk','ooooo']);



// ### REST OPERATOR

// 1.) Wehn you are collecting the parameters, its used as function parameters, always at the last  of the paramteres.


// ### SPREAD OPERATOR

// 1.) Wehn you are spreading an array/object in individual elements



const arr=[1,2,3,4,5,67];


arr.prop="Iam a property";
arr.method = function (){
    console.log("inside arr method");
    return "returning from array";
}

console.log('resss', arr);

// ### Bind method 
// /***** used to bind a function to `this`.


// let cap = {
//     name:'setve',
//     sayHi:function(avg1,avg2 , ...collectionParams){
//         console.log('Hey',avg1,avg2 , ...collectionParams);
//         console.log('------',collectionParams);
//         console.log('Hi from ',this.name );
//     }
// }
// let ironman = {
//     name:'TonyStark',
     
// }


// cap.sayHi.bind(ironman); // this line will be a copied of SayHi method. It always have ironman object as its `this`

//  with the help of BIND method , we can actually control what will be the value of this inside the function.

// let bindToIronManFunction = cap.sayHi.bind(ironman);

// console.log('bindToIronManFunction',bindToIronManFunction);

// bindToIronManFunction('AJay','Vijay','kkkk','ooooo');


