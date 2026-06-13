export type Project = {
  title: string;
  year: string;
  tech: string[];
  description: string;
  github: string;
};

export const projects: Project[] = [
  {
    title: "SDN Traffic Monitoring — Network Controller",
    year: "2026",
    tech: ["Python", "Ryu SDN Framework", "Mininet", "OpenFlow 1.3"],
    description:
      "Built a Software Defined Networking controller using Ryu to monitor real-time traffic, collect flow statistics, perform network analysis, and visualize network behavior using Mininet and OpenFlow.",
    github: "https://github.com/vinnieee7/sdn-traffic-monitoring-ryu",
  },
  {
    title: "Steganography Web App — Secure Message Hiding",
    year: "2025",
    tech: ["Python", "Flask", "AES-CFB", "PBKDF2", "Pillow", "NumPy"],
    description:
      "Developed a secure web application that encrypts messages with AES-256-CFB and hides them inside PNG images using LSB steganography while maintaining visual fidelity.",
    github: "https://github.com/vinnieee7/steganography-repo",
  },
  {
    title: "Rock Paper Scissors",
    year: "2025",
    tech: ["JavaScript", "HTML", "CSS"],
    description:
      "Interactive browser-based game with dynamic gameplay, score tracking, animations, and responsive design.",
    github: "https://github.com/vinnieee7/rock-paper-scissors",
  },
  {
    title: "Recipe Finder",
    year: "2025",
    tech: ["C", "File I/O", "Data Structures"],
    description:
      "CLI application that searches recipes using efficient string matching and file-based data storage.",
    github: "https://github.com/vinnieee7/C_recipe_finder",
  },
];

export type SkillCategory = { title: string; skills: string[] };

export const skillCategories: SkillCategory[] = [
  { title: "Languages", skills: ["Python", "C", "JavaScript", "TypeScript"] },
  { title: "Web", skills: ["HTML", "CSS", "React", "Tailwind CSS"] },
  {
    title: "Cybersecurity",
    skills: ["Network Security", "OWASP", "Linux Security", "Cryptography", "Steganography"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Linux", "Wireshark", "Mininet", "Ryu SDN"],
  },
  {
    title: "Concepts",
    skills: ["Data Structures", "Networking", "Operating Systems", "Software Engineering"],
  },
];

export const contact = {
  email: "vincent2maran@gmail.com",
  github: "https://github.com/vinnieee7",
};