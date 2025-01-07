import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionHeader from "../../components/SectionHeader";
import useMenu from "../../hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";

// img bb hosting key
const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const ManageItem = () => {
  const [menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  // modal opening and selected item state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // React Hook Form setup
  const { register, handleSubmit, reset } = useForm();

  // Open modal with selected item
  const handleUpdateItem = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    reset(item);
  };

  // Handle form submit
  const onSubmit = (data) => {
    const updatedItem = {
      name: data.name,
      category: data.category,
      price: parseFloat(data.price),
      recipe: data.recipe,
      image: selectedItem?.image
    };

    // Check if the user uploaded a new image
    if (data.image && data.image[0]) {
      // Prepare file for upload
      const imgFile = new FormData();
      imgFile.append("image", data.image[0]);

      // Upload the new image
      axiosPublic
        .post(img_hosting_api, imgFile, {
          headers: { "content-type": "multipart/form-data" },
        })
        .then((res) => {
          if (res.data.success) {
            updatedItem.image = res.data.data.display_url;
          } else {
            toast.error("Image upload failed. Retaining the existing image.");
          }
          updateDatabase(updatedItem);
        })
        .catch((err) => {
          toast.error(`Image upload error: ${err.message}. Retaining the existing image.`);
          updateDatabase(updatedItem);
        });
    } else {
      // Use the existing image if no new image is uploaded
      updateDatabase(updatedItem);
    }
  };

  // Function to update the database
  const updateDatabase = (updatedItem) => {
    axiosSecure
      .patch(`/menu/${selectedItem._id}`, updatedItem)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          reset();
          setIsModalOpen(false);
          refetch();
          toast.success(`${selectedItem.name} updated successfully!`);
        }
      })
      .catch((err) => toast.error(`Update failed: ${err.message}`));
  };

  // Handle delete item
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?😯",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/menu/${item._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", `${item.name} has been deleted.`, "success");
            }
          })
          .catch((err) => toast.error(err.message));
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Food Master || Manage Items</title>
      </Helmet>
      <SectionHeader subTitle={"---Hurry Up---"} title={"Manage Items"} />

      {/* Data table */}
      <div className="overflow-x-auto rounded-xl mt-3">
        <table className="table">
          <thead className="bg-orange-400 text-white font-bold text-base">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    onClick={() => handleUpdateItem(item)}
                    className="btn bg-orange-600 text-base font-bold btn-sm 
                    hover:bg-orange-500 text-white">
                    <FaEdit />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="btn btn-sm text-red-600 bg-white font-bold text-base"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Item</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">Recipe Name</label>
                <input
                  {...register("name")}
                  className="input input-bordered"
                  placeholder="Recipe name"
                />
              </div>
              <div className="form-control mt-3">
                <label className="label">Category</label>
                <select
                  {...register("category")}
                  className="select select-bordered"
                  defaultValue={selectedItem?.category}
                >
                  <option value="offered">Offered</option>
                  <option value="drinks">Drinks</option>
                  <option value="populer">Popular</option>
                  <option value="dessert">Dessert</option>
                  <option value="pizza">Pizza</option>
                  <option value="salad">Salad</option>
                  <option value="soup">Soup</option>
                </select>
              </div>
              <div className="form-control mt-3">
                <label className="label">Price</label>
                <input
                  {...register("price")}
                  type="number"
                  step='0.01'
                  className="input input-bordered"
                  placeholder="Price"
                />
              </div>
              <div className="form-control mt-3">
                <label className="label">Recipe Details</label>
                <textarea
                  {...register("recipe")}
                  className="textarea textarea-bordered"
                  placeholder="Recipe details"
                ></textarea>
              </div>

              {/* File Upload */}
              <div className="mb-4">
                <label className="block text-black mb-2 text-base font-bold">
                  Current Image
                </label>
                {selectedItem?.image && (
                  <img
                    src={selectedItem.image}
                    alt="Current"
                    className="h-12 w-12 rounded-full border mb-2"
                  />
                )}
                <label className="block text-black mb-2 text-base font-bold">
                  Choose New File (Optional)
                </label>
                <input
                  type="file"
                  {...register("image")}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 border-gray-300"
                />
              </div>
              <div className="modal-action">
                <button
                  type="submit"
                  className="btn font-bold text-base text-white hover:text-black bg-orange-600 hover:bg-transparent hover:border hover:border-orange-500"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn border border-orange-500 hover:bg-transparent hover:border-green-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageItem;
