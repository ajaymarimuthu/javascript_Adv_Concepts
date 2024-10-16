

/******
 * 
 * wyas to create an object in js
 * 
 * 1.) Object literal*
 * 2.) Object.create
 * 
 * ************/ 

// SEE BELOW for explantions //


/******
 * 
 * wyas to create an object in js
 * 
 * 1.) Object literal* 
 * 
 * when we creeate an object using literal we get below things.
 *  1.) Properties adn method
 *  2.) you ger your parent =>> Prototype
 * 
 * ************/ 

let obj={
    name:'ajay',
    address:{
        state:'TN'
    }
}
// console.log('objeet',obj);





/******
 * 
  * 
 *    Inheritance for in-Built types
 *  A.) Non-primitives
 *     arr: Array (when we expand in console we can see that Captial Array)
 *     object: Object (when we expand in console we can see that Captial Array)
 *     funtion: Function (Capital Fucntion)
 * 
 *  B.) Primitives
 *    Generally number,string,boolean, they dont have any parent
          
      QUESTION:  THen how string literal able to access all the inbuilt methods ?????
 * 
 *    Answer: Autoboxing : whenever you want to access any method or property then that primitive is typecasted as a children of there respective parent class and the  the method 
 *            is applied on that primitive you are returned.
 * 
 * ************/ 



const str =new String('Hello');
// console.log('str',str); // it will have a prototype


const str2 ='AJAY';
// console.log('str2',str2);// it will not have any prototype

// console.log('str',str.__proto__);

let arr=[1,2,3];
// console.log(arr.__proto__.__proto__.__proto__); //null


// Autoboxing : whenever you want to access any method or property then that primitive is typecasted as a children of there respective parent class and the  the method 
//              is applied on that primitive you are returned.
 




/***********************
 * 2nd way of creating Object Object.create
 * ****************************/ 


/**When we create any object like this your object will not inherit any Property from Object (Parent)**/
let newObj= Object.create(null);
newObj.newProp="hello";

// console.log('newobj',newObj);


/**creating an object from another object***********/
let newObj2= Object.create(newObj);
newObj2.name="CAP";
// console.log('newobj2',newObj2); // in prototype it will have newObje newProp only


let newObj3=Object.create(newObj2);

newObj3.name="AJAY";
newObj3.lastName="MMMMMM";

console.log('newobj3',newObj3); 
// console.log("name",newObj3.name);
// console.log("lastname",newObj3.lastName);
// console.log("newpROp",newObj3.newProp);
// console.log('--',newObj.lastName); // we can access from ancestors .. but ancestor cannot . so it iwll Undeinfed



 
for(let key in newObj3){

    // ***********Important****************
    // when we create object with Object.create(null) , it doesnt have Capital Object . so we dont have  has own property method . so adding below line 

    const res= Object.prototype.hasOwnProperty.call(newObj3,key);
   console.log(key , res);
   
    if(res){
        console.log(key, "  ", newObj3[key]);
    }
    
}


// ------------------------------------------------------

let ak={
    name:'aj'
}

let ob=Object.create(ak) // here object created with Object.create id doesn't have its hasownproperty method . so in above case we have achieved use Object.hasOwnProperty.call method
for(let key in ob){
    let res=ob.hasOwnProperty(key);
    if(res){
        console.log(key, ob[key]);
        
    }
    else{
        console.log('nooo');
        
    }
}




  





