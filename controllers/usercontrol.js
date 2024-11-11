const {json} = require('body-parser');
const User = require('../models/usermodel');

//inscription utilisateur 
exports.registreUser = (req,res)=>{
    const newUser = {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    };
  User.add(newUser, (err, result) => {
    if (err) throw err;
    res.json({message : 'user added ' , userId : result.insertId})
  });
};

//recuperer tous les utilisateurs 
exports.getUsers = (req,res)=>{
    User.getAll((err,result)=>{
        if (err) throw err;
        res.json(result);
    });
};