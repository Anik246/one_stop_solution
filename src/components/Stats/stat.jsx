import React from 'react';
import './stat.css';


function Stat() {
    return (
        <div className="stat-container">
            <div className='stat-content'>
                <h2>7000 students saved, and
                    <br />counting</h2>
                <p>50k new study notes added every day, from the worlds most
                    <br />active student communities</p>
            </div>

            <div className="stat-element">
                <div className="row">
                    <h2>500+</h2>
                    <div className="questions-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <path fill="#50e6ff" d="M39,16v25c0,1.105-0.895,2-2,2H11c-1.105,0-2-0.895-2-2V7c0-1.105,0.895-2,2-2h17l3,8L39,16z"></path><linearGradient id="VWJODR~F49S8JZXNLPMJka_Ygov9LJC2LzE_gr1" x1="28.529" x2="33.6" y1="2761.471" y2="2756.4" gradientTransform="translate(0 -2746)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3079d6"></stop><stop offset="1" stop-color="#297cd2"></stop></linearGradient><path fill="url(#VWJODR~F49S8JZXNLPMJka_Ygov9LJC2LzE_gr1)" d="M28,5v9c0,1.105,0.895,2,2,2h9L28,5z"></path><path fill="#057093" d="M32.5,24h-17c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h17c0.276,0,0.5,0.224,0.5,0.5	v1C33,23.776,32.776,24,32.5,24z"></path><path fill="#057093" d="M30.5,28h-15c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h15c0.276,0,0.5,0.224,0.5,0.5	v1C31,27.776,30.776,28,30.5,28z"></path><path fill="#057093" d="M32.5,32h-17c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h17c0.276,0,0.5,0.224,0.5,0.5	v1C33,31.776,32.776,32,32.5,32z"></path><path fill="#057093" d="M30.5,36h-15c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h15c0.276,0,0.5,0.224,0.5,0.5	v1C31,35.776,30.776,36,30.5,36z"></path>
                        </svg>
                        <p>Questions</p>
                    </div>

                </div>
                <div className="row">
                    <h2>700+</h2>
                    
                    <div className="Books-icon">
                       
                    <i class="fa-solid fa-book"></i>
                        <p>Books and Study Notes</p>
                    </div>
                       
                    

                </div>
                <div className="row">
                    <h2>7K+</h2>
                    <div className="Users-icon">
                    <i class="fa-solid fa-user"></i>
                      <p>Students</p>
                    </div>
                    
                </div>
            </div>


        </div>
    );
}
export default Stat;