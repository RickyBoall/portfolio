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
        intro: "I'm a full-stack developer in Toronto with 5+ years of experience building products from the first conversation to production. Lately that's meant AI-powered services and the sign-in, session and usage systems that keep them secure, alongside the cost and performance work I've always focused on.",
        crossLink: { text: "Hiring for project management?", cta: "See that side of my work" },
        resume: "/pdf/resume-sukhraj-boall-software-development.pdf",
        metrics: [
            { prefix: "$", value: 10, suffix: "K/mo", label: "saved by migrating services to in-house" },
            { value: 50, suffix: "%", label: "more user engagement" },
            { value: 60, suffix: "%", label: "lower search latency" },
            { prefix: "$", value: 100, suffix: "K", label: "revenue in 3 months" },
        ],
        workIntro: "Five projects I'm proud of, and what changed because of them.",
        stories: [
             {
                company: "Andie Technologies",
                title: "A catering platform that paid off fast",
                hook: "I designed and built a catering platform that earned $100K in its first three months and became the daily tool for 50+ staff.",
                metric: { prefix: "$", value: 100, suffix: "K", label: "revenue in 3 months" },
                challenge: "The business needed one place for customers to order, and for its operations and sales teams to manage leads, restaurant status, follow-ups and customer communications.",
                action: "I built a responsive customer app and a custom CRM in Python and TypeScript, added a live dashboard using WebSockets and Redis, and integrated OpenAI's GPT models to recommend catering options from a customer's event description.",
                result: "It generated $100K in revenue over three months, and 50+ operations and sales team members used the CRM to run their day-to-day work.",
                stack: ["Python", "TypeScript", "WebSockets", "Redis", "OpenAI API"],
            },
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
                // compare: [{ label: "Query latency", before: 100, after: 50, change: "−50%" }],
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
                // compare: [
                //     { label: "User engagement", before: 100, after: 150, change: "About +50%" },
                //     { label: "Post-interaction trades", before: 100, after: 130, change: "+30%" },
                // ],
                stack: ["React", "React Native"],
            },
            {
                company: "Freelance",
                title: "A website for a precision machining company",
                hook: "I designed and built a website that gives a machining subcontractor a professional online presence and a simple way for customers to request quotes.",
                images: [
                    { src: "/images/work/6west-home.webp", alt: "Homepage of the 6 West Machining website, with a dark background, gold headline and company stats", width: 1600, height: 804 },
                    { src: "/images/work/6west-contact.webp", alt: "Contact page of the 6 West Machining website, showing the quote request form", width: 1600, height: 803 },
                ],
                challenge: "The business needed a site that showed off its capabilities and the industries it serves, and made it easy for new customers to get in touch about a job.",
                action: "I designed a dark, gold-accented look that matches the brand and built pages for the company, its capabilities, the industries it serves and contact. The quote form collects the part details, quantity and timeline the shop needs to price a job.",
                result: "The business has a polished, professional site that presents its capabilities clearly and lets customers send a complete quote request in one step.",
                stack: ["React", "Next.js", "Web design", "UI/UX"],
            },
        ],
        journey: [
            {
                ...freelance,
                role: "Web Developer",
                text: "I build software that helps small businesses run day to day, from web dashboards that put an owner's numbers in one place to order management systems in Node.js that keep up as the business grows. I own each project end to end, from the first conversation to deployment and hosting.",
                tags: ["React", "Next.js", "TypeScript", "Node.js", "Deployment"],
            },
            {
                ...localhost41,
                role: "Software Developer",
                text: "I built the sign-in, session and hosted AI services for a desktop app using Node.js and TypeScript on Google Cloud Run. Users sign in with an emailed code that is protected against abuse, and their sessions survive network drops but can't be revived once revoked. I also enforced per-account usage quotas on the server and made sure paid background jobs are never submitted twice.",
                tags: ["Node.js", "TypeScript", "Cloud Run", "Cloud SQL", "Generative AI", "LLM inference"],
            },
            {
                ...wonderfi,
                role: "Junior Software Developer",
                text: "I worked across WonderFi's trading platform to make it cheaper to run, faster to use and safer to ship, replacing costly third-party pricing and search services with in-house ones and shipping a web and mobile UX update. I also ran deployments on Amazon EKS with ArgoCD and GitOps, built AWS Lambda services for backend work and automation, and introduced LaunchDarkly feature flags for gradual rollouts.",
                tags: ["Go", "Python", "TypeScript", "Java", "React", "React Native", "Redis", "Vector search", "Amazon EKS", "AWS Lambda", "ArgoCD", "LaunchDarkly"],
            },
            {
                ...andie,
                role: "Software Developer",
                text: "I led a team of 7 developers building a catering platform with a customer app and a CRM that more than 50 sales and operations staff used every day. I added a real-time dashboard with WebSockets and Redis, AI-powered catering recommendations using OpenAI's GPT models, and React Native apps that matched the web experience. I also ran our Agile process in Jira and owned releases.",
                tags: ["Python", "TypeScript", "React Native", "WebSockets", "Redis", "OpenAI API", "LLM integration", "CRM", "Jira", "Team leadership"],
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
        workIntro: "Five projects I'm proud of, and how I got them over the line.",
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
                hook: "A customer app and custom CRM that earned $100K in three months and ran the day-to-day work of 50+ staff.",
                metric: { prefix: "$", value: 100, suffix: "K", label: "revenue in 3 months" },
                challenge: "The business needed customer ordering, sales and operations handled in one platform, on both web and mobile.",
                action: "I led delivery of the app and CRM, including an OpenAI integration that recommended options from a customer's event description. I kept features and design consistent across web and React Native, and added a real-time dashboard for operational visibility.",
                result: "The platform generated $100K in its first three months, and 50+ operations and sales team members used it to manage leads, restaurant status, follow-ups and customer communications.",
                stack: ["Delivery", "Requirements gathering", "AI features"],
            },
            {
                company: "Freelance",
                title: "A website for a precision machining company",
                hook: "I took a client from first conversation to a live website that gives a machining subcontractor a professional online presence and a simple way for customers to request quotes.",
                images: [
                    { src: "/images/work/6west-home.webp", alt: "Homepage of the 6 West Machining website, with a dark background, gold headline and company stats", width: 1600, height: 804 },
                    { src: "/images/work/6west-contact.webp", alt: "Contact page of the 6 West Machining website, showing the quote request form", width: 1600, height: 803 },
                ],
                challenge: "The business needed a site that showed off its capabilities and the industries it serves, and made it easy for new customers to get in touch about a job.",
                action: "I gathered requirements with the owner, agreed on the scope and pages, then designed a dark, gold-accented look that matches the brand and built pages for the company, its capabilities, the industries it serves and contact. The quote form collects the part details, quantity and timeline the shop needs to price a job.",
                result: "The business has a polished, professional site that presents its capabilities clearly and lets customers send a complete quote request in one step.",
                stack: ["Client management", "Requirements", "Web design", "Delivery", "React", "Next.js"],
            },
        ],
        journey: [
            {
                ...freelance,
                role: "Web Developer",
                text: "I help small business owners turn the way they run their operations into software that fits. For two clients so far, I've owned each project from start to finish. That means gathering requirements, agreeing on scope, delivering dashboards and order management systems, and handing over a deployed product they rely on every day.",
                tags: ["Client management", "Requirements", "Scoping", "Delivery"],
            },
            {
                ...localhost41,
                role: "Software Developer",
                text: "I was part of a 6-person team turning a desktop AI app from operator-only setup into a consumer product. I defined requirements and acceptance criteria for sessions, accounts and usage limits, agreed quotas and abuse thresholds with stakeholders, and set up end-to-end testing so a fresh install reaches a real AI response with no manual setup.",
                tags: ["Specs", "Requirements", "Acceptance criteria", "Delivery", "Generative AI", "AI product", "Usage limits"],
            },
            {
                ...wonderfi,
                role: "Junior Software Developer",
                text: "I worked between engineering and the business, turning product goals into plans teams could deliver. I wrote PRDs, contributed to design documents and coordinated cross-team work on the pricing migration, the web and mobile UX rollout and the in-house search. I also introduced LaunchDarkly feature flags so launches could happen in stages, making releases more predictable and less risky.",
                tags: ["PRDs", "Design documents", "Cross-team coordination", "Stakeholder management", "Release management", "Staged rollouts", "LaunchDarkly"],
            },
            {
                ...andie,
                role: "Software Developer & Team Lead",
                text: "I led a team of 7 developers delivering a catering platform with a customer app, a CRM that more than 50 sales and operations staff used every day, and AI-powered recommendations. I owned timelines, estimates and releases, ran our Agile process in Jira, and was the first point of contact for clients and the business owner. I also kept features and design consistent across web and mobile.",
                tags: ["Team leadership", "Agile", "Jira", "Release management", "Client management", "Delivery", "AI features"],
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
        text: "We redesigned a real client's portal to be easier and safer to use. After interviewing the client and prioritizing the worst navigation problems, we presented a redesign built around anonymity and confidentiality, and won first place.",
    },
    {
        kicker: "Education · Apr 2023",
        title: "BSc (Hons) Computer Science",
        text: "York University, York, ON.",
    },
    // {
    //     kicker: "Client project",
    //     title: "6 West Machining",
    //     text: "A website built to a machining company's requirements, giving the business an informative online presence.",
    // },
    // {
    //     kicker: "Outside of work",
    //     title: "Away from the keyboard",
    //     text: "You'll find me lifting weights, skateboarding or working on my car.",
    // },
];
