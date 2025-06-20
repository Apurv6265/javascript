console.log("hi from external file")
// v8 engine is used to understand javascript to browser and v8 is made up c++ 
//====================================================================================================================================
//variable
//let,const,var are keyword used to declare variable

// identifier doesnot start with  number,there is no space,start with _charcter
 // VAR  keyword has global scope and it is redeclare and reassign with same variable name.
 var num = 8;
 var num = 9;
 //Let keyword has local scope and cannot be redeclared but can be reassign with same variable name.
 let n = 12;
 n =14;
 //Const keyword has local scope and cannot be redeclared and reassign with same variable name.
 const name = "Apurv"
//===================================================================================================================================================
 // Special type of symbol is called Operator and it used to perform any task based on symbol.
 // operator has 3 types unary,binary ,ternary.
 //unary operator has  increment and decrement operator and work on single value.
 //Binary operator has arithmetic(+,-,/,*,%),assignment(=,+=,-=,/=),relational(>,<,<=,>=,==,===,!=),Logical(&&,||,!) and work on two value.
 //ternary operator is conditional operator it is used to provide condition ? :.
 //===================================================================================================================================
//write a program to find area of circle r=4 and print it on console;
 const r =4;
 console.log("area of circle :",3.14 *4*4);

 //===============================================================================================================================
 //write a program to calculate sum of two number.

 var a  =  parseInt(prompt("enter a value of a:"));
 var b = parseInt(prompt("enter a value of b"));
 console.log("The sum of two number is:",a+b);
 