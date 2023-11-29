import React, { useState } from "react";
import Navbar from "./Navbar";
import CategoryList from "../features/categories/CategoryList";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="absolute left-0 right-0 top-0 mx-auto max-w-screen-2xl px-4 xl:px-28 ">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <hr />
      <CategoryList isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
