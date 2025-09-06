// ON IMPORTE notre serveur via ça route
const app=require('./app')
// on declare un port
const port=5000;
// importe mongoose pour l'utiliser et interagie avec mongo altas

// il nous permet de lancer notre serveur
app.listen(port, ()=>
console.log(`notre serveur demare sur le port ${port}`)
);