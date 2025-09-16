import { useState } from 'react'
import { AdmAjout } from '../administration/gestion/gestionclient/admajout'
import { AdmVoir } from '../administration/gestion/gestionclient/admvoir'
import { Toogle } from '../componentsadm/toggleadm'
import '../styleadm/acceuiladm.css'
import { MessBienvAdm } from '../componentsadm/bienvadm'
import { AdmAjoutproduit } from '../administration/gestion/gestionproduit/admajoutprod'
import { AdmVoirprod } from '../administration/gestion/gestionproduit/admvoirProd'

export const AdmAcceuil=()=>{
    const[page, setPage]=useState('home')
    const Pagemono=()=>{
    switch (page) {
        case 'home':
            return<MessBienvAdm/>
            break;
        case 'mes':
            return<AdmAjout/>
            break;
        case 'voir':
        return<AdmVoir/>
        case 'es':
            return<AdmAjoutproduit/>
        case 'est':
            return<AdmVoirprod/>
        default:
            return<MessBienvAdm/>
            break;
    }
    }
    return(
        <>
        <div className='secadmacceuil'>
           <header style={{
                height:"10vh",
                width:"100%",
                background:"white",
                paddingLeft:"400px",
                paddingTop:"10px",
                // border:"2px solid blue",
                position:"fixed"
                }}>
                <h1>ADMINISTRATION</h1>
            </header>
            <div style={{
                display:'flex',
                // border:"2px solid rgba(199, 14, 146, 1)",
                height:"100%",
                width:"100%",
                paddingTop:"70px"

            }}>
            <section style={{
                height:"100vh",
                background:"red"
            }}>
                <nav className='admacceuil'>
            
                    <button onClick={()=>setPage('mes')}>admajout</button>
                    <button onClick={()=>setPage('voir')}>admvoir</button>
                    <button onClick={()=>setPage('es')}>admproduit</button>
                    <button onClick={()=>setPage('est')}>admVoirproduit</button>
          
                </nav>
            </section>
            <section className='pageEnVu'>
                
                <Pagemono/>
            </section>
            </div>
        </div>
        </>
    )
}
