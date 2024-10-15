/********************Closure*****************/

// Closure: Inner function will always have access to its 
//          variables of outer scope (lexical scope). Even if outer function are removed from call stack.

//   Closure is created when E.C is created for the outer funtion .
// 

// BAsic question 

function outerFunction(){
    let count=0;

    function innerFunction(){
        count++;
        return count;
    }
    return innerFunction;
}

const innerFunc = outerFunction();

// console.log(innerFunc());
// console.log(innerFunc()); 
// console.log('ajay');


/*********************Closure question 2*****************************/


function createCounter (init,delta){
    function count(){
        init = init + delta;
        return init
    }
    return count;
}

let c1= createCounter(10,5); 
let c2= createCounter(5,2);

//separate closeure created for both c1 & c2

// console.log(c1());
// console.log(c2());
// console.log(c1());
// console.log(c2());


/*********************Nexted Closure question *****************************/

function getFirstName(fName){

    console.log('I have First name');

    return function getLastName(lName){
        console.log('I have last name');

        return function greeter(){
            console.log(`I am ${fName} ${lName}`);
        }
    }

}


const getLastNameFn = getFirstName('Ajay');
const greetFn =getLastNameFn('MMMM');

// greetFn();


/********************* Closure question *****************************/

function outer(){
    var arr=[];

    for(var i=0;i<3;i++){ //change var to LET and see the change
        arr.push(function fn(){
            i++;
            console.log(i);
        })
    }
    return arr;

}

let arrFn=outer();
arrFn[0]();
arrFn[1]();
arrFn[2]();



















 