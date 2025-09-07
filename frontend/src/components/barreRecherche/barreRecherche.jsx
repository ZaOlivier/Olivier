
// importons usestate
import { useState } from "react"
// 
import'../style css/barrerecherche.css';

// c'est ma barre de recherche
export const BarreRecherche = ()=>{

    // on initialise les champs
    const[nom, setNom]=useState('');
    const[numero, setNumero]=useState('')
    // la function qui gere les donnees saisirs
    const Connexion=(e)=>{
        // empeche de recharge la page 
        e.preventDefault();
        // voir le resultat
        console.log({nom});
        console.log({numero}); 
    }

    // on rend le formulaire visible
    return(
        <>
            {/* le formulaire lui meme */}

            <form onSubmit={Connexion} className="barrerecher">
                {/* les input permet la saisir */}
                <input type="search"
                    value={nom}
                    placeholder="recherche d'autres produits"
                    onChange={(e)=>
                        setNom(e.target.value)
                    }
                    required
                />
               
                <button type="submit">recherche</button>

            </form>
            
           
        </>
    )
}