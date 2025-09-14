import { Link } from "react-router-dom"

export const Toogle=()=>{
    return(
        <>
        <div className="tmenu" style={{
            height:"50vh",
            width:"20vw",
            border:"2px solid white",
            marginRight:"20px",
        }}>
            <Link to='/admvoir'  style={{
                textDecoration:"none",
                 color:"white",
                 padding:"10px",
                 marginTop:"10px"
                }}
            >utilisateur</Link>
        </div>

        </>
    )
}