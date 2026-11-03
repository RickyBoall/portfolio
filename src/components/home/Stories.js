"use client"

import { useId, useState } from "react";
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

function Step({ label, children }) {
    return (
        <div>
            <h4 className="text-sm font-semibold text-accent">{label}</h4>
            <p className="mt-1 text-pretty leading-relaxed text-muted">{children}</p>
        </div>
    );
}

function Story({ story, defaultOpen }) {
    const { company, title, hook, metric, challenge, action, result, compare, stack } = story;
    const [open, setOpen] = useState(defaultOpen);
    const panelId = useId();

    return (
        <article className="rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-faint sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                <div className="min-w-0">
                    <p className="text-sm font-medium text-faint">{company}</p>
                    <h3 className="mt-1 text-pretty text-xl font-semibold tracking-tight sm:text-2xl">{title}</h3>
                    <p className="mt-2 text-pretty leading-relaxed text-muted">{hook}</p>
                </div>
                <div className="shrink-0 sm:w-40 sm:text-right">
                    <p className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
                        <CountUp prefix={metric.prefix} value={metric.value} suffix={metric.suffix} />
                    </p>
                    <p className="mt-1 text-sm leading-snug text-muted">{metric.label}</p>
                </div>
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
