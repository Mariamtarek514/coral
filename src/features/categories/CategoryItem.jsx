import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <li className="cursor-pointer transition-all duration-300 hover:text-red-500">
      <Link to={item.path} className="focus:outline-none">
        {item.title}
      </Link>
    </li>
  );
};

export default CategoryItem;
