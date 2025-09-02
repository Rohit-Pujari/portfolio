"use client";
import React from "react";
import TiltedCard from "./TiltedCard";

function Hero() {
  return (
    <main
      className="h-[50vh] flex flex-col p-4 mt-15 items-center gap-6 bg-white/5 backdrop-blur-md rounded-3xl lg:flex-row lg:itmes-start lg:w-[50vw] lg:h-[25vh] shadow-xl"
      style={{ perspective: "1000px" }}
    >
      <TiltedCard imageSrc={"/images/avatar.jpg"} altText="Avatar Image" imageHeight={"22vh"} imageWidth={"22vh"} />
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
