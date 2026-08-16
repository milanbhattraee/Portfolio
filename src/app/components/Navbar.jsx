"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import SocialLinks from "./SocialLinks";

const links = [
  { href: "#home", title: "Home" },
  { href: "#myskills", title: "Skills" },
  { href: "#myprojects", title: "Projects" },
  { href: "#contact", title: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="relative z-50 w-full">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-8">
      <Link
        href="#home"
        className="group font-poppins text-xl md:text-2xl font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:tracking-widest"
      >
        <span className="bg-gradient-to-r from-white via-white to-white bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover:bg-[length:100%_2px] group-hover:from-violet-300 group-hover:to-pink-300">
          Milan
        </span>
      </Link>

      {/* Desktop nav */}
      <div className="hidden lg:flex items-center gap-8 font-poppins font-medium">
        {links.map((link) => (
          <NavLink key={link.href} {...link} />
        ))}

        <SocialLinks className="gap-3 pl-2" iconClassName="h-8 w-8 text-base" />

        <MagneticButton
          href="mailto:milanbhattarai0007@gmail.com"
          className="animate-pulse-glow rounded-full border border-violet-400/40 bg-violet-500/10 px-5 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:border-violet-300/70 hover:bg-violet-500/20"
        >
          Get In Touch
        </MagneticButton>
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex flex-col bg-neutral-950/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between px-4 py-5 sm:px-6">
              <span className="font-poppins text-xl font-semibold uppercase tracking-wide text-white">
                Milan
              </span>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-2">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group relative block px-6 py-3 font-poppins text-3xl font-semibold text-white/90 transition-all duration-300 hover:translate-x-2 hover:text-transparent hover:bg-gradient-to-r hover:from-pink-300 hover:to-violet-400 hover:bg-clip-text"
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-6 pb-10">
              <SocialLinks iconClassName="h-11 w-11 text-xl" />

              <MagneticButton
                href="mailto:milanbhattarai0007@gmail.com"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-violet-400/40 bg-violet-500/10 px-8 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-violet-300/70 hover:bg-violet-500/20"
              >
                Get In Touch
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ href, title }) => (
  <Link
    href={href}
    className="group relative py-1 text-white/80 transition-colors duration-300 hover:text-white"
  >
    <span className="relative z-10">{title}</span>
    <span className="pointer-events-none absolute -bottom-0.5 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-400 to-pink-400 shadow-[0_0_8px_rgba(167,139,250,0.8)] transition-all duration-300 ease-out group-hover:w-full" />
  </Link>
);

export default Navbar;
