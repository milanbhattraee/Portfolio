"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Navbar from "./Navbar";




const Hero = () => {
  const imageRef = useRef(null);

  const rotateX = useSpring(0, { stiffness: 150, damping: 15 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 15 });
  const scale = useSpring(1, { stiffness: 260, damping: 22 });

  const handleImageMove = (e) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateX.set((py - 0.5) * -20);
    rotateY.set((px - 0.5) * 20);
  };

  const handleImageEnter = () => scale.set(1.04);

  const resetImage = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <div id="home" className="snap-section flex min-h-screen flex-col">
      <Navbar />
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-10 px-6 py-10 sm:px-8 lg:flex-row lg:justify-between">
        {/* Left side (Text content) */}
        <motion.div
          className="flex w-full items-center justify-center lg:w-1/2 lg:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-full max-w-lg">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="pb-4 font-montserrat md:pb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin tracking-tight">
                Milan Bhattarai
              </h1>
              <span className="bg-gradient-to-r font-poppins from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-tight text-transparent">
                Full Stack Developer
              </span>
              <p className="my-4 font-sans md:mt-6 max-w-xl text-sm md:text-sm lg:text-lg font-light leading-relaxed">
                Final-year IT student and full-stack developer building complete
                products with Next.js, TypeScript, Node.js, Express, PostgreSQL,
                and Prisma — from restaurant ERPs to AI-driven language tools.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right side (Image) */}
        <motion.div
          className="flex w-full justify-center [perspective:1200px] lg:w-1/2 lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            ref={imageRef}
            onMouseMove={handleImageMove}
            onMouseEnter={handleImageEnter}
            onMouseLeave={resetImage}
            style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
            className="group relative h-64 w-64 transition-opacity duration-500 ease-out md:h-80 md:w-64 lg:h-[30rem] lg:w-[25rem]"
          >
            <span className="pointer-events-none absolute -inset-2 rounded-xl bg-gradient-to-br from-violet-500/50 via-fuchsia-500/20 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            <Image
              width={500}
              height={500}
              src={`./images/milan.png`}
              style={{ objectFit: "cover" }}
              alt="Milan Bhattarai - Full-Stack Web Developer"
              title="Milan Bhattarai - Portfolio Picture"
              priority
              unoptimized
              className="relative rounded-lg contrast-75 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.7)] transition-all ease-linear duration-700 group-hover:contrast-100"
            />
            {/* <img
              src="/images/milan.png"
              alt="Milan Bhattarai"
              className="relative rounded-lg contrast-75 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.7)] transition-all ease-linear duration-700 group-hover:contrast-100"
              width={500}
              height={500}
            /> */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
