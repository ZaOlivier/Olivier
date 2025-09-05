
// importons usestate
import { useState } from "react"

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

            <form onSubmit={Connexion} >
                {/* les input permet la saisir */}
                <input type="text"
                    value={nom}
                    placeholder="votre nom"
                    onChange={(e)=>
                        setNom(e.target.value)
                    }
                    required
                />
                <input type="number" 
                    value={numero}
                    placeholder="votre numero"
                    // pour capter les donnees saisirs
                    // e.target.value permet de recuperer les donnes saisirs
                    onChange={(e)=>
                        setNumero(e.target.value)
                    }
                    required
                />
                <button type="submit">valider</button>

            </form>
           
        </>
    )
}