import { motion, useAnimate, useInView } from "framer-motion"
import { AnimatedDiv } from "@/components"

export default function Welcome({ handleClick }) {

    return (
        <div className="flex flex-col ml-[10vw] space-y-4 snap-start min-h-screen -pt-8 justify-center mb-12">
            <AnimatedDiv delay={0.2}>
                <p className="text-teal-500 text-2xl"> Hello, my name is </p>
            </AnimatedDiv>
            <AnimatedDiv delay={0.3}>
                <p className="text-teal-50 text-8xl"> Sukhraj Boall. </p>
            </AnimatedDiv>
            <AnimatedDiv delay={0.4}>
                <p className="text-teal-500 text-4xl"> I develop fullstack solutions or something. </p>
            </AnimatedDiv>
            {/* <motion.div className="w-min" initial={{ opacity: 0, z: -500, x: -500, rotate: 6000, scale: 0.1 }} transition={{ delay: 2, duration: 1 }} animate={{ opacity: 1, y: 0, x:0, rotate: [0, 270, 0, 270, 0, 270, 0, 270, 0], scale: [1, 2, 2, 3, 1, 3, 1] }}>
                <p className="text-teal-500 text-8xl"> KACHOW </p>
            </motion.div> */}
            <AnimatedDiv delay={0.5}>
                <div onClick={handleClick} className="flex mt-8 items-center justify-center w-64 h-12 border-teal-500 border-2 rounded-lg hover:bg-teal-500 hover:text-zinc-900 text-teal-500 duration-200 cursor-pointer">
                    <p className=" text-2xl"> {"Learn More ->"} </p>
                </div>
            </AnimatedDiv>
        </div>
    )
}