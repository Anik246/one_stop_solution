import React, { useState } from "react";
import "./question.css";
import { Link } from "react-router-dom";
const questionsData = [
    { id: 1, urL: "src/components/Questions/Final_CSE_4325_Fall23 (15).pdf", title: 'Artificial Intelligence', Trimester: 'Fall', Year: '2023', type: "MID" },
    { id: 2, urL: 'src/components/Download/Final_CSE_4325_Fall24.pdf', title: 'Data Structures and Algorithms', Trimester: 'Spring', Year: '2023', type: "Final" },
    { id: 3, title: 'Systems Analysis and Design', Trimester: "Summer", Year: '2023', type: "CT" },
    { id: 4, title: 'Computer Networks', Trimester: 'Fall', Year: '2023', type: "Final" },
    { id: 5, title: 'Database Management Systems', Trimester: 'Spring', Year: '2023', type: "MID" },
    { id: 6, title: 'Operating Systems', Trimester: 'Summer', Year: '2023', type: "CT" },
    { id: 7, title: 'Web Development', Trimester: 'Fall', Year: '2023', type: "Final" },
    { id: 8, title: 'Machine Learning', Trimester: 'Spring', Year: '2023', type: "MID" },
    { id: 9, title: 'Software Engineering', Trimester: 'Summer', Year: '2023', type: "CT" },
    { id: 10, title: 'Computer Graphics', Trimester: 'Fall', Year: '2023', type: "Final" },
    { id: 11, title: 'Cybersecurity', Trimester: 'Spring', Year: '2023', type: "MID" },
    { id: 12, title: 'Cloud Computing', Trimester: 'Summer', Year: '2023', type: "CT" },
    { id: 13, title: 'Data Mining', Trimester: 'Fall', Year: '2023', type: "Final" },
    { id: 14, title: 'Mobile App Development', Trimester: 'Spring', Year: '2023', type: "MID" },
    { id: 15, title: 'Information Retrieval', Trimester: 'Summer', Year: '2023', type: "CT" },
    { id: 16, title: 'Embedded Systems', Trimester: 'Fall', Year: '2023', type: "Final" },
    { id: 17, title: 'Computer Vision', Trimester: 'Spring', Year: '2023', type: "MID" },
    { id: 18, title: 'Natural Language Processing', Trimester: 'Summer', Year: '2023', type: "CT" },
    { id: 19, title: 'Information Security', Trimester: 'Fall', Year: '2023', type: "Final" },
    { id: 20, title: 'Distributed Systems', Trimester: 'Spring', Year: '2023', type: "MID" },
    { id: 21, title: 'Computer Architecture', Trimester: 'Summer', Year: '2023', type: "CT" },
    { id: 22, title: 'Software Testing', Trimester: 'Fall', Year: '2023', type: "Final" },
    { id: 23, title: 'Big Data Analytics', Trimester: 'Spring', Year: '2023', type: "MID" },
    { id: 24, title: 'Human-Computer Interaction', Trimester: 'Summer', Year: '2023', type: "CT" },
    { id: 25, title: 'Parallel Computing', Trimester: 'Fall', Year: '2023', type: "Final" },
    { id: 26, title: 'Artificial Neural Networks', Trimester: 'Spring', Year: '2023', type: "MID" },
    { id: 27, title: 'Robotics', Trimester: 'Summer', Year: '2023', type: "CT" },
    { id: 28, title: 'Quantum Computing', Trimester: 'Fall', Year: '2023', type: "Final" },
    { id: 29, title: 'Blockchain Technology', Trimester: 'Spring', Year: '2023', type: "MID" },
    { id: 30, title: 'Computer Ethics', Trimester: 'Summer', Year: '2023', type: "CT" }
];
//download question
// const handleDownload = (pdfUrl) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', pdfUrl, true);
//     xhr.responseType = 'blob';

//     xhr.onload = () => {
//         const blob = new Blob([xhr.response], { type: 'application/pdf' });
//         const url = window.URL.createObjectURL(blob);
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = pdfUrl.substring(pdfUrl.lastIndexOf('/') + 1);
//         document.body.appendChild(a);
//         a.click();
//         window.URL.revokeObjectURL(url);
//     };

//     xhr.send();
// };


function Book({ book: questionPaper }) {
    const pdfUrl = questionPaper.urL;

    return (
        <Link to= "http://localhost:5000/uploads/qbs/ai-mid-2023-cse-1714376411775.pdf">
        <div className="question-details">
            <div className="question-course">
                <h3 id='question-icon'>
                    <i className="fa-solid fa-file-pdf"></i> {questionPaper.title}
                </h3>
            </div>
            <div className="question-type">
                <p>{questionPaper.type}</p>
            </div>
            <div className="question-t-y">
                <p>{questionPaper.Trimester + "-" + questionPaper.Year}</p>
            </div>
            <div id="question-download">
                <i class="fa-solid fa-download"></i>
            </div>
        </div>
        </Link>
    );
}

