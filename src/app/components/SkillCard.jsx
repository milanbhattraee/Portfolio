"use client";
import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiFirebase,
  SiSequelize,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiVisualstudiocode,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";
import { FaDatabase, FaBolt, FaBrain, FaChartBar } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";

const skillsData = [
  {
    title: "Languages",
    technologies: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Python", icon: <SiPython /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
    ],
  },
  {
    title: "Frontend",
    technologies: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Redux Toolkit", icon: <SiRedux /> },
      { name: "TanStack Query", icon: <FaBolt /> },
    ],
  },
  {
    title: "Backend",
    technologies: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST APIs", icon: <TbApi /> },
      { name: "Auth & Security", icon: <MdSecurity /> },
    ],
  },
  {
    title: "Databases",
    technologies: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "Sequelize", icon: <SiSequelize /> },
    ],
  },
  {
    title: "AI / Machine Learning",
    technologies: [
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "Matplotlib", icon: <FaChartBar /> },
      { name: "scikit-learn", icon: <SiScikitlearn /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "ML Algorithms", icon: <FaBrain /> },
    ],
  },
  {
    title: "Tools",
    technologies: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "VS Code", icon: <SiVisualstudiocode /> },
    ],
  },
];

const SkillCard = ({ title, technologies, index }) => {
  const ref = useRef(null);

  const rotateX = useSpring(0, { stiffness: 150, damping: 15 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 15 });
  const scale = useSpring(1, { stiffness: 260, damping: 22 });
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(240px circle at ${mx}% ${my}%, rgba(255,255,255,0.09), transparent 70%)`;

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
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="relative h-full w-full [perspective:1000px]"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseEnter={handleEnter}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
        className="group relative h-full w-full rounded-2xl border border-white/15 bg-white/[0.06] p-5 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-colors duration-300 hover:z-10 hover:border-violet-400/30"
      >
        {/* cursor-tracking glare */}
        <motion.div
          style={{ background: spotlight }}
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        {/* title — floats slightly above the list for a layered 3D read */}
        <div style={{ transform: "translateZ(55px)" }} className="relative">
          <h3 className="mb-4 font-poppins text-[15px] font-semibold tracking-wide text-white">
            {title}
          </h3>
        </div>

        <div style={{ transform: "translateZ(28px)" }} className="relative flex flex-col gap-2.5">
          {technologies.map((tech, i) => (
            <div key={i} className="flex items-center gap-2.5 text-[13px] text-white/85">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/[0.07] text-[12px] text-violet-300">
                {tech.icon}
              </span>
              <span className="font-dmSans">{tech.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const MySkills = () => {
  return (
    <section id="myskills" className="w-full py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <motion.h2
          initial={{ y: -16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-14 text-center font-poppins text-3xl font-bold text-white md:text-5xl"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 gap-5 font-dmSans sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.title} index={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;