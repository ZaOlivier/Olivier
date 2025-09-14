const { models } = require("mongoose");

const {mongoose} = required('mongoose');

const ProduitsA= new mongoose.Schema({
    nom:String,
    prix:String,
    image:Image,
})

module.exports=mongoose.model('ProduitA', ProduitsA);