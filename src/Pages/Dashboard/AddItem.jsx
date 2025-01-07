import { Helmet } from "react-helmet-async";
import SectionHeader from "../../components/SectionHeader";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`
const AddItem = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    // img upload on imgbb and get an url
    const imgFile = {image: data.image[0]};
    axiosPublic.post(img_hosting_api, imgFile, {
      headers:{
        'content-type': 'multipart/form-data'
      }
    })
    .then(res=>{
      if(res.data.success){
        // now post data into the db
        const foodItem = {
          name: data.name,
          category: data.category,
          price: data.price,
          recipe: data.recipe,
          image: res.data.data.display_url        
        }

        axiosSecure.post('/menu', foodItem)
        .then(res=>{
          if(res.data.insertedId){
            reset();
            toast.success('Item add success')
          }
        })
        .catch(err=> toast.error(`${err.message}`))
      }
    })

  };

  return (
    <div>
      <Helmet>
        <title>Food Master || Add Item</title>
      </Helmet>
      <SectionHeader
        subTitle={`---What's New?---`}
        title={`Add An Item`}
      ></SectionHeader>

      <div className="w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full bg-white shadow-md rounded-lg p-6"
        >
          {/* Recipe Name */}
          <div className="mb-4">
            <label className="block text-black mb-2 text-base font-bold">Recipe Name</label>
            <input
              type="text"
              placeholder="Recipe name"
              {...register("name", { required: "Recipe name is required" })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.recipeName
                  ? "border-red-500 focus:ring-red-400"
                  : "focus:ring-blue-400"
              }`}
            />
            {errors.recipeName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.recipeName.message}
              </p>
            )}
          </div>

          <div className="flex gap-5 flex-col md:flex-row">
            {/* Category */}
            <div className="mb-4 md:w-1/2">
              <label className="block text-black mb-2 font-bold text-base">Category</label>
              <select
                {...register("category", { required: "Category is required" })}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.category
                    ? "border-red-500 focus:ring-red-400"
                    : "focus:ring-blue-400"
                }`}
              >
                <option value="">Select Category</option>
                <option value="offered">Offered</option>
                <option value="drinks">Drinks</option>
                <option value="populer">Populer</option>
                <option value="dessert">Dessert</option>
                <option value="pizza">Pizza</option>
                <option value="salad">Salad</option>
                <option value="soup">Soup</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* Price */}
            <div className="mb-4 md:w-1/2">
              <label className="block text-black mb-2 font-bold text-base">Price</label>
              <input
                type="number"
                step="0.01"
                placeholder="Price"
                {...register("price", {
                  required: "Price is required",
                  valueAsNumber: true,
                })}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.price
                    ? "border-red-500 focus:ring-red-400"
                    : "focus:ring-blue-400"
                }`}
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.price.message}
                </p>
              )}
            </div>
          </div>

          {/* Recipe Details */}
          <div className="mb-4">
            <label className="block text-black mb-2 text-base font-bold">Recipe Details</label>
            <textarea
              placeholder="Recipe details"
              {...register("recipe", { required: "Recipe details are required" })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.details
                  ? "border-red-500 focus:ring-red-400"
                  : "focus:ring-blue-400"
              }`}
            ></textarea>
            {errors.details && (
              <p className="text-red-500 text-sm mt-1">
                {errors.details.message}
              </p>
            )}
          </div>

          {/* File Upload */}
          <div className="mb-4">
            <label className="block text-black mb-2 text-base font-bold">Choose File</label>
            <input
              type="file"
              {...register("image", { required: "File is required" })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                errors.file ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.file && (
              <p className="text-red-500 text-sm mt-1">
                {errors.file.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-orange-600 flex items-center justify-center gap-2 text-white py-2 px-4 rounded-md hover:bg-transparent hover:text-black hover:border hover:border-orange-600 transition"
          >
            <FaUtensils /> Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
