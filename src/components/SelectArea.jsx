import React from 'react';

const SelectArea = () => {
  return (
    <div>
      <div className='min-h-screen flex flex-col lg:flex-row'>
        {/* Left Column */}
        <div className='w-full lg:w-[50%] bg-gradient-to-br from-blue-50 to-white p-8 relative overflow-hidden'>
          
          <div className=' absolute inset-0'>
            <div className='absolute w-64 h-64 rounded-full bg-blue-100/50 -top-20 -left-20' />
            <div className='absolute w-64 h-64 rounded-full bg-blue-100/50 -bottom-20 -right-20' />


            


          </div>

        </div>

      </div>
      
    </div>
  );
};

export default SelectArea;