import React from "react";
import Message from "./Message/Message";
import team from './../images/team-logo.jpg';
import ourstory from './../images/our-story.jpg';
import innovation from './../images/inovation.jpg'
const About = (props) => {
    return (
        <div className={props.className}>
            <div className="about-us-container">
                <div className="about-header">
                    <h1>About Us</h1>
                    <h1>{Message.home_page_greets.greet}</h1>
                    <p>{Message.About_page_messages.about_svy}</p>
                </div>

                <div className="our-story-container">
                    <div>
                        <h1>Our Story</h1>
                        <p>{Message.About_page_messages.our_story}</p>
                    </div>
                    <img src={ourstory} alt="out-story" />
                </div>

                <div className="out-team-container">
                    <img src={team} alt="our-team" />
                    <div>
                        <h1>Our Team</h1>
                        <p>{Message.About_page_messages.our_team}</p>
                    </div>
                </div>

                <div className="innovation-container">
                    <div>
                        <h1>Innovation and Research</h1>
                        <p>{Message.About_page_messages.research_innovation}</p>
                    </div>
                    <img src={innovation} alt="R&D" />
                </div>
            </div>
        </div>
    )
}

export default About;