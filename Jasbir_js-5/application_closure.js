/******
 * 
 * 
 *
 * 1.) Create Private variables
 * 2. memoize a function
 * 3.) infinite curry
 * 
 * 
 * ************/


/**************Memoized function************/


// i need to memoize a function reason is because time taking and repetive code.
// So i need to write memoized function

function calc(n){
    let sum=0;
    for(let i=0;i<n;i++){
        sum+=n;
    }

    return sum;
}


function memoizeFun(fn){

    //object->input and output
    let cache={};


    return function(input){

        if(cache[input]){
            return cache[input];
        }

        const result=fn(input);
        cache[input]=result;

    }
}

const effectiveFun= memoizeFun(calc);


// console.log('optimized---------');
// console.time();
// effectiveFun(1000000);
// console.timeEnd();


// console.time();
// effectiveFun(1000000);
// console.timeEnd();





// *********infinit currying***************




function countFn(param){
    let count=0;
    count++;

    if(param === 0){
        console.log('count',count);
    }
    else{
        return function inner(param){
            count++;
            if(param === 0){
                console.log('count',count);
            }
            else{
                return inner;
            }
        }
    }
}

countFn()(0);
countFn()()(0);
countFn()()()(0);