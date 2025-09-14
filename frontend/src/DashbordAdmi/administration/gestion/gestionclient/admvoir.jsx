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
        <>
         
            <p>voir tout les utilisateur</p>
            <button onClick={Rolecontroler}>voir les users</button>
           <table border="1">
            <thead>
                <th>id</th>
                <th>nom</th>
                <th>numero</th>
                <th>gmail</th>
                <th>mot de pass</th>
                <th>version</th>
            </thead>
            <tbody>
                {admvoir.map((user, index)=>(
                <tr key={index}>
                <td>{user._id}</td>
                <td>{user.nom}</td>
                <td>{user.numero}</td>
                <td>{user.email}</td>
                <td>{user.motDePass}</td>
                <td>{user.__v}</td>
                </tr>
                ))}
            </tbody>
           </table>
           
            
        </>
    )
}