import FloatingContact from "./FloatingContact";
import TravelSite from "/travelsite.png";
import CoffeeShop from "/coffeeshop.png";
import BandSite from "/bandsite.jpeg";
import BrainFlix from "/brainflix.jpeg";
import Hackathon from "/hackathon.jpeg";
import Capstone from "/capstone.jpeg";
import Tattoo from "/tattoo.png";
import THS from "/ths.jpeg";
import THSOpen from "/thsopen.png";
import JD from "/jd.png";
import Ace from "/ace.png";
import Auto from "/auto.jpeg";

const projects = [
  {
    img: CoffeeShop,
    alt: "Coffee Shop Picture",
    href: "https://github.com/gianpinili/coffeeshop",
    title: "Coffee Shop",
    description:
      "A simple HTML & CSS website highlighting the products offered by the company.",
  },
  {
    img: TravelSite,
    alt: "Travel Site Picture",
    href: "https://github.com/gianpinili/travel-site",
    title: "Travel Site",
    description:
      "Leveraging HTML alongside SCSS for dynamic web design. Designed to display various travel destinations.",
  },
  {
    img: BandSite,
    alt: "Band Site Picture",
    href: "https://github.com/gianpinili/band-site",
    title: "Band Site",
    description:
      "Band information is seamlessly showcased with integrated API functionality, facilitating user engagement and interaction.",
  },
  {
    img: Hackathon,
    alt: "Hogwarts Hackathon Picture",
    href: "https://github.com/gianpinili/hackathon-2",
    title: "Hackathon",
    description:
      "Collaborated with a team to develop a website aimed at honing API utilization skills.",
  },
  {
    img: BrainFlix,
    alt: "BrainFlix Picture",
    href: "https://github.com/gianpinili/brainflix",
    title: "BrainFlix",
    description:
      "An extensive CRUD web application with full-stack capabilities, showcasing seamless data management and manipulation.",
  },
  {
    img: Capstone,
    alt: "Capstone Picture",
    href: "https://github.com/gianpinili/manuspec-capstone",
    title: "ManuSpec",
    description:
      "Digitize automotive inspection reports to streamline the process and enhance efficiency within the automotive industry.",
  },
  {
    img: Tattoo,
    alt: "Tattoo Template Picture",
    href: "https://github.com/gianpinili/tattoo-template",
    title: "Tattoo Template",
    description:
      "Simple static website template for tattoo enthusiasts. Practicing new technologies and libraries to improve my skills and experience.",
    liveLink: "https://tattoo-template.netlify.app/",
  },
  {
    img: THS,
    alt: "THS Picture",
    href: "https://www.thehockeyshop.com/",
    title: "The Hockey Shop",
    description:
      "Built multiple front-end components to improve user experience and enhance functionality. Integrated interactive elements with animations and transitions to add dynamism to the user interface.",
    liveLink: "https://www.thehockeyshop.com/",
  },
  {
    img: THSOpen,
    alt: "THS Open Picture",
    href: "https://thsopen.com",
    title: "THS Open",
    description:
      "Collaborated with a designer to custom build a static website for a golf tournament in support of the Canucks Autism Network. Implemented responsive design and optimized loading times to ensure a smooth user experience.",
    liveLink: "https://thsopen.com",
  },
  {
    img: Auto,
    alt: "Auto Picture",
    href: "https://automotive-shop-ten.vercel.app/",
    title: "Automotive Shop Template",
    description:
      "A simple static website template for automotive enthusiasts. Practicing new technologies and libraries to improve my skills and experience. Created a template for future projects. Separated components to allow for reusability.",
    liveLink: "https://automotive-shop-ten.vercel.app/",
  },
  {
    img: JD,
    alt: "JD Sports Canada Picture",
    href: "https://www.jdsports.ca/",
    title: "JD Sports Canada",
    description:
      "Enhanced the e-commerce website, improving user experience and merchandising strategies. Developed custom UI components to better align with business goals and increase user engagement",
    liveLink: "https://www.jdsports.ca/",
  },
  {
    img: Ace,
    alt: "Ace Motel Picture",
    href: "https://princetonacemotel.com/",
    title: "Princeton Ace Motel",
    description:
      "Learned and implemented new technologies to revamp the website and improve user experience. Collaborated closely with the motel's management to integrate online booking functionalities and promote special offers, enhancing overall user satisfaction and driving revenue growth.",
    liveLink: "https://princetonacemotel.com/",
  },
];

function Projects() {
  return (
    <>
      <div className="mx-8 mb-[6rem] fade-in-nav lg:mx-[8rem] xl:mx-[10rem]">
        <h1 className="text-3xl mx-6 mb-8 font-bold border-b-2 border-active pb-4 lg:text-4xl max-w-[8rem] lg:max-w-[9rem] xl:text-5xl xl:max-w-[12rem]">
          Projects
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 my-10 fade-in">
          {projects
            .slice()
            .reverse()
            .map((project, index) => (
              <div key={index} className="shadow-md shadow-gray-600 rounded-lg">
                <a href={project.href} target="_blank">
                  <img
                    src={project.img}
                    alt={project.alt}
                    className="rounded-md duration-200 hover:scale-105 object-cover w-[100%] hover:opacity-75 max-h-[14rem]"
                  />
                </a>
                <div className="mt-8 mx-20 h-[1px] bg-active flex justify-center relative">
                  <div className="text-[.8rem] uppercase text-active absolute top-[-20px]">
                    {project.title}
                  </div>
                </div>
                <p className="text-center text-[.8rem] opacity-100 p-2 rounded-md text-active">
                  {project.description}
                </p>
                {project.liveLink && (
                  <a
                    className="text-center text-[.8rem] opacity-100 p-2 rounded-md text-active"
                    target="_blank"
                    href={project.liveLink}>
                    <p>- View Website -</p>
                  </a>
                )}
              </div>
            ))}
        </div>
      </div>
      <FloatingContact />
    </>
  );
}

export default Projects;
