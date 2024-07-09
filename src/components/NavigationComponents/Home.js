import React from "react";
import './Home.css';
import Message from "./Message/Message";
const Home = () => {
    return (
        <div className="home-container">
            <div>
                <h1>{Message.greet}</h1>
                <p>{Message.homepage_mgs}</p>
            </div>
            <aside className="side-info">
                <img className='logo-img' src="https://i.ibb.co/DCSGCJ0/brand-Logo.png" alt="Logo" />
                <h1>Our Vision</h1>
                <p>{Message.companisVision}</p>
            </aside>
        </div>
    );
}

export default Home;
