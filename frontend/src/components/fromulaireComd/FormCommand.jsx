import React, { useState } from "react";
import '../stylescss/formulaireCd.css'
import axios from "axios";

export const FormulaireCommd=()=>{
    const[nom, setNom]=useState([]);
    const[prenom, setPrenom]=useState([]);
    const[numero, setNumero]=useState([]);

    const UserCommande=(async(e)=>{
     e.preventDefault();
    try{
        const res= await
        axios.post('http://localhost:5000/cd/ajouter_Une_commande', {
            nom,
            numero,
            prenom
            
        })
        // res.json(res.data)
        console.log(res.data);
        // (res.data)
        // console.log(res.data); 
        
    }catch(err){
        console.error((err))
    }
})

    return(
        <>
        <section className="formulaireCd">
         <form onSubmit={UserCommande}>
         <input type="text" 
        value={nom}
        placeholder="votre nom"
        onChange={(e) =>
            setNom(e.target.value)}
        />
        <input type="text" 
        value={prenom}
        placeholder="votre prenom"
        onChange={(e) =>
            setPrenom(e.target.value)}
        />
         <input type="tel" 
        value={numero}
        pattern="[0-9]{10}"
        placeholder="numero de telephonepar"
        onChange={(e) =>
            setNumero(e.target.value)}
        />
         {/* <input type="passWord" 
        value={prenom}
        placeholder="mot de passe"
        onChange={(e) =>
            setNumero(e.target.value)}
        /> */}
        </form>
        </section>
        </>
    )
}