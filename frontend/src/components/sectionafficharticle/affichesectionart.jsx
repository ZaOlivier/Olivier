import React from "react";
// import { AfficheNouv } from "../affciheProdDyn/afficheProd";
// import { AffichePromo } from "../affciheProdDyn/afficheProd";
// import AffichPanier from "../../pages/affichpanier";
import { AfficheNouv, AffichePromo } from "../afficheProdDyn/afficheProd"

export const Articles6=()=>{
    return(
        <>
            <section className="nosProd9">
                <div className="titre">
                    <h3>Boutique officiel Bekan</h3>
        
                </div>
                <div className="cardProd9">
                    < AfficheNouv/>
                </div>   
            </section>
        
        </>
    )
}

// export const Articles6A=()=>{
//     return(
//         <>
//             <section className="nosProd9">
//                 <div className="titre">
//                     <h3>Nouveauté chez Maman</h3>
        
//                 </div>
//                 <div className="cardProd9">
//                     <AffichePromo />
//                 </div>   
//             </section>
        
//         </>
//     )
// }
