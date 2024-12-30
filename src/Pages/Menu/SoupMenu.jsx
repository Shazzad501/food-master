import MenuItem from '../Shared/MenuItem';
import soupImg from '../../assets/soup-bg.jpg'
import Cover from '../Shared/Cover';
import useMenu from '../../hooks/useMenu';
import { Link } from 'react-router-dom';

const SoupMenu = () => {
  const [menu] = useMenu()
  const soupItem = menu.filter(item=> item.category === 'soup')
  return (
    <section className='max-w-7xl mx-auto mb-16'>
      <Cover img={soupImg} headline={'Soup'} details={' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, consequatur.'}/>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {
          soupItem.map((item) => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
     <div className='flex items-center justify-center pt-8'>
     <Link to='/order' className="bg-transparent border-b-4 border-gray-600 hover:text-white hover:bg-yellow-600 px-6 py-2 rounded-md text-sm font-semibold transition">
              Order Your Favorite Food
      </Link>
     </div>
    </section>
  );
};

export default SoupMenu;