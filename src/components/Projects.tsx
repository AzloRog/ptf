import ProjectCard from "./ProjectCard";

import colorGeneratorImage from "../images/color-generator.png";
import cocktailsImage from "../images/cocktails.png";
import hooBankImage from "../images/hoo-bank.png";
import sliderImage from "../images/slider.png";
import menuImage from "../images/menu.png";
import quizProjectImage from "../images/quiz-project.png";

const Projects = () => {
  return (
    <div className="mt-32 px-10 mb-6" id="projects">
      <h2 className="text-center text-4xl font-bold">My Projects</h2>
      <ul className="mt-24 grid grid-cols-5 gap-12 justify-items-center items-stretch">
        {projectsData.map((project) => (
          <li key={project.id}>
            <ProjectCard
              projectName={project.name}
              description={project.description}
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
    description: `Проект Quiz project является одним из последних моих проектов, 
    в данном проекте реализован полноценный конструктор-вопросник с возможностью гибкой настройки любой из карточек-вопросов, 
    а также сам тест на основе сгенерированных пользователем карточек.
    `,
    codeLink: "https://github.com/AzloRog/quiz-project",
    projectLink: "https://azlorog.github.io/quiz-project/",
  },
  {
    id: 1,
    name: "Color generator",
    image: colorGeneratorImage,
    description: `Проект реализован с использованием стороннего API, предоставляет возможность пользователю ввести искомый цвет в виде
    hex кода либо самим названием цвета на латинице, также можно менять шаг выводимых плиток для удобства.`,
    codeLink: "https://github.com/AzloRog/color-generator",
    projectLink: "https://azlorog.github.io/color-generator/",
  },
  {
    id: 2,
    name: "Cocktails",
    image: cocktailsImage,
    description: `Обычный проект показывающий навыки имплементации данных из стороннего API с react-router-dom библиотекой`,
    codeLink: "https://github.com/AzloRog/cocktails",
    projectLink: "https://azlorog.github.io/cocktails/",
  },
  {
    id: 3,
    name: "Hoo bank",
    image: hooBankImage,
    description: `Проект показывающий навыки верстки с использованием tailwindcss`,
    codeLink: "https://github.com/AzloRog/hoo-bank",
    projectLink: "https://azlorog.github.io/hoo-bank/",
  },
  {
    id: 4,
    name: "Slider",
    image: sliderImage,
    description: `Слайдер реализованный на ванильном React`,

    codeLink: "https://github.com/AzloRog/slider",
    projectLink: "https://azlorog.github.io/slider/",
  },
  {
    id: 5,
    name: "Menu",
    image: menuImage,
    description: `Базовый React сайт с выводом информации из стороннего API`,

    codeLink: "https://github.com/AzloRog/menu-app",
    projectLink: "https://azlorog.github.io/menu-app/",
  },
];
export default Projects;
