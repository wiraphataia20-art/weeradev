export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github?: string;
  live?: string;
  preview: string | null;
  images: string[];
  gradient: string;
  year: string;
  status: "Live" | "In Development" | "Completed";
}

export const projects: Project[] = [
  {
    slug: "all-in-cpe-psru",
    title: "All in CPE PSRU",
    description: "A modern web platform developed for engineering students at PSRU, designed to centralize activities, announcements, and communication in a clean and technology-inspired environment.",
    longDescription:
      "A modern student platform built for the Computer Engineering program at PSRU. The website was designed to provide a centralized space for announcements, student activities, and communication while maintaining a clean, responsive, and technology-inspired interface. The project focuses on creating a seamless digital experience that reflects the identity of the Computer Engineering department.",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/comadv1-app/project-allincpe-react",
    live: "https://project-allincpe-react.vercel.app/",
    preview: "/all in cpe.png",
    images: ["/all in cpe.png"],
    gradient: "linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #0a3040 100%)",
    year: "2025",
    status: "Completed",
  },
  {
    slug: "lab-boy",
    title: "Lab Boy",
    description: "LABBOY is a digital laboratory management platform developed for chemistry classes, allowing students to submit lab results online while enabling instructors to review and manage experiments more efficiently.",
    longDescription:
      "LABBOY is a modern laboratory management platform designed for chemistry education. The system allows students to submit laboratory results digitally instead of using paper-based reports, while instructors can review, manage, and track experiment submissions through a centralized web platform. The project focuses on improving accessibility, organization, and workflow efficiency within laboratory classes.",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/comadv1-app/project_Labboy_js",
    live: "https://project-labboy-js.vercel.app/",
    preview: "/labboy.png",
    images: ["/labboy.png"],
    gradient: "linear-gradient(135deg, #0a1a0f 0%, #0d2b18 50%, #0a3020 100%)",
    year: "2025",
    status: "Completed",
  },
  {
    slug: "uni-sports-scoreboard",
    title: "Uni Sports Scoreboard",
    description: "A real-time university sports tournament platform with live match control, event tracking, automatic standings calculation, and a secure admin panel.",
    longDescription:
      "Uni Sports Scoreboard is a full-stack web application built for managing university sports tournaments across football, futsal, basketball, and volleyball. Admins can create tournaments, register teams with logos, schedule matches, and control live match events including goals, cards, substitutions, and penalty results. Scores update in real time via Firebase Firestore, standings are recalculated automatically after each match, and a built-in timer tracks halves and extra time. The public-facing site shows live matches, match timelines, player stats, and standings — all without requiring a login.",
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Cloudinary"],
    github: "https://github.com/wiraphataia20-art/sports-scoreboard",
    live: "https://sports-scoreboard-two.vercel.app/",
    preview: "/sports-scoreboard-logo.png",
    images: ["/sports-scoreboard-logo.png"],
    gradient: "linear-gradient(135deg, #0a1f0a 0%, #0f2d1a 50%, #0a2010 100%)",
    year: "2025",
    status: "Live",
  },
  {
    slug: "smo-engineering-psru",
    title: "SMO Engineering PSRU",
    description: "Modern engineering student platform for activities, communication, and digital experiences.",
    longDescription:
      "A modern web platform built for engineering students at PSRU designed to centralize club activities, announcements, and member communication in one place. The goal was to create a seamless digital experience that reflects the identity of the engineering faculty while being fast, accessible, and easy to maintain.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/wiraphataia20-art/eit",
    live: "https://eit-chi.vercel.app/",
    preview: "/smo eit psru.png",
    images: ["/smo eit psru.png"],
    gradient: "linear-gradient(135deg, #0f1923 0%, #0a2a4a 50%, #0d3b6e 100%)",
    year: "2026",
    status: "In Development",
  },
  {
    slug: "zerobot",
    title: "Zerobot",
    description: "A Discord bot with AI chat, music playback, smart alerts, and link guard security built to enhance server experience.",
    longDescription:
      "Zerobot is a feature-rich Discord bot designed to make server management and community engagement more enjoyable. It includes an AI-powered chat system using Groq, music playback with queue support, customizable alerts, and a link guard system to protect members from malicious URLs. Built with discord.js and Node.js, Zerobot is modular and easy to extend.",
    tags: ["Node.js", "discord.js", "Groq AI", "Discord Bot"],
    live: "https://discord.com/oauth2/authorize?client_id=1513567393803272342&permissions=8&integration_type=0&scope=bot+applications.commands",
    preview: "/zerobot.png",
    images: ["/zerobot.png", "/logo zero bot.png"],
    gradient: "linear-gradient(135deg, #050d1a 0%, #0a1f3d 50%, #0d2a5a 100%)",
    year: "2026",
    status: "In Development",
  },
  {
    slug: "rov-scoreboard-control",
    title: "ROV Scoreboard Controller",
    description: "A real-time scoreboard control panel for ROV esports broadcasts that connects directly to OBS via WebSocket manage team names, logos, scores, and an auto-rotating info ticker live.",
    longDescription:
      "ROV Scoreboard Controller is a lightweight, browser-based control panel built for live ROV esports broadcasts. It connects to OBS through the OBS WebSocket protocol, letting casters update team names, logos, and scores, set round/best-of/game info, and run an auto-rotating ticker of sponsor or match messages all without touching OBS directly. Built as a single page app with no backend, it can be opened in a regular browser tab or embedded straight inside OBS as a Custom Browser Dock.",
    tags: ["JavaScript", "OBS WebSocket", "HTML/CSS", "Esports Broadcast"],
    live: "https://rov-scoreboard-control.vercel.app/",
    preview: "/rov scoreboard control .png",
    images: ["/rov scoreboard control .png"],
    gradient: "linear-gradient(135deg, #050d1a 0%, #0a1f3d 50%, #0d2a5a 100%)",
    year: "2026",
    status: "Live",
  },
];
