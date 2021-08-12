import React,{useState} from 'react';
import { auth } from "../Firebase";
import { useHistory } from "react-router-dom";




export const SignUp = () => {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const history = useHistory()

    const HandleSubmit= async (e)=>{
        e.preventDefault()
        

        try{
            const result =  await  auth.createUserWithEmailAndPassword(email,password)
            window.M.toast({html: `welcome ${result.user.email}`, classes: "green"})
            history.push('/')
        }

        catch(err){
           window.M.toast({html: err.message, classes: "green"})

        }
    }


    return (
        <div className="center container" style={{maxWidth:"500px"}} >
            <h3>SignUp Form</h3>
            <form onSubmit={(e)=> HandleSubmit(e)} >
            <div className="input-field">
          <input  type="email" placeholder="E-mail" onChange={(e)=>setEmail(e.target.value)} />
          
          <input  type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
         
           </div>
           <button type="submit" className="btn green">Sign Up</button><br/>
            </form>
           </div>
    )
}
