import styled from "styled-components";
import Button from "./Button";


export const ButtonStyled = styled(Button)`
 
 .button {
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

.button:focus {
  outline: none;
}

.button:hover,
.button:active {
  background: #ff4382;
  border-color: #ff4382;
}

.button--small {
  font-size: 0.8rem;
}

.button--big {
  font-size: 1.5rem;
}

.button--inverse {
  background: transparent;
  color: #ff0055;
}

.button--inverse:hover,
.button--inverse:active {
  color: white;
  background: #ff0055;
}

.button--customStyled {
 ${(props) => (
    props.customStyled
  )}
}

.button--unstyled:hover{
  background: none;
  text-decoration: underline;
}
`