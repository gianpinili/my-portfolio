import React, { useState } from "react";

function Contacts() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !number || !message) {
      setErrorMessage("Please fill out all fields");
      return;
    }

    // Form submission logic here
    console.log("Form submitted:", { name, email, number, message });

    // Reset fields after submission
    setName("");
    setEmail("");
    setNumber("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <div className="my-0 mx-8 md:my-[-2rem] md:mx-12 md:px-[6rem] mb-[5vh] md:mb-[10vh] lg:my-[-2rem] lg:mb-[8vh] lg:px-[8rem] xl:px-[10rem] xl:my-[-3rem] xl:mb-[7vh] 2xl:px-[18rem] fade-in-nav">
      <h1 className="text-3xl font-bold text-center mb-8 lg:text-[3.5rem] lg:mb-10 xl:text-[4rem] xl:mb-16">
        Connect with me
      </h1>
      <div className="flex justify-between mb-8 md:justify-around">
        <a
          href="mailto:gianpinili@gmail.com"
          className="text-[.8rem] uppercase text-active hover:text-[.85rem] duration-200 hover:text-primary"
        >
          Send me an Email
        </a>
        <a
          href="https://www.linkedin.com/in/ianpinili/"
          target="_blank"
          className="text-[.8rem] uppercase text-active hover:text-[.85rem] duration-200 hover:text-primary"
        >
          Connect on LinkedIn
        </a>
      </div>
      <div className="w-full h-[1px] bg-active flex justify-center relative mb-12">
        <div className="w-[20px] h-[20px] bg-primary absolute top-[-10px] rounded-full"></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 xl:px-[6rem]"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">
            What's your name? <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-slate-400 p-2 bg-opacity-10 rounded-md focus:outline-none focus:border-primary focus:border-solid focus:border-[1px]"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">
            What's your email? <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-slate-400 p-2 bg-opacity-10 rounded-md focus:outline-none  focus:border-primary focus:border-solid focus:border-[1px]"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="number">
            What's your number? <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-slate-400 p-2 bg-opacity-10 rounded-md focus:outline-none  focus:border-primary focus:border-solid focus:border-[1px]"
            type="tel"
            name="number"
            id="number"
            placeholder="Enter your number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message">
            Let's chat! <span className="text-red-500">*</span>
          </label>
          <textarea
            className="bg-slate-400 p-2 bg-opacity-10 rounded-md resize-none h-[8rem] focus:outline-none  focus:border-primary focus:border-solid focus:border-[1px]"
            name="message"
            id="message"
            placeholder="Enter your message here!"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button className="bg-black rounded-md text-white py-2 px-4 uppercase text-[.8rem] hover:opacity-[.7] duration-300 hover:animate-pulse hover:scale-110">
            Submit
          </button>
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default Contacts;
