const express=require('express');
const path=require('path');

const rootDir=require('../util/path');

const router=express.Router();
router.use('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','addproduct.html'));
})
router.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
module.exports=router;