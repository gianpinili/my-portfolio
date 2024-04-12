import FloatingContact from "./FloatingContact";
import TravelSite from "/travelsite.png";
import CoffeeShop from "/coffeeshop.png";
import BandSite from "/bandsite.jpeg";
import BrainFlix from "/brainflix.jpeg";
import Hackathon from "/hackathon.jpeg";
import Capstone from "/capstone.jpeg";
function Projects() {
  return (
    <>
      <div className="mx-8 mb-[6rem] fade-in-nav lg:mx-[8rem] xl:mx-[10rem]">
        <h1 className="text-3xl mx-6 mb-8 font-bold border-b-2 border-active pb-4 lg:text-4xl max-w-[8rem] lg:max-w-[9rem] xl:text-5xl xl:max-w-[12rem]">
          Projects
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 my-10 fade-in">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={CoffeeShop}
              alt="Coffee Shop Picture"
              className="rounded-md duration-200 hover:scale-105 object-cover w-[100%]"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Demo
              </button>
              <a
                href="https://github.com/gianpinili/coffeeshop"
                target="_blank"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
              >
                Code
              </a>
            </div>
            <div className="mx-20 h-[1px] bg-active flex justify-center relative my-4">
              <div className="text-[.8rem] uppercase text-active absolute top-[-20px]">
                Coffee Shop
              </div>
            </div>
            <p className="text-center text-[.8rem]  opacity-100 p-2 rounded-md text-active">
              A simple HTML & CSS website highlighting the products offered by
              the company.
            </p>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={TravelSite}
              alt="Travel Site Picture"
              className="rounded-md duration-200 hover:scale-105 object-center w-[100%]"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Demo
              </button>
              <a
                href="https://github.com/gianpinili/travel-site"
                target="_blank"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
              >
                Code
              </a>
            </div>
            <div className="mx-20 h-[1px] bg-active flex justify-center relative my-4">
              <div className="text-[.8rem] uppercase text-active absolute top-[-20px]">
                Travel Site
              </div>
            </div>
            <p className="text-center text-[.8rem]  opacity-100 p-2 rounded-md text-active">
              Leveraging HTML alongside SCSS for dynamic web design. Designed to
              display various travel destinations.
            </p>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={BandSite}
              alt="Band Site Picture"
              className="rounded-md duration-200 hover:scale-105 object-cover w-[100%]"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Demo
              </button>
              <a
                href="https://github.com/gianpinili/band-site"
                target="_blank"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
              >
                Code
              </a>
            </div>
            <div className="mx-20 h-[1px] bg-active flex justify-center relative my-4">
              <div className="text-[.8rem] uppercase text-active absolute top-[-20px]">
                Band Site
              </div>
            </div>
            <p className="text-center text-[.8rem]  opacity-100 p-2 rounded-md text-active">
              Band information is seamlessly showcased with integrated API
              functionality, facilitating user engagement and interaction.
            </p>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={Hackathon}
              alt="Hogwarts Hackathon Picture"
              className="rounded-md duration-200 hover:scale-105 object-cover w-[100%]"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Demo
              </button>
              <a
                href="https://github.com/gianpinili/hackathon-2"
                target="_blank"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
              >
                Code
              </a>
            </div>
            <div className="mx-20 h-[1px] bg-active flex justify-center relative my-4">
              <div className="text-[.8rem] uppercase text-active absolute top-[-20px]">
                Hackathon
              </div>
            </div>
            <p className="text-center text-[.8rem]  opacity-100 p-2 rounded-md text-active">
              Collaborated with a team to develop a website aimed at honing API
              utilization skills.
            </p>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={BrainFlix}
              alt="BrainFlix Picture"
              className="rounded-md duration-200 hover:scale-105 object-cover w-[100%]"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Demo
              </button>
              <a
                href="https://github.com/gianpinili/brainflix"
                target="_blank"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
              >
                Code
              </a>
            </div>
            <div className="mx-20 h-[1px] bg-active flex justify-center relative my-4">
              <div className="text-[.8rem] uppercase text-active absolute top-[-20px]">
                BrainFlix
              </div>
            </div>
            <p className="text-center text-[.8rem]  opacity-100 p-2 rounded-md text-active">
              An extensive CRUD web application with full-stack capabilities,
              showcasing seamless data management and manipulation.
            </p>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={Capstone}
              alt="Travel Site Picture"
              className="rounded-md duration-200 hover:scale-105 object-cover w-[100%]"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Demo
              </button>
              <a
                href="https://github.com/gianpinili/manuspec-capstone"
                target="_blank"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
              >
                Code
              </a>
            </div>
            <div className="mx-20 h-[1px] bg-active flex justify-center relative my-4">
              <div className="text-[.8rem] uppercase text-active absolute top-[-20px]">
                ManuSpec
              </div>
            </div>
            <p className="text-center text-[.8rem]  opacity-100 p-2 rounded-md text-active">
              Digitize automotive inspection reports to streamline the process
              and enhance efficiency within the automotive industry.
            </p>
          </div>
        </div>
      </div>
      <FloatingContact />
    </>
  );
}

export default Projects;
