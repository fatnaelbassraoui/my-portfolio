import {
  instagram,
  facebook,
  linkedin,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  github,
  bootstrap,
  framerMotio,
  daisyui,
  figma,
  crm,
  bookStore,
  travelAgency,
  library,
  bouncingBall,
  corporateWebsite,
  bootstrapExample,
  mern,
  blogProject,
  mediumHomePage,
} from "../Assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const skills = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Mern Stack",
    icon: mern,
  },
  {
    title: "Content Creator",
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "framer motion",
    icon: framerMotio,
  },
  {
    name: "daisyui",
    icon: daisyui,
  },
  {
    name: "figma",
    icon: figma,
  },
];


const projects = [
  {
    name: "Travel Blog",
    description:
      "In this travel blog the user will find a mini-guide on Morocco's most important cities and places to visit. Realized front-end side with React, Redux Toolkit, Tailwind and back-end side Node.js ,Express and Mongo Db Atlas as DataBase",

    image: blogProject,
    web_site_link: "https://morocco-travel-blog.netlify.app",
    // source_code_link: "https://github.com/fatnaelbassraoui/blog-project",
    // source_code_link2: "https://github.com/fatnaelbassraoui/ServerBlog"
  },
  {
    name: "Dental clinic Crm",
    description:
      "Crm for a dental clinic. You can manage appointments, client and doctors databases.  Realized front-end side with React,Javascript, Redux Toolkit, Tailwindcss and Back-end side with Node.js, Express and Mongo Db Atlas as DataBase.",

    image: crm,
    web_site_link: "https://www.loom.com/share/23a8953ce19444bda43fc497b8a63378",
    // source_code_link: "https://github.com/fatnaelbassraoui/crm-Fe",
    // source_code_link2: "https://github.com/fatnaelbassraoui/crm-server"
  },
  {
    name: "Web corporation",
    description:
      "Example of a web corporation built  with React, Javascript, DaisyUi, Tailwindcss and framer Motion and Leaflet",

    image: corporateWebsite,
    web_site_link: "https://web-corporation.netlify.app",
    // source_code_link: "https://github.com/fatnaelbassraoui/corporate-website",
    // source_code_link2: "https://github.com/fatnaelbassraoui/crm-server"
  },


];

const projects2 = [
  {
    name: "Medium home page",
    description:
      "Creating Medium's homepage copy using Html and Css ",

    image: mediumHomePage,
    source_code_link: "https://github.com/fatnaelbassraoui/medium-home-page",
  },
  {
    name: "Library",
    description:
      "Creating a library, with API requests to get the list of books using React, Javascript and Tailwindcss",

    image: library,
    source_code_link: "https://github.com/fatnaelbassraoui/libary",
  },
  {
    name: "Book store",
    description:
      "API to get store items list made with React, Javascript and Bootstrap",

    image: bookStore,
    source_code_link: "https://github.com/fatnaelbassraoui/book-store/tree/main",
  },
  {
    name: "Travel Agency",
    description:
      "Travel agency home page made entirely with Bootstrap",

    image: travelAgency,

    source_code_link: "https://github.com/fatnaelbassraoui/travel-Agency/tree/main",
  },
  {
    name: "Bouncing ball",
    description:
      " Bouncing ball effect using animation property and keyframes",

    image: bouncingBall,

    source_code_link: "https://github.com/fatnaelbassraoui/bouncing-ball",
  },
  {
    name: "Bootstrap ",
    description:
      "Web Site built entirely with Bootstrap",

    image: bootstrapExample,

    source_code_link: "https://github.com/fatnaelbassraoui/bootsrap-example",
  },

]

const socialContacts = [
  {
    name: "linkedin",

    image: linkedin,
    link: "https://www.linkedin.com/in/fatna-el-bassraoui-830894261/",
  },
  {
    name: "facebook",

    image: facebook,
    link: "https://www.facebook.com/cristina.benedetti.9862",
  },
  {
    name: "instagram",

    image: instagram,
    link: "https://www.instagram.com/fatyelba/",
  }

]

export { skills, technologies, projects, projects2, socialContacts };