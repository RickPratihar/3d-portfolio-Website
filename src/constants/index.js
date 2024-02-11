import { m } from "framer-motion";
import {
    mobile,
    backend,
    creator,
    web,
    // twitter,
    // instagram,
    // linkedin,
    // spotify,
    // github,
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
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "project",
      title: "Projects",
    },
  ];

  // const social = [
  //   {
  //     name:"Linkedin",
  //     icon: linkedin,
  //     link: "https://www.linkedin.com/in/rick-pratihar-881771212/"
  //   },
  //   {
  //     name:"Instagram",
  //     icon: instagram,
  //     link: "https://www.instagram.com/a_wave_with_0_amplitude/"
  //   },
  //   {
  //     name:"Github",
  //     icon: github,
  //     link: "https://github.com/rick7890"
  //   },
  //   {
  //     name:"Twitter",
  //     icon: twitter,
  //     link: "https://twitter.com/xcavator58"
  //   },
  //   {
  //     name: "Spotify",
  //     icon: spotify,
  //     link: "https://open.spotify.com/user/4h0tl3w6vz5333qsdr1zbhtox?si=a52e2382de164e97"
  //   }
  // ]
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "WordPress Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Bloggerr",
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Full stack Developer intern",
      company_name: "PW Skills",
      icon:meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using HTML5, Css3, JavaScript, React.js and other related technologies.",
        "Developed a project using the technologies mentiomed as a final project to be submitted at the end of internship",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "WordPress Developer",
      company_name: "UDRF Trust",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "Jul 2023 - Jul 2024",
      points: [
        "Developing and maintaining web applications using WordPress and other related technologies.",
        "Install all plaugin and set payment get Way creating page like donation, about, contact us etc.  ",
        "Manage website and create regalur post for this website ",
        "And also Create SEO Friendly content for better Traffic ",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services,  technologies, experiences, testimonials, projects, };