function Question({ setShowPopUp }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [yearFilters, setYearFilters] = useState({});
    const [trimesterFilters, setTrimesterFilters] = useState({});
    const [typeFilters, setTypeFilters] = useState({});
    const [currentPage, setCurrentPage] = useState(1);

    const booksPerPage = 10;

    const totalPages = Math.ceil(
        questionsData
            .filter((book) =>
                book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (Object.keys(yearFilters).length === 0 || yearFilters[book.Year]) &&
                (Object.keys(trimesterFilters).length === 0 || trimesterFilters[book.Trimester]) &&
                (Object.keys(typeFilters).length === 0 || typeFilters[book.type])
            )
            .length / booksPerPage
    );

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const handleCheckboxChange = (event, filterType) => {
        const { name, checked, value } = event.target;

        if (filterType === 'Year') {
            setYearFilters(prevFilters => ({
                ...prevFilters,
                [value]: checked,
            }));
        } else if (filterType === 'Trimester') {
            setTrimesterFilters(prevFilters => ({
                ...prevFilters,
                [value]: checked,
            }));
        } else if (filterType === 'type') {
            setTypeFilters(prevFilters => ({
                ...prevFilters,
                [value]: checked,
            }));
        }

        setCurrentPage(1);
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const visibleBooks = questionsData
        .filter((book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (Object.keys(yearFilters).length === 0 || yearFilters[book.Year]) &&
            (Object.keys(trimesterFilters).length === 0 || trimesterFilters[book.Trimester]) &&
            (Object.keys(typeFilters).length === 0 || typeFilters[book.type])
        )
        .slice(startIndex, endIndex);

    return (
        <div className="question-container">
            <div className="question-search-container">

                <div id='title'>
                    <i class="fa-solid fa-file"></i>
                    <h1>Which Questions do you need practice for?</h1>
                    <p>Search for a question and find study material about it</p>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Search questions"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    {searchTerm === '' && (
                        <button className="question-search-button">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    )}
                    {searchTerm && (
                        <button className="question-clear-button" onClick={() => setSearchTerm('')}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    )}
                </div>
            </div>
            <div className="question-content">
                <div className="questions-container">
                    <div id='questions-heading'>
                        <h1>{searchTerm ? 'Search Result' : 'Recent Questions'}</h1>
                    </div>
                    {visibleBooks.map((book) => (
                        <Book key={book.id} book={book} />
                    ))}
                </div>
                <div className="question-sidebar">
                    <div className="upload-question">
                        <div onClick={() => setShowPopUp(true)} id="upload">
                            <p>Uploads</p>
                            <i class="fa-solid fa-cloud-arrow-up"></i>
                        </div>
                    </div>
                    <div>
                        <h1 className="customize">Filter Your Search</h1>
                    </div>
                    <div className="trimester">
                        <div className="trimester-div2">
                            <div>
                                <h3>Year</h3>
                            </div>
                            <div className="horizontal-line">
                                <hr />
                            </div>
                            {['2022', '2023', '2024'].map(year => (
                                <div className="checkbox-label" key={year}>
                                    <div className="checkbox">
                                        <input
                                            type="checkbox"
                                            id={year}
                                            name="Year"
                                            value={year}
                                            onChange={(e) => handleCheckboxChange(e, 'Year')}
                                        />
                                    </div>
                                    <div className="label">
                                        <label htmlFor={year}>{year}</label><br />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="trimester">
                        <div className="trimester-div2">
                            <div>
                                <h3>Trimester</h3>
                            </div>
                            <div className="horizontal-line">
                                <hr />
                            </div>
                            {['Fall', 'Summer', 'Spring'].map(trimester => (
                                <div className="checkbox-label" key={trimester}>
                                    <div className="checkbox">
                                        <input
                                            type="checkbox"
                                            id={trimester}
                                            name="Trimester"
                                            value={trimester}
                                            onChange={(e) => handleCheckboxChange(e, 'Trimester')}
                                        />
                                    </div>
                                    <div className="label">
                                        <label htmlFor={trimester}>{trimester}</label><br />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="trimester-type">
                        <div className="trimester-div2">
                            <div>
                                <h3>Type</h3>
                            </div>
                            <div className="horizontal-line">
                                <hr />
                            </div>
                            {['CT', 'MID', 'Final', 'Notes', 'Solution'].map(type => (
                                <div className="checkbox-label" key={type}>
                                    <div className="checkbox">
                                        <input
                                            type="checkbox"
                                            id={type}
                                            name="type"
                                            value={type}
                                            onChange={(e) => handleCheckboxChange(e, 'type')}
                                        />
                                    </div>
                                    <div className="label">
                                        <label htmlFor={type}>{type}</label><br />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="question-pagination">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <span className="page-number">{currentPage}</span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        <i class="fa-sharp fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Question;
