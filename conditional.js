// if,if then else,if else ladder,nested if else
//Write a program to check the number is positive and negative

/*let num = parseInt(prompt("Enter a Number"))
if(num>0){
    console.log("Number is Positive")
}
else{
    console.log("Number is Negative")
//}*/

//Write a Program to take input from the user and  check num is even or odd 

//let nums = parseInt(prompt("Enter a number"))
//if(num%2==0){
   // console.log("number is even")
//}
//else{
  //  console.log("number is odd")
//}

//if else ladder
//Write a Program to check number is positive negative neutral

// let num = parseInt(prompt("Enter a Number")) 
// if(num>0){
//     console.log("Number is Positive")
// }
// else if(num<0){
//     console.log("Number is Negative")
// }
// else{
//     console.log("neutral")
// }

//write a Program to check number is odd or even if number is odd then print area of circle of that number if number is positive then print cube of thar number
//  let num = parseInt(prompt("Enter a Number"))
//   if(num%2!=0 ){
      
//     console.log(num*3)
//   }
//   else if(num%2==0){
//     console.log(3.14*num*num)
//   }
//   else{
//     console.log("Invalid")
//   }

//Nested if else
//syntax
// if(condition){
//         if(condition){

//         }
//         else{

//         }
// }
// else{
// }

let age = parseInt(prompt("enter a age "))
 if(age>=18){
    let num = parseInt(prompt("press 1 for Indian"))
    if(num ==1){
        console.log("u are eligible")
    }
    else{
        console.log("u are not eligible")
    }
 }
else{
    console.log("u are underage")
}