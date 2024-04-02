import FunnyButton from "../FunnyButton";
import AnimatedDiv from "../global/AnimatedDiv";

export default function Contact() {

    return (
        <div className="flex flex-col ml-[10vw] space-y-4 min-h-[100vh] snap-start">
            <div className="flex flex-col h-[50vh] mt-[20vh] w-[50vw]">
                <AnimatedDiv delay={0.2}>
                    <p className="text-teal-500 text-6xl pb-10"> Contact me </p>
                </AnimatedDiv>
                <div className="grid grid-cols-2 gap-12">
                    <AnimatedDiv delay={0.4}>
                        <div class="mb-6">
                            <label for="name" class="block mb-2 text-sm font-medium text-teal-500 dark:text-white">Name</label>
                            <input type="text" id="name" class=" bg-zinc-400 rounded-lg w-full p-2 text-zinc-900" />
                        </div>
                    </AnimatedDiv>
                    <AnimatedDiv delay={0.4}>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-teal-500 dark:text-white">Email</label>
                            <input type="email" id="email" class=" bg-zinc-400 rounded-lg lg w-full p-2 text-zinc-900" />
                        </div>
                    </AnimatedDiv>
                </div>
                <div>
                    <AnimatedDiv delay={0.6}>
                        <div class="mb-6">
                            <label for="message" class="block mb-2 text-sm font-medium text-teal-500 dark:text-white">Message</label>
                            <textarea id="message" class=" bg-zinc-400 rounded-lg p-2 w-full text-zinc-900 h-[20vh]" />
                        </div>
                    </AnimatedDiv>
                </div>
                <div className="flex justify-end">
                    <FunnyButton />
                </div>
            </div>
        </div>
    )
}