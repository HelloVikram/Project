const express=require('express');
const path=require('path');

const rootDir=('../util/path');

const router=express.Router();
router.use('/contactus',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'));
})
module.exports=router;