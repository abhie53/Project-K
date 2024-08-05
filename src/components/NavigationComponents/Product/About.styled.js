import styled from "styled-components";
import About from "../About";
export const AboutStyled = styled(About)`
   text-align: center;
   font-size: large;
   
   .our-story-container{
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-between;
    margin:20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
    border-radius: 10px;
   }

    .our-team-container {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-between;
    margin:20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
    border-radius: 10px;
   }

   .innovation-container{
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-between;
    margin:20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
    border-radius: 10px;
   }

img{
    width: 400px;
    height: 350px;
}

img:hover{
    cursor: pointer;
}
`