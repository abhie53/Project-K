import React from "react";
import Button from "../commonComponents/Button";
import img from './../images/contact.jpg'
import Avatar from "../commonComponents/Avatar";
const ProductItem = (props) => {
    return(
        <div>
              <h1>{props.data.title}</h1>
              <div>
                <Avatar img={img} title={props.title}/>
                <Button inverse>show content</Button>
              </div>
        </div>
    )
}


export default ProductItem;