

// 1.) reverse a string without inbuilt methods ? 
let str="Good";


function reverseString(str){
    let reversed='';
    for(let i=str.length-1;i>=0;i--){        
        reversed+=str[i];
    }
    return reversed;
}

const res=reverseString(str);
// console.log('returnedstring',res);


// -------------------------------------------------


// string is Palindrome or not  ? 

let palinString = 'MOm';

function isPalindrome(reverseStr){


    let str=reverseStr.toLowerCase();


   let i=0;
   let j=str.length-1;

   while(i<j){
    if(str.charAt(i)!== str.charAt(j)){
        return false;
    }
    else{
        i++;
        j--;
    }
   }

    return true;

}

const palinStr=isPalindrome(palinString);
// console.log('palin ??',palinStr);



// ---------------------------Count character occurences-------------------------------------

let occurString= "google";

function countOcc(str){

    let res={}
     
    for(let char of str){
        if(res[char]){
            res[char]++;
        }
        else{
            res[char]=1;
            // console.log('--------',res[char]);
             
            
        }
    }


    return res;

}

const countOccVal=countOcc(occurString);

// console.log(countOccVal);



// ------------------------------find longest sentence---------------------------------------


const longStr= 'aaaaaaaaaaaaaaaaaaaaaaaaaaa ajajajaj aajs asdnalskndasd alks nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn';

function findLongestSentence(str){
    let splittedStr=str.split(' ');

    let max=0;
    let result;

    for(let i=0;i<splittedStr.length;i++){

        let len=splittedStr[i].length;

        if(len>max){
            result=splittedStr[i];
            max=len;
            console.log('len',max);
            
        }
        
    }
    return result;
}

const longest=findLongestSentence(longStr);
console.log(longest);

