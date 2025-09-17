import { useContext } from "react"
import { PanierContext } from "../../context/panierContext"

export const RevuCd=()=>{
    const {panier , AjouterUnProduits, SuppPanier}=useContext(PanierContext)
    return(
        <>
 {panier.map((pro, id)=>
            <div key={id}>
                <img src={pro.image} alt={pro.nom} />
                <p>{pro.nom} </p>
                <p>{pro.prix} </p>
                <button onClick={SuppPanier}>supprimer ce produit</button>
                
            </div>
            )} 
            </>
        )
}