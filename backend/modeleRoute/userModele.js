const { text } = require('express');
const {mongoose } = require('mongoose');
// const mongoose=require('mongoose')

const userShema= new mongoose.Schema({
    nom: String,
    numero: String,
    email: String,
    motDePass: String,

});

module.exports=mongoose.model('User', userShema);