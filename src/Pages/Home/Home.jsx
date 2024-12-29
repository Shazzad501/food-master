import React from 'react';
import Banner from './Banner';
import FoodCategory from './FoodCategory';
import PopulerMenu from './PopulerMenu';
import FeaturedItem from './FeaturedItem';
import Testimonial from './Testimonial';

const Home = () => {
  return (
    <div>
      <Banner/>
      <FoodCategory/>
      <PopulerMenu/>
      <FeaturedItem/>
      <Testimonial/>
    </div>
  );
};

export default Home;