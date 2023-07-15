// 1) Given an array of numbers. Write a function to separate odd and even numbers in
// different arrays.
// let Arr =[45, 12, 3, 6, 17, 0]
//    let odd = [],
//    let even = [];

// for (let i=0;i<Arr.length;i++){
//     if (i%2==0) {
//         odd.push(Arr[i])
//     }
//     else {
//         even.push(Arr[i])
//     }
// }

// console.log(odd)
//console.log(even)
//------------------------------------------------------------ 


// 2) Write a function that calculates sum, difference, multiplication and division between
// given array elements depending on passed operation symbol. Write appropriate function
// for each operation.

// let numbers = [1, 5, 8, 13]
// let sum = 0
// function sumery(symbol, arr){
//  if(symbol === "+" ) {
// for (i = 0; i < arr.length; i++) {
//   sum = sum + arr[i]
// }
//   } return sum
//     }
// console.log(sumery("+", numbers))


// let a = [60, 5, 3, 2]
// let difference = a[0]
// function diff(symbol, arr) {
//   if (symbol == '-') {
//     for (i = 1; i < arr.length; i++) {
//         difference -= a[i]
//       }
//   }
//   return difference
//        }
//    console.log(diff("-", a))

// let a = [60, 5, 3, 2]
// let division = a[0]
// function div(symbol, arr) {
//   if (symbol == '/') {
//     for (i = 1; i < arr.length; i++) {
//         division /= a[i]
//       }
//   }
//   return division
//        }
//    console.log(div("/", a))



// let a = [2, 2, 3]
// let mult = 1
// function multiplication(symbol, arr){
//  if(symbol === "*" ) {
// for (i = 0; i < arr.length; i++) {
//   mult = mult * arr[i]
// }
//   } return mult
//     }
// console.log(multiplication("*", a))


//------------------------------------------------------------------



// 3) Write a function which receives two strings and removes appearances of the second
// string from the first one.

// let a = "This is some text"
// let b = "is"
// function string(str) {
//   let strArr = str.split(b)

//   return strArr.join("")
// }
// console.log(string(a))
//-------------------------------------------------------------------
// 4) Given an object. Invert it (keys become values and values become keys). If there is
// more than key for that given value create an array.



// 5) Given two objects. Write a function that performs shallow compare.
let a = {a:1}
let b = {a:1, b:2}
function shallow(a, b) {
  for(let i in a ) {
    for (let j in b) {
     if(a[i] !== b[j] ) {
        return false
    }
  }
 }
 return true
  
 }
 console.log(shallow(a, b))










