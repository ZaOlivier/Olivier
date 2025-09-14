import { AdmAjout } from '../administration/gestion/gestionclient/admajout'
import { AdmVoir } from '../administration/gestion/gestionclient/admvoir'
import '../styleadm/acceuiladm.css'

export const AdmAcceuil=()=>{
    return(
        <div className='admacceuil'>
             <AdmVoir/>
        <p>acces interdit aux utilisateur clients <br />
        administration</p>

        <AdmAjout/>
       
        </div>
    )
}
