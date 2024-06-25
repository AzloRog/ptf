import ProjectCard from "./ProjectCard";

import colorGeneratorImage from "../images/color-generator.png";
import cocktailsImage from "../images/cocktails.png";
import hooBankImage from "../images/hoo-bank.png";
import sliderImage from "../images/slider.png";
import menuImage from "../images/menu.png";
import quizProjectImage from "../images/quiz-project.png";

const Projects = () => {
  return (
    <div className="mt-32 mb-6" id="projects">
      <h2 className="text-center text-4xl font-bold">My Projects</h2>
      <ul className="mt-24 grid grid-cols-3 gap-12 justify-items-center">
        {projectsData.map((project) => (
          <li key={project.id}>
            <ProjectCard
              projectName={project.name}
              image={project.image}
              githubCodeLink={project.codeLink}
              githubProjectLink={project.projectLink}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const projectsData = [
  {
    id: 0,
    name: "Quiz project",
    image: quizProjectImage,
    codeLink: "https://github.com/AzloRog/quiz-project",
    projectLink: "https://azlorog.github.io/quiz-project/",
  },
  {
    id: 0,
    name: "Color generator",
    image: colorGeneratorImage,
    codeLink: "https://github.com/AzloRog/color-generator",
    projectLink: "https://azlorog.github.io/color-generator/",
  },
  {
    id: 1,
    name: "Cocktails",
    image: cocktailsImage,
    codeLink: "https://github.com/AzloRog/cocktails",
    projectLink: "https://azlorog.github.io/cocktails/",
  },
  {
    id: 2,
    name: "Hoo bank",
    image: hooBankImage,
    codeLink: "https://github.com/AzloRog/hoo-bank",
    projectLink: "https://azlorog.github.io/hoo-bank/",
  },
  {
    id: 3,
    name: "Slider",
    image: sliderImage,
    codeLink: "https://github.com/AzloRog/slider",
    projectLink: "https://azlorog.github.io/slider/",
  },
  {
    id: 4,
    name: "Menu",
    image: menuImage,
    codeLink: "https://github.com/AzloRog/menu-app",
    projectLink: "https://azlorog.github.io/menu-app/",
  },
];
export default Projects;
