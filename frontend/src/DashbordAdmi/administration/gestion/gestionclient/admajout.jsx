import axios from "axios";
import React, { useState } from "react";
import '../../../styleadm/admajoutclt.css'


export const AdmAjout=()=>{
    const[nom, setNom]=useState('');
    const[numero, setNumero]=useState('');
    const[motDePass, setMotDePass]=useState('');
    const[email, setEmail]=useState('');
   
    const RoleAjout=(async(e)=>{
        e.preventDefault();
        try{
            const res= await
            axios.post('http://localhost:5000/administration/admclient',{
                nom,
                numero,
                email,
                motDePass,
            })
            console.log(res.data);
        }catch(err){
            console.error((err))
        }
    })
    return(
        <div className="admclient">
        <p>voulez-vous ajoute un utilisateur?</p>
        <form onSubmit={RoleAjout} >
            <input type="text" 
                value={nom}
                placeholder="son nom"
                onChange={(e) =>
                setNom(e.target.value)}
            />
            <input type="tel" 
                value={numero}
                placeholder="son numero"
                pattern="[0-9]{10}"
                title="Entrez un numéro valide à 10 chiffres"
                onChange={(e) =>
                setNumero(e.target.value)}
            />
            <input type="email" 
                value={email}
                placeholder="son gmail"
                onChange={(e) =>
                setEmail(e.target.value)}
            />
            <input type="passWord" 
                value={motDePass}
                placeholder="mot de passe"
                onChange={(e) =>
                setMotDePass(e.target.value)}
            />
            <br />
            <button type="submit">L'ajouter</button>
        </form>
       
        </div>
    )
}