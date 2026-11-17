"use client"

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedDiv from "../global/AnimatedDiv";
import CountUp from "../global/CountUp";
import Section from "./Section";

const ease = [0.22, 1, 0.36, 1];

function CompareBars({ compare }) {
    return (
        <div className="mt-5 space-y-4">
            {compare.map(({ label, before, after, change }) => {
                const max = Math.max(before, after);
                const rows = [
                    { name: "Before", amount: before, color: "bg-faint" },
                    { name: "After", amount: after, color: "bg-accent" },
                ];
                return (
                    <figure key={label}>
                        <figcaption className="mb-1.5 flex justify-between gap-3 text-sm">
                            <span className="font-medium">{label}</span>
                            <span className="font-semibold tabular-nums text-accent">{change}</span>
                        </figcaption>
                        {rows.map(({ name, amount, color }) => (
                            <div key={name} className="mb-1 flex items-center gap-2 text-xs text-faint">
                                <span className="w-10 shrink-0">{name}</span>
                                <div className="h-2 flex-1">
                                    <motion.div
                                        className={`h-full origin-left rounded-full ${color}`}
                                        style={{ width: `${(amount / max) * 100}%` }}
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 0.8, delay: 0.15, ease }}
                                    />
                                </div>
                            </div>
                        ))}
                    </figure>
                );
            })}
        </div>
    );
}

function Gallery({ images }) {
    const [index, setIndex] = useState(null);
    const dialogRef = useRef(null);
    const image = index === null ? null : images[index];
    const many = images.length > 1;

    useEffect(() => {
        const dialog = dialogRef.current;
        if (index !== null && !dialog.open) dialog.showModal();
    }, [index]);

    function step(by) {
        setIndex((i) => (i + by + images.length) % images.length);
    }

    function onKeyDown(e) {
        if (!many) return;
        if (e.key === "ArrowRight") step(1);
        if (e.key === "ArrowLeft") step(-1);
    }

    return (
        <>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {images.map(({ src, alt, width, height }, i) => (
                    <button
                        key={src}
                        type="button"
                        onClick={() => setIndex(i)}
                        aria-label={`View larger: ${alt}`}
                        className="group block cursor-zoom-in overflow-hidden rounded-xl border border-line"
                    >
                        <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 640px) 480px, 100vw" className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]" />
                    </button>
                ))}
            </div>

            <dialog
                ref={dialogRef}
                onClose={() => setIndex(null)}
                onKeyDown={onKeyDown}
                onClick={(e) => { if (e.target === e.currentTarget) dialogRef.current.close(); }}
                aria-label={image?.alt}
                className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-4 backdrop:bg-black/85 sm:p-10"
            >
                {image && (
                    <div className="pointer-events-none flex h-full items-center justify-center">
                        <motion.div
                            key={image.src}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.25, ease }}
                            className="pointer-events-auto"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                                sizes="100vw"
                                className="max-h-[85vh] w-auto rounded-xl object-contain shadow-2xl"
                            />
                        </motion.div>
                    </div>
                )}
                <button
                    type="button"
                    onClick={() => dialogRef.current.close()}
                    aria-label="Close"
                    className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white transition-colors hover:bg-white/20"
                >
                    ×
                </button>
                {many && (
                    <>
                        <button type="button" onClick={() => step(-1)} aria-label="Previous image" className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20">
                            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 4l-4 4 4 4" /></svg>
                        </button>
                        <button type="button" onClick={() => step(1)} aria-label="Next image" className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20">
                            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4l4 4-4 4" /></svg>
                        </button>
                        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-sm tabular-nums text-white">{index + 1} / {images.length}</p>
                    </>
                )}
            </dialog>
        </>
    );
}

function Step({ label, children }) {
    return (
        <div>
            <h4 className="text-sm font-semibold text-accent">{label}</h4>
            <p className="mt-1 text-pretty leading-relaxed text-muted">{children}</p>
        </div>
    );
}

function Story({ story, defaultOpen }) {
    const { company, title, hook, metric, images, challenge, action, result, compare, stack } = story;
    // every card starts closed so mobile never flashes open; only desktop
    // (md and up, matching the rest of the mobile layout) opens the first one
    const [open, setOpen] = useState(false);
    const panelId = useId();

    useEffect(() => {
        if (defaultOpen && window.matchMedia("(min-width: 768px)").matches) setOpen(true);
    }, [defaultOpen]);

    return (
        <article className="rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-faint sm:p-7">
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                <div className="min-w-0">
                    <p className="text-sm font-medium text-faint">{company}</p>
                    <h3 className="mt-1 text-pretty text-xl font-semibold tracking-tight sm:text-2xl">{title}</h3>
                    <p className="mt-2 text-pretty leading-relaxed text-muted">{hook}</p>
                </div>
                {metric && (
                    // metric can be one object or an array of them
                    <div className="flex shrink-0 flex-wrap gap-x-6 gap-y-3 sm:w-40 sm:flex-col sm:gap-4">
                        {[].concat(metric).map((m) => (
                            <div key={m.label} className="flex items-baseline gap-3 sm:block sm:text-right">
                                <p className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
                                    <CountUp prefix={m.prefix} value={m.value} suffix={m.suffix} />
                                </p>
                                <p className="text-sm leading-snug text-muted sm:mt-1">{m.label}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-controls={panelId}
                className="-mx-2 mt-3 inline-flex min-h-11 items-center gap-2 rounded-md px-2 text-sm font-semibold text-accent"
            >
                <motion.span aria-hidden="true" animate={{ rotate: open ? 45 : 0 }} className="text-lg leading-none">+</motion.span>
                {open ? "Hide the details" : "How it happened"}
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        id={panelId}
                        className="overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                    >
                        <div className="mt-3 grid gap-5 border-t border-line pt-5 md:grid-cols-3 md:gap-6">
                            <Step label="The challenge">{challenge}</Step>
                            <Step label="What I did">{action}</Step>
                            <Step label="The result">{result}</Step>
                        </div>
                        {compare && <CompareBars compare={compare} />}
                        {images && <Gallery images={images} />}
                        <p className="mt-5 text-sm text-faint">{stack.join(" · ")}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </article>
    );
}

export default function Stories({ intro, stories }) {
    return (
        <Section id="work" title="Selected work" intro={intro}>
            <div className="space-y-4">
                {stories.map((story, i) => (
                    <AnimatedDiv key={story.title}>
                        <Story story={story} defaultOpen={i === 0} />
                    </AnimatedDiv>
                ))}
            </div>
        </Section>
    );
}
