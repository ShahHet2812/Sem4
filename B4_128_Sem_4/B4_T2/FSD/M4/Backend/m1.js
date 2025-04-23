const express=require('express')
const app=express()
const path=require("path")
const sp=path.join(__dirname,'../frontend');
app.use(express.static(sp,{index:'index.html'}));
app.listen(7005)