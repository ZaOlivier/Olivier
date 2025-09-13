import { useContext, useState } from "react";
import '../stylescss/choixquantite.css'
import { QrCodeIcon } from "lucide-react";
import { QteContext } from "../../context/listeproduitsContext";
import { PanierContext } from "../../context/panierContext";


const ChoisirQteProvider=({children})=>{
    const  {panier, SuppPanier} = useContext(PanierContext);
    const[qte, setqte]=useState(1);
    const Augmenter=()=>{
        <button onClick={Augmenter}>+</button>
        setqte(qte + 1)
    };
    const Diminuer=()=>{
        <button onClick={Diminuer}>-</button>
        if(qte>1){
            setqte(qte - 1)
        }
        else if (qte<0) {
            setqte(SuppPanier)
            
        } 
    };
    return(
        < QteContext.Provider value={{qte, Augmenter, Diminuer}}>
            {children}
        {/* <>
            <div className="nombreqte">
                <button onClick={Augmentation}>+</button>
                <span>{qte} </span>
                <button onClick={Dimunuer}>-</button>
            </div>
            
        </> */}
        </QteContext.Provider>
       

    )


}

export default ChoisirQteProvider;