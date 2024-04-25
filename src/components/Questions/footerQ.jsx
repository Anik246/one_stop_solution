import React from "react";
import "./footerQ.css";

function FooterQ() {
    return (

        <div className="footerQ" >
            <div className="footer-content">
                <div className="footer-content-left">
                    <svg id="logo-38" width="78" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" class="ccustom" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" class="ccompli1" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" class="ccompli2" fill="#FFBC7D"></path> </svg>
                    <h1>UIU Soloution</h1>
                    <div className="footer-social-icon">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>

                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Profile</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+88 -013-1490-7760</li>
                        <li>contact@hotmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 uiusoloution.com - All Rights Reserved.</p>
        </div>

    )
}

export default FooterQ;