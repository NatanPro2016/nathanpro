import Hero from "./components/Hero";
import Projects from "./components/Projects";

import { Inter } from "next/font/google";
import About from "./components/About";
import Footer from "./components/Footer";

import TextParallax from "./components/priview/TextParallax";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className} `}>
      <Hero />
      <Projects />
      <About />
      {/* <Parallax /> */}
      {/* <ThreeD />
      <Glass /> */}
      <TextParallax />
      <Footer />
    </div>
  );
}
