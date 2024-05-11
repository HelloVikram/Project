const express=require('express');
const router=express.Router();
const fs = require('fs');
router.post('/sendmessage', (req, res, next) => {
    const { message } = req.body;
    const {username}=req.body;
    fs.writeFile("msg.txt", `{${username}:${message}}`,{flag:'a'},(error)=>{
        error?console.log(error):res.redirect('/')
    });
})
router.use('/', (req, res, next) => {
    fs.readFile('msg.txt','utf8',(err,data)=>{
        if(err){
            console.log(err);
            data='no chats available';
        }
        res.send(`${data}<form  action="/sendmessage" method="POST" onSubmit=document.getElementById("username").value=localStorage.getItem("username")><input type="text" name="message"><input hidden type="text" id="username" name="username"><button type="submit">send</button></form>`);
    });
});
module.exports=router;