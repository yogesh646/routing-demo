"use client";
import React, { useEffect, useState } from "react";

function MyComponent() {
  const [items, setItems] = useState([]); // Initial array

 useEffect(() => {
  console.log('initiating');
  
 }, [])
 

  return (
    <div>
     Component page
    </div>
  );
}

export default MyComponent;
