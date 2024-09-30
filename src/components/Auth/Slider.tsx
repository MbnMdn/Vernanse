import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import bath from '../../assets/bath.jpg';
import pic2 from '../../assets/pic2.jpg';
import pic3 from '../../assets/pic3.jpg';
import pic4 from '../../assets/pic4.jpg';
import pic5 from '../../assets/pic5.jpg';
import pic7 from '../../assets/pic7.jpg';
import pic8 from '../../assets/pic8.jpg';
export default function App() {
  return (
    <>
      <Swiper
        // style={{
        //   '--swiper-navigation-size': '20px',
        // }}
        speed={2000}
        spaceBetween={5}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
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
          <img src={pic2} alt="bath" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic3} alt="bath" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic4} alt="bath" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic5} alt="bath" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic7} alt="bath" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic8} alt="bath" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
