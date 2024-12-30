import React from 'react';
import { useLocation } from 'react-router-dom';

const Cover = ({img, headline, details}) => {
  const location = useLocation()
  return (
    <div
        className="hero h-[500px] mb-12"
        style={{
          backgroundImage: `url(${img})`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-neutral-content text-center mx-auto md:w-1/2 lg:w-1/3">
          <div className='bg-black bg-opacity-45 rounded-md py-10 px-5'>
            <h1 className="mb-5 text-5xl font-bold">{headline}</h1>
            <p className="mb-5">
              {details}
            </p>
          </div>
        </div>
    </div>
  );
};

export default Cover;