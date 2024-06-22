import FunnyButton from "../FunnyButton";
import AnimatedDiv from "../global/AnimatedDiv";
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import AnimatedHoverable from "../global/AnimatedHoverable";
import Image from "next/image";

export default function Projects() {

    return (
        <div className="flex flex-col mx-[10vw] space-y-4 min-h-[80vh]">
            <AnimatedDiv delay={0.2} className={"mt-[10vh] w-full"}>
                <p className="text-indigo-500 text-6xl pb-4 mb-8 border-b-4 border-neutral-400"> Projects </p>
            </AnimatedDiv>
            <div className="flex lg:flex-row flex-col justify-between">
                <div className="flex flex-col lg:max-w-[35vw]">
                    <div className="flex flex-col lg:max-w-[40vw] justify-center">
                        <AnimatedDiv delay={0.3}>
                            <p className="text-neutral-500 font-bold text-2xl leading-7 pb-8"> 6 West Machining</p>
                            <div className="lg:hidden">
                                <Image src="/6westmachining.jpeg" width={600} height={500} />
                            </div>
                            {/* This includes designing a user friendly interface which lets customers contact the business and place orders. */}
                            <p className="text-neutral-200 text-lg leading-7 pt-12 lg:pt-0"> Creates a website for a machining company, tailored to showcase their information according to specific requirements. The goal is to provide an engaging and informative online presence that meets the company's needs and appeals to its target audience. </p>
                        </AnimatedDiv>
                    </div>
                    {/* <AnimatedIcons /> */}
                </div>
                <div className="hidden lg:block">
                    <Image src="/6westmachining.jpeg" width={600} height={500} />
                </div>
            </div>
        </div>
    )
}