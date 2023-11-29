import {
  FaSearch,
  FaUser,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "/images/logo.png";
const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className=" flex items-center justify-between pb-3 pt-4 md:py-4">
      <FaSearch className="icon hidden  md:block" />
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="hidden items-center gap-4 text-lg text-Black sm:flex">
        <Link className="flex items-center gap-2">
          <FaUser />
          Account
        </Link>
        <Link className="flex items-center gap-2">
          <FaShoppingBag />
          Shoping
        </Link>
      </div>
      {/* small screen */}
      <div className="sm:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <FaTimes className="icon" />
          ) : (
            <FaBars className="icon " />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
