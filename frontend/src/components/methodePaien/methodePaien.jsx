import React, { useState } from "react";

export const MethodePaien=()=>{
    const[modeP, setModeP]=useState("")
   
           return(
            <> 
            <section>
                <form action=""id="meth" style={{display:"block"}}>
                    {/* <select name="" id=""> */}
                    {/* <option value=""> */}
                    <input type="radio" name="meth"  value="Orange"
        placeholder="votre gmail"
        onChange={(e) =>
            setModeP(e.target.value)}/> <label htmlFor="met">Orange</label><br />
                    <input type="radio" name="meth"  value="Mtn"
        placeholder="votre gmail"
        onChange={(e) =>
            setModeP(e.target.value)}/><label htmlFor="meth">Mtn</label>
                    <input type="radio" name="meth"  value="Moov"
        placeholder="votre gmail"
        onChange={(e) =>
            setModeP(e.target.value)}/><label htmlFor="metho">Moov</label>
                    <input type="radio" name="meth"  value="Wave"
        placeholder="votre gmail"
        onChange={(e) =>
            setModeP(e.target.value)}/><label htmlFor="method">Wave</label>
                    <input type="radio" name="meth"  value="Espece"
        placeholder="votre gmail"
        onChange={(e) =>
            setModeP(e.target.value)}/><label htmlFor="methode">Espece</label>
                    {                 
                        modeP === "Orange" && (
                                
                                
                             

                            <p>dd</p>
                        )}
                </form>
            </section>
        
        </>
    )
}