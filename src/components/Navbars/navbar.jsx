import React, { useState } from "react";
import "./navbar.css"
import { NavLink } from "react-router-dom";


function Navbar({setShowLogin}) {
    const [menu, setMenu] = useState("Home");
    const [clicked, setClicked] = useState(true);
    function toggleMenu() {
        setClicked(!clicked);
    }

    return (
        <nav className="navbar">

           
            <svg id="logo-38" width="78" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" class="ccustom" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" class="ccompli1" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" class="ccompli2" fill="#FFBC7D"></path> </svg>
             <h1>UIU Soloution</h1>           
            <ul className={!clicked?"navbar-menu show ":"navbar-menu"}>
            
                <NavLink to="/home"className="nav-link" >Home</NavLink> 
                <NavLink to="/library"className="nav-link" >Library</NavLink> 
                <NavLink to="/question" className="nav-link">Questions</NavLink>
                <NavLink to="/shuttle" className="nav-link">Shuttle </NavLink>
                <NavLink to="/tolet" className="nav-link">ToLet</NavLink>
                
            </ul>

            <div className="navbar-right">
                <a href="/" id="bell-icon"><i class="fa-solid fa-bell"></i></a>
                <button onClick={()=>setShowLogin(true)}>Sign in</button>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                {clicked ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}
            </div>

        </nav>


    )
}
export default Navbar;

