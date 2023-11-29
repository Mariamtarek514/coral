import { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        const selectProduct = data.filter((items) => items.id == id);
        setProduct(selectProduct[0]);
      } catch (err) {
        console.log("Error Fetching data: ", err);
      }
    }
    getProduct();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const { title, category, price, image, status } = product;
  return (
    <div className="section_container mt-28">
      <div className="m-auto max-w-7xl p-3">
        <div className="space-x-2">
          <Link to="/" className="text-gray-600">
            Home /
          </Link>
          <Link to="/shop" className="font-bold text-black">
            Shop
          </Link>
        </div>
        <div className="mt-6 sm:mt-10">
          <div className="grid h-max grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <img src={image} alt={title} className="w-full" />
            </div>
            {/* product details */}
            <div>
              <h1 className="title text-left ">{title}</h1>
              <p className="mt-3 text-justify text-base leading-6 text-gray-600 sm:mt-4 sm:text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                fugiat necessitatibus a ipsam aut praesentium saepe possimus
                laudantium, iste quo corrupti quae similique quod molestiae
                iusto reprehenderit rem. Deserunt, molestias. Lorem ipsum dolor
                sit amet consectetur adipisicing elit.
              </p>
              <span className="my-2 flex items-center gap-1 text-xl text-yellow-400 sm:my-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <p className=" text-xl font-semibold text-red-500 sm:text-2xl">
                ${price}
              </p>
              <div className="mt-4">
                <div className="flex w-full flex-col gap-2 text-left">
                  <label htmlFor="price" className="font-semibold">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    defaultValue={1}
                    required
                    className="m-0 mb-1 w-full max-w-full rounded-md border border-gray-300 px-4 py-3 text-sm font-semibold outline-none focus:border-red-500 md:px-4 md:py-3"
                  />
                </div>
                <div className="my-4 w-full text-left">
                  <button className="flex w-full items-center justify-center gap-2 rounded-md border border-red-500 bg-red-500 px-4 py-3 font-bold text-white shadow-slate-600 duration-300 ease-in-out hover:bg-white hover:text-red-500 md:px-6 lg:m-0">
                    <span>Confirmed Order</span>
                    <FaArrowAltCircleRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
