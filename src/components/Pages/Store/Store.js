import React from "react";
import FoodData from "../../FoodData/FoodData"
import Navbar from "../../Navbar/Navbar";
const Store = () => {
  return (
    <div>
      <Navbar/>
      <h2 className='text-center text-4xl font-bold pt-8'>Pizza Hut</h2>
    <div className="p-24 flex flex-wrap items-center justify-center">
        {
            FoodData.map(food => (
                <div key={food.id} className="flex-shrink-0 m-6 w-full sm:w-1/2 lg:w-1/3 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
        <svg
          className="absolute bottom-0 left-0 mb-8"
          viewBox="0 0 375 283"
          fill="none"
          style={{ transform: "scale(1.5)", opacity: "0.1" }}
        >
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          />
        </svg>
        <div className="relative pt-10 px-10 flex items-center justify-center">
          <div
            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
              opacity: "0.2",
            }}
          ></div>
          <img
            className="relative w-60 h-60 object-cover rounded"
            src={food.img}
            alt=""
          />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
          <span className=" block font-semibold text-xl">{food.title}</span>
          <div className="flex justify-between">
            <span className="block opacity-75 -mb-1">{food.subTitle}</span>
            <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
              ${food.price}
            </span>
          </div>
        </div>
        <div className='hover:cursor-pointe'>
        <button className="bg-blue-500 hover:bg-blue-700 w-full  text-white font-bold py-2 px-4 rounded">
          Order Now
        </button>
        </div>
      </div>
            ))
        }
      
    </div>
    </div>
  );
};

export default Store;
