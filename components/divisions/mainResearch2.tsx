"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

const services = [
    {
        title: "Service 1",
        image: "/mainService2.png",
        description: "DAVA Oncology is a strategic consulting company that offers numerous products and services customized..."
    },
    {
        title: "Service 2",
        image: "/mainService2.png",
        description: "DAVA Oncology is a strategic consulting company that offers numerous products and services customized..."
    },
    {
        title: "Service 2",
        image: "/mainService2.png",
        description: "DAVA Oncology is a strategic consulting company that offers numerous products and services customized..."
    },
    {
        title: "Service 2",
        image: "/mainService2.png",
        description: "DAVA Oncology is a strategic consulting company that offers numerous products and services customized..."
    },
    {
        title: "Service 3",
        image: "/mainService2.png",
        description: "DAVA Oncology is a strategic consulting company that offers numerous products and services customized..."
    },
    {
        title: "Service 4",
        image: "/mainService2.png",
        description: "DAVA Oncology is a strategic consulting company that offers numerous products and services customized..."
    }
]

export default function MainResearch2() {
    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-center text-4xl font-bold mb-12">
                Explore our main{" "}
                <span className="text-blue-500 font-cursive">research</span>
            </h2>

            <div className="max-w-3xl mx-auto space-y-4">
                {services.map((service, index) => (
                    <Card
                        key={index}
                        className="group relative overflow-hidden bg-white p-6 transition-all duration-500 hover:shadow-lg"
                    >
                        {/* Default State */}
                        <div className="flex items-start gap-20 transition-opacity duration-500 group-hover:opacity-0">
                            <div className="flex items-start w-[30%] m-auto gap-5">
                                <Image
                                    src="/dna.png"
                                    alt="DNA Icon"
                                    width={32}
                                    height={32}
                                    className="mt-1"
                                />

                                <h3 className="text-lg font-semibold pt-[7px] font-cursive">
                                    {service.title}
                                </h3>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mt-1">
                                    {service.description}
                                </p>
                            </div>

                        </div>

                        {/* Hover State */}
                        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                <p className="text-white text-xl font-semibold">
                                    Write text here
                                </p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    )
}