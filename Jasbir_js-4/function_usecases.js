/*************
 * 
 * 
 * Functions are first class citizens in Javascirpt => fn acts as Object in js
 * 
 * Objects: 
 *    *  assign address of an object in another variable
 *    *  pass an object as a parameter
 *    *  return an object from a function 
 * 
 * *****************/ 


/*******
 * 
 * 0 . Function has two parts
 * 
 *     fn. definition
 *     fn. invocation
 * 
 * 
 * **********/ 

// Fucntion Defintion 

//  function fn(){



    // console.log('cALLIng');


    
//  };




 // fn invocation
//  fn();




 //accesing the address of funtion
//  console.log('address of function',fn);


/************First behaviour**************/ 

//   Assiging address of object to another variable

// let obj ={name:'ajay'};
// let obj2=obj;

// function fn(){
//     console.log('hwlllo ian fn');
// }

// let anotherName = fn;
// anotherName();


// ------------------------------------------------------------


/**** *************** 2nd Behaviour ********************/ 

// Pass an object as a paramater .

let obj ={name:'ajay'};

function biggFun(param1){
    // console.log(param1);
    param1();


}

// biggFun(obj);


// in the same way am trying to pass fucntion as parameter 

biggFun(smallFun);

function smallFun(){
    // console.log('Iam small');
}



// Higher Order Dunciton : Fn that receives a fn as a parameter or return a fucntion . 
// Cb: Fn that is passed as a parameterto another function and that will be called later .


 /**
  * 
  * UseCases of HOF.
  * 
  * 1. arr=>> object
  * 2. you can create fn for similar behaviour
  * 
  * 
  * ***/

 function squareer(source){

    let newArr=[];

    for(let i=0;i<source.length;i++){

        newArr[i]=source[i]*source[i]

    }
    return newArr;

 }
 function cuber(source){
    let newArr=[];

    for(let i=0;i<source.length;i++){

        newArr[i]=source[i]*source[i]*source[i];

    }
    return newArr;

 }
 function getFirstName(source){

    let newArr=[];

    for(let i=0;i<source.length;i++){

        newArr[i]=source[i].name;

    }
    return newArr;

 }

/*******Above lines are repeative we can ignore above*******************/  

 

 let arr=[1,2,3,4,5];
 let metaArr = [{name:'Ajay',lastName : 'MRRR'},{name:'Vijay',lastName : 'KKKK'}]

 let sq =squareer(arr);
 let cube =cuber (arr);



 function transformer(source,loginFn){
    let newArr=[];

    for(let i=0;i<source.length;i++){

        newArr[i]=loginFn(source[i]);

    }
    console.log('anssss',newArr);
    return newArr;
 }

 function sqFn(a){
   return a*a;
 }

//  transformer(arr , sqFn);

 // we are passing a function as a parameter in above line


 function sum(acc,ele){
    console.log('acc & ele' , acc, ele);
    return acc+ele;
 }


 Array.prototype.myReduce = function (cb,defaultVlaue){
    

    let idx= defaultVlaue === undefined ? 1 : 0 ;

     let acc=  defaultVlaue === undefined ? this[0] : defaultVlaue;


    for(let i=idx;i<this.length;i++) {
        acc = cb(acc,this[i]);
    };
    return acc;

 }

 const ans = arr.myReduce(sum);
 console.log('answer',ans);