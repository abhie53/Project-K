import React from "react";
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div>
                <h1>Welcome To SVY BIOTECH</h1>
                <p>A Division Of Sieben Healthcare</p>
            </div>
            <aside className="side-info">
                <img className='logo-img' src="https://i.ibb.co/DCSGCJ0/brand-Logo.png" alt="Logo" />
                <h1>Our Vision</h1>
                <p>At SVY Biotech, we envision a future where innovative biotechnological solutions empower healthier lives. 
                    Our commitment is to lead the healthcare industry in India by delivering cutting-edge,
                    sustainable, and accessible products, 
                    ensuring the well-being of communities across the globe.
                </p>
            </aside>
        </div>
    );
}

export default Home;
