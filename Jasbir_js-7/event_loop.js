// let a=true;
// console.log('beofre');

// setTimeout(() => {
//     a=false;
//     console.log('i broke while loop');
    
    
// }, 5000);
// console.log('After');

// while(a){

// }



/****************Rule of Thumb
 * 
 * 
 * 
 * 
 * 1.) Every line of code that you wrote i your js file will only execute in call stack
 * 2.) FOr a callback from webAPIS to execute =>sall stack to be empty
 * 3.) Callback queue : As soon as task of asynchronous function is done there cb is immediately enqued in tat queue
 * 4.) Event loop: Primary work of event loop is continuosuly monitors the cb queue and check if call stack is empty or not. 
 * if empty it pushes the cb in call stack.
 * 
 * 
 * 
 * 
 * 
 * ****************************/ 



// console.log('Before');

// const cb2=()=>{

//     console.log('in cb2');
    
//     while(true){

//     }
// }

// const cb1= ()=> console.log('hello');

// setTimeout(cb2, 1000)
// setTimeout(cb1, 2000)

// console.log('After');




// ********************************************************


console.log('before');

function customInterval(cb,delay){

    function fn(){
        
        cb();
        setTimeout( fn, delay);
    }

    setTimeout(fn,delay);

}

function fn(){
    console.log('iam called');
    
}

customInterval(fn,1000);



