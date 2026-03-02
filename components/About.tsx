"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Code2, Trophy, Zap } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
} as const;

const stats = [
  {
    icon: Code2,
    value: "1300+",
    label: "LeetCode Problems",
    sublabel: "Rating: 2054",
    gradient: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-50 to-blue-50",
    borderColor: "border-indigo-100",
  },
  {
    icon: Trophy,
    value: "AIR 250",
    label: "CodeKaze Challenge",
    sublabel: "2nd Rank (College)",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
    borderColor: "border-amber-100",
  },
  {
    icon: Zap,
    value: "250+",
    label: "GFG Problems",
    sublabel: "DSA & Competitive",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    borderColor: "border-emerald-100",
  },
  {
    icon: GraduationCap,
    value: "1+",
    label: "Years Experience",
    sublabel: "Full Stack Development",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    borderColor: "border-purple-100",
  },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="about"
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="relative max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Passionate about{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              building great software
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-5 gap-12 items-start"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="lg:col-span-3 space-y-5">
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-slate-100">
              <p className="text-lg text-slate-600 leading-relaxed mb-5">
                I&apos;m a passionate Software Engineer with a B.Tech in Computer Science from{" "}
                <span className="font-semibold text-slate-800">Dr. B R Ambedkar National Institute of Technology, Jalandhar</span>{" "}
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-600 text-sm font-medium">CGPA: 8.52</span>
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-5">
                With 1+ year of professional experience, I specialize in building scalable, high-performance web applications and APIs. I have expertise in full-stack development with a strong focus on backend architecture, database optimization, and frontend performance.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-5">
                I&apos;m proficient in{" "}
                <span className="font-semibold text-indigo-600">Next.js</span>,{" "}
                <span className="font-semibold text-purple-600">React</span>,{" "}
                <span className="font-semibold text-pink-600">Spring Boot</span>,{" "}
                <span className="font-semibold text-blue-600">TypeScript</span>, and have hands-on experience with microservices, caching strategies, and event-driven systems.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Beyond coding, I&apos;m an avid competitive programmer with{" "}
                <span className="font-semibold text-slate-800">1300+ problems solved on LeetCode</span>{" "}
                (Rating: 2054) and secured{" "}
                <span className="font-semibold text-slate-800">AIR 250</span> in CodeKaze competitive programming challenge.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`p-5 bg-gradient-to-br ${stat.bgGradient} rounded-2xl border ${stat.borderColor} hover:shadow-soft-lg transition-all duration-300`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-3`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <p className="text-sm font-medium text-slate-700">{stat.label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{stat.sublabel}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
