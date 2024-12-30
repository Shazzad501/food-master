import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import banner3 from '../../assets/banner3.jpg'
import SectionHeader from '../../components/SectionHeader';
import OfferMenu from './OfferMenu';
import DessertMenu from './DessertMenu';
import FizzaMenu from './FizzaMenu';

const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>Food Master || Menu</title>
      </Helmet>
      {/* header */}
      <Cover img={banner3} headline={'Our Menu'} details={'Would you like to try a dish?'}/>
      {/* menu */}
      <SectionHeader subTitle={`---Don't miss---`} title={"Today's Offer"}/>
      <OfferMenu/>
      <DessertMenu/>
      <FizzaMenu/>
    </div>
  );
};

export default OurMenu;