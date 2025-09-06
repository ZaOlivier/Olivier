// le module express
const express = require('express')
// 
const router = express.Router();

const User=require('../modeleRoute/userModele');
// const { route } = require('../app');

router.get('/user', async (req, res)=>{
    try{
        const users= await User.find();
        res.json(users)
    }catch(err){
        res.json(Error)('dommage')
    }
});

router.post('/user', async (req, res)=>{
    try{
        const Newuser= new User(req.body);
        await Newuser.save();
        res.send('succes')
        
    }catch(err){
        res.json(Error)('dommage')
    }
});

module.exports=router;
