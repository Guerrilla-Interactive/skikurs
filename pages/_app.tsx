import "../styles/index.css";

import React, { useRef, useState } from "react";

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import 'swiper/css/bundle';


import SwiperCore, {
  Pagination
} from 'swiper';

SwiperCore.use([Pagination]);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
