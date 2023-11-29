const companyLogo = [
  { id: 0, img: "images/company/companyLogo-1.png" },
  { id: 1, img: "images/company/companyLogo-2.png" },
  { id: 2, img: "images/company/companyLogo-3.png" },
  { id: 3, img: "images/company/companyLogo-4.png" },
  { id: 4, img: "images/company/companyLogo-5.png" },
];
const CompanyLogos = () => {
  return (
    <ul className=" flex flex-wrap items-center justify-around gap-4 py-5 ">
      {companyLogo.map((logo) => (
        <li key={logo.id}>
          <img src={logo.img} alt="company logo" />
        </li>
      ))}
    </ul>
  );
};

export default CompanyLogos;
