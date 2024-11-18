'use client';
import React, { useState, useEffect } from "react";

const images = [
  "https://th.bing.com/th/id/OIP.5iHfX1545zrKWsQXD28CQQHaHa?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.5iHfX1545zrKWsQXD28CQQHaHa?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.5iHfX1545zrKWsQXD28CQQHaHa?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.5iHfX1545zrKWsQXD28CQQHaHa?rs=1&pid=ImgDetMain",
];

export default function Caroselss() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px]">
       <div className="flex transition-transform duration-700 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full h-[500px] flex-shrink-0"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </div> 
    </div>
  );
}
