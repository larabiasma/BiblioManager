const { json } = require('body-parser');
const Book = require('../models/bookmodel');

//ajouter un livre
exports.addBook = (req,res)=>{
    const newBook ={
        title : req.body.title,
        author : req.body.author,
        category : req.body.category,
        year : req.body.year
    };
    Book.add(newBook , (err,result)=>{
        if (err) throw err;
        res.json({message : 'book added' , bookID : result.insertID});
    });
};

//recuoperer tous les livres
exports.getBooks =(req,res)=>{
    Book.getAll((err,result)=>{
        if(err) throw err;
        res.json(result);
    });
};
//mettre a jour un livre
exports.updateBook= (req,res)=>{
    const updateBook ={
        title : req.body.title,
        author : req.body.author,
        category : req.body.category,
        year : req.body.year
    };
    Book.update (req.params.id , upedatedBook ,(err,result)=>{
        if (err) throw err;
        res.json({message : 'Book updated'});
    });
};

//supprimer un livre
exports.deleteBook =(req,res)=>{
    Book.delete(req.params.id ,(err,result)=>{
        if(err) throw err;
        res.json({message :'Book deleted'});
    });
};