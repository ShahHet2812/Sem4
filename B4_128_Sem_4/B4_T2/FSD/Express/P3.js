const express=require('express');
const app=express();
var s={d:[{'name':'Temp','age':30},
    {'name':'ABC','age':15},
    {'name':'XYZ','age':42}
]};
app.get('/',(req,res)=>{
    res.set("Content-type","text/html")
    res.write("<table border='2'> <tr><th>Name</th><th>Age</th></tr>")
    var sd=s.d.sort((a,b)=>b.age-a.age);
    for(x of sd){
        res.write(`<tr><th>${x.name}</th><th>${x.age}</th></tr>`)
    }
    res.write('</table>')
    res.send()
})
app.listen(7005)