import React, { useState } from "react";
import '../stylescss/formulaireCd.css'

export const FormulaireCommd=()=>{
    const[nom, setNom]=useState([]);
    const[prenom, setPrenom]=useState([]);
    const[numro, setNumero]=useState([]);

    return(
        <>
        <section className="formulaireCd">
         <form>
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
        value={numro}
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