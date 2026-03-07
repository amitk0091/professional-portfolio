"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
	{
		title: "Software Engineer I",
		company: "Cvent",
		duration: "Jul 2025 – Present",
		location: "Gurugram, India",
		highlights: [
			"Developed GraphQL APIs using Next.js (Apollo), including schema design, resolvers, validation, and structured error handling, improving API reliability and reducing runtime failures",
			"Built reusable Next.js UI components and integrated Gainsight analytics for product tracking and usage insights",
			"Contributed to SSR adoption for key pages, improving page load performance and SEO metrics (Lighthouse/Core Web Vitals)",
			"Managed LaunchDarkly feature flags across multiple releases, enabling safe rollouts and controlled experimentation",
			"Collaborated with product and design teams to deliver features efficiently and improve development workflows",
		],
		gradient: "from-indigo-500 to-purple-500",
		bgGradient: "from-indigo-50 to-purple-50",
		accentColor: "text-indigo-600",
		dotColor: "bg-indigo-500",
	},
	{
		title: "Software Engineer Intern",
		company: "Cvent",
		duration: "Jan 2025 – Jun 2025",
		location: "Gurugram, India",
		highlights: [
			"Improved performance and SEO of key flows by supporting migration to Next.js SSR and optimizing frontend rendering",
			"Developed REST APIs with proper validation, maintainable structure, and clean error responses",
			"Refactored legacy components into modular and optimized implementations to support modernization initiatives",
		],
		gradient: "from-purple-500 to-pink-500",
		bgGradient: "from-purple-50 to-pink-50",
		accentColor: "text-purple-600",
		dotColor: "bg-purple-500",
	},
	{
		title: "Full Stack Intern",
		company: "SwiftBL",
		duration: "Oct 2024 – Dec 2024",
		location: "Remote",
		highlights: [
			"Developed responsive UI components using ReactJS and TailwindCSS, improving usability and UI consistency",
			"Implemented authentication flows using JWT and OAuth2 with refresh tokens and role-based access control",
			"Built backend services using Spring Boot and integrated MongoDB for user and application data storage",
			"Designed API contracts to improve client-server interaction and integration stability",
		],
		gradient: "from-blue-500 to-cyan-500",
		bgGradient: "from-blue-50 to-cyan-50",
		accentColor: "text-blue-600",
		dotColor: "bg-blue-500",
	},
] as const;

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

export default function Experience() {
	const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

	return (
		<section
			id="experience"
			className="relative py-24 px-4 overflow-hidden"
		>
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-indigo-50/30 to-slate-50/80" />
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

			<div className="relative max-w-6xl mx-auto" ref={ref}>
				{/* Section Header */}
				<motion.div
					variants={itemVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
					className="text-center mb-16"
				>
					<span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-sm font-medium mb-4">
						Career Journey
					</span>
					<h2 className="text-4xl md:text-5xl font-bold text-slate-900">
						Professional{" "}
						<span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
							Experience
						</span>
					</h2>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
					className="relative"
				>
					{/* Timeline line */}
					<div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-200 via-purple-200 to-blue-200 hidden md:block" />

					<div className="space-y-8">
						{experiences.map((exp, index) => (
							<motion.div
								key={index}
								variants={itemVariants}
								className="relative"
							>
								{/* Timeline dot */}
								<div className={`absolute left-8 top-10 w-3 h-3 ${exp.dotColor} rounded-full -translate-x-1/2 ring-4 ring-white hidden md:block z-10`} />

								<div className="md:ml-16 group">
									<div className="bg-white rounded-2xl p-8 shadow-soft border border-slate-100 hover:shadow-soft-lg hover:border-slate-200 transition-all duration-500">
										{/* Header */}
										<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
											<div className="flex items-start gap-4">
												<div className={`p-3 bg-gradient-to-br ${exp.gradient} rounded-xl shadow-sm shrink-0`}>
													<Briefcase className="w-5 h-5 text-white" />
												</div>
												<div>
													<h3 className="text-xl font-bold text-slate-900">
														{exp.title}
													</h3>
													<p className={`text-lg font-semibold ${exp.accentColor}`}>
														{exp.company}
													</p>
												</div>
											</div>
											<div className="flex flex-col items-end gap-1 text-sm text-slate-500 shrink-0">
												<span className="inline-flex items-center gap-1.5">
													<Calendar className="w-3.5 h-3.5" />
													{exp.duration}
												</span>
												<span className="inline-flex items-center gap-1.5">
													<MapPin className="w-3.5 h-3.5" />
													{exp.location}
												</span>
											</div>
										</div>

										{/* Highlights */}
										<ul className="space-y-3">
											{exp.highlights.map((highlight, hIndex) => (
												<li
													key={hIndex}
													className="flex items-start gap-3 text-slate-600"
												>
													<span className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.gradient} shrink-0`} />
													<span className="leading-relaxed">{highlight}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
