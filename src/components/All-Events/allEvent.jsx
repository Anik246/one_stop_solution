import React from "react";
import "./allEvent.css";
function AllEvent() {
    return (
        <div className="event-main-container">
            <div className="event-inner-container">
                <div className="event-title">
                    <h1>Full Stack Web Development Complete guideline</h1>
                </div>
                <div className="event-time">
                    <i class="fa-regular fa-clock"></i>
                    <p>29 April 2024, 02:42</p>
                </div>
                <div className="events-line">
                   <hr />
                </div>
                <div className="event-photos">
                    <img src="src/components/All-Events/full-stack.webp" alt="/" />
                </div>
                <div className="event-description">
                    <p>
                        Lorem ipsum, dolor sit amet consecteturb  Mollitia possimus ea numquam quia facilis deserunt qui rem nostrum dolores <br />
                        officiis, voluptatibus libero beatae? Fugiat, br
                        laudantium ducimus? <br />Full-stack web developmen <br />
                        encompasses the creation of both the front-end and back-end <br />
                        components of web applications. On the front-end side,<br />
                        developers focus on crafting the user interface (UI) and user <br />
                        experience (UX) through HTML, CSS, and JavaScript.
                        HTML provides the structure of web pages, CSS styles them <br />
                        and JavaScript adds interactive elements and dynamic behavior <br />
                        to enhance user engagement. Modern front-end frameworks such <br />
                        as React, Angular, or Vue.js
                        streamline development by providing <br />
                        powerful tools and reusable components <br />
                        for building complex user interfaces.
                    </p>
                </div>
            </div>

        </div>
    )
}
export default AllEvent;