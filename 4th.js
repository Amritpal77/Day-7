/*Method*/

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
    value=>{return 100}        // Consuming Code
    
).then(
    value=> {
        return value*2
    }
).then(
    value=>console.log("Values is:",value)
).catch(Error)
{
    //console.log(Error)
}