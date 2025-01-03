import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide4 from '../../assets/slide4.jpg';
import slide5 from '../../assets/slide5.jpg';
import SectionHeader from '../../components/SectionHeader';

const FoodCategory = () => {
  return (
    <div  className='py-16 max-w-7xl mx-auto flex flex-col'>
      <SectionHeader
      subTitle='---From 11.00am to 10.00pm---'
      title='Order Online'
      ></SectionHeader>
      <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className='font-bold text-sm md:text-xl -mt-20 text-white uppercase text-center'>salads</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide2} alt="" />
        <p className='font-bold text-sm md:text-xl -mt-20 text-white uppercase text-center'>pizzas</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} alt="" />
        <p className='font-bold text-sm md:text-xl -mt-20 text-white uppercase text-center'>soups</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} alt="" />
        <p className='font-bold text-sm md:text-xl -mt-20 text-white uppercase text-center'>Desserts</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide5} alt="" />
        <p className='font-bold text-sm md:text-xl -mt-20 text-white uppercase text-center'>salads</p>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default FoodCategory;