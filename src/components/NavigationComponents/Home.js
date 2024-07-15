import React from "react";
import './Home.css';
import Livwell from './../images/partners/Livwell.jpeg';
import NID from './../images/partners/NID.jpeg';
import Nulite from './../images/partners/NULITE.jpeg';
import Capsoft from './../images/partners/capsoft.jpeg';
import royal_nutricare from './../images/partners/Royal_Nutricare.jpeg'
import Message from "./Message/Message";

const Home = () => {
    return (
        <div className="home-container">
            <div className="main-content">
                <h1 className="main-heading">{Message.greet}</h1>
                <p>{Message.homepage_mgs}</p>
            </div>

            <div className="aside-info-container">
                <aside className="side-info">
                    <img className='logo-img' src="https://i.ibb.co/DCSGCJ0/brand-Logo.png" alt="Logo" />
                    <h2>Our Vision</h2>
                    <p>{Message.companisVision}</p>
                </aside>
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

            <div className="">

            </div>

        </div>
    );
}

export default Home;
