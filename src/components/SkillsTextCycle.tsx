"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const texts = ["Next.js", "Astro", "React", "Node.js", "Express.js", "Flutter", "Firebase"];

export default function TextLoop() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

   return (
    <div className="relative h-12 lg:h-16 flex items-center justify-start overflow-visible">
      <AnimatePresence mode="wait">
        <motion.h3
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute text-4xl lg:text-6xl text-[#6D9886] font-semibold"
        >
          {texts[index]}
        </motion.h3>
      </AnimatePresence>
    </div>
  );
}
