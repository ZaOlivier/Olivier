// le module express
const express=require('express')
// instance de notre serveur(application)
const app=express();
// permet de servir les fichiers statiques
const path= require('path')
// 
const userRoute=require('./route/userRoute')


// pour servir tout nos dossier static dans db local
app.use('/db', express.static(path.join(__dirname, 'db-local')))


// permet de lire le fichiers json reçu
app.use(express.json());

// les route ou encore les API qui vont nous permettre de faire des requetes via frontend
app.use('/api', userRoute)

// on export l'app
module.exports=app;