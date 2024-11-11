const db = require('./db');

const User = {
    add:(user , callback)=>{
        const sql = 'INSERT INTO users SET ?';
        db.query(sql,user , callback);
    },
    getAll:(callback)=>{
        const sql ='SELECT * FROM users';
        db.query(sql,callback);
    },
    getByEmail :(email , callback)=>{
        const sql ='SELECT FROM users WHERE email =?';
        db.query(sql,[email],callback);
    }
};

module.exports=(User);