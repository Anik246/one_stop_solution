import React from "react";
import "./appDownload.css";

function AppDownload() {
    return (
       
        <div className="app-download">
            <p>For Better Experience Download <br />Suttle Track APP</p>
            <div className="app-download-platform">
                <img className="appstore" src="src/components/AppDownload/appstore.png" alt="" />
                <img className="playstore" src="src/components/AppDownload/playstore.png" alt="" />
            </div>
        </div>

    )
}
export default AppDownload;