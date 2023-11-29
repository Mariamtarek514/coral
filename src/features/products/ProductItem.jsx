import { Link } from "react-router-dom";
const ProductItem = ({ product }) => {
  return (
    <div key={product.id}>
      <Link to={`shop/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="mx-auto w-full transition-all duration-300 hover:scale-105"
        />
      </Link>
      <div className="mt-4 px-4">
        <h4 className="text-base font-semibold">{product.title}</h4>
        <div className="flex justify-between">
          <p className="text-black/50">{product.category}</p>
          <p className="font-semibold">{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
