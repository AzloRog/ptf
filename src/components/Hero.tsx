const Hero = () => {
  return (
    <div className="pt-[150px] pb-[64px] md:pb-[106px] text-center flex flex-col items-center bg-black-100">
      <p className="uppercase font-light tracking-[4px]">
        Динамическая веб магия React
      </p>
      <h1 className="pt-[20px] font-bold text-5xl max-w-[940px]">
        Динамические веб проекты благодаря 'реактивной'{" "}
        <span className="text-[#CBACF9]">Библиотеке React</span>
      </h1>
      <p className="mt-6">Здравствуйте, я Даниил, frontend разработчик React</p>
      <a
        href="#projects"
        className="mt-6 p-[2px]  btn-gradient rounded-full overflow-hidden h-12 block"
      >
        <span className="px-6 bg-black-100  relative z-1 rounded-full w-full h-full flex items-center justify-center">
          Посмотреть мои работы
        </span>
      </a>
    </div>
  );
};

export default Hero;
