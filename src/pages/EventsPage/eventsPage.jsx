import React from "react";
import data from "../../data.json";
import AllEvent from "../../components/All-Events/allEvent.jsx";
import Comments from "../../components/CommentSection/Comments.jsx";
import Footer from "../../components/Footer/footer.jsx";
function EventPage(){
    const currentUser = data.currentUser;
    return(
        <div className="main-container" >
                 <AllEvent/>
                 <Comments currentUser={currentUser} />
                 <Footer/>
        </div>
    )
}
export default EventPage;