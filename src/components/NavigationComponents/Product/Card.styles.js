import styled from "styled-components";
import Card from "./Card";
export const CardStyled = styled(Card)`
    
    background: radial-gradient(circle, rgba(34,193,195,0.7972689075630253) 0%, rgba(45,253,88,0.9737394957983193) 100%);
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    overflow: hidden;
    width: 300px;
    text-align: center;
    transition: transform 0.3s ease 200ms;

    &:hover {
      transform: scale(1.1);
    }

    .product-img {
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        border-radius: 15px;    

    }

  .image-container{
    padding: 5px;
  }
 
  .image-container {
    position: relative;
  }
  
  .image-container img {
    width: 100%;
    height: auto;
  }
  
  
  .card-content {
    padding: 20px;
  }
  
  .card-content h2 {
    margin: 10px 0;
    font-size: 20px;
  }
  
  .tags {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 10px;
  }
  
  .tag {
    background: #60aae6;
    color: black;
    border-radius: 20px;
    padding: 5px 10px;
    font-size: 12px;
  }
  
  p {
    font-size: 14px;
    color: #555;
  }
  
  .see-more {
    color: #007aff;
    cursor: pointer;
  }
  
  .price {
    font-size: 24px;
    color: #333;
    margin: 10px 0;
  }
  
  .add-to-cart {
    background-color: #007aff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .add-to-cart:hover {
    background-color: #005bb5;
  }
  

`