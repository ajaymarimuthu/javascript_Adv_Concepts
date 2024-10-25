"use strict;"





// const box = document.querySelector(".box");
// console.log('box');

// function cb1(){
//     alert('clicke 1')
// }


// function cb2(){
//     alert('clicke 2')
// }

// box.addEventListener('click',cb1);
// box.addEventListener('click',cb2);
 
const btn=document.querySelector('.btn')

const input=document.querySelector('.inputFIeld')
const ulList=document.querySelector('.ulList')
// console.log('----',input.value);


function addFunc(){
    // console.log(input.value);

    if(!input.value){
        return alert('enter value')
    }

    const li=document.createElement('li');

    li.innerText =input.value;

    ulList.appendChild(li);

    li.addEventListener('click',function(){
        li.remove();
    })

    input.value ='';


    
}
btn.addEventListener('click',addFunc)
