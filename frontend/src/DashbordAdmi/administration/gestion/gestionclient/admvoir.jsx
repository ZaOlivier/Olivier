import axios from "axios";
import { useState } from "react";

export const AdmVoir=()=>{
    const[admvoir, setAdmvoir]=useState([]);
    const[id, setId]=useState('');

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
    // const Rolesupprimer=(async(e)=>{
    //     e.preventDefault();
    //     try{
    //         const res=await
    //         axios.delete(`http://localhost:5000/administration/admclient/$(id)`)
    //         console.log(res.data);
    //     }catch(err){
    //         console.error((err));
    //     }
    // })
    return(
        <div style={{display:"block"}}>
            {/* <section > */}
                {/* <form style={{height:"10px", width:"8px"}}>
                    <input type="serch" name="" id="" d/>
                    <button>rechercher</button>
                </form> */}
         <button onClick={Rolecontroler} style={{
                border:" 2px solid rgb(255, 218, 55)",
                borderRadius:"3px",
                background:"rgb(255, 218, 55)",
                margin:"10px"
            }}>voir les users</button>
             {/* <section >
                    <form onSubmit={Rolesupprimer} style={{
                        width:"auto",
                        height:"100%"
                    }}>
                       
                        <input type="text" 
        value={id}
        placeholder="id d'util"
        onChange={(e) =>
            setId(e.target.value)}

        />
                            
                        <button type="submit">action</button>
                    </form>
                </section>
            </section> */}
       
        <div style={{
            display:"block",
            // width:"40vw",
            maxHeight:"50vh",
            width:"55vw",
            overflow:"scroll",
            // overflowX:"hidden"
            }}>
    
           <table style={{border:" 2px solid white",}}>
            <thead style={{
                border:" 2px solid red",
                background:"rgb(255, 218, 55)"
            }}>
                <tr>
                <th>id</th>
                <th>nom</th>
                <th>numero</th>
                <th>gmail</th>
                <th>mot de pass</th>
                <th>version</th>
                <th>action adm</th>
                </tr>
            </thead>
            <tbody style={{
                background:"rgba(146, 145, 145, 1)",
                color:"white",  
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
         </div>
    )
}