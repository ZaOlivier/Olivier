import { Children, useState } from "react";
import { ValiderCdContext } from "../../context/validerCDcontext";

export const ValiderCdProvider=({children})=>{

    return(
        <>
        <ValiderCdContext.Provider value={{}}>
            {children}
        </ValiderCdContext.Provider>
        </>
    )
}