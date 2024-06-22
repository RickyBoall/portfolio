import { motion, useAnimate, useAnimationControls, useInView } from "framer-motion"
import { AnimatedDiv } from "@/components"

export default function Welcome({ handleClick }) {
    const animate = useAnimationControls();

    const variants = {
        exit: {
            opacity: 0, 
            x: 200,
        },
    }

    function handleTransition() {
        animate.start('exit').then(() => handleClick());
    }

    return (
        <div className="flex flex-col ml-[10vw] space-y-4 snap-start min-h-screen -pt-8 justify-center">
            <AnimatedDiv delay={0.2}>
                <motion.p animate={animate} variants={variants} className="text-indigo-500 text-4xl"> Hello, my name is </motion.p>
            </AnimatedDiv>
            <AnimatedDiv delay={0.3}>
                <motion.p animate={animate} variants={variants} className="text-indigo-200 text-8xl"> Sukhraj Boall. </motion.p>
            </AnimatedDiv>
            <AnimatedDiv delay={0.4}>
                <motion.p animate={animate} variants={variants} className="text-indigo-500 text-3xl"> I'm a recent graduate who has been <span className="text-indigo-200"> developing fullstack solutions </span> for startup companies. </motion.p>
            </AnimatedDiv>
            {/* <AnimatedDiv delay={0.4}>
                <p className="text-indigo-500 text-3xl"> I develop fullstack solutions or something. </p>
            </AnimatedDiv> */}
            {/* <motion.div className="w-min" initial={{ opacity: 0, z: -500, x: -500, rotate: 6000, scale: 0.1 }} transition={{ delay: 2, duration: 1 }} animate={{ opacity: 1, y: 0, x:0, rotate: [0, 270, 0, 270, 0, 270, 0, 270, 0], scale: [1, 2, 2, 3, 1, 3, 1] }}>
                <p className="text-indigo-500 text-8xl"> KACHOW </p>
            </motion.div> */}
            <AnimatedDiv delay={0.5}>
                <motion.div animate={animate} variants={variants} onClick={handleTransition} className="flex mt-8 items-center justify-center w-64 h-12 border-indigo-500 border-2 rounded-lg hover:bg-indigo-500 hover:text-zinc-900 text-indigo-500 duration-200 cursor-pointer">
                    <p className=" text-2xl"> {"Learn More ->"} </p>
                </motion.div>
            </AnimatedDiv>
        </div>
    )
}