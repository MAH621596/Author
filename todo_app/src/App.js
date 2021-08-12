import './App.css';
//import {NavBar} from "./components/NavBar";
import {BrowserRouter} from 'react-router-dom';
import {NavBar} from './Components/NavBar';
import {Route,Switch} from 'react-router-dom';
import {Todo} from "./Components/Todo";
import { Login } from './Components/Login';
import { SignUp } from './Components/SignUp';
//import {pic2} from "./images/pic2.jpg";
//import {Images} from "./Components/images";
import React,{useState,useEffect} from "react";
import {auth} from "./Firebase";


function App() {

  const [user,setUser] = useState(null)
  useEffect(()=> {
    auth.onAuthStateChanged(user=>{
      if(user) setUser(user)      
      else setUser(null)
    })

  },[])
  



  return (
    <BrowserRouter>

       <NavBar user={user}/>
       <Switch>
         <Route exact path='/'>
           <Todo user = {user}/>

         </Route>

         <Route path='/login'>
           <Login/>
         </Route>

         <Route path='/signup'>
           <SignUp/>
         </Route>

       </Switch>


       <div class = "body">
         .
       </div>



       {/* <div>
       <img src={pic2}/>
       </div>
        */}
     
    </BrowserRouter>
    
  
  

    
    
  );
}

export default App;
