let cap = {
    name:'setve',
    sayHi:function(avg1,avg2 , ...collectionParams){
        console.log('Hey',avg1,avg2 , ...collectionParams);
        console.log('------',collectionParams);
        console.log('Hi from ',this.name );
    },
    address:{
        myFn:function(){
            console.log(this);
        }
    }
}
let ironman = {
    name:'TonyStark',
     
}



// ABove is Base method . am utilizing it for Call, apply and Bind 


// ### Parent function , this myCall will be available for all children functions
Function.prototype.myCall =function(toBeCalled , ...args){
    // console.log(this); // it points to calling function in out case i.e. sayHi function which we decalred above.
    // console.log('toBeCalled',toBeCalled);

     toBeCalled.tempMethod = this; // here am adding the sayHi method in the name of tempMethod
     toBeCalled.tempMethod(...args);
 
}



// cap.sayHi.myCall(ironman , 'HERO1','Hero2');





// -------------------------------------------------------------------------------------------


let cap2 = {
    name:'setve',
    sayHi:function(...collectionParams){
        console.log('Hey', ...collectionParams);
        console.log('------',collectionParams);
        console.log('Hi from ',this.name );
    }
};

let ironman2 = {
    name:'TonyStark',
     
}



Function.prototype.myApply=function(toBeCalled , args){

    toBeCalled.myMethod=this;
    toBeCalled.myMethod(...args);

}


// cap2.sayHi.myApply(ironman2 ,[ 'HERO1','Hero2','Hero3','Hero4','hero5'] );


// -------------------------------------------------------------------------------------------


let cap3 = {
    name:'setve',
    sayHi:function(arg1,arg2,...collectionParams){
        console.log('Hey args', arg1 , arg2);
        console.log('Hey collections', ...collectionParams);
        console.log('------',collectionParams);
        console.log('Hi from ',this.name );
    }
};

let ironman3 = {
    name:'TonyStark',
     
}



Function.prototype.customBind = function (obj) {
     
    obj.fnRef=this;

    return function(...args){

      obj.fnRef(...args);

    }
}


const bindFn=cap3.sayHi.customBind(ironman3 );
bindFn('Aj' ,'Vj' , 212,2,3,4,5);
