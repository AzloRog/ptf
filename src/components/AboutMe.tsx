import Card from "./Card";

const AboutMe = () => {
  return (
    <div className="pt-12 ">
      <h2 className="text-center text-4xl font-bold">Мой стек</h2>

      <div className="mt-16 grid grid-flow-row sm:grid-cols-2 gap-24 ">
        <Card title="Front-end стек" data={stackData} />
        <Card title="Back-end стек" data={additStackData} />
      </div>
    </div>
  );
};

export default AboutMe;

const stackData = [
  { id: 0, name: "Vite" },
  { id: 1, name: "React" },
  { id: 2, name: "Typescript" },
  { id: 3, name: "Tailwindcss" },
  { id: 4, name: "Material UI" },
  { id: 5, name: "Bootstrap" },

  { id: 6, name: "Redux js" },
  { id: 7, name: "Redux toolkit" },
  { id: 8, name: "Git" },
  { id: 9, name: "MongoDB" },

  { id: 10, name: "BEM methodology" },
  { id: 11, name: "SASS" },
  { id: 12, name: "SCSS" },
];

const additStackData = [
  { id: 0, name: "Typescript" },
  { id: 1, name: "Express js" },
  { id: 2, name: "C#" },
  { id: 3, name: "Asp.net core" },
  { id: 4, name: "Git" },
];
