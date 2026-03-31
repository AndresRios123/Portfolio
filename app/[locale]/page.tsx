import Navbar from "../components/layout/Navbar";
import About from "../components/sections/About";
import Hero from "../components/sections/Hero";
About

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}