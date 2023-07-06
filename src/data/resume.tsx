import Email from "../assets/icons/resume/contact/Email.svg";
import Phone from "../assets/icons/resume/contact/Phone.svg";
import City from "../assets/icons/resume/contact/City.svg";
export const skillsList = [
  {
    title: "Front-end stack",
    skills: ["JavaScript", "TypeScript", "HTML/CSS", "React", "Redux"],
  },
  {
    title: "Back-end stack",
    skills: ["Python", "Django", "FastAPI", "aiohttp"],
  },
  {
    title: "Data",
    skills: ["PostgreSQL", "Redis", "MongoDB"],
  },
  {
    title: "Development",
    skills: ["GIT", "Docker", "Nginx"],
  },
];
export const addresses = [
  {
    name: "Rostov-on-Don",
    url: "https://goo.gl/maps/1omRBkRkp5ek3C8d6",
    img: {
      src: City,
      alt: "Location",
    },
  },
  {
    name: "maksimkalin17@gmail.com",
    url: "mailto:maksimkalin17@gmail.com",
    img: {
      src: Email,
      alt: " Email",
    },
  },
  {
    name: "+7 (938) 108-11-08",
    url: "tel:+79381081108",
    img: {
      src: Phone,
      alt: "Phone",
    },
  },
];
