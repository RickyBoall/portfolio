import FunnyButton from "../FunnyButton";
import AnimatedDiv from "../global/AnimatedDiv";
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import AnimatedHoverable from "../global/AnimatedHoverable";

export default function Contact() {

    return (
        <div className="flex flex-col mx-[10vw] space-y-4 min-h-[90vh]">
            <AnimatedDiv delay={0.2} className={"mt-[10vh] w-full"}>
                <p className="text-indigo-500 text-6xl pb-4 mb-8 border-b-4 border-neutral-400"> Lets connect! </p>
            </AnimatedDiv>
            <div className="flex lg:flex-row flex-col justify-between">
                <div className="flex flex-col">
                    <div className="flex flex-col lg:max-w-[40vw] justify-center">
                        <AnimatedDiv delay={0.4}>
                            <p className="text-neutral-300 text-xl pb-6 leading-normal space-y-2"> Have any questions? Feel free to reach out to me through any of the following methods below, or fill out the form!   </p>
                        </AnimatedDiv>
                        <AnimatedDiv delay={0.4}>  
                            <p className="text-neutral-300 text-xl leading-7"> I'd love to hear about your project and how I can contribute. I aim to respond back within 24 hours, so don't hesitate! </p>
                        </AnimatedDiv>
                        <div className="hidden lg:flex flex-row lg:px-12 justify-between">
                            <AnimatedDiv delay={0.6}>
                                <div className="pt-10 cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/rickyboall")}>
                                    <AnimatedHoverable delay={0.6} d={"M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"} viewBox={"0 0 32 32"} />
                                </div>
                            </AnimatedDiv>
                            <AnimatedDiv delay={0.7}>
                                <div className="pt-10 cursor-pointer" onClick={() => window.open("https://github.com/rickyboall/")}>
                                    <AnimatedHoverable delay={0.7} d={"M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"} viewBox={"0 0 24 24"} />
                                </div>
                            </AnimatedDiv>
                            <AnimatedDiv delay={0.8}>
                                <div className="pt-10 cursor-pointer" onClick={() => window.open("mailto:rickyboall@gmail.com?subject=Inquiry")}>
                                    <AnimatedHoverable delay={0.8} d={"M440.917,67.925H71.083C31.827,67.925,0,99.752,0,139.008v233.984c0,39.256,31.827,71.083,71.083,71.083 h369.834c39.255,0,71.083-31.827,71.083-71.083V139.008C512,99.752,480.172,67.925,440.917,67.925z M178.166,321.72l-99.54,84.92 c-7.021,5.992-17.576,5.159-23.567-1.869c-5.992-7.021-5.159-17.576,1.87-23.567l99.54-84.92c7.02-5.992,17.574-5.159,23.566,1.87 C186.027,305.174,185.194,315.729,178.166,321.72z M256,289.436c-13.314-0.033-26.22-4.457-36.31-13.183l0.008,0.008l-0.032-0.024 c0.008,0.008,0.017,0.008,0.024,0.016L66.962,143.694c-6.98-6.058-7.723-16.612-1.674-23.583c6.057-6.98,16.612-7.723,23.582-1.674 l152.771,132.592c3.265,2.906,8.645,5.004,14.359,4.971c5.706,0.017,10.995-2.024,14.44-5.028l0.074-0.065l152.615-132.469 c6.971-6.049,17.526-5.306,23.583,1.674c6.048,6.97,5.306,17.525-1.674,23.583l-152.77,132.599 C282.211,284.929,269.322,289.419,256,289.436z M456.948,404.771c-5.992,7.028-16.547,7.861-23.566,1.869l-99.54-84.92 c-7.028-5.992-7.861-16.546-1.869-23.566c5.991-7.029,16.546-7.861,23.566-1.87l99.54,84.92 C462.107,387.195,462.94,397.75,456.948,404.771z"} viewBox={"0 0 512 512"} />
                                </div>
                            </AnimatedDiv>
                        </div>
                    </div>
                </div>
                <div className="pt-12 lg:pb-12 lg:pt-0">
                    <div className="flex flex-row space-x-4">
                        <AnimatedDiv delay={0.4} className="w-full">
                            <div class="mb-6">
                                <label htmlF or="name" class="block mb-2 text-sm font-medium text-indigo-500 dark:text-white">Name</label>
                                <input type="text" id="name" class=" bg-zinc-400 rounded-lg w-full p-2 text-zinc-900" />
                            </div>
                        </AnimatedDiv>
                        <AnimatedDiv delay={0.4} className="w-full">
                            <div class="mb-6">
                                <label htmlFor="email" class="block mb-2 text-sm font-medium text-indigo-500 dark:text-white">Email</label>
                                <input type="email" id="email" class=" bg-zinc-400 rounded-lg lg w-full p-2 text-zinc-900" />
                            </div>
                        </AnimatedDiv>
                    </div>
                    <div>
                        <AnimatedDiv delay={0.6} className="w-full">
                            <div class="mb-6">
                                <label htmlFor="message" class="block mb-2 text-sm font-medium text-indigo-500 dark:text-white">Message</label>
                                <textarea id="message" class=" bg-zinc-400 rounded-lg p-2 w-full text-zinc-900 h-[20vh]" />
                            </div>
                        </AnimatedDiv>
                    </div>
                    <div className="flex justify-end">
                        <FunnyButton />
                    </div>
                </div>
                <div className="lg:hidden flex flex-row justify-between pb-12">
                    <AnimatedDiv delay={0.6}>
                        <div className="pt-10 cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/rickyboall")}>
                            <AnimatedHoverable delay={0.6} d={"M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"} viewBox={"0 0 32 32"} />
                        </div>
                    </AnimatedDiv>
                    <AnimatedDiv delay={0.7}>
                        <div className="pt-10 cursor-pointer" onClick={() => window.open("https://github.com/rickyboall/")}>
                            <AnimatedHoverable delay={0.7} d={"M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"} viewBox={"0 0 24 24"} />
                        </div>
                    </AnimatedDiv>
                    <AnimatedDiv delay={0.8}>
                        <div className="pt-10 cursor-pointer" onClick={() => window.open("mailto:rickyboall@gmail.com?subject=Inquiry")}>
                            <AnimatedHoverable delay={0.8} d={"M440.917,67.925H71.083C31.827,67.925,0,99.752,0,139.008v233.984c0,39.256,31.827,71.083,71.083,71.083 h369.834c39.255,0,71.083-31.827,71.083-71.083V139.008C512,99.752,480.172,67.925,440.917,67.925z M178.166,321.72l-99.54,84.92 c-7.021,5.992-17.576,5.159-23.567-1.869c-5.992-7.021-5.159-17.576,1.87-23.567l99.54-84.92c7.02-5.992,17.574-5.159,23.566,1.87 C186.027,305.174,185.194,315.729,178.166,321.72z M256,289.436c-13.314-0.033-26.22-4.457-36.31-13.183l0.008,0.008l-0.032-0.024 c0.008,0.008,0.017,0.008,0.024,0.016L66.962,143.694c-6.98-6.058-7.723-16.612-1.674-23.583c6.057-6.98,16.612-7.723,23.582-1.674 l152.771,132.592c3.265,2.906,8.645,5.004,14.359,4.971c5.706,0.017,10.995-2.024,14.44-5.028l0.074-0.065l152.615-132.469 c6.971-6.049,17.526-5.306,23.583,1.674c6.048,6.97,5.306,17.525-1.674,23.583l-152.77,132.599 C282.211,284.929,269.322,289.419,256,289.436z M456.948,404.771c-5.992,7.028-16.547,7.861-23.566,1.869l-99.54-84.92 c-7.028-5.992-7.861-16.546-1.869-23.566c5.991-7.029,16.546-7.861,23.566-1.87l99.54,84.92 C462.107,387.195,462.94,397.75,456.948,404.771z"} viewBox={"0 0 512 512"} />
                        </div>
                    </AnimatedDiv>
                </div>
            </div>
        </div>
    )
}