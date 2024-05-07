const express=require('express');
const router=express.Router();
router.use('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/product" method="POST"><input type="text" name="product"><input type="number" name="size"><button type="submit">Send</button></form>');
})
router.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})