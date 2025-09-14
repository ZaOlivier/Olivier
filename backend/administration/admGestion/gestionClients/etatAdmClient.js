const express=require('express');
const router= express.Router();
const AdmUser=require('../../../utilisateur/utilisModel/userModele');

// si l'adm essaie de voir la liste de tout les utilisateurs
router.get('/admclient', async(req, res)=>{
    try{
        const admclient= await AdmUser.find();
        res.json(admclient)
    }catch(err){
        res.send(Error)
    }
})
// pour ajouter
router.post('/admclient', async(req, res)=>{
    try{
        const admclient= new AdmUser(req.body);
        await admclient.save();
        res.send(`l\'administreur à bien ajouter un user ${admclient}`)
        // res.send(admclient)
    }catch(err){
        res.send(Error)
    }
})

module.exports=router;

