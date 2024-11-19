import Image from 'next/image'
import Link from 'next/link'
import Group from '../../public/Group.png'

export default function Component() {
    return (
        <section className="relative min-h-[500px] w-full overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="relative z-10 mx-auto grid min-h-[500px] w-full items-center px-4 py-12 md:grid-cols-2 lg:px-8 flex justify-between">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Empowering in
                            <span className="block font-serif text-blue-500">Oncology with Knowledge</span>
                        </h1>
                        <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Trusted partner in oncology, empowering oncologists with essential knowledge and resources
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Link
                            href="#contact"
                            className="inline-flex h-10 items-center justify-center rounded-md bg-[#0B2A4A] px-8 text-sm font-medium text-white transition-colors hover:bg-[#0B2A4A]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0B2A4A]"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div className="relative hidden md:block">
                    <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 transform">
                        <div className="absolute inset-0 rounded-full bg-white/80 blur-3xl" />
                        <div className="absolute inset-0">
                            <Image
                                src={Group}
                                alt="DAVA Oncology Logo"
                                width={400}
                                height={400}
                                className="h-auto w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}