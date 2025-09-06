const {mongoose } = require('mongoose');
// const mongoose=require('mongoose')

const userShema= new mongoose.Schema({
    nom: String,
    numero: Number,
});

module.exports=mongoose.model('User', userShema);