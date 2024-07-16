import styled from "styled-components"

import Button from './Button';

export const ButtonStyled = styled(Button)`
 
 button{
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid #ff0055;
    border-radius: 4px;
    background: #ff0055;
    color: white;
    cursor: pointer;
    margin-right: 1rem;
    text-decoration: none;
    display: inline-block;
 }

 p{
    color: green;
    background-color: black;
 }
`