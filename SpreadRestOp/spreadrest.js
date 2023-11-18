
// Spreading Objects:

const obj={
    name :"Ajay",
    age:27,
}

const {name,age}={...obj}

// console.log(name);
// console.log(age);

// -----------------------------------------------

// Spreading Array:

const arr= [1,2,3];

const [a]=[...arr];
// console.log(a);



var article=["line one","line two","line three"];
var insertedLine=["insettedline"];

var combinedArr= [...article,...insertedLine]

// console.log(combinedArr);


// copying array 

var arr1=[1,2,3];
var arr2=[4,5,6];

const arr3=[...arr1,...arr2];
// console.log(arr3);



// -----------------------------------------------


                              // Spread Operator 
                              // ==============

// we can pass n number arguments as a last paramter to use spread operator 

function sum(a,b,...numbers){

    var mul=a*b;

    var sum=0;

    for(const num of numbers){
        sum+=num;
    }


    console.log(mul, sum);

}

sum(2,2,5,5,5,5,5)






