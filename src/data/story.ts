export const skillsConstellation = [
  {
    id: 'react-native',
    name: 'React Native',
    years: 2,
    projects: 8,
    confidence: 92,
    fact: 'Shipped KYC, payments, and push for apps used by 10L+ retailers.',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    years: 2,
    projects: 12,
    confidence: 90,
    fact: 'Scalable APIs, event pipelines, and Hasura GraphQL backends.',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    years: 2,
    projects: 15,
    confidence: 94,
    fact: 'Default language across mobile, web, and API surfaces.',
  },
  {
    id: 'postgres',
    name: 'Postgres',
    years: 2,
    projects: 10,
    confidence: 88,
    fact: 'Schema design, indexes, triggers and Hasura-driven data graphs.',
  },
  {
    id: 'redis',
    name: 'Redis',
    years: 2,
    projects: 5,
    confidence: 80,
    fact: 'Caching and ephemeral state for snappy mobile experiences.',
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    years: 2,
    projects: 7,
    confidence: 86,
    fact: 'Hasura event triggers powering notifications and workflows.',
  },
  {
    id: 'ai',
    name: 'AI',
    years: 1,
    projects: 4,
    confidence: 78,
    fact: 'Building agents and intelligent tooling into product surfaces. currently in learning phase.',
  },
  {
    id: 'docker',
    name: 'Docker',
    years: 2,
    projects: 6,
    confidence: 82,
    fact: 'Containerized services for predictable deploys.',
  },
  {
    id: 'aws',
    name: 'AWS',
    years: 2,
    projects: 5,
    confidence: 80,
    fact: 'SQS queues and EC2 instances for scalable backend services.',
  },
  {
    id: 'firebase',
    name: 'Firebase',
    years: 2,
    projects: 1,
    confidence: 80,
    fact: 'Cloud functions , FCM notifications and crashlytics for mobile apps. ' ,
  },
] as const

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  tech: string[]
  architecture: string
  challenges: string
  github: string
  demo: string
  image: string
  /** Gallery images for the project's detail page. Falls back to [image] when omitted. */
  slides?: string[]
  /** When true, detail page shows GitHub README instead of architecture/challenges. */
  githubReadme?: boolean
}

export const projects: Project[] = [
  {
    id: 'grogo',
    title: 'GroGo',
    subtitle: 'Grocery delivery, end to end',
    description:
      'React Native grocery delivery with Mapbox, Stripe, and microservices talking over RabbitMQ.',
    tech: ['React Native', 'Mapbox', 'Stripe', 'RabbitMQ', 'Node.js'],
    architecture: 'Mobile clients → API gateway → domain microservices → queues → Postgres',
    challenges: 'Realtime courier tracking, payment reliability, and service boundaries that scale.',
    github: 'https://github.com/mnnkhndlwl/kharido',
    demo: 'https://github.com/mnnkhndlwl/kharido',
    image: '/gorgo.png',
    githubReadme: true,
  },
  {
    id: 'leetcode-2.0',
    title: 'LeetCode 2.0',
    subtitle: 'LeetCode clone, end to end',
    description:
      'A full-stack competitive-programming platform: a React Native mobile app where users solve coding problems, submit solutions, and get live judging verdicts streamed back over WebSockets. Submissions run in sandboxed Docker containers via a horizontally-scalable Node judge worker.',
    tech: [
      'React Native',
      'Node.js',
      'Express',
      'Docker',
      'PostgreSQL',
      'Redis',
      'AWS SQS',
      'AWS S3',
      'Socket.IO',
    ],
    architecture:
      'Mobile app → Express API → SQS submission queue → judge-worker (Docker sandboxes) → SQS result queue → results-consumer → PostgreSQL + Redis pub/sub → ws-server → mobile',
    challenges:
      'Sandboxed multi-language code execution, live verdict streaming over WebSockets, and a function-only submission model with hidden driver code and S3-hosted test cases.',
    github: 'https://github.com/mnnkhndlwl/leetcode-2.0',
    demo: 'https://www.youtube.com/watch?v=ho94zXWy_XA',
    image: '/images/leetcode-2.0.png',
    githubReadme: true,
  },
  // {
  //   id: 'compilerxpress',
  //   title: 'CompilerXpress',
  //   subtitle: 'Online IDE in the cloud',
  //   description:
  //     'An online IDE built with Node, Express, React, and Redux Toolkit for writing and running code in the browser.',
  //   tech: ['React', 'Node.js', 'Express', 'Redux Toolkit'],
  //   architecture: 'SPA editor → sandboxed execution API → result streaming',
  //   challenges: 'Safe execution, snappy feedback loops, and a clean developer UX.',
  //   github: 'https://github.com/mnnkhndlwl/CompilerXpress',
  //   demo: 'https://github.com/mnnkhndlwl/CompilerXpress',
  //   image: '/compiler.png',
  // },
  // {
  //   id: 'ludo',
  //   title: 'Ludo Game',
  //   subtitle: 'Playful motion on mobile',
  //   description: 'A Ludo experience in React Native with Redux, Reanimated, and TypeScript.',
  //   tech: ['React Native', 'Redux', 'Reanimated', 'TypeScript'],
  //   architecture: 'Client-side game state with animated board interactions',
  //   challenges: 'Buttery piece motion, turn logic, and delightful micro-interactions.',
  //   github: 'https://github.com/mnnkhndlwl/ludo_game',
  //   demo: 'https://github.com/mnnkhndlwl/ludo_game',
  //   image: '/image.png',
  // },
]

