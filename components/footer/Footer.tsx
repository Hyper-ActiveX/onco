import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
    return (
        <footer className="w-full px-2">
            {/* Newsletter Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <h2 className="text-3xl font-bold">
                        Get all the{" "}
                        <span className="text-[#4082E6] font-caveat">latest news</span>
                    </h2>
                    <div className="flex w-full max-w-md flex-col gap-4 sm:flex-col">
                        <Input
                            type="email"
                            placeholder="Email Address"
                            className="flex-1 bg-[#F8F9FC] py-3"
                        />
                        <Button className="bg-[#14387F] text-white hover:bg-[#14387F]/90 py-6">
                            Join Our Newsletter
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="bg-[#14387F] text-white rounded-[30px]">
                <div className="container mx-auto px-4 py-16">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {/* Company Info */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">DAVA ONCOLOGY</h3>
                            <p className="text-sm text-gray-300 w-[300px]">
                                Our commitment is to enhance oncology patient care by supporting our life science partners at every stage, addressing challenges, and facilitating successful cancer drug development.
                            </p>
                            <div className="flex gap-4">
                                <Link href="#" className="text-white hover:text-gray-300">
                                    <Facebook className="h-6 w-6" />
                                </Link>
                                <Link href="#" className="text-white hover:text-gray-300">
                                    <Youtube className="h-6 w-6" />
                                </Link>
                                <Link href="#" className="text-white hover:text-gray-300">
                                    <Instagram className="h-6 w-6" />
                                </Link>
                                <Link href="#" className="text-white hover:text-gray-300">
                                    <Linkedin className="h-6 w-6" />
                                </Link>
                            </div>

                            <div className="h-[20px]"></div>

                            <div className="space-y-2">
                                <p className="text-sm">2700 W Plano PKWY, Plano, TX 75075</p>
                                <div className="space-y-1">
                                    <p className="text-sm">OMlops@davaonc.com</p>
                                    <p className="text-sm">davabp@davaonc.com</p>
                                </div>
                                <p className="text-sm">214-451-4500</p>
                            </div>
                        </div>

                        <div></div>

                        {/* One Oncology Links */}
                        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold">One Oncology</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="#" className="text-sm hover:text-gray-300">
                                            FAQ&apos;s
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm hover:text-gray-300">
                                            Knowledge Base
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm hover:text-gray-300">
                                            Privacy policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm hover:text-gray-300">
                                            Terms and Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold">Useful Links</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="#" className="text-sm hover:text-gray-300">
                                            Careers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm hover:text-gray-300">
                                            Contact us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm hover:text-gray-300">
                                            Unsubscribe
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}