import React, { useState } from "react";
import "./LoginPopUp.css";

function LoginPopUp({ setShowLogin }) {
    const [currState, setCurrState] = useState("Sign Up")

    const handleLogin = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                // Handle successful login, maybe redirect or update state
                const {token} = await response.json();
                
                //Save the token
                console.log(token);
            } else {
                // Handle failed login
                const errorMessage = await response.json();
                
                //Show the error to fontEnd
                console.log(errorMessage);
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    const handleSignUp = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/user/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });
    
            if (response.ok) {
                //Show Success message and redirect to login
                const {message} = await response.json();
                console.log(message);


            } else {
                // Handle failed login
                const errorMessage = await response.json();
                
                //Show the error to fontEnd
                console.log(errorMessage);
            }
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };


    return (
        <div className="login-popup">
            <form className="Login-popup-container" onSubmit={currState === "Login" ? handleLogin : handleSignUp}>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <i onClick={() => setShowLogin(false)} class="fa-solid fa-x"></i>
                </div>
                <div className="login-popup-inputs" >
                    {currState === "Login" ? <></> : <input name="name" type="text" placeholder="Your Name" required />}
                    <input name="email" type="email" placeholder="Your Email" required />
                    <input name="password" type="password" placeholder="Password" required />

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