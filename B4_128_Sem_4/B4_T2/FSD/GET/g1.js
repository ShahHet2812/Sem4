const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.get('/process',(req,res)=>{
    res.send(`<h1>Welcome ${req.query.fn} ${req.query.ln} </h1>`)
})
app.listen(5020)