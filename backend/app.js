// le module express
const express=require('express');
// instance de notre serveur(application)
const app=express();
// importe la route des Users
const Users=require('./utilisateur/actionUtilis/route/user/userRoute');
// importe la route des Utilisateur
const Admclient=require('./administration/admGestion/gestionClients/etatAdmClient');
// pour eviter les histoire de cors
const cors = require('cors');



// 
app.use(cors());
// on importe mongoose pour pouvoir se connecter et interragie avec mongo altas
const mongoose = require('mongoose');

// pour la connexion de mam db mongo
mongoose.connect("mongodb+srv://zaouliolivier01:Tahdolce1@cluster0.wosgqqy.mongodb.net/commerce?retryWrites=true&w=majority")
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
.then(() => console.log('Connecté à MongoDB Atlas'))
.catch(err => console.error('Erreur de connexion à MongoDB Atlas :', err));



// permet de lire le fichiers json reçu
app.use(express.json());

// les route ou encore les API qui vont nous permettre de faire des requetes via frontend
// 1- utilis:user
app.use('/api', Users)
// 2- adm:admclient
app.use('/administration', Admclient)

// on export l'app
module.exports=app;