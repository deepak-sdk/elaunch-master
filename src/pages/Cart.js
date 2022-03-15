import React from 'react'
import Navbar from '../components/NavBar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import styled from "styled-components";
import { Add, Remove } from '@material-ui/icons';
import { mobile } from './../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
padding: 20px;
${mobile({padding: "10px"})}
`;
const Title = styled.h1`
font-weight : 300;
text-align: center;
`;
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding:20px;
`;
const TopBotton = styled.button`
padding:10px;
font-weight: 600;
cursor: pointer;
border: ${props => props.type === "filled" && "none"};
background-color: ${props => props.type === "filled" ? "black" : "transparent"};
color: ${props => props.type === "filled" && "white"}
`;

const TopTexts = styled.div`
${mobile({display: "none"})}
`;
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0 10px;
`;
const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column"})}
`;

const Info = styled.div`
flex: 3;
`;
const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
heigth: 50vh;
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column"})}
`;
const ProductDetails = styled.div`
flex:2;
display: flex;
`;
const PriceDetails = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
${mobile({flexDirection: "row", justifyContent: "space-between", alignItems: "baseline"})}
`;
const Image = styled.img`
width: 250px;
`;
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color}
`;
const ProductSize = styled.span``;
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 10px;
`;
const ProductAmount = styled.div`
font-size: 24px;
margin : 5px;
${mobile({margin: "5px 15px"})}
`;
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200; 
${mobile({marginBottom: "20px"})}
`;
const Hr = styled.hr``;
const SummaryTitle = styled.h1`
font-weight: 300
`;
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type === "total" && "500"}
font-size: ${props => props.type === "total" && "24px"}
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
border: none;
`;

const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopBotton>CONTINUE SHOPPING</TopBotton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your WishList(0)</TopText>
          </TopTexts>
          <TopBotton type="filled">CHECKOUT NOW</TopBotton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://global-uploads.webflow.com/5d556af3fe21d65f602dca94/5ef09efad65c3532055e6045_Order%20%23538940%20_%20ws%40greatsbrand_0001_2.jpg" />
                <Details>
                  <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                  <ProductId><b>ID:</b> 5489751254</ProductId>
                  <ProductColor color="black" />
                  <ProductSize><b>Size:</b> 37.5</ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://render.fineartamerica.com/images/rendered/default/t-shirt/33/5/images/artworkimages/medium/1/3-product-photography-raahul-deepak-s.jpg?targetx=0&targety=0&imagewidth=440&imageheight=246&modelwidth=440&modelheight=590" />
                <Details>
                  <ProductName><b>Product:</b> MEEMEE T-SHIRT</ProductName>
                  <ProductId><b>ID:</b> 5485541234</ProductId>
                  <ProductColor color="gray" />
                  <ProductSize><b>Size:</b> M</ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 8</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -8</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}
export default Cart;
