

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

// =-----------------Shallow Copy =-------------------

const sObj1={
    a:10,
    b:20,
}

// Methods to create shallow copy 

var sObj2={...sObj1} // this will give shallow copy

var sObj2=Object.assign({},sObj2)// this will also give shallow copy

// console.log(sObj2); 


const sObjArr1={
    a:10,
    b:20,
    c:[1,2,3]
}

const sObjArr2={...sObjArr1}


sObjArr2.a=5555;
sObjArr2.c.push(333); 
// Here we are updating a array , it reflects in sObjArr1 also, its wrong 
// In top level it is fine but in inner level , in our case its array  , change is affecting innerlevel (array )
//To overcome below deepcpy is used
// var sObjArr2=JSON.parse(JSON.stringify(sObjArr1))// this line will create deep copy of sObjArr1. 




// console.log("sObjArr1",sObjArr1);
// console.log("sObjArr2",sObjArr2);





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

// console.log("with funciton of obj3",obj3);

const obj4= JSON.parse(JSON.stringify(obj3));

// console.log("without funciton of obj3",obj4);



// To OVercome this problem we need to write Polyfill of Deep Clone 




// -------------------Polyfill of DeepCLone------------------------------------




const deepObj={
    a:10,
    b:25,
    c:{ 
        coo:10,        

        d:{
            doo:10,

            e:{
                doo:10,
            }
        }
     },
     d:[1,2,3,[4,5,6]],

     sayHi:function(){
        console.log("Hiii");
     }
}


// Complete  Deep clone example for an object  
function deepClone(obj){

    if(typeof obj === 'number'||
       typeof obj === 'string' ||
       typeof obj === 'boolean' ||
       typeof obj ==='function'
    ){
        return obj;
    }
    else if(Array.isArray(obj)){
        return obj.map(val=>deepClone(val))
    }
    else{
        return Object.keys(obj).reduce((acc,key)=>{ 

            acc[key] = deepClone(obj[key])
            return acc;
    
         },{})
   
    }  
    
}


// const deep1= JSON.parse(JSON.stringify(deepObj))
// console.log(deep1);


const res=  deepClone(deepObj);


// console.log(res);



