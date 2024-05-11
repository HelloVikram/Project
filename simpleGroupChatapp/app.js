const express = require('express');
const bodyParser = require('body-parser');
const messageRoutes=require('./message');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use('/login', (req, res, next) => {
    res.send('<form onSubmit=localStorage.setItem("username",document.getElementById("username").value) action="/" method="POST"><input type="text" id="username" name="username"><button type="submit">Login</button></form>');
});
app.use('/',messageRoutes);
app.listen(3000);