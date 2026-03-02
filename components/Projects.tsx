"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight, Layers } from "lucide-react";
import { GitHubLogoIcon } from "@/components/icons";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  gradient: string;
  bgGradient: string;
  website?: string;
}

const projects: Project[] = [
  {
    title: "Unified Home Construction",
    description: "Production-grade full-stack platform connecting homeowners and vendors with real-time communication, authentication, and payment integration.",
    technologies: ["Next.js", "Spring Boot", "PostgreSQL", "Redis", "RabbitMQ", "Microservices"],
    highlights: [
      "Built SEO-optimized, high-performance responsive UI",
      "Designed REST APIs across multiple microservices",
      "Implemented Redis caching for 40% performance improvement",
      "Worker service for real-time email notifications",
    ],
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-500/5 to-purple-500/5",
  },
  {
    title: "Tarana Handicrafts E-Commerce",
    description: "Modern e-commerce platform for artisan handicrafts with dynamic product catalog and optimized performance.",
    website: "https://www.taranahandicrafts.com/",
    technologies: ["Next.js", "MongoDB", "REST APIs", "Tailwind CSS"],
    highlights: [
      "Responsive product catalog with dynamic routing",
      "Strong Lighthouse performance scores (90+)",
      "Complete backend REST APIs integration",
      "SEO optimized for better visibility",
    ],
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/5 to-pink-500/5",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
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

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="projects"
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-purple-50/20 to-slate-50/80" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="relative max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-pink-50 text-pink-600 text-sm font-medium mb-4">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Creative{" "}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="group bg-white rounded-3xl overflow-hidden shadow-soft border border-slate-100 hover:shadow-soft-lg transition-all duration-500"
            >
              {/* Gradient accent bar */}
              <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-8 md:p-10">
                {/* Project Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-gradient-to-br ${project.gradient} rounded-2xl shadow-sm`}>
                      <Layers className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  {project.website && (
                    <Link
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 text-sm font-medium group/link"
                    >
                      Visit Site
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  )}
                </div>

                <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-3xl">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    Key Highlights
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.highlights.map((highlight, hIndex) => (
                      <div
                        key={hIndex}
                        className={`flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r ${project.bgGradient}`}
                      >
                        <span className={`mt-1 w-5 h-5 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center shrink-0`}>
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-slate-600 text-sm leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="pt-6 border-t border-slate-100">
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3.5 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-sm font-medium border border-slate-100 hover:border-slate-200 hover:bg-slate-100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-14"
        >
          <p className="text-slate-500 mb-5 text-sm">
            Explore more projects and open-source contributions
          </p>
          <Link
            href="https://github.com/amitk0091"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold text-sm"
          >
            <GitHubLogoIcon className="w-5 h-5" />
            Visit GitHub Profile
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
