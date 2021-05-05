const express= require('express');
const router= express.Router();
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');
const config= require('config');
const {User}= require('../models/user');

router.get('/',async (req,res)=>{
    const users=await User.find();
    res.send(users);
});

router.post('/',async (req,res)=>{

    const unique=await User.findOne({email: req.body.email});


    if(!unique){
        const hash = bcrypt.hashSync(req.body.password, 10);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash
        });
        await user.save();
    }

    const token = jwt.sign({email:req.body.email,name:req.body.name}, config.get('jwtPrivateKey'));
    
    res.send(token);
});

module.exports= router;