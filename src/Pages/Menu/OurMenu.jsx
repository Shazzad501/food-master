import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import banner3 from '../../assets/banner3.jpg'

const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>Food Master || Menu</title>
      </Helmet>
      
      <Cover img={banner3} headline={'Our Menu'} details={'Would you like to try a dish?'}/>
    </div>
  );
};

export default OurMenu;