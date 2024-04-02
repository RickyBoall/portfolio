import { motion, useAnimationControls, useInView } from "framer-motion"
import { useEffect, useRef } from "react";

export default function AnimatedHoverable({ d, viewBox, delay }) {
    const ref = useRef(null);
    const inView = useInView(ref);
    const animate = useAnimationControls();
    const animateTooltip = useAnimationControls();
    

    const variants = {
        active: {
            fill: ["#000000", "#14b8a6", "#000000"],
            transition: { delay: delay + 0.1, duration: 0.8 }
        },
        initial: { fill: "#000000" },
        hover: {
            fill: "#14b8a6",
            transition: { duration: 0.8 }
        },
        initialTooltip: {
            opacity: 0
        },
        activeTooltip: {
            opacity: 1
        }
    }

    useEffect(() => {
        if (inView) {
            animate.start("active")
        } else {
            animate.start('initial')
        }
    }, [inView])

    function onHover() {
        animate.start('hover')
        animateTooltip.start("activeTooltip");
    }
    
    function stopHover() {
        animate.start('initial')
        animateTooltip.start("initialTooltip");
    }

    return (
        <div ref={ref} onMouseEnter={onHover} onMouseLeave={stopHover} className="flex flex-col items-center justify-center w-32 h-20 rounded-lg hover:scale-125 transition-transform">
            <svg width="64px" height="64px" viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path initial="initial" animate={animate} variants={variants} d={d} />
            </svg>
        </div>
    )
}