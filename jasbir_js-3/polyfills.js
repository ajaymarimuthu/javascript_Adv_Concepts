
// If we write some function in the Parent , then it can be called from its children

// Example: Iam going to create a new fucntion and add it in the parent of the Array.prototype

// Array.prototype.mySumCalc=function(){
//     let sum=0;

//     for(let i=0;i<this.length;i++){
//         sum+=this[i];
//     }

//     console.log('summ',sum);
// }


// let arr=[1,2,3];

// arr.mySumCalc();

// let arr2=[1,2,3,4,5];

// arr2.mySumCalc();


// What are the Benefits of this ?

// Answer.) THrough this way we dont need to write the same fucntion/logic for all cases
//   If we write in the parent then all the children can acces it .

/**
   when we want the feature on all the children of a data type then  add that feature in the PROTOTYPE OF that data type. 
 
 *  **/ 



  //  #### Important


  //  let cap = {
  //    name: "setve",
  //    sayHi: function (avg1, avg2, ...collectionParams) {
  //      console.log("Hey", avg1, avg2, ...collectionParams);
  //    },
  //  };
  //  let ironman = {
  //    name: "TonyStark",
  //  };


  // cap.sayHi.call(ironman,'PETE','STARKKK');


  // what we are doing in above line:

  // we are borrowing the function (sayHi) and placing it inside the ironman Object. See Below... 


  // ### This is what we are achieving 
  // let ironman = {
  //   name: "TonyStark",
  //   sayHi: function (avg1, avg2, ...collectionParams) {
  //     console.log("Hey", avg1, avg2, ...collectionParams);
  //   },
  // };
  




