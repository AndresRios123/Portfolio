import Navbar from "../components/layout/Navbar";
import About from "../components/sections/About";
import AcademicExperience from "../components/sections/AcademicExperience";
import Hero from "../components/sections/Hero";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <AcademicExperience/>
    </main>
  );
}