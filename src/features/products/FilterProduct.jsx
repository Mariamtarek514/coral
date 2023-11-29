import { NavLink } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import { useEffect, useState } from "react";
import Cards from "../../ui/Cards";
const FilterProduct = () => {
  const [product, setProduct] = useState([]);
  const [filterItem, setFilterItem] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetch("products.json");
        const data = await response.json();
        setProduct(data);
        setFilterItem(data);
      } catch (err) {
        console.log("Error Fetching data: ", err);
      }
    }
    getProduct();
  }, []);
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? product
        : product.filter((item) => item.category === category);
    setFilterItem(filtered);
    setSelectedCategory(category);
  };
  const showAll = () => {
    setFilterItem(product);
    setSelectedCategory("all");
  };
  const handleSort = (options) => {
    setSortOption(options);
    let sortedItem = [...filterItem];
    switch (options) {
      case "A-Z":
        sortedItem.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItem.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-high":
        sortedItem.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sortedItem.sort((a, b) => b.price - a.price);
        break;
      default:
        sortedItem = [...product];
        break;
    }
    setFilterItem(sortedItem);
  };

  return (
    <div>
      <div className="mb-8 flex flex-col flex-wrap items-center space-y-3 md:flex-row md:justify-between">
        <ul className="flex flex-row flex-wrap justify-start gap-4 capitalize md:items-center md:gap-8">
          <li
            className={`cursor-pointer ${
              selectedCategory === "all" ? "text-red-500" : "text-black"
            }`}
            onClick={showAll}
          >
            all products
          </li>
          <li
            className={`cursor-pointer ${
              selectedCategory === "Dress" ? "text-red-500" : "text-black"
            }`}
            onClick={() => filterItems("Dress")}
          >
            Clothing
          </li>
          <li
            className={`cursor-pointer ${
              selectedCategory === "Hoodies" ? "text-red-500" : "text-black"
            }`}
            onClick={() => filterItems("Hoodies")}
          >
            hoodies
          </li>
          <li
            className={`cursor-pointer ${
              selectedCategory === "Bag" ? "text-red-500" : "text-black"
            }`}
            onClick={() => filterItems("Bag")}
          >
            Bag
          </li>
        </ul>
        <div className="mb-4 flex justify-end rounded-sm">
          <button className=" bg-Black p-2 ">
            <FaFilter className="h-4 w-4 text-white" />
          </button>
          <select
            className="rounded-sm bg-Black px-2 py-1 text-white"
            onChange={(e) => handleSort(e.target.value)}
            value={sortOption}
          >
            <option value="default">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="low-high">Low to High</option>
            <option value="high-low"> High to Low</option>
          </select>
        </div>
      </div>
      <Cards filterProduct={filterItem} />
    </div>
  );
};

export default FilterProduct;
