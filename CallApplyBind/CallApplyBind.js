


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



var salaryFun= function(){


    // Here "this" will be dynamic .whatever context we passing it takes that context's value 

     var res= this.basePay+this.variablePay;

     console.log(res);
   
}

salaryFun.call(emp1);
salaryFun.call(emp2);




