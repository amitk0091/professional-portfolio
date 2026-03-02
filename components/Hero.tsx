"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Download, ArrowDown, Sparkles } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@/components/icons";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
} as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />

      {/* Floating blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-gradient-to-br from-indigo-200/40 to-purple-200/40 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-40 -right-20 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div
        className="relative max-w-5xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-100 text-sm font-medium text-indigo-700 shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Open to opportunities
          </span>
        </motion.div>

        {/* Avatar */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-block relative">
            <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-4xl font-bold text-white shadow-glow-purple rotate-3 hover:rotate-0 transition-transform duration-500">
              AK
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-soft">
              <Sparkles className="w-4 h-4 text-amber-500" />
            </div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="text-slate-900">Hi, I&apos;m </span>
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Amit
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl font-medium text-slate-500 mb-4"
        >
          Full Stack Software Engineer
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Building scalable, high-performance web applications with modern technologies.
          Specialized in <span className="text-indigo-500 font-medium">Next.js</span>, <span className="text-purple-500 font-medium">React</span>, <span className="text-pink-500 font-medium">Spring Boot</span>, and cloud architectures.
        </motion.p>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <Link
            href="https://github.com/amitk0091"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl hover:border-slate-300 hover:shadow-soft transition-all duration-300"
          >
            <GitHubLogoIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">GitHub</span>
          </Link>

          <Link
            href="https://linkedin.com/in/amitk0091"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl hover:border-blue-300 hover:text-blue-600 hover:shadow-soft transition-all duration-300"
          >
            <LinkedInLogoIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">LinkedIn</span>
          </Link>

          <Link
            href="mailto:akn778811@gmail.com"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl hover:border-purple-300 hover:text-purple-600 hover:shadow-soft transition-all duration-300"
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Email</span>
          </Link>

          <Link
            href="https://wa.me/919509669135"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl hover:border-emerald-300 hover:text-emerald-600 hover:shadow-soft transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">WhatsApp</span>
          </Link>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          <Link
            href="/Amit_Kumawat_Resume_v2.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl hover:shadow-glow-blue transition-all duration-300 hover:scale-105 font-semibold"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </Link>
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300 hover:scale-105 font-semibold"
          >
            View Projects
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs font-medium text-slate-400 tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4 text-slate-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
