import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import bath from '../../assets/bath.jpg';
export default function App() {
  return (
    <>
      <Swiper
        // style={{
        //   '--swiper-navigation-size': '20px',
        // }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full w-full rounded-2xl"
      >
        <SwiperSlide>
          <img src={bath} alt="bath" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bath} alt="bath" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bath} alt="bath" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bath} alt="bath" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bath} alt="bath" />
        </SwiperSlide>{' '}
        <SwiperSlide>
          <img src={bath} alt="bath" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
