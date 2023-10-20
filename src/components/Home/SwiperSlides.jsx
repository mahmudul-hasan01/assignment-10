import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import image from '../../assets/CarAds/2017-05-16-2.webp'
import image1 from '../../assets/CarAds/screen-shot-2017-06-12-at-14638-am_RIYOL0n.png'
import image2 from '../../assets/CarAds/maxresdefault.jpg'
import image3 from '../../assets/CarAds/mercedes-benz-ads-that-should-have-gone-viral-80782_1.jpg'
import image4 from '../../assets/CarAds/f17e6033051899.56a232e4c0d3e.jpg'
import image5 from '../../assets/CarAds/afaqs_2020-06_1ecc1431-add7-427f-b996-448a3191887b_02_Image____JustCantWait.webp'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperSlides = () => {
  return (
    <div className=' md:w-[600px] h-[400px] mx-auto'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img className='w-[100%] h-[300px]' src={image} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[100%] h-[300px]' src={image1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[100%] h-[300px]' src={image2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[100%] h-[300px]' src={image3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[100%] h-[300px]' src={image4} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[100%] h-[300px]' src={image5} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlides;