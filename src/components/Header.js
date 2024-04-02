"use client"

import { useAnimationControls, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { AnimatedDiv, ResumeButton } from "@/components";

export default function Header() {
    const ref = useRef(null);
    const inView = useInView(ref);
    const animate = useAnimationControls();

    const variants = {
        active: {
            opacity: 1, y: 0,
            transition: { delay: 0.5, type: "spring", bounce: 0 }
        },
        initial: { opacity: 0, y: -20 },
    }

    useEffect(() => {
        if (inView) {
            animate.start("active")
        } else {
            animate.start('initial')
        }
    }, [inView])

    return (
        <motion.div className="sticky top-0" initial="initial" animate={animate} variants={variants}>
            <div ref={ref} className="overflow-hidden w-full bg-zinc-700 bg-opacity-50">
                <AnimatedDiv delay={1}>
                    <div className="flex flex-row justify-between items-center h-16 opacity-100">
                        <div className="flex justify-center items-center w-8 h-8 bg-teal-500 rounded-lg ml-8">
                            <p className="text-zinc-900 font-bold text-lg">S</p>
                        </div>
                        <ResumeButton />
                    </div>
                </AnimatedDiv>
            </div>
        </motion.div>
    )
}