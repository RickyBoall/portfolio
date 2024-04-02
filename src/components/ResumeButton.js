import { motion } from "framer-motion";

export default function ResumeButton() {
    function handleClick() {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
    
    return (
        <div onClick={handleClick} className="flex mr-10 items-center justify-center bg-teal-500 rounded-lg h-10 min-w-32 hover:bg-zinc-800 hover:text-teal-500 text-zinc-900 cursor-pointer duration-200" >
            <p className="font-bold text-lg"> {"Resume ->"} </p>
        </div>
    )
}