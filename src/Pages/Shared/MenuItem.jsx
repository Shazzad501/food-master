import React from 'react';

const MenuItem = ({item}) => {
  const {name, recipe, image, price} = item || {};
  return (
    <div className='flex gap-3'>
      <img 
      src={image} 
      alt="recipeImg" 
      className='w-20 h-20 rounded-full rounded-tl-none'
      />
      <div>
        <h3 className='font-bold text-xl'>{name}--- --- --- ---</h3>
        <p className='text-sm text-gray-500'>{recipe}</p>
      </div>
      <p className='font-bold text-sm text-[#D99904]'>${price}</p>
    </div>
  );
};

export default MenuItem;