"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { useScroll, useSpring, motion, useTransform } from "framer-motion";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [pageHeight, setPageHeight] = useState(0);

  useLayoutEffect(() => {
    if (scrollRef.current) {
      setPageHeight(scrollRef.current.getBoundingClientRect().height);
    }
  }, [children]);

  const { scrollY } = useScroll();
  const y = useSpring(
    useTransform(scrollY, (value) => -value),
    {
      stiffness: 100,
      damping: 20,
      mass: 0.2,
    }
  );

  return (
    <>
      <div style={{ height: pageHeight }} />

      <motion.div
        ref={scrollRef}
        style={{
          y,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
