import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const bestSeller = products.filter(
    (product) => product.status === "Best Selers",
  );
  return (
    <div className="section_container ">
      <div className="text-center">
        <h2 className="title">Best sellers</h2>
        <p className="mx-auto capitalize text-Black/75 md:w-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          reprehenderit soluta facilis rem incidunt cum, corrupti quod esse
          aliquam quasi.
        </p>
      </div>
      <div>
        <Swiper
          className="mySwiper my-20"
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductItem product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSeller;
