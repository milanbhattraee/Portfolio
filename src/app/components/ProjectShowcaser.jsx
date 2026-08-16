"use client";
import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

const projects = [
  {
    name: "Restrola",
    tag: "Restaurant ERP",
    description: "Nepal-focused restaurant ERP with IRD-compliant billing and a double-entry ledger.",
    stack: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Prisma"],
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
    accentColor: "violet",
  },
  {
    name: "Shopylib",
    tag: "E-Commerce",
    description: "Full-stack multivendor marketplace with pharmacy and category support.",
    stack: ["Next.js", "React", "Express", "PostgreSQL", "Firebase"],
    gradient: "from-blue-500/20 via-cyan-500/10 to-teal-500/20",
    accentColor: "cyan",
  },
  {
    name: "Supari Khata",
    tag: "Finance",
    description: "Full-stack finance web app for local betel nuts business to record their finance.",
    stack: ["Next.js", "React", "Express", "PostgreSQL", "Prisma"],
    gradient: "from-emerald-500/20 via-green-500/10 to-lime-500/20",
    accentColor: "emerald",
  },
  {
    name: "CloudBox",
    tag: "In Development",
    description: "Google-Drive-style cloud storage app with a Flutter frontend.",
    stack: ["Flutter", "Dart", "Express", "PostgreSQL", "Firebase"],
    gradient: "from-orange-500/20 via-amber-500/10 to-yellow-500/20",
    accentColor: "orange",
  },
  {
    name: "Scholib",
    tag: "EdTech",
    description: "School management system for academic and admin operations.",
    stack: ["Next.js", "React", "PostgreSQL", "Prisma"],
    gradient: "from-pink-500/20 via-rose-500/10 to-red-500/20",
    accentColor: "pink",
  },
  {
    name: "Roman → Devanagari",
    tag: "AI / ML",
    description: "Seq2Seq Transformer trained on 80k pairs to transliterate Roman Nepali.",
    stack: ["Python", "PyTorch", "NLP"],
    gradient: "from-indigo-500/20 via-blue-500/10 to-violet-500/20",
    accentColor: "indigo",
  },
];

const getAccentColors = (color) => {
  const colors = {
    violet: {
      tag: "text-violet-300",
      border: "group-hover:border-violet-400/50",
      shadow: "group-hover:shadow-[0_30px_80px_-20px_rgba(139,92,246,0.4)]",
      glow: "group-hover:shadow-violet-500/30",
      shine: "group-hover:text-violet-300/15",
    },
    cyan: {
      tag: "text-cyan-300",
      border: "group-hover:border-cyan-400/50",
      shadow: "group-hover:shadow-[0_30px_80px_-20px_rgba(34,211,238,0.4)]",
      glow: "group-hover:shadow-cyan-500/30",
      shine: "group-hover:text-cyan-300/15",
    },
    emerald: {
      tag: "text-emerald-300",
      border: "group-hover:border-emerald-400/50",
      shadow: "group-hover:shadow-[0_30px_80px_-20px_rgba(16,185,129,0.4)]",
      glow: "group-hover:shadow-emerald-500/30",
      shine: "group-hover:text-emerald-300/15",
    },
    orange: {
      tag: "text-orange-300",
      border: "group-hover:border-orange-400/50",
      shadow: "group-hover:shadow-[0_30px_80px_-20px_rgba(251,146,60,0.4)]",
      glow: "group-hover:shadow-orange-500/30",
      shine: "group-hover:text-orange-300/15",
    },
    pink: {
      tag: "text-pink-300",
      border: "group-hover:border-pink-400/50",
      shadow: "group-hover:shadow-[0_30px_80px_-20px_rgba(244,114,182,0.4)]",
      glow: "group-hover:shadow-pink-500/30",
      shine: "group-hover:text-pink-300/15",
    },
    indigo: {
      tag: "text-indigo-300",
      border: "group-hover:border-indigo-400/50",
      shadow: "group-hover:shadow-[0_30px_80px_-20px_rgba(99,102,241,0.4)]",
      glow: "group-hover:shadow-indigo-500/30",
      shine: "group-hover:text-indigo-300/15",
    },
  };
  return colors[color] || colors.violet;
};

const ProjectCard = ({ name, tag, description, stack, gradient, accentColor, index }) => {
  const ref = useRef(null);

  const rotateX = useSpring(0, { stiffness: 150, damping: 15 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 15 });
  const scale = useSpring(1, { stiffness: 260, damping: 22 });
  const mx = useMotionValue(50);
  const my = useMotionValue(50);

  const spotlight = useMotionTemplate`radial-gradient(350px circle at ${mx}% ${my}%, rgba(255,255,255,0.12), transparent 65%)`;
  const colors = getAccentColors(accentColor);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateX.set((py - 0.5) * -25);
    rotateY.set((px - 0.5) * 25);
    mx.set(px * 100);
    my.set(py * 100);
  };

  const handleEnter = () => scale.set(1.06);

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative h-full w-full [perspective:1200px]"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseEnter={handleEnter}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
        className={`group relative h-full w-full rounded-2xl bg-gradient-to-br ${gradient} p-[1px] transition-all duration-500 hover:z-10`}
      >
        <div className={`relative flex h-full min-h-[320px] w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/90 backdrop-blur-2xl transition-all duration-500 ${colors.border} ${colors.shadow}`}>

          {/* Animated spotlight effect */}
          <motion.div
            style={{ background: spotlight }}
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          {/* Diagonal shine sweep */}
          <div className="pointer-events-none absolute inset-y-0 left-[-50%] w-[40%] -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent opacity-0 transition-all duration-1000 ease-out group-hover:left-[110%] group-hover:opacity-100" />

          {/* Content container with 3D layers */}
          <div className="relative flex h-full flex-col p-7">

            {/* Floating badge */}
            <div className="relative mb-4" style={{ transform: "translateZ(70px)" }}>
              <span className={`inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${colors.tag} backdrop-blur-sm transition-all duration-300 group-hover:border-white/25 group-hover:bg-white/10`}>
                {tag}
              </span>
            </div>

            {/* Title with enhanced typography */}
            <div className="relative mb-3" style={{ transform: "translateZ(60px)" }}>
              <h3 className="font-poppins text-xl font-bold leading-tight text-white transition-all duration-300 group-hover:text-white/95">
                {name}
              </h3>
            </div>

            {/* Description with better spacing */}
            <div className="relative mb-6 flex-1" style={{ transform: "translateZ(40px)" }}>
              <p className="font-dmSans text-[13px] leading-relaxed text-white/70 transition-colors duration-300 group-hover:text-white/85">
                {description}
              </p>
            </div>

            {/* Tech stack with refined chips */}
            <div className="relative mt-auto" style={{ transform: "translateZ(30px)" }}>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-dmSans text-[11px] font-medium text-white/60 backdrop-blur-sm transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.08] group-hover:text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Ghost index number with depth */}
            <span
              className={`pointer-events-none absolute -right-3 -top-4 select-none font-poppins text-8xl font-black text-white/[0.03] transition-all duration-500 ${colors.shine}`}
              style={{ transform: "translateZ(8px)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Bottom glow effect */}
          <div className={`pointer-events-none absolute -bottom-16 left-1/2 h-32 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-t ${gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30`} />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Showcase = () => {
  return (
    <section id="myprojects" className="snap-section flex min-h-screen w-full flex-col justify-center py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-3 font-poppins text-3xl font-bold text-white md:text-5xl">
            My Projects
          </h2>
          <p className="mx-auto max-w-2xl font-dmSans text-sm text-white/60 md:text-base">
            A collection of full-stack applications and ML projects showcasing modern web technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;