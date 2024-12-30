import React, { useEffect, useState } from 'react';
import MenuItem from '../Shared/MenuItem';
import saladImg from '../../assets/salad-bg.jpg'
import Cover from '../Shared/Cover';

const SaladMenu = () => {
  const [menu, setMenu] = useState([])

  useEffect(()=>{
    fetch('menu.json')
    .then(res=> res.json())
    .then(data=> {
      const saladItem = data.filter(item=> item.category === 'salad')
      setMenu(saladItem)
    })
  }, [])
  return (
    <section className='max-w-7xl mx-auto mb-16'>
      <Cover img={saladImg} headline={'Salad'} details={' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, consequatur.'}/>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {
          menu.slice(0,8).map((item) => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
     <div className='flex items-center justify-center pt-8'>
     <button className="bg-transparent border-b-4 border-gray-600 hover:text-white hover:bg-yellow-600 px-6 py-2 rounded-md text-sm font-semibold transition">
              Order Your Favorite Food
      </button>
     </div>
    </section>
  );
};

export default SaladMenu;