export interface JourneyFeature {
  title: string
  description: string
  screenshots?: string[]
}

export interface JourneySummaryPoint {
  text: string
  link?: {
    label: string
    href: string
  }
}

export type JourneySummaryItem = string | JourneySummaryPoint

export interface JourneyMilestone {
  id: string
  title: string
  role: string
  period: string
  focus: string[]
  /** Plain paragraph, or bullet points when passed as an array. */
  summary: string | JourneySummaryItem[]
  /** Gallery images for the role's detail page. */
  slides?: string[]
  /** Fuller write-up of the role; falls back to rendering `summary` when omitted. */
  overview?: string
  /** Feature-by-feature breakdown, each optionally with its own screenshots. */
  features?: JourneyFeature[]
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: 'blackhat',
    title: 'Blackhat Code Technology',
    role: 'Full Stack Developer Intern',
    period: 'Aug 2023 — Nov 2023',
    focus: ['E-commerce', 'Payments', 'Admin'],
    summary: [
      {
        text: 'Check this at ',
        link: { label: 'Dochomoeo', href: 'https://dochomoeo.com/' },
      },
      'Build the entire platform from scratch',
      'Integrated PhonePe payments',
      'Integrated Shiprocket shipping',
      'Built admin panel for the platform'
    ],
  },
  {
    id: 'badho-intern',
    title: 'Badho Technologies',
    role: 'Full Stack Developer Intern',
    period: 'Mar 2024 — Jul 2024',
    focus: ['React Native', 'GraphQL', 'Postgres','AWS'],
    summary: [
      'Looked into the bugs and issues of the platform',
      'Enchanced the overall ui/ux of the apps',
      'Collaborated directly with cross-functional product and backend engineering teams to ship features end-to-end.',
      'Developed a secure "Employee Master Sign-In" authentication system, enabling support teams to safely access ground staff accounts for rapid operational issue resolution.'
    ],
  },
  {
    id: 'badho',
    title: 'Badho Technologies',
    role: 'Full Stack Developer',
    period: 'Jul 2024 — Jul 2026',
    focus: ['React Native', 'GraphQL', 'Postgres','AWS','Firebase'],
    summary: [
      {
        text: 'Check Badho at ',
        link: { label: 'Badho.in', href: 'https://www.badho.in/' },
      },
      'Architected secure KYC verification flows for enterprise buyer and seller applications using React Native.',
      'Designed a scalable push-notification system leveraging Firebase Cloud Messaging (FCM) and AWS SQS, successfully processing and delivering ~300,000 notifications daily with low latency.',
      'Engineered robust cart and checkout flows in the buyer application, improving overall order conversion rates.',
      'Led cloud infrastructure optimization by migrating production servers to AWS Graviton (ARM64) EC2 instances, reducing monthly AWS compute overhead by 50%.',
      'Established robust system observability by configuring Prometheus, Grafana, and Loki on a self-hosted EC2 instance.',
      'Built and deployed self-hosted CI/CD pipelines via GitHub Actions for mobile app releases and OTA updates, saving $750/month in pipeline costs while accelerating release cycles.'
    ],
  },
  {
    id: 'i3digital',
    title: 'I3DigitalHealth',
    role: 'Mobile Application Developer',
    period: 'Jul 2026 — Present',
    focus: ['React Native', 'Zustand', 'Tanstack','Firebase'],
    summary: [
      'Handling all the mobile development for all the apps of the company',
      'Handling OTA updates and release cycles for all the apps',
      'End to end development of the apps',
      'Implemented frontend side caching using tanstack query',
      {
        text: 'Check Oncopilot at ',
        link: { label: 'playstore', href: 'https://play.google.com/store/apps/details?id=com.oncopilotmobiledev.oncopilotmobileapp&hl=en_IN' },
      },
    ],
  },
]

export const workshopLines = [
  'Building scalable mobile experiences for cancer patients',
  'Implementing frontend side caching using tanstack query',
  'Building scalable mobile experiences for cancer patients',
  'Shipping features that cancer patients feel',
] as const

export const dreams = [
  {
    id: 'realtime',
    title: 'Real-time Systems',
    description: 'Low-latency worlds where every update arrives like light.',
  },
  {
    id: 'agents',
    title: 'AI Agents',
    description: 'Autonomous helpers that understand context and take action.',
  },
  {
    id: 'distributed',
    title: 'Distributed Systems',
    description: 'Resilient architectures that survive chaos and scale with grace.',
  },
  {
    id: 'oss',
    title: 'Open Source',
    description: 'Tools others can build upon — shared, documented, alive.',
  },
  {
    id: 'startups',
    title: 'Startups',
    description: 'Products that begin as sparks and become constellations.',
  },
] as const

export const contact = {
  email: 'mnnkhndlwl24@gmail.com',
  phone: '+91 9810585686',
  location: 'Delhi, India',
  github: 'https://github.com/mnnkhndlwl',
  linkedin: 'https://linkedin.com/in/mnnkhndlwl',
} as const

export const navLinks = [
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'dreams', label: 'Dreams' },
  { id: 'contact', label: 'Contact' },
] as const
