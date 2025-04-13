


// Call , Apply Bind 

// It is generally used to borrow a function or context  from a separate entity 

// example: 
 
// 1.) there is a calculation funciton . 

// i have emplyee1 ,emplyoee2 ,employee3 . 

// I can pass any context(emplyee1,emplyoee2,employee3) to the calculation
// by borrowing the function 


var obj={
    num:100
};


var myfunc= function (arg1, arg2){
    console.log(this.num+ arg1 + arg2);    
}

// myfunc(10,20) 
// myfunc.call(obj,10,20) 
// in above line , Iam passing an context(obj)  and paramters



// ----------Real Example for Call---------------------------------- 

 
var emp1={
    basePay:1000,
    variablePay:1000,
}

var emp2={
    basePay:2000,
    variablePay:2000,
}



var salaryFun= function(arg1,arg2){
     // Here "this" will be dynamic .whatever context we passing it takes that context's value 
     var res= this.basePay+this.variablePay;

     var args=arg1+arg2;
 
     console.log("salary",res);        
     console.log("args",args)
}


// For call Method 
// Params: 1- Context,  2- params

// salaryFun.call(emp1);
// salaryFun.call(emp2);
// salaryFun.call(emp2,10,10);

// ---------------------- Apply Method ---------------------- 

// For Apply Method 
// Params: 1- Context,  2- Array of params

// salaryFun.apply(emp1,[10,20])





// ---------------------- Bind Method ---------------------- 
// Bind returns the entire function , it wont immediatley execute the function


const rwe=salaryFun.bind(emp1);
// Above line binding the context  and it returns funciton
// rwe(100,100)
// in above function reference we are passing the args 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------



-----------------------------AKSHAY SAINI-------------------------------------------------

CALL METHOD:::::::
let obj1 = {
    firstName:'ajay',
    lastName:'Mari',
    printName:function(){
        console.log(this.firstName+""+this.lastName);
    }
}

obj1.printName();

let obj2 = {
    firstName: 'Vijay',
    lastName:'Mari'
}

obj1.printName.call(obj2)


Call method is method useed for fucntion borrowing in JS . Here we are taking printName fucntion from object1 and placing it inside obj2 .




-----------------------------AKSHAY SAINI-------------------------------------------------



let obj1 = {
    firstName:'ajay',
    lastName:'Mari',
    printName:function(...rest){
        console.log(this.firstName+""+this.lastName+" "+ rest.join());
    }
}

// obj1.printName();

let obj2 = {
    firstName: 'Vijay',
    lastName:'Mari'
}

const res = obj1.printName.bind(obj2,1,2);
res();






