import React from "react";
import CategoryItem from "./CategoryItem";
const category = [
  { id: 0, title: "Jewelry & Accessories", path: "/" },
  { id: 1, title: "Clothing & Shoes", path: "/" },
  { id: 2, title: "Home & Living", path: "/" },
  { id: 3, title: "Wedding & Party", path: "/" },
  { id: 4, title: "Toys & Entertainment", path: "/" },
  { id: 5, title: "Art & Collectibles", path: "/" },
  { id: 6, title: "Craft Supplies & Tools", path: "/" },
];
const CategoryList = ({ isMenuOpen }) => {
  return (
    <ul
      className={`${
        isMenuOpen ? "" : "hidden"
      }  items-center justify-between pt-4 
      ${
        isMenuOpen
          ? " space-y-3 rounded bg-Black px-4 py-2 text-white "
          : " bg-none text-Black"
      }
  
      lg:flex`}
    >
      {category.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default CategoryList;
