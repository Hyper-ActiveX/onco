"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logos from "../../public/logos.png";

export default function NavBar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About us" },
        { href: "/blog", label: "Blog" },
        { href: "/events", label: "Events" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full  bg-background">
            <div className="flex h-20 items-center w-full justify-between px-4 md:px-8 ">
                {/* Logo */}
                {/* <div className="flex flex-1 gap-6"> */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src={logos}
                            alt="DAVA Oncology Logo"
                            width={140}
                            height={140}
                            className="h-auto w-auto"
                        />
                    </Link>
                {/* </div> */}
                {/* Desktop Navigation */}
                <div className="flex flex-row gap-40">
                <nav className="hidden md:flex md:items-center md:gap-1 border border-[CECECE] rounded-[30px] px-[15px] py-[7px]">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`rounded-[30px] border border-transparent px-3 py-2 text-sm font-medium transition-colors hover:bg-[#0C3266] hover:text-[#FFFFFF] ${pathname === item.href ? "bg-[#0C3266] text-[#FFFFFF]" : "text-foreground"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden items-center gap-4 md:flex border border-[CECECE] rounded-[30px] px-[10px] py-[7px]">
                    <Link
                        href="tel:214-451-4500"
                        className="flex items-center gap-2 rounded-[30px] border border-transparent px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-[#14387F]/10 hover:text-[#14387F]"
                    >
                        <Phone className="h-4 w-4" />
                        214-451-4500
                    </Link>
                    <Link
                        href="mailto:info@davonc.com"
                        className="flex items-center gap-2 rounded-[30px] border border-transparent px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-[#14387F]/10 hover:text-[#14387F]"
                    >
                        <Mail className="h-4 w-4" />
                        info@davonc.com
                    </Link>
                </div>

                {/* Mobile Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        <nav className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`rounded-md border border-transparent px-3 py-2 text-lg font-medium transition-colors hover:bg-[#14387F]/10 hover:text-[#14387F] ${pathname === item.href ? "bg-[#14387F]/10 text-[#14387F]" : "text-foreground"
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="mt-4 flex flex-col gap-4">
                                <Link
                                    href="tel:214-451-4500"
                                    className="flex items-center gap-2 rounded-md border border-transparent px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-[#14387F]/10 hover:text-[#14387F]"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Phone className="h-4 w-4" />
                                    214-451-4500
                                </Link>
                                <Link
                                    href="mailto:info@davonc.com"
                                    className="flex items-center gap-2 rounded-md border border-transparent px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-[#14387F]/10 hover:text-[#14387F]"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Mail className="h-4 w-4" />
                                    info@davonc.com
                                </Link>
                            </div>
                        </nav>
                    </SheetContent>
                </Sheet>
                </div>
            </div>
        </header>
    );
}
