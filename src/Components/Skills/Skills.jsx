import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation } from 'swiper/modules';

export default function Skills() {
  return (
    <div id='Skills' className="skills">
      <div className="container bg-dark text-white py-5  rounded-5">
      <h3 className="text-center text-white fs-1 fw-bold ">Skills</h3>
      <p className="text-center text-secondary my-3">You Can See My Skills Here </p>

      <Swiper
        // slidesPerView={3}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          }
        }}

        className="swiper"
      >
        <SwiperSlide className='swiper-slide'>
        <div className="skill">
      <div className="progressdiv">
        <svg className="" xmlns="http://www.w3.org/2000/svg" version="1.1" width="150" height="150">
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#3f3fb4" />
              <stop offset="100%" stopColor="#8773ed" />
            </linearGradient>
          </defs>
          <circle className="circle80" cx="50%" cy="50%" r="65" strokeLinecap="round" />
        </svg>
        <span>80%</span>
      </div>
      <h3>BackEnd Development</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
        <div className="skill">
      <div className="progressdiv">
        <svg className="" xmlns="http://www.w3.org/2000/svg" version="1.1" width="150" height="150">
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#3f3fb4" />
              <stop offset="100%" stopColor="#8773ed" />
            </linearGradient>
          </defs>
          <circle className="circle90" cx="50%" cy="50%" r="65" strokeLinecap="round" />
        </svg>
        <span>90%</span>
      </div>
      <h3>BackEnd Development</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
        <div className="skill">
      <div className="progressdiv">
        <svg className="" xmlns="http://www.w3.org/2000/svg" version="1.1" width="150" height="150">
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#3f3fb4" />
              <stop offset="100%" stopColor="#8773ed" />
            </linearGradient>
          </defs>
          <circle className="circle90" cx="50%" cy="50%" r="65" strokeLinecap="round" />
        </svg>
        <span>90%</span>
      </div>
      <h3>BackEnd Development</h3>
    </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
        <div className="skill">
      <div className="progressdiv">
        <svg className="" xmlns="http://www.w3.org/2000/svg" version="1.1" width="150" height="150">
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#3f3fb4" />
              <stop offset="100%" stopColor="#8773ed" />
            </linearGradient>
          </defs>
          <circle className="circle95" cx="50%" cy="50%" r="65" strokeLinecap="round" />
        </svg>
        <span>95%</span>
      </div>
      <h3>BackEnd Development</h3>
    </div>
        </SwiperSlide>
  
      </Swiper>

    </div>
    </div>

      
  );
}
