import { useState } from "react";
// import { FormulaireCommd } from "./FormCommand";
import '../stylescss/etapeCd.css'
import { FormulaireCommd } from "./FormCommand";
import { Connexion } from "../connexion&insci/connexion";
import { Inscription } from "../connexion&insci/inscription";
import { RevuCd } from "./revuCd";
import { MethodePaien } from "../methodePaien/methodePaien";

export const EtapeCd=()=>{
   const[etape, setEtape]=useState(1)

    // const[pageVu, setPagzVu]=useState()
    // ici c'est la logique de la page de commande 
    
    const EtapeC=()=>{
        switch (etape) {

            case 1:
                return<FormulaireCommd/>
                
                break;
            case 2:
                return<MethodePaien/>               
                break;
        
            case 3:
                return<RevuCd />
                break;

            case 4:
                return<Connexion />
                break;

            default:
                return<FormulaireCommd/>
        }
    }
   
    //   setPagzVu('form')

        
     const suivant = () => {
        if (etape<=3) {
            setEtape(prev => prev + 1);}
            // setPagzVu('b')
            // setPagzVu('b')
        }
        

  const retour = () => { 

    if (etape===1) {
        setEtape(prev => prev)

    } else {
        setEtape(prev => prev - 1)
        // setPagzVu('default')
    }

   }
 

    return(
            <>
            {/* permet de suivre les etape pour la commande */}
            <p>{etape}</p>
            
            <div className="stepper">
  <div className={etape>= 1 ? "step active" : "step"}>Formulaire de commande </div>
  <div className={etape >= 2 ? "step active" : "step"}>Mode de paiement</div>
   <div className={etape >= 3 ? "step active" : "step"}>verification</div>
  <div className={etape >= 4 ? "step active" : "step"}>Confirmation</div>
</div>
            {/* <div className="lapage"> */}
            <EtapeC/>
            {/* </div> */}
            <button onClick={retour} >Retour</button>  
            <button onClick={suivant} >Suivant</button> 
           


            </>
        
    )
}
    