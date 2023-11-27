// console.log("1");
// How to make a function Promisify see below code
// Iam going to read a file 

const fs=require("fs");

const promisifiedFunction=function(filepath){

    return new Promise((res,rej)=>{

        fs.readFile(filepath,"utf-8",function(err,data){
            if(err){
                rej(err);
            }
            else{
                res(data);
            }
        })
    })
}


promisifiedFunction("../CallBacks/test1.txt")
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
})

