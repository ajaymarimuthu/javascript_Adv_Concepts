

// Polyfill of Map fucntion 

let arr=[1,2,3,4,5];


Array.prototype.myMap=function(cb){

    let outputArr=[];

    for(let i=0;i<this.length;i++){
        outputArr.push(cb(this[i]))
    }

    return outputArr;

}

var mapResult=arr.myMap((i)=>{
    return i*2
})

// console.log(mapResult);


// ---------------------------------------------------------

// Polyfill of filter fucntion 


let filterArr=[100,200,300,400,500];


Array.prototype.myFilter=function(cb){

    let outputArr=[];

    for(let i=0;i<this.length;i++){
        if(cb(this[i])){
            outputArr.push(this[i])
        }
       
    }

    return outputArr;

}

var filterResult=filterArr.myFilter((i)=>{
   return i<=300;

})
// console.log(filterResult);




// ---------------------------------------------------------

// Polyfill of Reduce fucntion 



let reduceArr=[100,200,300,400,500];


Array.prototype.myReduce=function(cb,initialValue){

  if(typeof cb !== 'function'){
    console.log("lskdmf");
    return;
  }
    

    let acc;
    let i;

    if(initialValue === undefined || initialValue === null){
        acc=this[0];
        i=1;
    }
    else{
        acc=initialValue;
    }


    for(i;i<this.length;i++){
        acc=cb(acc,this[i]);
        
    }

    return acc;



 

}

var reduceResult=reduceArr.myReduce((acc,curr)=>{
    return acc+curr
})
// console.log(reduceResult);

var varName=10;

function b(){
    console.log("in bb",varName);
}

function c(){
    var varName=20;
    b();
    console.log(varName);
}


// c();



