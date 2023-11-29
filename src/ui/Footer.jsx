import React from "react";
import Logo from "/images/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const footerLinks = {
  catlog: [
    { id: 0, title: "Necklaces" },
    { id: 1, title: "Hoodies" },
    { id: 2, title: "Jewelry Box" },
    { id: 3, title: "T-Shirt" },
    { id: 4, title: "Jacket" },
  ],
  aboutUs: [
    { id: 0, title: "Our Producers" },
    { id: 1, title: "Sitemap" },
    { id: 2, title: "FAQ" },
    { id: 3, title: "About Us" },
    { id: 3, title: "Terms & Conditions" },
  ],
  customerServices: [
    { id: 0, title: "Contact Us" },
    { id: 1, title: "Track Your Order" },
    { id: 2, title: "Product Care & Repair" },
    { id: 3, title: "Book an Appointment" },
    { id: 4, title: "Shipping & Returns" },
  ],
};
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="section_container flex flex-col flex-wrap items-start justify-between gap-4 sm:flex-row">
        <div className="sm:w-[400px]">
          <img src={Logo} alt="logo" />
          <p className="mt-5 text-Black/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <ul className="mt-5 flex items-center gap-5 ">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>

        <div className="sm:min-w-[200px]">
          <h3 className="mb-5 font-bold uppercase tracking-wider text-Black">
            catalog
          </h3>
          <ul>
            {footerLinks.catlog.map((item) => (
              <li key={item.id} className="mb-2 text-Black/90">
                <Link to="/"> {item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:min-w-[200px]">
          <h3 className="mb-5 font-bold uppercase tracking-wider text-Black">
            about us
          </h3>
          <ul>
            {footerLinks.aboutUs.map((item) => (
              <li key={item.id} className="mb-2 text-Black/90">
                <Link to="/"> {item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:min-w-[200px]">
          <h3 className="mb-5 font-bold uppercase tracking-wider text-Black">
            CUSTOMER SERVICES
          </h3>
          <ul>
            {footerLinks.customerServices.map((item) => (
              <li key={item.id} className="mb-2 text-Black/90">
                <Link to="/"> {item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-Black">
        <p className="items-center py-3 text-center text-white">
          © {currentYear} Coral, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
