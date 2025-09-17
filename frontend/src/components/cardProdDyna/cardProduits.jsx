import React from 'react';
// import ListeNouv from '../../data/listeProduits/listeProd';
// import ajouteraupanierProvider from '../ajoutPanier/ajouteraupanierProvider';
import '../stylescss/cardproduits.css'
import { useContext } from 'react';
import { PanierContext } from '../../context/panierContext';

const CardProduits=({produits})=>{
    const {AjouterUnProduits}= useContext(PanierContext)

    return(
        <>
            <div className="card">
                <div className="cardImg">
                    <img 
                      src={produits.image}
                      alt={produits.nom}
                    />
                </div>
                <div className='vie'>
                {/* <div className="monProd"> */}
                    <h3>
                        {produits.id}
                    </h3>
                    <p>
                        {produits.prix} FCFA
                    </p>
                  
                {/* </div> */}
                <div className="addPanier">
                <button onClick={()=> AjouterUnProduits(produits)} >Ajouter au panier</button>
                </div> 
                </div>
            </div>
        </>

    );

}


export default CardProduits;


