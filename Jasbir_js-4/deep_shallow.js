

//  Number, strings, boolean , undefined 

// Primtivies types: the variable refers to actual data

// let a=10;

// Non-primtives : the variable refers to address

// let arrr= [1,2,3,4,5];




/***
 * ways to copy data
 * 
 * 0. Assignment
 * 
 * 1.) shallow copy
 * 2.) Deep copy
 * 
 * ***/


/*****Assignment*/

// Primitives =>> values are copied /

let a=10;
let b=a;
b=299;

// console.log('a , b', a,b);


// Non-Primitives =>> Address are copied /

let arr= [10,20,30,40];

let arr2=arr;

arr[2]=500;

// console.log('arr , arr2', arr,arr2);



// *********************Shallow copy********************************


let person ={
    fname:'Ajay',
    lname: 'Marimuthu',
    adress:{
        street:'Chennai',
        state:'TN',
        Country:'India'
    }
}

// Shallow copy means creating a copy such that both of the types are not independent.




let shallowCopied ={...person}
 //it gives copy of first level but the second level 
 //the address  object memroy is shared for shallowCopied object
// console.log(shallowCopied);

shallowCopied.fname ='TOnyyyyyyy';
// in above line i have made change in first level no impact on Person object 
// console.log('Perosn Object',person);



shallowCopied.adress.Country ='U.S.A';
// in above line i have made change in inner level 
//so there is impact on both Person  and shallowCopied object 

// console.log('Perosn Object',person);

// console.log('shallowCopied ',shallowCopied);





// *********** Object.assign *********************

let shallowCopied2= Object.assign({},person);
// console.log(shallowCopied2);

// This is another way to do shallow copy 















// *********************Deep copy********************************

// D andeep  copy means creating a copy such that both of the types are independent.They DOn't share any memory space. 

// JSON.stringify and json.parse 

// let obj = JSON.stringify(person);

// let copiedOne=JSON.parse(obj);

let copiedOne = JSON.parse(JSON.stringify(person));

// console.log('person',person);
// console.log('typeof obj',copiedOne);



