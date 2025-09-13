
import { ListeNouv, ListePromo} from "../../data/listeProduits/listeProd";
import CardProduits from "../cardProdDyna/cardProduits";
import Navig from "../nav/navig";



export function AfficheNouv() {
  
   
    return(
        <>
            {ListeNouv.map((prod)=>(

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
            {ListePromo.map((prod)=>(

                <CardProduits key= {prod.id}
                    produits= {prod}
                
                />
           ))}
        </>
        
    );

}


