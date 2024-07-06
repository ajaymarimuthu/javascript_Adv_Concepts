

//Fact-1 :by default Js gives you undefined;

// var a;
// console.log("value in a--",a);

// console.log("ans",5/2);   // gives 2.5 like mathemetical operator
 

function fun(param){
    // console.log("Hello world",param);
}

// let value=fun();
// console.log('value---',value);  // here we will get UNDEFINED,, fun fucntion returns nothing just printing a console, so by default JAVASCRIPT gives undefined value to the variable value.


function fun2(param){
    // console.log("Hello world",param);

    let val=2100;
    return 
    val;
}

let value2=fun2(10);
// console.log('-----value2',value2); // here we will get UNDEFINED,, because we have returned from funtion , so JAVACRIPT automatically adds a SEMICOLON AND ENDS THE LINE


//  -------------------OBJECTS-------------------

let cap={
    'name':"AJAY",
    lastname : "ROGERS",
    isAvenger : true,
    address:{
        city:'chennai',
        COuntry:"INDIA"
    },
    sayHi : function(){
        console.log("CAPTAIN HIIII");
    },
    movies:["AVENGER","ENDGAME"],
    "10":"AJJJJJJJJJJJJ",
    // 10:"NUMBER 10"
}


// console.log("capppppp",cap);
// console.log("cappp 10 number",cap[10]);


// -----------Accessing Object values ----------- 
// USING DOT AND SQUARE BRACKET OPERATOR 


// ITERATING object USING FOR-IN LOOOOOPPP 

// for(let key in cap){
//     console.log("key:::",key,"valueee::",cap[key]);
// }




// -----------IMPORTANT ----------- 

for(let key in cap){
    console.log("key:::",key,"valueee::",cap.key); // it will give undefined 
}



  






