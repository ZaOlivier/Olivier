import axios from 'axios'
import { ListeNouv, ListePromo} from "../../data/listeProduits/listeProd";
import CardProduits from "../cardProdDyna/cardProduits";
import Navig from "../nav/navig";
import { AdmVoirprod } from '../../DashbordAdmi/administration/gestion/gestionproduit/admvoirProd';
import { useState } from 'react';



export function AfficheNouv() {
   const[affichvoirpod, setAffichvoirprod]=useState([]);
    // const[id, setId]=useState('');

    // const Rolecontrolerprod=(async(e)=>{
    //     e.preventDefault();
    //     try{
    //         const res= await
    //         axios.get('http://localhost:5000/administration/admproduit')
    //         console.log(res.data);
    //         // (res.data)
    //         setAdmvoirprod(res.data)
    //     }catch(err){
    //         console.error((err));
    //     }

    // })
    axios.get('http://localhost:5000/donneProd/affiche-client-produit')
    .then((res)=>setAffichvoirprod(res.data))
    .catch((Error)=>Error.message)
   
    return(
        <>
            {affichvoirpod.map((prod)=>(

                < CardProduits key= {prod.id}
                    produits= {prod}  
                />
            ))};

            
        </>
    );
    
}

export const AffichePromo=()=>{

      return(
        <>
            {ListeNouv.map((prod)=>(

                <CardProduits key= {prod.id}
                    produits= {prod}
                
                />
           ))}
        </>
        
    );

}


