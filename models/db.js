const mysql = require('mysql');

const db = mysql.createConnection({
    host : 'localhost',
    user :'root',
    password : '',
    database : 'library'
});

db.connect((err)=>{
    if (err){
        console.error('error in connection to database ' +err.stack);
        return;
    }
    console.log('connected to database');
});
module.exports=db;