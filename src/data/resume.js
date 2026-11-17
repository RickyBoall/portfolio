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

const freelanceCurrent = { company: "Freelance", dates: "Oct 2026 – Present" };
const localhost41 = { company: "Localhost41", dates: "Aug 2026 – Present" };
const wonderfi = { company: "WonderFi", dates: "Nov 2024 – June 2026" };
const freelance = { company: "Freelance", dates: "Feb 2024 – Sept 2024" };
const andie = { company: "Andie Technologies", dates: "Oct 2020 – Dec 2023" };

export const tracks = {
    dev: {
        href: "/",
        label: "Developer",
        theme: "",
        title: "I build software that's faster, cheaper and safer to run.",
        intro: "I'm a full-stack developer in Toronto with 5+ years of experience building products from the first conversation to production. Lately that's meant AI-powered services and the sign-in, session and usage systems that keep them secure, alongside the cost and performance work I've always focused on.",
        crossLink: { text: "Hiring for project management?", cta: "See that side of my work" },
        resume: "/pdf/resume-sukhraj-boall.pdf",
        metrics: [
            { prefix: "$", value: 10, suffix: "K/mo", label: "saved by migrating services to in-house" },
            { value: 50, suffix: "%", label: "more user engagement" },
            { value: 30, suffix: "%", label: "more post-interaction trades" },
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
                hook: "Every price on the platform meant a paid call to an external API, so I built our own pricing service to stop paying for the same data twice.",
                metric: { prefix: "$", value: 10, suffix: "K/mo", label: "saved in operating costs" },
                challenge: "Third-party API calls to fetch pricing data were becoming expensive. Services across the platform requested the same prices independently, so we were paying for many duplicate calls every day and depending on an external API for every lookup.",
                action: "I built in-house pricing tables and feeds in Python and Go. Daily pricing data was stored in a large table we owned, and a cache-first layer on Redis served repeat requests from stored results, so the platform only went out to the external API when it genuinely needed fresh data.",
                result: "Duplicate calls across the platform disappeared and outgoing fetches dropped sharply, cutting overall query costs by $10K a month. Pricing also became far less dependent on an external API being fast and available.",
                stack: ["Python", "Go", "Redis"],
            },
            {
                company: "WonderFi",
                title: "Search that keeps up as the data grows",
                hook: "The admin dashboard's search was slowing down as our data grew, so I rebuilt it as vector search inside our own database.",
                metric: { value: 60, suffix: "%", label: "lower query latency" },
                challenge: "Teams across the company relied on the admin dashboard to look things up, but its search ran through a separate third-party search engine. As the dataset grew, queries got slower, and keeping a second system in sync added overhead and another dependency to manage.",
                action: "Using pgvector, I stored search vectors directly alongside our data in PostgreSQL, so records were indexed for search right where they lived. Then I wrote custom similarity queries in Python and TypeScript to fetch and rank results against those vectors, replacing the calls to the external search service.",
                result: "Search latency dropped by 60%, even across the large dataset. Teams using the admin dashboard got their results faster, and we removed a third-party dependency we no longer had to run and keep in sync.",
                // compare: [{ label: "Query latency", before: 100, after: 40, change: "−60%" }],
                stack: ["Python", "TypeScript", "PostgreSQL", "pgvector"],
            },
            {
                company: "WonderFi",
                title: "A UX change that moved the numbers",
                hook: "I built a post-trade popup on web and mobile that suggested what to trade next, and it got more people engaging and coming back to trade again.",
                metric: [
                    { prefix: "+", value: 50, suffix: "%", label: "user engagement" },
                    { prefix: "+", value: 30, suffix: "%", label: "post-interaction trades" },
                ],
                challenge: "Once someone finished a trade, there was nothing guiding them to what they might do next. The aim was to keep people engaged after a trade and encourage them to make another one.",
                action: "I built a popup that appeared after each trade, in React for web and React Native for mobile. Using data from the marketing team on which coins people most often traded next, it picked a suggestion based on the coin the user had just traded and linked straight to that coin's page, so trading again was one tap away.",
                result: "Since the release, user engagement is up 50% and trading is up 30%.",
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
                ...freelanceCurrent,
                role: "Software Developer",
                text: "Small businesses come to me for software that helps them run day to day, from web dashboards that put an owner's numbers in one place to order management systems in Node.js that keep up as the business grows. I own each project end to end, from the first conversation to deployment and hosting.",
                tags: ["React", "Next.js", "TypeScript", "Node.js", "Deployment"],
            },
            {
                ...localhost41,
                role: "Software Developer",
                text: "At Localhost41, my focus is the sign-in, session and hosted AI services behind a desktop app, built with Node.js and TypeScript on Google Cloud Run. Users sign in with an emailed code that is protected against abuse, and their sessions survive network drops but can't be revived once revoked. I also enforce per-account usage quotas on the server and make sure paid background jobs are never submitted twice.",
                tags: ["Node.js", "TypeScript", "Cloud Run", "Cloud SQL", "Generative AI", "LLM inference"],
            },
            {
                ...wonderfi,
                role: "Junior Software Developer",
                text: "I built features across WonderFi's trading platform on web and mobile, from a post-trade experience that got people trading again to in-house vector search that made the admin dashboard faster for internal teams. Behind the scenes, I built an in-house pricing service that cut out duplicate third-party API calls. I also ran deployments on Amazon EKS with ArgoCD and GitOps, built AWS Lambda services for backend work and automation, and introduced LaunchDarkly feature flags for gradual rollouts.",
                tags: ["Go", "Python", "TypeScript", "Java", "React", "React Native", "Redis", "Vector search", "Amazon EKS", "AWS Lambda", "ArgoCD", "LaunchDarkly"],
            },
            {
                ...freelance,
                role: "Software Developer",
                text: "In 2024 I worked directly with local businesses to get them online and off manual processes. I designed and launched mobile-first landing pages in Next.js and TailwindCSS that improved their search visibility and brought in more inquiries, and built order management backends in Python and PostgreSQL with Stripe payments and order notifications, replacing manual tracking and making order handling 60% more efficient. I also prototyped AI features with the OpenAI API, including chatbots, text summarization and structured data extraction that turned client order data into insights on popular products and target customers.",
                tags: ["Next.js", "TailwindCSS", "Python", "PostgreSQL", "Stripe", "OpenAI API"],
            },
            {
                ...andie,
                role: "Software Developer",
                text: "I led a team of 7 developers building a catering platform with a customer app and a CRM that more than 50 sales and operations staff used every day. I added a real-time dashboard with WebSockets and Redis, AI-powered catering recommendations using OpenAI's GPT models, and React Native apps that matched the web experience. I also ran our Agile process in Jira and owned releases.",
                tags: ["Python", "TypeScript", "React Native", "WebSockets", "Redis", "OpenAI API", "LLM integration", "CRM", "Jira", "Team leadership"],
            },
        ],
        skills: [
            { group: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL (PostgreSQL)", "Go (Golang)", "Java", "C", "HTML/CSS"] },
            { group: "Frameworks", items: ["React.js", "Next.js", "Node.js", "Django", "FastAPI", "React Native", "Spring Boot", ".NET", "Jest", "TailwindCSS", "Bootstrap"] },
            { group: "Cloud & DevOps", items: ["AWS (Lambda, EKS)", "Google Cloud Platform (Cloud Run, Cloud SQL)", "Microsoft Azure", "Docker", "Kubernetes", "Helm", "ArgoCD", "GitOps", "Datadog", "Cloudflare"] },
            { group: "Tools & services", items: ["LaunchDarkly", "Stripe", "SendGrid", "Fireblocks", "GitHub Copilot", "Jira", "PostgreSQL", "MongoDB", "MySQL", "Redis", "OpenAI API"] },
        ],
    },
    pm: {
        href: "/project-management",
        label: "PM & Design",
        theme: "theme-pm",
        title: "I turn business needs into software that ships.",
        intro: "I'm a technical team lead and developer in Toronto. I've led a team of 7, written PRDs, and coordinated work across engineering and business teams. I still build software day to day, so I can work through scope and risk directly with engineers.",
        crossLink: { text: "Hiring for a developer role?", cta: "See my engineering work" },
        resume: "/pdf/resume-sukhraj-boall.pdf",
        metrics: [
            { value: 7, suffix: " devs", label: "led for 2 years" },
            { prefix: "$", value: 10, suffix: "K/mo", label: "in costs cut by a migration I coordinated" },
            { prefix: "", value: 50, suffix: "%", label: "more engagement from a cross-team rollout" },
            { value: 30, suffix: "%", label: "more trades after that rollout" },
            { value: 60, suffix: "%", label: "lower search latency for internal teams" },
            { prefix: "$", value: 100, suffix: "K", label: "revenue in a platform's first 3 months" },
        ],
        workIntro: "Six projects I'm proud of, and how I got them over the line.",
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
                company: "WonderFi",
                title: "Coordinating an in-house pricing service",
                hook: "Paid pricing API calls were our biggest cost, so I brought engineering and business teams together around an in-house service that stopped us paying for the same data twice.",
                metric: { prefix: "$", value: 10, suffix: "K/mo", label: "cut from operating costs" },
                challenge: "Third-party API calls to fetch pricing data were becoming expensive. Services across the platform requested the same prices independently, so we were paying for many duplicate calls every day, and every price on the platform depended on an external API.",
                action: "I coordinated the move to in-house pricing tables and feeds across engineering and business teams. The plan stored daily pricing data in a table we owned and served repeat requests from a cache, so the platform only paid for the external API when it genuinely needed fresh data. I kept stakeholders aligned on the cost goal while teams moved their services over to the new source.",
                result: "Duplicate calls across the platform disappeared and outgoing fetches dropped sharply, cutting operating costs by $10K a month. Pricing also became far less dependent on an external API being fast and available.",
                stack: ["Cross-team coordination", "Stakeholder management", "Cost reduction"],
            },
            {
                company: "WonderFi",
                title: "Faster search for the teams who rely on it",
                hook: "Teams across the company were waiting on slow admin dashboard search, so I led the move to in-house vector search built into our own database.",
                metric: { value: 60, suffix: "%", label: "lower query latency" },
                challenge: "Teams across the company relied on the admin dashboard to look things up, but its search ran through a separate third-party search engine. As the dataset grew, queries got slower, and keeping a second system in sync added overhead and another dependency to manage.",
                action: "I scoped a replacement that moved search into our existing PostgreSQL database using pgvector, removing the need for a separate system. I coordinated the work with the teams using the dashboard so the new search covered what they needed, and built the custom search queries that replaced the external service.",
                result: "Search latency dropped by 60%, even across the large dataset. Teams using the admin dashboard got their results faster, and we removed a third-party dependency we no longer had to run and keep in sync.",
                stack: ["Scoping", "Cross-team coordination", "Internal tools", "PostgreSQL", "pgvector"],
            },
            {
                company: "WonderFi",
                title: "A cross-team rollout that lifted engagement",
                hook: "I worked with marketing to turn their trading data into a post-trade suggestion on web and mobile, and coordinated its rollout across teams.",
                metric: [
                    { prefix: "+", value: 50, suffix: "%", label: "user engagement" },
                    { prefix: "+", value: 30, suffix: "%", label: "post-interaction trades" },
                ],
                challenge: "Once someone finished a trade, there was nothing guiding them to what they might do next. The aim was to keep people engaged after a trade and encourage them to make another one, and the change had to land on both web and mobile, which meant several teams moving together.",
                action: "I took the marketing team's data on which coins people most often traded next and shaped it into a popup shown after each trade, suggesting the next coin based on the one just traded and linking straight to its page. I coordinated the rollout across React and React Native, keeping the design consistent across both platforms and lining up releases so users got the same experience wherever they traded.",
                result: "Since the release, user engagement is up 50% and trading is up 30%.",
                // compare: [
                //     { label: "User engagement", before: 100, after: 150, change: "About +50%" },
                //     { label: "Post-interaction trades", before: 100, after: 130, change: "+30%" },
                // ],
                stack: ["Release management", "React", "React Native"],
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
                ...freelanceCurrent,
                role: "Software Developer",
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
                ...freelance,
                role: "Software Developer",
                text: "In 2024 I worked directly with local business owners to understand how they ran their operations and where manual work was slowing them down. I scoped and delivered mobile-first landing pages that improved their search visibility and inquiries, and order management systems with Stripe payments that replaced manual tracking and made order handling 60% more efficient. I also prototyped AI features with clients, using their order data to surface popular products and target customers.",
                tags: ["Client management", "Requirements", "Scoping", "Delivery", "AI prototyping"],
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
            { group: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL (PostgreSQL)", "Go (Golang)", "Java", "C", "HTML/CSS"] },
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
