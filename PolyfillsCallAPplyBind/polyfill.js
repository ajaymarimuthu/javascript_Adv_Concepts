

// Below line Syntax of CALL method 
// myfunc.call(obj, agr1,agr2); 
    

// To create Polyfill write it in Prototype 

var obj={
    a:255,
}

function testFunction (param){
    console.log("value of params",param,"value of a",this.a);
}

Function.prototype.myCall=function(obj,...args){
    // console.log(this);
    // "this" refers to the calling function (testfunction)
   
    obj.fnRef=this;
    // we are storing the Reference of testFunction inside the obj(context )\

    obj.fnRef(...args);
    // we are calling the function with the args passed

}


// testFunction.myCall(obj,1000)


// -------------------Polyfill of Apply------------------------------------


function testApplyFunction(param){
    // console.log(param , this.a);
}

Function.prototype.myApply= function(obj,...args){

    obj.fnRef=this;

    return obj.fnRef(...args)
    

}


testApplyFunction.myApply(obj)


// -------------------Polyfill of Bind------------------------------------


Function.prototype.customBind = function (obj) {
    // Write your solution here ========================
    obj.fnRef=this;

    return function(...args){

      return obj.fnRef(...args);

    }
}


// -------------------------------------------- 


// =-----------------Deep clone =-------------------

const obj1={
    name:"Ajay",

}

const obj2= JSON.parse(JSON.stringify(obj1)); // this will give deep clone

// But if we have a function in obj1 then we cant't deep clone , 

const obj3={
    name:"Ajay",

    sayHi:function(){
        console.log(this.name);
    }

}

console.log("with funciton of obj3",obj3);

const obj4= JSON.parse(JSON.stringify(obj3));

console.log("without funciton of obj3",obj4);


