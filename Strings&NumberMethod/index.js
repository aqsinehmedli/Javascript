// String Method Tasks

// 1. Capitalize the first letter of a given string.
// Example: "hello" → "Hello"

// const txt = "hello"
// const newTxt = txt[0].toUpperCase() + txt.slice(1,6)
// console.log(newTxt)




// 2. Check if a string contains a specific substring.
// Example: "Hello World", substring "World" → true

// const txt = "Hello World"
// const checkTxt = txt.includes("World")
// console.log(checkTxt)




// 3. Repeat a given string 'n' times.
// Example: "abc", 3 → "abcabcabc"

// const txt = "abc"
// const newTxt = txt.repeat(3)
// console.log(newTxt)


// 4. Replace all occurrences of a specific word in a string with another word.
// Example: "I love apples", replace "apples" with "oranges" → "I love oranges"

// const txt = "I love apples"
// const newTxt = txt.replace("apples","oranges")
// console.log(newTxt)


// 5. Count the number of words in a sentence.
// Example: "Hello World!" → 2

// function WordCount(str) { 
//     return str.split(" ").length;
//   }
//   console.log(WordCount("hello world"));


// 6. Reverse the characters in a given string.
// Example: "hello" → "olleh"

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// const input = "hello";
// const reversed = reverseString(input);
// console.log(reversed); // Output: "olleh"


// 7. Extract the text between two characters.
// Example: "Hello [World]", characters "[" and "]" → "World"

// const txt = "Hello World"
// const newTxt = txt.slice(5)
// console.log(newTxt)



// 8. Convert a string to snake_case format.
// Example: "Hello World" → "hello_world"

// const txt = "Hello World"
// const newTxt = txt.slice(0,5).toLowerCase() + "_" + txt.slice(5).toLocaleLowerCase()
// console.log(newTxt)


// 9. Remove leading, trailing, and extra spaces in a string.
// Example: "   Hello    World   " → "Hello World"

// const txt = "   Hello    World   "
// const newTxt = txt.trim().replace(/\s+/g, ' ');
// console.log(newTxt)

// 10. Identify the longest word in a given sentence.
// Example: "I love programming" → "programming"

// const txt = "I love programming"
// const newTxt = txt.slice(7)
// console.log(newTxt)




// Number Method Tasks

// 1. Convert a string to a number and handle invalid cases.
// Example: "123" → 123, "abc" → NaN

// const numString = "123"
// console.log(typeof parseInt(numString))

// 2. Round a decimal number to two decimal places.
// Example: 3.14159 → 3.14

// const decimalNumber = 3.14159
// const newNumber = decimalNumber.toFixed(2)
// console.log(newNumber)

// 3. Write a function that returns the square root of a given number.
// Example: 5 → 25

// function NumberSquare(num){
//     return num**2
// }
// console.log(NumberSquare(5))

// 4. Write a function that converts a string to a floating-point number.

// Example: "2.454" → 2.454

// function stringToNum(str){
//     console.log(parseFloat(str))
// }
// stringToNum("2.454")

// 5. Parse a string to an integer
// Example: "55" → 55

// function stringToNum(str){
//     console.log(typeof parseInt(str))
// }
// stringToNum("55")

// 6. Write a function that checks if a given value is NaN (Not-a-Number)

// Example: "ereferf" → true, "23" → false

// function CheckString(str){
//     if(Number(parseInt(str))){
//         return false
//     }
//     else{
//         return true
//     }
// }
// console.log(CheckString("asdfv"))


// 7. Calculate the sum of the digits of a given number.
// Example: 123 → 6

// const num = 123
// const arrayNum = num.toString().split('')
// let element = 0
// for (let index = 0; index < arrayNum.length; index++) {
//     element += parseInt(arrayNum[index]);

// }
// console.log(element)

// 8. Find the number of digits in a given number.
// Example: 1234 → 4

// const num = 1234
// const array = num.toString().split('')
// let count = 0
// for (let index = 0; index < array.length; index++) {
//     count++    
// }
// console.log(count)

// 9. Find the sum of array items
// Example: [1, 3, "5"] → 9

// const array = [1,3,"5"]
// let sumArray = 0
// for (let index = 0; index < array.length; index++) {
//     if(typeof array[index] === 'string'){
//         newNum = parseInt(array[index])
//         sumArray+=newNum
//     }
//     else{
//         sumArray+=array[index]
//     }
// }
// console.log(sumArray)

// 10. Write a function that rounds a given decimal number to the nearest integer.
// Example: 3.12 → 3

// const num = 3.12
// const newNum = parseInt(num)
// console.log(newNum)