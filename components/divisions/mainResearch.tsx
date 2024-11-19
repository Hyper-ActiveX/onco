"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const researchAreas = [
  {
    title: "Gastrointestinal Malignancies",
    image: "/lake.png",
    description: "DAVA Oncology is a strategic consulting company that offers numerous products and services customized..."
  },
  {
    title: "Thoracic Malignancies",
    image: "/lake.png",
    description: "DAVA Oncology is a strategic consulting company that offers numerous products and services customized..."
  },
  {
    title: "Hematologic Malignancies",
    image: "/lake.png",
    description: "DAVA Oncology is a strategic consulting company that offers numerous products and services customized..."
  },
  {
    title: "Genitourinary Malignancies",
    image: "/lake.png",
    description: "DAVA Oncology is a strategic consulting company that offers numerous products and services customized..."
  },
  {
    title: "Breast Cancer",
    image: "/lake.png",
    description: "DAVA Oncology is a strategic consulting company that offers numerous products and services customized..."
  },
  {
    title: "Lung Cancer",
    image: "/lake.png",
    description: "DAVA Oncology is a strategic consulting company that offers numerous products and services customized..."
  }
]

export default function MainResearch() {
  return (
    <section className="container mx-auto px-4 py-16 bg-gray-50">
      <h2 className="text-center text-4xl font-bold mb-12">
        Explore our main{" "}
        <span className="text-blue-500 font-cursive">research</span>
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-[980px] mx-auto">
        {researchAreas.map((area, index) => (
          <Card 
            key={index}
            className="group relative overflow-hidden bg-white p-6 min-h-[300px] transition-all duration-500 hover:shadow-lg"
          >
            {/* Default State */}
            <div className="absolute inset-0 flex flex-col items-start p-6 transition-opacity duration-500 group-hover:opacity-0">
              <Image
                src="/dna.png"
                alt="DNA Icon"
                width={50}
                height={50}
                className="mb-4"
              />
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-gray-900">
                  Commitment to
                </h3>
                <p className="text-blue-500 text-lg font-caveat">
                  {area.title}
                </p>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>

            {/* Hover State */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-center p-6 w-full">
                <h3 className="text-white text-xl font-bold mb-2 mx-auto">
                  Name of the Service
                </h3>
                {/* <p className="text-blue-400 text-xl font-cursive mb-4">
                  {area.title}
                </p>
                <p className="text-white/90 text-sm">
                  {area.description}
                </p> */}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button 
          variant="default" 
          size="lg"
          className="bg-blue-900 hover:bg-blue-800 text-white px-8"
        >
          Learn More
        </Button>
      </div>
    </section>
  )
}