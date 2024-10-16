/*****
 * 
 * 
 * Synchronous code:: the code executes line by line
 * 
 * ***************/

// console.log('Before');

// function fn(){
//     console.log('fn');
    
// }
// fn();
// console.log('After');



/*****
 * 
 * 
 * Asynchronous code:: A part of code is executes first and apart of code is delayed and that part is 
 * executed later.
 * 
 * ***************/


console.log('Before');

function fn(){
    console.log('fn');
    
}
setTimeout(fn, 2000);
console.log('After');