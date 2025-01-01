import React, { useContext } from "react";
import signupImg from "../../assets/authentication2.png";
import bgImg from "../../assets/authentication.png";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const {newUserSet, setUser, upDateProfile, setLoading, createUserWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate()

  // redirect path
  const redirectPath = location?.state?.from?.pathname || '/';

  const handleSignUp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;

    newUserSet(email, password)
    .then(res => {
      setUser(res.user);
      navigate(redirectPath)
      e.target.reset();
      toast.success(`Sign Up success!!`)

// user profile updation
    upDateProfile({displayName: name, photoURL: photoURL})
    .then(()=>{
      setLoading(false)
    })
    .catch((err)=>{
      toast.error(`${err.message}`)
    })

    })
    .catch(err => toast.error(`${err.message}`))

  };

  // handle google login function
  const handleGoogleLogin=()=>{
    createUserWithGoogle()
    .then(res=>{
      setUser(res.user);
      toast.success("Login Success!!")
      navigate(redirectPath)
    })
    .catch(err=> toast.error(`${err.message}`))
  }

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div 
      style={{ backgroundImage: `url(${bgImg})` }}
      className="w-full max-w-4xl bg-white shadow-md rounded-md flex flex-col md:flex-row overflow-hidden">
        {/* Left Section */}
        <div className="md:w-1/2 flex justify-center items-center p-10">
          <img src={signupImg} alt="Illustration" className="w-full h-auto" />
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                placeholder="Enter photo URL"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Type here"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center mt-4 text-sm text-gray-500">
            Already registered?{" "}
            <Link to='/login' className="text-orange-400 hover:underline">
              Go to log in
            </Link>
          </p>

          <div className="text-center mt-6 text-gray-500">Or sign up with</div>

          <div className="flex justify-center mt-4 space-x-4">
            <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
              <FaFacebook />
            </button>
            <button onClick={handleGoogleLogin} className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
              <FaGoogle />
            </button>
            <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
