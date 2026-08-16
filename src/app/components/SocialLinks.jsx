"use client";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
  { href: "https://www.facebook.com/millanbhattraie", icon: <FaFacebookF />, label: "Facebook" },
  { href: "https://github.com/milanbhattraee", icon: <FaGithub />, label: "GitHub" },
  { href: "https://linkedin.com/in/milan-bhattarai", icon: <FaLinkedinIn />, label: "LinkedIn" },
  { href: "https://www.instagram.com/milanbhattaraii/", icon: <FaInstagram />, label: "Instagram" },
];

const SocialLinks = ({ className = "", iconClassName = "h-9 w-9 text-lg" }) => (
  <div className={`flex items-center ${className}`}>
    {socials.map((s) => (
      <Link
        key={s.label}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={s.label}
        className={`group relative flex items-center justify-center rounded-full text-white/60 [perspective:400px] transition-transform duration-300 ease-out hover:-translate-y-1 ${iconClassName}`}
      >
        <span className="absolute inset-0 scale-50 rounded-full bg-violet-500/0 opacity-0 blur-md transition-all duration-300 ease-out group-hover:scale-125 group-hover:bg-violet-500/40 group-hover:opacity-100" />
        <span className="relative z-10 transition-all duration-500 ease-out group-hover:text-white group-hover:[transform:rotateY(360deg)] group-hover:drop-shadow-[0_0_10px_rgba(167,139,250,0.85)]">
          {s.icon}
        </span>
      </Link>
    ))}
  </div>
);

export default SocialLinks;
