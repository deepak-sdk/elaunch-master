import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import classes from "styled-components";
import { sliderItems } from "../data";
import { mobile } from '../responsive';

const Container = classes.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
margin-top: 50px;
${mobile({display: "none"})}
`;

const Arrow = classes.div`
width: 50px;
height:50px;
background-color:#fff7f7;
border-radius:50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${(props) => props.direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`;

const Wrapper = classes.div`
height: 100%;
display: flex;
transition: all 1.2s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw)

`;
const Slide = classes.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${(props) => props.bg};
`;

const ImgContainer = classes.div`
flex:1;
height: 100%;

`;

const Image = classes.img`
object-fit: cover;
width: 80%;
height: 100%;
`;

const InfoContainer = classes.div`
flex:1;
padding: 50px;
`;

const Title = classes.h1`
font-size: 70px;
font-weight: 400;
`;

const Desc = classes.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;

const Button = classes.button`
padding: 10px;
font-size:20px;
background-color: transparent;
cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, SetSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      SetSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      SetSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  );
};
export default Slider;
