'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';

/* Reusable counter that animates from `from` → `to` when visible */
function Counter({ from = 0, to = 100, duration = 2, suffix = '+', className = '' }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.6 });

    const mv = useMotionValue(from);
    const [val, setVal] = useState(from);

    useEffect(() => {
        if (!inView) return;
        const controls = animate(mv, to, {
            duration,
            ease: 'easeOut',
            onUpdate: v => setVal(Math.floor(v)),
        });
        return () => controls.stop();
    }, [inView, to, duration, mv]);

    return (
        <span ref={ref} className={className}>
            {val.toLocaleString()}
            {suffix}
        </span>
    );
}

export default function Impact() {
    return (
        <section className="relative overflow-hidden">
            {/* gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-500 to-cyan-500 " />
            <div className="px-6 md:px-16 lg:px-32">
                <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-white">
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Our Impact</h2>
                        <p className="mx-auto mt-3 max-w-2xl text-white/90 text-base sm:text-lg">
                            Transforming careers and organisations worldwide through professional development.
                        </p>
                    </div>

                    {/* cards */}
                    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* Organisations Trained */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6 }}
                            className="rounded-2xl bg-white/10 p-8 backdrop-blur-md ring-1 ring-white/30"
                        >
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                                {/* building icon */}
                                <svg width="22" height="22" viewBox="0 0 24 24" className="">
                                    <path fill="currentColor" d="M3 21V5a2 2 0 0 1 2-2h6v18H3Zm10 0V9h6a2 2 0 0 1 2 2v10h-8ZM7 7h2v2H7V7Zm0 4h2v2H7v-2Zm0 4h2v2H7v-2Zm8 0h2v2h-2v-2Zm0-4h2v2h-2v-2Z" />
                                </svg>
                            </div>

                            <div className="text-center">
                                <div className="text-5xl sm:text-6xl font-extrabold">
                                    <Counter to={50} duration={1.6} />
                                </div>
                                <h3 className="mt-2 text-lg sm:text-xl font-semibold">Organisations Trained</h3>
                                <p className="mt-2 text-white/80">
                                    Helping companies transform their workforce capabilities
                                </p>
                            </div>
                        </motion.div>

                        {/* Students Enrolled */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="rounded-2xl bg-white/10 p-8 backdrop-blur-md ring-1 ring-white/30"
                        >
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                                {/* graduation cap icon */}
                                <svg width="22" height="22" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="m12 3l10 5l-10 5L2 8l10-5Zm0 7.2L18.9 8L12 4.8L5.1 8L12 10.2ZM4 10.9l8 4l8-4V14l-8 4l-8-4v-3.1Z" />
                                </svg>
                            </div>

                            <div className="text-center">
                                <div className="text-5xl sm:text-6xl font-extrabold">
                                    <Counter to={2000} duration={2} />
                                </div>
                                <h3 className="mt-2 text-lg sm:text-xl font-semibold">Students Enrolled</h3>
                                <p className="mt-2 text-white/80">
                                    Professionals who have advanced their careers with us
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
