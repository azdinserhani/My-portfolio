import React from "react";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./contact/Contact";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div>
      <Analytics />
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <div id="project">
        <Projects />
      </div>
      <section id="skills">
        <Skills type={"Front-End"} />
      </section>
      <section>
        <Skills type={"Back-End"} />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
