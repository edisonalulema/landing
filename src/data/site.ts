// Single source for site copy and contact details.

export const site = {
  name: 'Algopop',
  url: 'https://algopop.app',
  email: 'contact@algopop.app',
  linkedin: 'https://www.linkedin.com/company/algopop',
  tagline: 'Senior software & AI engineering studio',
  description:
    'Algopop is a senior engineering studio that designs and builds custom software, AI integrations, mobile apps, and ERP systems for growing businesses across North America.',
  // Existing Brevo form; the contact form posts here directly.
  brevoAction:
    'https://87eee03b.sibforms.com/serve/MUIFAFsVi52UNNWmYpFFLqWEYMTCD5KPFrrvvbsvRVpkScrh_wCHITJBmbwAAz6yAzw3YzADoOGpl2ONwSCNCRg4XadhZqlmDtq-dy40ETkrniyqEf7zVGP8DFCldHUvd0US2lel0nOGPN10gDQiwcD1GhWPMgmpb0U20NWmYSgKuqBzw2JfWh079IboqmAM3y-X07QzaV13vZWY',
};

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Approach', href: '/approach' },
  { label: 'About', href: '/about' },
];

export type Service = {
  slug: string;
  title: string;
  pain: string;
  summary: string;
  deliverables: string[];
  stack: string[];
};

