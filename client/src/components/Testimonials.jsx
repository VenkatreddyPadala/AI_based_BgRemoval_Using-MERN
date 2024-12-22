import React from 'react';
import { testimonialsData } from '../assets/assets';

const Testimonials = () => {
  return (
    <div>
      {/* Title */}
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-5'>
        Customer Testimonials
      </h1>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {testimonialsData.map((item, index) => {
          return (
            <div 
              key={index} 
              className="p-4 shadow-lg rounded-lg max-w-sm bg-white transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              {/* Quotation Marks */}
              <p className="text-4xl font-bold text-gray-400">”</p>
              {/* Testimonial Text */}
              <p className="text-gray-700 mt-4 italic">{item.text}</p>
              {/* Author Details */}
              <div className="flex items-center mt-6">
                <img
                  src={item.image}
                  alt={item.author}
                  className="w-16 h-16 rounded-full border-2 border-gray-300"
                />
                <div className="ml-4">
                  <p className="font-bold text-lg text-gray-800">{item.author}</p>
                  <p className="text-sm text-gray-500">{item.jobTitle}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
