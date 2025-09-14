import { AdmAjout } from '../administration/gestion/gestionclient/admajout'
import { AdmVoir } from '../administration/gestion/gestionclient/admvoir'
import { Toogle } from '../componentsadm/toggleadm'
import '../styleadm/acceuiladm.css'

export const AdmAcceuil=()=>{
    return(
        <>
        <section className='secadmacceuil'>
           <header style={{
            height:"10vh",
            width:"100vw",
            background:"white",
            // margin:"0 30px"
            // alignItems:"center",
            paddingLeft:"400px",
            paddingTop:"10px"
        }}>
            <h1>ADMINISTRATION</h1>
        </header>
        <div className='admacceuil'>
            <Toogle/>
            <AdmVoir/>
            <AdmAjout/>
       
        </div>
         
        </section>
        </>
    )
}
