import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profileImg from "./assets/profile(2).png";
import resume from "./assets/Resume.pdf"; // Path to your resume

const HeroSection = () => {
  const rotatingTexts = ["Web Developer", "UI/UX Designer", "Creative Thinker"];

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black animate-gradient-motion -z-10"></div>

      {/* Floating Particle Icons */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full blur-3xl shadow-lg"
            style={{
              width: `${Math.random() * 40 + 15}px`,
              height: `${Math.random() * 40 + 15}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center p-8 max-w-5xl"
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: 20 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image with 3D Tilt Effect */}
        <motion.div
          className="relative mx-auto mb-8 w-56 h-56 md:w-64 md:h-64"
          whileHover={{ rotateY: 10, rotateX: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img
            src={profileImg}
            alt="John Wesley"
            className="w-full h-full rounded-full border-4 border-secondary shadow-lg hover:shadow-[0_0_50px_15px] hover:shadow-secondary/70 transition duration-500"
          />
        </motion.div>

        {/* Heading with Original Gradient Colors */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-600 animate-text-glow">
          Hi, I'm{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-pink-600 animate-glow">
            John Wesley
          </span>
        </h1>

        {/* Typewriter Animation for Roles */}
        <div className="text-xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-pink-600 animate-glow mb-8">
          <Typewriter
            words={rotatingTexts}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>

        {/* Interactive Buttons */}
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
          <motion.a
            href="#projects"
            className="w-full md:w-auto px-8 py-4 bg-secondary text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_10px] hover:shadow-secondary/80"
            whileHover={{ scale: 1.1 }}
          >
            View My Projects
          </motion.a>
          <motion.a
            href={resume}
            download
            className="w-full md:w-auto px-8 py-4 border-2 border-secondary text-lg font-semibold rounded-lg hover:bg-secondary hover:text-white hover:scale-110 hover:shadow-[0_0_30px_10px] hover:shadow-secondary/80 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>

      {/* Scroll Indicator with Bouncing Arrow */}
      <motion.div
        className="absolute bottom-12 w-full flex justify-center items-center"
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <motion.div
          className="w-8 h-8 border-b-2 border-r-2 border-secondary rotate-45 animate-bounce"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
        <p className="ml-4 text-secondary/80">Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
