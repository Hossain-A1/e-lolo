// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import OfferItem from "@/components/OfferItem";
import {  getProducts } from "@/prisma/controllers";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

const Offeer = ({ products }) => {
  return (
    <div className="offer wrapper section-p">
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-violet-300 uppercase font-semibold text-xl text-center tracking-widest">
          Offer products
        </h2>
        <p className="text-gray-400 text-center">
          This offer is for a limited time only, so don't miss out! Get it now
          and enjoy the great savings. Take advantage of this incredible deal
          today!
        </p>
      </div>

      <div className="slider">
        <Swiper
          autoplay={true}
          loop={true}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
        >
          {products &&
            products.map((product) => (
              <SwiperSlide key={product.id}>
                <OfferItem
                  photo={product.image}
                  alt={product.title}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className="card-wrapper"></div>
    </div>
  );
};

export default Offeer;

export const getServerSideProps = async () => {
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
};