import React from "react";
import './Avatar.css'
const Avatar = (props) => {
    return(
        <div className="avatar">
            <img src={props.img} alt={props.title} />
        </div>
    )
}

export default Avatar;