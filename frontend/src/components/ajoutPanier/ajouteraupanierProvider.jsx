import {useState } from "react";
import { PanierContext } from "../../context/panierContext";


function AjouterAuPanierProvider({children}) {
    const[panier, setPanier]= useState([]);
    console.log(panier);

    const SuppPanier= (id)=>{
        const ApresSupr= panier.filter((details)=> 
            details.id !== id);
        setPanier(ApresSupr);
    };
 
    const AjouterUnProduits=(produits)=>{
        const produitsExistant = panier.find((details) =>
            details.id === produits.id
        );
       
        if(produitsExistant) {
            
            const panierMisAjour = panier.map((details) =>
                details.id === produits.id ?
                {...details, quantite: details.quantite + 1 } : details
            );
            setPanier(panierMisAjour);
            

        } else{
            setPanier([...panier,{...produits, quantite: 1 }]);
        }         
    };
    return(
        <PanierContext.Provider value={{panier , AjouterUnProduits, SuppPanier}}>
          {children}
        </PanierContext.Provider>
    );
}

export default AjouterAuPanierProvider;