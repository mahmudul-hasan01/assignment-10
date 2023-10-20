import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import image from '../../assets/CarCollection/4627_18863_ford-mustang-fastback-eleanor-1.jpg'
import image1 from '../../assets/CarCollection/78b81311c5e73ddeac24ee35a7b17326.jpg'
import image2 from '../../assets/CarCollection/Toyota-Vitz-10471-800x480.webp'
import image3 from '../../assets/CarCollection/bmw-m-dex-stage-index-01.jpg.asset.1693838088859.jpg'
import image4 from '../../assets/CarCollection/new_car_1692424347746_1692424348006.webp'
import image5 from '../../assets/CarCollection/Tesla Model S Plaid 001_yujihf.webp'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CarCollection = () => {
    return (
        <div className=' md:w-[700px] h-[400px] mx-auto mt-10'>
            <div className='flex justify-center py-2'>
            <h1 className='py-3 px-4 my-5 text-3xl border-2 shadow-2xl font-semibold rounded-md'>Car Collection</h1>
            </div>
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

export default CarCollection;