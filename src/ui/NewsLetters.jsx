import { Link } from "react-router-dom";
const instagramImg = [
  { id: 0, img: "/images/instagram/img-1.png" },
  { id: 1, img: "/images/instagram/img-2.png" },
  { id: 2, img: "/images/instagram/img-3.png" },
  { id: 3, img: "/images/instagram/img-4.png" },
  { id: 4, img: "/images/instagram/img-5.png" },
  { id: 5, img: "/images/instagram/img-6.png" },
];
const NewsLetters = () => {
  return (
    <div className="bg-[#1e2832] bg-opacity-5 px-4 py-16 xl:px-28">
      <h2 className="title mb-8">Follow products and discounts on Instagram</h2>
      <div className="mb-20 flex flex-wrap items-center justify-center gap-4">
        {instagramImg.map((item) => (
          <Link key={item.id}>
            <img src={item.img} alt="instagram image" />
          </Link>
        ))}
      </div>
      <h2 className="title">Or subscribe to the newsletter</h2>
      <form className="mx-auto space-x-4 text-center md:w-1/2">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email address..."
          className="mb-5 h-8 w-full border-b-2 border-Black bg-transparent pl-2 outline-none placeholder:text-black/50 md:w-2/3"
        />
        <input
          type="submit"
          value="Submit"
          className="h-8 border-b-2 border-Black bg-transparent px-3 font-normal uppercase text-Black"
        />
      </form>
    </div>
  );
};

export default NewsLetters;
