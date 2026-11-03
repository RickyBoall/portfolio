// All portfolio copy lives here. The stories are retold from the PDFs in
// public/pdf, so when a resume changes, check the matching story still holds.

export const profile = {
    name: "Sukhraj Ricky Singh Boall",
    shortName: "Sukhraj Boall",
    location: "Toronto, ON",
    email: "rickyboall@gmail.com",
    linkedin: "https://www.linkedin.com/in/rickyboall",
    github: "https://github.com/rickyboall",
};

const freelance = { company: "Freelance", dates: "Oct 2026 – Present" };
const localhost41 = { company: "Localhost41", dates: "Sept 2026 – Nov 2026" };
const wonderfi = { company: "WonderFi", dates: "Nov 2024 – June 2026" };
const andie = { company: "Andie Technologies", dates: "Oct 2020 – Dec 2023" };

export const tracks = {
    dev: {
        href: "/",
        label: "Developer",
        theme: "",
        title: "I build software that's faster, cheaper and safer to run.",
        intro: "I'm a full-stack developer in Toronto with 5+ years of experience with focus on making software that is fast, reliable and cost-effective.",
        crossLink: { text: "Hiring for project management?", cta: "See that side of my work" },
        resume: "/pdf/resume-sukhraj-boall-software-development.pdf",
        metrics: [
            { prefix: "$", value: 10, suffix: "K/mo", label: "saved by migrating services to in-house" },
            { value: 50, suffix: "%", label: "more user engagement" },
            { value: 60, suffix: "%", label: "lower search latency" },
            { prefix: "$", value: 100, suffix: "K", label: "revenue in 3 months" },
        ],
        workIntro: "Four projects I'm proud of, and what changed because of them.",
        stories: [
            {
                company: "WonderFi",
                title: "Bringing a third party service in-house",
                hook: "We were paying for third-party pricing data, so I built our own service to replace it.",
                metric: { prefix: "$", value: 10, suffix: "K/mo", label: "saved in operating costs" },
                challenge: "Pricing data came from a third-party feed, which meant a monthly cost and a reliance on someone else's API.",
                action: "I built an in-house replacement in Python and Go, with a cache-first design on Redis.",
                result: "It saved $10K every month and left the company much less dependent on external APIs.",
                stack: ["Python", "Go", "Redis"],
            },
            {
                company: "WonderFi",
                title: "Making search twice as fast",
                hook: "Our search had hit its limits, so I replaced it with our own vector search.",
                metric: { value: 50, suffix: "%", label: "lower query latency" },
                challenge: "The existing search had real limitations and depended on a third party.",
                action: "I developed a custom vector search solution in Python and TypeScript.",
                result: "Query latency dropped by half, and the third-party dependency went away.",
                compare: [{ label: "Query latency", before: 100, after: 50, change: "−50%" }],
                stack: ["Python", "TypeScript"],
            },
            {
                company: "WonderFi",
                title: "A UX change that moved the numbers",
                hook: "A focused UI/UX release on web and mobile got more people engaging, and more of them trading.",
                metric: { prefix: "~", value: 50, suffix: "%", label: "more user engagement" },
                challenge: "The aim was to get people interacting with the product more, and trading after they did.",
                action: "I developed and deployed the UI/UX enhancement across React and React Native.",
                result: "User engagement rose by about 50%, and post-interaction trades rose by 30%.",
                compare: [
                    { label: "User engagement", before: 100, after: 150, change: "About +50%" },
                    { label: "Post-interaction trades", before: 100, after: 130, change: "+30%" },
                ],
                stack: ["React", "React Native"],
            },
            {
                company: "Andie Technologies",
                title: "A catering platform that paid off fast",
                hook: "I designed and built a catering system that earned $100K in its first three months.",
                metric: { prefix: "$", value: 100, suffix: "K", label: "revenue in 3 months" },
                challenge: "The business needed a way to take customer orders and keep its admin work under control.",
                action: "I built a responsive customer app and a custom CRM in Python and TypeScript, then added a live dashboard using WebSockets and Redis.",
                result: "It generated $100K in revenue over three months and streamlined order and admin workflows.",
                stack: ["Python", "TypeScript", "WebSockets", "Redis"],
            },
        ],
        journey: [
            {
                ...freelance,
                role: "Web Developer",
                text: "I design, build and deploy web dashboards for small businesses, giving owners one place to see and act on their day-to-day numbers. So far I've delivered for two clients, handling everything from the first conversation through to hosting.",
                tags: ["React", "Next.js", "TypeScript", "Deployment"],
            },
            {
                ...localhost41,
                role: "Software Developer",
                text: "I built authentication and session services with Node.js and TypeScript on Google Cloud Run. The hard part was keeping sessions dependable: expiry, renewal, revocation and sign-out all had to hold up through restarts and network interruptions, while accounts stayed isolated so credentials, permissions and quotas couldn't be reused.",
                tags: ["Node.js", "TypeScript", "Cloud Run", "Cloud SQL"],
            },
            {
                ...wonderfi,
                role: "Junior Software Developer",
                text: "Alongside the pricing, search and UX projects in Selected work, I managed deployments on Amazon EKS with ArgoCD and GitOps, and wrote AWS Lambda functions for backend services and deployment automation. I also implemented LaunchDarkly feature flags, so new products could roll out gradually across our Go, Python, Java and React applications with less risk.",
                tags: ["Go", "Python", "Java", "React", "Amazon EKS", "AWS Lambda", "ArgoCD", "LaunchDarkly"],
            },
            {
                ...andie,
                role: "Software Developer",
                text: "I worked across the whole product here. Alongside building the catering platform, I developed React Native apps that matched the web experience, led a development team of 7, ran our Agile process in Jira and orchestrated releases.",
                tags: ["Python", "TypeScript", "React Native", "Redis", "Jira"],
            },
        ],
        skills: [
            { group: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL (Postgres)", "Go", "Java", "C", "HTML/CSS"] },
            { group: "Frameworks", items: ["Django", "React.js", "Next.js", "React Native", "Spring Boot", ".NET", "Rails", "Jest", "TailwindCSS", "Bootstrap"] },
            { group: "Cloud & infrastructure", items: ["AWS", "Google Cloud Platform", "Microsoft Azure", "Docker", "Kubernetes", "Helm", "ArgoCD", "Datadog", "Cloudflare"] },
            { group: "Tools & services", items: ["Redis", "LaunchDarkly", "Stripe", "SendGrid", "Fireblocks", "GitHub Copilot"] },
        ],
    },
    pm: {
        href: "/project-management",
        label: "PM & Design",
        theme: "theme-pm",
        title: "I turn business needs into software that ships.",
        intro: "I'm a technical team lead and developer in Toronto. I've led a team of 7, written PRDs, and coordinated work across engineering and business teams. I still build software day to day, so I can work through scope and risk directly with engineers.",
        crossLink: { text: "Hiring for a developer role?", cta: "See my engineering work" },
        resume: "/pdf/resume-sukhraj-boall-project-management.pdf",
        metrics: [
            { value: 7, suffix: " devs", label: "led for 2 years" },
            { prefix: "$", value: 10, suffix: "K/mo", label: "in costs cut by a migration I coordinated" },
            { prefix: "~", value: 50, suffix: "%", label: "more engagement from a cross-team rollout" },
            { prefix: "$", value: 100, suffix: "K", label: "revenue in a platform's first 3 months" },
        ],
        workIntro: "Four projects I'm proud of, and how I got them over the line.",
        stories: [
            {
                company: "Andie Technologies",
                title: "Leading a team of 7 for two years",
                hook: "I owned the plan, the budget and the client relationship, from planning through to production.",
                metric: { value: 7, suffix: " devs", label: "led for 2 years" },
                challenge: "The team needed one person accountable for timelines, estimates and budget, and for keeping clients and the business owner informed.",
                action: "I ran Agile delivery in Jira, including backlog grooming and sprint planning. I was also the main point of contact for gathering requirements, setting priorities and reporting progress.",
                result: "Workflow became more predictable, and sourcing cost-effective alternatives kept work within budget.",
                stack: ["Agile", "Jira", "Stakeholder management"],
            },
            {
                company: "WonderFi",
                title: "Coordinating a pricing feed migration",
                hook: "I brought engineering and business teams together to move off a third-party pricing feed.",
                metric: { prefix: "$", value: 10, suffix: "K/mo", label: "cut from operating costs" },
                challenge: "A third-party pricing feed was a monthly cost and a critical external dependency.",
                action: "I coordinated the move to an in-house service across engineering and business teams.",
                result: "Operating costs fell by $10K a month, and the critical dependency was removed.",
                stack: ["Cross-team coordination", "Stakeholder management"],
            },
            {
                company: "WonderFi",
                title: "A cross-team rollout that lifted engagement",
                hook: "I coordinated a UI/UX rollout across web and mobile, and the numbers followed.",
                metric: { prefix: "~", value: 50, suffix: "%", label: "more user engagement" },
                challenge: "A UI/UX change on both React and React Native needed several teams moving together.",
                action: "I coordinated the cross-team rollout across both platforms.",
                result: "User engagement rose by about 50%, and post-interaction trades rose by 30%.",
                compare: [
                    { label: "User engagement", before: 100, after: 150, change: "About +50%" },
                    { label: "Post-interaction trades", before: 100, after: 130, change: "+30%" },
                ],
                stack: ["Release management", "React", "React Native"],
            },
            {
                company: "Andie Technologies",
                title: "Delivering a catering platform",
                hook: "A customer-facing app and custom CRM that earned $100K in its first three months.",
                metric: { prefix: "$", value: 100, suffix: "K", label: "revenue in 3 months" },
                challenge: "The business needed customer ordering and internal admin handled in one platform, on both web and mobile.",
                action: "I led delivery of the app and CRM, kept features and design consistent across web and React Native, and added a real-time dashboard for operational visibility.",
                result: "The platform generated $100K in its first three months and streamlined order and admin workflows.",
                stack: ["Delivery", "Requirements gathering"],
            },
        ],
        journey: [
            {
                ...freelance,
                role: "Web Developer",
                text: "I work directly with small business owners to scope, design and deliver web dashboards for their operations. With two clients so far, I own every step myself: gathering requirements, agreeing on scope, building, and handing over a deployed product.",
                tags: ["Client management", "Requirements", "Scoping", "Delivery"],
            },
            {
                ...localhost41,
                role: "Software Developer",
                text: "I was part of a 6-person team delivering secure authentication and session services on Google Cloud Run, from specs through deployment. I defined and built the requirements for how sessions and accounts behave, so credentials and quotas can't be misused.",
                tags: ["Specs", "Requirements", "Delivery"],
            },
            {
                ...wonderfi,
                role: "Junior Software Developer",
                text: "I partnered with departments across the company on product initiatives, writing PRDs and contributing to software design documents that turned business needs into engineering plans. I also introduced LaunchDarkly feature flags for staged rollouts, and delivered an in-house vector search that cut query latency by 50%.",
                tags: ["PRDs", "Design documents", "Staged rollouts", "LaunchDarkly"],
            },
            {
                ...andie,
                role: "Software Developer & Team Lead",
                text: "As team lead, I owned timelines, estimates and releases for the whole team, and I was the person clients and the business owner came to first. I also kept web and mobile delivery consistent across platforms.",
                tags: ["Team leadership", "Agile", "Jira", "Client management"],
            },
        ],
        skills: [
            { group: "Managing work", items: ["Agile/Scrum", "Kanban", "Sprint planning", "Release management", "Roadmapping", "Risk management"] },
            { group: "Working with people", items: ["Requirements gathering", "Stakeholder management", "PRDs and technical specs", "Team leadership and mentoring"] },
            { group: "Tools", items: ["Jira", "Confluence", "Notion", "Figma", "Excel/Google Sheets", "LaunchDarkly", "Git", "VS Code", "Jenkins"] },
            { group: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL (Postgres)", "Go", "Java", "C", "HTML/CSS"] },
        ],
    },
};

export const extras = [
    {
        kicker: "Award · Nov 2021",
        title: "1st Place, CCTX x Serene-RISC Cyber Design Challenge",
        text: "I interviewed the client, prioritized the critical issues in their portal's design, and presented a solution with anonymity and confidentiality features.",
    },
    {
        kicker: "Education · Apr 2023",
        title: "BSc (Hons) Computer Science",
        text: "York University, York, ON.",
    },
    {
        kicker: "Client project",
        title: "6 West Machining",
        text: "A website built to a machining company's requirements, giving the business an informative online presence.",
    },
    {
        kicker: "Outside of work",
        title: "Away from the keyboard",
        text: "You'll find me lifting weights, skateboarding or working on my car.",
    },
];
