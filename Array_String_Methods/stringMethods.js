


// ALL STRING METHODS
// ==================



// String length
// ==========

// const text = "javascript"
// const length = text.length;
// console.log('len',length);



// -----------------------------------------------------
// ------------------------------------------------------------------------------------------------------------






// Methods to extracting string characters:::: 

// The at(position) Method
// The charAt(position) Method
// The charCodeAt(position) Method
// Using property access [] like in arrays


// The charAt() method returns the character at a specified index (position) in a string:

// const text = "javascript"
// console.log('character--',text.charAt(0)); returns  output: j 


// ------------------------------------------------------------------------------------------------------------



// The charCodeAt() method returns the code of the character at a specified index in a string:

// The method returns a UTF-16 code (an integer between 0 and 65535).




// const text = "javascript"
// console.log('character--',text.charCodeAt(0));  outptu: 106 



// ------------------------------------------------------------------------------------------------------------


// The at() method returns the character at a specified index (position) in a string.

// The at() method is supported in all modern browsers since March 2022

// const name = "W3Schools";
// let letter = name.at(-1);

// console.log(letter)


// Note
// The at() method is a new addition to JavaScript.

// It allows the use of negative indexes while charAt() do not.

// Now you can use myString.at(-2) instead of charAt(myString.length-2).



// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------



// Extracting String Parts::::
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)


// JavaScript String slice():::
// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: start position, and end position (end not included).


// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);

// console.log(part);




// If you omit the second parameter, the method will slice out the rest of the string:
// 
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7);

// console.log(part);



// If a parameter is negative, the position is counted from the end of the string:
// 
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12);
// console.log(part);


// This example slices out a portion of a string from position -12 to position -6:

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12, -6);
// console.log(part);




// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------



// JavaScript String substring()
// substring() is similar to slice().

// The difference is that start and end values less than 0 are treated as 0 in substring().

// Example
// let str = "Apple, Bananas, Kiwi";
// let part = str.substring(7, 14);
// console.log(part);
// If you omit the second parameter, substring() will slice out the rest of the string.

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------


// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();
// let text3 = text1.toLowerCase();

// console.log('-----',text2,text3);




// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------




// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);

// console.log(text3);




// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------




// Note
// All string methods return a new string. They don't modify the original string.

// Formally said:

// Strings are immutable: Strings cannot be changed, only replaced.



// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

// JavaScript String trim()
// The trim() method removes whitespace from both sides of a string:

// Example
// let text1 = "      Hello World!  --    ";
// let text2 = text1.trim();


// console.log(text2);

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------



// JavaScript String repeat()
// The repeat() method returns a string with a number of copies of a string.

// The repeat() method returns a new string.

// The repeat() method does not change the original string.

// Examples
// Create copies of a text:

// let text = "Hello world!";
// let result = text.repeat(3);

// console.log(result);



// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------




// Replacing String Content
// The replace() method replaces a specified value with another value in a string:

// Example
// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");

// console.log(newText);


// Note
// The replace() method does not change the string it is called on.

// The replace() method returns a new string.

// The replace() method replaces only the first match

// If you want to replace all matches, use a regular expression with the /g flag set. See examples below.


// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

// JavaScript String split()
// A string can be converted to an array with the split() method:

// Example
let text = "ajay";
// text.split(",")    // Split on commas
// text.split(" ")    // Split on spaces
// text.split("|")    // Split on pipe


// console.log(text.split("").reverse().join(""));





// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------





// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------






// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------






// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------





// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------




// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------






// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------








// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------







// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------







// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------







// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------







// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------





// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------





// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------




// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------