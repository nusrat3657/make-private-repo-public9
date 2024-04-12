
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import banner1 from '../../assets/forest.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';
import 'animate.css';

const Banner = () => {
    
    return (
        <div className='mb-10 my-7'>
            <p className='text-xl font-semibold text-center mx-auto md:w-[380px] animate__animated animate__bounceInDown'>If you want to buy or rent our lands, then please visit our website.</p>
            <Swiper
            className='lg:mt-7 my-5 mt-20 '
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img src={banner1} alt=""  className='lg:h-[600px] w-full rounded-3xl' /></SwiperSlide>
            <SwiperSlide><img src={banner3} alt="" className='lg:h-[600px] w-full rounded-3xl' /></SwiperSlide>
            <SwiperSlide><img src={banner2} alt="" className='lg:h-[600px] w-full rounded-3xl' /></SwiperSlide>
        </Swiper>
        </div>
    );
};

export default Banner;