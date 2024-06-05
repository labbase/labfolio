"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Labbase Org. Where Ideas Come from.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          In a world of algorithms, hashtags, and followers,
          I find true connection in the lines of code that bring ideas to life.
          As a web developer, I don’t just build websites;
          I craft digital experiences that resonate with the heartbeat of technology and human ingenuity.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              <a href="/portfolio">View My Work</a>
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              <a href="/contact">Contact Me</a>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
