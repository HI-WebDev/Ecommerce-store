import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import image from '../assets/images/parfum.jpg';
import image2 from '../assets/images/ps5.jpg';
import image3 from '../assets/images/psp.png';
import image5 from '../assets/images/pc.jpg';
import image6 from '../assets/images/ip15.webp';
import Arrivals from "./Arrivals"
import Browse from "./Browse"
// import FlashSales from "./FlashSales"
import OurProducts from "./OurProducts"
import Services from "./Services"
// import SwiperImage from "./SwiperImage"
import ThisMonth from "./ThisMonth"


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay } from 'swiper/modules';
// import { Pagination } from 'swiper/modules';

import { useState } from 'react'


const Home = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);

  const handleClick1 = () => {
    setActive1(!active1)
  }
  const handleClick2 = () => {
    setActive2(!active2)
  }

  return (
    <>
      <div className="home mt-">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="aside pt-5 d-flex flex-column">
                <span className="mb-3 fw-bold d-flex align-items-center position-relative" onClick={handleClick1}>
                  Woman’s Fashion
                  {active1 ? <FontAwesomeIcon className='angle position-absolute ms-2' icon={faAngleRight} />
                    : <FontAwesomeIcon className='angle position-absolute ' icon={faAngleDown} />}
                </span>
                <span className="mb-3 fw-bold d-flex align-items-center position-relative" onClick={handleClick2}>
                  Men’s Fashion
                  {active2 ? <FontAwesomeIcon className='angle position-absolute ms-2' icon={faAngleRight} />
                    : <FontAwesomeIcon className='angle position-absolute ' icon={faAngleDown} />}
                </span>
                <span className="mb-3 fw-bold">Electronics</span>
                <span className="mb-3 fw-bold">Home & Lifestyle</span>
                <span className="mb-3 fw-bold">Medicine</span>
                <span className="mb-3 fw-bold">Sports & Outdoor</span>
                <span className="mb-3 fw-bold">Baby’s & Toys</span>
                <span className="mb-3 fw-bold">Groceries & Pets</span>
                <span className=" fw-bold">Health & Beauty</span>
              </div>
            </div>
            <div className="col-9">
              <div className="image pt-5">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{ delay: 2500, disableOnInteraction: false, }}
                  pagination={{ clickable: true, }}
                  modules={[Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide style={{ height: "344px" }}>
                    <img className='img-fluid' src={image} alt="hero" />
                  </SwiperSlide>
                  <SwiperSlide style={{ height: "344px" }}>
                    <img className='img-fluid' src={image2} alt="hero" />
                  </SwiperSlide>
                  <SwiperSlide style={{ height: "344px" }}>
                    <img className='img-fluid' src={image3} alt="hero" />
                  </SwiperSlide>
                  <SwiperSlide style={{ height: "344px" }}>
                    <img className='img-fluid' src={image5} alt="hero" />
                  </SwiperSlide>
                  <SwiperSlide style={{ height: "344px"}}>
                    <img className='img-fluid' src={image6} alt="hero" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <FlashSales /> */}
      <Browse />
      <ThisMonth />
      {/* <SwiperImage /> */}
      <OurProducts />
      <Arrivals />
      <Services />
    </>

  )
}

export default Home
