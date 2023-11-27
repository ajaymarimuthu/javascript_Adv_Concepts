

// console.log("callbacks");

const fs=require('fs');

// Problmes:
// 1.) CALLBACK HELL
//2.) Inversion of control - 
    //    .) Losing the control of code 
    


//--------------------------------------------- Below is called as CALLBACK HELL----------------------//

fs.readFile("./test1.txt", 'utf-8',function(err,data){
    if(err){
        console.log("inside err-1");
        console.log(err);
    }
    console.log(data);
    fs.readFile("./test2.txt", 'utf-8',function(err,data){
        if(err){
            console.log("inside err-2");
            console.log(err);
        }

        console.log(data);
        fs.readFile("./test3.txt", 'utf-8',function(err,data){
            if(err){
                console.log("inside err-3");
                console.log(err);
            }
            console.log(data);
        })
    })
})

//--------------------------------------------- ABove is called as CALLBACK HELL----------------------//