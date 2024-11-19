import Carousel from "@/components/divisions/Carousel";
import Component from "@/components/divisions/contact";
import Dava from "@/components/divisions/Dava";
import LatestResearch from "@/components/divisions/latestResearch";
import MainResearch from "@/components/divisions/mainResearch";
import MainResearch2 from "@/components/divisions/mainResearch2";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";

export default function Home() {
  return (
      <div className="grid grid-rows-[20px_1fr_20px] min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col">
        <NavBar/>
        {/* <ImageCarousel/> */}
        <Component/>
        <LatestResearch/>
        <MainResearch/>
        <MainResearch2/>
        <Carousel/>
        <Dava/>
        <Footer/>
      </main>
      <div className="h-[50vh]">hi there</div>
      
    </div>
  );
}
