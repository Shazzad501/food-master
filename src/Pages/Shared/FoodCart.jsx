import { replace, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCart = ({food}) => {
  const {image, name, recipe, price} = food || {}
  const {user} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const axiosSecure = useAxiosSecure()
  const [, refetch] = useCart()


  // handle add to cart
  const handleAddToCart = (item) =>{
    if(user && user.email){
      const menuItem ={
        menuId: item._id,
        userEmail: user.email,
        name: item.name,
        recipe: item.recipe,
        price: item.price,
        image: item.image
      }

      axiosSecure.post('/carts', menuItem)
      .then((res)=>{
        if(res.data.insertedId){
          toast.success("Item add to cart")
          // refetch data to show in cart icon
          refetch();
        }
      })
      .catch((err)=>{
        toast.error(`${err.message}`)
      })
    }
    else{
      Swal.fire({
        title: "You are not login 🤷🤷",
        text: "If you login than add to cart this food 😎😎",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login', {state:{from: location}})
        }
      });
    }
  }
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
       <div className="flex items-center justify-center">
        <button onClick={()=>handleAddToCart(food)} className="mt-4 px-3 bg-transparent border-b-4 text-black hover:text-white text-sm font-semibold py-2 rounded hover:bg-yellow-600">
            ADD TO CART
          </button>
       </div>
      </div>
    </div>
  );
};

export default FoodCart;