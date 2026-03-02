"use client";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@/components/icons";
import { Mail, MessageCircle, ArrowUp, Heart } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = useCallback(() => {
    setShowScrollTop(window.scrollY > 500);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const resourceLinks = [
    { name: "Resume", href: "/Amit_Kumawat_Resume_v2.pdf", download: true },
    { name: "LeetCode", href: "https://leetcode.com/u/_amitk_0091/", external: true },
    { name: "GitHub", href: "https://github.com/amitk0091", external: true },
  ];

  const socialLinks = [
    { icon: GitHubLogoIcon, href: "https://github.com/amitk0091", label: "GitHub", hoverColor: "hover:bg-slate-800 hover:text-white" },
    { icon: LinkedInLogoIcon, href: "https://linkedin.com/in/amitk0091", label: "LinkedIn", hoverColor: "hover:bg-blue-600 hover:text-white" },
    { icon: Mail, href: "mailto:akn778811@gmail.com", label: "Email", hoverColor: "hover:bg-indigo-600 hover:text-white" },
    { icon: MessageCircle, href: "https://wa.me/919509669135", label: "WhatsApp", hoverColor: "hover:bg-emerald-600 hover:text-white" },
  ];

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Gradient border top */}
      <div className="h-px bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Amit Kumawat
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full Stack Software Engineer passionate about building scalable, high-performance applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-200 mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-slate-200 mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    {...(link.download ? { download: true } : {})}
                    className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-slate-200 mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className={`p-2.5 bg-slate-800/50 border border-slate-700/50 rounded-xl ${social.hoverColor} transition-all duration-300`}
                    title={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Amit Kumawat. All rights reserved.
          </p>

          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Designed & Built with{" "}
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            {" "}using Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl shadow-glow-blue hover:scale-110 transition-transform duration-300 z-50"
            title="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
