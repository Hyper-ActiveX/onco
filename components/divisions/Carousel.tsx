"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

const slides = [
  {
    gif: "/gif1.gif",
    title: "Commitment in making a difference in Oncology",
    description: "We are dedicated to making a meaningful impact in the rapidly evolving field of oncology.",
    color: "bg-blue-500",
    url: "/commitment"
  },
  {
    gif: "/gif2.gif",
    title: "Expertise Across Key Therapy Areas",
    description: "Our specialists bring deep expertise in oncology, understanding the complexities of cancer care and...",
    color: "bg-emerald-800",
    url: "/expertise"
  },
  {
    gif: "/gif3.gif",
    title: "Technology-Enabled Solutions",
    description: "We leverage advanced technology to ensure our solutions stay ahead, meeting the needs of oncology care...",
    color: "bg-indigo-800",
    url: "/technology"
  },
  // {
  //   gif: "/gif1.gif",
  //   title: "Advanced Research Methods",
  //   description: "Utilizing cutting-edge research methodologies to advance cancer treatment options...",
  //   color: "bg-blue-500",
  //   url: "/research"
  // },
  // {
  //   gif: "/gif2.gif",
  //   title: "Patient-Centered Approach",
  //   description: "Focusing on individualized care strategies that put patients first in cancer treatment...",
  //   color: "bg-emerald-800",
  //   url: "/patients"
  // },
  // {
  //   gif: "/gif3.gif",
  //   title: "Innovative Clinical Trials",
  //   description: "Leading the way in clinical research with innovative trial designs and methodologies...",
  //   color: "bg-indigo-800",
  //   url: "/trials"
  // }
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 3 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => {
      resetTimeout()
    }
  }, [currentIndex])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 3 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 3 : prevIndex - 1
    )
  }

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-center text-4xl font-bold mb-12">
        latest in{" "}
        <span className="text-blue-500 font-cursive font-caveat">Oncology</span>
      </h2>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-1/3 flex-shrink-0 px-2"
            >
              <Card className="overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={slide.gif}
                    alt={slide.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={`${slide.color} p-6 text-white`}>
                  <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-sm opacity-90 mb-4">{slide.description}</p>
                  <Link
                    href={slide.url}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <ArrowRight className="w-6 h-6 text-white" />
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}