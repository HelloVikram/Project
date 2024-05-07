//const http=require('http');
const express=require('express');
const app=express();
app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="sendform"><button type="submit">Send</button></form>');
})
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
app.use('/',(req,res,next)=>{
    res.send('<h1>Hello  from my server!</h1>');
});
//const server=http.createServer(app);
app.listen(3000);