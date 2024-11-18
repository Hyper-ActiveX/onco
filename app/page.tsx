'use Client'
import Caroselss from "@/components/carosels/Carosel";
import Component from "@/components/carosels/contact";
import Dava from "@/components/carosels/ONCO";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import Image from "next/image";

export default function Home() {
  return (
      <div className="grid grid-rows-[20px_1fr_20px] min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col">
        <NavBar/>
        <Component/>
        <Dava/>
        {/* <Caroselss/> */}
        <Footer/>
      </main>
      <div className="h-[50vh]">hi there</div>
      
    </div>
  );
}
