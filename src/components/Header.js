"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import { profile, tracks } from "@/data/resume";

const sections = [
    { id: "work", label: "Work" },
    { id: "journey", label: "Journey" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
];

export default function Header() {
    const pathname = usePathname();
    const current = pathname === tracks.pm.href ? "pm" : "dev";
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

    return (
        <header className={`${tracks[current].theme} sticky top-0 z-20 border-b border-line bg-bg`}>
            <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-30 focus:m-2 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-ink">
                Skip to content
            </a>
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
                <Link
                    href={tracks[current].href}
                    aria-label={`${profile.shortName}, back to top`}
                    className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-sm font-bold tracking-tight text-accent-ink transition-colors hover:bg-accent-hover min-[380px]:flex"
                >
                    SB
                </Link>

                <nav aria-label="Sections" className="hidden lg:block">
                    <ul className="flex gap-6 text-sm font-medium text-muted">
                        {sections.map(({ id, label }) => (
                            <li key={id}><a className="transition-colors hover:text-ink" href={`#${id}`}>{label}</a></li>
                        ))}
                    </ul>
                </nav>

                <div className="flex flex-1 items-center justify-between gap-3 sm:flex-none">
                    <nav aria-label="Resume version">
                        <ul className="flex rounded-full border border-line p-1">
                            {Object.entries(tracks).map(([key, { href, label }]) => (
                                <li key={key}>
                                    <Link
                                        href={href}
                                        scroll={false}
                                        aria-current={key === current ? "page" : undefined}
                                        className={`relative flex min-h-9 items-center whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors ${key === current ? "text-ink" : "text-muted hover:text-ink"}`}
                                    >
                                        {key === current && (
                                            <motion.span
                                                layoutId="track-pill"
                                                className="absolute inset-0 rounded-full bg-line"
                                                transition={{ type: "spring", stiffness: 400, damping: 35 }}
                                            />
                                        )}
                                        <span className="relative">{label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <a href={tracks[current].resume} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center rounded-full bg-accent px-4 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-hover">
                        Resume
                    </a>
                </div>
            </div>
            <motion.div aria-hidden="true" className="absolute inset-x-0 -bottom-px h-0.5 origin-left bg-accent" style={{ scaleX: progress }} />
        </header>
    );
}
