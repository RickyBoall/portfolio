"use client"

import { useId, useState } from "react";
import { motion } from "framer-motion";
import AnimatedDiv from "../global/AnimatedDiv";
import Section from "./Section";

const tint = (pct) => `color-mix(in srgb, var(--accent) ${pct}%, transparent)`;

function Chips({ items }) {
    return (
        <ul className="flex flex-wrap gap-2">
            {items.map((item) => (
                <li
                    key={item}
                    className="rounded-lg px-3 py-1.5 text-sm font-medium text-ink transition-colors"
                    style={{ backgroundColor: tint(9), boxShadow: `inset 0 0 0 1px ${tint(22)}` }}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}

function GroupHeading({ index, group, count, as: Tag = "h3" }) {
    return (
        <div className="flex items-baseline justify-between gap-4">
            <Tag className="flex items-baseline gap-3 text-lg font-semibold tracking-tight">
                <span className="font-mono text-sm text-accent">{String(index + 1).padStart(2, "0")}</span>
                {group}
            </Tag>
            {/* <span className="shrink-0 text-sm text-faint">{count} items</span> */}
        </div>
    );
}

export default function Skills({ skills }) {
    const [active, setActive] = useState(0);
    const id = useId();
    const current = skills[active];

    return (
        <Section id="skills" title="What I work with">
            {/* Mobile: one group at a time behind tabs */}
            <AnimatedDiv className="md:hidden">
                <div
                    role="tablist"
                    aria-label="Skill groups"
                    className="-mx-4 -my-1 flex gap-2 overflow-x-auto px-4 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {skills.map(({ group }, i) => {
                        const selected = i === active;
                        return (
                            <button
                                key={group}
                                id={`${id}-tab-${i}`}
                                role="tab"
                                type="button"
                                aria-selected={selected}
                                aria-controls={`${id}-panel`}
                                onClick={() => setActive(i)}
                                className={`min-h-10 shrink-0 whitespace-nowrap rounded-full px-4 text-sm font-semibold transition-colors ${
                                    selected ? "bg-accent text-accent-ink" : "bg-surface text-muted ring-1 ring-line"
                                }`}
                            >
                                {group}
                            </button>
                        );
                    })}
                </div>
                <div
                    id={`${id}-panel`}
                    role="tabpanel"
                    aria-labelledby={`${id}-tab-${active}`}
                    className="relative mt-4 overflow-hidden rounded-2xl border border-line bg-surface p-5"
                >
                    <motion.div
                        key={current.group}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <GroupHeading index={active} group={current.group} count={current.items.length} />
                        <div className="mt-4">
                            <Chips items={current.items} />
                        </div>
                    </motion.div>
                </div>
            </AnimatedDiv>

            {/* Desktop: all groups as cards */}
            <div className="hidden gap-4 md:grid md:grid-cols-2">
                {skills.map(({ group, items }, i) => (
                    <AnimatedDiv
                        key={group}
                        delay={0.06 * i}
                        className="relative overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-shadow hover:shadow-lg"
                    >
                        <GroupHeading index={i} group={group} count={items.length} />
                        <div className="mt-4">
                            <Chips items={items} />
                        </div>
                    </AnimatedDiv>
                ))}
            </div>
        </Section>
    );
}
