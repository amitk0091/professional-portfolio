"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MessageCircle, ArrowUpRight, Send } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@/components/icons";
import Link from "next/link";
import type { SVGProps } from "react";

interface ContactMethod {
  title: string;
  description: string;
  icon: (props: SVGProps<SVGSVGElement>) => React.ReactNode;
  href: string;
  label: string;
  gradient: string;
  hoverBorder: string;
  external: boolean;
}

const contactMethods: ContactMethod[] = [
  {
    title: "Email",
    description: "Send me an email for professional inquiries",
    icon: (props) => <Mail {...props} />,
    href: "mailto:akn778811@gmail.com",
    label: "akn778811@gmail.com",
    gradient: "from-indigo-500 to-blue-500",
    hoverBorder: "hover:border-indigo-200",
    external: false,
  },
  {
    title: "LinkedIn",
    description: "Connect with me on LinkedIn",
    icon: (props) => <LinkedInLogoIcon {...props} />,
    href: "https://linkedin.com/in/amitk0091",
    label: "amitk0091",
    gradient: "from-blue-500 to-cyan-500",
    hoverBorder: "hover:border-blue-200",
    external: true,
  },
  {
    title: "GitHub",
    description: "Check out my projects and contributions",
    icon: (props) => <GitHubLogoIcon {...props} />,
    href: "https://github.com/amitk0091",
    label: "amitk0091",
    gradient: "from-slate-600 to-slate-800",
    hoverBorder: "hover:border-slate-300",
    external: true,
  },
  {
    title: "WhatsApp",
    description: "Quick message on WhatsApp",
    icon: (props) => <MessageCircle {...props} />,
    href: "https://wa.me/919509669135",
    label: "+91-9509669135",
    gradient: "from-emerald-500 to-teal-500",
    hoverBorder: "hover:border-emerald-200",
    external: true,
  },
];

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

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="contact"
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/20 to-white" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* Decorative blobs */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-100/40 to-purple-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-gradient-to-br from-pink-100/40 to-rose-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 gap-5 mb-14"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={index}
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group p-6 bg-white rounded-2xl border border-slate-100 ${method.hoverBorder} shadow-soft hover:shadow-soft-lg transition-all duration-500`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-gradient-to-br ${method.gradient} rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-slate-800 mb-1">
                      {method.title}
                    </h3>
                    <p className="text-slate-500 text-sm mb-3">
                      {method.description}
                    </p>
                    <div className="flex items-center gap-2 text-indigo-600 font-medium text-sm group-hover:gap-3 transition-all">
                      <span className="truncate">{method.label}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all shrink-0" />
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-3xl p-10 md:p-14 text-center text-white overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Send className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to work together?</h3>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to chat about technology — I&apos;d love to hear from you!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="mailto:akn778811@gmail.com"
                  className="px-8 py-3.5 bg-white text-indigo-600 rounded-2xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Send Email
                </Link>
                <Link
                  href="https://linkedin.com/in/amitk0091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 border-2 border-white/40 text-white rounded-2xl font-bold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Visit LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
