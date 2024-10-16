

// Function constructor way to create Object 

// function Person(name,age){
//     console.log(this);
    
//     this.name=name;
//     this.age=age;
//     this,sayHi=function(){
//         console.log(`Iam ${this.name} and my age is ${age}`);
        
//     }


// }

// const person1=new Person('aj',28);
// const person2=new Person('vj',2)

// console.log(person1 , person2);




/***********Classes*****************/


class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sayHi(){
        console.log(`Iam ${this.name} and my age is ${this.age}`);
    }
}




class SuperHuman extends Person{
    constructor(name,age){

        // super calls constructor fro parent 
        super(name,age);
    }
    sayHi(){
        console.log(`Iam ${this.name} super human and my age is ${this.age}`);
    }
}


const superOne = new SuperHuman('ajjjjjjjj',1000);

console.log('suoerhuman',superOne);
superOne.sayHi();
