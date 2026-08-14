export const skillsConstellation = [
  {
    id: 'react-native',
    name: 'React Native',
    years: 3,
    projects: 8,
    confidence: 92,
    fact: 'Shipped KYC, payments, and push for apps used by 10L+ retailers.',
    position: { x: -2.2, y: 1.4, z: 0 },
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    years: 3,
    projects: 12,
    confidence: 90,
    fact: 'Microservices, event pipelines, and Hasura GraphQL backends.',
    position: { x: 0.4, y: 2.1, z: 0.2 },
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    years: 3,
    projects: 15,
    confidence: 94,
    fact: 'Default language across mobile, web, and API surfaces.',
    position: { x: 2.0, y: 1.2, z: -0.1 },
  },
  {
    id: 'go',
    name: 'Go',
    years: 1,
    projects: 2,
    confidence: 68,
    fact: 'Exploring for high-throughput real-time services.',
    position: { x: -1.6, y: -0.3, z: 0.3 },
  },
  {
    id: 'postgres',
    name: 'Postgres',
    years: 3,
    projects: 10,
    confidence: 88,
    fact: 'Schema design, indexes, and Hasura-driven data graphs.',
    position: { x: 0.2, y: 0.1, z: 0 },
  },
  {
    id: 'redis',
    name: 'Redis',
    years: 2,
    projects: 5,
    confidence: 80,
    fact: 'Caching and ephemeral state for snappy mobile experiences.',
    position: { x: 1.8, y: -0.5, z: 0.2 },
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    years: 2,
    projects: 7,
    confidence: 86,
    fact: 'Hasura event triggers powering notifications and workflows.',
    position: { x: -0.6, y: -1.5, z: -0.2 },
  },
  {
    id: 'ai',
    name: 'AI',
    years: 1,
    projects: 4,
    confidence: 78,
    fact: 'Building agents and intelligent tooling into product surfaces.',
    position: { x: 1.1, y: -1.8, z: 0.1 },
  },
  {
    id: 'docker',
    name: 'Docker',
    years: 2,
    projects: 6,
    confidence: 82,
    fact: 'Containerized services for predictable deploys.',
    position: { x: -2.4, y: -1.2, z: 0 },
  },
  {
    id: 'aws',
    name: 'AWS',
    years: 2,
    projects: 5,
    confidence: 80,
    fact: 'SQS queues and cloud messaging for reliable async work.',
    position: { x: 2.5, y: 0.4, z: -0.3 },
  },
] as const

export const projectPlanets = [
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
    texture: '/textures/planets/jupiter.jpg',
    color: '#7c5cff',
    atmosphere: '#c4b5fd',
    position: { x: -3.2, y: 0.6, z: 0 },
    size: 1.15,
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
    texture: '/textures/planets/neptune.jpg',
    color: '#38bdf8',
    atmosphere: '#bae6fd',
    position: { x: 0.2, y: -0.4, z: 0.5 },
    size: 1.0,
  },
  {
    id: 'ludo',
    title: 'Ludo Game',
    subtitle: 'Playful motion on mobile',
    description:
      'A Ludo experience in React Native with Redux, Reanimated, and TypeScript.',
    tech: ['React Native', 'Redux', 'Reanimated', 'TypeScript'],
    architecture: 'Client-side game state with animated board interactions',
    challenges: 'Buttery piece motion, turn logic, and delightful micro-interactions.',
    github: 'https://github.com/mnnkhndlwl/ludo_game',
    demo: 'https://github.com/mnnkhndlwl/ludo_game',
    image: '/image.png',
    texture: '/textures/planets/mars.jpg',
    color: '#f472b6',
    atmosphere: '#fbcfe8',
    position: { x: 3.0, y: 0.8, z: -0.2 },
    size: 0.9,
  },
] as const

export const assetCredits = [
  {
    name: 'Planet & moon surface maps',
    author: 'NASA imagery via threex.planets',
    license: 'Public domain / free redistribution',
    url: 'https://github.com/jeromeetienne/threex.planets',
    use: 'Moon texture in the sky canvas',
  },
] as const

export const journeyMilestones = [
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
] as const

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

export const chapters = [
  { id: 'beginning', label: 'Beginning' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'workshop', label: 'Workshop' },
  { id: 'dreams', label: 'Dreams' },
  { id: 'observatory', label: 'Observatory' },
] as const
