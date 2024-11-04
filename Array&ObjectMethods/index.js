// //Arrays Task
// // Write a function that takes an array and returns a new array with the last item removed

// let fruits = new Array("Apple", "Banana", "Mango");

// // function deletedArray(){
// //         fruits.pop()
// //         return fruits
// // }

// // console.log(deletedArray())

// // Write a function that takes an array and returns the length of items it has.

// // function lengthArray(){
// //     return fruits.length
// // }
// // console.log(lengthArray())


// // Write a function that takes an array and an item, returns the array with the item added to the
// // end of array

// // function addElementInArray(element)
// // {
// //     fruits.push(element)
// //     return fruits
// // }
// // console.log(addElementInArray("kivi"))]

// // / Write a function that takes an array and an item, returns the array with the item added to the
// // beginning of array.

// // function addElementInArrayBegin(element){
// //     let newArray = []
// //     newArray.push(element)
// //     for (let i = 0; i < fruits.length; i++) {
// //         newArray.push(fruits[i])
// //     } 
// //     return newArray  
// // }
// // console.log(addElementInArrayBegin("kivi"))

// // / Write a function that takes an array of words and returns a string of the words seperated by

// // function joinWords(){
// //     return fruits.join(",")
// // }
// // console.log(joinWords())

// // function partArray(start,end){
// //     return fruits.slice(start,end)
// // }
// // console.log(partArray(0,2))

// // Write a function that takes an array and an index, returns the item at given index.

// // function returnArrayForIndex(array,index){
// //     for (let i = 0; i < array.length; i++) {
// //         if(i===index){
// //             return array[index]
// //         }
// //     }
// // }
// // console.log(returnArrayForIndex(fruits,1))


// // Write a function that takes an array and an item, removes that item from the array without
// // leaving undefined items, returns the new array

// // function deletedElementForIndex(array,index){
// //     let newArray = []
// //     for (let i = 0; i < array.length; i++) {
// //         if(i===index){
// //             continue
// //         }
// //         newArray.push(array[i])
// //     }
// //     return newArray
// // }
// // console.log(deletedElementForIndex(fruits,1))



// //Object Task

// / Write a function objectToArray(obj) that converts an object to an array of key-value
// pairs.
// let person = {
//     name: "Aqshin",
//     age: 25,
//     city: "Baku"
// };
// function objectToArray(obj){
//     let keyPerson = Object.values(obj)
//     return keyPerson
// }
// console.log(objectToArray(person))

// let array = ["Aqsin",25]

// Bir obyektlər dizisini qəbul edən və onları iki qrupa ayıran funksiya
// Bir qrup, geri qaytarılan callback funksiyasında müəyyən edilmiş şərti yerinə yetirən obyektlərdən ibarətdir
// Digəri, şərti yerinə yetirməyən obyektlərdən ibarətdir.
function partArray(array, callback) {
    let qrup1 = []; 
    let qrup2 = []; 

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            qrup1.push(array[i]); 
        } else {
            qrup2.push(array[i]); 
        }
    }

    return [qrup1, qrup2]; 
}
function isAdult(person) {
    return person.age >= 18;
}

let people = [
    { name: "Aqshin", age: 25 },
    { name: "Ali", age: 15 },
    { name: "Zara", age: 30 },
    { name: "Leyla", age: 17 }
];


let [adults, minors] = partArray(people, isAdult);


console.log("18-dən yuxarı olanlar:", adults);
console.log("18-dən aşağı olanlar:", minors);
