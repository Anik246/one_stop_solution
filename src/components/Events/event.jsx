import React, { useState } from 'react';
import "./event.css";
import { Link } from 'react-router-dom';


function SampleInfo() {
  const [showEvents, setShowEvents] = useState(true);
  const [showNews, setShowNews] = useState(false);
  const [showBooks, setShowBooks] = useState(false);
  const toggleEvents = (e) => {
    e.preventDefault();
    setShowEvents(true);
    setShowNews(false);
    setShowBooks(false);
  };

  const toggleNews = (e) => {
    e.preventDefault();
    setShowEvents(false);
    setShowNews(true);
    setShowBooks(false);
  };


  const toggleBooks = (e) => {
    e.preventDefault();
    setShowEvents(false);
    setShowNews(false);
    setShowBooks(true);
  };

  const events = [
    {
      image: "src/components/Events/aiEvents.jpeg",
      date: 'April 15,2024 (9:00 AM)',
      description: 'An exhibition showcasing cutting-edge robotics technologies,and human-robot interaction systems.'
    },
    {
      image: "src/components/Events/cyber.jpeg",
      date: 'April 20,2024 (9:00 AM)',
      description: 'A conference focusing on the integration of artificial intelligence in healthcare, predictive analytics'
    }
  ];

  const questions = [
    { description: 'Fall-2023-Mid-System Analysis and Design' },
    { description: 'Fall-2023-Final-Artificial Intelligence' },
    { description: 'Fall-2023-Mid-System Analysis and Design' },
    { description: 'Fall-2023-Final-Computer Networks' },
    { description: 'Fall-2023-Mid-System Analysis and Design' },
    { description: 'Fall-2023-Mid-System Analysis and Design' }
  ];

  const books = [
    { title: 'Artificial Intelligence-2st Edition', author: 'Robert hooks' },
    { title: 'Artificial Intelligence-2st Edition', author: 'Robert hooks' },
    { title: 'Artificial Intelligence-2st Edition', author: 'Robert hooks' },
    { title: 'Artificial Intelligence-2st Edition', author: 'Robert hooks' },
    { title: 'Artificial Intelligence-2st Edition', author: 'Robert hooks' },
    { title: 'Artificial Intelligence-2st Edition', author: 'Robert hooks' },
    { title: 'Artificial Intelligence-2st Edition', author: 'Robert hooks' },
    { title: 'Artificial Intelligence-2st Edition', author: 'Robert hooks' },
    { title: 'Artificial Intelligence-2st Edition', author: 'Robert hooks' },
    { title: 'Artificial Intelligence-2st Edition', author: 'Robert hooks' },
    { title: 'Artificial Intelligence-2st Edition', author: 'Robert hooks' },
    { title: 'Artificial Intelligence-2st Edition', author: 'Robert hooks' },
    { title: 'Artificial Intelligence-2st Edition', author: 'Robert hooks' },
    { title: 'Artificial Intelligence-2st Edition', author: 'Robert hooks' },
    { title: 'Artificial Intelligence-2st Edition', author: 'Robert hooks' }
  ];

  return (
    <div className="containers">
      <h2>Only the best for the best</h2>
      <p>Experience the latest events firsthand as we showcase them right here on our website.</p>
      <div className='inner-container'>
        <div className='nav-main-container'>
          <nav className='nav-contents'>
            <ul className="nav-links">
              <li>
                <a href="#" onClick={toggleEvents} className={showEvents ? 'active' : ''}>Upcoming Events</a>
              </li>
              <li>
                <a href="#" onClick={toggleNews} className={showNews ? 'active' : ''}>Latest Questions</a>
              </li>
              <li>
                <a href="#" onClick={toggleBooks} className={showBooks ? 'active' : ''}>Books</a>
              </li>
            </ul>
          </nav>
        </div>


        <div className='info'>
          {showEvents && (
            events.map((event, index) => (
              <div key={index} className="upcoming-events">
                <img src={event.image} alt="" />
                <p className='date'>
                  <div>
                    <i className="fa-regular fa-clock"></i>
                  </div>
                  {event.date}
                </p>
                <p className='about'> {event.description}</p>
              </div>
            ))
          )}

          {showNews && (


            questions.map((item, index) => (
              <div key={index} className="latest-questions">

                <div className='latest-question-div'>
                  <i class="fa-solid fa-file"></i>
                  <p> {item.description}</p>
                </div>


              </div>


            ))


          )}



          {showBooks && (
            <div className="books-details">
              {books.map((book, index) => (
                <div key={index} className="books-content">
                  <div className='books-icon'>
                  <i class="fa-solid fa-book"></i>                  </div>
                  <div className='books-title'>
                    <p className='books-name'>{book.title}</p>
                    <p className='author'>{book.author}</p>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>


        <div>
          <Link to="/events">   
                {showEvents ? <button className='button'>View all events</button> : <button className='button'>Explore More</button>}
          </Link>
        </div>


        </div>
      </div>
    
  );
}


export default SampleInfo;