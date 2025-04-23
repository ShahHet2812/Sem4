const express=require('express')
const app=express()
const path=require('path')
const hp=path.join(__dirname,'../html')
const cp=path.join(__dirname,'../css')
const ip=path.join(__dirname,'../images')
app.use(express.static(ip));
app.use(express.static(cp));
app.use(express.static(hp));
app.listen(7001)