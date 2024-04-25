import React, { useState } from "react";
import "./LoginPopUp.css";

function LoginPopUp({ setShowLogin }) {
    const [currState, setCurrState] = useState("Sign Up")
    return (
        <div className="login-popup">
            <form className="Login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <i onClick={() => setShowLogin(false)} class="fa-solid fa-x"></i>
                </div>
                <div className="login-popup-inputs" >
                    {currState === "Login" ? <></> : <input type="text" placeholder="Your Name" required />}
                    <input type="email" placeholder="Your Email" required />
                    <input type="password" placeholder="Password" required />
                    <input type="password" placeholder=" Confirm Password" required />



                </div>
                <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="Login-popup-condition">
                    <input type="checkbox" required/>
                    <p> By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                {currState==="Login"
                ?<p>create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
                 :<p >Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
                }
                
            </form>

        </div>                                        
    )

}
export default LoginPopUp;