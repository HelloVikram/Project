//const http=require('http');
const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log("i am middleware");
    next();
});
app.use((req,res,next)=>{
    res.send('<h1>Hello from my server!</h1>')
})
//const server=http.createServer(app);
app.listen(3000);