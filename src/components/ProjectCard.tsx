interface Props {
  projectName: string;
  image: any;
  description?: string;
  githubCodeLink: string;
  githubProjectLink: string;
}
const ProjectCard = ({
  projectName,
  image,
  description,
  githubCodeLink,
  githubProjectLink,
}: Props) => {
  return (
    <div className="flex flex-col pb-3 rounded-t-md rounded-b-lg project-card-bg overflow-hidden min-h-full">
      <a
        className="block border-gray-300 border-b-2"
        target="_blank"
        href={githubProjectLink}
      >
        <img
          className=" w-full "
          src={image}
          alt={projectName}
          width={120}
          height={120}
        />
      </a>
      <h3 className="mt-4 px-4 text-2xl text-black font-semibold">
        {projectName}
      </h3>
      <p className="flex-1 mt-3 px-4 text-gray-600 text-lg ">{description}</p>
      <div className="mt-6 px-4 flex  items-center gap-2">
        <a
          href={githubCodeLink}
          target="_blank"
          className="text-blue-800 px-2 py-1 hover:bg-zinc-300 active:bg-zinc-400 font-semibold text-lg rounded-lg transition-all"
        >
          Github
        </a>
        <a
          className="text-blue-800 px-2 py-1 hover:bg-zinc-300 active:bg-zinc-400  font-semibold text-lg rounded-lg transition-all"
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
