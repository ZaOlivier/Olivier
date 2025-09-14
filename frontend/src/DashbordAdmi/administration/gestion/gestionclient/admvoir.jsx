import axios from "axios";
import { useState } from "react";

export const AdmVoir=()=>{
    const[admvoir, setAdmvoir]=useState([]);

    const Rolecontroler=(async(e)=>{
        e.preventDefault();
        try{
            const res= await
            axios.get('http://localhost:5000/administration/admclient')
            console.log(res.data);
            // (res.data)
            setAdmvoir(res.data)
        }catch(err){
            console.error((err));
        }

    })
    return(
        <div style={{
            display:"block",
            width:"40vw"
        }}>
         
            <p>voir tout les utilisateur</p>
            <button onClick={Rolecontroler} style={{
                border:" 2px solid rgb(255, 218, 55)",
                borderRadius:"3px",
                background:"rgb(255, 218, 55)"
            }}>voir les users</button>
           <table style={{border:" 2px solid white"}}>
            <thead style={{
                border:" 2px solid red",
                background:"rgb(255, 218, 55)"
            }}>
                <th>id</th>
                <th>nom</th>
                <th>numero</th>
                <th>gmail</th>
                <th>mot de pass</th>
                <th>version</th>
            </thead>
            <tbody style={{
                background:"rgba(146, 145, 145, 1)",
                color:"white"
                }}>
                {admvoir.map((user, index)=>(
                <tr key={index}>
                <td>{user._id}</td>
                <td>{user.nom}</td>
                <td>{user.numero}</td>
                <td>{user.email}</td>
                <td style={{
                    background:"rgba(254, 24, 24, 1)",
                    color:"rgba(0, 0, 0, 1)"
                }}>{user.motDePass}</td>
                <td>{user.__v}</td>
                </tr>
                ))}
            </tbody>
           </table>
           
            
        </div>
    )
}