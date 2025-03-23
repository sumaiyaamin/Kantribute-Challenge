import React from 'react';

const SelectArea = () => {
  return (
    
      <div className='min-h-screen flex flex-col lg:flex-row'>
         {/* Left Column */}
      <div className="w-full lg:w-[40%] bg-gradient-to-br from-blue-50 to-white p-8 relative overflow-hidden">
        {/* Circular Effects */}
        <div className="absolute inset-0">
          <div className="absolute w-64 h-64 rounded-full bg-blue-100/50 -top-20 -left-20" />
          <div className="absolute w-64 h-64 rounded-full bg-blue-100/50 bottom-40 -right-20" />
        </div>

        <div className="relative h-full flex flex-col">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-2">
              An App for Reading the Right News
            </h1>
          </div>

          
          <div className="flex-grow flex items-center justify-center">
            <div className="relative">
              
              <div className="w-64 h-64 bg-blue-100 rounded-lg mx-auto relative">
                
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg">
                  <div className="w-32 h-16 flex flex-col gap-1">
                    <div className="h-2 w-20 bg-blue-200 rounded" />
                    <div className="h-2 w-24 bg-blue-200 rounded" />
                    <div className="h-2 w-16 bg-blue-200 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              from <span className="text-blue-600 font-medium">Through</span>
            </p>
          </div>
        </div>
      </div>
        
      
    </div>
  );
};

export default SelectArea;