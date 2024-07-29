import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a creative front-end developer with a curiosity that leads me to take on challenges and leverage my natural problem-solving abilities in order to build better user interfaces.  My 3 years of experience have led me to master technologies like React.js and Typescript. Additionally, I have explored back-end technologies such as Java and contributed to production with minimal assistance.`;

export const ABOUT_TEXT = `I strive to learn new technologies whenever I have the chance. Getting to keep my mind sharp by coding new projects makes me happy. In my free time, I enjoy sunshine, my puppies, my family, and the beach.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Software Engineer II",
    company: "Intuit",
    description: [
      "Improved data discoverability by 26% of clean, consumable data by developing and illustrating new data models.",
      "Successfully deployed a comprehensive feature developed during Global Engineering Days, a weeklong hackathon. This project aimed to provide users with a detailed and comprehensive data overview, leading to 20% increased data outreach to users.",
      "Developed new APIs while integrating security features and adhering to OpenAPI specifications.",
      "Developed a step-by-step guide for instrumentation, empowering team members to implement and monitor instrumentation clicks, which led to a 31% increase in team utilization, laying the foundation for building illustrative dashboards and charts.",
      "Ensured high-quality standards for all front-end code, conducting thorough reviews and testing to maintain excellence in deliverables.",
      "Worked closely with cross-functional teams to develop innovative solutions to complex problems, demonstrating strong collaboration and communication skills."
    ],
    technologies: ["JavaScript", "React.js", "CSS", "Typescript", "Java"],
  },
  {
    year: "2021 - 2022",
    role: "Front-End Developer",
    company: "Nucamp Coding Bootcamp",
    description: [
      "Built a fully responsive website with Bootstrap that utilized JavaScript, HTML, and CSS.",
      "Implemented Redux in my Nucamp React project which led to optimized application performance and state management.",
      "Converted my Nucamp React project to React Native in order to reach a broader audience with a user-friendly mobile application."
    ],
    technologies: ["HTML", "CSS", "React.js", "React Native"],
  }
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
  },
  {
    title: "Crypto Check",
    image: project4,
    description:
      "A cryptocurrency app, created with React, that efficiently and seamlessly allows a user to search \n" +
        "and access the current price, market cap, and price change of any crypto coin. Utilizes the \n" +
        "CoinGecko API which proves to be comprehensive and reliable.",
    technologies: ["React", "CSS", "HTML", "Firebase"],
  },
];

export const CONTACT = {
  address: "San Francisco, CA",
  email: "rylidavis.sf@gmail.com",
};
