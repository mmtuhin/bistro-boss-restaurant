import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
        <SectionTitle
        heading={'Order Online'}
        subHeading={'From 11:00am to 10.00pm'}
        ></SectionTitle>
        <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-16"
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
        <h1 className="text-3xl uppercase text-center -mt-16 text-white font-semibold">Salad</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <h1 className="text-3xl uppercase text-center -mt-16 text-white font-semibold">Pizza</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h1 className="text-3xl uppercase text-center -mt-16 text-white font-semibold">Soup</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h1 className="text-3xl uppercase text-center -mt-16 text-white font-semibold">Cake</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
        <h1 className="text-3xl uppercase text-center -mt-16 text-white font-semibold">Salad</h1>
      </SwiperSlide>
    </Swiper>
    </section>
  );
};

export default Category;
