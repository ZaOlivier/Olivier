// le module express
const { error } = require('console');
const express = require('express')
// 
const router = express.Router();


// 
const fs = require('fs');
const path = require('path');
const mess="non dispo"

// 

router.get('/', (req, res) => {
    
    const filePath =
        path.join(__dirname, '../../db-local/client.json');
    const data =
        fs.readFileSync(filePath, 'utf-8');
    const produits =
        JSON.parse(data);
    res.json(produits)
    console.log(produits[0]);
   

})

module.exports = router;