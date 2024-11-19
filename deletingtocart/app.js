const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const sequelize = require('./util/database');
const product=require('./models/product');
const user=require('./models/User');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
   user.findById(1).then(User=>{
    req.User=User;
    next();
   })
   .catch(err=>console.log(err));
})

app.use(errorController.get404);

sequelize.sync()
.then(res=>{
    return user.findById(1)
})
.then(User=>{
    if(!User){
        return user.create({name:"max",email:"test@test.com"});
    }
    return User;
})
.then(res=>{
    app.listen(3000);
})
.catch(err=>console.log(err));


