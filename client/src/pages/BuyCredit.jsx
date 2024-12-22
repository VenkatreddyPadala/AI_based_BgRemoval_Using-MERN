import React from 'react';
import { assets, plans } from '../assets/assets';

const BuyCredit = () => {
  return (
    <div className="min-h-[65vh] text-center pt-14 mb-10 bg-gray-50">
      {/* Section Title */}
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6 hover:bg-gray-300 transition-colors">
        Our Plans
      </button>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
        Choose Plan Based On Your Requirement
      </h1>

      {/* Add spacing between title and cards */}
      <div className="mt-10 flex flex-wrap justify-center gap-8 px-4">
        {plans.map((item, index) => (
          <div
            key={index}
            className="w-64 bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-transform"
          >
            {/* Plan Icon */}
            <img
              src={assets.logo_icon}
              width={40}
              alt={`${item.id} Icon`}
              className="mx-auto mb-4"
            />
            {/* Plan Name */}
            <p className="text-lg font-bold text-gray-800">{item.id}</p>
            {/* Plan Description */}
            <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
            {/* Plan Price and Credits */}
            <p className="text-gray-700 text-base mb-6">
              <span className="text-xl font-semibold text-green-600">${item.price}</span>/ 
              {item.credits} credits
            </p>
            {/* Buy Now Button */}
            <button className="bg-violet-600 text-white px-6 py-2 rounded-full hover:bg-violet-700 transition-colors">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
