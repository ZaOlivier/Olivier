// le module express
const express = require('express')
// 
const router = express.Router();

const User=require('../modeleRoute/userModele');
// const { route } = require('../app');

router.get('/', async (req, res)=>{
    try{
        const users= await User.find();
        res.json(users)
    }catch(err){
        res.json(Error)('dommage')
    }
});

module.exports=router;
