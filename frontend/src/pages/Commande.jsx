import React from "react";
import { useState } from "react";
import Navig from '../components/nav/navig'
import c from '../aasets/im/c.gif'
import { FormulaireCommd } from "../components/fromulaireComd/FormCommand";
import { EtapeCd } from "../components/fromulaireComd/EtapeCd";



const Commande=()=> {

    return(
        <>
        <div className="bani" style={{
                        width:"100dvw",
                        height:"8dvh",
                        border:"var(--border-enfant1)",
                        objectFit:"cover"
                    }}>
                    <img src={c} alt="" style={{
                        width:"100%",
                        height:"100%",
                        // objectFit:"cover"
                    }}/>
                    </div>
            <Navig/>
            <EtapeCd/>

                



         
        </>
    );
}

export default Commande;