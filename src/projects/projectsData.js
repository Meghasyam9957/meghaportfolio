import projectOne from "../assets/project-1.jpg";
import projectTwo from "../assets/project-2.jpeg";
import projectThree from "../assets/project-3.jpeg";

const projects = {
  1: {
    title: "SoMe Platform",
    image: projectOne,
    description: (
      <>
        <p>
          Working on a website with MERN full stack.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
  2: {
    title: "Cloud based ECS Project",
    image: projectTwo,
    description: (
      <>
        <p>
        "Wireless Sensor Network for Urban Air Quality Monitoring and Gas Leakage Prevention IOT( Cloud Based )"
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
  3: {
    title: "ECS Project using arduino",
    image: projectThree,
    description: (
      <>
        <p>
        problem solving using arduino
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
};

export default projects;
