//model pour gerer les livres
const db = require('./db');

//model de livre
const Book = {
    add:(book , callback)=>{
        const sql = 'INSERT INTO books SET ?'
        db.query(sql , book , callback); 
    },
    getAll:(callback)=>{
        const sql = 'SELECT * FROM books';
        db.query(sql , callback);
    },

    update :(id,book , callback)=>{
        const sql ='UPDATE books SET ? WHERE id =?';
        db.query(sql ,[book ,id] ,callback);
    },
     delete :(id , callback)=>{
        const sql = 'DELETE FROM books WHERE id = ?';
        db.query(sql ,[id], callback );
     },
};

module.exports = Book;
