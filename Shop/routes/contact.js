const express=require('express');

const controller=require('../controller/contactus');
const router=express.Router();
router.use('/contactus',controller.controllerfun)
module.exports=router;