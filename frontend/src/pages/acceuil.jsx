// page d'acceuil
import '../components/stylescss/acceuil.css'
import Header from "../components/header/header";
// import { Articles6, Articles6A } from '../components/sectionafficharticle/affichesectionart';
// import { MyFooter } from '../components/footer/footet';
import Navig from '../components/nav/navig';
const Acceuil=()=>{
    return(
       
        <>
            <div>
                {/* <Header /> */}
                <Navig />
                
            </div>
            
            <main  className="">
            {/* <Articles6 /> */}
            {/* <Articles6A /> */}
            {/* <Articles6 /> */}
            </main>
            {/* <MyFooter /> */}
            
        
        </>
       
    );
}
export default Acceuil;