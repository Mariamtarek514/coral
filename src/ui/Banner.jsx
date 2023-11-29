import { FaShoppingBag } from "react-icons/fa";
import banner from "/images/banner.png";
const Banner = () => {
  return (
    <div className="mx-auto bg-primaryBG px-4 py-12 xl:px-28  ">
      <div className="flex flex-col items-center justify-between gap-14 py-20 md:flex-row-reverse lg:py-28">
        <div className="flex justify-end md:w-1/2">
          <img src={banner} alt="banner" />
        </div>
        <div className="md:w-1/2">
          <h1 className="mb-5 text-5xl font-light">Collections</h1>
          <p className="mb-7 text-xl xl:w-[450px]">
            You can explore ans shop many differnt collection from various
            barands here.
          </p>
          <button className="transition-color flex items-center gap-2 rounded-sm bg-Black px-6 py-2 font-semibold text-white duration-300 hover:bg-red-500 focus:outline-none">
            <FaShoppingBag />
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
