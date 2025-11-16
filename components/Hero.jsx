'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { assets } from '@/assets/assets';

export default function Hero() {
    const prefersReducedMotion = useReducedMotion();

    const float = prefersReducedMotion
        ? {}
        : { y: [-6, 6], transition: { duration: 4, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' } };

    const chip1 = prefersReducedMotion
        ? {}
        : { y: [-2, 2], transition: { duration: 2.2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' } };

    const chip2 = prefersReducedMotion
        ? {}
        : { y: [-3, 3], transition: { duration: 2.6, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' } };

    const fade = (delay = 0) => ({
        initial: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
        animate: prefersReducedMotion
            ? { opacity: 1, transition: { duration: 0.2, delay } }
            : { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
    });

    return (
        <section className="relative isolate">
            <div className="px-6 md:px-16 lg:px-32">
                {/* background wash, adapts well on all sizes */}


                <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                        {/* LEFT: text */}
                        <div>
                            <motion.h1
                                {...fade(0)}
                                className="
                text-balance font-extrabold tracking-tight
                text-4xl xs:text-[2.625rem] sm:text-5xl md:text-6xl lg:text-7xl
                leading-tight
              "
                            >
                                Learn. <span className="text-blue-600">Grow.</span> Lead.
                            </motion.h1>

                            <motion.p
                                {...fade(0.1)}
                                className="mt-4 sm:mt-5 max-w-prose text-pretty text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300"
                            >
                                Expert-led courses in Project Management, Strategy, and Continuous Improvement —
                                empowering individuals and organisations to achieve more.
                            </motion.p>

                            {/* CTA: stacks on mobile, inline from sm+ */}
                            <motion.div
                                {...fade(0.2)}
                                className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
                            >
                                <a
                                    href="#courses"
                                    className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:shadow-blue-600/35 w-full sm:w-auto"
                                >
                                    Browse Courses
                                    <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </a>

                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <button className="rounded-xl border border-slate-300 px-4 py-3 text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 w-full sm:w-auto">
                                        For Individuals
                                    </button>
                                    <button className="rounded-xl border border-slate-300 px-4 py-3 text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 w-full sm:w-auto">
                                        For Organisations
                                    </button>
                                </div>
                            </motion.div>

                            {/* Stats: becomes 3-up only when there’s space */}
                            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                                <motion.div {...fade(0.25)} className="rounded-2xl bg-white/90 p-5 shadow-md ring-1 ring-slate-100 dark:bg-slate-900/60 dark:ring-slate-800">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/40">
                                        <svg width="20" height="20" viewBox="0 0 24 24" className="text-blue-600">
                                            <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m0 2c-4.33 0-8 2.17-8 5v1h16v-1c0-2.83-3.67-5-8-5" />
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-2xl font-semibold">5000+</div>
                                    <div className="text-sm text-slate-500 dark:text-slate-400">Students</div>
                                </motion.div>

                                <motion.div {...fade(0.32)} className="rounded-2xl bg-white/90 p-5 shadow-md ring-1 ring-slate-100 dark:bg-slate-900/60 dark:ring-slate-800">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/40">
                                        <svg width="20" height="20" viewBox="0 0 24 24" className="text-blue-600">
                                            <path fill="currentColor" d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z" />
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-2xl font-semibold">4.9/5</div>
                                    <div className="text-sm text-slate-500 dark:text-slate-400">Rating</div>
                                </motion.div>

                                <motion.div {...fade(0.39)} className="rounded-2xl bg-white/90 p-5 shadow-md ring-1 ring-slate-100 dark:bg-slate-900/60 dark:ring-slate-800">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/40">
                                        <svg width="20" height="20" viewBox="0 0 24 24" className="text-blue-600">
                                            <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2m7.93 9h-3.05a16.28 16.28 0 0 0-1.24-5.04A8.007 8.007 0 0 1 19.93 11M12 4a14.3 14.3 0 0 1 1.76 6h-3.52A14.3 14.3 0 0 1 12 4M4.07 13h3.05a16.28 16.28 0 0 0 1.24 5.04A8.007 8.007 0 0 1 4.07 13m3.05-2H4.07A8.007 8.007 0 0 1 8.36 5.96A16.28 16.28 0 0 0 7.12 11M12 20a14.3 14.3 0 0 1-1.76-6h3.52A14.3 14.3 0 0 1 12 20m3.63-3.96A16.28 16.28 0 0 0 16.88 13h3.05a8.007 8.007 0 0 1-4.3 3.04Z" />
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-2xl font-semibold">Global</div>
                                    <div className="text-sm text-slate-500 dark:text-slate-400">Recognition</div>
                                </motion.div>
                            </div>
                        </div>

                        {/* RIGHT: image block */}
                        <motion.div
                            className="relative"
                            animate={float}
                        >
                            {/* keep consistent aspect ratio on every screen */}
                            <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 aspect-[16/11] w-full">
                                <Image
                                    src={assets.fundamental}
                                    alt="Course preview"
                                    fill
                                    priority
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>

                            {/* Floating chips: hide on the very smallest screens to prevent overlap */}
                            <motion.div
                                className="hidden xs:flex absolute right-3 top-3 rounded-xl bg-white px-3 py-2 text-sm shadow-md ring-1 ring-slate-100 dark:bg-slate-900/70 dark:ring-slate-800"
                                animate={chip1}
                            >
                                📚 <span className="ml-1 font-medium">50+ Courses</span>
                            </motion.div>

                            <motion.div
                                className="hidden sm:flex absolute -bottom-5 left-6 rounded-xl bg-white px-3 py-2 text-sm shadow-lg ring-1 ring-slate-100 dark:bg-slate-900/70 dark:ring-slate-800"
                                animate={chip2}
                            >
                                ⚡ <span className="ml-1 font-medium">AI-Powered</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
