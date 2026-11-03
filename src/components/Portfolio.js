import { Contact, Experience, Hero, More, Skills, Stories } from "@/components";
import { tracks } from "@/data/resume";

export default function Portfolio({ track }) {
    const { theme, workIntro, stories, journey, skills, resume } = tracks[track];

    return (
        <main id="main" className={`${theme} mx-auto max-w-5xl px-4 sm:px-6 lg:px-8`}>
            <Hero track={track} />
            <Experience jobs={journey} />
            <Stories intro={workIntro} stories={stories} />
            <Skills skills={skills} />
            <More />
            <Contact resume={resume} />
        </main>
    );
}
