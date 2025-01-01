import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { A11y, Autoplay, Navigation,Scrollbar } from 'swiper/modules';
import { BaseURL_IMAGE } from '../../api/config';
import Spinner from '../Utils/Loading/Spinner';



const WorksSwiper = ({data,isLoading}:{data:any,isLoading:boolean}) => {
  const language = localStorage.getItem('language') ;
  
  const [swiperDirection, setSwiperDirection] = useState(language === "ar" ? "rtl" : "ltr");
  const swiperRef = useRef<any>(null);


  return (
    <div className='works_Swiper'>
      <Swiper
        dir={swiperDirection}
        slidesPerView={5}
        spaceBetween={66}
        breakpoints={{
          0: { slidesPerView: 1 },
          400: { slidesPerView: 1 },
          600: { slidesPerView: 3 },
          900: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
          1500: { slidesPerView: 5  },
        }}
        autoplay={true}
        modules={[Navigation,  Scrollbar, A11y, Autoplay]}
        pagination={{ clickable: true }}
        className="mySwiper"
        onSwiper={(swiper:any) => (swiperRef.current = swiper)} // Store swiper instance
      >
        {
        isLoading ? <Spinner/> :
        data?.map((item:any, index:number) => (
          <SwiperSlide key={index}>
            <img src={BaseURL_IMAGE + item?.image} alt="Works" />

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default WorksSwiper;
