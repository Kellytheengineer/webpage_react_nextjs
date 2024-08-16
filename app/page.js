import Image from "next/image";
import "./page.css";
import HeroDescription from "../src/Hero/HeroDescription/HeroDescription.jsx";
import HeroImage from "../src/Hero/HeroImage/HeroImage.jsx";
import Reviews from "..src/Review/Review.jsx"


export default function Home() {
  return (
    <main>
      
      <HeroImage/>
     <HeroDescription/>
     <Reviews/>

    </main>
  );
}


