import Navbar from "../components/layout/Navbar";
import About from "../components/sections/About";
import AcademicExperience from "../components/sections/AcademicExperience";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <AcademicExperience/>
      <Testimonials/>
      <Contact/>
    </main>
  );
}