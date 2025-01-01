import loginImg from '../../assets/authentication2.png'
import bgImg from '../../assets/authentication.png'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';

import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from 'react';

const Login = () => {
  const [disable, setDisable] = useState(true)
  const captchaRef = useRef(null)

  useEffect(()=>{
    loadCaptchaEnginge(6);
  }, [])

  const handleLogin = (e) =>{
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const loginData = {email, password}
    console.log(loginData)
  }

  const handleValidateCaptcha = () =>{
    const user_captcha_value = captchaRef.current.value;
    if(validateCaptcha(user_captcha_value)){
      setDisable(false)
    }
    else{
      setDisable(true)
    }
  }
  return (
    <div
    className="flex items-center justify-center h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${bgImg})` }}
  >
    <div
    style={{ backgroundImage: `url(${bgImg})` }} 
    className="w-full max-w-4xl shadow-md rounded-md flex flex-col md:flex-row overflow-hidden">
      {/* Left Section */}
      <div className="md:w-1/2 flex justify-center items-center p-10">
        <img src={loginImg} alt="Illustration" className="w-full h-auto" />
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">Email</label>
            <input
              type="email"
              name='email'
              placeholder="Type here"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">Password</label>
            <input
              type="password"
              name='password'
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2"><LoadCanvasTemplate/></label>
            <div className="flex items-center">
              <input
                type="text"
                name='captcha'
                ref={captchaRef}
                placeholder="Type the captcha"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
              type='button'
              onClick={handleValidateCaptcha} 
              className='btn btn-sm ml-2'>Validate</button>
            </div>
          </div>

          <button
            disabled={disable}
            type="submit"
            className={`${disable ? 'bg-gray-600 text-gray-500' :'bg-orange-400 text-white hover:bg-orange-500 transition'} w-full py-2 rounded-md`}
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-500">
          New here?{" "}
          <a href="#" className="text-orange-400 hover:underline">
            Create a New Account
          </a>
        </p>

        <div className="flex justify-center mt-4 space-x-4">
          <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
            <FaFacebook/>
          </button>
          <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
            <FaGoogle/>
          </button>
          <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
            <FaGithub/>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;