export const services: Service[] = [
  {
    slug: 'custom-software',
    title: 'Custom software',
    pain: 'Running the business on spreadsheets and workarounds?',
    summary:
      'Web platforms, internal tools, and customer portals designed around how your team actually works, then built to keep working as you grow.',
    deliverables: [
      'Product scoping and technical architecture',
      'Full-stack web applications and APIs',
      'Internal tools, dashboards, and admin portals',
      'Rescue and modernization of legacy codebases',
    ],
    stack: ['TypeScript', 'React', 'Node', 'Python', 'Postgres'],
  },
  {
    slug: 'ai-integration',
    title: 'AI integration',
    pain: 'Know AI could help, but not where it actually pays off?',
    summary:
      'Practical AI that lives inside your workflows: agents with real tool access, document and data extraction, and voice assistants, with evaluation and guardrails built in from day one.',
    deliverables: [
      'Use-case assessment and ROI-ranked roadmap',
      'LLM agents connected to your systems and data',
      'Real-time voice AI for phones and support lines',
      'Evaluation, monitoring, and cost controls',
    ],
    stack: ['Claude', 'OpenAI', 'Python', 'FastAPI', 'Vector search'],
  },
  {
    slug: 'mobile',
    title: 'Mobile apps',
    pain: 'Need an app in the store without hiring a mobile team?',
    summary:
      'Cross-platform iOS and Android apps from first prototype through App Store review, with the backend, auth, and messaging they depend on.',
    deliverables: [
      'iOS and Android from one codebase',
      'Auth, payments, push, and SMS flows',
      'App Store and Play Store submission',
      'Release pipelines and over-the-air updates',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Twilio'],
  },
  {
    slug: 'erp',
    title: 'ERP & Odoo',
    pain: 'Outgrowing QuickBooks, or stuck mid-way through an ERP rollout?',
    summary:
      'Odoo implementations, data migrations, and custom modules that connect inventory, sales, and accounting, so your catalog and orders live in one system of record.',
    deliverables: [
      'Odoo setup, configuration, and custom modules',
      'Product catalog and data migration tooling',
      'Integrations with e-commerce, vendors, and shipping',
      'Reporting and workflow automation',
    ],
    stack: ['Odoo', 'Python', 'XML-RPC', 'Postgres'],
  },
  {
    slug: 'cloud',
    title: 'Cloud & DevOps',
    pain: 'Deploys are scary and the cloud bill keeps growing?',
    summary:
      'Infrastructure you can reason about: containerized services, CI/CD, observability, and right-sized hosting on AWS, GCP, Cloudflare, or Vercel.',
    deliverables: [
      'Cloud architecture and migration',
      'CI/CD pipelines and preview environments',
      'Monitoring, alerting, and incident runbooks',
      'Cost and security reviews',
    ],
    stack: ['AWS', 'GCP', 'Docker', 'Cloudflare', 'GitHub Actions'],
  },
  {
    slug: 'data',
    title: 'Data & automation',
    pain: 'Your data is in five tools and none of them agree?',
    summary:
      'Pipelines, integrations, and reporting that move data between your systems reliably, and automations that take repetitive work off your team’s plate.',
    deliverables: [
      'System-to-system integrations and webhooks',
      'Data pipelines and warehousing',
      'Dashboards and business reporting',
      'Workflow automation for ops and finance',
    ],
    stack: ['Python', 'SQL', 'Postgres', 'Redis', 'REST APIs'],
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  services: string[];
  problem: string;
  approach: string;
  outcome: string;
  highlights: string[];
  stack: string[];
};

// Client names are anonymized; confirm each engagement may be shown before publishing.
export const work: CaseStudy[] = [
  {
    slug: 'voice-ai-receptionist',
    client: 'AI SaaS startup',
    title: 'An AI receptionist that answers the phone like a person',
    services: ['AI integration', 'Custom software'],
    problem:
      'Small businesses miss calls all day, and every missed call is a missed booking. Off-the-shelf phone bots sounded robotic and could not touch real calendars.',
    approach:
      'We built a real-time voice pipeline that streams the caller’s audio through speech recognition, an LLM agent with tool access for booking and FAQs, and low-latency speech synthesis, all orchestrated over WebSockets.',
    outcome:
      'Businesses get a receptionist that answers every call, books appointments directly, and routes anything it can’t handle to a human.',
    highlights: [
      'Streaming telephony, STT, LLM, and TTS',
      'Tool use for scheduling and call routing',
      'Owner dashboard for calls, transcripts, and settings',
    ],
    stack: ['Python', 'FastAPI', 'Claude', 'Deepgram', 'Telnyx', 'Postgres', 'Redis'],
  },
  {
    slug: 'consumer-mobile-app',
    client: 'Consumer startup',
    title: 'From prototype to App Store for a consumer mobile app',
    services: ['Mobile apps', 'Cloud & DevOps'],
    problem:
      'A founding team had a validated idea and a deadline, but no mobile engineers and no path through App Store review.',
    approach:
      'We built the iOS and Android app from one React Native codebase, with phone-number sign-in, the backend API, and an automated build-and-submit pipeline.',
    outcome:
      'The team went from prototype to an App Store submission with a release process they can run themselves.',
    highlights: [
      'Cross-platform app from a single codebase',
      'SMS sign-in and A2P messaging compliance',
      'Automated builds, submissions, and OTA updates',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Node', 'Twilio'],
  },
  {
    slug: 'odoo-catalog-migration',
    client: 'Building-materials distributor',
    title: 'Moving a decades-old product catalog into Odoo',
    services: ['ERP & Odoo', 'Data & automation'],
    problem:
      'A distributor moving to Odoo for e-commerce, inventory, and invoicing had thousands of products identified only by cryptic 18-character vendor codes it could not show customers.',
    approach:
      'We designed a customer-facing product code system, wrote tooling to decode vendor codes into material, color, size, and finish, and generated Odoo-ready product variants straight from the source data.',
    outcome:
      'The catalog moved into Odoo with clean, customer-safe product codes, while vendor codes stay internal for purchasing.',
    highlights: [
      'Vendor code decoder and validation',
      'Automated Odoo product variant generation',
      'Supplier details kept away from customers',
    ],
    stack: ['Odoo', 'Python', 'XML-RPC', 'CSV pipelines'],
  },
  {
    slug: 'gym-discovery-platform',
    client: 'Marketplace startup',
    title: 'A discovery and reviews platform for martial arts gyms',
    services: ['Custom software'],
    problem:
      'Martial artists had no reliable way to compare gyms by discipline, schedule, and real student reviews.',
    approach:
      'We built a full-stack web platform with authenticated profiles, search and filtering, and moderated reviews on a relational data model designed to grow with new disciplines and regions.',
    outcome:
      'A launch-ready marketplace foundation that the founders can extend without a rewrite.',
    highlights: [
      'Search and filters by discipline and location',
      'Authenticated reviews and gym profiles',
      'Typed API from database to UI',
    ],
    stack: ['React', 'TypeScript', 'Express', 'Postgres', 'Clerk'],
  },
];

export const process = [
  {
    step: '01',
    title: 'Intro call',
    time: '30 min, free',
    body: 'Tell us what you’re trying to do. We’ll ask hard questions and tell you honestly whether we’re the right fit, even if the answer is no.',
  },
  {
    step: '02',
    title: 'Scoping sprint',
    time: '1–2 weeks, fixed price',
    body: 'We map the problem, the risks, and the architecture, then hand you a written plan, a timeline, and a firm quote. The plan is yours to keep either way.',
  },
  {
    step: '03',
    title: 'Build',
    time: 'Weekly demos',
    body: 'Short iterations with working software at every demo. You get access to the repo, the board, and the engineers. No black boxes.',
  },
  {
    step: '04',
    title: 'Launch & support',
    time: 'Ongoing',
    body: 'We ship to production, document everything, and either hand off cleanly to your team or stay on to maintain and grow it.',
  },
];

export const engagements = [
  {
    title: 'Fixed-scope project',
    fit: 'Best for: a defined product, feature, or migration',
    body: 'A clear scope, a fixed quote, and a delivery date, agreed after the scoping sprint.',
    points: ['Fixed price and timeline', 'Milestone-based billing', '30 days of post-launch fixes'],
  },
  {
    title: 'Embedded engineering',
    fit: 'Best for: ongoing product work',
    body: 'Senior engineers working inside your team, your tools, and your rituals on a monthly retainer.',
    points: ['Monthly retainer', 'Scale up or down with 30 days’ notice', 'Works with your existing team'],
  },
  {
    title: 'Fractional CTO',
    fit: 'Best for: founders and non-technical leaders',
    body: 'Technical leadership without a full-time hire: architecture, vendor and hiring decisions, and roadmap.',
    points: ['A few hours a week', 'Architecture and code reviews', 'Hiring and vendor guidance'],
  },
];

export const principles = [
  {
    title: 'Senior people only',
    body: 'The engineers you meet on the first call are the engineers who write your code. Nothing gets passed down to a junior bench.',
  },
  {
    title: 'You own everything',
    body: 'Code, infrastructure, accounts, and documentation belong to you from the first commit. No lock-in, no hostage situations.',
  },
  {
    title: 'Boring where it counts',
    body: 'Proven tools for the foundation and new technology only where it earns its keep. Your software should outlive the hype cycle.',
  },
  {
    title: 'Straight answers',
    body: 'We tell you what something will cost, what could go wrong, and when you don’t need us. Trust is the whole business.',
  },
];

export const faq = [
  {
    q: 'How much does a project cost?',
    a: 'It depends on scope, which is why every engagement starts with a short, fixed-price scoping sprint. You leave it with a written plan and a firm quote. Ongoing work is billed as a monthly retainer, so you always know the number in advance.',
  },
  {
    q: 'How quickly can you start?',
    a: 'Usually within one to two weeks of the intro call. The scoping sprint itself takes one to two weeks, and most builds ship a first working version to a staging environment within the first month.',
  },
  {
    q: 'Who owns the code and IP?',
    a: 'You do, completely. Everything lives in your repositories and cloud accounts from day one, and all intellectual property transfers to you.',
  },
  {
    q: 'Can you work with our existing team or codebase?',
    a: 'Yes. A lot of our work is joining an existing team, rescuing a stalled project, or modernizing a codebase someone else started. We adapt to your tools and process.',
  },
  {
    q: 'Do you only build AI projects?',
    a: 'No. AI is one of six practice areas. We recommend it only where it clearly beats a simpler solution, and plenty of the best projects involve no AI at all.',
  },
  {
    q: 'Where are you based?',
    a: 'We are US-based and work with clients across North America, on US time zones, with remote collaboration and on-site visits when they help.',
  },
];

export const stackMarquee = [
  'TypeScript', 'React', 'React Native', 'Python', 'FastAPI', 'Node.js', 'Postgres', 'Redis',
  'AWS', 'Google Cloud', 'Cloudflare', 'Docker', 'Odoo', 'Claude', 'OpenAI', 'Twilio',
];
