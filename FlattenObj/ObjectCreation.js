// Method-1

var obj={
    a:10,
    b:20
}


// Method-2

var obj2=new Object();
obj2.a=1000;
obj2.b=2000;


// -----------------------------------------------

// Proto
// =====

function sum(){
    console.log("hi");
}

// console.log(sum.__proto__ === Function.prototype); //true
// console.log(sum.__proto__.__proto__ ===  Object.prototype);  //true

var arr=[1,2,3,4];

// console.dir(arr.__proto__); //it gives all the Array prototype

// console.log(arr.__proto__ === Array.prototype) ;  //true 
// console.log(arr.__proto__.__proto__=== Object.prototype) ; //true


// ------------------------- 

var obj1={
    name:"Ajay"
}

var newObj=Object.create(obj1);

// console.log(newObj); // it will give empty object

newObj.age=27;

// console.log(newObj);// it will give age property

// console.log(newObj.name); //"AJAY"
// Question: how its giving output as""Ajay" bcz its inheriting property og obj1


console.log(newObj.__proto__); // it will print the parent object with Name Ajay

console.log(newObj.__proto__.__proto__ === Object.prototype);  //give true