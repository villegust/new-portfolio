import html5 from "../images/skills/html5.png";
import css3 from "../images/skills/css3.png";
import javascript from "../images/skills/javascript.png";
import sass from "../images/skills/sass.png";
import react from "../images/skills/react.png";
import typescript from "../images/skills/typescript.png";
import nextjs from "../images/skills/nextjs.png";
import nodejs from "../images/skills/nodejs.png";
import mongodb from "../images/skills/mongodb.png";
import prisma from "../images/skills/prisma.png";
import figma from "../images/skills/figma.png";
import python from "../images/skills/python.png";

import twitter from "../images/projects/project7.png";
import carRental from "../images/projects/project6.png";
import stunsMaps from "../images/projects/project5.png";
import adminNarvaro from "../images/projects/project3.png";
import floristBlaklinten from "../images/projects/project1.png";
import pizzeriaRafiki from "../images/projects/project2.png";
import POS from "../images/projects/project4.png";

export const SKILL_DATA = [
  {
    name: "HTML5",
    url: html5,
  },
  {
    name: "CSS3",
    url: css3,
  },
  {
    name: "Javascript",
    url: javascript,
  },
  {
    name: "Sass",
    url: sass,
  },
  {
    name: "React",
    url: react,
  },
  {
    name: "Typescript",
    url: typescript,
  },
  {
    name: "NextJs",
    url: nextjs,
  },
  {
    name: "NodeJs",
    url: nodejs,
  },
  {
    name: "Mongodb",
    url: mongodb,
  },
  {
    name: "Prisma",
    url: prisma,
  },
  {
    name: "Figma",
    url: figma,
  },
  {
    name: "Python",
    url: python,
  },
];

export const PROJECT_DATA = [
  {
    name: "Twitter clone",
    desc: "This project is a twitter clone. The frontend is coded in NextJs using typescript and scss. The backend is written with prisma and mongodb",
    image: twitter,
    githubLink: "https://github.com/villegust/clone-twitter",
    websiteLink: "https://twitter-clone-seven-pi.vercel.app/",
  },
  {
    name: "Car rental project",
    desc: "This project is rental car website. It is made in react and scss",
    image: carRental,
    githubLink: "https://github.com/villegust/car-rental",
    websiteLink: "https://exclusive-rental-cars.vercel.app/",
  },
  {
    name: "STUNS Maps Project",
    desc: "This project is made for STUNS. It was made with NextJS with typescript and a MySQL database.",
    image: stunsMaps,
    websiteLink: "https://maps.stuns.se/",
  },
  {
    name: "Admin Närvaro",
    desc: "This project is made for NTI Uppsala. It was made with NextJS, TaildwindCSS, express and MongoDB.",
    image: adminNarvaro,
    githubLink: "https://github.com/NTIG-Uppsala/admin-narvaro",
    websiteLink: "https://narvaro.ntig.net/",
  },
  {
    name: "Florist Blåklinten",
    desc: "This project was made for a made up Florist company. It was made with HTML, CSS and JavaScript.",
    image: floristBlaklinten,
    githubLink: "https://github.com/NTIG-Uppsala/florist-blaklinten",
    websiteLink: "https://ntig-uppsala.github.io/florist-blaklinten/",
  },
  {
    name: "Pizzeria Rafiki",
    desc: "This project was made for a made up Pizzeria. It was made with HTML, CSS and JavaScript.",
    image: pizzeriaRafiki,
    githubLink: "https://github.com/NTIG-Uppsala/pizzeria-rafiki",
    websiteLink: "https://ntig-uppsala.github.io/pizzeria-rafiki/",
  },
  {
    name: "POS project",
    desc: "This project is made based on real POS systems. It was made with C#, .NET and the framework WinForms.",
    image: POS,
    githubLink: "https://github.com/NTIG-Uppsala/hotell-kassasystem",
  },
];
