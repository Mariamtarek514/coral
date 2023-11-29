import React from "react";
import Banner from "./Banner";
import Category from "../features/categories/Category";
import Products from "../features/products/Products";
import Collection from "./Collection";
import BestSeller from "../features/products/BestSeller";
import NewsLetters from "./NewsLetters";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Products />
      <Collection />
      <BestSeller />
      <NewsLetters />
    </div>
  );
};

export default Home;
