import SectionHeader from '../../components/SectionHeader';
import MenuItem from '../Shared/MenuItem';
import useMenu from '../../hooks/useMenu';

const PopulerMenu = () => {
  const [menu] = useMenu()
  const populerItem = menu.filter(item=> item.category === 'popular')
  return (
    <section className='max-w-7xl mx-auto mb-16'>
      <SectionHeader
      subTitle='---Check it Out---'
      title='From Our Menu'
      />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {
          populerItem.map((item) => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
     <div className='flex items-center justify-center pt-8'>
     <button className="bg-transparent border-b-4 border-gray-600 hover:text-white hover:bg-yellow-600 px-6 py-2 rounded-md text-sm font-semibold transition">
              View Full Menu
      </button>
     </div>
    </section>
  );
};

export default PopulerMenu;