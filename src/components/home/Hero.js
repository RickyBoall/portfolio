"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { profile, tracks } from "@/data/resume";
import AnimatedDiv from "../global/AnimatedDiv";
import CountUp from "../global/CountUp";

const ease = [0.22, 1, 0.36, 1];

export default function Hero({ track }) {
    const { title, intro, crossLink, resume, metrics } = tracks[track];
    const other = tracks[track === "dev" ? "pm" : "dev"];
    const words = profile.name.split(" ");

    return (
        <section aria-label="Introduction" className="pt-10 sm:pt-16">
            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight min-[360px]:text-5xl sm:text-6xl lg:text-7xl">
                {words.map((word, i) => (
                    <span key={i}>
                        <motion.span
                            className="reveal inline-block"
                            initial={{ opacity: 0, y: "0.4em" }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.05 * i, ease }}
                        >
                            {word}
                        </motion.span>
                        {i < words.length - 1 && " "}
                    </span>
                ))}
            </h1>

            <AnimatedDiv delay={0.25} className="mt-8 grid gap-6 sm:mt-12 lg:grid-cols-[4fr_1fr] lg:gap-12">
                {/* <p className="text-pretty text-2xl font-medium leading-snug tracking-tight text-accent sm:text-3xl lg:text-4xl">{title}</p> */}
                <div>
                    <p className="text-pretty text-lg leading-relaxed text-muted">{intro}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <a href="#work" className="inline-flex min-h-12 items-center rounded-full bg-accent px-6 font-semibold text-accent-ink transition-colors hover:bg-accent-hover">
                            See my work
                        </a>
                        <a href={resume} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-line px-6 font-semibold transition-colors hover:border-faint">
                            Open resume
                        </a>
                    </div>
                    <p className="mt-5 text-sm text-faint">
                        {crossLink.text}{" "}
                        <Link href={other.href} scroll={false} className="font-medium text-accent underline underline-offset-2">{crossLink.cta}</Link>.
                    </p>
                </div>
            </AnimatedDiv>

            {/* <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-y border-line py-8 sm:mt-16 md:grid-cols-4">
                {metrics.map(({ prefix, value, suffix, label }, i) => (
                    <AnimatedDiv key={label} delay={0.08 * i}>
                        <dt className="text-3xl font-semibold tracking-tight sm:text-4xl">
                            <CountUp prefix={prefix} value={value} suffix={suffix} />
                        </dt>
                        <dd className="mt-1 text-pretty text-sm leading-snug text-muted">{label}</dd>
                    </AnimatedDiv>
                ))}
            </dl> */}
        </section>
    );
}
