"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Components from "../components/components";

const page = () => {
  //const {id}=props;
  let filtered;
  const searchparams = useSearchParams();
  const id = searchparams.get("id");
  const [productView, setProductView] = useState([]);
  const [origin, setOrigin] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const files = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProductView(data);
      setLoading(false);
    };
    files();
  }, []);

  return (
    <div className="h-[1000px] ">
      page ID:{id}
      <div className="flex h-[800px] flex-col w-[600px] ml-10 mt-6">
        {productView
          .filter((item, index) => item?.id == id)
          .map((item, index)=>{
            return (
              <div
                className="relative flex flex-col items-center justify-center    border-b-neutral-500 border-2 rounded-xl"
                key={index}
              >
                <div className="absolute top-0 w-full text-center text-[18px] bg-white py-2 text-black font-bold">
                  {item?.title}
                </div>
                <div className="flex h-[550px] w-full items-center justify-center">
                  <img
                    src={item?.image}
                    className="h-[400px] max-h-full w-[500px] object-contain animate-resize"
                    alt={item?.title || "Product image"}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="flex bottom-0 left-0 w-full bg-white py-2  text-right mr-6 text-black">
                    ${" "}
                    <span className="text-[#ee4b31] text-[30px] font-bold">
                      {item?.price}
                    </span>
                    </p>
                    {/* <br/> */}
                    <div className="w-[550px] text-left flex ml-0">
                    <span className="text-[#070707] text-[14px] font-bold">
                      {item?.description}
                    </span>
                    </div>
                  
                 <div className="flex items-center justify-center mt-4">
                 <Components />
                 </div>
                </div>
                <div className="flex w-full text-right  mt-4 mb-4">
                <span className="flex ml-4 text-[#1c1818] font-bold ">
                    Item Ratings : {item?.rating?.rate}
                    </span>
                    
                    <span className="absolute  font-bold text-right mr-6 right-0">
                      Item Count:<b className="text-red-600">{item?.rating?.count}</b>
                    </span>
                  </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default page;
