// Images
import { Link } from "react-router-dom";

// Images
import heroBg from "../../assets/images/bmw.png";

// React icons
import { SlSpeedometer } from "react-icons/sl";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination } from 'swiper/modules';
import { swiperData } from "../../db/swiperDb";
const Hero = () => {
  return (
    <section className="heroSection">
      <div className="row">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {
          swiperData.map(item=><SwiperSlide key={item.id}>  <div className="hero">
            <div className="heroImg">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="heroInfo">
              <p className="slideInfo">{item.info}</p>
              <h2 className="slideTitle">{item.name}</h2>
              <p className="slideDetails">
                {item.model} <span>{item.series}</span>
              </p>
              <p className="price">
                ${item.price} <span>/</span> <span>{item.period}</span>
              </p>
              <p className="priceDetails">
                $0 first payment paid by Bmw up to $225.
              </p>
              <p className="priceDetails">Taxes, title and fees extra. </p>
              <div className="btns">
                <Link className="primaryBtn" to="#">
                  LEARN MORE
                </Link>
                <Link className="secondaryBtn" to="#">
                  <SlSpeedometer /> TEST DRIVE
                </Link>
              </div>
            </div>
          </div>
          </SwiperSlide>)
        }
        </Swiper>
      
      </div>
    </section>
  );
};

export default Hero;
