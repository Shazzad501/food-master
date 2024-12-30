import React from 'react';
import Banner from './Banner';
import FoodCategory from './FoodCategory';
import PopulerMenu from './PopulerMenu';
import FeaturedItem from './FeaturedItem';
import Testimonial from './Testimonial';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import chefService from '../../assets/chef-service.jpg'
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Food Master || Home</title>
      </Helmet>
      <Banner/>
      <FoodCategory/>
     <div className='max-w-7xl mx-auto'>
     <Cover img={chefService} headline={'Food Master'} details={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem sapiente nulla doloribus eveniet. Libero explicabo asperiores nostrum.'}/>
     </div>
      <PopulerMenu/>
      <FeaturedItem/>
      <Testimonial/>
    </>
  );
};

export default Home;