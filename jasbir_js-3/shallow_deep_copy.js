/****
 * 1.assignment
 * 2.shallow copy
 * 3.Deep copy
 * 
 * ****/ 

   

/********* * .shallow copy
 * 
 * 
 * copy values  on the first level
 * 
 * 1. using spread operator
 * 
 * 
 * **************/ 

// let arr=[1,2,3,4,5];
// let arr2=[...arr];

// arr2.pop();
// console.log(arr);
// console.log(arr2);


// case 1: if array/object contains non-primitives 


// let arr=[1,2,[6,7],5];
// let arr2=[...arr];

// arr2[2].pop();
// console.log(arr);
// console.log(arr2);



/********
 * 
 * Deep copy : copies non-primitives at all level
 * Object => JSON.stringfy after JSON.parse  (Costly operation, very slow)
 * 
 * 
 * 
 * ****************/ 
