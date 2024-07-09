import React, { useState } from 'react';
import './ProductCard.css';
import Avatar from '../../commonComponents/Avatar';
import Button from '../../commonComponents/Button';

const ProductCard = (props) => {
    const [showContent, setShowContent] = useState(false);
    const { img, title, about, content } = props.data;

    return (
        <div className='product_card'>
            <div className='product_card_details'>
                {showContent ? (
                    <div className='content_list'>
                        {content && content.length > 0 ? (
                            <ul>
                                {content.map((item, index) => (
                                    <li key={index}>{item.name}: {item.weight}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No additional content available.</p>
                        )}
                    </div>
                ) : (
                    <Avatar img={img} title={title}></Avatar>
                )}
            </div>
            <div className='product_card_content'>
                <h1>{title}</h1>
                <p>{about}</p>
                <Button size="large" inverse onClick={() => setShowContent(!showContent)}>
                    {showContent ? "HIDE CONTENT" : "VIEW CONTENT"}
                </Button>
            </div>
        </div>
    );
}

export default ProductCard;
