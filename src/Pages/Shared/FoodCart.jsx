
const FoodCart = ({food}) => {
  const {image, name, recipe, price} = food || {}
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={image}
          alt={name}
        />
        <span className="absolute top-2 right-2 bg-black text-white text-sm px-2 py-1 rounded">
          ${price.toFixed(2)}
        </span>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h5 className="text-lg font-bold text-gray-800">{name}</h5>
        <p className="text-sm text-gray-600">{recipe}</p>
        <button className="mt-4 px-3 bg-transparent border-b-4 text-black hover:text-white text-sm font-semibold py-2 rounded hover:bg-yellow-600">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default FoodCart;