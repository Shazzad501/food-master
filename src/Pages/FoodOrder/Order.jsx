import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import banner2 from '../../assets/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import FoodCart from '../Shared/FoodCart';

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const [menu] = useMenu()
  const soupItem = menu.filter(item=> item.category === 'soup')
  const saladItem = menu.filter(item=> item.category === 'salad')
  const pizzaItem = menu.filter(item=> item.category === 'pizza')
  const dessertItem = menu.filter(item=> item.category === 'dessert')
  const drinksItem = menu.filter(item=>item.category === 'drinks')

  return (
    <div>
      <Helmet>
        <title>Food Master || Order Food</title>
      </Helmet>
      <Cover img={banner2} headline={'Order Now'} details={'Would You Like to Try a Dish'}/>

        <div className='max-w-7xl mx-auto'>
        <Tabs defaultIndex={tabIndex} onSelect={(index)=> setTabIndex(index)}>
         <TabList>
            <Tab><span className='font-bold text-base'>Salad</span></Tab>
            <Tab><span className='font-bold text-base'>Pizza</span></Tab>
            <Tab><span className='font-bold text-base'>Dessert</span></Tab>
            <Tab><span className='font-bold text-base'>Soup</span></Tab>
            <Tab><span className='font-bold text-base'>Drinks</span></Tab>
          </TabList>

          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {saladItem.map(food=> <FoodCart key={food._id} food={food}></FoodCart>)}
            </div>
          </TabPanel>
          <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {pizzaItem.map(food=><FoodCart key={food._id} food={food}></FoodCart>)}
            </div>
          </TabPanel>
          <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {dessertItem.map(food=> <FoodCart key={food._id} food={food}></FoodCart>)}
            </div> 
          </TabPanel>
          <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {soupItem.map(food=> <FoodCart key={food._id} food={food}></FoodCart>)}
            </div>
          </TabPanel>
          <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {drinksItem.map(food=> <FoodCart key={food._id} food={food}></FoodCart>)}
            </div>
          </TabPanel>
        </Tabs>
        </div>
    </div>
  );
};

export default Order;