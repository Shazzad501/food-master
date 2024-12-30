import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import SectionHeader from "../../components/SectionHeader";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import { SiComma } from "react-icons/si";
import axios from "axios";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
   axios.get('http://localhost:5000/review')
   .then(res => setReviews(res.data))
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-16">
      {/* Section Header */}
      <SectionHeader subTitle="---What Our Clients Say---" title="Testimonials" />

      {/* Swiper Section */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 2000 }}
          className="mt-8"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center text-center px-8">
                {/* Star Ratings */}
                <Rating
                  initialRating={review.rating}
                  emptySymbol={<FaRegStar className="text-yellow-400 text-xl" />}
                  fullSymbol={<FaStar className="text-yellow-400 text-xl" />}
                  readonly
                />
                {/* Quote Icon */}
                <div className="text-5xl my-4 text-black flex gap-0 rotate-180">
                  <span className="-mr-5">
                    <SiComma />
                  </span>
                  <SiComma />
                </div>
                {/* Review Details */}
                <p className="text-gray-600 italic">{review.details}</p>
                {/* Reviewer Name */}
                <h4 className="mt-4 font-bold text-lg text-yellow-500">{review.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Inline Style for Swiper Navigation Buttons */}
        <style jsx>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: gray !important; /* Set the color to gray */
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            color: darkgray !important; /* Darker gray on hover */
          }
        `}</style>
      </div>
    </div>
  );
};

export default Testimonial;
