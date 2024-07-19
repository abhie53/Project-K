import React from "react";
import './Home.css';
import Livwell from './../images/partners/Livwell.jpeg';
import NID from './../images/partners/NID.jpeg';
import Nulite from './../images/partners/NULITE.jpeg';
import Capsoft from './../images/partners/capsoft.jpeg';
import royal_nutricare from './../images/partners/Royal_Nutricare.jpeg'
import Message from "./Message/Message";
import chooseUs from './../images/why-choose.jpg';
import { WhyChooseUsMessage } from "./Message/WhyChooseUs";

const Home = () => {
    return (
        <div className="home-container">
            <div className="top-content">
                <div className="main-content">
                    <h1 className="main-heading">{Message.home_page_greets.greet}</h1>
                    <p>{Message.home_page_greets.homepage_mgs}</p>
                    <h1 className="main-content-head">{Message.home_page_greets.main_heading}</h1>
                </div>
            </div>

            <div className="about-company">
                <h1>About Svy Biotech</h1>
                <p>{Message.home_page_greets.about_message}</p>
            </div>

            <div className="aside-info-container">
                <aside className="side-info">
                    <h2>Our Vision</h2>
                    <p>{Message.home_page_greets.companisVision}</p>
                </aside>

                <aside className="side-info">
                    <h2>Our Mission</h2>
                    <p>{Message.home_page_greets.companisMission}</p>
                </aside>
            </div>


            <div className="why-choose-us-container">
                <div>
                    <img src={chooseUs} alt="choose-us" />
                </div>
                <div>
                    <h1>WHY CHOOSE US</h1>
                    <ul className="why-choose-us-points">
                        {WhyChooseUsMessage.map((data) => {
                            return (
                                <li><h3>{data}</h3></li>
                            )
                        })}
                    </ul>
                </div>
            </div>


            <div className="partners">
                <h2>Our Partners</h2>
                <div className="partners-logo">
                    <img src={Capsoft} alt="Capsoft" />
                    <img src={NID} alt="NID" />
                    <img src={Nulite} alt="Nulite" />
                    <img src={Livwell} alt="Livwell" />
                    <img src={royal_nutricare} alt="royal_nutricare" />
                </div>
            </div>
        </div>
    );
}

export default Home;
