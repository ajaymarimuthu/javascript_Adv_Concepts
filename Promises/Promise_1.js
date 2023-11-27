// console.log("promises");



const fs=require('fs');


const prom1= fs.promises.readFile("../CallBacks/testfg1.txt", 'utf-8')

prom1
.then(function(data){
    console.log(data);
    return fs.promises.readFile("../CallBacks/test2.txt", 'utf-8')
})
.then(function(data){
    console.log(data);
    return fs.promises.readFile("../CallBacks/test3.txt", 'utf-8')
})
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
})