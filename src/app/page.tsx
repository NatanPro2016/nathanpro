import Hero from "./components/Hero";
import Projects from "./components/Projects";

import { Inter } from "next/font/google";
import About from "./components/About";
import Footer from "./components/Footer";

import TextParallax from "./components/priview/TextParallax";
import Loading from "./components/Loading";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className} `}>
      <Loading />
      <Hero />
      <Projects />
      <About />

      {/* <ThreeD />
      <Glass /> */}
      <TextParallax />
      <Footer />
    </div>
  );
}
