import { extras } from "@/data/resume";
import AnimatedDiv from "../global/AnimatedDiv";
import Section from "./Section";

export default function More() {
    return (
        <Section id="more" title="A bit more about me">
            <div className="grid gap-4 md:grid-cols-2">
                {extras.map(({ kicker, title, text }, i) => (
                    <AnimatedDiv key={title} delay={0.06 * i} className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
                        <p className="text-sm font-medium text-faint">{kicker}</p>
                        <h3 className="mt-1 text-pretty text-lg font-semibold tracking-tight">{title}</h3>
                        <p className="mt-2 text-pretty leading-relaxed text-muted">{text}</p>
                    </AnimatedDiv>
                ))}
            </div>
        </Section>
    );
}
