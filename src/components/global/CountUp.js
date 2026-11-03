"use client"

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CountUp({ prefix = "", value, suffix = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const reduceMotion = useReducedMotion();
    // starts on the real number so it's correct before scripts load
    const [shown, setShown] = useState(value);

    useEffect(() => {
        if (!inView || reduceMotion) return;
        const controls = animate(0, value, {
            duration: 1.2,
            ease: "easeOut",
            onUpdate: (latest) => setShown(Math.round(latest)),
        });
        return () => controls.stop();
    }, [inView, reduceMotion, value]);

    return <span ref={ref} className="tabular-nums">{prefix}{shown}{suffix}</span>;
}
