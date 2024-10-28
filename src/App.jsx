// App.jsx
import React from "react";
import { ToastContainer } from "react-toastify"; // Moved ToastContainer to main imports
import "react-toastify/dist/ReactToastify.css"; // Import Toast styles
import Particle from "./Particle";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Timeline from "./Timeline";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="bg-gray-90 min-h-screen text-tertiary">
      <Particle />
      <Navbar />
      <main className="max-w-10xl mx-auto">
        <Hero />
        <About />
        <Skills />
        <Project />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        theme="colored"
      />
    </div>
  );
};

export default App;
