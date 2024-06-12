interface Props {
  projectName: string;
  image: any;
  githubCodeLink: string;
  githubProjectLink: string;
}
const ProjectCard = ({
  projectName,
  image,
  githubCodeLink,
  githubProjectLink,
}: Props) => {
  return (
    <div className="py-12 bg-gray-500 max-w-[520px] rounded-lg shadow-xl shadow-black">
      <h3 className="px-4 text-4xl font-bold ">{projectName}</h3>
      <a className="block" target="_blank" href={githubProjectLink}>
        <img
          className=" w-full mt-10"
          src={image}
          alt={projectName}
          width={120}
          height={120}
        />
      </a>

      <div className="mt-12 px-4 flex justify-center items-center gap-8">
        <a
          href={githubCodeLink}
          target="_blank"
          className="bg-stone-500 px-6 py-2 rounded-xl shadow-xl text-lg"
        >
          Github
        </a>
        <a
          className="bg-stone-500 px-6 py-2 rounded-xl shadow-xl text-lg"
          target="_blank"
          href={githubProjectLink}
        >
          Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
