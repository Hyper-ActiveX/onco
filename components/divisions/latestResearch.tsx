import React from "react";
// import Rectangle1 from "../../public/Rectangle1.png"
// import Rectangle2 from "../../public/Rectangle2.png"
// import Rectangle3 from "../../public/Rectangle3.png"
// import Rectangle4 from "../../public/Rectangle4.png"
import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function LatestResearch(){
    return(
        <section className="container mx-auto px-4 py-12">
        <h2 className="text-center text-4xl font-bold mb-12">
          Check out our{" "}
          <span className="text-blue-500 font-cursive font-caveat">latest research</span>{" "}
          in Oncology
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured Article */}
          <Card className="overflow-hidden group">
            <div className="relative h-[700px] overflow-hidden">
              <Image
                src="/Rectangle1.png"
                alt="Emerging Trends in Cancer Research"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Emerging Trends in Targeted Cancer Therapies
                </h3>
                <p className="text-sm opacity-90">
                  by Dr. Sarah Patel - July 15, 2024
                </p>
              </div>
            </div>
          </Card>
  
          {/* Right Side Articles */}
          <div className="flex flex-col gap-6">
            {[
              {
                image: "/Rectangle2.png",
                title: "Understanding Immunotherapy: A New Era in Oncology",
                author: "Dr. Sarah Patel",
                date: "July 15, 2024",
              },
              {
                image: "/Rectangle3.png",
                title: "The Role of Genetics in Personalized Cancer Treatment",
                author: "Dr. Sarah Patel",
                date: "July 15, 2024",
              },
              {
                image: "/Rectangle4.png",
                title: "Advances in AI-Driven Cancer Diagnostics",
                author: "Dr. Sarah Patel",
                date: "July 15, 2024",
              },
            ].map((article, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative h-[215px] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 p-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{article.title}</h3>
                    <p className="text-xs opacity-90">
                      by {article.author} - {article.date}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
}