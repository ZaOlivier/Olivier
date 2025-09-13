// composants appel de services
// import '../stylescss/services.css'
import { Link } from "react-router-dom"
import { Headset } from 'lucide-react'

const AppelServices=()=>{
    return(
      <>
        <Link to='/Services'><Headset className='iconserv' color='black' size={28}/><span className='ecriturepanier'>Services</span></Link>
      </>
    )
}

export default AppelServices;