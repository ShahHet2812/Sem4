const express=require('express');
const app=express()
var a={
    "name":"abc","age":25
}
app.get('/',(req,res)=>{
    res.set("Content-type","application/json")
    res.write(JSON.stringify(a.age))
    res.send()
})
app.get('/second',(req,res)=>{
    res.sendStatus(200);
})
app.get('/third',(req,res)=>{
    res.json(a.age);
})
app.get('/error',(req,res)=>{
    res.status(404).send('Error')
})
app.listen(7007)