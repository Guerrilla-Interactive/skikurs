import HappeningPreview from "../elements/happening/happening-preview";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";



// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

export default function MoreHappenings({ happenings }) {
  return (
    <section className="">
      <Swiper slidesPerView={3} spaceBetween={60} pagination={{
        "clickable": true
      }} className="overflow-visible mySwiper">


        <SwiperSlide className="ml-[-26vw]"></SwiperSlide>
        {happenings.map((happening) => (

          <SwiperSlide>
            <HappeningPreview
              key={happening.slug}
              title={happening.title}
              coverImage={happening.coverImage}
              slug={happening.slug}
              excerpt={happening.excerpt}
            />
          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
}
