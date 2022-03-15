import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import classes from "styled-components";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailIcon from "@mui/icons-material/Mail";
import { mobile } from "../responsive";

const Container = classes.div`
display: flex;
${mobile({flexDirection: "column"})}
`;

const Left = classes.div`
flex:1;
display: flex;
flex-direction: column;
padding:20px;
`;

const Logo = classes.h1``;

const Desc = classes.p`
margin: 20px 0;
`;

const SocialContainer = classes.div`
display: flex;

`;
const SocialIcon = classes.div`
width:40px;
height:40px;
border-radius: 50%;
color: white;
background-color: #${(props) => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right:20px;
`;

const Center = classes.div`
flex:1;
padding: 20px;
${mobile({display: "none"})}
`;

const Title = classes.h3`
margin-bottom:30px;
`;

const List = classes.ul`
margin: 0;
padding: 0;
list-style:none;
display:flex;
flex-wrap: wrap;
`;

const ListItem = classes.li`
width:50%;
margin-bottom: 10px;
`;

const Right = classes.div`
flex:1;
padding: 20px;
${mobile({backgroundColor: "#fff8f8"})}
`;

const ContactItem = classes.div`
margin-bottom:20px;
display: flex;
align-items: center;
`;

const PaymentContainer = classes.div`
display: flex;
flex-direction: row;
gap:5px;
`;

const Payment = classes.img`
width: 12%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>eLaunch</Logo>
        <Desc>
          Fashion and lifestyle is an ultra-competitive and fast moving world.
          There are so many different brands that lifestyle and fashion
          copywriting needs to really encapsulate the appeal that their brand
          represents.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: "10px" }} />
          622 Dixie Path, South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <PhoneIphoneIcon style={{ marginRight: "10px" }} />
          +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailIcon style={{ marginRight: "10px" }} />
          contact@elaunch.dev
        </ContactItem>
        <PaymentContainer>
          <Payment src="https://aux2.iconspalace.com/uploads/paypal-payment-icon-256.png" />
          <Payment src="https://pngimg.com/uploads/mastercard/mastercard_PNG25.png" />
          <Payment src="https://vtlogo.com/wp-content/uploads/2020/10/rupay-vector-logo-small.png" />
        </PaymentContainer>
      </Right>
    </Container>
  );
};
export default Footer;
