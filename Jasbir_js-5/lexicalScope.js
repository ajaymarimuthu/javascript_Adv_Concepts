

// var varname=10;
// function fn (){
//     var varname = 20;
//     console.log('varname',varname);
// }

// fn();

// End of above qustion 


// *********************************************************


// var varname=10;


//fn definition
// function b(){
//     console.log(varname);
// }

//fn definition
// function fn(){
//     var varname=500;

    // fn call
//     b();

//     console.log(varname);
// }
// fn();

// Answer : 10 then 20 


/**** Outer scope is always determind by funciton definiton.
 * 
 *   So just close the function definition and check what variable is accessible that is your outer scope of your function.
 * 
 * **/ 




// Question 2 :
// 

var varname=10;

function fn(){
    var varname=500;
 
    function b(){
        console.log(varname);
    }
    b();
    console.log(varname);
}
fn();






