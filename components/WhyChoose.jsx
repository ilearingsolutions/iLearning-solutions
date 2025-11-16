'use client';

import { motion } from 'framer-motion';

const Card = ({ icon, title, text, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -3 }}
        className="rounded-2xl bg-white/90 p-6 sm:p-7 shadow-md ring-1 ring-slate-100
               dark:bg-slate-900/60 dark:ring-slate-800"
    >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full
                    bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-sm">
            {icon}
        </div>
        <h3 className="mt-4 text-center text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-center text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {text}
        </p>
    </motion.div>
);

export default function WhyChoose() {
    return (
        <section className="relative">
            <div className="px-6 md:px-16 lg:px-32">
                <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                            Why Choose <span className="text-blue-600">iLearning Solutions?</span>
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300 text-base sm:text-lg">
                            We combine expert instruction with flexible learning to deliver results that matter.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        <Card
                            delay={0.05}
                            title="Flexible Learning"
                            text="Learn online, face-to-face, or hybrid. Study at your own pace with 24/7 access to materials."
                            icon={
                                /* clock icon */
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="9"></circle>
                                    <path d="M12 7v5l3 3"></path>
                                </svg>
                            }
                        />
                        <Card
                            delay={0.12}
                            title="Expert Instructors"
                            text="Led by industry professionals like Dr. Nick Hadjinicolaou with 20+ years of experience."
                            icon={
                                /* users icon */
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            }
                        />
                        <Card
                            delay={0.19}
                            title="Recognised Certifications"
                            text="Globally recognised certifications that boost your career prospects and credibility."
                            icon={
                                /* ribbon icon */
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="8" r="5"></circle>
                                    <path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5"></path>
                                </svg>
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
