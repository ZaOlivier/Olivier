import { useState } from "react"
import axios  from "axios";

export const Inscription=()=>{
const[nom, setNom]=useState('');
const[numero, setNumero]=useState('');
const[motDePass, setMotDePass]=useState('');
const[email, setEmail]=useState('');

// une requette pour s'incrit
const userInscription=(async(e)=>{
     e.preventDefault();
    try{
        const res= await
        axios.post('http://localhost:5000/api/user', {
            nom,
            numero,
            email,
            motDePass,

        })
        // res.json(res.data)
        console.log(res.data);
        // (res.data)
        // console.log(res.data); 
        
    }catch(err){
        console.error((err))
    }
})

return(

    <>
    <form onSubmit={userInscription}>
        <input type="text" 
        value={nom}
        placeholder="votre nom"
        onChange={(e) =>
            setNom(e.target.value)}
        />
        <input type="tel" 
        value={numero}
        placeholder="votre numero"
        pattern="[0-9]{10}"
        title="Entrez un numéro valide à 10 chiffres"
        onChange={(e) =>
            setNumero(e.target.value)}
        />
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

