"use client";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="snap-section relative flex min-h-screen w-full flex-col justify-between border-t border-white/10 bg-transparent text-white"
    >
      <motion.div
        className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 py-16 text-center sm:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
          {/* Copyright Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-2xl font-bold">
            &copy; 2024 Milan. All Rights Reserved.
          </p>
        </motion.div>

        {/* Contact Information Section */}
        <motion.div
          className="text-center font-dmSans space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <hr className=" my-7 "></hr>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <p className="text-sm md:text-base">
              <strong>Email:</strong> milanbhattarai0007@gmail.com
            </p>
            <p className="text-sm md:text-base">
              <strong>Phone:</strong> 9762908967
            </p>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <MagneticButton
            href="mailto:milanbhattarai0007@gmail.com"
            className="animate-pulse-glow rounded-full border border-violet-400/40 bg-violet-500/10 px-10 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:border-violet-300/70 hover:bg-violet-500/20"
          >
            Say Hello
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <SocialLinks className="gap-8" iconClassName="h-11 w-11 text-2xl" />
        </motion.div>
      </motion.div>

     
    </footer>
  );
};

export default Footer;
