import featuredImg from "../../assets/featured.jpg";
import SectionHeader from "../../components/SectionHeader";

const FeaturedItem = () => {
  return (
    <div className="bg-cover bg-center bg-fixed  text-white" style={{ backgroundImage: `url(${featuredImg})` }}>
      <div className="bg-black bg-opacity-50 px-8 py-12">
        <SectionHeader subTitle="---Check it Out---" title="From Our Menu" />
        <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto gap-8">
          {/* Image */}
          <div className="md:w-1/2">
            <img src={featuredImg} alt="Featured" className="rounded-lg shadow-lg" />
          </div>
          {/* Content */}
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <p className="text-sm">March 20, 2025</p>
            <h2 className="text-2xl font-bold">Where Can I Get Some?</h2>
            <p className="text-sm leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate
              tenetur, deserunt dolorum maiores quod nobis voluptas. Ea quia repudiandae ad
              laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="bg-transparent border-b-4 hover:bg-yellow-600 px-6 py-2 rounded-md text-sm font-semibold transition">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
