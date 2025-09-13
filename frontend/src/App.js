// nous permet d'importer le module et utilise les routes en react
import {Routes, Route} from 'react-router-dom';
// nous avons importer nos differents composants pour servi ce composant qui est le point
import Acceuil from './pages/acceuil'
import Services from './pages/services';
import APropos from './pages/aPropos';
import Commande from './pages/Commande';
import AffichPanier from './pages/affichpanier';
import AjouterAuPanierProvider from './components/ajoutPanier/ajouteraupanierProvider';
import ChoisirQteProvider from './components/choixquantite/qtechoix';
import './components/root style principal/rootStyle.css'


function App(){
    return(
       
            <AjouterAuPanierProvider>
             <ChoisirQteProvider>
                <Routes>
                    <Route path="/" element={<Acceuil />} />
                    <Route path='/Services' element={<Services />} />
                    <Route path='/APropos' element={<APropos />} />
                    <Route path='/AffichPanier' element={<AffichPanier />} />
                    <Route path='/Commande' element={<Commande />} />
                </Routes>
            </ChoisirQteProvider>
            </AjouterAuPanierProvider>
       
    );
};

// pour qu'on puisse l'importer
export default App;