import React from 'react';
import './Card.css';

const Card = (props) => {
  const { title, img, about, content } = props.data;
  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt="Spicey Burger" />
        <div className="heart">&#x2764;</div>
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <div className="tags">
          <div className="tag">HeatWave</div>
          <div className="tag">FlavorFusion</div>
          <div className="tag">ZestBite</div>
        </div>
        <p>
          Spicey Burger Hub serves mouthwatering, fiery burgers that pack a punch of flavor.
          Indulge in the perfect blend of spice and satisfaction at our hub for a truly unforgettable
          <span className="see-more"> See more</span>
        </p>
        <div className="price">$45</div>
        <button className="add-to-cart">Add To Cart</button>
      </div>
    </div>
  );
}

export default Card;
