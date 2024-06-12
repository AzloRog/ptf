import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <main className="flex flex-col justify-center items-center text-white ">
        <section className="w-full bg-black-100 px-5 sm:px-10">
          <Hero />
        </section>
        <section className="w-full bg-black-100 px-5 sm:px-10">
          <AboutMe />
        </section>
        <section className="w-full bg-black-100 px-5 sm:px-10">
          <Projects />
        </section>
      </main>
    </>
  );
}

export default App;
