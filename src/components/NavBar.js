import React from "react";
// import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";
import { mobile } from '../responsive';

const Container = styled.div`
  // height: 100px;
  ${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding: "10px 0px"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  ${mobile({display: "none"})}
`;
const SearchContainer = styled.div`
  border: 0.75px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({marginLeft: "0"})}
`;
const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({width: "50px"})}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  // font-weight: bold;
  font-size:2.6rem;
  ${mobile({fontSize: "24px"})}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  // margin-left: 25px;
  ${mobile({flex: 2, justifyContent: "center"})}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left:25px;
  ${mobile({fontSize: "12px", marginLeft : "10px"})}
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
          EN
          </Language>
            <SearchContainer>
              <Input placeholder="Search"/>
              <SearchIcon style={{color:"gray", fontSize:"1rem" }}/>
            </SearchContainer>
            
        </Left>
        <Center>
          <Logo>eLAUNCH</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
