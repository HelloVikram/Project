const mysql=require('mysql2');

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node_complete',
    password:'1234567890'
});
module.exports=pool.Promise();