import { useEffect, useState, useMemo, useRef } from "react";
import { Download, ChevronDown, ChevronUp } from "lucide-react";
import FloatingContact from "./FloatingContact";
import About from "./About";
import Projects from "./Projects";
import Contacts from "./Contacts";

function Home() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const words = useMemo(
    () => ["Web Developer", "Full Stack Developer", "Software Developer"],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => prevText + words[index].charAt(prevText.length));
      if (text === words[index]) {
        setIndex((prevIndex) =>
          prevIndex === words.length - 1 ? 0 : prevIndex + 1
        );
        setText("");
      }
    }, 160);

    return () => clearInterval(interval);
  }, [text, index, words]);

  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sections = [aboutRef, projectRef, contactRef];

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to scroll to the next section downwards
  const scrollToNextSection = () => {
    const currentPosition = window.pageYOffset;

    // Find the next section below the current position
    const nextSectionIndex = sections.findIndex(
      (section) =>
        section.current?.offsetTop &&
        section.current.offsetTop > currentPosition
    );

    // If next section found, scroll to it
    if (nextSectionIndex !== -1) {
      sections[nextSectionIndex].current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col items-start mx-6 md:mx-12 md:px-[6rem] lg:px-[8rem] xl:mx-auto xl:px-[18rem] 2xl:px-[22rem] my-12 mb-[25rem] fade-in-nav">
        <p className="text-[.8rem] text-primary md:text-base xl:text-xl">
          Hi, my name is
        </p>
        <p className="text-3xl mt-1 mb-0 md:my-2 font-bold md:text-5xl xl:text-7xl">
          Ian Pinili
        </p>
        <p className="text-3xl text-[#494545] font-bold md:text-5xl xl:text-7xl">
          {text}&nbsp;
        </p>
        <p className="text-[1rem] mb-5 mt-2 md:my-2  md:mx-0 xl:text-xl">
          Currently, working as a Web Merchandiser at JD Sports Canada, focusing
          on the front-end of our e-commerce platform. On the side, I build and
          revamp websites for individuals and companies, ensuring visually
          appealing designs and smooth functionality. Check out my portfolio to
          see how I can elevate your online presence.
        </p>
        <div className="flex justify-center gap-8 my-4 mx-auto md:mx-0 flex-wrap">
          <a
            href="../../public/ian-pinili-resume.pdf"
            download="ian-pinili-resume.pdf"
            className="bg-primary hover:bg-[#494545] text-white font-bold py-2 px-4 text-center rounded-full md:py-4 md:px-6 duration-200 flex gap-4 hover:opacity-70">
            Download CV
            <Download className="hover:animate-bounce" />
          </a>
          <button
            onClick={scrollToNextSection}
            className="bg-[black] hover:bg-[#494545] text-white font-bold py-2 px-4 text-center rounded-full md:py-4 md:px-6 duration-200">
            About Me
          </button>
          {/* <button
            onClick={scrollToNextSection}
            className="bg-active hover:bg-primary text-white font-bold py-2 px-4 text-center rounded-full md:py-4 md:px-6 duration-200 hover:opacity-70"
          >
            Scroll Down
          </button> */}
        </div>
      </div>
      <div ref={aboutRef} className="home__about">
        <About />
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
      <div ref={contactRef} className="home__contact">
        <Contacts />
      </div>
      <div
        className="hidden md:inline fixed right-[2.5rem] bottom-[32rem] cursor-pointer"
        onClick={scrollToTop}>
        <ChevronUp />
      </div>
      <div
        className="hidden md:inline fixed right-[2.5rem] bottom-[30rem] cursor-pointer"
        onClick={scrollToNextSection}>
        <ChevronDown />
      </div>
      <FloatingContact />
    </>
  );
}

export default Home;
