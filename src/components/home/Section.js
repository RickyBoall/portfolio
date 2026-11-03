import AnimatedDiv from "../global/AnimatedDiv";

export default function Section({ id, title, intro, children }) {
    return (
        <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 py-14 sm:py-20">
            <AnimatedDiv className="mb-8 sm:mb-10">
                <h2 id={`${id}-title`} className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
                {intro && <p className="mt-2 text-pretty text-lg text-muted">{intro}</p>}
            </AnimatedDiv>
            {children}
        </section>
    );
}
