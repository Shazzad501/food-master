import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import b1 from "../../assets/01.jpg"
import b2 from "../../assets/02.jpg"
import b3 from "../../assets/03.png"
import b4 from "../../assets/04.jpg"
import b5 from "../../assets/05.png"
import b6 from "../../assets/06.png"
import b7 from "../../assets/07.jpg"

const banners = [
  {
    img: b7,
  },
  {
    img: b1,
  },
  {
    img: b2,
  },
  {
    img: b3,
  },
  {
    img: b4,
  },
  {
    img: b5,
  },
  {
    img: b6,
  },
]

const Banner = () => {
  return (
    <div>
    <Carousel>
       {banners.map((banner, idx)=><div key={idx}>
        <img src={banner.img} alt="bannerimg" />
       </div>)}       
    </Carousel>
    </div>
  );
};

export default Banner;