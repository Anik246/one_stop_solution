import React,{useState} from "react";
import "./questionBank.css";
import Question from "../../components/Questions/question.jsx";
import FooterQ from "../../components/Questions/footerQ.jsx";
import UploadPopUp from "../../components/UpooadPopUp/uploadpopup.jsx";
function QuestionBank(){
    const [showPopUp, setShowPopUp] = useState(false);
    return(
        <>
         {showPopUp ? <UploadPopUp setShowPopUp={setShowPopUp} /> : <></>}
        <div>
            <Question setShowPopUp={setShowPopUp}/>
            <FooterQ/>
        </div>  
         
        </>
     )    
}
export default QuestionBank;