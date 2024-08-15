import Image from "next/image";
import "./page.css";
import HeroDescription from "../src/Hero/HeroDescription/HeroDescription.jsx";
import HeroImage from "../src/Hero/HeroImage/HeroImage.jsx";
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link href="/founders">Founders</Link>
      <HeroImage/>
     <HeroDescription/>

    </main>
  );
}


