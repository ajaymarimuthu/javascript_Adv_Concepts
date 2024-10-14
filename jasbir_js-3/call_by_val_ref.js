

// If R.H.S is non-primitive then the L.H.S gets reference of heap where it is stored .
// If R.H.S is primitive then the L.H.S gets  value .H


let arr =[1,2.3,4];
let arr2=arr;
arr2.pop();  // it holds the reference of arr so in arr the last value will be popped. but in next line a new value is placed in arr2 (it is a primitive value Number)
arr2=10;
// console.log('arr',arr);  
// console.log('arr2',arr2);


function modifier(a,b){
    console.log('aa',a);
    console.log('bb',b);

    a[0]=20; // it will go to heap and change the value (Because a[0] this syntax will change value in heap)
    b[1]=30;  // it will go to heap and change the value (Because b[1] this syntax will change value in heap)

    a=20; // it will go to stack and change the value (Because a this syntax will change value in stack)
    b=30;  // it will go to stack and change the value (Because b this syntax will change value in stack)
 


    console.log('aa',a);  // o/p::: 20  because we have changed instack in above line  (it will persist only in stac)
    console.log('bb',b);  //  o/p::: 30  because we have changed instack in above line  (it will persist only in stac)
}

let p=[4,5,6];
let q=[7,8,9];

modifier(p,q);

console.log('---------',p);
console.log('---------',q);