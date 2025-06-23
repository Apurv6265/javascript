// let ar = ["Apurv",5,7,8]
// //PUSH FUNCTION IS USED TO ADD ELEMENT IN LAST PLACE OF THE ARRAY
// ar.push(83)
// console.log(ar)
// //POP FUNCTION IS USED TO DELETE THE LAST PLACE ELEMENT FROM THE ARRAY
// ar.pop()
// console.log(ar)
// //UNSHIFT IS USED TO ADD ELEMENT IN FIRST INDEX OF THE ARRAY
// ar.unshift(44)
// console.log(ar)
// //SHIFT IS USED TO DELETE THE FIRST INDEX ELEMENT FROM THE ARRAY
// ar.shift()
// console.log(ar)
// //SLICE IS USED TO FETCH THE ELEMENT FROM THE ARRAY
// let ar1=ar.slice(0,1)
// console.log(ar1)
// //SPLICE IS USED TO BOTH ADD AND DELETE THE ELEMENT FROM THE ARRAY 
// let ar2 = ar.splice(1,2)//1 is for the index and 2 is for the number of elements to be deleted 
// console.log(ar2)
// let ar3 = ar.splice(1,0,"Joshi")
// console.log(ar3)
//=====================================================================================

// let arr = ["cy",2,3,"N"]
// let arrs = arr.slice(2,3)
// for(let i =1;i<=10;i++){
//     console.log(arrs*i)
// }
//===============================

let a = [1,,3,5,2,4,10,11,15]
let a_start = parseInt(prompt("Enter a number "))
let B_delete = parseInt(prompt("Enter how much elements u want to delete"))
a.splice(a_start,B_delete)
console.log(a)