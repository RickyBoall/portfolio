"use client"

import { useAnimationControls, useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AnimatedDiv, ResumeButton } from "@/components";

export default function Header() {
    const ref = useRef(null);
    const inView = useInView(ref);
    const animate = useAnimationControls();
    const [x, setX] = useState();
    const [y, setY] = useState();
    useEffect(
        () => {
        const update = (e) => {
            setX(e.x)
            setY(e.y)
        }
        window.addEventListener('mousemove', update)
        window.addEventListener('touchmove', update)
        return () => {
            window.removeEventListener('mousemove', update)
            window.removeEventListener('touchmove', update)
        }
        },
        [setX, setY]
    )

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
        <>
        {/* <p> {x} {y} </p> */}
            {/* <div className="absolute invisible lg:visible w-64 h-64 bg-zinc-700 rounded-full blur-3xl opacity-50 z-0"></div> */}
            <motion.div className="sticky top-0 z-50 x" initial="initial" animate={animate} variants={variants}>
                <div ref={ref} className="overflow-hidden w-full bg-neutral-900 bg-opacity-50 z-0 backdrop-blur-sm">
                    <AnimatedDiv delay={1}>
                        <div className="flex flex-row justify-between items-center h-16 opacity-100">
                            <div className="flex justify-center items-center w-8 h-8 bg-indigo-500 rounded-lg ml-8">
                                <p className="text-zinc-900 font-bold text-lg">S</p>
                            </div>
                            <ResumeButton />
                        </div>
                    </AnimatedDiv>
                </div>
            </motion.div>
        </>
    )
}