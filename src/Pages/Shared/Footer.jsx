import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className=" grid grid-cols-1 md:grid-cols-2">
        <div className='bg-[#111827] w-full p-10 text-white'>
          <img src={logo} alt="logoImg" className='w-16 h-16'/>
          <p>
            Food Master Ltd.
            <br />
            Providing reliable food since 1992
          </p>
        </div>
        <div className='bg-[#1F2937] text-white p-10'>
          <h6 className="footer-title">Social</h6>
          <div className="flex gap-4">
            <Link 
            to='https://www.facebook.com/' 
            target='_blank'
            className='font-bold text-2xl'
            ><FaFacebook/></Link>
            <Link 
            to='https://www.instagram.com/' 
            target='_blank'
            className='font-bold text-2xl'
            ><FaInstagram/></Link>
            <Link 
            to='https://x.com/home' 
            target='_blank'
            className='font-bold text-2xl'
            ><FaTwitter/></Link>
          </div>
        </div>
      </div>
      <div className="footer footer-center bg-black text-white text-base font-bold p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Shazzad Maruf</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;