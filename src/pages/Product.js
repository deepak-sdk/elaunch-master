import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import classes from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile } from "../responsive";

const Container = classes.div`

`;

const Wrapper = classes.div`
padding: 50px;
display: flex;
${mobile({padding: "10px", flexDirection:"column"})}
`;

const ImgContainer = classes.div`
flex:1;
`;

const Image = classes.img`
width:100%;
height:90vh;
object-fit: cover;
${mobile({height:"70vh"})}
`;

const InfoContainer = classes.div`
flex:1;
padding: 0px 50px;
${mobile({padding:"10px"})}
`;

const Title = classes.h1`
font-weight: 200;
`;
const Desc = classes.p`
margin:20px 0px;
`;
const Price = classes.span`
font-weight: 100%;
 font-size: 40px;
`;

const FilterContainer = classes.div`
width:50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
${mobile({width:"100%"})}
`;

const Filter = classes.div`
display: flex;
align-items: center;
`;

const FilterTitle = classes.span`
font-size: 20px;
font-weight: 200;
`;

const FilterColor = classes.div`
width:20px;
height: 20px;
border-radius: 50%;
background-color: ${(props) => props.color};
margin: 0px 5px;
cursor: pointer;
`;

const FilterSize = classes.select`
margin-left: 10px;
padding:5px;
`;

const FilterSizeOption = classes.option``;
const AddContainer = classes.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width:"100%"})}
`;
const AmountContainer = classes.div`
display: flex;
align-itema: center;
font-weight: 700;
`;
const Amount = classes.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;
const Button = classes.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: #f8f4f4;
}
`;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Denim is a kind of heavy cotton material that's used to make jeans.
            ... In some places, people call blue jeans denims. The word comes
            from a French phrase serge de Nîmes, "serge from Nîmes, France."
            "Serge" is a sturdy twill fabric, and Nîmes is a town where it was
            famously made.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle> Color </FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount> 1 </Amount>
              <AddIcon />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};
export default Product;
