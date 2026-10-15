// Portfolio configuration data
export const portfolioData = {
  personal: {
    name: "Keitaro Dior Purnomo",
    role: "IT Education Student",
    typedRoles: [
      "Java Developer",
      "PHP Web Developer",
      "C++ Programmer",
      "Flutter Mobile Developer"
    ],
    status: "Student at Universitas Brawijaya",
    location: "Malang, East Java",
    email: "keitarodior1572@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    bio: "1st semester student of Information Technology Education at Universitas Brawijaya. Passionate about software development and mastering Java, PHP, C++, and Flutter to build functional, efficient, and modern applications.",
    resumeUrl: "#",
    stats: [
      { label: "Semester", value: "1" },
      { label: "Projects", value: "2" },
      { label: "GitHub Repos", value: "5+" },
      { label: "Technologies", value: "4" }
    ]
  },

  skills: [
    {
      category: "Java",
      items: [
        { name: "Java SE", level: 88, icon: "Code2" },
        { name: "Spring Boot", level: 80, icon: "Server" },
        { name: "OOP & Design Patterns", level: 85, icon: "Layers" },
        { name: "Maven / Gradle", level: 78, icon: "Package" },
        { name: "JUnit Testing", level: 75, icon: "CheckCircle2" }
      ]
    },
    {
      category: "PHP",
      items: [
        { name: "PHP Native", level: 85, icon: "FileCode2" },
        { name: "Laravel", level: 82, icon: "Globe" },
        { name: "CodeIgniter", level: 78, icon: "Zap" },
        { name: "MySQL & PDO", level: 84, icon: "Database" },
        { name: "REST API", level: 80, icon: "Network" }
      ]
    },
    {
      category: "C++",
      items: [
        { name: "C++ Modern (17/20)", level: 82, icon: "Cpu" },
        { name: "Data Structures", level: 86, icon: "GitFork" },
        { name: "Algorithms", level: 84, icon: "Terminal" },
        { name: "OOP in C++", level: 80, icon: "Box" },
        { name: "STL & Templates", level: 78, icon: "Workflow" }
      ]
    },
    {
      category: "Flutter",
      items: [
        { name: "Flutter & Dart", level: 85, icon: "Smartphone" },
        { name: "State Management", level: 80, icon: "Layers" },
        { name: "Firebase Integration", level: 78, icon: "Flame" },
        { name: "REST API Integration", level: 82, icon: "Radio" },
        { name: "UI/UX Mobile", level: 80, icon: "Palette" }
      ]
    }
  ],

  projects: [
    {
      id: "nexus-ai",
      title: "NexusAI Agentic Workflow Studio",
      category: "AI & Full-Stack",
      tagline: "Autonomous multi-agent orchestration engine with real-time DAG visualizer",
      description: "A developer-first platform allowing engineering teams to design, evaluate, and deploy cooperating LLM agents with sub-50ms streaming trace graphs.",
      fullDescription: "NexusAI solves the debugging opacity problem in multi-agent LLM workflows. Built with React 19, WebGL canvas node editor, and a Python streaming backend, users can simulate conversational branches, inspect token latencies, and hot-reload model prompts in real-time.",
      architecture: "React 19 Frontend + WebSocket Streaming + FastAPI Python Backend + Redis Vector Store + Docker Deployments.",
      metrics: "⚡ 65% faster prompt debugging • 5,000+ active developers • 99.98% pipeline uptime",
      tags: ["React 19", "TypeScript", "FastAPI", "WebSockets", "Canvas DAG", "Tailwind"],
      gradient: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)",
      accentColor: "#00f2fe",
      demoUrl: "https://example.com/nexus-ai",
      githubUrl: "https://github.com/example/nexus-ai",
      featured: true
    },
    {
      id: "aura-pay",
      title: "AuraPay Institutional Treasury",
      category: "Fintech & Web3",
      tagline: "Cross-border algorithmic liquidity settlement and real-time ledger",
      description: "High-throughput financial dashboard managing enterprise multi-currency payouts, compliance audits, and automated yield routing with sub-second finality.",
      fullDescription: "AuraPay empowers global organizations to automate treasury operations across 40+ currencies. Features biometric authorization, military-grade end-to-end encryption, automated tax reporting, and animated financial charting built with custom SVG shaders.",
      architecture: "Next.js 15 App Router + Rust Core Ledger Engine + PostgreSQL Row-Level Security + Plaid Banking API.",
      metrics: "💳 $45M+ monthly transaction volume • 0 security incidents • 240ms median checkout",
      tags: ["Next.js 15", "TypeScript", "Rust Ledger", "PostgreSQL", "SVG Charts", "Tailwind"],
      gradient: "linear-gradient(135deg, #c084fc 0%, #ec4899 100%)",
      accentColor: "#c084fc",
      demoUrl: "https://example.com/aurapay",
      githubUrl: "https://github.com/example/aurapay",
      featured: true
    },
    {
      id: "cloud-pulse",
      title: "CloudPulse Observability Engine",
      category: "DevOps & Cloud",
      tagline: "Unified microservices telemetry, anomaly detection, and distributed tracing",
      description: "Enterprise observability dashboard processing 100M+ daily events with predictive incident warning, dynamic topology graphs, and instant log correlation.",
      fullDescription: "CloudPulse reduces MTTR (Mean Time to Resolution) by 70% by synthesizing metrics, logs, and traces into intuitive heatmaps and interactive topology maps. It includes intelligent alert thresholding driven by lightweight time-series forecasting.",
      architecture: "React + D3.js Visualization + Go (Golang) Data Ingestion + ClickHouse + OpenTelemetry + K8s.",
      metrics: "📉 70% reduction in MTTR • 100M+ telemetry events/day • 60fps graph rendering",
      tags: ["React", "D3.js", "Go", "ClickHouse", "OpenTelemetry", "Docker"],
      gradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
      accentColor: "#10b981",
      demoUrl: "https://example.com/cloudpulse",
      githubUrl: "https://github.com/example/cloudpulse",
      featured: true
    },
    {
      id: "spatial-cine",
      title: "CineSpatial 3D Virtual Gallery",
      category: "WebGL & Creative",
      tagline: "Interactive 3D spatial web experience with procedural lighting and spatial audio",
      description: "An experimental interactive 3D web gallery allowing visitors to explore generative architectural spaces, curate digital art, and experience spatial audio.",
      fullDescription: "Built with React Three Fiber, Three.js, and custom GLSL post-processing shaders. Features progressive asset loading, bloom lighting passes, physics collisions, and dynamic audio panning driven by user viewpoint coordinates.",
      architecture: "React Three Fiber + Three.js + GLSL Shaders + Web Audio API + Vite.",
      metrics: "🎨 60 FPS smooth mobile WebGL • 2.1s initial cold load • Featured on Awwwards Nominee",
      tags: ["Three.js", "React Three Fiber", "GLSL", "Web Audio", "Vite"],
      gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
      accentColor: "#f59e0b",
      demoUrl: "https://example.com/spatial-cine",
      githubUrl: "https://github.com/example/spatial-cine",
      featured: false
    },
    {
      id: "pulsetask",
      title: "PulseTask Real-Time Collaboration",
      category: "Full-Stack",
      tagline: "Multiplayer workspace with offline-first CRDT synchronization",
      description: "Blazing fast task workspace featuring optimistic UI updates, live collaborator cursors, Kanban swimlanes, and automated sprint velocity burndown charts.",
      fullDescription: "Built from the ground up for high-velocity teams. Incorporates conflict-free replicated data types (CRDTs) to allow seamless offline work with zero merge conflicts when internet connection resumes.",
      architecture: "React + Zustand + Node.js WebSockets + Redis Pub/Sub + IndexedDB Client Cache.",
      metrics: "⚡ Zero sync latency (<15ms) • 100% offline capability • 20k+ daily active tasks",
      tags: ["React", "Zustand", "Node.js", "WebSockets", "Redis", "IndexedDB"],
      gradient: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
      accentColor: "#38bdf8",
      demoUrl: "https://example.com/pulsetask",
      githubUrl: "https://github.com/example/pulsetask",
      featured: false
    },
    {
      id: "verve-health",
      title: "Verve BioMetric Precision",
      category: "AI & Full-Stack",
      tagline: "Personalized metabolic health companion with predictive trend modeling",
      description: "Healthcare analytics progressive web application providing continuous biomarker insights, sleep recovery indexing, and diet synchronization.",
      fullDescription: "Integrates with Apple HealthKit and Garmin APIs to deliver actionable health intelligence. Uses client-side encrypted storage and machine learning models to forecast energy levels and optimal recovery windows.",
      architecture: "React PWA + Tailwind CSS + Python / PyTorch + Supabase Auth & Storage.",
      metrics: "🩺 94% patient adherence rate • HIPAA compliant architecture • 4.9★ App Rating",
      tags: ["React PWA", "Tailwind", "Python", "Supabase", "Chart.js"],
      gradient: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
      accentColor: "#10b981",
      demoUrl: "https://example.com/verve",
      githubUrl: "https://github.com/example/verve",
      featured: false
    }
  ],

  experience: [
    {
      period: "2025 — Present",
      role: "Active Student — 1st Semester",
      company: "Universitas Brawijaya",
      location: "Malang, East Java",
      description: "Pursuing a Bachelor's degree in Information Technology Education at the Faculty of Education, Universitas Brawijaya. Actively engaged in academic coursework and software development projects.",
      highlights: [
        "Developed a mobile Academic Information System (Siakad) app using Flutter",
        "Built a digital library web application using PHP as a course project",
        "Learning foundational programming concepts in Java, C++, and web development"
      ],
      skills: ["Java", "PHP", "C++", "Flutter", "MySQL", "HTML/CSS"]
    },
    {
      period: "2024",
      role: "Internship",
      company: "Telkom Indonesia — Witel Malang Karangploso",
      location: "Karangploso, Malang, East Java",
      description: "Completed an internship program at PT Telkom Indonesia, Witel Malang, Karangploso branch. Involved in operational activities and IT systems development.",
      highlights: [
        "Assisted in managing internal information systems and office networking",
        "Participated in the IT team for technology infrastructure maintenance",
        "Gained hands-on experience in a professional telecommunications work environment"
      ],
      skills: ["Networking", "IT Support", "Information Systems", "Troubleshooting"]
    }
  ],

  education: [
    {
      degree: "B.Ed. in Information Technology Education",
      institution: "Universitas Brawijaya",
      period: "2025 — Present",
      details: "Faculty of Education, Universitas Brawijaya — currently in 1st semester. Studying computer science fundamentals, algorithms, Java, C++, PHP programming, and mobile application development with Flutter."
    }
  ],

  testimonials: [
    {
      quote: "Keitaro has a rare superpower: the ability to architect bulletproof backend architectures while having the aesthetic eye and finesse of an elite product designer. Our app's launch was a runaway success because of Kei.",
      author: "Elena Rostova",
      title: "VP of Product",
      company: "Synthetix Cloud Labs",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "Working with Kei was the best decision we made for our seed round. He transformed our messy prototype into an ultra-fast, jaw-dropping Web app that won over every single investor during demos.",
      author: "Marcus Chen",
      title: "Co-Founder & CEO",
      company: "AuraPay Treasury",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "Exceptional code quality, thoughtful communication, and an obsession with user delight. Kei doesn't just write code; he elevates the standard of the entire engineering team.",
      author: "David Vance",
      title: "Head of Engineering",
      company: "Hyperion Digital",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ]
};
