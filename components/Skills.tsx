"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Database, Search, Wrench, TestTube, Brain } from "lucide-react";

const skillCategories = [
	{
		name: "Languages & Frameworks",
		icon: Code2,
		skills: [
			"C++",
			"Java",
			"Spring Boot",
			"JavaScript",
			"TypeScript",
			"React",
			"Next.js",
			"Python",
		],
		gradient: "from-indigo-500 to-blue-500",
		bgGradient: "from-indigo-50 to-blue-50",
		borderColor: "border-indigo-100",
		tagBg: "bg-indigo-50 text-indigo-700 border-indigo-100",
	},
	{
		name: "Databases & Storage",
		icon: Database,
		skills: ["PostgreSQL", "MySQL", "MongoDB", "Couchbase", "Redis"],
		gradient: "from-emerald-500 to-teal-500",
		bgGradient: "from-emerald-50 to-teal-50",
		borderColor: "border-emerald-100",
		tagBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
	},
	{
		name: "Search, Messaging & Caching",
		icon: Search,
		skills: ["Elasticsearch", "RabbitMQ", "Redis", "Kafka"],
		gradient: "from-purple-500 to-pink-500",
		bgGradient: "from-purple-50 to-pink-50",
		borderColor: "border-purple-100",
		tagBg: "bg-purple-50 text-purple-700 border-purple-100",
	},
	{
		name: "Tools & DevOps",
		icon: Wrench,
		skills: [
			"Git",
			"GitHub",
			"Docker",
			"Jenkins",
			"CI/CD",
			"LaunchDarkly",
			"Datadog",
			"Postman",
		],
		gradient: "from-orange-500 to-amber-500",
		bgGradient: "from-orange-50 to-amber-50",
		borderColor: "border-orange-100",
		tagBg: "bg-orange-50 text-orange-700 border-orange-100",
	},
	{
		name: "Testing & Quality",
		icon: TestTube,
		skills: ["Playwright (E2E)", "JUnit", "Mockito", "API Testing"],
		gradient: "from-cyan-500 to-blue-500",
		bgGradient: "from-cyan-50 to-blue-50",
		borderColor: "border-cyan-100",
		tagBg: "bg-cyan-50 text-cyan-700 border-cyan-100",
	},
	{
		name: "Core CS Subjects",
		icon: Brain,
		skills: [
			"Data Structures",
			"Algorithms",
			"OOP",
			"Operating Systems",
			"DBMS",
			"System Design",
		],
		gradient: "from-rose-500 to-pink-500",
		bgGradient: "from-rose-50 to-pink-50",
		borderColor: "border-rose-100",
		tagBg: "bg-rose-50 text-rose-700 border-rose-100",
	},
] as const;

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.1 },
	},
} as const;

const itemVariants = {
	hidden: { opacity: 0, y: 25 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
} as const;

export default function Skills() {
	const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

	return (
		<section id="skills" className="relative py-24 px-4 overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/30 to-white" />
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

			{/* Decorative elements */}
			<div className="absolute top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-100/30 to-purple-100/30 rounded-full blur-3xl" />
			<div className="absolute bottom-20 -left-40 w-80 h-80 bg-gradient-to-br from-pink-100/30 to-rose-100/30 rounded-full blur-3xl" />

			<div className="relative max-w-6xl mx-auto" ref={ref}>
				{/* Section Header */}
				<motion.div
					variants={itemVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
					className="text-center mb-16"
				>
					<span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
						Tech Stack
					</span>
					<h2 className="text-4xl md:text-5xl font-bold text-slate-900">
						Skills &{" "}
						<span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
							Technologies
						</span>
					</h2>
				</motion.div>

				{/* Skills Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
					className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{skillCategories.map((category, index) => {
						const Icon = category.icon;
						return (
							<motion.div
								key={index}
								variants={itemVariants}
								whileHover={{ y: -4, transition: { duration: 0.2 } }}
								className="bg-white rounded-2xl p-6 shadow-soft border border-slate-100 hover:shadow-soft-lg transition-all duration-500 group"
							>
								{/* Category Header */}
								<div className="flex items-center gap-3 mb-5">
									<div
										className={`p-2.5 bg-gradient-to-br ${category.gradient} rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300`}
									>
										<Icon className="w-5 h-5 text-white" />
									</div>
									<h3 className="text-base font-bold text-slate-800">
										{category.name}
									</h3>
								</div>

								{/* Skills Tags */}
								<div className="flex flex-wrap gap-2">
									{category.skills.map((skill, sIndex) => (
										<motion.span
											key={sIndex}
											whileHover={{ scale: 1.05 }}
											className={`px-3 py-1.5 ${category.tagBg} rounded-lg text-sm font-medium border transition-all duration-200 hover:shadow-sm cursor-default`}
										>
											{skill}
										</motion.span>
									))}
								</div>
							</motion.div>
						);
					})}
				</motion.div>

				{/* Proficiency Highlights */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
					className="mt-12 grid md:grid-cols-3 gap-6"
				>
					{[
						{
							title: "Backend Development",
							description:
								"Spring Boot, REST APIs, Microservices, Database Design, Caching",
							gradient: "from-indigo-500 to-purple-500",
							bgGradient: "from-indigo-50 to-purple-50",
						},
						{
							title: "Frontend Development",
							description:
								"Next.js, React, TypeScript, Tailwind CSS, Responsive Design",
							gradient: "from-purple-500 to-pink-500",
							bgGradient: "from-purple-50 to-pink-50",
						},
						{
							title: "Problem Solving",
							description:
								"1300+ LeetCode problems, Competitive Programming, Algorithm Design",
							gradient: "from-emerald-500 to-teal-500",
							bgGradient: "from-emerald-50 to-teal-50",
						},
					].map((item, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className={`p-6 bg-gradient-to-br ${item.bgGradient} rounded-2xl border border-slate-100`}
						>
							<div
								className={`w-12 h-1 bg-gradient-to-r ${item.gradient} rounded-full mb-4`}
							/>
							<h4 className="font-bold text-lg text-slate-800 mb-2">
								{item.title}
							</h4>
							<p className="text-slate-600 text-sm leading-relaxed">
								{item.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
