export const skillsConstellation = [
  {
    id: 'react-native',
    name: 'React Native',
    years: 3,
    projects: 8,
    confidence: 92,
    fact: 'Shipped KYC, payments, and push for apps used by 10L+ retailers.',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    years: 3,
    projects: 12,
    confidence: 90,
    fact: 'Microservices, event pipelines, and Hasura GraphQL backends.',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    years: 3,
    projects: 15,
    confidence: 94,
    fact: 'Default language across mobile, web, and API surfaces.',
  },
  {
    id: 'go',
    name: 'Go',
    years: 1,
    projects: 2,
    confidence: 68,
    fact: 'Exploring for high-throughput real-time services.',
  },
  {
    id: 'postgres',
    name: 'Postgres',
    years: 3,
    projects: 10,
    confidence: 88,
    fact: 'Schema design, indexes, and Hasura-driven data graphs.',
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
    fact: 'Building agents and intelligent tooling into product surfaces.',
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
    fact: 'SQS queues and cloud messaging for reliable async work.',
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
  },
  {
    id: 'compilerxpress',
    title: 'CompilerXpress',
    subtitle: 'Online IDE in the cloud',
    description:
      'An online IDE built with Node, Express, React, and Redux Toolkit for writing and running code in the browser.',
    tech: ['React', 'Node.js', 'Express', 'Redux Toolkit'],
    architecture: 'SPA editor → sandboxed execution API → result streaming',
    challenges: 'Safe execution, snappy feedback loops, and a clean developer UX.',
    github: 'https://github.com/mnnkhndlwl/CompilerXpress',
    demo: 'https://github.com/mnnkhndlwl/CompilerXpress',
    image: '/compiler.png',
  },
  {
    id: 'ludo',
    title: 'Ludo Game',
    subtitle: 'Playful motion on mobile',
    description: 'A Ludo experience in React Native with Redux, Reanimated, and TypeScript.',
    tech: ['React Native', 'Redux', 'Reanimated', 'TypeScript'],
    architecture: 'Client-side game state with animated board interactions',
    challenges: 'Buttery piece motion, turn logic, and delightful micro-interactions.',
    github: 'https://github.com/mnnkhndlwl/ludo_game',
    demo: 'https://github.com/mnnkhndlwl/ludo_game',
    image: '/image.png',
  },
]

export interface JourneyFeature {
  title: string
  description: string
  screenshots?: string[]
}

export interface JourneyMilestone {
  id: string
  title: string
  role: string
  period: string
  focus: string[]
  summary: string
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
    summary:
      'Enhanced checkout on Dochomoe, built an admin dashboard, and integrated PhonePe + Shiprocket.',
  },
  {
    id: 'badho-intern',
    title: 'Badho Technologies',
    role: 'Full Stack Developer Intern',
    period: 'Mar 2024 — Jul 2024',
    focus: ['React Native', 'GraphQL', 'Postgres'],
    summary:
      'Master sign-in for support, My Sellers discovery, and groundwork for apps used across India.',
  },
  {
    id: 'badho',
    title: 'Badho Technologies',
    role: 'Full Stack Developer',
    period: 'Jul 2024 — Present',
    focus: ['React Native', 'Backend', 'AI'],
    summary:
      'KYC, purchase order dispatch, FCM + SQS notifications, payments — shipping for 10L+ retailers.',
  },
]

export const workshopLines = [
  'Building scalable mobile experiences',
  'Wiring event-driven backends',
  'Exploring AI agents in product flows',
  'Shipping features that retailers feel',
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
