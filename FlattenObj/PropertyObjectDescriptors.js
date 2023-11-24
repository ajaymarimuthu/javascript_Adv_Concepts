
// "usestrict"

var birdNew={

    wings:2

}


Object.defineProperty(birdNew,'legs',{
    value:2,
    writable:false,
    enumerable:false,
    configurable:false
})

birdNew.legs=3;  //silently failing because i have given false in above configuration so we can't change property

// console.log(birdNew);


// //   IN strict mode  
// will get below type error 
// Inheritance.js:58 Uncaught TypeError: Cannot assign to read only property 'legs' of object '#<Object>'
//     at Inheritance.js:58:13



for (let key in birdNew) {

    // console.log(key); // it will print only wings bcz enumberable is false in above config
     
}


// enumerable is false in for loop while iterating object  : check in inheritance

 

// How to prevent an object to not add any more properties ? 
// ans:) 
 

// Object.preventExtensions(birdNew);  //prevent an object to not add any more properties 
// birdNew.high=200;

// console.log(birdNew); // in strict mode it give error Typeerror, otherwise silent fail


// Object.seal(birdNew);  //cannot add property

// objeact.seal it create sealed Object
//meaning it takes an existing Object and apply Object.preventExtension() on it 
//makes all the existing propertis as configurable :false
// Usecase: not able to add new properties and reconfigure or delete any
//Can modify exisitg properritses
 

// birdNew.weight="500"; 


// Object.freeze(birdNew) 

// objeact.freeze it create frozen Object
//meaning it takes an existing Object and apply Object.preventExtension() on it 
//  it wont allow to change exisiting properties
//makes writable:false

// birdNew.wings=3000

// console.log(birdNew);



// Accessor and Mutator 

const accObj={

    //accessor
   
    get a(){
        return this._a_+"Hi"; 
    },
    //mutator
    set a(val){
        this._a_=val*3;
    }

    
}

accObj.a=10;

// console.log(accObj.a);


 