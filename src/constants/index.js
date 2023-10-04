import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    color: "#FFFFFF", // White color in hexadecimal
  },
  {
    id: "work",
    title: "Work",
    color: "#FFFFFF", // White color in hexadecimal
  },
  {
    id: "contact",
    title: "Contact",
    color: "#FFFFFF", // White color in hexadecimal
  },
];


const services = [
  {
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "Backend Integration",
    icon: mobile,
  },
  {
    title: "API Integration",
    icon: backend,
  },
  {
    title: "3D.js Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer (Full Time)",
    company_name: "Soudagar Traders",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Proficiently resolved technical glitches, ensuring the web platform's integrity and delivering a smooth browsing journey for visitors.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Web Developer (Freelancer)",
    company_name: "Authenticity VR",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - August 2022",
    points: [
      "Crafted user-resonating experiences with React for intuitive navigation.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer (Freelancer)",
    company_name: "Fresherone Holdings LLC",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sept 2022 - Jan 2023",
    points: [
      "Spearheaded creation of an end-to-end automated billing system at FreshFoods, Integrating GPS sensors and cloud technology for streamlined invoicing.",
      "Leveraged GPS data for precise billing calculations, ensuring accuracy in distance-based pricing and enhancing financial transparency.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Arshad has been incredibly helpful in finding ways for us to improve the platform.  He has a technical mind and really cares about the projects he takes on - going out of his way to find and suggest improvements",
    name: "Adam Alpert",
    designation: "CEO",
    company: "Pangea.app",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Rarely have I come across a web developer as committed to the triumph of their clients as Arshad; his dedication is truly unparalleled.",
    name: "Nicel M",
    designation: "Chief Reporting Officer",
    company: "FresherOne Holdings",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    testimonial:
      "Arshad is a hustler, a swiss army knife. This guy not only is an expert in software / automation, he researches things deeply and gets stuff done at a high level. He's very autonomous and doesn't wait around and fills in where I'm weak.",
      name: "Garret",
      designation: "CTO",
    company: "AuthentiCITY VR",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  
];

const projects = [
  {
    name: "SaasInnovate.ai",
    description:
      "SaasInnovate.ai is your creative companion, leveraging AI to effortlessly generate text, images, videos, audio, and code - revolutionizing content creation like never before.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "Next.JS",
        color: "pink-text-gradient",
      },
      {
        name: "API Integration",
        color: "green-text-gradient",
      }
    ],
    image: carrent,
    source_code_link: "https://saasinnovateai.vercel.app/",
  },
  
  {
    name: "TweetHub",
    description:
      "TweetHub: Your Microblogging Universe Explore, share, and connect in the limitless cosmos of microblogging on TweetHub! #TweetHub #MicrobloggingUniverse",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next.JS",
        color: "green-text-gradient",
      },
      {
        name: "JWT Auth",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://tweethub-eight.vercel.app/",
  },
  {
    name: "Freelance , Hire me Online",
    description:
      "Enhance your online presence with my freelance expertise on Pangea.app! I'll elevate your web presence to new heights through creative design and strategic digital solutions.",
    tags: [
      {
        name: "Next.JS",
        color: "blue-text-gradient",
      },
      {
        name: "Three.JS",
        color: "green-text-gradient",
      },
      {
        name: "GraphQL",
        color: "blue-text-gradient",
      },
      {
        name: "React.JS",
        color: "green-text-gradient",
      },
      {
        name: "API's ",
        color: "blue-text-gradient",
      },
      {
        name: "Github",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://share.pangea.app/manage/e5f8d399-c261-4a13-94c2-14decf23a8d4",
  },
];

export { services, technologies, experiences, testimonials, projects };
