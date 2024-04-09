import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import FloatingContact from "./FloatingContact";

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

  return (
    <>
      <div className="flex flex-col items-start mx-6 md:mx-12 md:px-[6rem] lg:px-[8rem] xl:mx-auto xl:px-[18rem] 2xl:px-[22rem] my-12 mb-[18rem] fade-in-nav">
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
          I am a Web Developer based in Vancouver with a passion for creating
          exceptional digital experiences. From sleek designs to robust
          functionality, I specialize in crafting websites that exceed
          expectations. Explore my portfolio to see how I can elevate your
          online presence.
        </p>
        <div className="flex justify-center gap-8 my-4 mx-auto md:mx-0">
          <a
            href="../../public/ian-pinili-resume.pdf"
            download="ian-pinili-resume.pdf"
            className="bg-primary hover:bg-[#494545] text-white font-bold py-2 px-4 text-center rounded-full md:py-4 md:px-6 duration-200 flex gap-4"
          >
            Download CV
            <Download className="hover:animate-bounce" />
          </a>
          <Link
            to="/about"
            className="bg-[black] hover:bg-[#494545] text-white font-bold py-2 px-4 text-center rounded-full md:py-4 md:px-6 duration-200"
          >
            Explore My Journey
          </Link>
        </div>
      </div>
      <FloatingContact />
    </>
  );
}

export default Home;
