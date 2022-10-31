function hello(a,b,chd)
{
    var c=a+b
    return setTimeout(()=>{chd (c)},4000)
}
function bye(z, ambala)
{
    var ans=z-4
    return setTimeout(()=>{ambala (ans)},2000)
}
hello(12,3, (k)=>{
console.log("Sum is ",k)
bye(k,(t)=>
    {
       console.log("Substraction is",t)
    })
})
//var k=bye(w)
//console.log("Your result is:",k)