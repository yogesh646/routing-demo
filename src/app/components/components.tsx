import React, { useState } from 'react'

const Components = (props:any) => {
    const [count,setCount]=useState(0);

    const {handleclick,values}=props;
    const handleIncrease=()=>{
        setCount(prev=>prev+1);
    }
const handleDecrease=()=>{
  setCount((prev) => Math.max(prev - 1, 0));
}
  return (
    <div>
<div className="flex items-center h-[30px] space-x-4 p-4 bg-gray-100 rounded-lg shadow-md w-[160px]">
  {/* Decrease Button */}
  <button className="w-8   h-5 flex items-center justify-center bg-gray-300 hover:bg-gray-400 text-black font-bold rounded-full transition duration-300" onClick={handleDecrease}>
    -
  </button>

  {/* Number Display */}
  <div className="text-[1rem] font-semibold text-gray-700 w-10 text-center">
    {count}
  </div>

  {/* Increase Button */}
  <button className="w-8   h-5 flex items-center justify-center bg-gray-300 hover:bg-gray-400 text-black font-bold rounded-full transition duration-300" onClick={handleIncrease}>
    +
  </button>
</div>

{/* Cart Add Button */}
<div className="mt-4 justify-center items-center flex">
  <button className="px-6 py-2  bg-[#36c79b] hover:bg-[#2fa884] text-white font-semibold rounded-lg shadow-md  transition duration-300">
    Add to Cart
  </button>
</div>
        
    </div>
  )
}

export default Components;