import React from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const SelectArea = () => {
  return (
    
      <div className='min-h-screen flex flex-col lg:flex-row'>
         {/* Left Column */}
      <div className="w-full lg:w-[50%] bg-gradient-to-br from-blue-50 to-white p-8 relative overflow-hidden">
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
      {/* Right Column */}
      <div className="w-full lg:w-[60%] bg-[#0A2540] p-8 lg:p-12">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-white">Select an area</h2>
            <a href="#" className="text-white/70 text-sm underline">
              Already have an account? Sign In
            </a>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Language & Currency Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Menu as="div" className="relative">
                <Menu.Button className="w-full flex items-center justify-between bg-white rounded-lg px-4 py-2.5">
                  <div className="flex items-center gap-2">
                  <img src="/eng-flag.svg" alt="eng" className="w-5 h-5" />

                    <span>English</span>
                  </div>
                  <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                </Menu.Button>
              </Menu>

              <Menu as="div" className="relative">
                <Menu.Button className="w-full flex items-center justify-between bg-white rounded-lg px-4 py-2.5">
                  <span>USD $</span>
                  <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                </Menu.Button>
              </Menu>
            </div>

            {/* Country Selection */}
            <Menu as="div" className="relative">
              <Menu.Button className="w-full flex items-center justify-between bg-white rounded-lg px-4 py-2.5">
                <div className="flex items-center gap-2">
                <img src="/bd-flag.svg" alt="Bangladesh" className="w-5 h-5" />

                  
                  <span>Bangladesh</span>
                </div>
                <ChevronDownIcon className="w-5 h-5 text-gray-400" />
              </Menu.Button>
            </Menu>

            {/* City Selection */}
            <Menu as="div" className="relative">
              <Menu.Button className="w-full flex items-center justify-between bg-white rounded-lg px-4 py-2.5">
                <span>Dhaka</span>
                <ChevronDownIcon className="w-5 h-5 text-gray-400" />
              </Menu.Button>
            </Menu>

            {/* Terms */}
            <p className="text-xs text-white/60">
              By signing up, I accept the OneSyncID{' '}
              <a href="#" className="text-yellow-500 hover:text-yellow-400">
                Cloud terms of service
              </a>{' '}
              and acknowledge the{' '}
              <a href="#" className="text-yellow-500 hover:text-yellow-400">
                privacy policy
              </a>
              .
            </p>

            {/* Buttons */}
            <div className="space-y-4">
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2.5 rounded-lg transition-colors"
              >
                Continue
              </button>

              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-white/20" />
                <span className="text-white/60">Or</span>
                <div className="h-px flex-1 bg-white/20" />
              </div>

              <button
                type="button"
                className="w-full border border-white/30 hover:border-white/50 text-white py-2.5 rounded-lg transition-colors"
              >
                Allow Location automatically
              </button>
            </div>

            {/* Back Button */}
            <div className="text-center">
              <button
                type="button"
                className="text-white/70 text-sm underline hover:text-white"
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
        
      
    </div>
  );
};

export default SelectArea;