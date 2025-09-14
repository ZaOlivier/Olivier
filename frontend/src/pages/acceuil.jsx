// page d'acceuil
import '../components/stylescss/acceuil.css'
import Header from "../components/header/header";
import { Articles6, Articles6A } from '../components/sectionafficharticle/affichesectionart';
import { MyFooter } from '../components/footer/footer';
import Navig from '../components/nav/navig';
import c from '../aasets/im/c.gif'
const Acceuil=()=>{
    return(
       
        <>
            <div className="bani" style={{
                width:"100dvw",
                height:"8dvh",
                // border:"var(--border-enfant1)",
                objectFit:"cover"
            }}>
            <img src={c} alt="" style={{
                width:"100%",
                height:"100%",
                // objectFit:"cover"
            }}/>
            </div>
            <div>
                {/* <Header /> */}
                <Navig />
                
            </div>
            
            <main  className="">

            <Articles6 />
            {/* <Articles6A /> */}
            {/* <Articles6 /> */}
            </main>
            <MyFooter />
            
        
        </>
       
    );
}
export default Acceuil;