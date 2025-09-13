
import axios from 'axios'
import {useState } from 'react'

export const Connexion=()=>{
    const[email, setEmail]=useState('');
    const[motDePass, setMotDePass]=useState('');

    const userConnexion=(async(e)=>{
        e.preventDefault();
        try{
            const res= await
            axios.post('http://localhost:5000/api/user', {
                email,
                motDePass
            })
            console.log(res.data);
            
        }catch(err){
            console.error((err))
        }
    })
    return(
        <>
        <form onSubmit={userConnexion}>
         <input type="email" 
        value={email}
        placeholder="votre gmail"
        onChange={(e) =>
            setEmail(e.target.value)}
        />
        <input type="passWord" 
        value={motDePass}
        placeholder="mot de passe"
        onChange={(e) =>
            setMotDePass(e.target.value)}
        />
        <button type="submit">S'incrire</button>
        </form>
        </>
    )
}

