import CompanyLogos from "../../ui/CompanyLogos";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div className="section_container ">
      {/* logo */}
      <CompanyLogos />
      <div className=" mt-8 flex flex-col items-center gap-4 md:flex-row">
        <p className="inline-flex rounded-sm bg-black p-2 text-center font-semibold uppercase text-white md:-rotate-90 md:p-1.5">
          Explore new and popular styles
        </p>
        <div>
          <Link to="/">
            <img
              src="/images/category/category-1.png"
              alt="category"
              className="scale_img"
            />
          </Link>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-2">
            <Link to="/">
              <img
                src="/images/category/category-2.png"
                alt="category"
                className="scale_img"
              />
            </Link>
            <Link to="/">
              <img
                src="/images/category/category-3.png"
                alt="category"
                className="scale_img"
              />
            </Link>
            <Link to="/">
              <img
                src="/images/category/category-4.png"
                alt="category"
                className="scale_img"
              />
            </Link>
            <Link to="/">
              <img
                src="/images/category/category-5.png"
                alt="category"
                className="scale_img"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
