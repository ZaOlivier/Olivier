
import React, { useContext, useState } from "react";
import Navig from "../components/nav/navig";
import Header from "../components/header/header";
import '../components/stylescss/affichepanier.css'
import { Link } from "react-router-dom";
import { Articles6, Articles6A } from "../components/sectionafficharticle/affichesectionart";
import {ShoppingCart} from "lucide-react";
import { MyFooter } from "../components/footer/footer";
import { ResumerPanier } from "../components/complement affiche panier/ResumerPanier";
// import { AffichePromo } from "../components/afficheProdDyn/afficheProd";
import { QteContext } from "../context/listeproduitsContext";
import { PanierContext } from "../context/panierContext";




const AffichPanier=()=> {
    const {panier, SuppPanier } =useContext(PanierContext)
    const {qte, Augmenter, Diminuer}= useContext(QteContext)
    // const Tva= 0.18;
    // const MsmPanierVide=()=>{
    //    {panier.length===0?(
    //     <p>vot</p>
    //    )
    // }
 
    return(
        <>
            {/* <div className="headerPanier"> */}
                <Navig />
            {/* </div> */}
        
            < div className="MonPanier">

                {/* <div className="Generalgridpanier"> */}

                
                    {                 
                        panier.length === 0 ? (

                            
                            <div  className="corePanier">
                            
                                

                                <p>Aucun article ajouter</p>
                                {/* <div className="MsmPanier"> */}
                                    <button className="MsmPanierbtn"><ShoppingCart className="PaniershopCard" size={38} color="orange"/><Link to='/'>Ajouter maintenant</Link> </button>
                        
                                {/* </div> */}

                            </div>
                                

                            ) : ( 

                                <div className="scrollPanier">
                                
                                <div className="entetePanier">
                                    <h3>Mon Panier</h3>
              
                                

                            
                            
                            {panier.map((details, id)=> (

                                // <div className="Generalgridpanier">
                                <div className="name">
                            
                                <div className="ContenuPanier" key={id}>

                                <img src={details.image} alt={details.nom} />

                                <div className=" toutpanier">

                                    <div className="infopanier">
                
                                        <h4>{details.nom}</h4>
                                        <p>{details.compl} </p>

                                        <div className="nombreqte">
                                        
                                            <button onClick={Augmenter}>+</button>
                                            {/* <p>{ details.quantite }</p> */}
                                            <p>{details.quantite} </p>
                                            <button  onClick={Diminuer}>-</button>

                                        </div>
                                    </div>
                                     
                                    <div className="soustotalpanier">

                                        <p>{details.prix} FCFA</p>
                                        {/* <p>quantite: {details.quantite} </p> */}
                                        {/* <p>Quantite : {qte} </p> */}
                                        <h5>sous-totals: {details.quantite * details.prix}</h5> 
                                        <button onClick={()=>SuppPanier(details.id)}>Supprimer</button>
                                        {/* <li><p>TVA 18% : {details.quantite * details.prix * Tva} </p></li> */}
                            
                                    </div>
                                   
                                </div> 
                                </div>   
                               
                            </div>
                            
                            
                            // </div>
                          
                          
                        ))}
                        </div>
                        <ResumerPanier/>
                        </div>
                        
                    )}
                    
               
               {/* <ResumerPanier/> */}
                {/* </div> */}
                
                {/* <Articles6/> */}
            </div>
            
            
            <MyFooter />

        </>
            
        
    );
}



export default AffichPanier;