// ---------------clousre-------------

var n="ajay";
function greet(){
    console.log("hello",n);    
}

n="scaler"

// greet();



let f=function(){
    let i=10;

    return ()=>{
       console.log(i);
       console.log("this",this);
    }
}

// f();
// console.log(f());
let cFun=f();

// console.log(cFun());
// console.dir(f())


function ofun(){

    let count=0;    
    function inner(){
        count++;
        return count
    }

    return inner;

}

// console.log(ofun());

const inner=ofun();
const inner2=ofun();

console.log(inner()); //1 
console.log(inner());    //2
// 
console.log(inner2()); //1 
console.log(inner2()); //2





//  ----------------------Calculator with IIFE----------------------------


const counter=(function(){

    var privateCounter=0;

    function changeValueFunc(val){
        privateCounter+=val;
    }

    return {
        incrementFunc:function(){
            changeValueFunc(1);
        },
        decrementFunc:function(){
            changeValueFunc(-1);
        },
        displayOutput:function(){         
            return privateCounter;
        }
    }

})()


// console.log(counter.displayOutput());
// counter.incrementFunc();
// counter.incrementFunc();
// counter.incrementFunc();

// console.log(counter.displayOutput());

// counter.decrementFunc();
 


// console.log(counter.displayOutput());


// In this changeValueFunc is acting like closure because it is defined in inner fucntion of all public methods
// and we are calling it later
// changeValueFunc is declared outside and it has privateCounter-variable(it is in global scope) inside 

