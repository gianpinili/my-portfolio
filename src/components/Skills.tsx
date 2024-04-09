import Tailwind from "/tailwind.png";
import React from "/react.png";
import Javascript from "/javascript.png";
import HTML from "/html.png";
import CSS from "/css.png";
import Node from "/node.png";
import Typescript from "/typescript.svg";
import MySQL from "/mysql.png";
import Knex from "/knex.png";
import Express from "/express.png";
import Github from "/github.png";
import Git from "/git.png";

function Skills() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-3xl mx-6 mb-8 font-bold border-b-2 border-active pb-4 lg:text-4xl max-w-[5rem] lg:max-w-[7rem] xl:text-5xl xl:max-w-[8rem]">
          Skills
        </h1>
        <p className="mx-6 mb-14 text-center text-[1.2rem]">
          - Technologies I've worked with -
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 mx-6 bg-[#e1e1e1]">
          <div className="shadow-md shadow-[#7a7a7a] hover:shadow-[#f0b985] hover:scale-110 duration-500 pt-4">
            <img src={HTML} className="w-20 mx-auto" alt="HTML Icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#7a7a7a] hover:shadow-[#b0c6e2] hover:scale-110 duration-500 pt-4">
            <img src={CSS} className="w-20 mx-auto" alt="CSS Icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#7a7a7a] hover:shadow-[#f0f184] hover:scale-110 duration-500 pt-4">
            <img
              src={Javascript}
              className="w-20 mx-auto"
              alt="JavaScript Icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#7a7a7a] hover:shadow-[#74d4d4] hover:scale-110 duration-500 pt-4">
            <img src={React} className="w-20 mx-auto" alt="React Icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#7a7a7a] hover:shadow-[#6d9dd7] hover:scale-110 duration-500 pt-4">
            <img
              src={Typescript}
              className="w-20 mx-auto"
              alt="TypeScript Icon"
            />
            <p className="my-4">TypeScript</p>
          </div>
          <div className="shadow-md shadow-[#7a7a7a] hover:shadow-[#61bdba] hover:scale-110 duration-500 pt-4">
            <img src={Tailwind} className="w-20 mx-auto" alt="Tailwind Icon" />
            <p className="my-4">Tailwind CSS</p>
          </div>
          <div className="shadow-md shadow-[#7a7a7a] hover:shadow-[#7bc96f] hover:scale-110 duration-500 pt-4">
            <img src={Node} className="w-20 mx-auto" alt="Node Icon" />
            <p className="my-4">Node.js</p>
          </div>
          <div className="shadow-md shadow-[#7a7a7a] hover:shadow-[#63b6b0] hover:scale-110 duration-500 pt-4">
            <img src={MySQL} className="w-20 mx-auto" alt="MySQL Icon" />
            <p className="my-4">MySQL</p>
          </div>
          <div className="shadow-md shadow-[#7a7a7a] hover:shadow-[#160e04] hover:scale-110 duration-500 pt-4">
            <img
              src={Express}
              className="w-20 mx-auto mt-4 mb-6"
              alt="Express Icon"
            />
            <p className="my-8">Express.js</p>
          </div>
          <div className="shadow-md shadow-[#7a7a7a] hover:shadow-[#fcad71] hover:scale-110 duration-500 pt-4">
            <img src={Knex} className="w-20 mx-auto" alt="Knex Icon" />
            <p className="my-4">Knex.js</p>
          </div>
          <div className="shadow-md shadow-[#7a7a7a] hover:shadow-[#0f0f0f] hover:scale-110 duration-500 pt-4">
            <img src={Github} className="w-20 mx-auto" alt="Github Icon" />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-md shadow-[#7a7a7a] hover:shadow-[#fcad71] hover:scale-110 duration-500 pt-4">
            <img src={Git} className="w-20 mx-auto" alt="Git Icon" />
            <p className="my-4">Git</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
