import Hero from "./components/Hero";
import Projects from "./components/Projects";

import { Inter } from "next/font/google";
import About from "./components/About";
import Footer from "./components/Footer";

import ThreeD from "./components/priview/ThreeD";
import Parallax from "./components/priview/Parallax";
import TextParallax from "./components/priview/TextParallax";
import Glass from "./components/priview/Glass";

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
