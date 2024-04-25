import React, { useState } from "react";
import "./uploadpopup.css";

function UploadPopUp({ setShowPopUp: setShowPopUp }) {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        // Here you can perform the upload logic, like sending the file to a server
        if (selectedFile) {
            console.log("Uploading file:", selectedFile);
            // Example: You can use FormData to upload the file via fetch or Axios
            const formData = new FormData();
            formData.append('file', selectedFile);

            // Example: Upload using fetch
            fetch('YOUR_UPLOAD_URL', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Upload successful', data);
                    // Handle success response
                })
                .catch(error => {
                    console.error('Error uploading file', error);
                    // Handle error
                });
        }
    };


    return (
        <div className="upload-popup">
            <form action="/qb/upload" method="post" enctype="multipart/form-data" className="upload-popup-container">
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
                        Trimister:
                    </div>
                    <div className="radio-group">
                        <label for="fall"><input type="radio" id="fall" name="trimester" value="fall" /> Fall</label>
                        <label for="summer"><input type="radio" id="summer" name="trimester" value="summer" /> Summer</label>
                        <label for="spring"><input type="radio" id="spring" name="trimester" value="spring" /> Spring</label>
                    </div>

                </div>
                <div className="upload-popup-condition">
                    <div>
                        Type:
                    </div>
                    <div className="radio-group">
                        <label for="ct"><input type="radio" id="ct" name="type" value="ct" /> CT</label>
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
                    <input type="file" onChange={handleFileChange} />
                </div>
                <div className="upload-popup-inputs">

                    <button onClick={handleUpload}>Submit</button>

                </div>
            </form>

        </div>
    )

}
export default UploadPopUp;