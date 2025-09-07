import { BarreRecherche } from "../barreRecherche/barreRecherche"
import { Logo } from "../logo/logo"
// on import Link pour pouvoir naviguer entre les pages
import {Link} from 'react-router-dom'
// style
import '../style css/navbar.css'




// ma barre de navigation
export const NavBar=()=>{
    
    

    return (
       <>
        <div className="navbarCss">
            <Logo/>
            <BarreRecherche/>
        
        </div> 
        
        </>
        
    )
    
}


