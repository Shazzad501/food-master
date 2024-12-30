import MenuItem from '../Shared/MenuItem';
import pizzaImg from '../../assets/pizza-bg.jpg'
import Cover from '../Shared/Cover';
import useMenu from '../../hooks/useMenu';

const FizzaMenu = () => {
  const [menu] = useMenu()
  const pizzaItem = menu.filter(item=> item.category === 'pizza')
  return (
    <section className='max-w-7xl mx-auto mb-16'>
      <Cover img={pizzaImg} headline={'Pizza'} details={' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, consequatur.'}/>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {
          pizzaItem.map((item) => <MenuItem key={item._id} item={item}></MenuItem>)
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

export default FizzaMenu;