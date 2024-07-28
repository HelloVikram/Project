const path=require('path');
const rootDir=require('../util/path')
exports.controllerfun=(req,res)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'));
}