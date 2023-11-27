console.log("1");


const myPromise=function(){
    return new Promise((res,rej)=>{
        res(1);
    })
}

const data=myPromise();


setTimeout(()=>{
    console.log("2");
},0)

data.then(function(data){
    console.log("3");
})

console.log("4");

console.log("In this code Microtask queue takes the more priority");