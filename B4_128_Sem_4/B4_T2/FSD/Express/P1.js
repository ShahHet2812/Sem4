const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.set("Content-type","text/html");
    res.write("<h1>Welcome to my page</h1>");
    res.send();
});
app.get('/about',(req,res)=>{
    res.send("<h3>About Page</h3><a href='/'>Home</a>");
});
app.listen(7001);