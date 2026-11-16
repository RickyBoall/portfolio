"use client"

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Section from "./Section";

const ease = [0.22, 1, 0.36, 1];
// each dot is 16px tall and sits 6px from the top of its entry
const DOT_CENTER = 14;

const list = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const track = { hidden: { scaleY: 0 }, show: { scaleY: 1, transition: { duration: 0.9, ease } } };
const entry = {
    hidden: { opacity: 0, x: -16 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease, delayChildren: 0.1 } },
};
// on phones, long entries collapse to a few lines and a handful of tags
const MOBILE_LINES = 3;
const MOBILE_TAGS = 5;

function useIsPhone() {
    const [phone, setPhone] = useState(false);
    useEffect(() => {
        const query = window.matchMedia("(max-width: 639px)");
        const update = () => setPhone(query.matches);
        update();
        query.addEventListener("change", update);
        return () => query.removeEventListener("change", update);
    }, []);
    return phone;
}

function JobDetails({ text, tags }) {
    const phone = useIsPhone();
    const [expanded, setExpanded] = useState(false);
    const [collapsedHeight, setCollapsedHeight] = useState(0);
    const textRef = useRef(null);

    useEffect(() => {
        if (!phone) return;
        const lineHeight = parseFloat(getComputedStyle(textRef.current).lineHeight);
        setCollapsedHeight(lineHeight * MOBILE_LINES);
    }, [phone]);

    const collapsed = phone && !expanded;
    const shownTags = collapsed ? tags.slice(0, MOBILE_TAGS) : tags;
    const hiddenCount = tags.length - MOBILE_TAGS;

    return (
        <>
            <div className="relative mt-3 max-w-2xl">
                <motion.div
                    className="overflow-hidden"
                    initial={false}
                    animate={{ height: collapsed && collapsedHeight ? collapsedHeight : "auto" }}
                    transition={{ duration: 0.45, ease }}
                >
                    <p ref={textRef} className="text-pretty leading-relaxed text-muted">{text}</p>
                </motion.div>
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-bg to-transparent"
                    initial={false}
                    animate={{ opacity: collapsed ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
                <AnimatePresence initial={false}>
                    {shownTags.map((tag, i) => (
                        <motion.li
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1, transition: { duration: 0.25, delay: 0.15 + Math.max(0, i - MOBILE_TAGS) * 0.04 } }}
                            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
                            className="rounded-full border border-line px-3 py-1 text-sm text-muted"
                        >
                            {tag}
                        </motion.li>
                    ))}
                    {collapsed && hiddenCount > 0 && (
                        <motion.li
                            key="more"
                            aria-hidden="true"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
                            exit={{ opacity: 0, transition: { duration: 0.1 } }}
                            className="rounded-full px-1 py-1 text-sm text-faint"
                        >
                            +{hiddenCount} more
                        </motion.li>
                    )}
                </AnimatePresence>
            </ul>
            {phone && (
                <motion.button
                    type="button"
                    onClick={() => setExpanded(!expanded)}
                    aria-expanded={expanded}
                    whileTap={{ scale: 0.96 }}
                    className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-accent bg-surface px-4 text-sm font-semibold text-accent transition-colors active:bg-accent active:text-accent-ink"
                >
                    {expanded ? "Show less" : "Read more"}
                    <motion.svg
                        aria-hidden="true"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={false}
                        animate={{ rotate: expanded ? 180 : 0 }}
                        transition={{ duration: 0.3, ease }}
                    >
                        <path d="M4 6l4 4 4-4" />
                    </motion.svg>
                </motion.button>
            )}
        </>
    );
}

const dot = {
    hidden: { scale: 0 },
    show: { scale: 1, transition: { type: "spring", stiffness: 400, damping: 18 } },
};

export default function Experience({ jobs }) {
    const containerRef = useRef(null);
    const itemRefs = useRef([]);
    const reduceMotion = useReducedMotion();
    const [line, setLine] = useState(null);
    const [reached, setReached] = useState(0);

    // the line runs from the first dot to the last, and fills as it passes 60% of the way down the screen
    const { scrollY } = useScroll();
    const progress = useMotionValue(0);
    const fill = useSpring(progress, { stiffness: 140, damping: 30, restDelta: 0.001 });

    useEffect(() => {
        function measure() {
            const tops = itemRefs.current.map((el) => el.offsetTop);
            const height = tops[tops.length - 1] - tops[0] || 1;
            setLine({ top: tops[0] + DOT_CENTER, height, stops: tops.map((top) => (top - tops[0]) / height) });
        }
        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [jobs]);

    function updateProgress() {
        if (!line) return;
        const lineTop = containerRef.current.getBoundingClientRect().top + line.top;
        const value = Math.min(1, Math.max(0, (window.innerHeight * 0.6 - lineTop) / line.height));
        progress.set(value);
        setReached(value > 0 ? line.stops.filter((stop) => stop <= value + 0.001).length : 0);
    }

    useMotionValueEvent(scrollY, "change", updateProgress);
    useEffect(() => {
        updateProgress();
        window.addEventListener("resize", updateProgress);
        return () => window.removeEventListener("resize", updateProgress);
    }, [line]);

    const lineStyle = line ? { top: line.top, height: line.height } : { top: DOT_CENTER, bottom: 0 };
    const reachedCount = reduceMotion ? jobs.length : reached;

    return (
        <Section id="journey" title="My journey" intro="Where I've worked, and what I did there.">
            <motion.div
                ref={containerRef}
                className="relative pl-7 sm:pl-10"
                variants={list}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
            >
                <motion.div aria-hidden="true" variants={track} className="reveal absolute left-[5px] w-0.5 origin-top bg-line" style={lineStyle} />
                <motion.div
                    aria-hidden="true"
                    className="absolute left-[5px] w-0.5 origin-top bg-accent"
                    style={{ ...lineStyle, scaleY: reduceMotion ? 1 : fill }}
                />
                <ol className="space-y-12">
                    {jobs.map(({ role, company, dates, text, tags }, i) => (
                        <motion.li
                            key={company}
                            ref={(el) => { itemRefs.current[i] = el; }}
                            variants={entry}
                            className="reveal relative"
                        >
                            <motion.span
                                aria-hidden="true"
                                variants={dot}
                                className={`reveal absolute -left-[30px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 bg-bg transition-colors duration-300 sm:-left-[42px] ${i < reachedCount ? "border-accent" : "border-faint"}`}
                            >
                                <motion.span
                                    className="h-1.5 w-1.5 rounded-full bg-accent"
                                    initial={false}
                                    animate={{ scale: i < reachedCount ? 1 : 0 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                                />
                            </motion.span>
                            <p className="text-sm tabular-nums text-faint">{dates}</p>
                            <h3 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">{company}</h3>
                            <p className="font-medium text-muted">{role}</p>
                            <JobDetails text={text} tags={tags} />
                        </motion.li>
                    ))}
                </ol>
            </motion.div>
        </Section>
    );
}
