import HeroSection from "@/components/HeroSection";
import Intro from "@/components/Intro";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="w-full h-screen flex ">
      <HeroSection/>
      
    </div>
    <div className="w-full h-screen flex ">
    <Intro/>
    </div>
    </>
  );
}
