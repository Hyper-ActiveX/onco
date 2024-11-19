"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const images = [
  {
    url: "/img1.jpg",
    alt: "People in a meeting"
  },
  {
    url: "/img2.jpg",
    alt: "Students studying together"
  },
  {
    url: "/img3.jpg",
    alt: "Group enjoying an event"
  },
  {
    url: "/img4.jpg",
    alt: "Team collaboration"
  },
  {
    url: "/img1.jpg",
    alt: "Professional discussion"
  },
  {
    url: "/img2.jpg",
    alt: "Community gathering"
  }
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 3 ? 0 : prevIndex + 1
      )
    }, 2000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full overflow-hidden bg-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif italic mb-12">Transforming lives.</h1>
        
        <div className="relative">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "w-1/3 flex-shrink-0 px-2 transition-opacity duration-1000",
                  {
                    "opacity-100": index >= currentIndex && index < currentIndex + 3,
                    "opacity-0": index < currentIndex || index >= currentIndex + 3
                  }
                )}
              >
                <Card className="overflow-hidden">
                  <div className="relative aspect-[4/3] bg-gray-200">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-1000 hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-black">
                      {`Image ${index + 1}`}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 text-center">
          Current Index: {currentIndex}
        </div>
      </div>
    </div>
  )
}