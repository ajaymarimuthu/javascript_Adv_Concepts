

const species=Object.create({
    type:"species",
    speak:function(){
        console.log(`${this.type} is speaking`);
    }
})
// species.creature=function(){
//     console.log("iam creature");
// }

var animal=Object.create(species);
animal.walk=function(){
    console.log("animal is walking");
}

var bird=Object.create(animal);
bird.fly=function(){
    console.log("bird is flying");
}


// console.log(bird); // returns the object Bird with  fly  funtion

// console.log(Object.keys(bird)); //returns the keys only in Bird object as an array


for(let key in bird){
    // console.log(key);  // return all the keys in object from BOTTOM to TOP
}



// IMportant thing in proto---------- 

console.log(Object.keys(bird.__proto__)); // will give animal object

console.log(Object.keys(bird.__proto__.__proto__));  // it will gve empty array because speices dont have any properties


