
import React,{useState} from "react";
import Books from "../../components/Bookses/books.jsx";
import Navbar from "../../components/Navbars/navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";
import LoginPopUp from "../../components/LoginPopUp/LoginPopUp.jsx";


function Library() {
    return (

        <>
            <div>
                <Books />
                <Footer/>
            </div>

        </>

    )
}
export default Library;