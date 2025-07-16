"use client";
import React from "react";
import TiltedCard from "./TiltedCard";

function Hero() {
  return (
    <main
      className="flex flex-col p-4 mt-15 items-center gap-6 bg-white/10 backdrop-blur-xl rounded-3xl lg:flex-row lg:itmes-start lg:w-[50vw] lg:h-[25vh] shadow-xl"
      style={{ perspective: "1000px" }}
    >
      <TiltedCard imageSrc={"/images/avatar.jpg"} imageHeight={"22vh"} imageWidth={"22vh"} />
      {/* <img
        className="h-[22vh] rounded-2xl lg:grayscale hover:grayscale-0 transform hover:-translate-y-1 duration-400 shadow-2xl z-50 tilt-card"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        src="/images/avatar.jpg"
        alt="avatar"
      /> */}
      <p className="text-sm text-center md:text-left leading-relaxed break-words">
        I'm Rohit Pujari, a passionate web developer and Linux enthusiast who
        loves building clean, dynamic interfaces with modern tools like React,
        Next.js, and Tailwind — always exploring, learning, and crafting
        user-focused digital experiences.
      </p>
    </main>
  );
}

export default Hero;
