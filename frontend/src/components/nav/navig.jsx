// composants pour la naviguation
// permet de cree un lien
import { Link } from 'react-router-dom';
import BarreRecherche from '../barreRech/barreRecher';
import '../stylescss/navig.css';
import { ShoppingCart } from 'lucide-react';
import { useContext } from 'react';
import { PanierContext } from '../../context/panierContext';
import { AlignLeft } from 'lucide-react';
import AppelServices from '../appelSevices/services';


const Navbar=()=>{
    const {panier}= useContext(PanierContext)
    const QteTotalPanier= panier.reduce((quantite, details)=>
        quantite + details.quantite, 0
    );
   
    
    return(
        <>     
            <div className="Navig">

                <div className='logonavigserv'>
                    <div className="burger">
                       <AlignLeft />
                    </div>
                <div>
                    <h2>KCAnRF</h2>
                </div>
                
                <div className='NavigServ'>
                    <AppelServices />
                    <div className="Navpanier">
                        <Link to='/Affichpanier' ><ShoppingCart className='iconserv' color='black' size={28}/>
                        <span className='ecriturepanier'>Panier  </span>
                        <span className='NombrePanier'>{QteTotalPanier}</span></Link>
                       
                       
                    </div>
                </div>
                </div>
                <BarreRecherche />
            </div>
        </>
        
    );
};
export default Navbar;

