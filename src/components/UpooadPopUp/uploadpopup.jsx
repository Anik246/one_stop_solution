import React, { useState } from "react";
import "./uploadpopup.css";

function UploadPopUp({ setShowPopUp: setShowPopUp }) {
    const [pdfFile, setPdfFile] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("course", "ai");
        formData.append("code", "ai");
        formData.append("type", "mid");
        formData.append("trimester", "fall");
        formData.append("year", 2023);
        formData.append("department", "cse");
        formData.append("pdfFile", pdfFile);
  
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/qb/upload`,
            {
              method: "POST",
              body: formData,
            }
          );
          const data = await response.text();
          console.log(data);
          
        } catch (error) {
          console.log(error);
        }
      }
    

    return (
        <div className="upload-popup">
            <form onSubmit={handleSubmit} encType="multipart/form-data"  className="upload-popup-container">
                <div className="upload-popup-title">
                    <h2>Upload Questions Paper</h2>
                    <i onClick={() => setShowPopUp(false)} class="fa-solid fa-x"></i>
                </div>
                <div className="upload-popup-inputs" >
                    <input type="text" id="name" name="course" placeholder="Course Name" required />
                    <input type="text" id="courseId" name="code" placeholder="Course ID" required />
                </div>
                <div className="upload-popup-condition">
                    <div>
                        Trimester:
                    </div>
                    <div className="radio-group">
                        <label for="fall"><input type="radio" id="fall" name="trimester" value="fall" required /> Fall</label>
                        <label for="summer"><input type="radio" id="summer" name="trimester" value="summer" /> Summer</label>
                        <label for="spring"><input type="radio" id="spring" name="trimester" value="spring" /> Spring</label>
                    </div>

                </div>
                <div className="upload-popup-condition">
                    <div>
                        Type:
                    </div>
                    <div className="radio-group">
                        <label for="ct"><input type="radio" id="ct" name="type" value="ct" required/> CT</label>
                        <label for="mid"><input type="radio" id="mid" name="type" value="mid" /> MID</label>
                        <label for="final"><input type="radio" id="final" name="type" value="final" /> Final</label>
                        <label for="solution" ><input type="radio" id="solution" name="type" value="solution" /> Solution</label>
                    </div>


                </div>
                <div className="upload-popup-inputs">
                    <input type="text" id="year" name="year" placeholder="Year" required />
                </div>
                <div className="upload-popup-inputs">
                    <select className="select" id="department" name="department" required>
                        <option value="" disabled selected>Select Department</option>
                        <option value="cse">Computer Science and Engineering (CSE)</option>
                        <option value="eee">Electrical and Electronics Engineering (EEE)</option>
                        <option value="bba">Bachelor of Business Administration (BBA)</option>
                        <option value="others">Others</option>

                    </select>
                </div>
                <div className="upload-pdf">
                    <p>Upload Pdf File:</p>
                    <input name="pdfFile" onChange={(e)=> setPdfFile(e.target.files[0]) } type="file" accept="application/pdf" required />
                </div>
                <div className="upload-popup-inputs">

                    <button>Submit</button>

                </div>
            </form>

        </div>
    )

}
export default UploadPopUp;