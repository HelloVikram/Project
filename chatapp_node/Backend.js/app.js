const express=require('express');
const bodyParser=require('body-parser');
const adminRoutes=require('./admin');
const shopRoutes=require('.shop');
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.listen(3000);