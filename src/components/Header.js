import { LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
    const [buttonLogin,setButtonLogin]=useState("Login");
    const OnlineStatus=useOnlineStatus();
    return(
     <div className="flex justify-between bg-blue-200">
         <div className="logo-container">
             <img className="w-56" src={LOGO}/>
         </div>
         <div className="flex items-center">
             <ul className="flex p-4 m-4">
                <li className="px-4">OnlineStatus:{OnlineStatus?"Online":"Offline"}</li>
                 <li className="px-4">Home</li>
                 <li className="px-4"><Link to="/about">About Us</Link></li>
                 <li className="px-4">Contact us</li>
                 <li className="px-4">Cart</li>
                 <button className="btn-login" onClick={()=>{
                   buttonLogin=="Login"? setButtonLogin("Logout"):setButtonLogin("Login")
                 }}>{buttonLogin}</button>
             </ul>
         </div>
 
     </div>
    );
 
 }
 export default Header;
