var a=require('express')
var b=a()
b.get('/name',(req,res)=>{
    res.send("divya")
})
b.get('/place',(req,res)=>{
    res.send("pandalam")
})
b.get('/college',(req,res)=>{
    res.send("sbce")
})
b.get('/dep',(req,res)=>{
    res.send("cse")
})
b.listen(3000,()=>{
    console.log("server started at http://localhost:3000")
})