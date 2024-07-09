import React from "react";

const Input = (props) => {
    const { type, id, placeholder, name, style, rows, cols } = props;
    if (props.type) {
        return (
            <div>
                <input type={type} id={id} placeholder={placeholder} style={style}/>
            </div>
        )
    }
    return (
        <textarea name={name} id={id} placeholder={placeholder} cols={cols || 30} rows={rows || 4}></textarea>
    )
}


export default Input;