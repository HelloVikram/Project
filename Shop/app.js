const express=require('express');
const bodyParser=require('body-parser');
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const contactRoutes=require('./routes/contact');
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use('/contactus',contactRoutes);
app.use('/success',(req,res,next)=>{
res.send('<h1>Form successfully filled</h1>')
})
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');
})
app.listen(3000);