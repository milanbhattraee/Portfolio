"use client"
import Hero from "./components/Hero";
import ProjectsShowcase from "./components/ProjectShowcaser";
import Footer from "./components/Footer";
import MySkills from "./components/SkillCard.jsx";




export default function Home() {
  return (
    <div className="text-neutral-300 antialiased selection:bg-violet-400/40 selection:text-white">
      <Hero />
      <MySkills />
      <ProjectsShowcase/>
      <Footer/>
    </div>
  );
}
