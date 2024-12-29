import React from 'react';
import Banner from './Banner';
import FoodCategory from './FoodCategory';
import PopulerMenu from './PopulerMenu';
import FeaturedItem from './FeaturedItem';
import Testimonial from './Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Food Master || Home</title>
      </Helmet>
      <Banner/>
      <FoodCategory/>
      <PopulerMenu/>
      <FeaturedItem/>
      <Testimonial/>
    </>
  );
};

export default Home;