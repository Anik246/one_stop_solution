import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./pages/Homes/home.jsx";
import Library from "./pages/Librarys/Library.jsx";
import Navbar from "./components/Navbars/navbar.jsx";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp.jsx";
import QuestionBank from "./pages/Question Bank/questionBank.jsx";
import EventPage from "./pages/EventsPage/eventsPage.jsx";
function App() {

  const [showLogin, setShowLogin] = useState(false);


  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}

      <BrowserRouter>

        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/home" element={<Home />} ></Route>
          <Route path="/library" element={<Library />} ></Route>
          <Route path="/question" element={<QuestionBank />} ></Route>
          <Route path="/events" element={<EventPage/>}></Route>
        </Routes>

      </BrowserRouter>
  

    </>



  )
}

export default App;
