import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import classes from 'styled-components';
import { mobile } from '../responsive';

const Container = classes.div`
height: 60vh;
background-color: #fcf5f5;
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const Title = classes.h1`
font-size: 70px;
margin-bottom:20px;
${mobile({textAlign: "center", fontSize: "45px"})}
`;
const Desc = classes.div`
font-size:24px;
font-weight: 300;
margin-bottom:20px;
${mobile({textAlign: "center"})}
`;
const InputContainer = classes.div`
width:50%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid lightgray;
${mobile({width: "80%"})}
`;
const Input = classes.input`
border:none;
flex:8;
padding-left: 20px;

&::placeholder {
    font-family: 'Poppins', sans-serif;
}
`
const Button = classes.button`
flex: 1;
border: none;
background-color: teal;
color: white;
`



const NewsLetter = () => {
    return (
        <Container>
            <Title>NewsLetter</Title>
            <Desc>Get timely updates from your favorite products</Desc>
            <InputContainer>
                <Input placeholder='Your Email' />
                <Button>
                    <SendIcon />
                </Button>
            </InputContainer>
        </Container>
    )
}
export default NewsLetter