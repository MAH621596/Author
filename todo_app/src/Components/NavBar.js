import react from 'react';
import {Link} from 'react-router-dom';
import { auth } from "../Firebase";
import {useHistory} from "react-router-dom";




export const NavBar = ({user}) => {
  const history = useHistory()
    return (

      <>

  <nav>
<div className="nav-wrapper blue">
  <Link to = "/" className="brand-logo">Todo</Link>
  <ul id="nav-mobile" className="right">
     
     {user?<li>
        <button className="btn red" onClick={()=>{
          auth.signOut()
          history.push('/login')
        }} >Log Out</button><br/>
    </li>: 
    <>
    <li><Link to="/login">LOGIN</Link></li>
    <li><Link to="/signup">SIGN UP</Link></li>
    </>
     }
  </ul>
</div>
</nav>
{/* 
<div className="">
  <h1>json</h1>

</div> */}
</>
        
    )
}



    