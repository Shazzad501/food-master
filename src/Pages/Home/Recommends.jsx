import React from 'react';
import SectionHeader from '../../components/SectionHeader';
import useMenu from '../../hooks/useMenu';
import FoodCart from '../Shared/FoodCart';

const Recommends = () => {
  const [menu] = useMenu()
  return (
    <div className='max-w-7xl mx-auto mb-16'>
      <SectionHeader subTitle={'---Should Try---'} title={'Chef Recommends'}></SectionHeader>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {menu.slice(1,4).map(food=> <FoodCart key={food._id} food={food}/>)}
      </div>
    </div>
  );
};

export default Recommends;