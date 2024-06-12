import Card from "./Card";

const AboutMe = () => {
  return (
    <div className="pt-12 ">
      <h2 className="text-center text-4xl font-bold">My Stacks</h2>

      <div className="mt-16 grid grid-flow-row sm:grid-cols-2 gap-24 ">
        <Card title="Main Stack" data={stackData} />
        <Card title="Additional Technologies" data={additStackData} />
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
  { id: 4, name: "Redux js" },
  { id: 5, name: "Redux toolkit" },
  { id: 6, name: "Git" },
  { id: 7, name: "MongoDB" },
];

const additStackData = [
  { id: 0, name: "BEM methodology" },
  { id: 1, name: "SASS" },
  { id: 2, name: "SCSS" },
  { id: 3, name: "Bootstrap" },
];
