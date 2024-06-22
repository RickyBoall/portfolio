import { motion, useInView, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimatedDiv({ children, delay, className, outroAnimation }) {
    const ref = useRef(null);
    const inView = useInView(ref);
    const animate = useAnimationControls();

    const variants = {
        active: {
            opacity: 1, y: 0,
            transition: { delay: delay ? delay : 0, type: "spring", bounce: 0.6, duration: 1}
        },
        initial: { opacity: 0, y: -20 },
    }

    useEffect(() => {
        if (inView) {
            animate.start("active")
        } else {
            if (outroAnimation == true) {
                animate.start('initial')
            }
        }
    }, [inView])

    return (
        <div ref={ref} className={className}>
            <motion.div id="animated-div" initial="initial" animate={animate} variants={variants} transition={{ type: ""}} >
                {children}
            </motion.div>
        </div>
    )
}