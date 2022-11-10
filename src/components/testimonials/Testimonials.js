import React from "react";
import { Data } from "./Data";
import "./testimonials.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">My Clients Say</h2>
      <span className="section__subtitle">Testimonial</span>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map((item, id) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img
                src={item.image}
                alt={item.title}
                className="testimonial__img"
              />
              <h3 className="testimonial__name">{item.title}</h3>
              <p className="testimonial__description">{item.description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
