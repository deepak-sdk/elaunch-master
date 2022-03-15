import styled from "styled-components";
import Announcement from "../components/Announcement";
import NavBar from "../components/NavBar";
import Products from "../components/Products";
import Newsletter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({alignItems: "baseline"})}
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({width: "0px 20px", display: "flex", flexDirection:"column"})}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({marginRight: "0px"})}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  // height: 35px;
  ${mobile({margin: "10px 0px"})}
`;
const Option = styled.option`
  margin: 10px 0;
`;

const ProductList = () => {
  return (
    <Container>
      {/* <Announcement /> */}
      {/* <NavBar /> */}
      <Title>Fashion Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Magenta</Option>
            <Option>Purple</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      {/* <Products /> */}
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </Container>
  );
};

export default ProductList;
