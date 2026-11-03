"use client"

import { useState } from "react";
import { profile } from "@/data/resume";
import AnimatedDiv from "../global/AnimatedDiv";

export default function Contact({ resume }) {
    const [copied, setCopied] = useState(false);

    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(profile.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${profile.email}`;
        }
    }

    return (
        <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 pb-10 pt-6 sm:pb-16">
            <AnimatedDiv className="rounded-3xl bg-panel p-6 text-panel-ink sm:p-12">
                <h2 id="contact-title" className="text-3xl font-semibold tracking-tight sm:text-5xl">Let's talk.</h2>
                <p className="mt-3 max-w-xl text-pretty text-lg opacity-90">Email is the best way to reach me. You can also find me on LinkedIn or GitHub.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                    <a href={`mailto:${profile.email}`} className="inline-flex min-h-12 items-center break-all rounded-full bg-bg px-5 font-semibold text-ink transition-opacity hover:opacity-90">
                        {profile.email}
                    </a>
                    <button type="button" onClick={copyEmail} aria-live="polite" className="inline-flex min-h-12 items-center rounded-full border border-current px-5 font-semibold">
                        {copied ? "Copied!" : "Copy email"}
                    </button>
                </div>
                <ul className="mt-5 flex flex-wrap gap-x-6 font-medium">
                    <li><a className="inline-flex min-h-11 items-center underline underline-offset-4" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
                    <li><a className="inline-flex min-h-11 items-center underline underline-offset-4" href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
                    <li><a className="inline-flex min-h-11 items-center underline underline-offset-4" href={resume} target="_blank" rel="noreferrer">Resume</a></li>
                </ul>
            </AnimatedDiv>
        </section>
    );
}
