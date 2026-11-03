import AnimatedDiv from "../global/AnimatedDiv";
import Section from "./Section";

export default function Skills({ skills }) {
    return (
        <Section id="skills" title="What I work with">
            <div className="grid gap-8 md:grid-cols-2">
                {skills.map(({ group, items }, i) => (
                    <AnimatedDiv key={group} delay={0.06 * i}>
                        <h3 className="font-semibold">{group}</h3>
                        <ul className="mt-3 flex flex-wrap gap-2">
                            {items.map((item) => (
                                <li key={item} className="rounded-full bg-surface px-3 py-1 text-sm text-muted ring-1 ring-line">{item}</li>
                            ))}
                        </ul>
                    </AnimatedDiv>
                ))}
            </div>
        </Section>
    );
}
