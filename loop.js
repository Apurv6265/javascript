// loops in js do while, while,loop,for Of,for each,for in.
//DO WHILE LOOP
//var  n=1;
//  do{
//  console.log(n)
//  //document.write(n)
//  n++
//   } while(n<11)

//write a program to print a table of n number
 
// let num = parseInt(prompt("enter a number"))
// let i=1;
//  do{
//     console.log(num*i)
//     i++
//  }while(i<=10)
//========================================================================================================================================================
// WHILE LOOP
//write a program to print microsoft 15 times
// let i = 1;
// while (i <= 15) {
//   document.write("Microsoft ","<br>");
//   i++;
// }

//write a program to print reverse table using while loop

// let num = parseInt(prompt("Enter a Num"))
// var  i =10
// while (i>0){
//     document.write(num*i)
//     i--
// }

//write a program to print only odd number between 20 to 1

// let num = 20;

// while (num >= 1) {
//   if (num % 2 != 0) {
//     console.log(num);
//   }
//   num--;
// }

// FOR LOOP

// for(let i=1;i<=10;i++){
//   console.log(i)
// }

// let a = parseInt(prompt("Enter a number"))
// if(a>=1 && a<=10){
//   for(let i =1;i<=a;i++){
//     console.log(i)
//   }
// }
// else if(a>=11 && a<=20){
//   for(let i =20;i>=1;i--){
//     console.log(i)
//   }
// }
// else{
//   console.log("invalid")
// }


//write a program to print sqaure of all even number between 20 to 1
// for(let i=20;i>=1;i--){
//   if(i%2==0){
//     console.log(i*i)
//   }
// }

//NESTED FOR LOOP

// for(let i =2;i<=3;i++){
//   for(let j=1;j<=10;j++){
//     console.log(i*b)
//   }
// }

// for(let i=1;i<=5;i++){
//   document.write("*")
// }


for(let r =1;r<=5;r++){
    for(let c=1;c<=5;c++){
        if(r==1 || r==5 || c==1 || c==5){
            document.write("*")
        }
        else{
            document.write("&nbsp&nbsp")
        }
    }
    document.write("<br>")
}
