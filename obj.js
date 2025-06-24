//object is unordered , object store in key value pairs,object is denoted by {},it support for in loop
// let obj = {
//     name:"Apurv",
//     city:"BHOPAL",
//     contact:45625,
// }
// console.log(obj)
// console.log(obj.city)
//===================================================================================================================
// let obj = {
//     name : (prompt("enter a name")),
//     city: (prompt("enter a city")),
//     contact:parseInt(prompt("Enter a contact number"))
// }
// console.log(obj.name)
// console.log(obj)
//==================================================================================================================
// let emp = {
//     emp_name : "Apurv",
//     emp_id :101,
//     emp_desination : "SDE",
//     emp_contact: [124558,955977],
//     emp_address:["bdfvjfvbv","dvhfndbjkndb"],
// }

// console.log(emp.emp_contact[1])
// console.log(emp.emp_address[0])

// let aj = {
//     emp_id : [1,5,4,7],
// }
//  aj.emp_id.push(8)
 
//    aj.mail = "aknvjkdfnbjk@gmail.com"
//      console.log(aj)

let obj1 = {
    name : "djnsfjkvnfd",
    email : "dvvhsfvjndfvbjn@gmail.com",
}
for(let k in obj1){
console.log(k)
console.log(k,":",obj1[k]);
}
let keys = Object.keys(obj1);  
console.log(keys[0]);  

