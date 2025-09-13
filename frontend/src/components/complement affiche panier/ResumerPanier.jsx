import React, { useContext } from "react";
import '../stylescss/resumerpanier.css';
import { Articles6, Articles6A } from "../sectionafficharticle/affichesectionart";
import { Link } from "react-router-dom";
// import { ProduitsComplPanier } from "./complproduits";
import { PanierContext } from "../../context/panierContext";


export const ResumerPanier=()=>{
    const{panier}= useContext(PanierContext)
    const QteTotalPrixPanier = panier.reduce((prixtotal, details)=>
    prixtotal +  details.prix * details.quantite, 0
    );
    const ResumeQte= panier.reduce((quantite, details)=>
        quantite + details.quantite, 0
    )

    return(
        <>
        <div className="re">
            {/* <div className="re"> */}
        
        {panier.length === 0 ? (
            // <div className="rienAUpanier">                 
            // <p>Aucun details sur le <br />votre panier</p><br />
            // <p>actuellement 30% de reductions sur <br />
            // tout vos achats <br /><br />
            // Fin de promotion au 30 Septembre 2025 <br />
            // à 00h00</p>
            // </div>  
            <p></p>
        
            ):(

            <div className="articleAuPanier">
                <div className="infoart">
                <p>Articles : <strong>{ResumeQte}</strong></p>
                <p>Prix totals: <strong>{QteTotalPrixPanier}</strong></p>
                </div>
            
                <button><Link to='/Commande'>commander</Link></button>
            </div>
                                
        )}
        </div>  
         {/* <ProduitsComplPanier /> */}

           </>
    )
    
}