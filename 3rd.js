/*
Promise:------***Important***
In javascript when we get result that means promise is finished and fullfilled whether its failure
or success
Promise is an object representing the  Eventual completion or failure of an asynchronous 
operation. There are two type of codes in promise
1. Producing code    2. Call to the Consuming code
It is used to deal the  asuynchronous operations. 
Producing code calls the consuming code.
There are three  states of promise state:--
1. Pending state:-- Initial state neither resole nor failure
2. Fullfilled/resolved/Failure:---- Promise is completed
3. Rejected:--- Promise failed accidentally

Syntax of failure:--           / Function/
const chd=new Promise((resolve, reject)=>
{
    resolve(value)___________________Producing Code
    reject(Error)
})
chd.then(value=>{
    console.log(value)
},error=>{Console.log(Error)})


*/



const chd=require("readline-sync")
const mypromise=new Promise((resolve, reject)=>
{
    var n=chd.questionInt("Enter your age: ")
    if(n>18)
    {
        resolve("You are eligible to vote")
    }
    else{
        reject("Not Allowed")              // This Whole is Producing code
    }
})

mypromise.then(
    value=>{console.log(value)},        // Consuming Code
    error=>{console.log(console)}
).finally
{
    console.log("Program End")
}