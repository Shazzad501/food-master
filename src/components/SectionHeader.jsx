import React from 'react';

const SectionHeader = ({subTitle, title}) => {
  return (
    <div className='pb-10 flex justify-center items-center flex-col gap-3 text-center'>
        <p className='font-semibold text-base italic text-[#D99904]'>{subTitle}</p>
        <hr className='w-full md:w-[350px]'/>
        <h2 className='font-bold text-4xl'>{title}</h2>
      </div>
  );
};

export default SectionHeader;