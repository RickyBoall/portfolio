import { motion, useAnimationControls, useInView } from "framer-motion"
import { AnimatedDiv, AnimatedHoverable, AnimatedIcons } from "@/components"
import Image from "next/image"
import { useRef } from "react";

export default function About() {

    return (
        <div className="flex flex-col mx-[10vw] space-y-4 min-h-[80vh] ">
            <AnimatedDiv delay={0.2} className={"mt-[10vh] w-full"}>
                <p className="text-indigo-500 text-6xl pb-4 mb-8 border-b-4 border-neutral-400"> About me </p>
            </AnimatedDiv>
            <div className="flex flex-col lg:flex-row lg:space-x-8">
                <div className="flex flex-col min-w-[40vw]">
                    <div className="flex flex-col lg:max-w-[40vw] justify-center">
                        <AnimatedDiv delay={0.3}>
                            <p className="text-neutral-300 text-xl leading-7"> I am a 23 year old Freelance Full Stack Developer with a passion for exploring and innovating with new technologies. My experience includes spearheading projects utilizing frameworks such as Django and React.js, where I've demonstrated my ability to lead teams, manage projects, and foster collaboration to achieve exceptional results.</p>
                        </AnimatedDiv>
                        <AnimatedDiv delay={0.4}>
                            <p className="text-neutral-300 text-xl leading-7 pt-4"> When I'm not spending time coding, I like to keep myself active with things such as weightlifting at the gym, skateboarding and working on my car! </p>
                        </AnimatedDiv>
                    </div>
                </div>
                <div className="lg:max-w-[40vw] pt-12 lg:pt-0 text-indigo-950 font-bold">
                    <AnimatedDiv delay={0.4} className={"lg:hidden"}>
                        <p className=" text-indigo-500 text-4xl pb-4 mb-8 border-neutral-400">  My Skills </p>
                    </AnimatedDiv>
                    <div className="flex flex-wrap gap-4 text-xl">
                        <AnimatedDiv delay={0.5}>  
                            <div className="bg-indigo-400  rounded-lg p-2"> JavaScript </div>
                        </AnimatedDiv>
                        <AnimatedDiv delay={0.5}>  
                            <div className="bg-indigo-400  rounded-lg p-2"> Python </div>
                        </AnimatedDiv>
                        <AnimatedDiv delay={0.5}>  
                            <div className="bg-indigo-400  rounded-lg p-2"> PostgreSQL </div>
                        </AnimatedDiv>
                        <AnimatedDiv delay={0.5}>  
                            <div className="bg-indigo-400  rounded-lg p-2"> Java </div>
                        </AnimatedDiv>
                        <AnimatedDiv delay={0.5}>  
                            <div className="bg-indigo-400  rounded-lg p-2"> React </div>
                        </AnimatedDiv>
                        <AnimatedDiv delay={0.6}>  
                            <div className="bg-indigo-400  rounded-lg p-2"> Django </div>
                        </AnimatedDiv>
                        <AnimatedDiv delay={0.6}>  
                            <div className="bg-indigo-400  rounded-lg p-2"> Next.js </div>
                        </AnimatedDiv>
                        <AnimatedDiv delay={0.6}>  
                            <div className="bg-indigo-400  rounded-lg p-2"> SpringBoot </div>
                        </AnimatedDiv>
                        <AnimatedDiv delay={0.6}>  
                            <div className="bg-indigo-400  rounded-lg p-2"> HTML/CSS </div>
                        </AnimatedDiv>
                        <AnimatedDiv delay={0.6}>  
                            <div className="bg-indigo-400  rounded-lg p-2"> TailwindCSS </div>
                        </AnimatedDiv>
                        <AnimatedDiv delay={0.6}>
                            <div className="bg-indigo-400  rounded-lg p-2"> Bootstrap </div>
                        </AnimatedDiv>
                        <AnimatedDiv delay={0.6}>
                            <div className="bg-indigo-400  rounded-lg p-2"> Figma </div>   
                        </AnimatedDiv>
                        <AnimatedDiv delay={0.6}>
                            <div className="bg-indigo-400  rounded-lg p-2"> Bootstrap </div>   
                        </AnimatedDiv>
                        <AnimatedDiv delay={0.7}>
                            <div className="bg-indigo-400  rounded-lg p-2"> Netlify </div>   
                        </AnimatedDiv>
                        <AnimatedDiv delay={0.7}>
                            <div className="bg-indigo-400  rounded-lg p-2"> GitHub </div>   
                        </AnimatedDiv>
                        <AnimatedDiv delay={0.7}>
                            <div className="bg-indigo-400  rounded-lg p-2"> Docker </div>
                        </AnimatedDiv>
                        <AnimatedDiv delay={0.7}>
                            <div className="bg-indigo-400  rounded-lg p-2"> BitBucket </div> 
                        </AnimatedDiv>
                        <AnimatedDiv delay={0.7}>
                            <div className="bg-indigo-400  rounded-lg p-2"> Jira </div>  
                        </AnimatedDiv>
                        <AnimatedDiv delay={0.7}>
                            <div className="bg-indigo-400  rounded-lg p-2"> Microsoft Azure </div>
                        </AnimatedDiv>
                        <AnimatedDiv delay={0.7}>
                            <div className="bg-indigo-400  rounded-lg p-2"> Amazon Web Services </div>
                        </AnimatedDiv>
                    </div>
                </div>
            </div>
        </div>
    )
}