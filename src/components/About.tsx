import FloatingContact from "./FloatingContact";
import Skills from "./Skills";
import Headshot from "/headshot.png";
import Golf from "/golf.jpg";
import Hockey from "/hockey.jpg";
import Nala from "/nala.jpg";

function About() {
  return (
    <>
      <div className="fade-in-nav md:mx-12 md:p-0 md:mb-0 lg:mx-24 xl:mx-32 2xl:mx-48">
        <div className="max-w-[12rem] lg:max-w-[14rem] xl:max-w-[17rem]">
          <h1 className="text-3xl mx-6 mb-8 font-bold border-b-2 border-active pb-4 lg:mb-0 lg:text-4xl xl:text-5xl">
            About me
          </h1>
        </div>
        <div className="mx-6 mb-14 items-start md:flex md:flex-row-reverse md:justify-center lg:items-center">
          <div className="float-right md:float-none md:w-1/2 md:flex md:justify-center">
            <img
              src={Headshot}
              className="w-[10rem] h-[10rem] object-cover rounded-full m-1 mb-2 md:w-[15rem] md:h-[15rem] ml-8 lg:w-[20rem] lg:h-[20rem] xl:w-[22rem] xl:h-[22rem] 2xl:w-[24rem] 2xl:h-[24rem]"
              alt="Headshot"
            />
          </div>
          <div className="md:w-1/2 lg:text-xl xl:text-[1.4rem] tracking-wide xl:tracking-widest lg:mt-6">
            I am a Full Stack Web Developer situated in Vancouver, drawing upon
            my roots in the automotive industry as a foundation for my
            transition into software development. My aim is to seamlessly blend
            the skills acquired in my previous field with the intricacies of
            coding to ensure optimal user experiences in all my projects. Open
            to collaborative opportunities, I approach each venture with
            enthusiasm and a steadfast commitment to growth, aiming to make a
            meaningful impact through continuous learning and innovative
            contributions.
          </div>
        </div>
        <Skills />
        <div className="mx-6 h-[1px] bg-active flex justify-center relative my-20">
          <div className="w-[20px] h-[20px] bg-primary absolute top-[-10px] rounded-full"></div>
        </div>
        <div className="mb-16">
          <div className="max-w-[25rem] lg:max-w-[28rem]">
            <h1 className="text-3xl mx-6 mb-8 font-bold border-b-2 border-active pb-4 lg:text-4xl">
              A little more about me...
            </h1>
          </div>
          <div className="hidden md:flex justify-around mb-6 mx-6 2xl:gap-6">
            <img
              src={Hockey}
              className="w-[13rem] object-cover rounded-lg lg:w-[16rem] xl:w-[20rem] 2xl:w-[25rem]"
              alt=""
            />
            <img
              src={Nala}
              className="w-[13rem] object-cover rounded-lg lg:w-[16rem] xl:w-[20rem] 2xl:w-[25rem]"
              alt=""
            />
            <img
              src={Golf}
              className="w-[13rem] object-cover rounded-lg lg:w-[16rem] xl:w-[20rem] 2xl:w-[25rem]"
              alt=""
            />
          </div>
          <p className="mx-6 lg:text-[1.1rem] lg:mx-12 xl:mx-16 2xl:mx-24">
            Outside of the digital realm, I find joy in engaging in various
            sports activities, including hockey, golf, and snowboarding, among
            others. These pursuits not only provide physical exercise but also
            offer moments of exhilaration and camaraderie. Additionally, my life
            is enriched by the presence of Nala, my beloved black Labrador. Her
            unwavering loyalty and affection bring boundless happiness, serving
            as a constant source of warmth and companionship in my daily
            adventures.{" "}
            {/* <span className="text-active">
              (Reach out to me and you can play with my dog)
            </span> */}
          </p>
        </div>
      </div>
      <FloatingContact />
    </>
  );
}

export default About;
