import React from 'react';
import NavBar from '../components/NavBar'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories';
import Products from '../components/Products';
import Slider from "../components/Slider";
import NewsLetter from '../components/NewsLetter';
import ProductList from "./ProductList";
import Footer from '../components/Footer';
// import Register from './Register';


const Home = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      {/* <Register/>
      <Login/> */}
      <Slider />
      <ProductList/>
      <Categories/>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
};
export default Home;
