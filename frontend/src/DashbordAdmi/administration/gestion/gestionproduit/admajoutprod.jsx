import axios from "axios";
import React, { useState } from "react";
import '../../../styleadm/admajoutclt.css'


export const AdmAjoutproduit=()=>{
    const[nom, setNom]=useState('');
    const[prix, setPrix]=useState('');
    const[image, setImage]=useState('');
    const[message, setMessage]=useState('');
     const[des, setDEs]=useState('');
   
    const RoleAjoutprod=(async(e)=>{
        e.preventDefault();
        try{
            const res= await
            axios.post('http://localhost:5000/administration/admproduit',{
                nom,
                prix,
                image,
            })
            setMessage(res.data);
            
        //    console.log(res.data);
        }catch(err){
            console.error((err))
        }
    })
    return(
        <div className="admclient">
        <p style={{color:"white",
            marginBottom:"10px",
            padding:"10px",
            marginLeft:"180px",
            color:"black"
        }}>voulez-vous ajoute un produit?</p>
        <h3 style={{
            // color:"white",
            marginLeft:"200px",
            marginBottom:"20px",
            color:"red"
            
        }}>{message} </h3>
    
        <form onSubmit={RoleAjoutprod} >
            <input type="text" 
                value={nom}
                placeholder="nom du produit"
                onChange={(e) =>
                setNom(e.target.value)}
            />
            <input type="number" 
                value={prix}
                placeholder="prix"
                pattern="[0-9]{10}"
                // title="Entrez un numéro valide à 10 chiffres"
                onChange={(e) =>
                setPrix(e.target.value)}
            />
             <input type="text" 
                value={des}
                placeholder="descriptions"
                onChange={(e) =>
                setDEs(e.target.value)}
            />
           
            <br />
            <button type="submit">L'ajouter</button>
        </form>
        
       
        </div>
    )
}