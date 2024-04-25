import React, { useState } from "react";
import "./home.css";
import Header from "../../components/Header/header.jsx";
import Stat from "../../components/Stats/stat.jsx";
import SampleInfo from "../../components/Events/event.jsx";
import Footer from "../../components/Footer/footer.jsx";
import AppDownload from "../../components/AppDownload/appDownload.jsx";
function Home() {

    return (

        <>

            <div>

                <Header />
                <Stat />
                <SampleInfo />
                <AppDownload />
                <Footer />
            </div>
            

        </>

    )

}
export default Home;