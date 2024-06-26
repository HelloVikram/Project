const express=require('express');
const bodyParser=require('body-parser');
const adminRoutes=require('./admin');
const shopRoutes=require('./shop');
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');
})
app.listen(3000);