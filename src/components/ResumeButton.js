import { motion } from "framer-motion";

export default function ResumeButton() {
    function handleClick() {
        window.open("/pdf/resume-sukhraj-boall.pdf");
    }
    
    return (
        <div onClick={handleClick} className="flex mr-10 items-center justify-center bg-indigo-500 rounded-lg h-10 min-w-32 hover:bg-zinc-800 hover:text-indigo-500 text-zinc-900 cursor-pointer duration-200" >
            <p className="font-bold text-lg"> {"Resume ->"} </p>
        </div>
    )
}