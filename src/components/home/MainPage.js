import { About, AnimatedDiv, Contact, Header } from "@/components";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function MainPage() {

    return (
        <div className="">
            <Header />
            <About />
            <Contact />
        </div>
    )
}