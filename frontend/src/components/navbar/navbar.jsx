import { BarreRecherche } from "../barreRecherche/barreRecherche"
import { Logo } from "../logo/logo"
// on import Link pour pouvoir naviguer entre les pages
import Link from 'react'
// 
import '../style css/navbar.css'

// ma barre de navigation
export const NavBar=()=>{
    return (
        <div className="vue" style={{
           height:'var( --hauteur-general)',
           backgroundColor:'var(--color-des-barre)',
           display:'var(--display-parent)'
        }}>
            <Logo/>
            <BarreRecherche/>
            {/* <Link to='/acceuil' element='acceuil' >e</Link> */}
        </div>
    )
}