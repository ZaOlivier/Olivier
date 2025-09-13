// composants pour la barre de recherche
// importe le style
import '../stylescss/barrerecherche.css'
import { Search } from 'lucide-react';

const BarreRecherche=()=>{
    return(
        <form>
            <input type="search" placeholder="Recherche d'autres produits"/>
            <button className='search'><Search/></button>
        </form>
    );
    
}

export default BarreRecherche;