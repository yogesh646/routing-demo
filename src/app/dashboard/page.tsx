"use client";
import { rejects } from "assert";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { resolve } from "path";
import React, { useEffect, useState } from "react";
import Components from "../components/components";
import Spinner from "../component/spinner/Spinner";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger"; // Optional variants
}

const Dashboard: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  variant = "primary",
}) => {
  const [datas, setdatas] = useState([]);
  const { push } = useRouter();
  const searchparams = useSearchParams();
  const tableData = [
    { id: 1, name: "John Doe", age: 25, city: "New York" },
    { id: 2, name: "Jane Smith", age: 30, city: "Los Angeles" },
    { id: 3, name: "Bob Johnson", age: 22, city: "Chicago" },
    { id: 1, name: "John Doe", age: 25, city: "New York" },
    { id: 2, name: "Jane Smith", age: 30, city: "Los Angeles" },
    { id: 3, name: "Bob Johnson", age: 22, city: "Chicago" },
  ];
  const [loading, setLoading] = useState(true);
  const [datap, setdatap] = useState([]);
  const send = () => {
    push("/account");
    console.log("Sended.");
  };
  const baseStyles = `px-6  py-2 rounded-md font-medium transition-all duration-300`;
  const variants = {
    primary: `text-[14px] 
  bg-[#36c79b] 
  text-[#ffffff] 
  font-sans 
  right-0
  ml-3 
  h-7 
  rounded 
  flex 
  items-center 
  justify-center 
  transition-all 
  duration-300 
  hover:bg-[#2fa884]`,
    secondary: `bg-gray-200 text-gray-800 hover:bg-gray-300`,
    danger: `bg-red-600 text-white hover:bg-red-700`,
  };
  const disabledStyles = `opacity-50 cursor-not-allowed`;
  useEffect(() => {
    const files = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setdatas(data);
   //   console.log("think", push);
      setLoading(false);
    };
    files();
  }, []);
  const handleSubmit = () => {
    // push('/account');
    console.log("Submitted with value:");
  };
  console.log(datas);
  const handlemove = (id:any) => {
    push(`/productview?id=${id}`);
    //push(`/productview/${id}`);
    console.log("yes",id);
  };
  const increase: any = () => {
    console.log("elegant");
  };
  return (
    <div className="relative p-4 mb-9">
      <h1 className="text-2xl font-bold mb-4">E-Commerce Product Gallery</h1>
      {loading ? (
        <div className="flex h-screen justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div>
          {" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {datas.map((item, index) => {
              return (
                <div
                  className="relative flex flex-col items-center  transition-transform hover:scale-105 overflow-hidden duration-300 border-b-neutral-500 border-2 rounded-xl"
                  key={index}
                >
                  {/* Title attached to the top */}
                  <div className="absolute top-0 w-full text-center bg-white py-2 text-black font-bold">
                    {item?.title}
                  </div>
                  {/* Content */}
                  <div className="flex h-[400px] w-full items-center justify-center">
                    <img
                      src={item?.image}
                      className="h-[280px] max-h-full w-[300px] object-contain animate-resize"
                      alt={item?.title || "Product image"}
                    />
                  </div>

                  {/* Price */}
                  <div className="flex flex-row">
                    <p className="absolute bottom-0 left-0 w-full bg-white py-2 text-[20px] text-center text-black">
                      ${" "}
                      <span className="text-[#ee4b31] font-bold">
                        {item?.price}
                      </span>
                      <button
                        className={`${baseStyles} ${variants[variant]} ${
                          disabled ? disabledStyles : ""
                        }`}
                        onClick={()=>handlemove(item?.id)}
                      >
                        Add to Cart
                      </button>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
