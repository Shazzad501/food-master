import React from 'react';
import Banner from './Banner';
import FoodCategory from './FoodCategory';
import PopulerMenu from './PopulerMenu';

const Home = () => {
  return (
    <div>
      <Banner/>
      <FoodCategory/>
      <PopulerMenu/>
    </div>
  );
};

export default Home;